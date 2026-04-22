"use strict";
n.d(t, { A: () => w });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(837381),
    o = n(311907),
    c = n(990078),
    u = n(939249),
    d = n(27232),
    h = n(111159),
    m = n(724511),
    p = n(850992),
    f = n(802019),
    g = n(407698),
    _ = n(287809),
    x = n(954571),
    A = n(927578),
    C = n(807348),
    E = n(338821),
    I = n(652215),
    v = n(698279),
    y = n(788868),
    S = n(985018),
    b = n(917419);
let N = [8, 8, 8, 8];
function T(e) {
    let { icon: t, isSelected: n, onClick: l, listItemProps: s } = e;
    return (0, i.jsx)(u.D, {
        ...s,
        onClick: l,
        className: r()(b.Yl, { [b.wH]: n }),
        children: (0, i.jsx)(t, { className: b.xi, color: "currentColor" }),
    });
}
function j(e, t, n, l, s) {
    switch (e.categoryInfo.type) {
        case C.Cx.FAVORITES:
            return (0, i.jsx)(T, { icon: d.G, onClick: t, isSelected: n, listItemProps: l }, e.key);
        case C.Cx.GUILD:
            return (0, i.jsx)(
                u.D,
                {
                    ...l,
                    className: b.L1,
                    onClick: t,
                    children: (0, i.jsx)(m.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case C.Cx.DEFAULTS:
            return (0, i.jsx)(T, { icon: h.p, onClick: t, isSelected: n, listItemProps: l }, e.key);
        default:
            return null;
    }
}
function R(e) {
    let { category: t, categoryIndex: n, onClick: l, isSelected: s, isNitroLocked: r } = e,
        o = (0, a.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === C.Cx.GUILD
        ? (0, i.jsx)(g.Q, { guild: t.categoryInfo.guild, children: j(t, l, s, o, r) })
        : (0, i.jsx)(c.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case C.Cx.FAVORITES:
                          return S.intl.string(S.t.k8fFjp);
                      case C.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case C.Cx.DEFAULTS:
                          return S.intl.string(S.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: j(t, l, s, o, r),
          });
}
function w(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: a = N,
            guildId: c,
            inExpressionPicker: d,
            showPinnedDefaultsShortcut: m = !1,
            defaultsSectionIndex: g = -1,
        } = e,
        C = l.useRef(null),
        T = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
        j = (0, A.TW)(T, y.PremiumTypes.TIER_2),
        w = l.useCallback(
            (e) => {
                g >= 0 && (e(g), t.current?.scrollToSectionTop(g));
            },
            [g, t],
        ),
        L = l.useCallback((e) => 50 * !!m, [m]),
        M = l.useCallback(
            (e, t, n, l) => {
                let r = s && (0, E.B)(e.categoryInfo, j, c);
                return (0, i.jsx)(R, {
                    category: e,
                    categoryIndex: t,
                    onClick: () => {
                        x.default.track(I.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: I.liQ.SOUNDBOARD_POPOUT },
                            guild_id: c ?? null,
                            num_expressions: e.items.length,
                            tab: v.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n();
                    },
                    isSelected: l,
                    isNitroLocked: r,
                });
            },
            [c, s, j],
        );
    return (
        m && ((a = [...a])[2] = 50),
        (0, i.jsx)(f.A, {
            className: r()(d ? b.HZ : b.jv),
            categoryListRef: C,
            expressionsListRef: t,
            store: p.LW,
            categories: n,
            listPadding: a,
            renderCategoryListItem: M,
            rowCount: n.length,
            categoryHeight: 40,
            getScrollOffsetForIndex: L,
            children: (e) =>
                m &&
                (0, i.jsx)(u.D, {
                    "aria-label": S.intl.string(S.t.Rtvk9X),
                    className: b.xe,
                    onClick: () => w(e),
                    children: (0, i.jsx)(h.p, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
        })
    );
}
