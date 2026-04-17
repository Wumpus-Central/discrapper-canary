n.d(t, { A: () => D }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(554146),
    s = n(342494),
    o = n(397927),
    d = n(735991),
    c = n(690456),
    u = n(55787),
    _ = n(359800),
    m = n(362490),
    h = n(587895),
    p = n(354287),
    g = n(574660),
    A = n(379848),
    x = n(409626),
    f = n(692969),
    C = n(928550),
    E = n(760751),
    I = n(320501),
    v = n(139675),
    b = n(486020),
    T = n(723702),
    y = n(456060),
    S = n(659051),
    N = n(837197),
    j = n(359549),
    L = n(537643),
    R = n(444901),
    P = n(842157),
    w = n(49999),
    M = n(985018);
function D(e) {
    var t, n;
    let D,
        k,
        {
            analyticsLocations: O,
            application: U,
            channel: B,
            currentUserId: G,
            currentUserPresenceActivity: F,
            hideParty: H,
            message: V,
            onView: q,
            partyStatusElement: W,
            presenceActivity: z,
        } = e,
        Y = (0, d.Ag)(U),
        { iconSrc: Q, name: K } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, v.uD)(t.id, e.activity?.icon_override) : null) ??
                    b.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(V, U),
        X = (0, L.I)({ messageId: V.id, presenceActivity: z, application: U }) ?? void 0,
        { openGameProfileModal: J, launchableAppId: Z } =
            ((t = U.id),
            (n = V.author.id),
            (D = (0, C.d)(t)),
            (k = (0, l.bG)([h.A, E.A], () => {
                let e = h.A.getApplication(t);
                return null != e ? E.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, f.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: k?.id ?? void 0,
                    source: x.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: D,
            }),
        $ = (0, j.A)({ application: U, analyticsLocations: O }),
        ee = a.useMemo(() => {
            if (null != $)
                return { label: M.intl.string(M.t["jaYS/h"]), icon: o.hpF, trackingArea: p.kY.CLOUD_PLAY, onClick: $ };
        }, [$]),
        et = (0, g.F)(U),
        en = a.useMemo(() => (null != J ? J : null != et && Y ? et : void 0), [Y, J, et]),
        ei = c.A.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        ea = u.A.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: el, hasAlreadyLinked: er, startAuthorization: es } = (0, m.RD)(U),
        eo = (0, _.z)(es, er),
        ed = T.isPlatformEmbedded && ea.required && el && !er,
        ec = !(0, S.A)(z, V, U.id),
        eu = (0, y.n$)(K, V.activity?.type, ec),
        e_ = a.useRef(null),
        em = (0, l.bG)([I.A], () => I.A.getMessages(B.id)),
        eh = () => {
            let e = [];
            return (
                (0, N.G)(V.id, em) && el && !er && ei.enabled && e.push(r.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, i.jsx)(A.Ay, {
                    contentTypes: e,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === r.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, i.jsx)(s.AM, {
                                graphic: {
                                    type: "dynamic",
                                    component: o.Z86.ACCOUNT_LINK_DISPLAY,
                                    props: { application: U },
                                },
                                title: M.intl.formatToPlainString(M.t["lo6H6+"], { gameName: U.name }),
                                body: M.intl.string(M.t.qYAzOp),
                                targetElementRef: e_,
                                caretConfig: { align: "start" },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(w.i.USER_DISMISS),
                            });
                    },
                })
            );
        };
    return ec
        ? (0, i.jsx)(R.A, {
              message: V,
              application: U,
              applicationName: K,
              channel: B,
              header: eu,
              currentUserId: G,
              launchableAppId: Z,
              isEmbeddedApplication: Y,
              tryWithGdnAction: ee,
              staticBannerSrc: X,
              onClickContent: en,
              iconSrc: Q,
              onView: q,
              presenceActivity: z,
              analyticsLocations: O,
              showAuthButton: el && !er && ei.enabled,
              requireAccountLink: ed,
              startAuthorization: eo,
              accountLinkButtonRef: e_,
              renderAccountLinkUpsell: eh,
          })
        : (0, i.jsx)(P.A, {
              message: V,
              application: U,
              applicationName: K,
              channel: B,
              header: eu,
              currentUserId: G,
              launchableAppId: Z,
              isEmbeddedApplication: Y,
              tryWithGdnAction: ee,
              staticBannerSrc: X,
              onClickContent: en,
              iconSrc: Q,
              onView: q,
              presenceActivity: z,
              currentUserPresenceActivity: F,
              hideParty: H,
              partyStatusElement: W,
              analyticsLocations: O,
              showAuthButton: el && !er && ei.enabled,
              requireAccountLink: ed,
              canPromptAuth: el && !er,
              startAuthorization: eo,
              accountLinkButtonRef: e_,
              renderAccountLinkUpsell: eh,
          });
}
