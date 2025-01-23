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
    Z = n(594174),
    P = n(181106),
    L = n(417363),
    y = n(768581),
    O = n(358085),
    M = n(804739),
    k = n(410575),
    D = n(981631),
    U = n(701488);
function B(e, t, n) {
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
let w = { spotify: 'Spotify' };
class F extends (i = l.PureComponent) {
    getCoverImage() {
        let { activity: e, connectedApplication: t, application: n, isPreview: i, message: r } = this.props;
        if (null != n && (i || (null != r && (0, f.Z)(e, r, n.id)))) {
            let t = (0, m.Z)(e, n.id);
            if (null != t) return t;
        }
        return null == n || n instanceof v.ZP
            ? null
            : y.ZP.getApplicationIconURL({
                  id: n.id,
                  icon: null != t ? t.coverImage : n.coverImage,
                  size: U.cc
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
        return null != t && null != t.primarySkuId && !e && O.isPlatformEmbedded;
    }
    render() {
        return (0, r.jsx)(k.Z, {
            section: k.Z.Sections.APPLICATION_EMBED,
            children: this.renderEmbed()
        });
    }
    constructor(...e) {
        super(...e),
            B(this, 'state', { sending: !1 }),
            B(this, 'handleJoin', () => {
                let { activity: e, analyticsLocations: t, userId: n, message: i, guildId: r, channelId: l } = this.props;
                if (null != e && null != n && null != i && null != e.session_id && null != e.application_id) {
                    var a, o;
                    c.Z.join({
                        userId: n,
                        sessionId: e.session_id,
                        applicationId: e.application_id,
                        channelId: l,
                        messageId: i.id,
                        source: D.Sbl.MESSAGE_EMBED,
                        analyticsLocations: t,
                        partyId: null === (a = e.party) || void 0 === a ? void 0 : a.id,
                        embedded: (0, h.Z)(e, D.xjy.EMBEDDED)
                    }),
                        (0, p.Z)({
                            type: D.q5t.JOIN,
                            source: D.Sbl.MESSAGE_EMBED,
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
            B(this, 'handleInvite', async () => {
                let { activity: e, channelId: t } = this.props;
                if (null != e && null != t)
                    try {
                        this.setState({ sending: !0 }),
                            await s.Z.sendActivityInvite({
                                type: D.mFx.JOIN,
                                channelId: t,
                                activity: e,
                                location: D.Sbl.MESSAGE_EMBED
                            });
                    } finally {
                        this.setState({ sending: !1 });
                    }
            }),
            B(this, 'handleSync', () => {
                let { activity: e, userId: t } = this.props;
                null != e && null != t && u.Z_(e, t);
            }),
            B(this, 'handleDownloadApp', () => {
                (0, o.openModal)((e) =>
                    (0, r.jsx)(g.default, {
                        source: 'Game Invite',
                        ...e
                    })
                );
            }),
            B(this, 'renderUserPopout', (e, t) => {
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
            B(this, 'renderSpotifyJoinButton', (e) => {
                let { channelId: t, guildId: n } = this.props;
                return (0, r.jsx)(x.Z, {
                    guildId: null != n ? n : void 0,
                    channelId: t,
                    source: 'Invite Embed',
                    ...e
                });
            }),
            B(this, 'renderCustomButton', (e) => {
                let { application: t } = this.props;
                return (0, r.jsx)(d.Z, {
                    ...e,
                    source: D.Sbl.MESSAGE_EMBED,
                    application: t
                });
            }),
            B(this, 'renderEmbed', () => {
                let e;
                let { activity: t, partyId: n, myPartyId: i, application: l, partyMembers: a, isPreview: o, isLaunching: s, isSender: c, activityActionType: u, className: d, channelId: m, message: h, hideParty: f, isSyncable: p, isLaunchable: g, guildId: E } = this.props;
                if (null != l) e = l.name;
                else if (null != n) {
                    let [t] = n.split(':');
                    e = w[t];
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
                    isInBrowser: !O.isPlatformEmbedded,
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
B(F, 'defaultProps', { isPreview: !1 }),
    (t.Z = a.ZP.connectStores([I.Z, A.Z, R.Z, S.Z, P.Z, j.Z, E.Z, L.Z, Z.default, b.ZP], (e) => {
        let { activity: t, analyticsLocations: n, application: i, partyId: r, userId: l, guildId: a } = e,
            { id: o } = null != i ? i : {},
            s = null != t && null != t.party && t.party.id === r ? A.Z.getParty(t.party.id) : null,
            c = null != o ? R.Z.getApplicationActivity(o) : R.Z.findActivity((e) => e.type === D.IIU.LISTENING),
            u = !1;
        null != o && (u = P.Z.getState(o, D.mFx.JOIN) === D.OcF.LOADING);
        let d = Array.from(null != s ? s : []).map((e) => {
                let t = null != a ? b.ZP.getMember(a, e) : null,
                    n = null != t ? t.nick : null,
                    i = Z.default.getUser(e),
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
            m = null != t && I.Z.canPlay(t),
            h = I.Z.getSyncingWith(),
            f = null != h && null != l && h.userId === l;
        return {
            analyticsLocations: n,
            partyMembers: d,
            connectedApplication: null != o ? S.Z.getApplication(o) : null,
            myPartyId: null != c && null != c.party ? c.party.id : null,
            isLaunching: u,
            isSyncable: m && !f,
            isLaunchable:
                null != o &&
                (0, M.t)({
                    LibraryApplicationStore: j.Z,
                    LaunchableGameStore: E.Z,
                    DispatchApplicationStore: L.Z,
                    ConnectedAppsStore: S.Z,
                    applicationId: o
                })
        };
    })(F));
