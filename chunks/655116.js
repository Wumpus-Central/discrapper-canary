"use strict";
let i, r, a;
n.d(t, { A: () => eA }), n(321073), n(938796);
var s = n(735438),
    l = n.n(s),
    o = n(158390),
    d = n(17928),
    c = n(52133),
    u = n(451988),
    _ = n(228366),
    E = n(717558),
    A = n(573648),
    h = n(504337),
    I = n(626584),
    f = n(952818),
    p = n(280450),
    T = n(30370),
    m = n(885576),
    g = n(290863),
    S = n(485296),
    N = n(977997),
    C = n(174459),
    R = n(970928),
    O = n(927813),
    L = n(403362),
    D = n(107750),
    y = n(272984),
    v = n(652215);
let b = A.A.get(v.fg2.SPOTIFY),
    M = "hm://pusher/v1/connections/",
    P = 30 * O.A.Millis.SECOND,
    U = 30 * O.A.Millis.SECOND,
    w = 5 * O.A.Millis.MINUTE,
    G = 5 * O.A.Millis.SECOND,
    x = 1.5 * O.A.Millis.SECOND,
    k = +O.A.Millis.MINUTE,
    F = 3 * O.A.Millis.SECOND,
    V = new I.A("Spotify"),
    B = new u.Ep(),
    H = new u.Ep(),
    j = new u.Ep(),
    W = new u.Ep(),
    Y = new u.Ep(),
    K = {},
    $ = {},
    z = {},
    q = !1,
    Z = null;
function X() {
    for (let e in K) {
        let t = K[e];
        if (!t.connected || null == $[e]) continue;
        let n = $[e].find((e) => e.is_active);
        if (null != n) return { socket: t, device: n };
    }
}
function Q(e) {
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
function J(e) {
    return g.A.findActivity(e, (e) => null != e.party && null != e.party.id && (0, y.pH)(e.party.id));
}
let ee = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class et {
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
            (this.pingInterval = new u.IX()),
            (this.backoff = new o.A(void 0, k)),
            this.connect();
    }
    get connected() {
        return null != this.socket && ee.has(this.socket.readyState);
    }
    connect() {
        this.connected ||
            this._requestedConnect ||
            (V.info("WS Connecting"),
            (this._requestedDisconnect = !1),
            (this._requestedConnect = !0),
            eu(this.accountId, this.accessToken)
                .then(() => {
                    (this._requestedConnect = !1),
                        (this.socket = new WebSocket(`wss://dealer.spotify.com/?access_token=${this.accessToken}`)),
                        (this.socket.onopen = this.handleOpen.bind(this)),
                        (this.socket.onmessage = this.handleMessage.bind(this)),
                        (this.socket.onclose = this.socket.onerror = this.handleClose.bind(this));
                })
                .catch((e) => {
                    V.error(e), (this._requestedConnect = !1), this.handleClose();
                }));
    }
    disconnect() {
        (this._requestedDisconnect = !0), this.backoff.cancel();
        try {
            this.socket?.close();
        } catch (e) {}
    }
    ping() {
        this.connected && this.socket?.send(JSON.stringify({ type: "ping" }));
    }
    handleOpen() {
        V.info("WS Connected"),
            this.backoff.succeed(),
            this.pingInterval.start(P, () => this.ping()),
            (0, D.E$)(this.accountId, this.accessToken),
            (0, D.oG)(this.accountId, this.accessToken);
    }
    handleMessage(e) {
        let { data: t } = e;
        if ("string" != typeof t) return;
        let { type: n, uri: i, payloads: r } = JSON.parse(t);
        if ("message" === n) {
            if ("string" == typeof i && i.startsWith(M))
                (this.connectionId = decodeURIComponent(i.split(M)[1])),
                    (0, D.tO)(this.accountId, this.accessToken, this.connectionId);
            else if (Array.isArray(r)) {
                for (let { events: e } of r) if (null != e) for (let t of e) this.handleEvent(t);
            }
        }
    }
    handleClose() {
        if ((this.pingInterval.stop(), !this._requestedDisconnect))
            try {
                let e = this.backoff.fail(() => {
                    this._requestedDisconnect || this.connect();
                });
                V.info(`WS Disconnected. Next retry in ${Math.round(e)}ms`);
            } catch (e) {}
    }
    handleEvent(e) {
        let { type: t, event: n } = e;
        switch (t) {
            case "PLAYER_STATE_CHANGED":
                null != n && null != n.state && ec(this.accountId, this.accessToken, n.state);
                break;
            case "DEVICE_STATE_CHANGED":
                this.handleDeviceStateChange();
        }
    }
    handleDeviceStateChange = l().throttle(() => {
        (0, D.oG)(this.accountId, this.accessToken), eu(this.accountId, this.accessToken);
    }, F);
}
function en(e, t) {
    e in K
        ? ((K[e].accessToken = t), V.info(`Updated account access token: ${e}`))
        : ((K[e] = new et(e, t)), V.info(`Added account: ${e}`));
}
function ei(e) {
    if (!(e in K)) return;
    K[e].disconnect(), delete K[e];
    let t = z[e];
    null != t && null != i && t.track.id === i.track.id && (i = null), delete z[e], V.info(`Removed account: ${e}`);
}
function er(e, t) {
    for (let n of $[e]) n.is_active = n.id === t;
}
function ea(e, t, n) {
    let i = X();
    if (null == i) return !1;
    let { socket: a, device: s } = i,
        { sync_id: l, party: o, timestamps: d } = t;
    if (null == l || null == o || null == o.id || !(0, y.pH)(o.id)) return !1;
    let c = null != d && null != d.start ? d.start : Date.now(),
        u = Math.max(0, Date.now() - c),
        _ = !1,
        E = z[a.accountId];
    null != E && !1 === E.repeat && (_ = null);
    let A = (0, y.NJ)(t.metadata?.type ?? y.M0.TRACK);
    if (null == A) return;
    (0, D.ZH)(a.accountId, a.accessToken, l, A, { position: +u, deviceId: s.id, repeat: _ }),
        (r = { userId: e, partyId: o.id, trackId: l, startTime: c });
    let h = "presence change";
    n && ((h = "started"), C.default.track(v.HAw.SPOTIFY_LISTEN_ALONG_STARTED, { party_id: o.id, other_user_id: e })),
        V.info(`Listen along ${h}: ${a.accountId} to ${e} playing ${l} on ${s.name}`);
}
function es() {
    C.default.track(v.HAw.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != r ? r.partyId : null,
        other_user_id: null != r ? r.userId : null,
    });
    let e = null != r ? r.trackId : null;
    (r = null), V.info("Listen along stopped");
    let t = X();
    if (null == t) return;
    let { socket: n } = t,
        i = z[n.accountId];
    null != i && i.track.id === e && (0, D.v7)(n.accountId, n.accessToken);
}
function el() {
    let e = Object.keys(K),
        t = T.A.getAccounts().filter((e) => {
            let { type: t } = e;
            return t === v.fg2.SPOTIFY;
        });
    if (null == t) return !1;
    let n = t.map((e) => {
        let { id: t } = e;
        return t;
    });
    for (let t of e) n.includes(t) || ei(t);
    let r = !1;
    for (let n of t)
        if ((null != i && i.account.id === n.id && ((i.account = n), (r = !0)), !e.includes(n.id))) {
            if (null != n.accessToken) {
                en(n.id, n.accessToken);
                continue;
            }
            (0, D.iD)(n.id);
        }
    return r;
}
function eo() {
    if (null == i) return;
    let e = X();
    if (null == e) return;
    let { socket: t } = e;
    (q = !0),
        (0, D.v7)(t.accountId, t.accessToken),
        C.default.track(v.HAw.SPOTIFY_AUTO_PAUSED),
        V.info("Playback auto paused");
}
function ed(e) {
    if (e === p.default.getId()) {
        let t = N.A.isCurrentClientInVoiceChannel(),
            n = (0, E.R)({ userId: e, checkSoundSharing: !0, checkSoundboardSounds: !1 });
        t && n && null != i ? (B.start(U, eo, !1), H.stop()) : H.start(100, () => B.stop(), !1);
    }
    return !1;
}
function ec(e, t, n) {
    let i,
        r,
        { device: a, progress_ms: s, is_playing: l, repeat_state: o, item: d, context: c } = n;
    if (null != d && d.type === y.M0.TRACK) {
        let e = d.id;
        null != d.linked_from && null != d.linked_from.id && (e = d.linked_from.id),
            (i = {
                id: e,
                name: d.name,
                duration: d.duration_ms,
                type: y.M0.TRACK,
                album: {
                    id: d.album?.id ?? "",
                    name: d.album?.name ?? "",
                    image: d.album?.images[0],
                    type: d.album?.type ?? y.M0.ALBUM,
                },
                artists: Array.isArray(d.artists) ? d.artists.filter((e) => (0, L.Vq)(e.id) && (0, L.Vq)(e.name)) : [],
                isLocal: d.is_local || !1,
            });
    } else
        null != d &&
            d.type === y.M0.EPISODE &&
            (i = {
                id: d.id,
                name: d.name,
                duration: d.duration_ms,
                type: y.M0.EPISODE,
                album: {
                    id: d.show?.id ?? "",
                    name: d.show?.name ?? "",
                    image: d.show?.images[0],
                    type: d.album?.type ?? y.M0.SHOW,
                },
                artists: [],
                isLocal: !1,
            });
    if (
        (null != a && !0 !== a.is_active && (a = { ...a, is_active: !0 }),
        null != c && [y.M0.PLAYLIST, y.M0.ALBUM].includes(c.type))
    ) {
        let n = eE.getPlayerState(e);
        r =
            null != n && null != n.context && n.context.uri === c.uri
                ? Promise.resolve(n.context)
                : c.type === y.M0.ALBUM
                  ? Promise.resolve(c)
                  : D.tB
                        .get(e, t, { url: c.href })
                        .then((e) => {
                            let { body: t } = e;
                            return t;
                        })
                        .catch((e) => {
                            if (e && 404 === e.status) return null;
                            throw e;
                        });
    } else r = Promise.resolve(void 0);
    return r.then((t) => {
        null == t || t.type !== y.M0.PLAYLIST || t.public || (t = null),
            _.h.dispatch({
                type: "SPOTIFY_PLAYER_STATE",
                accountId: e,
                track: i,
                volumePercent: null != a ? a.volume_percent : 0,
                isPlaying: l,
                repeat: "off" !== o,
                position: s,
                context: t,
                device: a,
            });
    });
}
function eu(e, t) {
    return D.tB
        .get(e, t, {
            url: y.RQ.PLAYER,
            query: { additional_types: `${y.M0.TRACK},${y.M0.EPISODE}` },
            onlyRetryOnAuthorizationErrors: !0,
        })
        .then((n) => {
            let i = n.body;
            null != i ? ec(e, t, i).then(() => n) : Q(e);
        })
        .catch(() => Q(e));
}
class e_ extends d.Ay.Store {
    static displayName = "SpotifyStore";
    initialize() {
        this.waitFor(p.default, T.A, m.A, g.A, f.Ay, S.A, N.A),
            this.syncWith([g.A], () =>
                (function () {
                    if (null == r || null == X()) return !1;
                    let { userId: e } = r,
                        t = J(e);
                    if (null == t)
                        return (
                            j.start(w, () => {
                                null != r && r.userId === e && (0, h.A)();
                            }),
                            !1
                        );
                    j.stop();
                    let { sync_id: n, timestamps: i, party: a } = t,
                        s = null != n && r.trackId !== n,
                        l = null != i && r.startTime !== i.start;
                    return s || l ? ea(e, t, !1) : null != a && a.id !== r.partyId && ((r.partyId = a.id), !0);
                })(),
            ),
            (0, D.f0)();
    }
    hasConnectedAccount() {
        return Object.keys(K).length > 0;
    }
    getActiveSocketAndDevice() {
        return X();
    }
    getPlayableComputerDevices() {
        let e = [];
        for (let t in K) {
            let n = K[t];
            if (!n.connected || null == $[t]) continue;
            let i = $[t].find((e) => !e.is_restricted && "Computer" === e.type);
            null != i && e.push({ socket: n, device: i });
        }
        return e;
    }
    canPlay(e) {
        let { sync_id: t, party: n } = e;
        return null != X() && null != t && null != n && null != n.id && (0, y.pH)(n.id);
    }
    getSyncingWith() {
        return r;
    }
    wasAutoPaused() {
        return q;
    }
    getLastPlayedTrackId() {
        return a;
    }
    getTrack() {
        return null != i ? i.track : null;
    }
    getPlayerState(e) {
        return z[e];
    }
    shouldShowActivity() {
        return null != i && i.account.showActivity && !m.A.isIdle();
    }
    getActivity() {
        let e, t, n;
        if (null == i) return null != r ? J(r.userId) : null;
        let {
                track: { artists: a, album: s, name: l, id: o, duration: d, isLocal: c, type: u },
                startTime: _,
                context: E,
            } = i,
            A = a.slice(0, 5);
        a.length > 0 &&
            (e = A.map((e) => {
                let { name: t } = e;
                return t.replace(/;/g, "");
            }).join("; "));
        let h = {},
            I = null != s.image ? (0, R.Di)(v.fg2.SPOTIFY, s.image.url) : null;
        null != s.image && null != I && (h.large_image = I),
            "single" !== s.type && (h.large_text = s.name),
            null != E && (t = E.uri),
            (n = null != r && null != r.partyId ? r.partyId : `${y.HS}${p.default.getId()}`);
        let f = l.length > 128 ? l.substring(0, 125) + "..." : l,
            T = {
                context_uri: t,
                album_id: s.id,
                artist_ids: A.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                type: u,
                button_urls: [],
            },
            m = {
                name: b.name,
                assets: h,
                details: f,
                state: e,
                timestamps: { start: _, end: _ + d },
                party: { id: n },
            };
        return c || ((m.sync_id = o), (m.flags = v.jUm.PLAY | v.jUm.SYNC), (m.metadata = T)), m;
    }
}
let eE = new e_(_.h, {
        USER_CONNECTIONS_UPDATE: el,
        CONNECTION_OPEN: el,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: function (e) {
            let { accountId: t, accessToken: n } = e;
            return en(t, n), !1;
        },
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function (e) {
            let { accountId: t } = e;
            ei(t);
        },
        SPOTIFY_PROFILE_UPDATE: function (e) {
            let { accountId: t, isPremium: n } = e,
                i = K[t];
            if (null == i) return !1;
            (i.isPremium = n), V.info(`Profile updated for ${t}: isPremium = ${n}`);
        },
        SPOTIFY_PLAYER_STATE: function (e) {
            let t,
                n,
                a,
                { accountId: s, isPlaying: o, repeat: d, track: u, position: E, device: A, context: I } = e,
                f = !1;
            if (null != A)
                if (null != $[s]) {
                    let e = $[s].find((e) => {
                        let { id: t } = e;
                        return t === A.id;
                    });
                    null == e ? ($[s].push(A), (f = !0)) : (0, c.A)(e, A) || (Object.assign(e, A), (f = !0)),
                        er(s, A.id);
                } else ($[s] = [A]), (f = !0);
            o ? Z?.start(U, eo) : ((u = null), Z?.stop());
            let m = T.A.getAccount(s, v.fg2.SPOTIFY);
            if (null == m) return f;
            let g = z[s],
                S =
                    null != u
                        ? {
                              account: m,
                              track: u,
                              startTime:
                                  ((t = Date.now()),
                                  (n = null != g ? g.startTime : 0),
                                  Math.abs((a = t - E) - n) > x ? a : n),
                              context: I,
                              repeat: d,
                          }
                        : null,
                N = null != A && null != r && 0 === E && !o;
            N || (z[s] = S);
            let R = i;
            if (
                ((i = l()
                    .values(z)
                    .find((e) => null != e)),
                ed(p.default.getId()),
                null == u || N ? W.stop() : W.start(u.duration - E + G, () => Q(m.id)),
                null != r && ((!o && E > 0) || null == A || (null != S && r.trackId !== S.track.id))
                    ? (V.info(
                          `Listen along active but playback stopped or track changed. Stopping listen along in ${G}ms`,
                      ),
                      Y.start(G, () => {
                          V.info("Stopping listening along"), (0, h.A)(), Q(m.id);
                      }))
                    : Y.isStarted() && (V.info("Listen along stop cancelled as playback of track resumed"), Y.stop()),
                R === i ||
                    (null == g && null == S) ||
                    (null != g && null != S && g.track.id === S.track.id && g.startTime === S.startTime))
            )
                return f;
            null != u &&
                (_.h.dispatch({ type: "SPOTIFY_NEW_TRACK", track: u, connectionId: s }),
                C.default.track(v.HAw.ACTIVITY_UPDATED, {
                    party_platform: v.fg2.SPOTIFY,
                    track_id: u.id,
                    has_images: !0,
                    details: u.album.name,
                    state: u.name,
                    album_id: u.album.id,
                    author_ids: u.artists.map((e) => e.id),
                    author_names: u.artists.map((e) => e.name),
                }));
        },
        SPOTIFY_PLAYER_PLAY: function (e) {
            let { id: t } = e;
            a = t;
        },
        ACTIVITY_PLAY: function (e) {
            let t,
                { activity: n, metadata: i } = e,
                a = X();
            if (null == a) return !1;
            let { socket: s, device: l } = a,
                { sync_id: o, party: d } = n;
            return (
                null != o &&
                null != d &&
                null != d.id &&
                !!(0, y.pH)(d.id) &&
                (null != i && (t = i.context_uri),
                null != r && es(),
                null != i &&
                    void ((0, D.ZH)(s.accountId, s.accessToken, o, i.type ?? y.M0.TRACK, {
                        contextUri: t,
                        deviceId: l.id,
                    }),
                    V.info(`Play started: ${s.accountId} playing ${o} on ${l.name}`)))
            );
        },
        ACTIVITY_SYNC: function (e) {
            let { activity: t, userId: n } = e;
            return ea(n, t, !0);
        },
        ACTIVITY_SYNC_STOP: es,
        SPOTIFY_SET_DEVICES: function (e) {
            let { accountId: t, devices: n } = e;
            ($[t] = n), V.info(`Devices updated for ${t}:`, n);
        },
        SPOTIFY_SET_ACTIVE_DEVICE: function (e) {
            let { accountId: t, deviceId: n } = e;
            er(t, n);
        },
        SPEAKING: function (e) {
            let { userId: t } = e;
            return ed(t);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                let { userId: n } = t;
                return ed(n) || e;
            }, !1);
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
            let { settings: t } = e;
            if (t?.desktopSettings != null) {
                Z?.stop();
                let { sourceId: e, sound: n } = t?.desktopSettings;
                null != e && f.Ay.getObservedAppNameForWindow(e) === b.name && n
                    ? (Z = new u.IX()).start(U, eo)
                    : (Z?.stop(), (Z = null));
            } else null == t && (Z?.stop(), (Z = null));
        },
    }),
    eA = eE;
