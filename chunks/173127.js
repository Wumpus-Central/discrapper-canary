n.d(t, { A: () => k });
var r = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(3666),
    i = n(62010),
    u = n(939249),
    c = n(834730),
    d = n(477782),
    p = n(847374),
    m = n(265872),
    g = n(980707),
    h = n(955572),
    E = n(775602),
    f = n(421773),
    C = n(361779);
function v(e) {
    return !e.defaultPrevented && 0 === e.button && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}
function _(e) {
    let { navId: t, option: n, selectedKey: l } = e;
    return "page" === n.type
        ? (0, r.jsx)(x, { option: n, selectedKey: l })
        : (0, r.jsx)(y, { navId: t, option: n, selectedKey: l });
}
function x(e) {
    var t;
    let { option: n, selectedKey: s } = e,
        o = n.key === s,
        d = l.useCallback(
            (e) => {
                v(e) && (e.preventDefault(), n.onClick(e));
            },
            [n],
        ),
        p = n.icon;
    return (0, r.jsx)("li", {
        className: C.I,
        children: (0, r.jsxs)(u.D, {
            tag: "a",
            role: "link",
            href: n.route,
            onClick: d,
            "aria-current": o ? "page" : void 0,
            className: a()(C.ie, C.LA, { [C.wH]: o, [C.C3]: null != n.badge }),
            children: [
                null != p && (0, r.jsx)(p, { size: "sm", color: "currentColor" }),
                (0, r.jsx)(c.E, { variant: "text-md/medium", color: "none", children: n.text }),
                null == (t = n.badge)
                    ? null
                    : "object" == typeof t && "type" in t
                      ? (0, r.jsx)(i.E, { ...t })
                      : (0, r.jsx)(i.E, { type: t }),
            ],
        }),
    });
}
function y(e) {
    let { navId: t, option: n, selectedKey: s } = e,
        { route: o } = n,
        i = `${t}-${n.key}`,
        _ = (function e(t, n) {
            return t.key === n || ("menu" === t.type && t.options.some((t) => e(t, n)));
        })(n, s),
        x = l.useRef(null),
        y = l.useRef(null),
        A = l.useRef(!1),
        { isHovered: I, setIsHovered: L, onMouseEnter: S, onMouseLeave: k, cancelTimers: b } = (0, f.A)(100, 100),
        O = l.useCallback(() => {
            ((A.current = E.Ay.keyboardModeEnabled), S());
        }, [S]),
        j = l.useCallback(() => {
            (b(), L(!0), (A.current = E.Ay.keyboardModeEnabled));
        }, [b, L]),
        N = l.useCallback(
            (e) => {
                (b(),
                    A.current && !E.Ay.keyboardModeEnabled && (0, h.uS)(),
                    L(!1),
                    e && requestAnimationFrame(() => (null != y.current ? y.current.focus() : x.current?.focus())));
            },
            [b, L],
        ),
        w = l.useCallback(() => {
            I ? N(!1) : j();
        }, [I, j, N]),
        T = l.useCallback(
            (e) => {
                (N(!1), null != n.route && v(e) && (e.preventDefault(), n.onClick(e)));
            },
            [n, N],
        ),
        R = l.useCallback(
            (e) => {
                "ArrowDown" === e.key &&
                    (e.preventDefault(), e.stopPropagation(), I ? (N(!1), requestAnimationFrame(j)) : j());
            },
            [I, j, N],
        ),
        B = (0, r.jsx)(c.E, { variant: "text-md/medium", color: "none", children: n.text }),
        P = (0, r.jsx)(p.a, { size: "sm", color: "currentColor", className: a()(C.OW, { [C.g3]: I }) });
    return (0, r.jsx)("li", {
        className: C.I,
        children: (0, r.jsx)(m.Y, {
            targetElementRef: x,
            shouldShow: I,
            position: "bottom",
            align: "left",
            spacing: 4,
            onRequestOpen: j,
            onRequestClose: () => N(!0),
            animation: m.Y.Animation.NONE,
            renderPopout: () =>
                (0, r.jsx)("div", {
                    onMouseEnter: S,
                    onMouseLeave: k,
                    children: (0, r.jsx)(g.W, {
                        navId: i,
                        "aria-label": n.expandLabel,
                        onClose: () => N(!0),
                        onSelect: void 0,
                        children: (function e(t) {
                            return t.map((t) =>
                                "page" === t.type
                                    ? (0, r.jsx)(
                                          d.Dr,
                                          {
                                              id: t.key,
                                              label: t.text,
                                              leadingAccessory:
                                                  null != t.iconSrc ? { type: "image", src: t.iconSrc } : void 0,
                                              badge: t.badge,
                                              trailingIndicator: t.trailingIndicator,
                                              action: t.onClick,
                                          },
                                          t.key,
                                      )
                                    : (0, r.jsx)(
                                          d.Dr,
                                          { id: t.key, label: t.text, action: t.onClick, children: e(t.options) },
                                          t.key,
                                      ),
                            );
                        })(n.options),
                    }),
                }),
            children: (e) =>
                null != o
                    ? (0, r.jsxs)("span", {
                          ref: x,
                          className: a()(C.ie, C.iL, { [C.wH]: _ }),
                          children: [
                              (0, r.jsx)(u.D, {
                                  tag: "a",
                                  role: "link",
                                  href: o,
                                  onClick: T,
                                  onMouseEnter: O,
                                  onMouseLeave: k,
                                  "aria-current": n.key === s ? "page" : void 0,
                                  focusProps: { offset: { top: -2, bottom: -2 } },
                                  className: a()(C.LA, C.tH),
                                  children: B,
                              }),
                              (0, r.jsx)(u.D, {
                                  ...e,
                                  innerRef: y,
                                  role: "button",
                                  "aria-haspopup": "true",
                                  "aria-label": n.expandLabel,
                                  onClick: w,
                                  onKeyDown: R,
                                  onMouseEnter: O,
                                  onMouseLeave: k,
                                  focusProps: { offset: { top: -2, bottom: -2 } },
                                  className: a()(C.LA, C.nE),
                                  children: P,
                              }),
                          ],
                      })
                    : (0, r.jsxs)(u.D, {
                          ...e,
                          innerRef: x,
                          role: "button",
                          "aria-haspopup": "true",
                          onClick: w,
                          onKeyDown: R,
                          onMouseEnter: O,
                          onMouseLeave: k,
                          className: a()(C.ie, C.LA, { [C.wH]: _ }),
                          children: [B, P],
                      }),
        }),
    });
}
var A = n(765671);
let I = 'a[href], [role="button"]';
function L(e, t) {
    let n = Array.from(e.querySelectorAll(I)),
        r = n.indexOf(document.activeElement);
    -1 !== r && n[r + t]?.focus();
}
function S(e) {
    switch (e.key) {
        case "ArrowRight":
            (e.preventDefault(), L(e.currentTarget, 1));
            return;
        case "ArrowLeft":
            (e.preventDefault(), L(e.currentTarget, -1));
            return;
        case "Home":
            (e.preventDefault(), e.currentTarget.querySelector(I)?.focus());
            return;
        case "End": {
            e.preventDefault();
            let t = e.currentTarget.querySelectorAll(I);
            t[t.length - 1]?.focus();
        }
    }
}
function k(e) {
    let { options: t, selectedKey: n, overflowLabel: s, overflowExpandLabel: i, className: u, ...c } = e,
        d = l.useId(),
        p = `collectibles-shop-navigation-menu-${d}`,
        {
            containerRef: m,
            isMeasured: g,
            visibleOptions: h,
            onItemLayout: E,
            overflowItemsRef: f,
        } = (function (e, t, n, r) {
            let { ref: s, width: a } = (0, A.Ay)(),
                {
                    lastVisibleIndex: i,
                    onItemLayout: u,
                    overflowItemsRef: c,
                } = (0, o.Wv)({ items: e, itemGapPx: 32, maxLines: 1, containerWidth: a ?? 0 });
            return {
                containerRef: s,
                isMeasured: null != a,
                visibleOptions: l.useMemo(() => {
                    if (i >= e.length - 1) return e;
                    let l = { type: "menu", key: t, text: n, expandLabel: r, options: e.slice(i + 1) };
                    return [...e.slice(0, i + 1), l];
                }, [e, i, t, n, r]),
                onItemLayout: u,
                overflowItemsRef: c,
            };
        })(t, `${p}-more`, s, i);
    return (0, r.jsxs)("nav", {
        "aria-label": c["aria-label"],
        className: a()(C.C$, u),
        ref: m,
        children: [
            (0, r.jsx)(b, {
                navId: p,
                options: t,
                overflowLabel: s,
                overflowExpandLabel: i,
                onItemLayout: E,
                overflowItemsRef: f,
            }),
            g &&
                (0, r.jsx)("ul", {
                    onKeyDown: S,
                    className: C.P_,
                    children: h.map((e) => (0, r.jsx)(_, { navId: p, option: e, selectedKey: n }, e.key)),
                }),
        ],
    });
}
function b(e) {
    let { options: t, navId: n, overflowLabel: l, overflowExpandLabel: s, onItemLayout: a, overflowItemsRef: i } = e,
        u = `${n}-measure`;
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: C.Zb,
        children: [
            t.map((e, t) =>
                (0, r.jsx)(
                    o.Ae,
                    { index: t, onItemLayout: a, children: (0, r.jsx)(_, { navId: u, option: e }) },
                    e.key,
                ),
            ),
            (0, r.jsx)("div", {
                ref: i,
                children: (0, r.jsx)(_, {
                    navId: u,
                    option: { type: "menu", key: "more-measure", text: l, expandLabel: s, options: [] },
                }),
            }),
        ],
    });
}
