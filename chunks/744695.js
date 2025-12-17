n.d(t, { Z: () => v }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(21260),
    o = n(481060),
    c = n(393903),
    d = n(984370),
    u = n(79707),
    p = n(49898),
    m = n(388032),
    h = n(656988);
function f(e) {
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
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    var { id: t, label: n, selected: r, handleTransition: i } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    (n = i[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["id", "label", "selected", "handleTransition"]);
    return (0, a.jsx)(
        d.Z.Title,
        g(f({}, s), {
            onClick: () => i(t),
            wrapperClassName: h.tabWrapper,
            className: l()(h.tab, { [h.selected]: r }),
            children: n,
        }),
    );
}
function x(e) {
    let { onTabSelect: t, tabs: n, selectedTab: i, selected: s } = e,
        c = r.useRef(null);
    return (0, a.jsx)(o.yRy, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(u.Z, {
                selectedTab: i,
                onClose: r,
                tabs: n,
                onTabSelect: t,
            });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsxs)(
                d.Z.Title,
                g(f({}, e), {
                    ref: c,
                    wrapperClassName: h.tabWrapper,
                    className: l()(h.tab, h.more, { [h.selected]: s }),
                    id: p.GlobalDiscoverySharedTabId.MORE,
                    "aria-label": m.intl.string(m.t["UKOtz+"]),
                    children: [
                        m.intl.string(m.t["UKOtz+"]),
                        n ? (0, a.jsx)(o.u04, { size: "xs" }) : (0, a.jsx)(o.CJ0, { size: "xs" }),
                    ],
                }),
            );
        },
    });
}
function v(e) {
    let { className: t, selectedTab: n, tabs: i, onTabSelect: o, onAvailableWidthChange: d } = e,
        [u, p] = r.useState(0),
        m = r.useRef(u),
        {
            lastVisibleIndex: f,
            onItemLayout: g,
            overflowItemsRef: v,
            itemWidthsRef: C,
        } = (0, s.zP)({
            items: i,
            itemGapPx: 24,
            maxLines: 1,
            containerWidth: u,
        }),
        j = r.useMemo(() => i.slice(0, f + 1), [f, i]),
        _ = r.useMemo(() => i.slice(f + 1), [f, i]),
        y = r.useRef(null),
        I = r.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || m.current === t) return;
                p(t), (m.current = t);
                let n = C.current.reduce((e, t, n) => e + t + 24 * (0 !== n));
                null == d || d(t - n);
            },
            [C, d],
        );
    (0, c.s)(y, I);
    let S = 0 !== u,
        P = _.some((e) => e.id === n);
    return (0, a.jsxs)("div", {
        className: l()(h.container, t),
        ref: y,
        children: [
            (0, a.jsxs)("div", {
                className: h.measurements,
                children: [
                    i.map((e, t) =>
                        (0, a.jsx)(
                            s.AJ,
                            {
                                index: t,
                                onItemLayout: g,
                                children: (0, a.jsx)(
                                    b,
                                    {
                                        id: e.id,
                                        label: e.label,
                                        selected: n === e.id,
                                        handleTransition: o,
                                    },
                                    e.id,
                                ),
                            },
                            e.id,
                        ),
                    ),
                    (0, a.jsx)("div", {
                        ref: v,
                        children: (0, a.jsx)(x, {
                            tabs: _,
                            onTabSelect: o,
                            selectedTab: n,
                            selected: P,
                        }),
                    }),
                ],
            }),
            S &&
                (0, a.jsxs)("div", {
                    className: h.tabs,
                    children: [
                        j.map((e) =>
                            (0, a.jsx)(
                                b,
                                {
                                    id: e.id,
                                    label: e.label,
                                    selected: n === e.id,
                                    handleTransition: o,
                                },
                                e.id,
                            ),
                        ),
                        0 !== _.length
                            ? (0, a.jsx)(x, {
                                  tabs: _,
                                  onTabSelect: o,
                                  selectedTab: n,
                                  selected: P,
                              })
                            : null,
                    ],
                }),
        ],
    });
}
