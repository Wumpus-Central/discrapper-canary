n.d(t, { Z: () => V }), n(47120), n(301563);
var r,
    i = n(200651),
    a = n(192379),
    l = n(442837),
    o = n(481060),
    s = n(278323),
    c = n(224706),
    u = n(763472),
    d = n(498179),
    p = n(276852),
    m = n(620662),
    f = n(994339),
    h = n(275920),
    g = n(917621),
    _ = n(431583),
    b = n(592745),
    x = n(952164),
    y = n(768419),
    E = n(456432),
    v = n(347475),
    O = n(789407),
    N = n(598077),
    j = n(757266),
    C = n(831506),
    I = n(271383),
    S = n(283595),
    T = n(293273),
    P = n(885110),
    A = n(594174),
    w = n(181106),
    Z = n(417363),
    k = n(768581),
    R = n(358085),
    D = n(804739),
    L = n(410575),
    M = n(981631),
    W = n(701488);
function U(e, t, n) {
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
function F(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = { spotify: 'Spotify' };
class H extends (r = a.PureComponent) {
    getCoverImage() {
        let { activity: e, connectedApplication: t, application: n, isPreview: r, message: i } = this.props;
        if (null != n && (r || (null != i && (0, f.Z)(e, i, n.id)))) {
            let t = (0, p.Z)(e, n.id);
            if (null != t) return t;
        }
        return null == n || n instanceof O.ZP
            ? null
            : k.ZP.getApplicationIconURL({
                  id: n.id,
                  icon: null != t ? t.coverImage : n.coverImage,
                  size: W.cc
              });
    }
    handleOpenSpotifyTrack(e) {
        (0, x.aG)(e);
    }
    handleOpenSpotifyArtist(e, t, n) {
        (0, x.d$)(e, t, n);
    }
    handleOpenSpotifyAlbum(e, t) {
        (0, x.Z5)(e, t);
    }
    shouldRenderCustomButton() {
        let { isLaunchable: e, application: t } = this.props;
        return null != t && null != t.primarySkuId && !e && R.isPlatformEmbedded;
    }
    render() {
        return (0, i.jsx)(L.Z, {
            section: L.Z.Sections.APPLICATION_EMBED,
            children: this.renderEmbed()
        });
    }
    constructor(...e) {
        super(...e),
            U(this, 'state', { sending: !1 }),
            U(this, 'handleJoin', () => {
                let { activity: e, analyticsLocations: t, userId: n, message: r, guildId: i, channelId: a } = this.props;
                if (null != e && null != n && null != r && null != e.session_id && null != e.application_id) {
                    var l, o;
                    c.Z.join({
                        userId: n,
                        sessionId: e.session_id,
                        applicationId: e.application_id,
                        channelId: a,
                        messageId: r.id,
                        source: M.Sbl.MESSAGE_EMBED,
                        analyticsLocations: t,
                        partyId: null == (l = e.party) ? void 0 : l.id,
                        embedded: (0, m.Z)(e, M.xjy.EMBEDDED),
                        activity: e
                    }),
                        (0, h.Z)({
                            type: M.q5t.JOIN,
                            source: M.Sbl.MESSAGE_EMBED,
                            userId: n,
                            guildId: i,
                            channelId: a,
                            applicationId: e.application_id,
                            partyId: null == (o = e.party) ? void 0 : o.id,
                            messageId: r.id,
                            analyticsLocations: t
                        });
                }
            }),
            U(this, 'handleInvite', async () => {
                let { activity: e, channelId: t } = this.props;
                if (null != e && null != t)
                    try {
                        this.setState({ sending: !0 }),
                            await s.Z.sendActivityInvite({
                                type: M.mFx.JOIN,
                                channelId: t,
                                activity: e,
                                location: M.Sbl.MESSAGE_EMBED
                            });
                    } finally {
                        this.setState({ sending: !1 });
                    }
            }),
            U(this, 'handleSync', () => {
                let { activity: e, userId: t } = this.props;
                null != e && null != t && u.Z_(e, t);
            }),
            U(this, 'handleDownloadApp', () => {
                (0, o.h7j)((e) => (0, i.jsx)(_.default, F({ source: 'Game Invite' }, e)));
            }),
            U(this, 'renderUserPopout', (e, t) => {
                let { channelId: n, guildId: r, message: a, analyticsLocations: l } = this.props;
                return null == n
                    ? null
                    : (0, i.jsx)(
                          v.Z,
                          B(F({}, t), {
                              userId: e.id,
                              guildId: null != r ? r : void 0,
                              channelId: n,
                              messageId: null == a ? void 0 : a.id,
                              newAnalyticsLocations: l
                          })
                      );
            }),
            U(this, 'renderSpotifyJoinButton', (e) => {
                let { channelId: t, guildId: n } = this.props;
                return (0, i.jsx)(
                    E.Z,
                    F(
                        {
                            guildId: null != n ? n : void 0,
                            channelId: t,
                            source: 'Invite Embed'
                        },
                        e
                    )
                );
            }),
            U(this, 'renderCustomButton', (e) => {
                let { application: t } = this.props;
                return (0, i.jsx)(
                    d.Z,
                    B(F({}, e), {
                        source: M.Sbl.MESSAGE_EMBED,
                        application: t
                    })
                );
            }),
            U(this, 'renderEmbed', () => {
                let e,
                    { activity: t, partyId: n, myPartyId: r, application: a, partyMembers: l, isPreview: o, isLaunching: s, isSender: c, activityActionType: u, className: d, channelId: p, message: m, hideParty: f, isSyncable: h, isLaunchable: _, guildId: b } = this.props;
                if (null != a) e = a.name;
                else if (null != n) {
                    let [t] = n.split(':');
                    e = G[t];
                }
                return (0, i.jsx)(g.Z, {
                    activity: t,
                    partyId: n,
                    myPartyId: r,
                    applicationId: null != a ? a.id : null,
                    name: e,
                    partyMembers: l,
                    className: d,
                    coverImage: this.getCoverImage(),
                    isPreview: o,
                    isGameLaunchable: _,
                    isLoading: s || this.state.sending,
                    activityActionType: u,
                    isInBrowser: !R.isPlatformEmbedded,
                    isSyncable: h,
                    isSender: c,
                    channelId: p,
                    guildId: null != b ? b : void 0,
                    message: m,
                    hideParty: f,
                    onJoin: this.handleJoin,
                    onInvite: this.handleInvite,
                    onSync: this.handleSync,
                    onDownloadApp: this.handleDownloadApp,
                    onOpenSpotifyTrack: this.handleOpenSpotifyTrack,
                    onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                    onOpenSpotifyAlbum: this.handleOpenSpotifyAlbum,
                    renderUserPopout: this.renderUserPopout,
                    renderSpotifyJoinButton: this.renderSpotifyJoinButton,
                    renderCustomButton: this.shouldRenderCustomButton() ? this.renderCustomButton : null
                });
            });
    }
}
U(H, 'defaultProps', { isPreview: !1 });
let V = l.ZP.connectStores([y.Z, C.Z, T.Z, P.Z, j.Z, w.Z, S.Z, b.Z, Z.Z, A.default, I.ZP], (e) => {
    var t;
    let { activity: n, analyticsLocations: r, application: i, partyId: a, userId: l, guildId: o } = e,
        { id: s } = null != i ? i : {},
        c = null != n && null != n.party && n.party.id === a ? C.Z.getParty(n.party.id) : null,
        u = null != s ? (null != (t = T.Z.getApplicationActivity(s)) ? t : P.Z.getApplicationActivity(s, !0)) : T.Z.findActivity((e) => e.type === M.IIU.LISTENING),
        d = !1;
    null != s && (d = w.Z.getState(s, M.mFx.JOIN) === M.OcF.LOADING);
    let p = Array.from(null != c ? c : []).map((e) => {
            let t = null != o ? I.ZP.getMember(o, e) : null,
                n = null != t ? t.nick : null,
                r = A.default.getUser(e),
                i = null == r;
            return (
                null == r && (r = new N.Z({ discriminator: '0005' })),
                {
                    user: r,
                    unknownUser: i,
                    nick: n
                }
            );
        }),
        m = null != n && y.Z.canPlay(n),
        f = y.Z.getSyncingWith(),
        h = null != f && null != l && f.userId === l;
    return {
        analyticsLocations: r,
        partyMembers: p,
        connectedApplication: null != s ? j.Z.getApplication(s) : null,
        myPartyId: null != u && null != u.party ? u.party.id : null,
        isLaunching: d,
        isSyncable: m && !h,
        isLaunchable:
            null != s &&
            (0, D.t)({
                LibraryApplicationStore: S.Z,
                LaunchableGameStore: b.Z,
                DispatchApplicationStore: Z.Z,
                ConnectedAppsStore: j.Z,
                applicationId: s
            })
    };
})(H);
