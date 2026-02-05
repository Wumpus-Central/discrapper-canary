"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(317097),
    o = n(421380),
    d = n(397927),
    c = n(130333),
    u = n(953348),
    m = n(81461),
    g = n(997509),
    x = n(743981),
    h = n(583970),
    _ = n(985018),
    A = n(175820);
function p(e) {
    let { palette: t, badge: n, isSelected: s, onClick: l } = e,
        a = (0, o.Gx)({ isSelected: s, label: (0, c.A)(t.primary, t.secondary) });
    return (0, i.jsx)(d.DUT, {
        ...a,
        className: r()(A.Uh, { [A.fT]: s }),
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
function f(e) {
    let {
            badge: t,
            primary: n,
            secondary: s,
            isSelected: l,
            showColorPopout: c,
            setShowColorPopout: m,
            palettePopoutTargetRef: g,
            handleChange: h,
        } = e,
        p = (0, o.Gx)({
            isSelected: l,
            label: _.intl.formatToPlainString(_.t.hr4D2X, { primaryColor: n, secondaryColor: s }),
        });
    return (0, i.jsx)(u.A, {
        popoutTargetRef: g,
        showSecondaryColor: x.C9[t] >= 2,
        palette: { primary: n, secondary: s },
        onPrimaryColorChange: (e) => {
            h({ primary: (0, a.Hl)(e) });
        },
        onSecondaryColorChange: (e) => {
            h({ secondary: (0, a.Hl)(e) });
        },
        shouldShow: c,
        onRequestClose: () => m(!1),
        children: (e) =>
            (0, i.jsx)(d.DUT, {
                ...e,
                ...p,
                innerRef: g,
                onClick: () => {
                    m((e) => !e);
                },
                className: r()(A.Uh, { [A.fT]: l }),
                children: (0, i.jsx)(d.dDg, { size: "custom", width: 20, height: 20 }),
            }),
    });
}
let j = function (e) {
    let { className: t, guildId: n, badge: l, primaryColor: r, secondaryColor: a } = e,
        [c, u] = s.useState(!1),
        m = s.useRef(null),
        j = s.useId(),
        N = s.useId(),
        E = s.useMemo(() => x.Ub.every((e) => e.primary !== r || e.secondary !== a), [r, a]),
        b = (0, o._u)({ orientation: "horizontal", isDisabled: !1, labelledBy: j });
    function T(e) {
        let t = {};
        void 0 !== e.primary && (t.badgeColorPrimary = e.primary),
            void 0 !== e.secondary && (t.badgeColorSecondary = e.secondary),
            g.A.updateGuildProfile(n, t);
    }
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(d.D0$, {
                label: _.intl.string(h.default.zSbMdX),
                id: j,
                children: (e) =>
                    (0, i.jsxs)("div", {
                        ...b,
                        id: e.controlId,
                        "aria-describedby": N,
                        className: A.p3,
                        children: [
                            x.Ub.map((e) =>
                                (0, i.jsx)(
                                    p,
                                    {
                                        palette: e,
                                        badge: l,
                                        isSelected: e.primary === r && e.secondary === a,
                                        onClick: () => T(e),
                                    },
                                    `${e.primary}${e.secondary}`,
                                ),
                            ),
                            (0, i.jsx)(f, {
                                badge: l,
                                primary: r,
                                secondary: a,
                                isSelected: E,
                                showColorPopout: c,
                                setShowColorPopout: u,
                                palettePopoutTargetRef: m,
                                handleChange: T,
                            }),
                        ],
                    }),
            }),
            (0, i.jsx)(d.AC4, { id: N, children: _.intl.string(_.t.ovbW0Z) }),
        ],
    });
};
