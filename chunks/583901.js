r.d(n, {
    DR: function () {
        return I;
    },
    bD: function () {
        return b;
    },
    oK: function () {
        return v;
    }
});
var i = r(627341);
var a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(278074),
    u = r(442837),
    c = r(692547),
    d = r(780384),
    f = r(481060),
    p = r(210887),
    h = r(47760),
    _ = r(798728),
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
function y(e) {
    let { name: n, className: r, style: i, onSelect: o, isSelected: l = !1, tabIndex: u, children: c, showBadge: d, showLockedBadge: p } = e,
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
                        className: s()(E.themeSelection, { [E.selected]: l }, r),
                        style: i,
                        onClick: l ? m.dG4 : o,
                        children: c
                    }),
                    l && (0, a.jsx)(v, {}),
                    !l && d && (0, a.jsx)('div', { className: E.redCircle }),
                    p &&
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
function b(e) {
    let { theme: n, isSelected: r, onSelect: i } = e,
        o = (0, u.e7)([p.Z], () => p.Z.systemPrefersColorScheme),
        h = (e) => ((0, d.ap)(e) ? c.Z.unsafe_rawColors.PRIMARY_600.css : c.Z.unsafe_rawColors.WHITE_500.css),
        v = (0, l.EQ)({
            theme: n,
            systemPrefersColorScheme: o
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
        b = (0, l.EQ)(n)
            .with(m.BRd.LIGHT, () => g.intl.string(g.t.K2sFfn))
            .with(m.BRd.DARK, () => g.intl.string(g.t.b8Cei4))
            .with(m.BRd.DARKER, () => 'Darker')
            .with(m.BRd.MIDNIGHT, () => g.intl.string(g.t.pQwSpa))
            .with('system', () => g.intl.string(g.t['7rOU6u']))
            .exhaustive(),
        I = (0, f.useRedesignIconContext)().enabled;
    return (0, a.jsx)(y, {
        onSelect: i,
        isSelected: r,
        name: b,
        className: s()(E.defaultThemeSelection, v),
        children:
            'system' === n &&
            (0, a.jsx)('div', {
                className: E.iconWrapper,
                children: I ? (0, a.jsx)(f.RefreshIcon, { color: h(o) }) : (0, a.jsx)(_.Z, { fill: h(o) })
            })
    });
}
function I(e) {
    let { preset: n, isSelected: r, disabled: i, tabIndex: o, onSelect: l, showBadge: u, showLockedBadge: c } = e,
        { colors: f, angle: p, theme: _ } = n,
        m = (0, h.VK)({
            colors: f,
            angle: p
        });
    return (0, a.jsx)(y, {
        onSelect: i ? void 0 : l,
        isSelected: r,
        name: n.getName(),
        className: s()([i ? E.disabled : null, (0, d.wj)(_) ? E.darkOverlay : E.lightOverlay]),
        style: { background: 'var(--bg-overlay), '.concat(m) },
        tabIndex: o,
        showBadge: u,
        showLockedBadge: c
    });
}
