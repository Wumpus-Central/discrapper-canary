l.d(t, { A: () => J });
var n,
    i = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    c = l(17928),
    o = l(939249),
    A = l(366010),
    E = l(858899),
    I = l(834730),
    d = l(926268),
    u = l(346411),
    T = l(271866),
    C = l(736653),
    O = l(793574),
    _ = l(688810),
    p = l(885386),
    L = l(636537),
    S = l(73153),
    N = l(652215);
async function h() {
    S.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
    try {
        let e = await L.Bo.get({
            url: N.Rsh.APPLICATIONS,
            query: { with_team_applications: !0 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        S.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_SUCCESS", applicationIds: e.body.map((e) => e.id) });
    } catch (e) {
        S.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_FAIL" });
    }
}
var R =
    (((n = {}).INITIALIZED = "INITIALIZED"), (n.LOADING = "LOADING"), (n.LOADED = "LOADED"), (n.ERROR = "ERROR"), n);
let m = R.INITIALIZED,
    g = new Set();
class D extends c.Ay.Store {
    static displayName = "DeveloperApplicationsStore";
    getFetchState() {
        return m;
    }
    isDeveloperOfApplication(e) {
        return null != e && g.has(e);
    }
}
let x = new D(S.h, {
    LOGOUT: function () {
        ((m = R.INITIALIZED), (g = new Set()));
    },
    DEVELOPER_APPLICATIONS_FETCH_START() {
        m = R.LOADING;
    },
    DEVELOPER_APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { applicationIds: t } = e;
        ((m = R.LOADED), (g = new Set(t)));
    },
    DEVELOPER_APPLICATIONS_FETCH_FAIL() {
        m = R.ERROR;
    },
});
var P = l(793943),
    j = l(742589),
    b = l(402860),
    f = l(287809),
    k = l(147964),
    v = l(174459),
    y = l(975571),
    F = l(371794),
    w = l(439303),
    G = l(353281),
    H = l(676924),
    M = l(995393),
    U = l(616633),
    V = l(518477),
    Z = l(105292),
    Y = l(859425);
function B(e) {
    let { content: t, onClick: l, ariaLabel: n, className: a } = e;
    return (0, i.jsx)(o.D, { className: r()(Y.gb, a), onClick: l, "aria-label": n, children: t });
}
function J(e) {
    let t,
        l,
        n,
        { storefront: s, selectedPageIndex: L } = e,
        S = (0, A.M)((0, C.Ay)()),
        m = (0, c.bG)([f.default], () => f.default.getCurrentUser()),
        g = (0, w.jM)(),
        { analyticsLocations: D } = (0, _.Ay)(),
        { navigateToStorefrontPage: J } = (0, G.H)(),
        Q = s?.applicationId,
        q =
            ((t = p.Q_.useSetting()),
            (l = (0, c.bG)([x], () => x.getFetchState())),
            (n = (0, c.bG)([x], () => x.isDeveloperOfApplication(Q))),
            a.useEffect(() => {
                null != Q && t && l === R.INITIALIZED && h();
            }, [Q, t, l]),
            n),
        z = (0, c.bG)([k.A], () => null != Q && k.A.inTestModeForApplication(Q)),
        W = a.useCallback(() => {
            m?.id != null &&
                (0, b.openUserProfileModal)({
                    userId: m.id,
                    tabSection: V.RP.WISHLIST,
                    sourceAnalyticsLocations: [O.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [m]),
        K = a.useCallback(() => {
            (v.default.track(N.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: g?.sessionId,
                cta_type: M.ST.LEARN_MORE,
                location_stack: D,
            }),
                window.open(y.A.getArticleURL(N.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [g, D]),
        $ = a.useCallback(() => {
            null != Q &&
                (0, T.q1)(Q).then((e) => {
                    null == e
                        ? (0, E.P0)({ text: k.A.error ?? Z.intl.string(Z.t.SDP0vo), variant: "critical" })
                        : (0, P.nf)(P.HP.APPLICATION_TEST_MODE_DEBUG, {
                              shouldAutoOpenGameProfile: !1,
                              initialTabId: U.t.STOREFRONT,
                          });
                });
        }, [Q]),
        X = a.useCallback(() => {
            J?.(0);
        }, [J]);
    if (null == s) return null;
    let ee = null != s.logoAssetId ? (0, F.YE)(s.applicationId, s.logoAssetId, 128) : null,
        et = null != s.lightThemeLogoAssetId ? (0, F.YE)(s.applicationId, s.lightThemeLogoAssetId, 128) : null,
        el = null;
    return (
        (el = S ? (ee ?? et) : (et ?? ee)),
        (0, i.jsxs)(j.A, {
            disableDoubleClick: !0,
            className: Y.N1,
            children: [
                (0, i.jsxs)(o.D, {
                    onClick: X,
                    className: Y.gn,
                    children: [
                        null != el && (0, i.jsx)("img", { className: Y.wm, src: el, alt: s.title }),
                        (0, i.jsx)(j.A.Title, { children: s.title }),
                    ],
                }),
                s.pages.length > 1 &&
                    (0, i.jsx)("div", {
                        className: Y.YC,
                        children: s.pages.map((e, t) =>
                            (0, i.jsx)(
                                j.A.Title,
                                {
                                    onClick: () => J?.(t),
                                    wrapperClassName: Y.oB,
                                    className: r()(Y.xT, { [Y.ys]: L === t }),
                                    children: (0, i.jsx)(I.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${t}`,
                            ),
                        ),
                    }),
                (0, i.jsxs)("div", {
                    className: Y.sZ,
                    children: [
                        (0, i.jsx)(B, {
                            content: (0, i.jsx)(d.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: W,
                            ariaLabel: Z.intl.string(Z.t["7lZ31J"]),
                            className: Y.ij,
                        }),
                        (0, i.jsx)(H.A, { location: O.A.SOCIAL_LAYER_STOREFRONT }),
                        (0, i.jsx)(B, {
                            onClick: K,
                            ariaLabel: Z.intl.string(Z.t.hvVgAZ),
                            content: (0, i.jsx)(I.E, {
                                variant: "text-sm/medium",
                                children: Z.intl.string(Z.t.hvVgAZ),
                            }),
                            className: Y.AJ,
                        }),
                        q &&
                            !z &&
                            (0, i.jsx)(B, {
                                onClick: $,
                                ariaLabel: Z.intl.string(Z.t.QexSCe),
                                content: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.WrenchIcon, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(I.E, {
                                            variant: "text-sm/medium",
                                            children: Z.intl.string(Z.t.QexSCe),
                                        }),
                                    ],
                                }),
                                className: Y.pL,
                            }),
                    ],
                }),
            ],
        })
    );
}
