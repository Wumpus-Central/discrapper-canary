let i, r, a;
n.d(t, { Z: () => eU }), n(47120), n(653041), n(724458), n(757143), n(789020);
var s,
    o = n(392711),
    l = n.n(o),
    u = n(261470),
    c = n(442837),
    d = n(902704),
    f = n(846519),
    _ = n(570140),
    p = n(586902),
    h = n(726542),
    m = n(524331),
    g = n(710845),
    E = n(594190),
    v = n(314897),
    y = n(553795),
    I = n(517100),
    T = n(158776),
    b = n(606304),
    S = n(979651),
    A = n(626135),
    N = n(81063),
    C = n(70956),
    R = n(823379),
    O = n(781518),
    D = n(616922),
    x = n(981631);
function L(e, t, n) {
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
let P = h.Z.get(x.ABu.SPOTIFY),
    w = 'wss://dealer.spotify.com/?access_token=',
    M = 'hm://pusher/v1/connections/',
    k = 30 * C.Z.Millis.SECOND,
    U = 30 * C.Z.Millis.SECOND,
    G = 100,
    B = 5 * C.Z.Millis.MINUTE,
    Z = 5 * C.Z.Millis.SECOND,
    F = 1.5 * C.Z.Millis.SECOND,
    V = 'Computer',
    j = 5,
    H = 1 * C.Z.Millis.MINUTE,
    Y = 3 * C.Z.Millis.SECOND,
    W = 128,
    K = {
        MESSAGE: 'message',
        PING: 'ping',
        PONG: 'pong'
    },
    z = 'single',
    q = new g.Z('Spotify'),
    Q = new f.V7(),
    X = new f.V7(),
    J = new f.V7(),
    $ = new f.V7(),
    ee = new f.V7(),
    et = {},
    en = {},
    ei = {},
    er = !1,
    ea = null;
function es() {
    for (let e in et) {
        let t = et[e];
        if (!t.connected || null == en[e]) continue;
        let n = en[e].find((e) => e.is_active);
        if (null != n)
            return {
                socket: t,
                device: n
            };
    }
}
function eo(e, t) {
    let n = Date.now(),
        i = null != e ? e.startTime : 0,
        r = n - t;
    return Math.abs(r - i) > F ? r : i;
}
function el(e) {
    _.Z.dispatch({
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
function eu(e) {
    return T.Z.findActivity(e, (e) => null != e.party && null != e.party.id && (0, D.Ps)(e.party.id));
}
let ec = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class ed {
    get connected() {
        return null != this.socket && ec.has(this.socket.readyState);
    }
    connect() {
        this.connected ||
            this._requestedConnect ||
            (q.info('WS Connecting'),
            (this._requestedDisconnect = !1),
            (this._requestedConnect = !0),
            ew(this.accountId, this.accessToken)
                .then(() => {
                    (this._requestedConnect = !1), (this.socket = new WebSocket(''.concat(w).concat(this.accessToken))), (this.socket.onopen = this.handleOpen.bind(this)), (this.socket.onmessage = this.handleMessage.bind(this)), (this.socket.onclose = this.socket.onerror = this.handleClose.bind(this));
                })
                .catch((e) => {
                    q.error(e), (this._requestedConnect = !1), this.handleClose();
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
        this.connected && (null === (e = this.socket) || void 0 === e || e.send(JSON.stringify({ type: K.PING })));
    }
    handleOpen() {
        q.info('WS Connected'), this.backoff.succeed(), this.pingInterval.start(k, () => this.ping()), (0, O.Ai)(this.accountId, this.accessToken), (0, O.PW)(this.accountId, this.accessToken);
    }
    handleMessage(e) {
        let { data: t } = e;
        if ('string' != typeof t) return;
        let { type: n, uri: i, payloads: r } = JSON.parse(t);
        switch (n) {
            case K.MESSAGE:
                if ('string' == typeof i && i.startsWith(M)) (this.connectionId = decodeURIComponent(i.split(M)[1])), (0, O.am)(this.accountId, this.accessToken, this.connectionId);
                else if (Array.isArray(r)) {
                    for (let { events: e } of r) if (null != e) for (let t of e) this.handleEvent(t);
                }
            case K.PONG:
        }
    }
    handleClose() {
        if ((this.pingInterval.stop(), !this._requestedDisconnect))
            try {
                let e = this.backoff.fail(() => {
                    this._requestedDisconnect || this.connect();
                });
                q.info('WS Disconnected. Next retry in '.concat(Math.round(e), 'ms'));
            } catch (e) {}
    }
    handleEvent(e) {
        let { type: t, event: n } = e;
        switch (t) {
            case 'PLAYER_STATE_CHANGED':
                null != n && null != n.state && eP(this.accountId, this.accessToken, n.state);
                break;
            case 'DEVICE_STATE_CHANGED':
                this.handleDeviceStateChange();
        }
    }
    constructor(e, t) {
        L(this, 'accessToken', void 0),
            L(this, 'accountId', void 0),
            L(this, 'connectionId', void 0),
            L(this, 'isPremium', void 0),
            L(this, 'pingInterval', void 0),
            L(this, 'backoff', void 0),
            L(this, 'socket', void 0),
            L(this, '_requestedDisconnect', !1),
            L(this, '_requestedConnect', !1),
            L(
                this,
                'handleDeviceStateChange',
                l().throttle(() => {
                    (0, O.PW)(this.accountId, this.accessToken), ew(this.accountId, this.accessToken);
                }, Y)
            ),
            (this.accountId = e),
            (this.accessToken = t),
            (this.pingInterval = new f.Xp()),
            (this.backoff = new u.Z(void 0, H)),
            this.connect();
    }
}
function ef(e, t) {
    e in et ? ((et[e].accessToken = t), q.info('Updated account access token: '.concat(e))) : ((et[e] = new ed(e, t)), q.info('Added account: '.concat(e)));
}
function e_(e) {
    if (!(e in et)) return;
    et[e].disconnect(), delete et[e];
    let t = ei[e];
    null != t && null != i && t.track.id === i.track.id && (i = null), delete ei[e], q.info('Removed account: '.concat(e));
}
function ep(e, t) {
    for (let n of en[e]) n.is_active = n.id === t;
}
function eh(e, t, n) {
    var i, a;
    let s = es();
    if (null == s) return !1;
    let { socket: o, device: l } = s,
        { sync_id: u, party: c, timestamps: d } = t;
    if (null == u || null == c || null == c.id || !(0, D.Ps)(c.id)) return !1;
    let f = null != d && null != d.start ? d.start : Date.now(),
        _ = Math.max(0, Date.now() - f),
        p = !1,
        h = ei[o.accountId];
    null != h && !1 === h.repeat && (p = null);
    let m = (0, D.c8)(null !== (a = null === (i = t.metadata) || void 0 === i ? void 0 : i.type) && void 0 !== a ? a : D.Hw.TRACK);
    if (null == m) return;
    (0, O.hY)(o.accountId, o.accessToken, u, m, {
        position: +_,
        deviceId: l.id,
        repeat: p
    }),
        (r = {
            userId: e,
            partyId: c.id,
            trackId: u,
            startTime: f
        });
    let g = 'presence change';
    n &&
        ((g = 'started'),
        A.default.track(x.rMx.SPOTIFY_LISTEN_ALONG_STARTED, {
            party_id: c.id,
            other_user_id: e
        })),
        q.info('Listen along '.concat(g, ': ').concat(o.accountId, ' to ').concat(e, ' playing ').concat(u, ' on ').concat(l.name));
}
function em() {
    A.default.track(x.rMx.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != r ? r.partyId : null,
        other_user_id: null != r ? r.userId : null
    });
    let e = null != r ? r.trackId : null;
    (r = null), q.info('Listen along stopped');
    let t = es();
    if (null == t) return;
    let { socket: n } = t,
        i = ei[n.accountId];
    null != i && i.track.id === e && (0, O.wO)(n.accountId, n.accessToken);
}
function eg() {
    let e = Object.keys(et),
        t = y.Z.getAccounts().filter((e) => {
            let { type: t } = e;
            return t === x.ABu.SPOTIFY;
        });
    if (null == t) return !1;
    let n = t.map((e) => {
        let { id: t } = e;
        return t;
    });
    for (let t of e) !n.includes(t) && e_(t);
    let r = !1;
    for (let n of t)
        if ((null != i && i.account.id === n.id && ((i.account = n), (r = !0)), !e.includes(n.id))) {
            if (null != n.accessToken) {
                ef(n.id, n.accessToken);
                continue;
            }
            (0, O.hP)(n.id);
        }
    return r;
}
function eE(e) {
    let { accountId: t, accessToken: n } = e;
    return ef(t, n), !1;
}
function ev(e) {
    let { accountId: t } = e;
    e_(t);
}
function ey(e) {
    let { accountId: t, isPlaying: n, repeat: a, track: s, position: o, device: u, context: c } = e,
        f = !1;
    if (null != u) {
        if (null != en[t]) {
            let e = en[t].find((e) => {
                let { id: t } = e;
                return t === u.id;
            });
            null == e ? (en[t].push(u), (f = !0)) : (0, d.Z)(e, u) || (Object.assign(e, u), (f = !0)), ep(t, u.id);
        } else (en[t] = [u]), (f = !0);
    }
    n ? null == ea || ea.start(U, eC) : ((s = null), null == ea || ea.stop());
    let p = y.Z.getAccount(t, x.ABu.SPOTIFY);
    if (null == p) return f;
    let h = ei[t],
        g =
            null != s
                ? {
                      account: p,
                      track: s,
                      startTime: eo(h, o),
                      context: c,
                      repeat: a
                  }
                : null,
        E = null != u && null != r && 0 === o && !n;
    E || (ei[t] = g);
    let I = i;
    if (
        ((i = l()
            .values(ei)
            .find((e) => null != e)),
        eR(v.default.getId()),
        null == s || E ? $.stop() : $.start(s.duration - o + Z, () => el(p.id)),
        null != r && ((!n && o > 0) || null == u || (null != g && r.trackId !== g.track.id))
            ? (q.info('Listen along active but playback stopped or track changed. Stopping listen along in '.concat(Z, 'ms')),
              ee.start(Z, () => {
                  q.info('Stopping listening along'), (0, m.Z)(), el(p.id);
              }))
            : ee.isStarted() && (q.info('Listen along stop cancelled as playback of track resumed'), ee.stop()),
        I === i || (null == h && null == g) || (null != h && null != g && h.track.id === g.track.id && h.startTime === g.startTime))
    )
        return f;
    null != s &&
        (_.Z.dispatch({
            type: 'SPOTIFY_NEW_TRACK',
            track: s,
            connectionId: t
        }),
        A.default.track(x.rMx.ACTIVITY_UPDATED, {
            party_platform: x.ABu.SPOTIFY,
            track_id: s.id,
            has_images: !0,
            details: s.album.name,
            state: s.name,
            album_id: s.album.id,
            author_ids: s.artists.map((e) => e.id),
            author_names: s.artists.map((e) => e.name)
        }));
}
function eI(e) {
    let { id: t } = e;
    a = t;
}
function eT(e) {
    let { accountId: t, devices: n } = e;
    (en[t] = n), q.info('Devices updated for '.concat(t, ':'), n);
}
function eb(e) {
    let { accountId: t, deviceId: n } = e;
    ep(t, n);
}
function eS(e) {
    var t;
    let n,
        { activity: i, metadata: a } = e,
        s = es();
    if (null == s) return !1;
    let { socket: o, device: l } = s,
        { sync_id: u, party: c } = i;
    return (
        !!(null != u && null != c && null != c.id && (0, D.Ps)(c.id)) &&
        (null != a && (n = a.context_uri),
        null != r && em(),
        null != a &&
            void ((0, O.hY)(o.accountId, o.accessToken, u, null !== (t = a.type) && void 0 !== t ? t : D.Hw.TRACK, {
                contextUri: n,
                deviceId: l.id
            }),
            q.info('Play started: '.concat(o.accountId, ' playing ').concat(u, ' on ').concat(l.name))))
    );
}
function eA(e) {
    let { activity: t, userId: n } = e;
    return eh(n, t, !0);
}
function eN() {
    if (null == r || null == es()) return !1;
    let { userId: e } = r,
        t = eu(e);
    if (null == t)
        return (
            J.start(B, () => {
                null != r && r.userId === e && (0, m.Z)();
            }),
            !1
        );
    J.stop();
    let { sync_id: n, timestamps: i, party: a } = t,
        s = null != n && r.trackId !== n,
        o = null != i && r.startTime !== i.start;
    return s || o ? eh(e, t, !1) : null != a && a.id !== r.partyId && ((r.partyId = a.id), !0);
}
function eC() {
    if (null == i) return;
    let e = es();
    if (null == e) return;
    let { socket: t } = e;
    (er = !0), (0, O.wO)(t.accountId, t.accessToken), A.default.track(x.rMx.SPOTIFY_AUTO_PAUSED), q.info('Playback auto paused');
}
function eR(e) {
    if (e === v.default.getId()) {
        let t = S.Z.isCurrentClientInVoiceChannel(),
            n = (0, p.O)({
                userId: e,
                checkSoundSharing: !0,
                checkSoundboardSounds: !1
            });
        t && n && null != i ? (Q.start(U, eC, !1), X.stop()) : X.start(G, () => Q.stop(), !1);
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
function ex(e) {
    let { accountId: t, isPremium: n } = e,
        i = et[t];
    if (null == i) return !1;
    (i.isPremium = n), q.info('Profile updated for '.concat(t, ': isPremium = ').concat(n));
}
function eL(e) {
    let { settings: t } = e;
    if ((null == t ? void 0 : t.desktopSettings) != null) {
        null == ea || ea.stop();
        let { sourceId: e, sound: n } = null == t ? void 0 : t.desktopSettings;
        null != e && E.ZP.getObservedAppNameForWindow(e) === P.name && n ? (ea = new f.Xp()).start(U, eC) : (null == ea || ea.stop(), (ea = null));
    } else null == t && (null == ea || ea.stop(), (ea = null));
}
function eP(e, t, n) {
    var i, r, a, s, o, l, u, c, d, f, p, h, m, g;
    let E,
        v,
        { device: y, progress_ms: I, is_playing: T, repeat_state: b, item: S, context: A } = n;
    if (null != S && S.type === D.Hw.TRACK) {
        let e = S.id;
        null != S.linked_from && null != S.linked_from.id && (e = S.linked_from.id),
            (E = {
                id: e,
                name: S.name,
                duration: S.duration_ms,
                type: D.Hw.TRACK,
                album: {
                    id: null !== (o = null === (i = S.album) || void 0 === i ? void 0 : i.id) && void 0 !== o ? o : '',
                    name: null !== (l = null === (r = S.album) || void 0 === r ? void 0 : r.name) && void 0 !== l ? l : '',
                    image: null === (a = S.album) || void 0 === a ? void 0 : a.images[0],
                    type: null !== (u = null === (s = S.album) || void 0 === s ? void 0 : s.type) && void 0 !== u ? u : D.Hw.ALBUM
                },
                artists: Array.isArray(S.artists) ? S.artists.filter((e) => (0, R.lm)(e.id) && (0, R.lm)(e.name)) : [],
                isLocal: S.is_local || !1
            });
    } else
        null != S &&
            S.type === D.Hw.EPISODE &&
            (E = {
                id: S.id,
                name: S.name,
                duration: S.duration_ms,
                type: D.Hw.EPISODE,
                album: {
                    id: null !== (h = null === (c = S.show) || void 0 === c ? void 0 : c.id) && void 0 !== h ? h : '',
                    name: null !== (m = null === (d = S.show) || void 0 === d ? void 0 : d.name) && void 0 !== m ? m : '',
                    image: null === (f = S.show) || void 0 === f ? void 0 : f.images[0],
                    type: null !== (g = null === (p = S.album) || void 0 === p ? void 0 : p.type) && void 0 !== g ? g : D.Hw.SHOW
                },
                artists: [],
                isLocal: !1
            });
    if (
        (null != y &&
            !0 !== y.is_active &&
            (y = {
                ...y,
                is_active: !0
            }),
        null != A && [D.Hw.PLAYLIST, D.Hw.ALBUM].includes(A.type))
    ) {
        let n = ek.getPlayerState(e);
        v =
            null != n && null != n.context && n.context.uri === A.uri
                ? Promise.resolve(n.context)
                : A.type === D.Hw.ALBUM
                  ? Promise.resolve(A)
                  : O.rC
                        .get(e, t, { url: A.href })
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
        null == t || t.type !== D.Hw.PLAYLIST || t.public || (t = null),
            _.Z.dispatch({
                type: 'SPOTIFY_PLAYER_STATE',
                accountId: e,
                track: E,
                volumePercent: null != y ? y.volume_percent : 0,
                isPlaying: T,
                repeat: 'off' !== b,
                position: I,
                context: t,
                device: y
            });
    });
}
function ew(e, t) {
    return O.rC
        .get(e, t, {
            url: D.C7.PLAYER,
            query: { additional_types: ''.concat(D.Hw.TRACK, ',').concat(D.Hw.EPISODE) },
            onlyRetryOnAuthorizationErrors: !0
        })
        .then((n) => {
            let i = n.body;
            null != i ? eP(e, t, i).then(() => n) : el(e);
        })
        .catch(() => el(e));
}
class eM extends (s = c.ZP.Store) {
    initialize() {
        this.waitFor(y.Z, b.Z), this.syncWith([T.Z], () => eN()), (0, O.k1)();
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
            let i = en[t].find((e) => !e.is_restricted && e.type === V);
            null != i &&
                e.push({
                    socket: n,
                    device: i
                });
        }
        return e;
    }
    canPlay(e) {
        let { sync_id: t, party: n } = e;
        return null != es() && null != t && null != n && null != n.id && (0, D.Ps)(n.id);
    }
    getSyncingWith() {
        return r;
    }
    wasAutoPaused() {
        return er;
    }
    getLastPlayedTrackId() {
        return a;
    }
    getTrack() {
        return null != i ? i.track : null;
    }
    getPlayerState(e) {
        return ei[e];
    }
    shouldShowActivity() {
        return null != i && i.account.showActivity && !I.Z.isIdle();
    }
    getActivity() {
        let e, t, n;
        if (null == i) return null != r ? eu(r.userId) : null;
        let {
                track: { artists: a, album: s, name: o, id: l, duration: u, isLocal: c, type: d },
                startTime: f,
                context: _
            } = i,
            p = a.slice(0, j);
        a.length > 0 &&
            (e = p
                .map((e) => {
                    let { name: t } = e;
                    return t.replace(/;/g, '');
                })
                .join('; '));
        let h = {},
            m = null != s.image ? (0, N.getAssetFromImageURL)(x.ABu.SPOTIFY, s.image.url) : null;
        null != s.image && null != m && (h.large_image = m), s.type !== z && (h.large_text = s.name), null != _ && (t = _.uri), (n = null != r && null != r.partyId ? r.partyId : ''.concat(D.lS).concat(v.default.getId()));
        let g = o.length > W ? o.substring(0, W - 3) + '...' : o,
            E = {
                context_uri: t,
                album_id: s.id,
                artist_ids: p.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                type: d,
                button_urls: []
            },
            y = {
                name: P.name,
                assets: h,
                details: g,
                state: e,
                timestamps: {
                    start: f,
                    end: f + u
                },
                party: { id: n }
            };
        return c || ((y.sync_id = l), (y.flags = x.xjy.PLAY | x.xjy.SYNC), (y.metadata = E)), y;
    }
}
L(eM, 'displayName', 'SpotifyStore');
let ek = new eM(_.Z, {
        USER_CONNECTIONS_UPDATE: eg,
        CONNECTION_OPEN: eg,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: eE,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: ev,
        SPOTIFY_PROFILE_UPDATE: ex,
        SPOTIFY_PLAYER_STATE: ey,
        SPOTIFY_PLAYER_PLAY: eI,
        ACTIVITY_PLAY: eS,
        ACTIVITY_SYNC: eA,
        ACTIVITY_SYNC_STOP: em,
        SPOTIFY_SET_DEVICES: eT,
        SPOTIFY_SET_ACTIVE_DEVICE: eb,
        SPEAKING: eO,
        VOICE_STATE_UPDATES: eD,
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: eL
    }),
    eU = ek;
