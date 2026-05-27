n.d(t, { p: () => J }), n(321073);
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
var p = n(192308),
    A = n(691540),
    x = n(97483),
    f = n(475743),
    E = n(942370),
    C = n(311350),
    I = n(375708);
let v = "in-game-auth-check-modal";
var _ = n(46225),
    j = n(587895),
    N = n(354287),
    T = n(574660),
    y = n(379848),
    S = n(409626),
    b = n(692969),
    L = n(928550),
    k = n(760751),
    R = n(232835),
    M = n(970928),
    P = n(486020),
    w = n(723702),
    D = n(134861),
    O = n(528767),
    U = n(625248),
    G = n(652215),
    V = n(737393),
    B = n(835517),
    H = n(228366),
    F = n(635377);
let Y = new (n.n(F)())({ max: 500 });
class z extends s.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return Y.get(t);
    }
}
let W = new z(H.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (Y.get(t) === n) return !1;
        Y.set(t, n);
    },
});
var K = n(49999);
function J(e) {
    var t, u;
    let F,
        Y,
        { analyticsLocations: z, application: J, channel: q, message: Z, presenceActivity: X, location: $ } = e,
        Q = (0, c.Ag)(J),
        { iconSrc: ee, name: et } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, M.uD)(t.id, e.activity?.icon_override) : null) ??
                    P.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(Z, J),
        en =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: r, imageURL: a } = (0, s.cf)(
                        [W],
                        () =>
                            ((e) => {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = W.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, B.A)(),
                                    r =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, M.uD)(n.application_id, n.assets.invite_cover_image, s)
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
                                H.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: a });
                    }, [r, a, t]),
                    a
                );
            })({ messageId: Z.id, presenceActivity: X, application: J }) ?? void 0,
        { openGameProfileModal: ei, launchableAppId: el } =
            ((t = J.id),
            (u = Z.author.id),
            (F = (0, L.d)(t)),
            (Y = (0, s.bG)([j.A, k.A], () => {
                let e = j.A.getApplication(t);
                return null != e ? k.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, b.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: Y?.id ?? void 0,
                    source: S.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: u,
                }),
                launchableAppId: F,
            }),
        es = (0, V.A)({ application: J, analyticsLocations: z }),
        er = l.useMemo(() => {
            if (null != es)
                return { label: I.intl.string(I.t["jaYS/h"]), icon: o.h, trackingArea: N.kY.CLOUD_PLAY, onClick: es };
        }, [es]),
        ea = (0, T.F)(J),
        eo = l.useMemo(() => (null != ei ? ei : null != ea && Q ? ea : void 0), [Q, ei, ea]),
        ed = m.useConfig({ location: $ }),
        ec = g.useConfig({ location: $ }),
        { canStartAuthorization: eu, hasAlreadyLinked: em, startAuthorization: eh } = (0, _.RD)(J),
        eg = (function (e, t) {
            let { showInGameModal: s = !0, showToastOnSuccess: r = !0 } =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                [a, o] = l.useState(!1),
                d = l.useCallback(
                    function () {
                        for (var t = arguments.length, l = Array(t), r = 0; r < t; r++) l[r] = arguments[r];
                        o(!0);
                        let a = e(...l);
                        return (
                            a === E._M.RPC &&
                                s &&
                                (0, p.openModalLazy)(
                                    async () => {
                                        let { default: e } = await n.e("30724").then(n.bind(n, 272047));
                                        return (t) => (0, i.jsx)(e, { ...t });
                                    },
                                    { modalKey: v },
                                ),
                            a
                        );
                    },
                    [e, o, s],
                ),
                c = (0, f.A)(t);
            return (
                l.useEffect(() => {
                    if (a && !1 === c && !0 === t) {
                        if (((0, p.closeModal)(v), o(!1), !r)) return;
                        let e = () => {
                            (0, A.P0)({
                                id: "account-linked-toast",
                                message: I.intl.string(C.default.uG6teD),
                                type: x.Ck.SUCCESS,
                            });
                        };
                        if ("visible" === document.visibilityState) e();
                        else {
                            let t = () => {
                                "visible" === document.visibilityState &&
                                    (e(), document.removeEventListener("visibilitychange", t));
                            };
                            document.addEventListener("visibilitychange", t);
                        }
                    }
                }, [a, t, c, r]),
                d
            );
        })(eh, em),
        ep = (0, s.bG)([D.A, O.A], () => !!D.A.isConnected(J.id) || null != (0, U.l)(X), [J, X]),
        eA = h.has(J.id) || (null != J.parentId && h.has(J.parentId)),
        ex = w.isPlatformEmbedded && !eA && ec.requireAccountLink && eu && !em,
        ef = w.isPlatformEmbedded && !eA && ec.requireGameLaunch && !ep,
        eE = l.useRef(null),
        eC = (0, s.bG)([R.A], () => R.A.getMessages(q.id));
    return {
        isEmbeddedApplication: Q,
        iconSrc: ee,
        applicationName: et,
        staticBannerSrc: en,
        openGameProfileModal: ei,
        launchableAppId: el,
        tryWithGdnAction: er,
        viewAction: eo,
        accountLinkingEntryPointExperimentConfig: ed,
        canStartAuthorization: eu,
        hasAlreadyLinked: em,
        startAuthorizeWithToast: eg,
        requireAccountLink: ex,
        requireGameLaunch: ef,
        accountLinkButtonRef: eE,
        renderAccountLinkUpsell: () => {
            var e;
            let t = [];
            return (
                (e = Z.id),
                !eC.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === G.xL.JOIN, 25) &&
                    eu &&
                    !em &&
                    ed.enabled &&
                    t.push(r.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, i.jsx)(y.Ay, {
                    contentTypes: t,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === r.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, i.jsx)(a.A, {
                                graphic: {
                                    type: "dynamic",
                                    component: d.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                    props: { application: J },
                                },
                                title: I.intl.formatToPlainString(I.t["lo6H6+"], { gameName: J.name }),
                                body: I.intl.string(I.t.qYAzOp),
                                targetElementRef: eE,
                                caretConfig: { align: "start" },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(K.i.USER_DISMISS),
                            });
                    },
                })
            );
        },
    };
}
