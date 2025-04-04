n.d(t, { Z: () => G }), n(388685), n(35282);
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
    v = n(456432),
    E = n(789407),
    O = n(598077),
    N = n(757266),
    j = n(831506),
    C = n(271383),
    I = n(283595),
    S = n(293273),
    T = n(885110),
    P = n(594174),
    A = n(181106),
    w = n(417363),
    Z = n(768581),
    k = n(358085),
    R = n(804739),
    D = n(410575),
    L = n(981631),
    M = n(701488);
function W(e, t, n) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
let F = { spotify: 'Spotify' };
class B extends (r = a.PureComponent) {
    getCoverImage() {
        let { activity: e, connectedApplication: t, application: n, isPreview: r, message: i } = this.props;
        if (null != n && (r || (null != i && (0, f.Z)(e, i, n.id)))) {
            let t = (0, p.Z)(e, n.id);
            if (null != t) return t;
        }
        return null == n || n instanceof E.ZP
            ? null
            : Z.ZP.getApplicationIconURL({
                  id: n.id,
                  icon: null != t ? t.coverImage : n.coverImage,
                  size: M.cc
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
        return null != t && null != t.primarySkuId && !e && k.isPlatformEmbedded;
    }
    render() {
        return (0, i.jsx)(D.Z, {
            section: D.Z.Sections.APPLICATION_EMBED,
            children: this.renderEmbed()
        });
    }
    constructor(...e) {
        super(...e),
            W(this, 'state', { sending: !1 }),
            W(this, 'handleJoin', () => {
                let { activity: e, analyticsLocations: t, userId: n, message: r, guildId: i, channelId: a } = this.props;
                if (null != e && null != n && null != r && null != e.session_id && null != e.application_id) {
                    var l, o;
                    c.Z.join({
                        userId: n,
                        sessionId: e.session_id,
                        applicationId: e.application_id,
                        channelId: a,
                        messageId: r.id,
                        source: L.Sbl.MESSAGE_EMBED,
                        analyticsLocations: t,
                        partyId: null == (l = e.party) ? void 0 : l.id,
                        embedded: (0, m.Z)(e, L.xjy.EMBEDDED),
                        activity: e
                    }),
                        (0, h.Z)({
                            type: L.q5t.JOIN,
                            source: L.Sbl.MESSAGE_EMBED,
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
            W(this, 'handleInvite', async () => {
                let { activity: e, channelId: t } = this.props;
                if (null != e && null != t)
                    try {
                        this.setState({ sending: !0 }),
                            await s.Z.sendActivityInvite({
                                type: L.mFx.JOIN,
                                channelId: t,
                                activity: e,
                                location: L.Sbl.MESSAGE_EMBED
                            });
                    } finally {
                        this.setState({ sending: !1 });
                    }
            }),
            W(this, 'handleSync', () => {
                let { activity: e, userId: t } = this.props;
                null != e && null != t && u.Z_(e, t);
            }),
            W(this, 'handleDownloadApp', () => {
                (0, o.h7j)((e) => (0, i.jsx)(_.default, U({ source: 'Game Invite' }, e)));
            }),
            W(this, 'renderSpotifyJoinButton', (e) => {
                let { channelId: t, guildId: n } = this.props;
                return (0, i.jsx)(
                    v.Z,
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
            W(this, 'renderCustomButton', (e) => {
                var t, n;
                let { application: r } = this.props;
                return (0, i.jsx)(
                    d.Z,
                    ((t = U({}, e)),
                    (n = n =
                        {
                            source: L.Sbl.MESSAGE_EMBED,
                            application: r
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            }),
            W(this, 'renderEmbed', () => {
                let e,
                    { activity: t, partyId: n, myPartyId: r, application: a, partyMembers: l, isPreview: o, isLaunching: s, isSender: c, activityActionType: u, className: d, channelId: p, message: m, hideParty: f, isSyncable: h, isLaunchable: _, guildId: b, analyticsLocations: x } = this.props;
                if (null != a) e = a.name;
                else if (null != n) {
                    let [t] = n.split(':');
                    e = F[t];
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
                    isInBrowser: !k.isPlatformEmbedded,
                    isSyncable: h,
                    isSender: c,
                    channelId: p,
                    guildId: null != b ? b : void 0,
                    message: m,
                    analyticsLocations: x,
                    hideParty: f,
                    onJoin: this.handleJoin,
                    onInvite: this.handleInvite,
                    onSync: this.handleSync,
                    onDownloadApp: this.handleDownloadApp,
                    onOpenSpotifyTrack: this.handleOpenSpotifyTrack,
                    onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                    onOpenSpotifyAlbum: this.handleOpenSpotifyAlbum,
                    renderSpotifyJoinButton: this.renderSpotifyJoinButton,
                    renderCustomButton: this.shouldRenderCustomButton() ? this.renderCustomButton : null
                });
            });
    }
}
W(B, 'defaultProps', { isPreview: !1 });
let G = l.ZP.connectStores([y.Z, j.Z, S.Z, T.Z, N.Z, A.Z, I.Z, b.Z, w.Z, P.default, C.ZP], (e) => {
    var t;
    let { activity: n, analyticsLocations: r, application: i, partyId: a, userId: l, guildId: o } = e,
        { id: s } = null != i ? i : {},
        c = null != n && null != n.party && n.party.id === a ? j.Z.getParty(n.party.id) : null,
        u = null != s ? (null != (t = S.Z.getApplicationActivity(s)) ? t : T.Z.getApplicationActivity(s, !0)) : S.Z.findActivity((e) => e.type === L.IIU.LISTENING),
        d = !1;
    null != s && (d = A.Z.getState(s, L.mFx.JOIN) === L.OcF.LOADING);
    let p = Array.from(null != c ? c : []).map((e) => {
            let t = null != o ? C.ZP.getMember(o, e) : null,
                n = null != t ? t.nick : null,
                r = P.default.getUser(e),
                i = null == r;
            return (
                null == r && (r = new O.Z({ discriminator: '0005' })),
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
        connectedApplication: null != s ? N.Z.getApplication(s) : null,
        myPartyId: null != u && null != u.party ? u.party.id : null,
        isLaunching: d,
        isSyncable: m && !h,
        isLaunchable:
            null != s &&
            (0, R.t)({
                LibraryApplicationStore: I.Z,
                LaunchableGameStore: b.Z,
                DispatchApplicationStore: w.Z,
                ConnectedAppsStore: N.Z,
                applicationId: s
            })
    };
})(B);
