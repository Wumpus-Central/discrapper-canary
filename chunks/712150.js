n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(317097),
    o = n(990078),
    d = n(785007),
    c = n(939249),
    u = n(714385),
    m = n(663417),
    g = n(452027),
    h = n(140735),
    x = n(130333),
    _ = n(953348),
    p = n(81461),
    A = n(997509),
    E = n(743981),
    f = n(661023),
    j = n(985018),
    N = n(644961);
function I(e) {
    let { palette: t, badge: n, isSelected: l, onClick: s } = e,
        a = (0, d.Gx)({ isSelected: l, label: (0, x.A)(t.primary, t.secondary) });
    return (0, i.jsx)(c.D, {
        ...a,
        className: r()(N.Uh, { [N.fT]: l }),
        onClick: s,
        children: (0, i.jsx)(p.J, {
            badge: n,
            width: 32,
            height: 32,
            primaryTintColor: t.primary,
            secondaryTintColor: t.secondary,
        }),
    });
}
function C(e) {
    let {
            badge: t,
            primary: n,
            secondary: l,
            isSelected: s,
            showColorPopout: o,
            setShowColorPopout: m,
            palettePopoutTargetRef: g,
            handleChange: h,
        } = e,
        x = (0, d.Gx)({
            isSelected: s,
            label: j.intl.formatToPlainString(j.t.hr4D2X, { primaryColor: n, secondaryColor: l }),
        });
    return (0, i.jsx)(_.A, {
        popoutTargetRef: g,
        showSecondaryColor: E.C9[t] >= 2,
        palette: { primary: n, secondary: l },
        onPrimaryColorChange: (e) => {
            h({ primary: (0, a.Hl)(e) });
        },
        onSecondaryColorChange: (e) => {
            h({ secondary: (0, a.Hl)(e) });
        },
        shouldShow: o,
        onRequestClose: () => m(!1),
        children: (e) =>
            (0, i.jsx)(c.D, {
                ...e,
                ...x,
                innerRef: g,
                onClick: () => {
                    m((e) => !e);
                },
                className: r()(N.Uh, { [N.fT]: s }),
                children: (0, i.jsx)(u.d, { size: "custom", width: 20, height: 20 }),
            }),
    });
}
function b(e) {
    let { badge: t, isSelected: n, onClick: l } = e,
        s = j.intl.string(f.default["4lP3/H"]),
        a = (0, d.Gx)({ isSelected: n, label: s });
    return (0, i.jsx)(o.m, {
        text: s,
        "aria-label": s,
        children: (0, i.jsxs)(c.D, {
            ...a,
            className: r()(N.Uh, N.lM, { [N.fT]: n }),
            onClick: l,
            children: [
                (0, i.jsx)(p.J, { badge: t, width: 32, height: 32 }),
                (0, i.jsx)("div", {
                    className: N.i0,
                    children: (0, i.jsx)(m.f, { size: "custom", width: 12, height: 12 }),
                }),
            ],
        }),
    });
}
let v = function (e) {
    let { className: t, guildId: n, badge: s, primaryColor: r, secondaryColor: a } = e,
        [o, c] = l.useState(!1),
        u = l.useRef(null),
        m = l.useId(),
        x = l.useId(),
        _ = null == r && null == a,
        p = l.useMemo(() => !_ && E.Ub.every((e) => e.primary !== r || e.secondary !== a), [_, r, a]),
        v = (0, d._u)({ orientation: "horizontal", isDisabled: !1, labelledBy: m });
    function S(e) {
        let t = {};
        void 0 !== e.primary && (t.badgeColorPrimary = e.primary),
            void 0 !== e.secondary && (t.badgeColorSecondary = e.secondary),
            A.A.updateGuildProfile(n, t);
    }
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(g.D, {
                label: j.intl.string(f.default.zSbMdX),
                id: m,
                children: (e) =>
                    (0, i.jsxs)("div", {
                        ...v,
                        id: e.controlId,
                        "aria-describedby": x,
                        className: N.p3,
                        children: [
                            E.Ub.map((e) =>
                                (0, i.jsx)(
                                    I,
                                    {
                                        palette: e,
                                        badge: s,
                                        isSelected: e.primary === r && e.secondary === a,
                                        onClick: () => S(e),
                                    },
                                    `${e.primary}${e.secondary}`,
                                ),
                            ),
                            (0, i.jsx)(b, {
                                badge: s,
                                isSelected: _,
                                onClick: () => {
                                    S({ primary: null, secondary: null });
                                },
                            }),
                            (0, i.jsx)(C, {
                                badge: s,
                                primary: r ?? E.Ub["0"].primary,
                                secondary: a ?? E.Ub["0"].secondary,
                                isSelected: p,
                                showColorPopout: o,
                                setShowColorPopout: c,
                                palettePopoutTargetRef: u,
                                handleChange: S,
                            }),
                        ],
                    }),
            }),
            (0, i.jsx)(h.A, { id: x, children: j.intl.string(j.t.ovbW0Z) }),
        ],
    });
};
