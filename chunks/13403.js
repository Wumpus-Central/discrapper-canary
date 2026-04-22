n.d(t, { A: () => O }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(554146),
    r = n(265486),
    o = n(414499),
    d = n(116833),
    c = n(735991),
    u = n(690456),
    m = n(55787),
    _ = n(359800),
    h = n(362490),
    p = n(587895),
    g = n(354287),
    A = n(574660),
    f = n(379848),
    x = n(409626),
    C = n(692969),
    E = n(928550),
    I = n(760751),
    v = n(320501),
    b = n(139675),
    T = n(486020),
    S = n(723702),
    y = n(456060),
    N = n(659051),
    j = n(837197),
    L = n(359549),
    R = n(537643),
    P = n(444901),
    w = n(842157),
    D = n(49999),
    k = n(985018);
function O(e) {
    var t, n;
    let O,
        M,
        {
            analyticsLocations: U,
            application: G,
            channel: B,
            currentUserId: F,
            currentUserPresenceActivity: H,
            hideParty: V,
            message: q,
            onView: W,
            partyStatusElement: z,
            presenceActivity: Y,
        } = e,
        Q = (0, c.Ag)(G),
        { iconSrc: K, name: Z } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, b.uD)(t.id, e.activity?.icon_override) : null) ??
                    T.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(q, G),
        J = (0, R.I)({ messageId: q.id, presenceActivity: Y, application: G }) ?? void 0,
        { openGameProfileModal: X, launchableAppId: $ } =
            ((t = G.id),
            (n = q.author.id),
            (O = (0, E.d)(t)),
            (M = (0, a.bG)([p.A, I.A], () => {
                let e = p.A.getApplication(t);
                return null != e ? I.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, C.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: M?.id ?? void 0,
                    source: x.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: O,
            }),
        ee = (0, L.A)({ application: G, analyticsLocations: U }),
        et = l.useMemo(() => {
            if (null != ee)
                return { label: k.intl.string(k.t["jaYS/h"]), icon: o.h, trackingArea: g.kY.CLOUD_PLAY, onClick: ee };
        }, [ee]),
        en = (0, A.F)(G),
        ei = l.useMemo(() => (null != X ? X : null != en && Q ? en : void 0), [Q, X, en]),
        el = u.A.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        ea = m.A.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: es, hasAlreadyLinked: er, startAuthorization: eo } = (0, h.RD)(G),
        ed = (0, _.z)(eo, er),
        ec = S.isPlatformEmbedded && ea.required && es && !er,
        eu = !(0, N.A)(Y, q, G.id),
        em = (0, y.n$)(Z, q.activity?.type, eu),
        e_ = l.useRef(null),
        eh = (0, a.bG)([v.A], () => v.A.getMessages(B.id)),
        ep = () => {
            let e = [];
            return (
                (0, j.G)(q.id, eh) && es && !er && el.enabled && e.push(s.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, i.jsx)(f.Ay, {
                    contentTypes: e,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === s.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, i.jsx)(r.A, {
                                graphic: {
                                    type: "dynamic",
                                    component: d.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                    props: { application: G },
                                },
                                title: k.intl.formatToPlainString(k.t["lo6H6+"], { gameName: G.name }),
                                body: k.intl.string(k.t.qYAzOp),
                                targetElementRef: e_,
                                caretConfig: { align: "start" },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(D.i.USER_DISMISS),
                            });
                    },
                })
            );
        };
    return eu
        ? (0, i.jsx)(P.A, {
              message: q,
              application: G,
              applicationName: Z,
              channel: B,
              header: em,
              currentUserId: F,
              launchableAppId: $,
              isEmbeddedApplication: Q,
              tryWithGdnAction: et,
              staticBannerSrc: J,
              onClickContent: ei,
              iconSrc: K,
              onView: W,
              presenceActivity: Y,
              analyticsLocations: U,
              showAuthButton: es && !er && el.enabled,
              requireAccountLink: ec,
              startAuthorization: ed,
              accountLinkButtonRef: e_,
              renderAccountLinkUpsell: ep,
          })
        : (0, i.jsx)(w.A, {
              message: q,
              application: G,
              applicationName: Z,
              channel: B,
              header: em,
              currentUserId: F,
              launchableAppId: $,
              isEmbeddedApplication: Q,
              tryWithGdnAction: et,
              staticBannerSrc: J,
              onClickContent: ei,
              iconSrc: K,
              onView: W,
              presenceActivity: Y,
              currentUserPresenceActivity: H,
              hideParty: V,
              partyStatusElement: z,
              analyticsLocations: U,
              showAuthButton: es && !er && el.enabled,
              requireAccountLink: ec,
              canPromptAuth: es && !er,
              startAuthorization: ed,
              accountLinkButtonRef: e_,
              renderAccountLinkUpsell: ep,
          });
}
