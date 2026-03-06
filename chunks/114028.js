"use strict";
n.d(t, { A: () => w });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(311907),
    u = n(435371),
    c = n(397927),
    d = n(724511),
    _ = n(850992),
    f = n(802019),
    p = n(407698),
    h = n(287809),
    m = n(954571),
    E = n(927578),
    g = n(807348),
    A = n(338821),
    I = n(652215),
    T = n(698279),
    S = n(788868),
    y = n(985018),
    v = n(873080);
let N = [8, 8, 8, 8],
    C = 40,
    R = 50;
function O(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, r.jsx)(c.DUT, {
        ...s,
        onClick: i,
        className: a()(v.Yl, { [v.wH]: n }),
        children: (0, r.jsx)(t, { className: v.xi, color: "currentColor" }),
    });
}
function b(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case g.Cx.FAVORITES:
            return (0, r.jsx)(O, { icon: c.Gg5, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case g.Cx.GUILD:
            return (0, r.jsx)(
                c.DUT,
                {
                    ...i,
                    className: v.L1,
                    onClick: t,
                    children: (0, r.jsx)(d.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case g.Cx.DEFAULTS:
            return (0, r.jsx)(O, { icon: c.pVd, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function D(e) {
    switch (e.categoryInfo.type) {
        case g.Cx.FAVORITES:
            return y.intl.string(y.t.k8fFjp);
        case g.Cx.GUILD:
            return e.categoryInfo.guild.name;
        case g.Cx.DEFAULTS:
            return y.intl.string(y.t.Rtvk9X);
    }
}
function L(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: a } = e,
        l = (0, o.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === g.Cx.GUILD
        ? (0, r.jsx)(p.Q, { guild: t.categoryInfo.guild, children: b(t, i, s, l, a) })
        : (0, r.jsx)(u.m_, { text: D(t), position: "right", align: "center", children: b(t, i, s, l, a) });
}
function w(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: o = N,
            guildId: u,
            inExpressionPicker: d,
            showPinnedDefaultsShortcut: p = !1,
            defaultsSectionIndex: g = -1,
        } = e,
        O = i.useRef(null),
        b = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
        D = (0, E.TW)(b, S.PremiumTypes.TIER_2),
        w = i.useCallback(
            (e) => {
                g >= 0 && (e(g), t.current?.scrollToSectionTop(g));
            },
            [g, t],
        ),
        M = i.useCallback((e) => (p ? R : 0), [p]),
        x = i.useCallback(
            (e, t, n, i) => {
                let a = s && (0, A.B)(e.categoryInfo, D, u),
                    o = () => {
                        m.default.track(I.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: I.liQ.SOUNDBOARD_POPOUT },
                            guild_id: u ?? null,
                            num_expressions: e.items.length,
                            tab: T.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n();
                    };
                return (0, r.jsx)(L, { category: e, categoryIndex: t, onClick: o, isSelected: i, isNitroLocked: a });
            },
            [u, s, D],
        );
    return (
        p && ((o = [...o])[2] = R),
        (0, r.jsx)(f.A, {
            className: a()(d ? v.HZ : v.jv),
            categoryListRef: O,
            expressionsListRef: t,
            store: _.LW,
            categories: n,
            listPadding: o,
            renderCategoryListItem: x,
            rowCount: n.length,
            categoryHeight: C,
            getScrollOffsetForIndex: M,
            children: (e) =>
                p &&
                (0, r.jsx)(c.DUT, {
                    "aria-label": y.intl.string(y.t.Rtvk9X),
                    className: v.xe,
                    onClick: () => w(e),
                    children: (0, r.jsx)(c.pVd, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
        })
    );
}
