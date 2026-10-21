l.d(t, { A: () => z });
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
    L = l(885386),
    p = l(636537),
    S = l(73153),
    N = l(652215);
async function h() {
    S.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
    try {
        let e = await p.Bo.get({
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
    b = l(742589),
    j = l(402860),
    f = l(71393),
    k = l(576705),
    v = l(287809),
    y = l(147964),
    F = l(174459),
    G = l(975571),
    w = l(371794),
    M = l(871123),
    U = l(439303),
    H = l(353281),
    V = l(676924),
    Z = l(995393),
    B = l(616633),
    Y = l(518477),
    J = l(105292),
    Q = l(859425);
function q(e) {
    let { content: t, onClick: l, ariaLabel: n, className: a } = e;
    return (0, i.jsx)(o.D, { className: r()(Q.gb, a), onClick: l, "aria-label": n, children: t });
}
function z(e) {
    let t,
        l,
        n,
        s,
        { storefront: p, selectedPageIndex: S } = e,
        m = (0, A.M)((0, C.Ay)()),
        g = (0, c.bG)([v.default], () => v.default.getCurrentUser()),
        D = (0, U.jM)(),
        { analyticsLocations: z } = (0, _.Ay)(),
        { navigateToStorefrontPage: W } = (0, H.H)(),
        K = p?.applicationId,
        { guildId: $ } = (0, M.nG)(K),
        X = (0, c.bG)([k.A, f.A], () => k.A.can(N.xBc.MANAGE_GUILD, f.A.getGuild($))),
        ee =
            ((t = L.Q_.useSetting()),
            (l = (0, c.bG)([x], () => x.getFetchState())),
            (n = (0, c.bG)([x], () => x.isDeveloperOfApplication(K))),
            (s = t || (X ?? !1)),
            a.useEffect(() => {
                null != K && s && l === R.INITIALIZED && h();
            }, [K, s, l]),
            n),
        et = (0, c.bG)([y.A], () => null != K && y.A.inTestModeForApplication(K)),
        el = a.useCallback(() => {
            g?.id != null &&
                (0, j.openUserProfileModal)({
                    userId: g.id,
                    tabSection: Y.RP.WISHLIST,
                    sourceAnalyticsLocations: [O.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [g]),
        en = a.useCallback(() => {
            (F.default.track(N.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: D?.sessionId,
                cta_type: Z.ST.LEARN_MORE,
                location_stack: z,
            }),
                window.open(G.A.getArticleURL(N.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [D, z]),
        ei = a.useCallback(() => {
            null != K &&
                (0, T.q1)(K).then((e) => {
                    null == e
                        ? (0, E.P0)({ text: y.A.error ?? J.intl.string(J.t.SDP0vo), variant: "critical" })
                        : (0, P.nf)(P.HP.APPLICATION_TEST_MODE_DEBUG, {
                              shouldAutoOpenGameProfile: !1,
                              initialTabId: B.t.STOREFRONT,
                          });
                });
        }, [K]),
        ea = a.useCallback(() => {
            W?.(0);
        }, [W]);
    if (null == p) return null;
    let es = null != p.logoAssetId ? (0, w.YE)(p.applicationId, p.logoAssetId, 128) : null,
        er = null != p.lightThemeLogoAssetId ? (0, w.YE)(p.applicationId, p.lightThemeLogoAssetId, 128) : null,
        ec = null;
    return (
        (ec = m ? (es ?? er) : (er ?? es)),
        (0, i.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: Q.N1,
            children: [
                (0, i.jsxs)(o.D, {
                    onClick: ea,
                    className: Q.gn,
                    children: [
                        null != ec && (0, i.jsx)("img", { className: Q.wm, src: ec, alt: p.title }),
                        (0, i.jsx)(b.A.Title, { children: p.title }),
                    ],
                }),
                p.pages.length > 1 &&
                    (0, i.jsx)("div", {
                        className: Q.YC,
                        children: p.pages.map((e, t) =>
                            (0, i.jsx)(
                                b.A.Title,
                                {
                                    onClick: () => W?.(t),
                                    wrapperClassName: Q.oB,
                                    className: r()(Q.xT, { [Q.ys]: S === t }),
                                    children: (0, i.jsx)(I.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${t}`,
                            ),
                        ),
                    }),
                (0, i.jsxs)("div", {
                    className: Q.sZ,
                    children: [
                        (0, i.jsx)(q, {
                            content: (0, i.jsx)(d.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: el,
                            ariaLabel: J.intl.string(J.t["7lZ31J"]),
                            className: Q.ij,
                        }),
                        (0, i.jsx)(V.A, { location: O.A.SOCIAL_LAYER_STOREFRONT }),
                        (0, i.jsx)(q, {
                            onClick: en,
                            ariaLabel: J.intl.string(J.t.hvVgAZ),
                            content: (0, i.jsx)(I.E, {
                                variant: "text-sm/medium",
                                children: J.intl.string(J.t.hvVgAZ),
                            }),
                            className: Q.AJ,
                        }),
                        ee &&
                            !et &&
                            (0, i.jsx)(q, {
                                onClick: ei,
                                ariaLabel: J.intl.string(J.t.QexSCe),
                                content: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.WrenchIcon, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(I.E, {
                                            variant: "text-sm/medium",
                                            children: J.intl.string(J.t.QexSCe),
                                        }),
                                    ],
                                }),
                                className: Q.pL,
                            }),
                    ],
                }),
            ],
        })
    );
}
