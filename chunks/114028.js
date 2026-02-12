"use strict";
n.d(t, { A: () => x });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(837381),
    l = n(311907),
    u = n(435371),
    c = n(397927),
    d = n(724511),
    _ = n(850992),
    f = n(802019),
    h = n(407698),
    p = n(287809),
    g = n(954571),
    E = n(927578),
    A = n(807348),
    I = n(338821),
    T = n(652215),
    y = n(698279),
    S = n(788868),
    v = n(985018),
    C = n(873080);
let b = [8, 8, 8, 8],
    N = 40,
    R = 50;
function O(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: a } = e;
    return (0, r.jsx)(c.DUT, {
        ...a,
        onClick: i,
        className: s()(C.Yl, { [C.wH]: n }),
        children: (0, r.jsx)(t, { className: C.xi, color: "currentColor" }),
    });
}
function D(e, t, n, i, a) {
    switch (e.categoryInfo.type) {
        case A.Cx.FAVORITES:
            return (0, r.jsx)(O, { icon: c.Gg5, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case A.Cx.GUILD:
            return (0, r.jsx)(
                c.DUT,
                {
                    ...i,
                    className: C.L1,
                    onClick: t,
                    children: (0, r.jsx)(d.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: a }),
                },
                e.key,
            );
        case A.Cx.DEFAULTS:
            return (0, r.jsx)(O, { icon: c.pVd, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function L(e) {
    switch (e.categoryInfo.type) {
        case A.Cx.FAVORITES:
            return v.intl.string(v.t.k8fFjp);
        case A.Cx.GUILD:
            return e.categoryInfo.guild.name;
        case A.Cx.DEFAULTS:
            return v.intl.string(v.t.Rtvk9X);
    }
}
function w(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: a, isNitroLocked: s } = e,
        l = (0, o.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === A.Cx.GUILD
        ? (0, r.jsx)(h.Q, { guild: t.categoryInfo.guild, children: D(t, i, a, l, s) })
        : (0, r.jsx)(u.m_, { text: L(t), position: "right", align: "center", children: D(t, i, a, l, s) });
}
function x(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: a,
            listPadding: o = b,
            guildId: u,
            inExpressionPicker: d,
            showPinnedDefaultsShortcut: h = !1,
            hasBottomBarUpsell: A = !1,
            defaultsSectionIndex: O = -1,
        } = e,
        D = i.useRef(null),
        L = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        x = (0, E.TW)(L, S.PremiumTypes.TIER_2),
        P = i.useCallback(
            (e) => {
                O >= 0 && (e(O), t.current?.scrollToSectionTop(O));
            },
            [O, t],
        ),
        M = i.useCallback((e) => (h || A ? R : 0), [h, A]),
        k = i.useCallback(
            (e, t, n, i) => {
                let s = a && (0, I.B)(e.categoryInfo, x, u),
                    o = () => {
                        g.default.track(T.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: T.liQ.SOUNDBOARD_POPOUT },
                            guild_id: u ?? null,
                            num_expressions: e.items.length,
                            tab: y.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n();
                    };
                return (0, r.jsx)(w, { category: e, categoryIndex: t, onClick: o, isSelected: i, isNitroLocked: s });
            },
            [u, a, x],
        );
    return (
        h && ((o = [...o])[2] = R),
        (0, r.jsx)(f.A, {
            className: s()(d ? C.HZ : C.jv, { [C.Gi]: A }),
            categoryListRef: D,
            expressionsListRef: t,
            store: _.LW,
            categories: n,
            listPadding: o,
            renderCategoryListItem: k,
            rowCount: n.length,
            categoryHeight: N,
            getScrollOffsetForIndex: M,
            children: (e) =>
                h &&
                (0, r.jsx)(c.DUT, {
                    "aria-label": v.intl.string(v.t.Rtvk9X),
                    className: C.xe,
                    onClick: () => P(e),
                    children: (0, r.jsx)(c.pVd, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
        })
    );
}
