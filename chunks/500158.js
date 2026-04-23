n.d(t, { k: () => w });
var i = n(419954),
    l = n(780964),
    s = n(884210),
    a = n(985018);
let r = (0, i.E2)(l.X.APPEARANCE_CLIENT_THEMES, { useSearchTerms: () => [a.intl.string(a.t.Ksh3ik)], Component: s.sB });
var o = n(627968);
n(64700);
var d = n(503698),
    u = n.n(d),
    c = n(110259),
    g = n(821609),
    _ = n(534514),
    m = n(834730),
    h = n(688810),
    A = n(139286),
    p = n(793943),
    E = n(996254),
    T = n(779733),
    S = n(738419),
    x = n(693227),
    f = n(176409),
    b = n(114149);
function N(e) {
    let { className: t } = e,
        { analyticsLocations: n } = (0, h.Ay)();
    (0, A.A)({
        name: c.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let i = (0, E.X)({ "en-US": x.default["f/cLEi"], "en-GB": x.default["f/cLEi"] }, x.default.CARxAC);
    return (0, o.jsxs)("div", {
        className: u()(f.kL, t),
        children: [
            (0, o.jsx)("div", { className: f.zc, children: (0, o.jsx)("img", { src: b.A, className: f._e, alt: "" }) }),
            (0, o.jsxs)("div", {
                className: f.P_,
                children: [
                    (0, o.jsx)(_.D, { variant: "heading-lg/semibold", color: "text-strong", children: i }),
                    (0, o.jsx)(m.E, { variant: "text-sm/normal", children: a.intl.string(x.default.nla4RG) }),
                ],
            }),
            (0, o.jsx)("div", {
                className: f.UD,
                children: (0, o.jsx)(g.$, {
                    variant: "primary",
                    text: a.intl.string(a.t.uw9zI7),
                    onClick: () => {
                        (0, S.b0)(S.G8.APPEARANCE_SETTINGS),
                            (0, p.nf)(p.HP.CUSTOM_THEME, { from: p.xv.SETTING }),
                            (0, T.default)();
                    },
                }),
            }),
        ],
    });
}
let C = (0, i.E2)(l.X.APPEARANCE_CUSTOM_THEMES_UPSELL, {
    useSearchTerms: () => [a.intl.string(a.t.Ksh3ik)],
    Component: function () {
        return (0, o.jsx)(N, { className: f.YH });
    },
});
var I = n(366010),
    v = n(17928),
    y = n(955572),
    j = n(775602),
    O = n(47671),
    R = n(97469),
    L = n(363195),
    D = n(253932),
    G = n(818348);
let P = (0, i.zD)(l.X.APPEARANCE_DARK_SIDEBAR, {
    useTitle: () => a.intl.string(a.t.EpSHAQ),
    useSearchTerms: () => [a.intl.string(a.t.Ksh3ik)],
    useValue: function () {
        let e = (0, R.qo)();
        return (0, v.bG)([L.A, j.A], () => {
            let t = L.A.theme,
                n = j.A.useForcedColors;
            return e && (0, I.q)(t) && !n;
        });
    },
    usePredicate: function () {
        let e = null != D.eh.useSetting().customUserThemeSettings;
        return (0, v.bG)([L.A, O.A], () => {
            let t = L.A.theme,
                n = O.A.gradientPreset;
            return (0, I.q)(t) && null == n && !e;
        });
    },
    useDisabled: function () {
        return (0, v.bG)([L.A, j.A], () => {
            let e = L.A.theme,
                t = j.A.useForcedColors;
            return e !== G.NJ.LIGHT || t;
        });
    },
    setValue: y.LO,
});
var M = n(331322),
    U = n(692798),
    k = n(385803);
let V = (0, i.E2)(l.X.APPEARANCE_DEFAULT_THEMES, {
        useSearchTerms: () => [a.intl.string(a.t.Ksh3ik)],
        Component: function () {
            return (0, o.jsxs)(U.Ay, {
                type: U.v0.SETTINGS,
                children: [
                    (0, o.jsx)(_.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: a.intl.string(a.t["0EzVst"]),
                    }),
                    (0, o.jsx)(M.B, {
                        direction: "horizontal",
                        wrap: !0,
                        gap: 8,
                        padding: { top: 24 },
                        children: (0, o.jsx)(U.t6, { size: k.ni.SIZE_48 }),
                    }),
                ],
            });
        },
    }),
    w = (0, i.FW)(l.X.APPEARANCE_THEME_FIELDSET, {
        useTitle: () => a.intl.string(a.t.Ksh3ik),
        isTitleHiddenVisually: !0,
        buildLayout: () => [V, P, C, r],
    });
