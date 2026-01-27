n.d(t, {
    A: () => R,
}),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(554146),
    s = n(342494),
    o = n(397927),
    c = n(735991),
    u = n(690456),
    d = n(359800),
    p = n(362490),
    m = n(587895),
    f = n(354287),
    g = n(574660),
    h = n(379848),
    _ = n(409626),
    b = n(692969),
    A = n(928550),
    y = n(760751),
    v = n(320501),
    x = n(139675),
    O = n(486020),
    E = n(456060),
    j = n(659051),
    C = n(837197),
    I = n(359549),
    S = n(537643),
    T = n(444901),
    N = n(842157),
    P = n(49999),
    w = n(985018);

function R(e) {
    var t, n, R, D, L;
    let M,
        k,
        {
            analyticsLocations: U,
            application: G,
            channel: B,
            currentUserId: F,
            currentUserPresenceActivity: H,
            hideParty: V,
            message: z,
            onView: W,
            partyStatusElement: K,
            presenceActivity: Y,
        } = e,
        q = (0, c.Ag)(G),
        { iconSrc: J, name: Q } = (function (e, t) {
            var n, r, i, l;
            let { bot: a } = t,
                s =
                    (null == (r = e.activity) ? void 0 : r.icon_override) != null
                        ? (0, x.uD)(t.id, null == (i = e.activity) ? void 0 : i.icon_override)
                        : null;
            return {
                iconSrc:
                    null != s
                        ? s
                        : O.Ay.getApplicationIconURL({
                              id: t.id,
                              icon: t.icon,
                              bot: a,
                          }),
                name: null != (n = null == (l = e.activity) ? void 0 : l.name_override) ? n : t.name,
            };
        })(z, G),
        Z =
            null !=
            (t = (0, S.I)({
                messageId: z.id,
                presenceActivity: Y,
                application: G,
            }))
                ? t
                : void 0,
        { openGameProfileModal: X, launchableAppId: $ } =
            ((R = G.id),
            (D = z.author.id),
            (M = (0, A.d)(R)),
            (k = (0, l.bG)([m.A, y.A], () => {
                let e = m.A.getApplication(R);
                return null != e ? y.A.getGameByApplication(e) : null;
            }, [R])),
            {
                openGameProfileModal: (0, b.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: null != (L = null == k ? void 0 : k.id) ? L : void 0,
                    source: _.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: D,
                }),
                launchableAppId: M,
            }),
        ee = (0, I.A)({
            application: G,
            analyticsLocations: U,
        }),
        et = i.useMemo(() => {
            if (null != ee)
                return {
                    label: w.intl.string(w.t["jaYS/h"]),
                    icon: o.hpF,
                    trackingArea: f.kY.CLOUD_PLAY,
                    onClick: ee,
                };
        }, [ee]),
        en = (0, g.F)(G),
        er = i.useMemo(() => (null != X ? X : null != en && q ? en : void 0), [q, X, en]),
        ei = u.A.useConfig({
            location: "RichPresenceGameActivityInviteEmbed",
        }),
        { canStartAuthorization: el, hasAlreadyLinked: ea, startAuthorization: es } = (0, p.RD)(G),
        eo = (0, d.z)(es, ea),
        ec = !(0, j.A)(Y, z, G.id),
        eu = (0, E.n$)(Q, null == (n = z.activity) ? void 0 : n.type, ec),
        ed = i.useRef(null),
        ep = (0, l.bG)([v.A], () => v.A.getMessages(B.id)),
        em = () => {
            let e = [];
            return (
                (0, C.G)(z.id, ep) && el && !ea && ei.enabled && e.push(a.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, r.jsx)(h.Ay, {
                    contentTypes: e,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === a.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, r.jsx)(s.AM, {
                                graphic: {
                                    type: "dynamic",
                                    component: o.Z86.ACCOUNT_LINK_DISPLAY,
                                    props: {
                                        application: G,
                                    },
                                },
                                title: w.intl.formatToPlainString(w.t["lo6H6+"], {
                                    gameName: G.name,
                                }),
                                body: w.intl.string(w.t.qYAzOp),
                                targetElementRef: ed,
                                caretConfig: {
                                    align: "start",
                                },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(P.i.USER_DISMISS),
                            });
                    },
                })
            );
        };
    return ec
        ? (0, r.jsx)(T.A, {
              message: z,
              application: G,
              applicationName: Q,
              channel: B,
              header: eu,
              currentUserId: F,
              launchableAppId: $,
              isEmbeddedApplication: q,
              tryWithGdnAction: et,
              staticBannerSrc: Z,
              onClickContent: er,
              iconSrc: J,
              onView: W,
              presenceActivity: Y,
              analyticsLocations: U,
              showAuthButton: el && !ea && ei.enabled,
              startAuthorization: eo,
              accountLinkButtonRef: ed,
              renderAccountLinkUpsell: em,
          })
        : (0, r.jsx)(N.A, {
              message: z,
              application: G,
              applicationName: Q,
              channel: B,
              header: eu,
              currentUserId: F,
              launchableAppId: $,
              isEmbeddedApplication: q,
              tryWithGdnAction: et,
              staticBannerSrc: Z,
              onClickContent: er,
              iconSrc: J,
              onView: W,
              presenceActivity: Y,
              currentUserPresenceActivity: H,
              hideParty: V,
              partyStatusElement: K,
              analyticsLocations: U,
              showAuthButton: el && !ea && ei.enabled,
              startAuthorization: eo,
              accountLinkButtonRef: ed,
              renderAccountLinkUpsell: em,
          });
}
