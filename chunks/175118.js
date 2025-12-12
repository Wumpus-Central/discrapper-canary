n.d(t, { Z: () => h }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(21260),
    o = n(481060),
    c = n(393903),
    d = n(79707),
    u = n(388032),
    p = n(1855);
function m(e) {
    let { onTabSelect: t, tabs: n, selectedTab: i } = e,
        s = r.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === i;
                }),
            [i, n],
        ),
        [c, m] = r.useState(!1),
        h = (function (e) {
            let { selected: t, isHovered: n } = e;
            return n ? "text-strong" : t ? "text-brand" : "text-default";
        })({
            selected: s,
            isHovered: c,
        }),
        f = (function (e) {
            let { selected: t, isHovered: n } = e;
            return n ? o.TVs.colors.TEXT_STRONG : t ? o.TVs.colors.TEXT_BRAND : o.TVs.colors.INTERACTIVE_TEXT_DEFAULT;
        })({
            selected: s,
            isHovered: c,
        }),
        g = r.useCallback(() => m(!0), []),
        b = r.useCallback(() => m(!1), []),
        x = r.useRef(null);
    return (0, a.jsx)(o.yRy, {
        targetElementRef: x,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(d.Z, {
                selectedTab: i,
                onClose: r,
                tabs: n,
                onTabSelect: t,
            });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            var n, r;
            let { isShown: i } = t;
            return (0, a.jsx)(
                o.njP.Item,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            a.forEach(function (t) {
                                var a;
                                (a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = a);
                            });
                    }
                    return e;
                })({}, e)),
                (r = r =
                    {
                        id: "more",
                        look: "brand",
                        selectedItem: s ? "more" : void 0,
                        className: l()(p.tab, { [p.selected]: !1 }),
                        clickableRef: (e) => {
                            null != e && null != e.ref && (x.current = e.ref);
                        },
                        "aria-label": u.intl.string(u.t["UKOtz+"]),
                        children: (0, a.jsxs)("div", {
                            className: p.more,
                            onMouseEnter: g,
                            onMouseLeave: b,
                            children: [
                                (0, a.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    color: h,
                                    children: u.intl.string(u.t["UKOtz+"]),
                                }),
                                i
                                    ? (0, a.jsx)(o.u04, {
                                          size: "xs",
                                          color: f,
                                      })
                                    : (0, a.jsx)(o.CJ0, {
                                          size: "xs",
                                          color: f,
                                      }),
                            ],
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                n),
            );
        },
    });
}
function h(e) {
    let { className: t, selectedTab: n, tabs: i, onTabSelect: d, onAvailableWidthChange: u } = e,
        [h, f] = r.useState(0),
        g = r.useRef(h),
        {
            lastVisibleIndex: b,
            onItemLayout: x,
            overflowItemsRef: v,
            itemWidthsRef: C,
        } = (0, s.zP)({
            items: i,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: h,
        }),
        j = r.useMemo(() => i.slice(0, b + 1), [b, i]),
        _ = r.useMemo(() => i.slice(b + 1), [b, i]),
        y = r.useRef(null),
        I = r.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || g.current === t) return;
                f(t), (g.current = t);
                let n = C.current.reduce((e, t, n) => e + t + 20 * (0 !== n));
                null == u || u(t - n);
            },
            [C, u],
        );
    (0, c.s)(y, I);
    let S = 0 !== h;
    return (0, a.jsxs)("div", {
        className: l()(p.container, t),
        ref: y,
        children: [
            (0, a.jsxs)("div", {
                className: p.measurements,
                children: [
                    i.map((e, t) =>
                        (0, a.jsx)(
                            s.AJ,
                            {
                                index: t,
                                onItemLayout: x,
                                children: (0, a.jsx)(o.njP.Item, {
                                    id: e.id,
                                    "aria-label": e.label,
                                    className: p.tab,
                                    children: (0, a.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        children: e.label,
                                    }),
                                }),
                            },
                            e.id,
                        ),
                    ),
                    (0, a.jsx)("div", {
                        ref: v,
                        children: (0, a.jsx)(m, {
                            tabs: _,
                            onTabSelect: d,
                            selectedTab: n,
                        }),
                    }),
                ],
            }),
            S &&
                (0, a.jsxs)(o.njP, {
                    type: "top",
                    look: "brand",
                    selectedItem: n,
                    onItemSelect: d,
                    className: p.tabs,
                    children: [
                        j.map((e) =>
                            (0, a.jsx)(
                                o.njP.Item,
                                {
                                    id: e.id,
                                    look: "brand",
                                    "aria-label": e.label,
                                    className: p.tab,
                                    children: e.label,
                                },
                                e.id,
                            ),
                        ),
                        0 !== _.length
                            ? (0, a.jsx)(m, {
                                  tabs: _,
                                  onTabSelect: d,
                                  selectedTab: n,
                              })
                            : null,
                    ],
                }),
        ],
    });
}
