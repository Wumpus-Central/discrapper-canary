n.d(t, { p: () => D }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(17928),
    a = n(554146),
    s = n(43105),
    o = n(414499),
    d = n(116833),
    c = n(735991),
    u = n(690456),
    m = n(55787),
    p = n(359800),
    A = n(46225),
    g = n(587895),
    I = n(354287),
    h = n(574660),
    C = n(379848),
    S = n(409626),
    E = n(692969),
    f = n(928550),
    _ = n(760751),
    x = n(232835),
    T = n(970928),
    v = n(486020),
    N = n(723702),
    y = n(807169),
    k = n(837197),
    b = n(737393),
    L = n(643045),
    R = n(49999),
    P = n(375708);
function D(e) {
    var t, n;
    let D,
        O,
        { analyticsLocations: U, application: j, channel: G, message: M, presenceActivity: B, location: w } = e,
        V = (0, c.Ag)(j),
        { iconSrc: F, name: Y } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, T.uD)(t.id, e.activity?.icon_override) : null) ??
                    v.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(M, j),
        W = (0, L.I)({ messageId: M.id, presenceActivity: B, application: j }) ?? void 0,
        { openGameProfileModal: H, launchableAppId: J } =
            ((t = j.id),
            (n = M.author.id),
            (D = (0, f.d)(t)),
            (O = (0, r.bG)([g.A, _.A], () => {
                let e = g.A.getApplication(t);
                return null != e ? _.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, E.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: O?.id ?? void 0,
                    source: S.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: D,
            }),
        z = (0, b.A)({ application: j, analyticsLocations: U }),
        q = l.useMemo(() => {
            if (null != z)
                return { label: P.intl.string(P.t["jaYS/h"]), icon: o.h, trackingArea: I.kY.CLOUD_PLAY, onClick: z };
        }, [z]),
        K = (0, h.F)(j),
        $ = l.useMemo(() => (null != H ? H : null != K && V ? K : void 0), [V, H, K]),
        Q = u.A.useConfig({ location: w }),
        X = m.A.useConfig({ location: w }),
        { canStartAuthorization: Z, hasAlreadyLinked: ee, startAuthorization: et } = (0, A.RD)(j),
        en = (0, p.z)(et, ee),
        ei = (0, y.V)(j, B),
        el = m.p.has(j.id) || (null != j.parentId && m.p.has(j.parentId)),
        er = N.isPlatformEmbedded && !el && X.requireAccountLink && Z && !ee,
        ea = N.isPlatformEmbedded && !el && X.requireGameLaunch && !ei,
        es = l.useRef(null),
        eo = (0, r.bG)([x.A], () => x.A.getMessages(G.id));
    return {
        isEmbeddedApplication: V,
        iconSrc: F,
        applicationName: Y,
        staticBannerSrc: W,
        openGameProfileModal: H,
        launchableAppId: J,
        tryWithGdnAction: q,
        viewAction: $,
        accountLinkingEntryPointExperimentConfig: Q,
        canStartAuthorization: Z,
        hasAlreadyLinked: ee,
        startAuthorizeWithToast: en,
        requireAccountLink: er,
        requireGameLaunch: ea,
        accountLinkButtonRef: es,
        renderAccountLinkUpsell: () => {
            let e = [];
            return (
                (0, k.G)(M.id, eo) && Z && !ee && Q.enabled && e.push(a.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, i.jsx)(C.Ay, {
                    contentTypes: e,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === a.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, i.jsx)(s.A, {
                                graphic: {
                                    type: "dynamic",
                                    component: d.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                    props: { application: j },
                                },
                                title: P.intl.formatToPlainString(P.t["lo6H6+"], { gameName: j.name }),
                                body: P.intl.string(P.t.qYAzOp),
                                targetElementRef: es,
                                caretConfig: { align: "start" },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(R.i.USER_DISMISS),
                            });
                    },
                })
            );
        },
    };
}
