n(47120);
var i,
    r = n(200651),
    l = n(192379),
    a = n(442837),
    o = n(481060),
    s = n(278323),
    c = n(224706),
    u = n(763472),
    d = n(498179),
    m = n(276852),
    h = n(620662),
    f = n(994339),
    p = n(275920),
    _ = n(917621),
    g = n(431583),
    E = n(592745),
    C = n(952164),
    I = n(768419),
    x = n(456432),
    N = n(347475),
    v = n(789407),
    T = n(598077),
    S = n(757266),
    A = n(831506),
    b = n(271383),
    j = n(283595),
    R = n(293273),
    Z = n(885110),
    P = n(594174),
    L = n(181106),
    y = n(417363),
    O = n(768581),
    M = n(358085),
    D = n(804739),
    k = n(410575),
    U = n(981631),
    B = n(701488);
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
let F = { spotify: 'Spotify' };
class G extends (i = l.PureComponent) {
    getCoverImage() {
        let { activity: e, connectedApplication: t, application: n, isPreview: i, message: r } = this.props;
        if (null != n && (i || (null != r && (0, f.Z)(e, r, n.id)))) {
            let t = (0, m.Z)(e, n.id);
            if (null != t) return t;
        }
        return null == n || n instanceof v.ZP
            ? null
            : O.ZP.getApplicationIconURL({
                  id: n.id,
                  icon: null != t ? t.coverImage : n.coverImage,
                  size: B.cc
              });
    }
    handleOpenSpotifyTrack(e) {
        (0, C.aG)(e);
    }
    handleOpenSpotifyArtist(e, t, n) {
        (0, C.d$)(e, t, n);
    }
    handleOpenSpotifyAlbum(e, t) {
        (0, C.Z5)(e, t);
    }
    shouldRenderCustomButton() {
        let { isLaunchable: e, application: t } = this.props;
        return null != t && null != t.primarySkuId && !e && M.isPlatformEmbedded;
    }
    render() {
        return (0, r.jsx)(k.Z, {
            section: k.Z.Sections.APPLICATION_EMBED,
            children: this.renderEmbed()
        });
    }
    constructor(...e) {
        super(...e),
            w(this, 'state', { sending: !1 }),
            w(this, 'handleJoin', () => {
                let { activity: e, analyticsLocations: t, userId: n, message: i, guildId: r, channelId: l } = this.props;
                if (null != e && null != n && null != i && null != e.session_id && null != e.application_id) {
                    var a, o;
                    c.Z.join({
                        userId: n,
                        sessionId: e.session_id,
                        applicationId: e.application_id,
                        channelId: l,
                        messageId: i.id,
                        source: U.Sbl.MESSAGE_EMBED,
                        analyticsLocations: t,
                        partyId: null === (a = e.party) || void 0 === a ? void 0 : a.id,
                        embedded: (0, h.Z)(e, U.xjy.EMBEDDED)
                    }),
                        (0, p.Z)({
                            type: U.q5t.JOIN,
                            source: U.Sbl.MESSAGE_EMBED,
                            userId: n,
                            guildId: r,
                            channelId: l,
                            applicationId: e.application_id,
                            partyId: null === (o = e.party) || void 0 === o ? void 0 : o.id,
                            messageId: i.id,
                            analyticsLocations: t
                        });
                }
            }),
            w(this, 'handleInvite', async () => {
                let { activity: e, channelId: t } = this.props;
                if (null != e && null != t)
                    try {
                        this.setState({ sending: !0 }),
                            await s.Z.sendActivityInvite({
                                type: U.mFx.JOIN,
                                channelId: t,
                                activity: e,
                                location: U.Sbl.MESSAGE_EMBED
                            });
                    } finally {
                        this.setState({ sending: !1 });
                    }
            }),
            w(this, 'handleSync', () => {
                let { activity: e, userId: t } = this.props;
                null != e && null != t && u.Z_(e, t);
            }),
            w(this, 'handleDownloadApp', () => {
                (0, o.openModal)((e) =>
                    (0, r.jsx)(g.default, {
                        source: 'Game Invite',
                        ...e
                    })
                );
            }),
            w(this, 'renderUserPopout', (e, t) => {
                let { channelId: n, guildId: i, message: l, analyticsLocations: a } = this.props;
                return null == n
                    ? null
                    : (0, r.jsx)(N.Z, {
                          ...t,
                          userId: e.id,
                          guildId: null != i ? i : void 0,
                          channelId: n,
                          messageId: null == l ? void 0 : l.id,
                          newAnalyticsLocations: a
                      });
            }),
            w(this, 'renderSpotifyJoinButton', (e) => {
                let { channelId: t, guildId: n } = this.props;
                return (0, r.jsx)(x.Z, {
                    guildId: null != n ? n : void 0,
                    channelId: t,
                    source: 'Invite Embed',
                    ...e
                });
            }),
            w(this, 'renderCustomButton', (e) => {
                let { application: t } = this.props;
                return (0, r.jsx)(d.Z, {
                    ...e,
                    source: U.Sbl.MESSAGE_EMBED,
                    application: t
                });
            }),
            w(this, 'renderEmbed', () => {
                let e;
                let { activity: t, partyId: n, myPartyId: i, application: l, partyMembers: a, isPreview: o, isLaunching: s, isSender: c, activityActionType: u, className: d, channelId: m, message: h, hideParty: f, isSyncable: p, isLaunchable: g, guildId: E } = this.props;
                if (null != l) e = l.name;
                else if (null != n) {
                    let [t] = n.split(':');
                    e = F[t];
                }
                return (0, r.jsx)(_.Z, {
                    activity: t,
                    partyId: n,
                    myPartyId: i,
                    applicationId: null != l ? l.id : null,
                    name: e,
                    partyMembers: a,
                    className: d,
                    coverImage: this.getCoverImage(),
                    isPreview: o,
                    isGameLaunchable: g,
                    isLoading: s || this.state.sending,
                    activityActionType: u,
                    isInBrowser: !M.isPlatformEmbedded,
                    isSyncable: p,
                    isSender: c,
                    channelId: m,
                    guildId: null != E ? E : void 0,
                    message: h,
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
w(G, 'defaultProps', { isPreview: !1 }),
    (t.Z = a.ZP.connectStores([I.Z, A.Z, R.Z, Z.Z, S.Z, L.Z, j.Z, E.Z, y.Z, P.default, b.ZP], (e) => {
        var t;
        let { activity: n, analyticsLocations: i, application: r, partyId: l, userId: a, guildId: o } = e,
            { id: s } = null != r ? r : {},
            c = null != n && null != n.party && n.party.id === l ? A.Z.getParty(n.party.id) : null,
            u = null != s ? (null !== (t = R.Z.getApplicationActivity(s)) && void 0 !== t ? t : Z.Z.getApplicationActivity(s, !0)) : R.Z.findActivity((e) => e.type === U.IIU.LISTENING),
            d = !1;
        null != s && (d = L.Z.getState(s, U.mFx.JOIN) === U.OcF.LOADING);
        let m = Array.from(null != c ? c : []).map((e) => {
                let t = null != o ? b.ZP.getMember(o, e) : null,
                    n = null != t ? t.nick : null,
                    i = P.default.getUser(e),
                    r = null == i;
                return (
                    null == i && (i = new T.Z({ discriminator: '0005' })),
                    {
                        user: i,
                        unknownUser: r,
                        nick: n
                    }
                );
            }),
            h = null != n && I.Z.canPlay(n),
            f = I.Z.getSyncingWith(),
            p = null != f && null != a && f.userId === a;
        return {
            analyticsLocations: i,
            partyMembers: m,
            connectedApplication: null != s ? S.Z.getApplication(s) : null,
            myPartyId: null != u && null != u.party ? u.party.id : null,
            isLaunching: d,
            isSyncable: h && !p,
            isLaunchable:
                null != s &&
                (0, D.t)({
                    LibraryApplicationStore: j.Z,
                    LaunchableGameStore: E.Z,
                    DispatchApplicationStore: y.Z,
                    ConnectedAppsStore: S.Z,
                    applicationId: s
                })
        };
    })(G));
