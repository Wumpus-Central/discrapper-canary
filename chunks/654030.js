n.d(t, { Z: () => H }), n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(442837),
    s = n(481060),
    o = n(278323),
    c = n(224706),
    d = n(763472),
    u = n(498179),
    m = n(276852),
    _ = n(620662),
    h = n(994339),
    p = n(275920),
    g = n(917621),
    f = n(431583),
    x = n(592745),
    C = n(952164),
    E = n(768419),
    v = n(456432),
    I = n(347475),
    N = n(789407),
    S = n(598077),
    T = n(757266),
    b = n(831506),
    A = n(271383),
    j = n(283595),
    y = n(293273),
    Z = n(885110),
    R = n(594174),
    L = n(181106),
    P = n(417363),
    k = n(768581),
    M = n(358085),
    O = n(804739),
    D = n(410575),
    w = n(981631),
    F = n(701488);
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
let B = { spotify: 'Spotify' };
class G extends (i = a.PureComponent) {
    getCoverImage() {
        let { activity: e, connectedApplication: t, application: n, isPreview: i, message: l } = this.props;
        if (null != n && (i || (null != l && (0, h.Z)(e, l, n.id)))) {
            let t = (0, m.Z)(e, n.id);
            if (null != t) return t;
        }
        return null == n || n instanceof N.ZP
            ? null
            : k.ZP.getApplicationIconURL({
                  id: n.id,
                  icon: null != t ? t.coverImage : n.coverImage,
                  size: F.cc
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
        return (0, l.jsx)(D.Z, {
            section: D.Z.Sections.APPLICATION_EMBED,
            children: this.renderEmbed()
        });
    }
    constructor(...e) {
        super(...e),
            U(this, 'state', { sending: !1 }),
            U(this, 'handleJoin', () => {
                let { activity: e, analyticsLocations: t, userId: n, message: i, guildId: l, channelId: a } = this.props;
                if (null != e && null != n && null != i && null != e.session_id && null != e.application_id) {
                    var r, s;
                    c.Z.join({
                        userId: n,
                        sessionId: e.session_id,
                        applicationId: e.application_id,
                        channelId: a,
                        messageId: i.id,
                        source: w.Sbl.MESSAGE_EMBED,
                        analyticsLocations: t,
                        partyId: null === (r = e.party) || void 0 === r ? void 0 : r.id,
                        embedded: (0, _.Z)(e, w.xjy.EMBEDDED)
                    }),
                        (0, p.Z)({
                            type: w.q5t.JOIN,
                            source: w.Sbl.MESSAGE_EMBED,
                            userId: n,
                            guildId: l,
                            channelId: a,
                            applicationId: e.application_id,
                            partyId: null === (s = e.party) || void 0 === s ? void 0 : s.id,
                            messageId: i.id,
                            analyticsLocations: t
                        });
                }
            }),
            U(this, 'handleInvite', async () => {
                let { activity: e, channelId: t } = this.props;
                if (null != e && null != t)
                    try {
                        this.setState({ sending: !0 }),
                            await o.Z.sendActivityInvite({
                                type: w.mFx.JOIN,
                                channelId: t,
                                activity: e,
                                location: w.Sbl.MESSAGE_EMBED
                            });
                    } finally {
                        this.setState({ sending: !1 });
                    }
            }),
            U(this, 'handleSync', () => {
                let { activity: e, userId: t } = this.props;
                null != e && null != t && d.Z_(e, t);
            }),
            U(this, 'handleDownloadApp', () => {
                (0, s.h7j)((e) =>
                    (0, l.jsx)(f.default, {
                        source: 'Game Invite',
                        ...e
                    })
                );
            }),
            U(this, 'renderUserPopout', (e, t) => {
                let { channelId: n, guildId: i, message: a, analyticsLocations: r } = this.props;
                return null == n
                    ? null
                    : (0, l.jsx)(I.Z, {
                          ...t,
                          userId: e.id,
                          guildId: null != i ? i : void 0,
                          channelId: n,
                          messageId: null == a ? void 0 : a.id,
                          newAnalyticsLocations: r
                      });
            }),
            U(this, 'renderSpotifyJoinButton', (e) => {
                let { channelId: t, guildId: n } = this.props;
                return (0, l.jsx)(v.Z, {
                    guildId: null != n ? n : void 0,
                    channelId: t,
                    source: 'Invite Embed',
                    ...e
                });
            }),
            U(this, 'renderCustomButton', (e) => {
                let { application: t } = this.props;
                return (0, l.jsx)(u.Z, {
                    ...e,
                    source: w.Sbl.MESSAGE_EMBED,
                    application: t
                });
            }),
            U(this, 'renderEmbed', () => {
                let e;
                let { activity: t, partyId: n, myPartyId: i, application: a, partyMembers: r, isPreview: s, isLaunching: o, isSender: c, activityActionType: d, className: u, channelId: m, message: _, hideParty: h, isSyncable: p, isLaunchable: f, guildId: x } = this.props;
                if (null != a) e = a.name;
                else if (null != n) {
                    let [t] = n.split(':');
                    e = B[t];
                }
                return (0, l.jsx)(g.Z, {
                    activity: t,
                    partyId: n,
                    myPartyId: i,
                    applicationId: null != a ? a.id : null,
                    name: e,
                    partyMembers: r,
                    className: u,
                    coverImage: this.getCoverImage(),
                    isPreview: s,
                    isGameLaunchable: f,
                    isLoading: o || this.state.sending,
                    activityActionType: d,
                    isInBrowser: !M.isPlatformEmbedded,
                    isSyncable: p,
                    isSender: c,
                    channelId: m,
                    guildId: null != x ? x : void 0,
                    message: _,
                    hideParty: h,
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
U(G, 'defaultProps', { isPreview: !1 });
let H = r.ZP.connectStores([E.Z, b.Z, y.Z, Z.Z, T.Z, L.Z, j.Z, x.Z, P.Z, R.default, A.ZP], (e) => {
    var t;
    let { activity: n, analyticsLocations: i, application: l, partyId: a, userId: r, guildId: s } = e,
        { id: o } = null != l ? l : {},
        c = null != n && null != n.party && n.party.id === a ? b.Z.getParty(n.party.id) : null,
        d = null != o ? (null !== (t = y.Z.getApplicationActivity(o)) && void 0 !== t ? t : Z.Z.getApplicationActivity(o, !0)) : y.Z.findActivity((e) => e.type === w.IIU.LISTENING),
        u = !1;
    null != o && (u = L.Z.getState(o, w.mFx.JOIN) === w.OcF.LOADING);
    let m = Array.from(null != c ? c : []).map((e) => {
            let t = null != s ? A.ZP.getMember(s, e) : null,
                n = null != t ? t.nick : null,
                i = R.default.getUser(e),
                l = null == i;
            return (
                null == i && (i = new S.Z({ discriminator: '0005' })),
                {
                    user: i,
                    unknownUser: l,
                    nick: n
                }
            );
        }),
        _ = null != n && E.Z.canPlay(n),
        h = E.Z.getSyncingWith(),
        p = null != h && null != r && h.userId === r;
    return {
        analyticsLocations: i,
        partyMembers: m,
        connectedApplication: null != o ? T.Z.getApplication(o) : null,
        myPartyId: null != d && null != d.party ? d.party.id : null,
        isLaunching: u,
        isSyncable: _ && !p,
        isLaunchable:
            null != o &&
            (0, O.t)({
                LibraryApplicationStore: j.Z,
                LaunchableGameStore: x.Z,
                DispatchApplicationStore: P.Z,
                ConnectedAppsStore: T.Z,
                applicationId: o
            })
    };
})(G);
