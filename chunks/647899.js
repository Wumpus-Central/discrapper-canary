l.d(t, { A: () => W });
var a,
    n = l(477900),
    i = l(582128),
    s = l(503698),
    r = l.n(s),
    c = l(17928),
    o = l(939249),
    A = l(366010),
    E = l(858899),
    p = l(834730),
    u = l(926268),
    I = l(346411),
    C = l(271866),
    L = l(736653),
    d = l(793574),
    T = l(688810),
    _ = l(885386),
    O = l(636537),
    N = l(73153),
    S = l(652215);
async function h() {
    N.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
    try {
        let e = await O.Bo.get({
            url: S.Rsh.APPLICATIONS,
            query: { with_team_applications: !0 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        N.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_SUCCESS", applicationIds: e.body.map((e) => e.id) });
    } catch (e) {
        N.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_FAIL" });
    }
}
var R =
    (((a = {}).INITIALIZED = "INITIALIZED"), (a.LOADING = "LOADING"), (a.LOADED = "LOADED"), (a.ERROR = "ERROR"), a);
let g = R.INITIALIZED,
    m = new Set();
class D extends c.Ay.Store {
    static displayName = "DeveloperApplicationsStore";
    getFetchState() {
        return g;
    }
    isDeveloperOfApplication(e) {
        return null != e && m.has(e);
    }
}
let P = new D(N.h, {
    LOGOUT: function () {
        ((g = R.INITIALIZED), (m = new Set()));
    },
    DEVELOPER_APPLICATIONS_FETCH_START() {
        g = R.LOADING;
    },
    DEVELOPER_APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { applicationIds: t } = e;
        ((g = R.LOADED), (m = new Set(t)));
    },
    DEVELOPER_APPLICATIONS_FETCH_FAIL() {
        g = R.ERROR;
    },
});
var x = l(793943),
    j = l(742589),
    b = l(402860),
    f = l(71393),
    k = l(576705),
    v = l(287809),
    w = l(147964),
    y = l(174459),
    F = l(975571),
    M = l(371794),
    G = l(871123),
    U = l(439303),
    V = l(353281),
    H = l(225647),
    Z = l(676924),
    B = l(995393),
    Y = l(616633),
    J = l(518477),
    Q = l(105292),
    q = l(859425);
function z(e) {
    let { content: t, onClick: l, ariaLabel: a, className: i } = e;
    return (0, n.jsx)(o.D, { className: r()(q.gb, i), onClick: l, "aria-label": a, children: t });
}
function W(e) {
    let t,
        l,
        a,
        s,
        { storefront: O, selectedPageIndex: N } = e,
        g = (0, A.M)((0, L.Ay)()),
        m = (0, c.bG)([v.default], () => v.default.getCurrentUser()),
        D = (0, U.jM)(),
        { analyticsLocations: W } = (0, T.Ay)(),
        { navigateToStorefrontPage: K } = (0, V.H)(),
        $ = O?.applicationId,
        { guildId: X } = (0, G.nG)($),
        ee = (0, c.bG)([k.A, f.A], () => k.A.can(S.xBc.MANAGE_GUILD, f.A.getGuild(X))),
        et =
            ((t = _.Q_.useSetting()),
            (l = (0, c.bG)([P], () => P.getFetchState())),
            (a = (0, c.bG)([P], () => P.isDeveloperOfApplication($))),
            (s = t || (ee ?? !1)),
            i.useEffect(() => {
                null != $ && s && l === R.INITIALIZED && h();
            }, [$, s, l]),
            a),
        el = (0, c.bG)([w.A], () => null != $ && w.A.inTestModeForApplication($)),
        ea = i.useCallback(() => {
            m?.id != null &&
                (0, b.openUserProfileModal)({
                    userId: m.id,
                    tabSection: J.RP.WISHLIST,
                    sourceAnalyticsLocations: [d.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [m]),
        en = i.useCallback(() => {
            (y.default.track(S.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: D?.sessionId,
                cta_type: B.ST.LEARN_MORE,
                location_stack: W,
            }),
                window.open(F.A.getArticleURL(S.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [D, W]),
        ei = i.useCallback(() => {
            null != $ &&
                (0, C.q1)($).then((e) => {
                    null == e
                        ? (0, E.P0)({ text: w.A.error ?? Q.intl.string(Q.t.SDP0vo), variant: "critical" })
                        : (0, x.nf)(x.HP.APPLICATION_TEST_MODE_DEBUG, {
                              shouldAutoOpenGameProfile: !1,
                              initialTabId: Y.t.STOREFRONT,
                          });
                });
        }, [$]),
        es = i.useCallback(() => {
            K?.(0);
        }, [K]);
    if (null == O) return null;
    let er = null != O.logoAssetId ? (0, M.YE)(O.applicationId, O.logoAssetId, 128) : null,
        ec = null != O.lightThemeLogoAssetId ? (0, M.YE)(O.applicationId, O.lightThemeLogoAssetId, 128) : null,
        eo = null;
    return (
        (eo = g ? (er ?? ec) : (ec ?? er)),
        (0, n.jsxs)(j.A, {
            disableDoubleClick: !0,
            className: q.N1,
            children: [
                (0, n.jsxs)(o.D, {
                    onClick: es,
                    className: q.gn,
                    children: [
                        null != eo && (0, n.jsx)("img", { className: q.wm, src: eo, alt: O.title }),
                        (0, n.jsx)(j.A.Title, { children: O.title }),
                    ],
                }),
                O.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: q.YC,
                        children: O.pages.map((e, t) =>
                            (0, n.jsx)(
                                j.A.Title,
                                {
                                    onClick: () => K?.(t),
                                    wrapperClassName: q.oB,
                                    className: r()(q.xT, { [q.ys]: N === t }),
                                    children: (0, n.jsx)(p.E, {
                                        variant: "text-sm/medium",
                                        children: (0, H.A)(e.title),
                                    }),
                                },
                                `${e.title}-${t}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: q.sZ,
                    children: [
                        (0, n.jsx)(z, {
                            content: (0, n.jsx)(u.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: ea,
                            ariaLabel: Q.intl.string(Q.t["7lZ31J"]),
                            className: q.ij,
                        }),
                        (0, n.jsx)(Z.A, { location: d.A.SOCIAL_LAYER_STOREFRONT }),
                        (0, n.jsx)(z, {
                            onClick: en,
                            ariaLabel: Q.intl.string(Q.t.hvVgAZ),
                            content: (0, n.jsx)(p.E, {
                                variant: "text-sm/medium",
                                children: Q.intl.string(Q.t.hvVgAZ),
                            }),
                            className: q.AJ,
                        }),
                        et &&
                            !el &&
                            (0, n.jsx)(z, {
                                onClick: ei,
                                ariaLabel: Q.intl.string(Q.t.QexSCe),
                                content: (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(I.WrenchIcon, { size: "xs", color: "currentColor" }),
                                        (0, n.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            children: Q.intl.string(Q.t.QexSCe),
                                        }),
                                    ],
                                }),
                                className: q.pL,
                            }),
                    ],
                }),
            ],
        })
    );
}
