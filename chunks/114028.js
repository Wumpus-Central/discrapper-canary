"use strict";
n.d(t, { A: () => L });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(311907),
    u = n(990078),
    c = n(939249),
    d = n(27232),
    _ = n(111159),
    f = n(724511),
    p = n(850992),
    h = n(802019),
    E = n(407698),
    m = n(287809),
    g = n(954571),
    A = n(927578),
    I = n(807348),
    T = n(338821),
    S = n(652215),
    y = n(698279),
    N = n(788868),
    v = n(985018),
    C = n(917419);
let O = [8, 8, 8, 8];
function R(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, r.jsx)(c.D, {
        ...s,
        onClick: i,
        className: a()(C.Yl, { [C.wH]: n }),
        children: (0, r.jsx)(t, { className: C.xi, color: "currentColor" }),
    });
}
function b(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case I.Cx.FAVORITES:
            return (0, r.jsx)(R, { icon: d.G, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case I.Cx.GUILD:
            return (0, r.jsx)(
                c.D,
                {
                    ...i,
                    className: C.L1,
                    onClick: t,
                    children: (0, r.jsx)(f.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case I.Cx.DEFAULTS:
            return (0, r.jsx)(R, { icon: _.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function D(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: a } = e,
        l = (0, o.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === I.Cx.GUILD
        ? (0, r.jsx)(E.Q, { guild: t.categoryInfo.guild, children: b(t, i, s, l, a) })
        : (0, r.jsx)(u.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case I.Cx.FAVORITES:
                          return v.intl.string(v.t.k8fFjp);
                      case I.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case I.Cx.DEFAULTS:
                          return v.intl.string(v.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: b(t, i, s, l, a),
          });
}
function L(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: o = O,
            guildId: u,
            inExpressionPicker: d,
            showPinnedDefaultsShortcut: f = !1,
            defaultsSectionIndex: E = -1,
        } = e,
        I = i.useRef(null),
        R = (0, l.bG)([m.default], () => m.default.getCurrentUser()),
        b = (0, A.TW)(R, N.PremiumTypes.TIER_2),
        L = i.useCallback(
            (e) => {
                E >= 0 && (e(E), t.current?.scrollToSectionTop(E));
            },
            [E, t],
        ),
        w = i.useCallback((e) => 50 * !!f, [f]),
        M = i.useCallback(
            (e, t, n, i) => {
                let a = s && (0, T.B)(e.categoryInfo, b, u);
                return (0, r.jsx)(D, {
                    category: e,
                    categoryIndex: t,
                    onClick: () => {
                        g.default.track(S.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: S.liQ.SOUNDBOARD_POPOUT },
                            guild_id: u ?? null,
                            num_expressions: e.items.length,
                            tab: y.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n();
                    },
                    isSelected: i,
                    isNitroLocked: a,
                });
            },
            [u, s, b],
        );
    return (
        f && ((o = [...o])[2] = 50),
        (0, r.jsx)(h.A, {
            className: a()(d ? C.HZ : C.jv),
            categoryListRef: I,
            expressionsListRef: t,
            store: p.LW,
            categories: n,
            listPadding: o,
            renderCategoryListItem: M,
            rowCount: n.length,
            categoryHeight: 40,
            getScrollOffsetForIndex: w,
            children: (e) =>
                f &&
                (0, r.jsx)(c.D, {
                    "aria-label": v.intl.string(v.t.Rtvk9X),
                    className: C.xe,
                    onClick: () => L(e),
                    children: (0, r.jsx)(_.p, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
        })
    );
}
