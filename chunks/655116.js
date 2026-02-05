"use strict";
let r, i, a;
n.d(t, { A: () => ek }), n(321073), n(938796);
var s = n(735438),
    o = n.n(s),
    l = n(158390),
    u = n(311907),
    c = n(52133),
    d = n(451988),
    _ = n(73153),
    f = n(717558),
    p = n(573648),
    h = n(504337),
    m = n(626584),
    g = n(15285),
    E = n(961350),
    A = n(962173),
    I = n(885576),
    T = n(290863),
    y = n(485296),
    S = n(977997),
    v = n(954571),
    C = n(139675),
    b = n(927813),
    N = n(403362),
    R = n(107750),
    O = n(272984),
    D = n(652215);
let L = p.A.get(D.fg2.SPOTIFY),
    w = "wss://dealer.spotify.com/?access_token=",
    x = "hm://pusher/v1/connections/",
    P = 30 * b.A.Millis.SECOND,
    M = 30 * b.A.Millis.SECOND,
    k = 100,
    U = 5 * b.A.Millis.MINUTE,
    G = 5 * b.A.Millis.SECOND,
    V = 1.5 * b.A.Millis.SECOND,
    F = "Computer",
    B = 5,
    j = +b.A.Millis.MINUTE,
    H = 3 * b.A.Millis.SECOND,
    Y = 128,
    W = "message",
    K = "ping",
    z = "single",
    $ = new m.A("Spotify"),
    q = new d.Ep(),
    Z = new d.Ep(),
    Q = new d.Ep(),
    X = new d.Ep(),
    J = new d.Ep(),
    ee = {},
    et = {},
    en = {},
    er = !1,
    ei = null;
function ea() {
    for (let e in ee) {
        let t = ee[e];
        if (!t.connected || null == et[e]) continue;
        let n = et[e].find((e) => e.is_active);
        if (null != n) return { socket: t, device: n };
    }
}
function es(e, t) {
    let n = Date.now(),
        r = null != e ? e.startTime : 0,
        i = n - t;
    return Math.abs(i - r) > V ? i : r;
}
function eo(e) {
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
function el(e) {
    return T.A.findActivity(e, (e) => null != e.party && null != e.party.id && (0, O.pH)(e.party.id));
}
let eu = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class ec {
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
            (this.backoff = new l.A(void 0, j)),
            this.connect();
    }
    get connected() {
        return null != this.socket && eu.has(this.socket.readyState);
    }
    connect() {
        this.connected ||
            this._requestedConnect ||
            ($.info("WS Connecting"),
            (this._requestedDisconnect = !1),
            (this._requestedConnect = !0),
            ex(this.accountId, this.accessToken)
                .then(() => {
                    (this._requestedConnect = !1),
                        (this.socket = new WebSocket(`${w}${this.accessToken}`)),
                        (this.socket.onopen = this.handleOpen.bind(this)),
                        (this.socket.onmessage = this.handleMessage.bind(this)),
                        (this.socket.onclose = this.socket.onerror = this.handleClose.bind(this));
                })
                .catch((e) => {
                    $.error(e), (this._requestedConnect = !1), this.handleClose();
                }));
    }
    disconnect() {
        (this._requestedDisconnect = !0), this.backoff.cancel();
        try {
            this.socket?.close();
        } catch (e) {}
    }
    ping() {
        this.connected && this.socket?.send(JSON.stringify({ type: K }));
    }
    handleOpen() {
        $.info("WS Connected"),
            this.backoff.succeed(),
            this.pingInterval.start(P, () => this.ping()),
            (0, R.E$)(this.accountId, this.accessToken),
            (0, R.oG)(this.accountId, this.accessToken);
    }
    handleMessage(e) {
        let { data: t } = e;
        if ("string" != typeof t) return;
        let { type: n, uri: r, payloads: i } = JSON.parse(t);
        if (n === W) {
            if ("string" == typeof r && r.startsWith(x))
                (this.connectionId = decodeURIComponent(r.split(x)[1])),
                    (0, R.tO)(this.accountId, this.accessToken, this.connectionId);
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
                $.info(`WS Disconnected. Next retry in ${Math.round(e)}ms`);
            } catch (e) {}
    }
    handleEvent(e) {
        let { type: t, event: n } = e;
        switch (t) {
            case "PLAYER_STATE_CHANGED":
                null != n && null != n.state && ew(this.accountId, this.accessToken, n.state);
                break;
            case "DEVICE_STATE_CHANGED":
                this.handleDeviceStateChange();
        }
    }
    handleDeviceStateChange = o().throttle(() => {
        (0, R.oG)(this.accountId, this.accessToken), ex(this.accountId, this.accessToken);
    }, H);
}
function ed(e, t) {
    e in ee
        ? ((ee[e].accessToken = t), $.info(`Updated account access token: ${e}`))
        : ((ee[e] = new ec(e, t)), $.info(`Added account: ${e}`));
}
function e_(e) {
    if (!(e in ee)) return;
    ee[e].disconnect(), delete ee[e];
    let t = en[e];
    null != t && null != r && t.track.id === r.track.id && (r = null), delete en[e], $.info(`Removed account: ${e}`);
}
function ef(e, t) {
    for (let n of et[e]) n.is_active = n.id === t;
}
function ep(e, t, n) {
    let r = ea();
    if (null == r) return !1;
    let { socket: a, device: s } = r,
        { sync_id: o, party: l, timestamps: u } = t;
    if (null == o || null == l || null == l.id || !(0, O.pH)(l.id)) return !1;
    let c = null != u && null != u.start ? u.start : Date.now(),
        d = Math.max(0, Date.now() - c),
        _ = !1,
        f = en[a.accountId];
    null != f && !1 === f.repeat && (_ = null);
    let p = (0, O.NJ)(t.metadata?.type ?? O.M0.TRACK);
    if (null == p) return;
    (0, R.ZH)(a.accountId, a.accessToken, o, p, { position: +d, deviceId: s.id, repeat: _ }),
        (i = { userId: e, partyId: l.id, trackId: o, startTime: c });
    let h = "presence change";
    n && ((h = "started"), v.default.track(D.HAw.SPOTIFY_LISTEN_ALONG_STARTED, { party_id: l.id, other_user_id: e })),
        $.info(`Listen along ${h}: ${a.accountId} to ${e} playing ${o} on ${s.name}`);
}
function eh() {
    v.default.track(D.HAw.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != i ? i.partyId : null,
        other_user_id: null != i ? i.userId : null,
    });
    let e = null != i ? i.trackId : null;
    (i = null), $.info("Listen along stopped");
    let t = ea();
    if (null == t) return;
    let { socket: n } = t,
        r = en[n.accountId];
    null != r && r.track.id === e && (0, R.v7)(n.accountId, n.accessToken);
}
function em() {
    let e = Object.keys(ee),
        t = A.A.getAccounts().filter((e) => {
            let { type: t } = e;
            return t === D.fg2.SPOTIFY;
        });
    if (null == t) return !1;
    let n = t.map((e) => {
        let { id: t } = e;
        return t;
    });
    for (let t of e) n.includes(t) || e_(t);
    let i = !1;
    for (let n of t)
        if ((null != r && r.account.id === n.id && ((r.account = n), (i = !0)), !e.includes(n.id))) {
            if (null != n.accessToken) {
                ed(n.id, n.accessToken);
                continue;
            }
            (0, R.iD)(n.id);
        }
    return i;
}
function eg(e) {
    let { accountId: t, accessToken: n } = e;
    return ed(t, n), !1;
}
function eE(e) {
    let { accountId: t } = e;
    e_(t);
}
function eA(e) {
    let { accountId: t, isPlaying: n, repeat: a, track: s, position: l, device: u, context: d } = e,
        f = !1;
    if (null != u)
        if (null != et[t]) {
            let e = et[t].find((e) => {
                let { id: t } = e;
                return t === u.id;
            });
            null == e ? (et[t].push(u), (f = !0)) : (0, c.A)(e, u) || (Object.assign(e, u), (f = !0)), ef(t, u.id);
        } else (et[t] = [u]), (f = !0);
    n ? ei?.start(M, eb) : ((s = null), ei?.stop());
    let p = A.A.getAccount(t, D.fg2.SPOTIFY);
    if (null == p) return f;
    let m = en[t],
        g = null != s ? { account: p, track: s, startTime: es(m, l), context: d, repeat: a } : null,
        I = null != u && null != i && 0 === l && !n;
    I || (en[t] = g);
    let T = r;
    if (
        ((r = o()
            .values(en)
            .find((e) => null != e)),
        eN(E.default.getId()),
        null == s || I ? X.stop() : X.start(s.duration - l + G, () => eo(p.id)),
        null != i && ((!n && l > 0) || null == u || (null != g && i.trackId !== g.track.id))
            ? ($.info(`Listen along active but playback stopped or track changed. Stopping listen along in ${G}ms`),
              J.start(G, () => {
                  $.info("Stopping listening along"), (0, h.A)(), eo(p.id);
              }))
            : J.isStarted() && ($.info("Listen along stop cancelled as playback of track resumed"), J.stop()),
        T === r ||
            (null == m && null == g) ||
            (null != m && null != g && m.track.id === g.track.id && m.startTime === g.startTime))
    )
        return f;
    null != s &&
        (_.h.dispatch({ type: "SPOTIFY_NEW_TRACK", track: s, connectionId: t }),
        v.default.track(D.HAw.ACTIVITY_UPDATED, {
            party_platform: D.fg2.SPOTIFY,
            track_id: s.id,
            has_images: !0,
            details: s.album.name,
            state: s.name,
            album_id: s.album.id,
            author_ids: s.artists.map((e) => e.id),
            author_names: s.artists.map((e) => e.name),
        }));
}
function eI(e) {
    let { id: t } = e;
    a = t;
}
function eT(e) {
    let { accountId: t, devices: n } = e;
    (et[t] = n), $.info(`Devices updated for ${t}:`, n);
}
function ey(e) {
    let { accountId: t, deviceId: n } = e;
    ef(t, n);
}
function eS(e) {
    let t,
        { activity: n, metadata: r } = e,
        a = ea();
    if (null == a) return !1;
    let { socket: s, device: o } = a,
        { sync_id: l, party: u } = n;
    return (
        null != l &&
        null != u &&
        null != u.id &&
        !!(0, O.pH)(u.id) &&
        (null != r && (t = r.context_uri),
        null != i && eh(),
        null != r &&
            void ((0, R.ZH)(s.accountId, s.accessToken, l, r.type ?? O.M0.TRACK, { contextUri: t, deviceId: o.id }),
            $.info(`Play started: ${s.accountId} playing ${l} on ${o.name}`)))
    );
}
function ev(e) {
    let { activity: t, userId: n } = e;
    return ep(n, t, !0);
}
function eC() {
    if (null == i || null == ea()) return !1;
    let { userId: e } = i,
        t = el(e);
    if (null == t)
        return (
            Q.start(U, () => {
                null != i && i.userId === e && (0, h.A)();
            }),
            !1
        );
    Q.stop();
    let { sync_id: n, timestamps: r, party: a } = t,
        s = null != n && i.trackId !== n,
        o = null != r && i.startTime !== r.start;
    return s || o ? ep(e, t, !1) : null != a && a.id !== i.partyId && ((i.partyId = a.id), !0);
}
function eb() {
    if (null == r) return;
    let e = ea();
    if (null == e) return;
    let { socket: t } = e;
    (er = !0),
        (0, R.v7)(t.accountId, t.accessToken),
        v.default.track(D.HAw.SPOTIFY_AUTO_PAUSED),
        $.info("Playback auto paused");
}
function eN(e) {
    if (e === E.default.getId()) {
        let t = S.A.isCurrentClientInVoiceChannel(),
            n = (0, f.R)({ userId: e, checkSoundSharing: !0, checkSoundboardSounds: !1 });
        t && n && null != r ? (q.start(M, eb, !1), Z.stop()) : Z.start(k, () => q.stop(), !1);
    }
    return !1;
}
function eR(e) {
    let { userId: t } = e;
    return eN(t);
}
function eO(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n } = t;
        return eN(n) || e;
    }, !1);
}
function eD(e) {
    let { accountId: t, isPremium: n } = e,
        r = ee[t];
    if (null == r) return !1;
    (r.isPremium = n), $.info(`Profile updated for ${t}: isPremium = ${n}`);
}
function eL(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        ei?.stop();
        let { sourceId: e, sound: n } = t?.desktopSettings;
        null != e && g.Ay.getObservedAppNameForWindow(e) === L.name && n
            ? (ei = new d.IX()).start(M, eb)
            : (ei?.stop(), (ei = null));
    } else null == t && (ei?.stop(), (ei = null));
}
function ew(e, t, n) {
    let r,
        i,
        { device: a, progress_ms: s, is_playing: o, repeat_state: l, item: u, context: c } = n;
    if (null != u && u.type === O.M0.TRACK) {
        let e = u.id;
        null != u.linked_from && null != u.linked_from.id && (e = u.linked_from.id),
            (r = {
                id: e,
                name: u.name,
                duration: u.duration_ms,
                type: O.M0.TRACK,
                album: {
                    id: u.album?.id ?? "",
                    name: u.album?.name ?? "",
                    image: u.album?.images[0],
                    type: u.album?.type ?? O.M0.ALBUM,
                },
                artists: Array.isArray(u.artists) ? u.artists.filter((e) => (0, N.Vq)(e.id) && (0, N.Vq)(e.name)) : [],
                isLocal: u.is_local || !1,
            });
    } else
        null != u &&
            u.type === O.M0.EPISODE &&
            (r = {
                id: u.id,
                name: u.name,
                duration: u.duration_ms,
                type: O.M0.EPISODE,
                album: {
                    id: u.show?.id ?? "",
                    name: u.show?.name ?? "",
                    image: u.show?.images[0],
                    type: u.album?.type ?? O.M0.SHOW,
                },
                artists: [],
                isLocal: !1,
            });
    if (
        (null != a && !0 !== a.is_active && (a = { ...a, is_active: !0 }),
        null != c && [O.M0.PLAYLIST, O.M0.ALBUM].includes(c.type))
    ) {
        let n = eM.getPlayerState(e);
        i =
            null != n && null != n.context && n.context.uri === c.uri
                ? Promise.resolve(n.context)
                : c.type === O.M0.ALBUM
                  ? Promise.resolve(c)
                  : R.tB
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
        null == t || t.type !== O.M0.PLAYLIST || t.public || (t = null),
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
function ex(e, t) {
    return R.tB
        .get(e, t, {
            url: O.RQ.PLAYER,
            query: { additional_types: `${O.M0.TRACK},${O.M0.EPISODE}` },
            onlyRetryOnAuthorizationErrors: !0,
        })
        .then((n) => {
            let r = n.body;
            null != r ? ew(e, t, r).then(() => n) : eo(e);
        })
        .catch(() => eo(e));
}
class eP extends u.Ay.Store {
    static displayName = "SpotifyStore";
    initialize() {
        this.waitFor(E.default, A.A, I.A, T.A, g.Ay, y.A, S.A), this.syncWith([T.A], () => eC()), (0, R.f0)();
    }
    hasConnectedAccount() {
        return Object.keys(ee).length > 0;
    }
    getActiveSocketAndDevice() {
        return ea();
    }
    getPlayableComputerDevices() {
        let e = [];
        for (let t in ee) {
            let n = ee[t];
            if (!n.connected || null == et[t]) continue;
            let r = et[t].find((e) => !e.is_restricted && e.type === F);
            null != r && e.push({ socket: n, device: r });
        }
        return e;
    }
    canPlay(e) {
        let { sync_id: t, party: n } = e;
        return null != ea() && null != t && null != n && null != n.id && (0, O.pH)(n.id);
    }
    getSyncingWith() {
        return i;
    }
    wasAutoPaused() {
        return er;
    }
    getLastPlayedTrackId() {
        return a;
    }
    getTrack() {
        return null != r ? r.track : null;
    }
    getPlayerState(e) {
        return en[e];
    }
    shouldShowActivity() {
        return null != r && r.account.showActivity && !I.A.isIdle();
    }
    getActivity() {
        let e, t, n;
        if (null == r) return null != i ? el(i.userId) : null;
        let {
                track: { artists: a, album: s, name: o, id: l, duration: u, isLocal: c, type: d },
                startTime: _,
                context: f,
            } = r,
            p = a.slice(0, B);
        a.length > 0 &&
            (e = p
                .map((e) => {
                    let { name: t } = e;
                    return t.replace(/;/g, "");
                })
                .join("; "));
        let h = {},
            m = null != s.image ? (0, C.Di)(D.fg2.SPOTIFY, s.image.url) : null;
        null != s.image && null != m && (h.large_image = m),
            s.type !== z && (h.large_text = s.name),
            null != f && (t = f.uri),
            (n = null != i && null != i.partyId ? i.partyId : `${O.HS}${E.default.getId()}`);
        let g = o.length > Y ? o.substring(0, Y - 3) + "..." : o,
            A = {
                context_uri: t,
                album_id: s.id,
                artist_ids: p.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                type: d,
                button_urls: [],
            },
            I = {
                name: L.name,
                assets: h,
                details: g,
                state: e,
                timestamps: { start: _, end: _ + u },
                party: { id: n },
            };
        return c || ((I.sync_id = l), (I.flags = D.jUm.PLAY | D.jUm.SYNC), (I.metadata = A)), I;
    }
}
let eM = new eP(_.h, {
        USER_CONNECTIONS_UPDATE: em,
        CONNECTION_OPEN: em,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: eg,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: eE,
        SPOTIFY_PROFILE_UPDATE: eD,
        SPOTIFY_PLAYER_STATE: eA,
        SPOTIFY_PLAYER_PLAY: eI,
        ACTIVITY_PLAY: eS,
        ACTIVITY_SYNC: ev,
        ACTIVITY_SYNC_STOP: eh,
        SPOTIFY_SET_DEVICES: eT,
        SPOTIFY_SET_ACTIVE_DEVICE: ey,
        SPEAKING: eR,
        VOICE_STATE_UPDATES: eO,
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: eL,
    }),
    ek = eM;
