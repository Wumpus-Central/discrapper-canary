let r, i, o;
n.d(t, { Z: () => eB }), n(47120), n(26686), n(301563), n(653041), n(757143), n(789020);
var a,
    s = n(392711),
    l = n.n(s),
    c = n(261470),
    u = n(442837),
    d = n(902704),
    f = n(846519),
    p = n(570140),
    _ = n(586902),
    h = n(726542),
    m = n(524331),
    g = n(710845),
    E = n(594190),
    v = n(314897),
    b = n(553795),
    y = n(517100),
    O = n(158776),
    S = n(606304),
    I = n(979651),
    T = n(626135),
    N = n(81063),
    A = n(70956),
    C = n(823379),
    R = n(781518),
    P = n(616922),
    D = n(981631);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = h.Z.get(D.ABu.SPOTIFY),
    k = 'wss://dealer.spotify.com/?access_token=',
    U = 'hm://pusher/v1/connections/',
    G = 30 * A.Z.Millis.SECOND,
    B = 30 * A.Z.Millis.SECOND,
    F = 100,
    V = 5 * A.Z.Millis.MINUTE,
    Z = 5 * A.Z.Millis.SECOND,
    H = 1.5 * A.Z.Millis.SECOND,
    W = 'Computer',
    Y = 5,
    K = +A.Z.Millis.MINUTE,
    z = 3 * A.Z.Millis.SECOND,
    q = 128,
    Q = {
        MESSAGE: 'message',
        PING: 'ping',
        PONG: 'pong'
    },
    X = 'single',
    J = new g.Z('Spotify'),
    $ = new f.V7(),
    ee = new f.V7(),
    et = new f.V7(),
    en = new f.V7(),
    er = new f.V7(),
    ei = {},
    eo = {},
    ea = {},
    es = !1,
    el = null;
function ec() {
    for (let e in ei) {
        let t = ei[e];
        if (!t.connected || null == eo[e]) continue;
        let n = eo[e].find((e) => e.is_active);
        if (null != n)
            return {
                socket: t,
                device: n
            };
    }
}
function eu(e, t) {
    let n = Date.now(),
        r = null != e ? e.startTime : 0,
        i = n - t;
    return Math.abs(i - r) > H ? i : r;
}
function ed(e) {
    p.Z.dispatch({
        type: 'SPOTIFY_PLAYER_STATE',
        accountId: e,
        track: null,
        volumePercent: 0,
        isPlaying: !1,
        repeat: !1,
        position: 0,
        context: null
    });
}
function ef(e) {
    return O.Z.findActivity(e, (e) => null != e.party && null != e.party.id && (0, P.Ps)(e.party.id));
}
let ep = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class e_ {
    get connected() {
        return null != this.socket && ep.has(this.socket.readyState);
    }
    connect() {
        this.connected ||
            this._requestedConnect ||
            (J.info('WS Connecting'),
            (this._requestedDisconnect = !1),
            (this._requestedConnect = !0),
            ek(this.accountId, this.accessToken)
                .then(() => {
                    (this._requestedConnect = !1), (this.socket = new WebSocket(''.concat(k).concat(this.accessToken))), (this.socket.onopen = this.handleOpen.bind(this)), (this.socket.onmessage = this.handleMessage.bind(this)), (this.socket.onclose = this.socket.onerror = this.handleClose.bind(this));
                })
                .catch((e) => {
                    J.error(e), (this._requestedConnect = !1), this.handleClose();
                }));
    }
    disconnect() {
        (this._requestedDisconnect = !0), this.backoff.cancel();
        try {
            var e;
            null === (e = this.socket) || void 0 === e || e.close();
        } catch (e) {}
    }
    ping() {
        var e;
        this.connected && (null === (e = this.socket) || void 0 === e || e.send(JSON.stringify({ type: Q.PING })));
    }
    handleOpen() {
        J.info('WS Connected'), this.backoff.succeed(), this.pingInterval.start(G, () => this.ping()), (0, R.Ai)(this.accountId, this.accessToken), (0, R.PW)(this.accountId, this.accessToken);
    }
    handleMessage(e) {
        let { data: t } = e;
        if ('string' != typeof t) return;
        let { type: n, uri: r, payloads: i } = JSON.parse(t);
        switch (n) {
            case Q.MESSAGE:
                if ('string' == typeof r && r.startsWith(U)) (this.connectionId = decodeURIComponent(r.split(U)[1])), (0, R.am)(this.accountId, this.accessToken, this.connectionId);
                else if (Array.isArray(i)) {
                    for (let { events: e } of i) if (null != e) for (let t of e) this.handleEvent(t);
                }
            case Q.PONG:
        }
    }
    handleClose() {
        if ((this.pingInterval.stop(), !this._requestedDisconnect))
            try {
                let e = this.backoff.fail(() => {
                    this._requestedDisconnect || this.connect();
                });
                J.info('WS Disconnected. Next retry in '.concat(Math.round(e), 'ms'));
            } catch (e) {}
    }
    handleEvent(e) {
        let { type: t, event: n } = e;
        switch (t) {
            case 'PLAYER_STATE_CHANGED':
                null != n && null != n.state && ej(this.accountId, this.accessToken, n.state);
                break;
            case 'DEVICE_STATE_CHANGED':
                this.handleDeviceStateChange();
        }
    }
    constructor(e, t) {
        w(this, 'accessToken', void 0),
            w(this, 'accountId', void 0),
            w(this, 'connectionId', void 0),
            w(this, 'isPremium', void 0),
            w(this, 'pingInterval', void 0),
            w(this, 'backoff', void 0),
            w(this, 'socket', void 0),
            w(this, '_requestedDisconnect', !1),
            w(this, '_requestedConnect', !1),
            w(
                this,
                'handleDeviceStateChange',
                l().throttle(() => {
                    (0, R.PW)(this.accountId, this.accessToken), ek(this.accountId, this.accessToken);
                }, z)
            ),
            (this.accountId = e),
            (this.accessToken = t),
            (this.pingInterval = new f.Xp()),
            (this.backoff = new c.Z(void 0, K)),
            this.connect();
    }
}
function eh(e, t) {
    e in ei ? ((ei[e].accessToken = t), J.info('Updated account access token: '.concat(e))) : ((ei[e] = new e_(e, t)), J.info('Added account: '.concat(e)));
}
function em(e) {
    if (!(e in ei)) return;
    ei[e].disconnect(), delete ei[e];
    let t = ea[e];
    null != t && null != r && t.track.id === r.track.id && (r = null), delete ea[e], J.info('Removed account: '.concat(e));
}
function eg(e, t) {
    for (let n of eo[e]) n.is_active = n.id === t;
}
function eE(e, t, n) {
    var r, o;
    let a = ec();
    if (null == a) return !1;
    let { socket: s, device: l } = a,
        { sync_id: c, party: u, timestamps: d } = t;
    if (null == c || null == u || null == u.id || !(0, P.Ps)(u.id)) return !1;
    let f = null != d && null != d.start ? d.start : Date.now(),
        p = Math.max(0, Date.now() - f),
        _ = !1,
        h = ea[s.accountId];
    null != h && !1 === h.repeat && (_ = null);
    let m = (0, P.c8)(null !== (o = null === (r = t.metadata) || void 0 === r ? void 0 : r.type) && void 0 !== o ? o : P.Hw.TRACK);
    if (null == m) return;
    (0, R.hY)(s.accountId, s.accessToken, c, m, {
        position: +p,
        deviceId: l.id,
        repeat: _
    }),
        (i = {
            userId: e,
            partyId: u.id,
            trackId: c,
            startTime: f
        });
    let g = 'presence change';
    n &&
        ((g = 'started'),
        T.default.track(D.rMx.SPOTIFY_LISTEN_ALONG_STARTED, {
            party_id: u.id,
            other_user_id: e
        })),
        J.info('Listen along '.concat(g, ': ').concat(s.accountId, ' to ').concat(e, ' playing ').concat(c, ' on ').concat(l.name));
}
function ev() {
    T.default.track(D.rMx.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != i ? i.partyId : null,
        other_user_id: null != i ? i.userId : null
    });
    let e = null != i ? i.trackId : null;
    (i = null), J.info('Listen along stopped');
    let t = ec();
    if (null == t) return;
    let { socket: n } = t,
        r = ea[n.accountId];
    null != r && r.track.id === e && (0, R.wO)(n.accountId, n.accessToken);
}
function eb() {
    let e = Object.keys(ei),
        t = b.Z.getAccounts().filter((e) => {
            let { type: t } = e;
            return t === D.ABu.SPOTIFY;
        });
    if (null == t) return !1;
    let n = t.map((e) => {
        let { id: t } = e;
        return t;
    });
    for (let t of e) !n.includes(t) && em(t);
    let i = !1;
    for (let n of t)
        if ((null != r && r.account.id === n.id && ((r.account = n), (i = !0)), !e.includes(n.id))) {
            if (null != n.accessToken) {
                eh(n.id, n.accessToken);
                continue;
            }
            (0, R.hP)(n.id);
        }
    return i;
}
function ey(e) {
    let { accountId: t, accessToken: n } = e;
    return eh(t, n), !1;
}
function eO(e) {
    let { accountId: t } = e;
    em(t);
}
function eS(e) {
    let { accountId: t, isPlaying: n, repeat: o, track: a, position: s, device: c, context: u } = e,
        f = !1;
    if (null != c) {
        if (null != eo[t]) {
            let e = eo[t].find((e) => {
                let { id: t } = e;
                return t === c.id;
            });
            null == e ? (eo[t].push(c), (f = !0)) : (0, d.Z)(e, c) || (Object.assign(e, c), (f = !0)), eg(t, c.id);
        } else (eo[t] = [c]), (f = !0);
    }
    n ? null == el || el.start(B, eP) : ((a = null), null == el || el.stop());
    let _ = b.Z.getAccount(t, D.ABu.SPOTIFY);
    if (null == _) return f;
    let h = ea[t],
        g =
            null != a
                ? {
                      account: _,
                      track: a,
                      startTime: eu(h, s),
                      context: u,
                      repeat: o
                  }
                : null,
        E = null != c && null != i && 0 === s && !n;
    E || (ea[t] = g);
    let y = r;
    if (
        ((r = l()
            .values(ea)
            .find((e) => null != e)),
        eD(v.default.getId()),
        null == a || E ? en.stop() : en.start(a.duration - s + Z, () => ed(_.id)),
        null != i && ((!n && s > 0) || null == c || (null != g && i.trackId !== g.track.id))
            ? (J.info('Listen along active but playback stopped or track changed. Stopping listen along in '.concat(Z, 'ms')),
              er.start(Z, () => {
                  J.info('Stopping listening along'), (0, m.Z)(), ed(_.id);
              }))
            : er.isStarted() && (J.info('Listen along stop cancelled as playback of track resumed'), er.stop()),
        y === r || (null == h && null == g) || (null != h && null != g && h.track.id === g.track.id && h.startTime === g.startTime))
    )
        return f;
    null != a &&
        (p.Z.dispatch({
            type: 'SPOTIFY_NEW_TRACK',
            track: a,
            connectionId: t
        }),
        T.default.track(D.rMx.ACTIVITY_UPDATED, {
            party_platform: D.ABu.SPOTIFY,
            track_id: a.id,
            has_images: !0,
            details: a.album.name,
            state: a.name,
            album_id: a.album.id,
            author_ids: a.artists.map((e) => e.id),
            author_names: a.artists.map((e) => e.name)
        }));
}
function eI(e) {
    let { id: t } = e;
    o = t;
}
function eT(e) {
    let { accountId: t, devices: n } = e;
    (eo[t] = n), J.info('Devices updated for '.concat(t, ':'), n);
}
function eN(e) {
    let { accountId: t, deviceId: n } = e;
    eg(t, n);
}
function eA(e) {
    var t;
    let n,
        { activity: r, metadata: o } = e,
        a = ec();
    if (null == a) return !1;
    let { socket: s, device: l } = a,
        { sync_id: c, party: u } = r;
    return (
        !!(null != c && null != u && null != u.id && (0, P.Ps)(u.id)) &&
        (null != o && (n = o.context_uri),
        null != i && ev(),
        null != o &&
            void ((0, R.hY)(s.accountId, s.accessToken, c, null !== (t = o.type) && void 0 !== t ? t : P.Hw.TRACK, {
                contextUri: n,
                deviceId: l.id
            }),
            J.info('Play started: '.concat(s.accountId, ' playing ').concat(c, ' on ').concat(l.name))))
    );
}
function eC(e) {
    let { activity: t, userId: n } = e;
    return eE(n, t, !0);
}
function eR() {
    if (null == i || null == ec()) return !1;
    let { userId: e } = i,
        t = ef(e);
    if (null == t)
        return (
            et.start(V, () => {
                null != i && i.userId === e && (0, m.Z)();
            }),
            !1
        );
    et.stop();
    let { sync_id: n, timestamps: r, party: o } = t,
        a = null != n && i.trackId !== n,
        s = null != r && i.startTime !== r.start;
    return a || s ? eE(e, t, !1) : null != o && o.id !== i.partyId && ((i.partyId = o.id), !0);
}
function eP() {
    if (null == r) return;
    let e = ec();
    if (null == e) return;
    let { socket: t } = e;
    (es = !0), (0, R.wO)(t.accountId, t.accessToken), T.default.track(D.rMx.SPOTIFY_AUTO_PAUSED), J.info('Playback auto paused');
}
function eD(e) {
    if (e === v.default.getId()) {
        let t = I.Z.isCurrentClientInVoiceChannel(),
            n = (0, _.O)({
                userId: e,
                checkSoundSharing: !0,
                checkSoundboardSounds: !1
            });
        t && n && null != r ? ($.start(B, eP, !1), ee.stop()) : ee.start(F, () => $.stop(), !1);
    }
    return !1;
}
function ew(e) {
    let { userId: t } = e;
    return eD(t);
}
function eL(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n } = t;
        return eD(n) || e;
    }, !1);
}
function ex(e) {
    let { accountId: t, isPremium: n } = e,
        r = ei[t];
    if (null == r) return !1;
    (r.isPremium = n), J.info('Profile updated for '.concat(t, ': isPremium = ').concat(n));
}
function eM(e) {
    let { settings: t } = e;
    if ((null == t ? void 0 : t.desktopSettings) != null) {
        null == el || el.stop();
        let { sourceId: e, sound: n } = null == t ? void 0 : t.desktopSettings;
        null != e && E.ZP.getObservedAppNameForWindow(e) === j.name && n ? (el = new f.Xp()).start(B, eP) : (null == el || el.stop(), (el = null));
    } else null == t && (null == el || el.stop(), (el = null));
}
function ej(e, t, n) {
    var r, i, o, a, s, l, c, u, d, f, _, h, m, g;
    let E,
        v,
        { device: b, progress_ms: y, is_playing: O, repeat_state: S, item: I, context: T } = n;
    if (null != I && I.type === P.Hw.TRACK) {
        let e = I.id;
        null != I.linked_from && null != I.linked_from.id && (e = I.linked_from.id),
            (E = {
                id: e,
                name: I.name,
                duration: I.duration_ms,
                type: P.Hw.TRACK,
                album: {
                    id: null !== (s = null === (r = I.album) || void 0 === r ? void 0 : r.id) && void 0 !== s ? s : '',
                    name: null !== (l = null === (i = I.album) || void 0 === i ? void 0 : i.name) && void 0 !== l ? l : '',
                    image: null === (o = I.album) || void 0 === o ? void 0 : o.images[0],
                    type: null !== (c = null === (a = I.album) || void 0 === a ? void 0 : a.type) && void 0 !== c ? c : P.Hw.ALBUM
                },
                artists: Array.isArray(I.artists) ? I.artists.filter((e) => (0, C.lm)(e.id) && (0, C.lm)(e.name)) : [],
                isLocal: I.is_local || !1
            });
    } else
        null != I &&
            I.type === P.Hw.EPISODE &&
            (E = {
                id: I.id,
                name: I.name,
                duration: I.duration_ms,
                type: P.Hw.EPISODE,
                album: {
                    id: null !== (h = null === (u = I.show) || void 0 === u ? void 0 : u.id) && void 0 !== h ? h : '',
                    name: null !== (m = null === (d = I.show) || void 0 === d ? void 0 : d.name) && void 0 !== m ? m : '',
                    image: null === (f = I.show) || void 0 === f ? void 0 : f.images[0],
                    type: null !== (g = null === (_ = I.album) || void 0 === _ ? void 0 : _.type) && void 0 !== g ? g : P.Hw.SHOW
                },
                artists: [],
                isLocal: !1
            });
    if ((null != b && !0 !== b.is_active && (b = M(L({}, b), { is_active: !0 })), null != T && [P.Hw.PLAYLIST, P.Hw.ALBUM].includes(T.type))) {
        let n = eG.getPlayerState(e);
        v =
            null != n && null != n.context && n.context.uri === T.uri
                ? Promise.resolve(n.context)
                : T.type === P.Hw.ALBUM
                  ? Promise.resolve(T)
                  : R.rC
                        .get(e, t, { url: T.href })
                        .then((e) => {
                            let { body: t } = e;
                            return t;
                        })
                        .catch((e) => {
                            if (e && 404 === e.status) return null;
                            throw e;
                        });
    } else v = Promise.resolve(void 0);
    return v.then((t) => {
        null == t || t.type !== P.Hw.PLAYLIST || t.public || (t = null),
            p.Z.dispatch({
                type: 'SPOTIFY_PLAYER_STATE',
                accountId: e,
                track: E,
                volumePercent: null != b ? b.volume_percent : 0,
                isPlaying: O,
                repeat: 'off' !== S,
                position: y,
                context: t,
                device: b
            });
    });
}
function ek(e, t) {
    return R.rC
        .get(e, t, {
            url: P.C7.PLAYER,
            query: { additional_types: ''.concat(P.Hw.TRACK, ',').concat(P.Hw.EPISODE) },
            onlyRetryOnAuthorizationErrors: !0
        })
        .then((n) => {
            let r = n.body;
            null != r ? ej(e, t, r).then(() => n) : ed(e);
        })
        .catch(() => ed(e));
}
class eU extends (a = u.ZP.Store) {
    initialize() {
        this.waitFor(b.Z, S.Z), this.syncWith([O.Z], () => eR()), (0, R.k1)();
    }
    hasConnectedAccount() {
        return Object.keys(ei).length > 0;
    }
    getActiveSocketAndDevice() {
        return ec();
    }
    getPlayableComputerDevices() {
        let e = [];
        for (let t in ei) {
            let n = ei[t];
            if (!n.connected || null == eo[t]) continue;
            let r = eo[t].find((e) => !e.is_restricted && e.type === W);
            null != r &&
                e.push({
                    socket: n,
                    device: r
                });
        }
        return e;
    }
    canPlay(e) {
        let { sync_id: t, party: n } = e;
        return null != ec() && null != t && null != n && null != n.id && (0, P.Ps)(n.id);
    }
    getSyncingWith() {
        return i;
    }
    wasAutoPaused() {
        return es;
    }
    getLastPlayedTrackId() {
        return o;
    }
    getTrack() {
        return null != r ? r.track : null;
    }
    getPlayerState(e) {
        return ea[e];
    }
    shouldShowActivity() {
        return null != r && r.account.showActivity && !y.Z.isIdle();
    }
    getActivity() {
        let e, t, n;
        if (null == r) return null != i ? ef(i.userId) : null;
        let {
                track: { artists: o, album: a, name: s, id: l, duration: c, isLocal: u, type: d },
                startTime: f,
                context: p
            } = r,
            _ = o.slice(0, Y);
        o.length > 0 &&
            (e = _.map((e) => {
                let { name: t } = e;
                return t.replace(/;/g, '');
            }).join('; '));
        let h = {},
            m = null != a.image ? (0, N.getAssetFromImageURL)(D.ABu.SPOTIFY, a.image.url) : null;
        null != a.image && null != m && (h.large_image = m), a.type !== X && (h.large_text = a.name), null != p && (t = p.uri), (n = null != i && null != i.partyId ? i.partyId : ''.concat(P.lS).concat(v.default.getId()));
        let g = s.length > q ? s.substring(0, q - 3) + '...' : s,
            E = {
                context_uri: t,
                album_id: a.id,
                artist_ids: _.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                type: d,
                button_urls: []
            },
            b = {
                name: j.name,
                assets: h,
                details: g,
                state: e,
                timestamps: {
                    start: f,
                    end: f + c
                },
                party: { id: n }
            };
        return u || ((b.sync_id = l), (b.flags = D.xjy.PLAY | D.xjy.SYNC), (b.metadata = E)), b;
    }
}
w(eU, 'displayName', 'SpotifyStore');
let eG = new eU(p.Z, {
        USER_CONNECTIONS_UPDATE: eb,
        CONNECTION_OPEN: eb,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: ey,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: eO,
        SPOTIFY_PROFILE_UPDATE: ex,
        SPOTIFY_PLAYER_STATE: eS,
        SPOTIFY_PLAYER_PLAY: eI,
        ACTIVITY_PLAY: eA,
        ACTIVITY_SYNC: eC,
        ACTIVITY_SYNC_STOP: ev,
        SPOTIFY_SET_DEVICES: eT,
        SPOTIFY_SET_ACTIVE_DEVICE: eN,
        SPEAKING: ew,
        VOICE_STATE_UPDATES: eL,
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: eM
    }),
    eB = eG;
