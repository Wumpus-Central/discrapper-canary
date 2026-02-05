"use strict";
n.d(t, { A: () => w });
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
    p = n(407698),
    h = n(287809),
    m = n(954571),
    g = n(927578),
    E = n(807348),
    A = n(338821),
    I = n(652215),
    T = n(698279),
    y = n(788868),
    S = n(985018),
    v = n(198606);
let C = [8, 8, 8, 8],
    b = 40,
    N = 50;
function R(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: a } = e;
    return (0, r.jsx)(c.DUT, {
        ...a,
        onClick: i,
        className: s()(v.Yl, { [v.wH]: n }),
        children: (0, r.jsx)(t, { className: v.xi, color: "currentColor" }),
    });
}
function O(e, t, n, i, a) {
    switch (e.categoryInfo.type) {
        case E.Cx.FAVORITES:
            return (0, r.jsx)(R, { icon: c.Gg5, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case E.Cx.RECENTLY_HEARD:
            return (0, r.jsx)(R, { icon: c.O4, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case E.Cx.FREQUENTLY_USED:
            return (0, r.jsx)(R, { icon: c.Uy2, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case E.Cx.GUILD:
            return (0, r.jsx)(
                c.DUT,
                {
                    ...i,
                    className: v.L1,
                    onClick: t,
                    children: (0, r.jsx)(d.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: a }),
                },
                e.key,
            );
        case E.Cx.DEFAULTS:
            return (0, r.jsx)(R, { icon: c.pVd, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function D(e) {
    switch (e.categoryInfo.type) {
        case E.Cx.FAVORITES:
            return S.intl.string(S.t.k8fFjp);
        case E.Cx.RECENTLY_HEARD:
            return S.intl.string(S.t["8i/+SA"]);
        case E.Cx.FREQUENTLY_USED:
            return S.intl.string(S.t["+cGVV6"]);
        case E.Cx.GUILD:
            return e.categoryInfo.guild.name;
        case E.Cx.DEFAULTS:
            return S.intl.string(S.t.Rtvk9X);
    }
}
function L(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: a, isNitroLocked: s } = e,
        l = (0, o.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === E.Cx.GUILD
        ? (0, r.jsx)(p.Q, { guild: t.categoryInfo.guild, children: O(t, i, a, l, s) })
        : (0, r.jsx)(u.m_, { text: D(t), position: "right", align: "center", children: O(t, i, a, l, s) });
}
function w(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: a,
            listPadding: o = C,
            guildId: u,
            inExpressionPicker: d,
            showPinnedDefaultsShortcut: p = !1,
            hasBottomBarUpsell: E = !1,
            defaultsSectionIndex: R = -1,
        } = e,
        O = i.useRef(null),
        D = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
        w = (0, g.TW)(D, y.PremiumTypes.TIER_2),
        x = i.useCallback(
            (e) => {
                R >= 0 && (e(R), t.current?.scrollToSectionTop(R));
            },
            [R, t],
        ),
        P = i.useCallback((e) => (p || E ? N : 0), [p, E]),
        M = i.useCallback(
            (e, t, n, i) => {
                let s = a && (0, A.B)(e.categoryInfo, w, u),
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
                return (0, r.jsx)(L, { category: e, categoryIndex: t, onClick: o, isSelected: i, isNitroLocked: s });
            },
            [u, a, w],
        );
    return (
        p && ((o = [...o])[2] = N),
        (0, r.jsx)(f.A, {
            className: s()(d ? v.HZ : v.jv, { [v.Gi]: E }),
            categoryListRef: O,
            expressionsListRef: t,
            store: _.LW,
            categories: n,
            listPadding: o,
            renderCategoryListItem: M,
            rowCount: n.length,
            categoryHeight: b,
            getScrollOffsetForIndex: P,
            children: (e) =>
                p &&
                (0, r.jsx)(c.DUT, {
                    "aria-label": S.intl.string(S.t.Rtvk9X),
                    className: v.xe,
                    onClick: () => x(e),
                    children: (0, r.jsx)(c.pVd, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
        })
    );
}
