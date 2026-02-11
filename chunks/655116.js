"use strict";
let r, i, a;
n.d(t, { A: () => eU }), n(321073), n(938796);
var s = n(735438),
    o = n.n(s),
    l = n(158390),
    u = n(311907),
    c = n(52133),
    d = n(451988),
    _ = n(73153),
    f = n(717558),
    h = n(573648),
    p = n(504337),
    g = n(626584),
    E = n(15285),
    A = n(961350),
    I = n(962173),
    T = n(885576),
    y = n(290863),
    S = n(485296),
    v = n(977997),
    C = n(954571),
    b = n(139675),
    N = n(927813),
    R = n(403362),
    O = n(107750),
    D = n(272984),
    L = n(652215);
let w = h.A.get(L.fg2.SPOTIFY),
    x = "wss://dealer.spotify.com/?access_token=",
    P = "hm://pusher/v1/connections/",
    M = 30 * N.A.Millis.SECOND,
    k = 30 * N.A.Millis.SECOND,
    U = 100,
    G = 5 * N.A.Millis.MINUTE,
    F = 5 * N.A.Millis.SECOND,
    V = 1.5 * N.A.Millis.SECOND,
    B = "Computer",
    j = 5,
    H = +N.A.Millis.MINUTE,
    Y = 3 * N.A.Millis.SECOND,
    W = 128,
    K = "message",
    $ = "ping",
    z = "single",
    q = new g.A("Spotify"),
    X = new d.Ep(),
    Z = new d.Ep(),
    Q = new d.Ep(),
    J = new d.Ep(),
    ee = new d.Ep(),
    et = {},
    en = {},
    er = {},
    ei = !1,
    ea = null;
function es() {
    for (let e in et) {
        let t = et[e];
        if (!t.connected || null == en[e]) continue;
        let n = en[e].find((e) => e.is_active);
        if (null != n) return { socket: t, device: n };
    }
}
function eo(e, t) {
    let n = Date.now(),
        r = null != e ? e.startTime : 0,
        i = n - t;
    return Math.abs(i - r) > V ? i : r;
}
function el(e) {
    _.h.dispatch({
        type: "SPOTIFY_PLAYER_STATE",
        accountId: e,
        track: null,
        volumePercent: 0,
        isPlaying: !1,
        repeat: !1,
        position: 0,
        context: null,
    });
}
function eu(e) {
    return y.A.findActivity(e, (e) => null != e.party && null != e.party.id && (0, D.pH)(e.party.id));
}
let ec = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class ed {
    accessToken;
    accountId;
    connectionId;
    isPremium;
    pingInterval;
    backoff;
    socket;
    _requestedDisconnect = !1;
    _requestedConnect = !1;
    constructor(e, t) {
        (this.accountId = e),
            (this.accessToken = t),
            (this.pingInterval = new d.IX()),
            (this.backoff = new l.A(void 0, H)),
            this.connect();
    }
    get connected() {
        return null != this.socket && ec.has(this.socket.readyState);
    }
    connect() {
        this.connected ||
            this._requestedConnect ||
            (q.info("WS Connecting"),
            (this._requestedDisconnect = !1),
            (this._requestedConnect = !0),
            eP(this.accountId, this.accessToken)
                .then(() => {
                    (this._requestedConnect = !1),
                        (this.socket = new WebSocket(`${x}${this.accessToken}`)),
                        (this.socket.onopen = this.handleOpen.bind(this)),
                        (this.socket.onmessage = this.handleMessage.bind(this)),
                        (this.socket.onclose = this.socket.onerror = this.handleClose.bind(this));
                })
                .catch((e) => {
                    q.error(e), (this._requestedConnect = !1), this.handleClose();
                }));
    }
    disconnect() {
        (this._requestedDisconnect = !0), this.backoff.cancel();
        try {
            this.socket?.close();
        } catch (e) {}
    }
    ping() {
        this.connected && this.socket?.send(JSON.stringify({ type: $ }));
    }
    handleOpen() {
        q.info("WS Connected"),
            this.backoff.succeed(),
            this.pingInterval.start(M, () => this.ping()),
            (0, O.E$)(this.accountId, this.accessToken),
            (0, O.oG)(this.accountId, this.accessToken);
    }
    handleMessage(e) {
        let { data: t } = e;
        if ("string" != typeof t) return;
        let { type: n, uri: r, payloads: i } = JSON.parse(t);
        if (n === K) {
            if ("string" == typeof r && r.startsWith(P))
                (this.connectionId = decodeURIComponent(r.split(P)[1])),
                    (0, O.tO)(this.accountId, this.accessToken, this.connectionId);
            else if (Array.isArray(i)) {
                for (let { events: e } of i) if (null != e) for (let t of e) this.handleEvent(t);
            }
        }
    }
    handleClose() {
        if ((this.pingInterval.stop(), !this._requestedDisconnect))
            try {
                let e = this.backoff.fail(() => {
                    this._requestedDisconnect || this.connect();
                });
                q.info(`WS Disconnected. Next retry in ${Math.round(e)}ms`);
            } catch (e) {}
    }
    handleEvent(e) {
        let { type: t, event: n } = e;
        switch (t) {
            case "PLAYER_STATE_CHANGED":
                null != n && null != n.state && ex(this.accountId, this.accessToken, n.state);
                break;
            case "DEVICE_STATE_CHANGED":
                this.handleDeviceStateChange();
        }
    }
    handleDeviceStateChange = o().throttle(() => {
        (0, O.oG)(this.accountId, this.accessToken), eP(this.accountId, this.accessToken);
    }, Y);
}
function e_(e, t) {
    e in et
        ? ((et[e].accessToken = t), q.info(`Updated account access token: ${e}`))
        : ((et[e] = new ed(e, t)), q.info(`Added account: ${e}`));
}
function ef(e) {
    if (!(e in et)) return;
    et[e].disconnect(), delete et[e];
    let t = er[e];
    null != t && null != r && t.track.id === r.track.id && (r = null), delete er[e], q.info(`Removed account: ${e}`);
}
function eh(e, t) {
    for (let n of en[e]) n.is_active = n.id === t;
}
function ep(e, t, n) {
    let r = es();
    if (null == r) return !1;
    let { socket: a, device: s } = r,
        { sync_id: o, party: l, timestamps: u } = t;
    if (null == o || null == l || null == l.id || !(0, D.pH)(l.id)) return !1;
    let c = null != u && null != u.start ? u.start : Date.now(),
        d = Math.max(0, Date.now() - c),
        _ = !1,
        f = er[a.accountId];
    null != f && !1 === f.repeat && (_ = null);
    let h = (0, D.NJ)(t.metadata?.type ?? D.M0.TRACK);
    if (null == h) return;
    (0, O.ZH)(a.accountId, a.accessToken, o, h, { position: +d, deviceId: s.id, repeat: _ }),
        (i = { userId: e, partyId: l.id, trackId: o, startTime: c });
    let p = "presence change";
    n && ((p = "started"), C.default.track(L.HAw.SPOTIFY_LISTEN_ALONG_STARTED, { party_id: l.id, other_user_id: e })),
        q.info(`Listen along ${p}: ${a.accountId} to ${e} playing ${o} on ${s.name}`);
}
function em() {
    C.default.track(L.HAw.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != i ? i.partyId : null,
        other_user_id: null != i ? i.userId : null,
    });
    let e = null != i ? i.trackId : null;
    (i = null), q.info("Listen along stopped");
    let t = es();
    if (null == t) return;
    let { socket: n } = t,
        r = er[n.accountId];
    null != r && r.track.id === e && (0, O.v7)(n.accountId, n.accessToken);
}
function eg() {
    let e = Object.keys(et),
        t = I.A.getAccounts().filter((e) => {
            let { type: t } = e;
            return t === L.fg2.SPOTIFY;
        });
    if (null == t) return !1;
    let n = t.map((e) => {
        let { id: t } = e;
        return t;
    });
    for (let t of e) n.includes(t) || ef(t);
    let i = !1;
    for (let n of t)
        if ((null != r && r.account.id === n.id && ((r.account = n), (i = !0)), !e.includes(n.id))) {
            if (null != n.accessToken) {
                e_(n.id, n.accessToken);
                continue;
            }
            (0, O.iD)(n.id);
        }
    return i;
}
function eE(e) {
    let { accountId: t, accessToken: n } = e;
    return e_(t, n), !1;
}
function eA(e) {
    let { accountId: t } = e;
    ef(t);
}
function eI(e) {
    let { accountId: t, isPlaying: n, repeat: a, track: s, position: l, device: u, context: d } = e,
        f = !1;
    if (null != u)
        if (null != en[t]) {
            let e = en[t].find((e) => {
                let { id: t } = e;
                return t === u.id;
            });
            null == e ? (en[t].push(u), (f = !0)) : (0, c.A)(e, u) || (Object.assign(e, u), (f = !0)), eh(t, u.id);
        } else (en[t] = [u]), (f = !0);
    n ? ea?.start(k, eN) : ((s = null), ea?.stop());
    let h = I.A.getAccount(t, L.fg2.SPOTIFY);
    if (null == h) return f;
    let g = er[t],
        E = null != s ? { account: h, track: s, startTime: eo(g, l), context: d, repeat: a } : null,
        T = null != u && null != i && 0 === l && !n;
    T || (er[t] = E);
    let y = r;
    if (
        ((r = o()
            .values(er)
            .find((e) => null != e)),
        eR(A.default.getId()),
        null == s || T ? J.stop() : J.start(s.duration - l + F, () => el(h.id)),
        null != i && ((!n && l > 0) || null == u || (null != E && i.trackId !== E.track.id))
            ? (q.info(`Listen along active but playback stopped or track changed. Stopping listen along in ${F}ms`),
              ee.start(F, () => {
                  q.info("Stopping listening along"), (0, p.A)(), el(h.id);
              }))
            : ee.isStarted() && (q.info("Listen along stop cancelled as playback of track resumed"), ee.stop()),
        y === r ||
            (null == g && null == E) ||
            (null != g && null != E && g.track.id === E.track.id && g.startTime === E.startTime))
    )
        return f;
    null != s &&
        (_.h.dispatch({ type: "SPOTIFY_NEW_TRACK", track: s, connectionId: t }),
        C.default.track(L.HAw.ACTIVITY_UPDATED, {
            party_platform: L.fg2.SPOTIFY,
            track_id: s.id,
            has_images: !0,
            details: s.album.name,
            state: s.name,
            album_id: s.album.id,
            author_ids: s.artists.map((e) => e.id),
            author_names: s.artists.map((e) => e.name),
        }));
}
function eT(e) {
    let { id: t } = e;
    a = t;
}
function ey(e) {
    let { accountId: t, devices: n } = e;
    (en[t] = n), q.info(`Devices updated for ${t}:`, n);
}
function eS(e) {
    let { accountId: t, deviceId: n } = e;
    eh(t, n);
}
function ev(e) {
    let t,
        { activity: n, metadata: r } = e,
        a = es();
    if (null == a) return !1;
    let { socket: s, device: o } = a,
        { sync_id: l, party: u } = n;
    return (
        null != l &&
        null != u &&
        null != u.id &&
        !!(0, D.pH)(u.id) &&
        (null != r && (t = r.context_uri),
        null != i && em(),
        null != r &&
            void ((0, O.ZH)(s.accountId, s.accessToken, l, r.type ?? D.M0.TRACK, { contextUri: t, deviceId: o.id }),
            q.info(`Play started: ${s.accountId} playing ${l} on ${o.name}`)))
    );
}
function eC(e) {
    let { activity: t, userId: n } = e;
    return ep(n, t, !0);
}
function eb() {
    if (null == i || null == es()) return !1;
    let { userId: e } = i,
        t = eu(e);
    if (null == t)
        return (
            Q.start(G, () => {
                null != i && i.userId === e && (0, p.A)();
            }),
            !1
        );
    Q.stop();
    let { sync_id: n, timestamps: r, party: a } = t,
        s = null != n && i.trackId !== n,
        o = null != r && i.startTime !== r.start;
    return s || o ? ep(e, t, !1) : null != a && a.id !== i.partyId && ((i.partyId = a.id), !0);
}
function eN() {
    if (null == r) return;
    let e = es();
    if (null == e) return;
    let { socket: t } = e;
    (ei = !0),
        (0, O.v7)(t.accountId, t.accessToken),
        C.default.track(L.HAw.SPOTIFY_AUTO_PAUSED),
        q.info("Playback auto paused");
}
function eR(e) {
    if (e === A.default.getId()) {
        let t = v.A.isCurrentClientInVoiceChannel(),
            n = (0, f.R)({ userId: e, checkSoundSharing: !0, checkSoundboardSounds: !1 });
        t && n && null != r ? (X.start(k, eN, !1), Z.stop()) : Z.start(U, () => X.stop(), !1);
    }
    return !1;
}
function eO(e) {
    let { userId: t } = e;
    return eR(t);
}
function eD(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n } = t;
        return eR(n) || e;
    }, !1);
}
function eL(e) {
    let { accountId: t, isPremium: n } = e,
        r = et[t];
    if (null == r) return !1;
    (r.isPremium = n), q.info(`Profile updated for ${t}: isPremium = ${n}`);
}
function ew(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        ea?.stop();
        let { sourceId: e, sound: n } = t?.desktopSettings;
        null != e && E.Ay.getObservedAppNameForWindow(e) === w.name && n
            ? (ea = new d.IX()).start(k, eN)
            : (ea?.stop(), (ea = null));
    } else null == t && (ea?.stop(), (ea = null));
}
function ex(e, t, n) {
    let r,
        i,
        { device: a, progress_ms: s, is_playing: o, repeat_state: l, item: u, context: c } = n;
    if (null != u && u.type === D.M0.TRACK) {
        let e = u.id;
        null != u.linked_from && null != u.linked_from.id && (e = u.linked_from.id),
            (r = {
                id: e,
                name: u.name,
                duration: u.duration_ms,
                type: D.M0.TRACK,
                album: {
                    id: u.album?.id ?? "",
                    name: u.album?.name ?? "",
                    image: u.album?.images[0],
                    type: u.album?.type ?? D.M0.ALBUM,
                },
                artists: Array.isArray(u.artists) ? u.artists.filter((e) => (0, R.Vq)(e.id) && (0, R.Vq)(e.name)) : [],
                isLocal: u.is_local || !1,
            });
    } else
        null != u &&
            u.type === D.M0.EPISODE &&
            (r = {
                id: u.id,
                name: u.name,
                duration: u.duration_ms,
                type: D.M0.EPISODE,
                album: {
                    id: u.show?.id ?? "",
                    name: u.show?.name ?? "",
                    image: u.show?.images[0],
                    type: u.album?.type ?? D.M0.SHOW,
                },
                artists: [],
                isLocal: !1,
            });
    if (
        (null != a && !0 !== a.is_active && (a = { ...a, is_active: !0 }),
        null != c && [D.M0.PLAYLIST, D.M0.ALBUM].includes(c.type))
    ) {
        let n = ek.getPlayerState(e);
        i =
            null != n && null != n.context && n.context.uri === c.uri
                ? Promise.resolve(n.context)
                : c.type === D.M0.ALBUM
                  ? Promise.resolve(c)
                  : O.tB
                        .get(e, t, { url: c.href })
                        .then((e) => {
                            let { body: t } = e;
                            return t;
                        })
                        .catch((e) => {
                            if (e && 404 === e.status) return null;
                            throw e;
                        });
    } else i = Promise.resolve(void 0);
    return i.then((t) => {
        null == t || t.type !== D.M0.PLAYLIST || t.public || (t = null),
            _.h.dispatch({
                type: "SPOTIFY_PLAYER_STATE",
                accountId: e,
                track: r,
                volumePercent: null != a ? a.volume_percent : 0,
                isPlaying: o,
                repeat: "off" !== l,
                position: s,
                context: t,
                device: a,
            });
    });
}
function eP(e, t) {
    return O.tB
        .get(e, t, {
            url: D.RQ.PLAYER,
            query: { additional_types: `${D.M0.TRACK},${D.M0.EPISODE}` },
            onlyRetryOnAuthorizationErrors: !0,
        })
        .then((n) => {
            let r = n.body;
            null != r ? ex(e, t, r).then(() => n) : el(e);
        })
        .catch(() => el(e));
}
class eM extends u.Ay.Store {
    static displayName = "SpotifyStore";
    initialize() {
        this.waitFor(A.default, I.A, T.A, y.A, E.Ay, S.A, v.A), this.syncWith([y.A], () => eb()), (0, O.f0)();
    }
    hasConnectedAccount() {
        return Object.keys(et).length > 0;
    }
    getActiveSocketAndDevice() {
        return es();
    }
    getPlayableComputerDevices() {
        let e = [];
        for (let t in et) {
            let n = et[t];
            if (!n.connected || null == en[t]) continue;
            let r = en[t].find((e) => !e.is_restricted && e.type === B);
            null != r && e.push({ socket: n, device: r });
        }
        return e;
    }
    canPlay(e) {
        let { sync_id: t, party: n } = e;
        return null != es() && null != t && null != n && null != n.id && (0, D.pH)(n.id);
    }
    getSyncingWith() {
        return i;
    }
    wasAutoPaused() {
        return ei;
    }
    getLastPlayedTrackId() {
        return a;
    }
    getTrack() {
        return null != r ? r.track : null;
    }
    getPlayerState(e) {
        return er[e];
    }
    shouldShowActivity() {
        return null != r && r.account.showActivity && !T.A.isIdle();
    }
    getActivity() {
        let e, t, n;
        if (null == r) return null != i ? eu(i.userId) : null;
        let {
                track: { artists: a, album: s, name: o, id: l, duration: u, isLocal: c, type: d },
                startTime: _,
                context: f,
            } = r,
            h = a.slice(0, j);
        a.length > 0 &&
            (e = h
                .map((e) => {
                    let { name: t } = e;
                    return t.replace(/;/g, "");
                })
                .join("; "));
        let p = {},
            g = null != s.image ? (0, b.Di)(L.fg2.SPOTIFY, s.image.url) : null;
        null != s.image && null != g && (p.large_image = g),
            s.type !== z && (p.large_text = s.name),
            null != f && (t = f.uri),
            (n = null != i && null != i.partyId ? i.partyId : `${D.HS}${A.default.getId()}`);
        let E = o.length > W ? o.substring(0, W - 3) + "..." : o,
            I = {
                context_uri: t,
                album_id: s.id,
                artist_ids: h.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                type: d,
                button_urls: [],
            },
            T = {
                name: w.name,
                assets: p,
                details: E,
                state: e,
                timestamps: { start: _, end: _ + u },
                party: { id: n },
            };
        return c || ((T.sync_id = l), (T.flags = L.jUm.PLAY | L.jUm.SYNC), (T.metadata = I)), T;
    }
}
let ek = new eM(_.h, {
        USER_CONNECTIONS_UPDATE: eg,
        CONNECTION_OPEN: eg,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: eE,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: eA,
        SPOTIFY_PROFILE_UPDATE: eL,
        SPOTIFY_PLAYER_STATE: eI,
        SPOTIFY_PLAYER_PLAY: eT,
        ACTIVITY_PLAY: ev,
        ACTIVITY_SYNC: eC,
        ACTIVITY_SYNC_STOP: em,
        SPOTIFY_SET_DEVICES: ey,
        SPOTIFY_SET_ACTIVE_DEVICE: eS,
        SPEAKING: eO,
        VOICE_STATE_UPDATES: eD,
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: ew,
    }),
    eU = ek;
