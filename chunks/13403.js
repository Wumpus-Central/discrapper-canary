n.d(t, { A: () => j }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(554146),
    o = n(342494),
    l = n(397927),
    c = n(735991),
    u = n(690456),
    d = n(359800),
    f = n(362490),
    p = n(587895),
    _ = n(354287),
    h = n(574660),
    m = n(379848),
    g = n(409626),
    E = n(692969),
    b = n(928550),
    y = n(760751),
    O = n(320501),
    A = n(139675),
    v = n(486020),
    S = n(456060),
    I = n(659051),
    T = n(837197),
    C = n(359549),
    N = n(537643),
    R = n(444901),
    w = n(842157),
    P = n(49999),
    D = n(985018);
function x(e, t) {
    var n;
    let r = (0, b.d)(e),
        i = (0, a.bG)([p.A, y.A], () => {
            let t = p.A.getApplication(e);
            return null != t ? y.A.getGameByApplication(t) : null;
        }, [e]);
    return {
        openGameProfileModal: (0, E.A)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: null != (n = null == i ? void 0 : i.id) ? n : void 0,
            source: g.Ob.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        launchableAppId: r,
    };
}
function L(e, t) {
    var n, r, i, a;
    let { bot: s } = t,
        o =
            (null == (r = e.activity) ? void 0 : r.icon_override) != null
                ? (0, A.uD)(t.id, null == (i = e.activity) ? void 0 : i.icon_override)
                : null;
    return {
        iconSrc:
            null != o
                ? o
                : v.Ay.getApplicationIconURL({
                      id: t.id,
                      icon: t.icon,
                      bot: s,
                  }),
        name: null != (n = null == (a = e.activity) ? void 0 : a.name_override) ? n : t.name,
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
            hideParty: A,
            message: v,
            onView: j,
            partyStatusElement: M,
            presenceActivity: k,
        } = e,
        U = (0, c.Ag)(g),
        { iconSrc: G, name: V } = L(v, g),
        F =
            null !=
            (t = (0, N.I)({
                messageId: v.id,
                presenceActivity: k,
                application: g,
            }))
                ? t
                : void 0,
        { openGameProfileModal: B, launchableAppId: H } = x(g.id, v.author.id),
        Y = (0, C.A)({
            application: g,
            analyticsLocations: p,
        }),
        W = i.useMemo(() => {
            if (null != Y)
                return {
                    label: D.intl.string(D.t["jaYS/h"]),
                    icon: l.hpF,
                    trackingArea: _.kY.CLOUD_PLAY,
                    onClick: Y,
                };
        }, [Y]),
        K = (0, h.F)(g),
        z = i.useMemo(() => (null != B ? B : null != K && U ? K : void 0), [U, B, K]),
        q = u.A.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: X, hasAlreadyLinked: Z, startAuthorization: Q } = (0, f.RD)(g),
        $ = (0, d.z)(Q, Z),
        J = !(0, I.A)(k, v, g.id),
        ee = (0, S.n$)(V, null == (n = v.activity) ? void 0 : n.type, J),
        et = i.useRef(null),
        en = (0, a.bG)([O.A], () => O.A.getMessages(E.id)),
        er = () => {
            let e = [];
            return (
                (0, T.G)(v.id, en) && X && !Z && q.enabled && e.push(s.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, r.jsx)(m.Ay, {
                    contentTypes: e,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === s.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, r.jsx)(o.AM, {
                                graphic: {
                                    type: "dynamic",
                                    component: l.Z86.ACCOUNT_LINK_DISPLAY,
                                    props: { application: g },
                                },
                                title: D.intl.formatToPlainString(D.t["lo6H6+"], { gameName: g.name }),
                                body: D.intl.string(D.t.qYAzOp),
                                targetElementRef: et,
                                caretConfig: { align: "start" },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(P.i.USER_DISMISS),
                            });
                    },
                })
            );
        };
    return J
        ? (0, r.jsx)(R.A, {
              message: v,
              application: g,
              applicationName: V,
              channel: E,
              header: ee,
              currentUserId: b,
              launchableAppId: H,
              isEmbeddedApplication: U,
              tryWithGdnAction: W,
              staticBannerSrc: F,
              onClickContent: z,
              iconSrc: G,
              onView: j,
              presenceActivity: k,
              analyticsLocations: p,
              showAuthButton: X && !Z && q.enabled,
              startAuthorization: $,
              accountLinkButtonRef: et,
              renderAccountLinkUpsell: er,
          })
        : (0, r.jsx)(w.A, {
              message: v,
              application: g,
              applicationName: V,
              channel: E,
              header: ee,
              currentUserId: b,
              launchableAppId: H,
              isEmbeddedApplication: U,
              tryWithGdnAction: W,
              staticBannerSrc: F,
              onClickContent: z,
              iconSrc: G,
              onView: j,
              presenceActivity: k,
              currentUserPresenceActivity: y,
              hideParty: A,
              partyStatusElement: M,
              analyticsLocations: p,
              showAuthButton: X && !Z && q.enabled,
              startAuthorization: $,
              accountLinkButtonRef: et,
              renderAccountLinkUpsell: er,
          });
}
