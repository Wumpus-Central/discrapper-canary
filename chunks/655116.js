let i, r, a;
(n(321073), n(938796));
var s = n(435558),
    l = n.n(s),
    o = n(158390),
    d = n(855986),
    c = n(52133),
    u = n(451988),
    _ = n(73153),
    E = n(729937),
    A = n(717558),
    f = n(573648),
    h = n(504337),
    I = n(626584),
    p = n(644727),
    m = n(46653),
    g = n(417869),
    T = n(885576),
    S = n(290863),
    N = n(485296),
    C = n(977997),
    O = n(129230),
    R = n(913659),
    L = n(927813),
    y = n(403362),
    D = n(107750),
    b = n(272984),
    v = n(652215);
let P = f.A.get(v.fg2.SPOTIFY),
    M = "hm://pusher/v1/connections/",
    U = 30 * L.A.Millis.SECOND,
    w = 30 * L.A.Millis.SECOND,
    G = 5 * L.A.Millis.MINUTE,
    x = 5 * L.A.Millis.SECOND,
    k = 1.5 * L.A.Millis.SECOND,
    F = +L.A.Millis.MINUTE,
    B = 3 * L.A.Millis.SECOND,
    V = new I.A("Spotify"),
    H = new u.Ep(),
    j = new u.Ep(),
    W = new u.Ep(),
    Y = new u.Ep(),
    K = new u.Ep(),
    $ = {},
    X = {},
    z = {},
    q = !1,
    Q = null;
function J() {
    for (let e in $) {
        let t = $[e];
        if (!t.connected || null == X[e]) continue;
        let n = X[e].find((e) => e.is_active);
        if (null != n) return { socket: t, device: n };
    }
}
function Z(e) {
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
function ee(e) {
    return S.A.findActivity(e, (e) => null != e.party && null != e.party.id && (0, b.pH)(e.party.id));
}
let et = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class en {
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
        ((this.accountId = e),
            (this.accessToken = t),
            (this.pingInterval = new u.IX()),
            (this.backoff = new o.A(void 0, F)),
            this.connect());
    }
    get connected() {
        return null != this.socket && et.has(this.socket.readyState);
    }
    connect() {
        this.connected ||
            this._requestedConnect ||
            (V.info("WS Connecting"),
            (this._requestedDisconnect = !1),
            (this._requestedConnect = !0),
            e_(this.accountId, this.accessToken)
                .then(() => {
                    ((this._requestedConnect = !1),
                        (this.socket = new WebSocket(`wss://dealer.spotify.com/?access_token=${this.accessToken}`)),
                        (this.socket.onopen = this.handleOpen.bind(this)),
                        (this.socket.onmessage = this.handleMessage.bind(this)),
                        (this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)));
                })
                .catch((e) => {
                    (V.error(e), (this._requestedConnect = !1), this.handleClose());
                }));
    }
    disconnect() {
        ((this._requestedDisconnect = !0), this.backoff.cancel());
        try {
            this.socket?.close();
        } catch (e) {}
    }
    ping() {
        this.connected && this.socket?.send(JSON.stringify({ type: "ping" }));
    }
    handleOpen() {
        (V.info("WS Connected"),
            this.backoff.succeed(),
            this.pingInterval.start(U, () => this.ping()),
            (0, D.E$)(this.accountId, this.accessToken),
            (0, D.oG)(this.accountId, this.accessToken));
    }
    handleMessage(e) {
        let { data: t } = e;
        if ("string" != typeof t) return;
        let { type: n, uri: i, payloads: r } = JSON.parse(t);
        if ("message" === n) {
            if ("string" == typeof i && i.startsWith(M))
                ((this.connectionId = decodeURIComponent(i.split(M)[1])),
                    (0, D.tO)(this.accountId, this.accessToken, this.connectionId));
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
                null != n && null != n.state && eu(this.accountId, this.accessToken, n.state);
                break;
            case "DEVICE_STATE_CHANGED":
                this.handleDeviceStateChange();
        }
    }
    handleDeviceStateChange = l().throttle(() => {
        ((0, D.oG)(this.accountId, this.accessToken), e_(this.accountId, this.accessToken));
    }, B);
}
function ei(e, t) {
    e in $
        ? (($[e].accessToken = t), V.info(`Updated account access token: ${e}`))
        : (($[e] = new en(e, t)), V.info(`Added account: ${e}`));
}
function er(e) {
    if (!(e in $)) return;
    ($[e].disconnect(), delete $[e]);
    let t = z[e];
    (null != t && null != i && t.track.id === i.track.id && (i = null), delete z[e], V.info(`Removed account: ${e}`));
}
function ea(e, t) {
    for (let n of X[e]) n.is_active = n.id === t;
}
function es(e, t, n) {
    let i = J();
    if (null == i) return !1;
    let { socket: a, device: s } = i,
        { sync_id: l, party: o, timestamps: d } = t;
    if (null == l || null == o || null == o.id || !(0, b.pH)(o.id)) return !1;
    let c = null != d && null != d.start ? d.start : Date.now(),
        _ = !1,
        A = z[a.accountId];
    null != A && !1 === A.repeat && (_ = null);
    let f = (0, b.NJ)(t.metadata?.type ?? b.M0.TRACK);
    if (null == f) return;
    let h = { userId: e, partyId: o.id, trackId: l, startTime: c };
    ((r = h),
        (async () => {
            let n = null,
                i = new u.Ep();
            try {
                n = await Promise.race([(0, E.yb)(t, e), new Promise((e) => i.start(250, () => e(null)))]);
            } catch {
            } finally {
                i.stop();
            }
            if (r !== h) return;
            let o = (0, b.NJ)(n?.type ?? f),
                d = n?.album_id,
                A = o === b.M0.TRACK && "string" == typeof d && d.trim().length > 0 ? `spotify:album:${d}` : void 0;
            h.albumContextUri = A;
            try {
                await (0, D.ZH)(a.accountId, a.accessToken, l, o ?? f, {
                    contextUri: A,
                    position: Math.max(0, Date.now() - c),
                    deviceId: s.id,
                    repeat: _,
                });
            } catch (e) {
                V.warn("Listen along play command failed", e);
            }
        })());
    let I = "presence change";
    (n && ((I = "started"), O.default.track(v.HAw.SPOTIFY_LISTEN_ALONG_STARTED, { party_id: o.id, other_user_id: e })),
        V.info(`Listen along ${I}: ${a.accountId} to ${e} playing ${l} on ${s.name}`));
}
function el() {
    O.default.track(v.HAw.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != r ? r.partyId : null,
        other_user_id: null != r ? r.userId : null,
    });
    let e = null != r ? r.trackId : null;
    ((r = null), V.info("Listen along stopped"));
    let t = J();
    if (null == t) return;
    let { socket: n } = t,
        i = z[n.accountId];
    null != i && i.track.id === e && (0, D.v7)(n.accountId, n.accessToken);
}
function eo() {
    let e = Object.keys($),
        t = g.A.getAccounts().filter((e) => {
            let { type: t } = e;
            return t === v.fg2.SPOTIFY;
        });
    if (null == t) return !1;
    let n = t.map((e) => {
        let { id: t } = e;
        return t;
    });
    for (let t of e) n.includes(t) || er(t);
    let r = !1;
    for (let n of t)
        if ((null != i && i.account.id === n.id && ((i.account = n), (r = !0)), !e.includes(n.id))) {
            if (null != n.accessToken) {
                ei(n.id, n.accessToken);
                continue;
            }
            (0, D.iD)(n.id);
        }
    return r;
}
function ed() {
    if (null == i) return;
    let e = J();
    if (null == e) return;
    let { socket: t } = e;
    ((q = !0),
        (0, D.v7)(t.accountId, t.accessToken),
        O.default.track(v.HAw.SPOTIFY_AUTO_PAUSED),
        V.info("Playback auto paused"));
}
function ec(e) {
    if (e === m.default.getId()) {
        let t = C.A.isCurrentClientInVoiceChannel(),
            n = (0, A.R)({ userId: e, checkSoundSharing: !0 });
        t && n && null != i ? (H.start(w, ed, !1), j.stop()) : j.start(100, () => H.stop(), !1);
    }
    return !1;
}
function eu(e, t, n) {
    let i,
        r,
        { device: a, progress_ms: s, is_playing: l, repeat_state: o, item: d, context: c } = n;
    if (null != d && d.type === b.M0.TRACK) {
        let e = d.id;
        (null != d.linked_from && null != d.linked_from.id && (e = d.linked_from.id),
            (i = {
                id: e,
                name: d.name,
                duration: d.duration_ms,
                type: b.M0.TRACK,
                album: {
                    id: d.album?.id ?? "",
                    name: d.album?.name ?? "",
                    image: d.album?.images[0],
                    type: d.album?.type ?? b.M0.ALBUM,
                },
                artists: Array.isArray(d.artists) ? d.artists.filter((e) => (0, y.Vq)(e.id) && (0, y.Vq)(e.name)) : [],
                isLocal: d.is_local || !1,
            }));
    } else
        null != d &&
            d.type === b.M0.EPISODE &&
            (i = {
                id: d.id,
                name: d.name,
                duration: d.duration_ms,
                type: b.M0.EPISODE,
                album: {
                    id: d.show?.id ?? "",
                    name: d.show?.name ?? "",
                    image: d.show?.images[0],
                    type: d.album?.type ?? b.M0.SHOW,
                },
                artists: [],
                isLocal: !1,
            });
    if (
        (null != a && !0 !== a.is_active && (a = { ...a, is_active: !0 }),
        null != c && [b.M0.PLAYLIST, b.M0.ALBUM].includes(c.type))
    ) {
        let n = eA.getPlayerState(e);
        r =
            null != n && null != n.context && n.context.uri === c.uri
                ? Promise.resolve(n.context)
                : c.type === b.M0.ALBUM
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
        (null == t || t.type !== b.M0.PLAYLIST || t.public || (t = null),
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
            }));
    });
}
function e_(e, t) {
    return D.tB
        .get(e, t, {
            url: b.RQ.PLAYER,
            query: { additional_types: `${b.M0.TRACK},${b.M0.EPISODE}` },
            onlyRetryOnAuthorizationErrors: !0,
        })
        .then((n) => {
            let i = n.body;
            null != i ? eu(e, t, i).then(() => n) : Z(e);
        })
        .catch(() => Z(e));
}
class eE extends d.Ay.Store {
    static displayName = "SpotifyStore";
    initialize() {
        (this.waitFor(m.default, g.A, T.A, S.A, p.Ay, N.A, C.A),
            this.syncWith([S.A], () =>
                (function () {
                    if (null == r || null == J()) return !1;
                    let { userId: e } = r,
                        t = ee(e);
                    if (null == t)
                        return (
                            W.start(G, () => {
                                null != r && r.userId === e && (0, h.A)();
                            }),
                            !1
                        );
                    W.stop();
                    let { sync_id: n, timestamps: i, party: a } = t,
                        s = null != n && r.trackId !== n,
                        l = null != i && r.startTime !== i.start;
                    return s || l ? es(e, t, !1) : null != a && a.id !== r.partyId && ((r.partyId = a.id), !0);
                })(),
            ),
            (0, D.f0)());
    }
    hasConnectedAccount() {
        return Object.keys($).length > 0;
    }
    getActiveSocketAndDevice() {
        return J();
    }
    getPlayableComputerDevices() {
        let e = [];
        for (let t in $) {
            let n = $[t];
            if (!n.connected || null == X[t]) continue;
            let i = X[t].find((e) => !e.is_restricted && "Computer" === e.type);
            null != i && e.push({ socket: n, device: i });
        }
        return e;
    }
    canPlay(e) {
        let { sync_id: t, party: n } = e;
        return null != J() && null != t && null != n && null != n.id && (0, b.pH)(n.id);
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
        return null != i && i.account.showActivity && !T.A.isIdle();
    }
    getActivity() {
        let e, t, n;
        if (null == i) return null != r ? ee(r.userId) : null;
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
        let f = {},
            h = null != s.image ? (0, R.Di)(v.fg2.SPOTIFY, s.image.url) : null;
        (null != s.image && null != h && (f.large_image = h),
            "single" !== s.type && (f.large_text = s.name),
            null != E && (t = E.uri),
            (n = null != r && null != r.partyId ? r.partyId : `${b.HS}${m.default.getId()}`));
        let I = l.length > 128 ? l.substring(0, 125) + "..." : l,
            p = {
                context_uri: t,
                album_id: s.id,
                artist_ids: A.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                type: u,
                button_urls: [],
            },
            g = {
                name: P.name,
                assets: f,
                details: I,
                state: e,
                timestamps: { start: _, end: _ + d },
                party: { id: n },
            };
        return (c || ((g.sync_id = o), (g.flags = v.jUm.PLAY | v.jUm.SYNC), (g.metadata = p)), g);
    }
}
let eA = new eE(_.h, {
    USER_CONNECTIONS_UPDATE: eo,
    CONNECTION_OPEN: eo,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN: function (e) {
        let { accountId: t, accessToken: n } = e;
        return (ei(t, n), !1);
    },
    SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function (e) {
        let { accountId: t } = e;
        er(t);
    },
    SPOTIFY_PROFILE_UPDATE: function (e) {
        let { accountId: t, isPremium: n } = e,
            i = $[t];
        if (null == i) return !1;
        ((i.isPremium = n), V.info(`Profile updated for ${t}: isPremium = ${n}`));
    },
    SPOTIFY_PLAYER_STATE: function (e) {
        let t,
            n,
            a,
            { accountId: s, isPlaying: o, repeat: d, track: u, position: E, device: A, context: f } = e,
            I = !1;
        if (null != A)
            if (null != X[s]) {
                let e = X[s].find((e) => {
                    let { id: t } = e;
                    return t === A.id;
                });
                (null == e ? (X[s].push(A), (I = !0)) : (0, c.A)(e, A) || (Object.assign(e, A), (I = !0)), ea(s, A.id));
            } else ((X[s] = [A]), (I = !0));
        o ? Q?.start(w, ed) : ((u = null), Q?.stop());
        let p = g.A.getAccount(s, v.fg2.SPOTIFY);
        if (null == p) return I;
        let T = z[s],
            S =
                null != u
                    ? {
                          account: p,
                          track: u,
                          startTime:
                              ((t = Date.now()),
                              (n = null != T ? T.startTime : 0),
                              Math.abs((a = t - E) - n) > k ? a : n),
                          position: E,
                          positionUpdatedAt: Date.now(),
                          context: f,
                          repeat: d,
                      }
                    : null;
        r?.waitingForHost === !0 && f?.uri !== r.albumContextUri && (r.waitingForHost = void 0);
        let N = null != T ? T.position + Math.max(0, Date.now() - T.positionUpdatedAt) : 0,
            C =
                null != A &&
                null != r &&
                !r.waitingForHost &&
                null != r.albumContextUri &&
                f?.uri === r.albumContextUri &&
                o &&
                null != u &&
                u.id !== r.trackId &&
                null != T &&
                T.track.id === r.trackId &&
                T.track.duration > 0 &&
                Math.abs(T.track.duration - N) <= x;
        C &&
            null != r &&
            ((r.waitingForHost = !0),
            (async function (e) {
                let t = $[e];
                if (null != t)
                    try {
                        await (0, D.v7)(e, t.accessToken);
                    } catch (e) {
                        V.warn("Unable to pause Spotify after album advance", e);
                    }
            })(s));
        let R =
            (r?.waitingForHost === !0 && f?.uri === r.albumContextUri) ||
            (null != A && null != r && ((0 === E && !o) || C));
        R || (z[s] = S);
        let L = i;
        if (
            ((i = l()
                .values(z)
                .find((e) => null != e)),
            ec(m.default.getId()),
            null == u || R ? Y.stop() : Y.start(u.duration - E + x, () => Z(p.id)),
            null == r || R || ((o || !(E > 0)) && null != A && (null == S || r.trackId === S.track.id))
                ? K.isStarted() && (V.info("Listen along stop cancelled as playback of track resumed"), K.stop())
                : (V.info(`Listen along active but playback stopped or track changed. Stopping listen along in ${x}ms`),
                  K.start(x, () => {
                      (V.info("Stopping listening along"), (0, h.A)(), Z(p.id));
                  })),
            L === i ||
                (null == T && null == S) ||
                (null != T && null != S && T.track.id === S.track.id && T.startTime === S.startTime))
        )
            return I;
        null != u &&
            (_.h.dispatch({ type: "SPOTIFY_NEW_TRACK", track: u, connectionId: s }),
            O.default.track(v.HAw.ACTIVITY_UPDATED, {
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
            a = J();
        if (null == a) return !1;
        let { socket: s, device: l } = a,
            { sync_id: o, party: d } = n;
        return (
            null != o &&
            null != d &&
            null != d.id &&
            !!(0, b.pH)(d.id) &&
            (null != i && (t = i.context_uri),
            null != r && el(),
            null != i &&
                void ((0, D.ZH)(s.accountId, s.accessToken, o, i.type ?? b.M0.TRACK, { contextUri: t, deviceId: l.id }),
                V.info(`Play started: ${s.accountId} playing ${o} on ${l.name}`)))
        );
    },
    ACTIVITY_SYNC: function (e) {
        let { activity: t, userId: n } = e;
        return es(n, t, !0);
    },
    ACTIVITY_SYNC_STOP: el,
    SPOTIFY_SET_DEVICES: function (e) {
        let { accountId: t, devices: n } = e;
        ((X[t] = n), V.info(`Devices updated for ${t}:`, n));
    },
    SPOTIFY_SET_ACTIVE_DEVICE: function (e) {
        let { accountId: t, deviceId: n } = e;
        ea(t, n);
    },
    SPEAKING: function (e) {
        let { userId: t } = e;
        return ec(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { userId: n } = t;
            return ec(n) || e;
        }, !1);
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            Q?.stop();
            let { sourceId: e, sound: n } = t?.desktopSettings;
            null != e && p.Ay.getObservedAppNameForWindow(e) === P.name && n
                ? (Q = new u.IX()).start(w, ed)
                : (Q?.stop(), (Q = null));
        } else null == t && (Q?.stop(), (Q = null));
    },
});
n.d(t, {}, { A: eA });
