n.d(t, { Z: () => V }), n(47120), n(301563);
var r,
    i = n(200651),
    a = n(192379),
    o = n(442837),
    l = n(481060),
    s = n(278323),
    c = n(224706),
    d = n(763472),
    u = n(498179),
    p = n(276852),
    m = n(620662),
    f = n(994339),
    h = n(275920),
    g = n(917621),
    _ = n(431583),
    b = n(592745),
    v = n(952164),
    y = n(768419),
    x = n(456432),
    O = n(347475),
    E = n(789407),
    j = n(598077),
    N = n(757266),
    C = n(831506),
    I = n(271383),
    S = n(283595),
    P = n(293273),
    T = n(885110),
    A = n(594174),
    w = n(181106),
    Z = n(417363),
    k = n(768581),
    R = n(358085),
    L = n(804739),
    D = n(410575),
    M = n(981631),
    W = n(701488);
function F(e, t, n) {
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
function U(e) {
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
                F(e, t, n[t]);
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
        return null == n || n instanceof E.ZP
            ? null
            : k.ZP.getApplicationIconURL({
                  id: n.id,
                  icon: null != t ? t.coverImage : n.coverImage,
                  size: W.cc
              });
    }
    handleOpenSpotifyTrack(e) {
        (0, v.aG)(e);
    }
    handleOpenSpotifyArtist(e, t, n) {
        (0, v.d$)(e, t, n);
    }
    handleOpenSpotifyAlbum(e, t) {
        (0, v.Z5)(e, t);
    }
    shouldRenderCustomButton() {
        let { isLaunchable: e, application: t } = this.props;
        return null != t && null != t.primarySkuId && !e && R.isPlatformEmbedded;
    }
    render() {
        return (0, i.jsx)(D.Z, {
            section: D.Z.Sections.APPLICATION_EMBED,
            children: this.renderEmbed()
        });
    }
    constructor(...e) {
        super(...e),
            F(this, 'state', { sending: !1 }),
            F(this, 'handleJoin', () => {
                let { activity: e, analyticsLocations: t, userId: n, message: r, guildId: i, channelId: a } = this.props;
                if (null != e && null != n && null != r && null != e.session_id && null != e.application_id) {
                    var o, l;
                    c.Z.join({
                        userId: n,
                        sessionId: e.session_id,
                        applicationId: e.application_id,
                        channelId: a,
                        messageId: r.id,
                        source: M.Sbl.MESSAGE_EMBED,
                        analyticsLocations: t,
                        partyId: null === (o = e.party) || void 0 === o ? void 0 : o.id,
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
                            partyId: null === (l = e.party) || void 0 === l ? void 0 : l.id,
                            messageId: r.id,
                            analyticsLocations: t
                        });
                }
            }),
            F(this, 'handleInvite', async () => {
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
            F(this, 'handleSync', () => {
                let { activity: e, userId: t } = this.props;
                null != e && null != t && d.Z_(e, t);
            }),
            F(this, 'handleDownloadApp', () => {
                (0, l.h7j)((e) => (0, i.jsx)(_.default, U({ source: 'Game Invite' }, e)));
            }),
            F(this, 'renderUserPopout', (e, t) => {
                let { channelId: n, guildId: r, message: a, analyticsLocations: o } = this.props;
                return null == n
                    ? null
                    : (0, i.jsx)(
                          O.Z,
                          B(U({}, t), {
                              userId: e.id,
                              guildId: null != r ? r : void 0,
                              channelId: n,
                              messageId: null == a ? void 0 : a.id,
                              newAnalyticsLocations: o
                          })
                      );
            }),
            F(this, 'renderSpotifyJoinButton', (e) => {
                let { channelId: t, guildId: n } = this.props;
                return (0, i.jsx)(
                    x.Z,
                    U(
                        {
                            guildId: null != n ? n : void 0,
                            channelId: t,
                            source: 'Invite Embed'
                        },
                        e
                    )
                );
            }),
            F(this, 'renderCustomButton', (e) => {
                let { application: t } = this.props;
                return (0, i.jsx)(
                    u.Z,
                    B(U({}, e), {
                        source: M.Sbl.MESSAGE_EMBED,
                        application: t
                    })
                );
            }),
            F(this, 'renderEmbed', () => {
                let e;
                let { activity: t, partyId: n, myPartyId: r, application: a, partyMembers: o, isPreview: l, isLaunching: s, isSender: c, activityActionType: d, className: u, channelId: p, message: m, hideParty: f, isSyncable: h, isLaunchable: _, guildId: b } = this.props;
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
                    partyMembers: o,
                    className: u,
                    coverImage: this.getCoverImage(),
                    isPreview: l,
                    isGameLaunchable: _,
                    isLoading: s || this.state.sending,
                    activityActionType: d,
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
F(H, 'defaultProps', { isPreview: !1 });
let V = o.ZP.connectStores([y.Z, C.Z, P.Z, T.Z, N.Z, w.Z, S.Z, b.Z, Z.Z, A.default, I.ZP], (e) => {
    var t;
    let { activity: n, analyticsLocations: r, application: i, partyId: a, userId: o, guildId: l } = e,
        { id: s } = null != i ? i : {},
        c = null != n && null != n.party && n.party.id === a ? C.Z.getParty(n.party.id) : null,
        d = null != s ? (null !== (t = P.Z.getApplicationActivity(s)) && void 0 !== t ? t : T.Z.getApplicationActivity(s, !0)) : P.Z.findActivity((e) => e.type === M.IIU.LISTENING),
        u = !1;
    null != s && (u = w.Z.getState(s, M.mFx.JOIN) === M.OcF.LOADING);
    let p = Array.from(null != c ? c : []).map((e) => {
            let t = null != l ? I.ZP.getMember(l, e) : null,
                n = null != t ? t.nick : null,
                r = A.default.getUser(e),
                i = null == r;
            return (
                null == r && (r = new j.Z({ discriminator: '0005' })),
                {
                    user: r,
                    unknownUser: i,
                    nick: n
                }
            );
        }),
        m = null != n && y.Z.canPlay(n),
        f = y.Z.getSyncingWith(),
        h = null != f && null != o && f.userId === o;
    return {
        analyticsLocations: r,
        partyMembers: p,
        connectedApplication: null != s ? N.Z.getApplication(s) : null,
        myPartyId: null != d && null != d.party ? d.party.id : null,
        isLaunching: u,
        isSyncable: m && !h,
        isLaunchable:
            null != s &&
            (0, L.t)({
                LibraryApplicationStore: S.Z,
                LaunchableGameStore: b.Z,
                DispatchApplicationStore: Z.Z,
                ConnectedAppsStore: N.Z,
                applicationId: s
            })
    };
})(H);
