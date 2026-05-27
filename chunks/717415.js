n.d(t, { p: () => H }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(554146),
    a = n(43105),
    o = n(414499),
    d = n(116833),
    c = n(735991),
    u = n(945810);
let m = (0, u.mj)({
        name: "2025-12-game-invite-account-linking-entry-point",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    h = new Set(["1443349464290168976", "1443350165678198935", "1443033465766281327"]),
    g = (0, u.mj)({
        name: "2026-04-require-account-link-game-invite",
        kind: "user",
        defaultConfig: { requireAccountLink: !1, requireGameLaunch: !1 },
        variations: {
            0: { requireAccountLink: !1, requireGameLaunch: !1 },
            1: { requireAccountLink: !0, requireGameLaunch: !1 },
            2: { requireAccountLink: !1, requireGameLaunch: !0 },
            3: { requireAccountLink: !0, requireGameLaunch: !0 },
        },
    });
var p = n(359800),
    A = n(46225),
    x = n(587895),
    f = n(354287),
    E = n(574660),
    C = n(379848),
    I = n(409626),
    v = n(692969),
    _ = n(928550),
    j = n(760751),
    N = n(232835),
    T = n(970928),
    y = n(486020),
    S = n(723702),
    b = n(134861),
    L = n(528767),
    k = n(625248),
    R = n(652215),
    M = n(737393),
    P = n(835517),
    w = n(228366),
    D = n(635377);
let O = new (n.n(D)())({ max: 500 });
class U extends s.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return O.get(t);
    }
}
let G = new U(w.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (O.get(t) === n) return !1;
        O.set(t, n);
    },
});
var V = n(49999),
    B = n(375708);
function H(e) {
    var t, n;
    let u,
        D,
        { analyticsLocations: O, application: U, channel: H, message: F, presenceActivity: Y, location: z } = e,
        W = (0, c.Ag)(U),
        { iconSrc: K, name: J } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, T.uD)(t.id, e.activity?.icon_override) : null) ??
                    y.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(F, U),
        q =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: r, imageURL: a } = (0, s.cf)(
                        [G],
                        () =>
                            ((e) => {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = G.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, P.A)(),
                                    r =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, T.uD)(n.application_id, n.assets.invite_cover_image, s)
                                            : null) ??
                                        l ??
                                        i.getCoverImageURL(s) ??
                                        null;
                                return { cachedImageURL: l, imageURL: r };
                            })({ messageId: t, presenceActivity: n, application: i }),
                        [t, n, i],
                    );
                return (
                    l.useEffect(() => {
                        r !== a &&
                            (function (e) {
                                let { messageId: t, coverImageURL: n } = e;
                                w.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: a });
                    }, [r, a, t]),
                    a
                );
            })({ messageId: F.id, presenceActivity: Y, application: U }) ?? void 0,
        { openGameProfileModal: Z, launchableAppId: X } =
            ((t = U.id),
            (n = F.author.id),
            (u = (0, _.d)(t)),
            (D = (0, s.bG)([x.A, j.A], () => {
                let e = x.A.getApplication(t);
                return null != e ? j.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, v.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: D?.id ?? void 0,
                    source: I.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: u,
            }),
        $ = (0, M.A)({ application: U, analyticsLocations: O }),
        Q = l.useMemo(() => {
            if (null != $)
                return { label: B.intl.string(B.t["jaYS/h"]), icon: o.h, trackingArea: f.kY.CLOUD_PLAY, onClick: $ };
        }, [$]),
        ee = (0, E.F)(U),
        et = l.useMemo(() => (null != Z ? Z : null != ee && W ? ee : void 0), [W, Z, ee]),
        en = m.useConfig({ location: z }),
        ei = g.useConfig({ location: z }),
        { canStartAuthorization: el, hasAlreadyLinked: es, startAuthorization: er } = (0, A.RD)(U),
        ea = (0, p.z)(er, es),
        eo = (0, s.bG)([b.A, L.A], () => !!b.A.isConnected(U.id) || null != (0, k.l)(Y), [U, Y]),
        ed = h.has(U.id) || (null != U.parentId && h.has(U.parentId)),
        ec = S.isPlatformEmbedded && !ed && ei.requireAccountLink && el && !es,
        eu = S.isPlatformEmbedded && !ed && ei.requireGameLaunch && !eo,
        em = l.useRef(null),
        eh = (0, s.bG)([N.A], () => N.A.getMessages(H.id));
    return {
        isEmbeddedApplication: W,
        iconSrc: K,
        applicationName: J,
        staticBannerSrc: q,
        openGameProfileModal: Z,
        launchableAppId: X,
        tryWithGdnAction: Q,
        viewAction: et,
        accountLinkingEntryPointExperimentConfig: en,
        canStartAuthorization: el,
        hasAlreadyLinked: es,
        startAuthorizeWithToast: ea,
        requireAccountLink: ec,
        requireGameLaunch: eu,
        accountLinkButtonRef: em,
        renderAccountLinkUpsell: () => {
            var e;
            let t = [];
            return (
                (e = F.id),
                !eh.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === R.xL.JOIN, 25) &&
                    el &&
                    !es &&
                    en.enabled &&
                    t.push(r.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, i.jsx)(C.Ay, {
                    contentTypes: t,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === r.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, i.jsx)(a.A, {
                                graphic: {
                                    type: "dynamic",
                                    component: d.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                    props: { application: U },
                                },
                                title: B.intl.formatToPlainString(B.t["lo6H6+"], { gameName: U.name }),
                                body: B.intl.string(B.t.qYAzOp),
                                targetElementRef: em,
                                caretConfig: { align: "start" },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(V.i.USER_DISMISS),
                            });
                    },
                })
            );
        },
    };
}
