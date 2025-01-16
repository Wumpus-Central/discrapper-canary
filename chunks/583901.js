r.d(n, {
    DR: function () {
        return b;
    },
    bD: function () {
        return T;
    },
    oK: function () {
        return v;
    }
});
var i = r(627341);
var a = r(200651);
r(192379);
var s = r(120356),
    o = r.n(s),
    l = r(278074),
    u = r(442837),
    c = r(692547),
    d = r(780384),
    f = r(481060),
    _ = r(210887),
    h = r(47760),
    p = r(798728),
    m = r(981631),
    g = r(388032),
    E = r(37037);
function v() {
    return (0, a.jsx)('div', {
        className: E.selectionCircle,
        children: (0, a.jsx)(f.CircleCheckIcon, {
            size: 'md',
            color: 'currentColor',
            className: E.checkmarkCircle,
            colorClass: E.checkmark,
            secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
        })
    });
}
function I(e) {
    let { name: n, className: r, style: i, onSelect: s, isSelected: l = !1, tabIndex: u, children: c, showBadge: d, showLockedBadge: _ } = e,
        h = (0, f.useRadioItem)({
            label: n,
            isSelected: l
        });
    return (0, a.jsx)(f.Tooltip, {
        text: n,
        children: (e) =>
            (0, a.jsxs)('div', {
                className: E.themeSelectionContainer,
                children: [
                    (0, a.jsx)(f.Clickable, {
                        ...e,
                        ...h,
                        tabIndex: null != u ? u : h.tabIndex,
                        className: o()(E.themeSelection, { [E.selected]: l }, r),
                        style: i,
                        onClick: l ? m.dG4 : s,
                        children: c
                    }),
                    l && (0, a.jsx)(v, {}),
                    !l && d && (0, a.jsx)('div', { className: E.redCircle }),
                    _ &&
                        (0, a.jsx)('div', {
                            className: E.lockedBadgeContainer,
                            children: (0, a.jsx)(f.LockIcon, {
                                className: E.lockedBadge,
                                color: 'currentColor'
                            })
                        })
                ]
            })
    });
}
function T(e) {
    let { theme: n, isSelected: r, onSelect: i } = e,
        s = (0, u.e7)([_.Z], () => _.Z.systemPrefersColorScheme),
        h = (e) => ((0, d.ap)(e) ? c.Z.unsafe_rawColors.PRIMARY_600.css : c.Z.unsafe_rawColors.WHITE_500.css),
        v = (0, l.EQ)({
            theme: n,
            systemPrefersColorScheme: s
        })
            .with(
                {
                    theme: 'system',
                    systemPrefersColorScheme: m.BRd.LIGHT
                },
                () => E.lightIcon
            )
            .with({ theme: m.BRd.LIGHT }, () => E.lightIcon)
            .with({ theme: m.BRd.DARK }, () => E.darkIcon)
            .with({ theme: m.BRd.DARKER }, () => E.darkerIcon)
            .with({ theme: m.BRd.MIDNIGHT }, () => E.midnightIcon)
            .otherwise(() => E.darkIcon),
        T = (0, l.EQ)(n)
            .with(m.BRd.LIGHT, () => g.intl.string(g.t.K2sFfn))
            .with(m.BRd.DARK, () => g.intl.string(g.t.b8Cei4))
            .with(m.BRd.DARKER, () => 'Darker')
            .with(m.BRd.MIDNIGHT, () => g.intl.string(g.t.pQwSpa))
            .with('system', () => g.intl.string(g.t['7rOU6u']))
            .exhaustive(),
        b = (0, f.useRedesignIconContext)().enabled;
    return (0, a.jsx)(I, {
        onSelect: i,
        isSelected: r,
        name: T,
        className: o()(E.defaultThemeSelection, v),
        children:
            'system' === n &&
            (0, a.jsx)('div', {
                className: E.iconWrapper,
                children: b ? (0, a.jsx)(f.RefreshIcon, { color: h(s) }) : (0, a.jsx)(p.Z, { fill: h(s) })
            })
    });
}
function b(e) {
    let { preset: n, isSelected: r, disabled: i, tabIndex: s, onSelect: l, showBadge: u, showLockedBadge: c } = e,
        { colors: f, angle: _, theme: p } = n,
        m = (0, h.VK)({
            colors: f,
            angle: _
        });
    return (0, a.jsx)(I, {
        onSelect: i ? void 0 : l,
        isSelected: r,
        name: n.getName(),
        className: o()([i ? E.disabled : null, (0, d.wj)(p) ? E.darkOverlay : E.lightOverlay]),
        style: { background: 'var(--bg-overlay), '.concat(m) },
        tabIndex: s,
        showBadge: u,
        showLockedBadge: c
    });
}
