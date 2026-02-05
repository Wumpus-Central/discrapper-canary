n.d(t, { A: () => O }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(554146),
    s = n(342494),
    o = n(397927),
    d = n(735991),
    c = n(690456),
    u = n(359800),
    m = n(362490),
    _ = n(587895),
    h = n(354287),
    p = n(574660),
    g = n(379848),
    A = n(409626),
    f = n(692969),
    x = n(928550),
    E = n(760751),
    C = n(320501),
    I = n(139675),
    T = n(486020),
    v = n(456060),
    N = n(659051),
    S = n(837197),
    b = n(359549),
    y = n(537643),
    j = n(444901),
    R = n(842157),
    L = n(49999),
    M = n(985018);
function O(e) {
    var t, n;
    let O,
        P,
        {
            analyticsLocations: D,
            application: k,
            channel: U,
            currentUserId: w,
            currentUserPresenceActivity: G,
            hideParty: B,
            message: F,
            onView: H,
            partyStatusElement: V,
            presenceActivity: z,
        } = e,
        W = (0, d.Ag)(k),
        { iconSrc: Y, name: q } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, I.uD)(t.id, e.activity?.icon_override) : null) ??
                    T.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(F, k),
        K = (0, y.I)({ messageId: F.id, presenceActivity: z, application: k }) ?? void 0,
        { openGameProfileModal: Q, launchableAppId: J } =
            ((t = k.id),
            (n = F.author.id),
            (O = (0, x.d)(t)),
            (P = (0, a.bG)([_.A, E.A], () => {
                let e = _.A.getApplication(t);
                return null != e ? E.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, f.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: P?.id ?? void 0,
                    source: A.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: O,
            }),
        X = (0, b.A)({ application: k, analyticsLocations: D }),
        Z = l.useMemo(() => {
            if (null != X)
                return { label: M.intl.string(M.t["jaYS/h"]), icon: o.hpF, trackingArea: h.kY.CLOUD_PLAY, onClick: X };
        }, [X]),
        $ = (0, p.F)(k),
        ee = l.useMemo(() => (null != Q ? Q : null != $ && W ? $ : void 0), [W, Q, $]),
        et = c.A.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: en, hasAlreadyLinked: ei, startAuthorization: el } = (0, m.RD)(k),
        ea = (0, u.z)(el, ei),
        er = !(0, N.A)(z, F, k.id),
        es = (0, v.n$)(q, F.activity?.type, er),
        eo = l.useRef(null),
        ed = (0, a.bG)([C.A], () => C.A.getMessages(U.id)),
        ec = () => {
            let e = [];
            return (
                (0, S.G)(F.id, ed) && en && !ei && et.enabled && e.push(r.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, i.jsx)(g.Ay, {
                    contentTypes: e,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === r.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, i.jsx)(s.AM, {
                                graphic: {
                                    type: "dynamic",
                                    component: o.Z86.ACCOUNT_LINK_DISPLAY,
                                    props: { application: k },
                                },
                                title: M.intl.formatToPlainString(M.t["lo6H6+"], { gameName: k.name }),
                                body: M.intl.string(M.t.qYAzOp),
                                targetElementRef: eo,
                                caretConfig: { align: "start" },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(L.i.USER_DISMISS),
                            });
                    },
                })
            );
        };
    return er
        ? (0, i.jsx)(j.A, {
              message: F,
              application: k,
              applicationName: q,
              channel: U,
              header: es,
              currentUserId: w,
              launchableAppId: J,
              isEmbeddedApplication: W,
              tryWithGdnAction: Z,
              staticBannerSrc: K,
              onClickContent: ee,
              iconSrc: Y,
              onView: H,
              presenceActivity: z,
              analyticsLocations: D,
              showAuthButton: en && !ei && et.enabled,
              startAuthorization: ea,
              accountLinkButtonRef: eo,
              renderAccountLinkUpsell: ec,
          })
        : (0, i.jsx)(R.A, {
              message: F,
              application: k,
              applicationName: q,
              channel: U,
              header: es,
              currentUserId: w,
              launchableAppId: J,
              isEmbeddedApplication: W,
              tryWithGdnAction: Z,
              staticBannerSrc: K,
              onClickContent: ee,
              iconSrc: Y,
              onView: H,
              presenceActivity: z,
              currentUserPresenceActivity: G,
              hideParty: B,
              partyStatusElement: V,
              analyticsLocations: D,
              showAuthButton: en && !ei && et.enabled,
              startAuthorization: ea,
              accountLinkButtonRef: eo,
              renderAccountLinkUpsell: ec,
          });
}
