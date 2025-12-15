n.d(t, { Z: () => j }), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(704215),
    s = n(907862),
    l = n(481060),
    c = n(783097),
    u = n(335670),
    d = n(951106),
    f = n(524995),
    p = n(812206),
    _ = n(914498),
    m = n(515344),
    h = n(243778),
    g = n(810568),
    E = n(168524),
    b = n(171516),
    y = n(77498),
    O = n(375954),
    v = n(81063),
    S = n(768581),
    I = n(758371),
    T = n(994339),
    C = n(866449),
    A = n(206074),
    N = n(77603),
    P = n(732067),
    R = n(328886),
    w = n(921944),
    D = n(388032);
function x(e, t) {
    var n;
    let r = (0, b.h)(e),
        i = (0, a.e7)([p.Z, y.Z], () => {
            let t = p.Z.getApplication(e);
            return null != t ? y.Z.getGameByApplication(t) : null;
        }, [e]);
    return {
        openGameProfileModal: (0, E.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: null != (n = null == i ? void 0 : i.id) ? n : void 0,
            source: g.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        launchableAppId: r,
    };
}
function L(e, t) {
    var n, r, i, a;
    let { bot: o } = t,
        s =
            (null == (n = e.activity) ? void 0 : n.icon_override) != null
                ? (0, v.xF)(t.id, null == (r = e.activity) ? void 0 : r.icon_override)
                : null;
    return {
        iconSrc:
            null != s
                ? s
                : S.ZP.getApplicationIconURL({
                      id: t.id,
                      icon: t.icon,
                      bot: o,
                  }),
        name: null != (a = null == (i = e.activity) ? void 0 : i.name_override) ? a : t.name,
    };
}
function j(e) {
    var t, n;
    let {
            analyticsLocations: p,
            application: g,
            channel: E,
            currentUserId: b,
            currentUserPresenceActivity: y,
            hideParty: v,
            message: S,
            onView: j,
            partyStatusElement: M,
            presenceActivity: k,
        } = e,
        U = (0, c.ye)(g),
        { iconSrc: G, name: Z } = L(S, g),
        F =
            null !=
            (n = (0, N.v)({
                messageId: S.id,
                presenceActivity: k,
                application: g,
            }))
                ? n
                : void 0,
        { openGameProfileModal: B, launchableAppId: V } = x(g.id, S.author.id),
        H = (0, A.Z)({
            application: g,
            analyticsLocations: p,
        }),
        Y = i.useMemo(() => {
            if (null != H)
                return {
                    label: D.intl.string(D.t["jaYS/h"]),
                    icon: l.v3n,
                    trackingArea: _.j_.CLOUD_PLAY,
                    onClick: H,
                };
        }, [H]),
        W = (0, m.G)(g),
        K = i.useMemo(() => (null != B ? B : null != W && U ? W : void 0), [U, B, W]),
        z = u.Z.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: q, hasAlreadyLinked: Q, startAuthorization: X } = (0, f.F)(g),
        J = (0, d.K)(X, Q),
        $ = !(0, T.Z)(k, S, g.id),
        ee = (0, I.dQ)(Z, null == (t = S.activity) ? void 0 : t.type, $),
        et = i.useRef(null),
        en = (0, a.e7)([O.Z], () => O.Z.getMessages(E.id)),
        er = () => {
            let e = [];
            return (
                (0, C.c)(S.id, en) && q && !Q && z.enabled && e.push(o.z.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, r.jsx)(h.ZP, {
                    contentTypes: e,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === o.z.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, r.jsx)(s.J2, {
                                graphic: {
                                    type: "dynamic",
                                    component: l.P3w.ACCOUNT_LINK_DISPLAY,
                                    props: { application: g },
                                },
                                title: D.intl.formatToPlainString(D.t["lo6H6+"], { gameName: g.name }),
                                body: D.intl.string(D.t.qYAzOp),
                                targetElementRef: et,
                                caretConfig: { align: "start" },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(w.L.USER_DISMISS),
                            });
                    },
                })
            );
        };
    return $
        ? (0, r.jsx)(P.Z, {
              message: S,
              application: g,
              applicationName: Z,
              channel: E,
              header: ee,
              currentUserId: b,
              launchableAppId: V,
              isEmbeddedApplication: U,
              tryWithGdnAction: Y,
              staticBannerSrc: F,
              onClickContent: K,
              iconSrc: G,
              onView: j,
              presenceActivity: k,
              analyticsLocations: p,
              showAuthButton: q && !Q && z.enabled,
              startAuthorization: J,
              accountLinkButtonRef: et,
              renderAccountLinkUpsell: er,
          })
        : (0, r.jsx)(R.Z, {
              message: S,
              application: g,
              applicationName: Z,
              channel: E,
              header: ee,
              currentUserId: b,
              launchableAppId: V,
              isEmbeddedApplication: U,
              tryWithGdnAction: Y,
              staticBannerSrc: F,
              onClickContent: K,
              iconSrc: G,
              onView: j,
              presenceActivity: k,
              currentUserPresenceActivity: y,
              hideParty: v,
              partyStatusElement: M,
              analyticsLocations: p,
              showAuthButton: q && !Q && z.enabled,
              startAuthorization: J,
              accountLinkButtonRef: et,
              renderAccountLinkUpsell: er,
          });
}
