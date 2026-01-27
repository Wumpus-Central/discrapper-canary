n.d(t, {
    A: () => j,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(837381),
    l = n(311907),
    c = n(435371),
    u = n(397927),
    d = n(724511),
    f = n(850992),
    p = n(802019),
    _ = n(407698),
    h = n(287809),
    m = n(954571),
    g = n(927578),
    E = n(807348),
    y = n(338821),
    b = n(652215),
    O = n(698279),
    v = n(788868),
    A = n(985018),
    I = n(198606);

function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}

function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = [8, 8, 8, 8],
    R = 40,
    P = 50;

function D(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: a } = e;
    return (0, r.jsx)(
        u.DUT,
        N(T({}, a), {
            onClick: i,
            className: o()(I.Yl, {
                [I.wH]: n,
            }),
            children: (0, r.jsx)(t, {
                className: I.xi,
                color: "currentColor",
            }),
        }),
    );
}

function L(e, t, n, i, a) {
    switch (e.categoryInfo.type) {
        case E.Cx.FAVORITES:
            return (0, r.jsx)(
                D,
                {
                    icon: u.Gg5,
                    onClick: t,
                    isSelected: n,
                    listItemProps: i,
                },
                e.key,
            );
        case E.Cx.RECENTLY_HEARD:
            return (0, r.jsx)(
                D,
                {
                    icon: u.O4,
                    onClick: t,
                    isSelected: n,
                    listItemProps: i,
                },
                e.key,
            );
        case E.Cx.FREQUENTLY_USED:
            return (0, r.jsx)(
                D,
                {
                    icon: u.Uy2,
                    onClick: t,
                    isSelected: n,
                    listItemProps: i,
                },
                e.key,
            );
        case E.Cx.GUILD:
            return (0, r.jsx)(
                u.DUT,
                N(T({}, i), {
                    className: I.L1,
                    onClick: t,
                    children: (0, r.jsx)(d.A, {
                        guild: e.categoryInfo.guild,
                        isSelected: n,
                        isLocked: a,
                    }),
                }),
                e.key,
            );
        case E.Cx.DEFAULTS:
            return (0, r.jsx)(
                D,
                {
                    icon: u.pVd,
                    onClick: t,
                    isSelected: n,
                    listItemProps: i,
                },
                e.key,
            );
        default:
            return null;
    }
}

function x(e) {
    switch (e.categoryInfo.type) {
        case E.Cx.FAVORITES:
            return A.intl.string(A.t.k8fFjp);
        case E.Cx.RECENTLY_HEARD:
            return A.intl.string(A.t["8i/+SA"]);
        case E.Cx.FREQUENTLY_USED:
            return A.intl.string(A.t["+cGVV6"]);
        case E.Cx.GUILD:
            return e.categoryInfo.guild.name;
        case E.Cx.DEFAULTS:
            return A.intl.string(A.t.Rtvk9X);
    }
}

function M(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: a, isNitroLocked: o } = e,
        l = (0, s.rm)("soundboard_guild_".concat(n));
    return t.categoryInfo.type === E.Cx.GUILD
        ? (0, r.jsx)(_.Q, {
              guild: t.categoryInfo.guild,
              children: L(t, i, a, l, o),
          })
        : (0, r.jsx)(c.m_, {
              text: x(t),
              position: "right",
              align: "center",
              children: L(t, i, a, l, o),
          });
}

function j(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: a,
            listPadding: s = w,
            guildId: c,
            inExpressionPicker: d,
            showPinnedDefaultsShortcut: _ = !1,
            hasBottomBarUpsell: E = !1,
            defaultsSectionIndex: S = -1,
        } = e,
        T = i.useRef(null),
        C = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
        N = (0, g.TW)(C, v.PremiumTypes.TIER_2),
        D = i.useCallback(
            (e) => {
                if (S >= 0) {
                    var n;
                    e(S), null == (n = t.current) || n.scrollToSectionTop(S);
                }
            },
            [S, t],
        ),
        L = i.useCallback((e) => (_ || E ? P : 0), [_, E]),
        x = i.useCallback(
            (e, t, n, i) => {
                let o = a && (0, y.B)(e.categoryInfo, N, c),
                    s = () => {
                        m.default.track(b.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: {
                                page: b.liQ.SOUNDBOARD_POPOUT,
                            },
                            guild_id: null != c ? c : null,
                            num_expressions: e.items.length,
                            tab: O.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n();
                    };
                return (0, r.jsx)(M, {
                    category: e,
                    categoryIndex: t,
                    onClick: s,
                    isSelected: i,
                    isNitroLocked: o,
                });
            },
            [c, a, N],
        );
    return (
        _ && ((s = [...s])[2] = P),
        (0, r.jsx)(p.A, {
            className: o()(d ? I.HZ : I.jv, {
                [I.Gi]: E,
            }),
            categoryListRef: T,
            expressionsListRef: t,
            store: f.LW,
            categories: n,
            listPadding: s,
            renderCategoryListItem: x,
            rowCount: n.length,
            categoryHeight: R,
            getScrollOffsetForIndex: L,
            children: (e) =>
                _ &&
                (0, r.jsx)(u.DUT, {
                    "aria-label": A.intl.string(A.t.Rtvk9X),
                    className: I.xe,
                    onClick: () => D(e),
                    children: (0, r.jsx)(u.pVd, {
                        size: "custom",
                        width: 24,
                        height: 24,
                        color: "currentColor",
                    }),
                }),
        })
    );
}
