"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(317097),
    o = n(990078),
    d = n(421380),
    c = n(397927),
    u = n(130333),
    g = n(953348),
    m = n(81461),
    x = n(997509),
    h = n(743981),
    _ = n(583970),
    A = n(985018),
    p = n(175820);
function f(e) {
    let { palette: t, badge: n, isSelected: s, onClick: l } = e,
        a = (0, d.Gx)({ isSelected: s, label: (0, u.A)(t.primary, t.secondary) });
    return (0, i.jsx)(c.DUT, {
        ...a,
        className: r()(p.Uh, { [p.fT]: s }),
        onClick: l,
        children: (0, i.jsx)(m.J, {
            badge: n,
            width: 32,
            height: 32,
            primaryTintColor: t.primary,
            secondaryTintColor: t.secondary,
        }),
    });
}
function j(e) {
    let {
            badge: t,
            primary: n,
            secondary: s,
            isSelected: l,
            showColorPopout: o,
            setShowColorPopout: u,
            palettePopoutTargetRef: m,
            handleChange: x,
        } = e,
        _ = (0, d.Gx)({
            isSelected: l,
            label: A.intl.formatToPlainString(A.t.hr4D2X, { primaryColor: n, secondaryColor: s }),
        });
    return (0, i.jsx)(g.A, {
        popoutTargetRef: m,
        showSecondaryColor: h.C9[t] >= 2,
        palette: { primary: n, secondary: s },
        onPrimaryColorChange: (e) => {
            x({ primary: (0, a.Hl)(e) });
        },
        onSecondaryColorChange: (e) => {
            x({ secondary: (0, a.Hl)(e) });
        },
        shouldShow: o,
        onRequestClose: () => u(!1),
        children: (e) =>
            (0, i.jsx)(c.DUT, {
                ...e,
                ..._,
                innerRef: m,
                onClick: () => {
                    u((e) => !e);
                },
                className: r()(p.Uh, { [p.fT]: l }),
                children: (0, i.jsx)(c.dDg, { size: "custom", width: 20, height: 20 }),
            }),
    });
}
function N(e) {
    let { badge: t, isSelected: n, onClick: s } = e,
        l = A.intl.string(_.default["4lP3/H"]),
        a = (0, d.Gx)({ isSelected: n, label: l });
    return (0, i.jsx)(o.m, {
        text: l,
        "aria-label": l,
        children: (0, i.jsxs)(c.DUT, {
            ...a,
            className: r()(p.Uh, p.lM, { [p.fT]: n }),
            onClick: s,
            children: [
                (0, i.jsx)(m.J, { badge: t, width: 32, height: 32 }),
                (0, i.jsx)("div", {
                    className: p.i0,
                    children: (0, i.jsx)(c.fNY, { size: "custom", width: 12, height: 12 }),
                }),
            ],
        }),
    });
}
let E = function (e) {
    let { className: t, guildId: n, badge: l, primaryColor: r, secondaryColor: a } = e,
        [o, u] = s.useState(!1),
        g = s.useRef(null),
        m = s.useId(),
        E = s.useId(),
        b = null == r && null == a,
        T = s.useMemo(() => !b && h.Ub.every((e) => e.primary !== r || e.secondary !== a), [b, r, a]),
        C = (0, d._u)({ orientation: "horizontal", isDisabled: !1, labelledBy: m });
    function I(e) {
        let t = {};
        void 0 !== e.primary && (t.badgeColorPrimary = e.primary),
            void 0 !== e.secondary && (t.badgeColorSecondary = e.secondary),
            x.A.updateGuildProfile(n, t);
    }
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(c.D0$, {
                label: A.intl.string(_.default.zSbMdX),
                id: m,
                children: (e) =>
                    (0, i.jsxs)("div", {
                        ...C,
                        id: e.controlId,
                        "aria-describedby": E,
                        className: p.p3,
                        children: [
                            h.Ub.map((e) =>
                                (0, i.jsx)(
                                    f,
                                    {
                                        palette: e,
                                        badge: l,
                                        isSelected: e.primary === r && e.secondary === a,
                                        onClick: () => I(e),
                                    },
                                    `${e.primary}${e.secondary}`,
                                ),
                            ),
                            (0, i.jsx)(N, {
                                badge: l,
                                isSelected: b,
                                onClick: () => {
                                    I({ primary: null, secondary: null });
                                },
                            }),
                            (0, i.jsx)(j, {
                                badge: l,
                                primary: r ?? h.Ub["0"].primary,
                                secondary: a ?? h.Ub["0"].secondary,
                                isSelected: T,
                                showColorPopout: o,
                                setShowColorPopout: u,
                                palettePopoutTargetRef: g,
                                handleChange: I,
                            }),
                        ],
                    }),
            }),
            (0, i.jsx)(c.AC4, { id: E, children: A.intl.string(A.t.ovbW0Z) }),
        ],
    });
};
