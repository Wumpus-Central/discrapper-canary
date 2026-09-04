n.d(t, { A: () => E });
var o = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(3666),
    c = n(508770),
    u = n(939249),
    i = n(834730),
    d = n(477782),
    p = n(847374),
    m = n(922016),
    b = n(980707),
    f = n(955572),
    y = n(775602),
    h = n(421773),
    x = n(361779);
function $(e) {
    return !e.defaultPrevented && 0 === e.button && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}
function k(e) {
    let { navId: t, option: n, selectedKey: r } = e;
    return "page" === n.type
        ? (0, o.jsx)(v, { option: n, selectedKey: r })
        : (0, o.jsx)(C, { navId: t, option: n, selectedKey: r });
}
function v(e) {
    var t;
    let { option: n, selectedKey: a } = e,
        l = n.key === a,
        d = r.useCallback(
            (e) => {
                $(e) && (e.preventDefault(), n.onClick(e));
            },
            [n],
        );
    return (0, o.jsx)("li", {
        className: x.I,
        children: (0, o.jsxs)(u.D, {
            tag: "a",
            role: "link",
            href: n.route,
            onClick: d,
            "aria-current": l ? "page" : void 0,
            className: s()(x.ie, x.LA, { [x.wH]: l, [x.C3]: null != n.badge }),
            children: [
                (0, o.jsx)(i.E, { variant: "text-md/medium", color: "none", children: n.text }),
                null == (t = n.badge)
                    ? null
                    : "object" == typeof t && "type" in t
                      ? (0, o.jsx)(c.E, { ...t })
                      : (0, o.jsx)(c.E, { type: t }),
            ],
        }),
    });
}
function C(e) {
    let { navId: t, option: n, selectedKey: a } = e,
        { route: l } = n,
        c = `${t}-${n.key}`,
        k = (function e(t, n) {
            return t.key === n || ("menu" === t.type && t.options.some((t) => e(t, n)));
        })(n, a),
        v = r.useRef(null),
        C = r.useRef(null),
        g = r.useRef(!1),
        { isHovered: j, setIsHovered: A, onMouseEnter: I, onMouseLeave: E, cancelTimers: L } = (0, h.A)(100, 100),
        w = r.useCallback(() => {
            (g.current = y.Ay.keyboardModeEnabled), I();
        }, [I]),
        D = r.useCallback(() => {
            L(), A(!0), (g.current = y.Ay.keyboardModeEnabled);
        }, [L, A]),
        M = r.useCallback(
            (e) => {
                L(),
                    g.current && !y.Ay.keyboardModeEnabled && (0, f.uS)(),
                    A(!1),
                    e && requestAnimationFrame(() => (null != C.current ? C.current.focus() : v.current?.focus()));
            },
            [L, A],
        ),
        N = r.useCallback(() => {
            j ? M(!1) : D();
        }, [j, D, M]),
        S = r.useCallback(
            (e) => {
                M(!1), null != n.route && $(e) && (e.preventDefault(), n.onClick(e));
            },
            [n, M],
        ),
        K = r.useCallback(
            (e) => {
                "ArrowDown" === e.key &&
                    (e.preventDefault(), e.stopPropagation(), j ? (M(!1), requestAnimationFrame(D)) : D());
            },
            [j, D, M],
        ),
        R = (0, o.jsx)(i.E, { variant: "text-md/medium", color: "none", children: n.text }),
        P = (0, o.jsx)(p.a, { size: "sm", color: "currentColor", className: s()(x.OW, { [x.g3]: j }) });
    return (0, o.jsx)("li", {
        className: x.I,
        children: (0, o.jsx)(m.Y, {
            targetElementRef: v,
            shouldShow: j,
            position: "bottom",
            align: "left",
            spacing: 4,
            onRequestOpen: D,
            onRequestClose: () => M(!0),
            animation: m.Y.Animation.NONE,
            renderPopout: () =>
                (0, o.jsx)("div", {
                    onMouseEnter: I,
                    onMouseLeave: E,
                    children: (0, o.jsx)(b.W, {
                        navId: c,
                        "aria-label": n.expandLabel,
                        onClose: () => M(!0),
                        onSelect: void 0,
                        children: (function e(t) {
                            return t.map((t) =>
                                "page" === t.type
                                    ? (0, o.jsx)(
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
                                    : (0, o.jsx)(
                                          d.Dr,
                                          { id: t.key, label: t.text, action: t.onClick, children: e(t.options) },
                                          t.key,
                                      ),
                            );
                        })(n.options),
                    }),
                }),
            children: (e) =>
                null != l
                    ? (0, o.jsxs)("span", {
                          ref: v,
                          className: s()(x.ie, x.iL, { [x.wH]: k }),
                          children: [
                              (0, o.jsx)(u.D, {
                                  tag: "a",
                                  role: "link",
                                  href: l,
                                  onClick: S,
                                  onMouseEnter: w,
                                  onMouseLeave: E,
                                  "aria-current": n.key === a ? "page" : void 0,
                                  focusProps: { offset: { top: -2, bottom: -2 } },
                                  className: s()(x.LA, x.tH),
                                  children: R,
                              }),
                              (0, o.jsx)(u.D, {
                                  ...e,
                                  innerRef: C,
                                  role: "button",
                                  "aria-haspopup": "true",
                                  "aria-label": n.expandLabel,
                                  onClick: N,
                                  onKeyDown: K,
                                  onMouseEnter: w,
                                  onMouseLeave: E,
                                  focusProps: { offset: { top: -2, bottom: -2 } },
                                  className: s()(x.LA, x.nE),
                                  children: P,
                              }),
                          ],
                      })
                    : (0, o.jsxs)(u.D, {
                          ...e,
                          innerRef: v,
                          role: "button",
                          "aria-haspopup": "true",
                          onClick: N,
                          onKeyDown: K,
                          onMouseEnter: w,
                          onMouseLeave: E,
                          className: s()(x.ie, x.LA, { [x.wH]: k }),
                          children: [R, P],
                      }),
        }),
    });
}
var g = n(765671);
let j = 'a[href], [role="button"]';
function A(e, t) {
    let n = Array.from(e.querySelectorAll(j)),
        o = n.indexOf(document.activeElement);
    -1 !== o && n[o + t]?.focus();
}
function I(e) {
    switch (e.key) {
        case "ArrowRight":
            e.preventDefault(), A(e.currentTarget, 1);
            return;
        case "ArrowLeft":
            e.preventDefault(), A(e.currentTarget, -1);
            return;
        case "Home":
            e.preventDefault(), e.currentTarget.querySelector(j)?.focus();
            return;
        case "End": {
            e.preventDefault();
            let t = e.currentTarget.querySelectorAll(j);
            t[t.length - 1]?.focus();
        }
    }
}
function E(e) {
    let { options: t, selectedKey: n, overflowLabel: a, overflowExpandLabel: c, className: u, ...i } = e,
        d = r.useId(),
        p = `collectibles-shop-navigation-menu-${d}`,
        {
            containerRef: m,
            isMeasured: b,
            visibleOptions: f,
            onItemLayout: y,
            overflowItemsRef: h,
        } = (function (e, t, n, o) {
            let { ref: a, width: s } = (0, g.Ay)(),
                {
                    lastVisibleIndex: c,
                    onItemLayout: u,
                    overflowItemsRef: i,
                } = (0, l.Wv)({ items: e, itemGapPx: 32, maxLines: 1, containerWidth: s ?? 0 });
            return {
                containerRef: a,
                isMeasured: null != s,
                visibleOptions: r.useMemo(() => {
                    if (c >= e.length - 1) return e;
                    let r = { type: "menu", key: t, text: n, expandLabel: o, options: e.slice(c + 1) };
                    return [...e.slice(0, c + 1), r];
                }, [e, c, t, n, o]),
                onItemLayout: u,
                overflowItemsRef: i,
            };
        })(t, `${p}-more`, a, c);
    return (0, o.jsxs)("nav", {
        "aria-label": i["aria-label"],
        className: s()(x.C$, u),
        ref: m,
        children: [
            (0, o.jsx)(L, {
                navId: p,
                options: t,
                overflowLabel: a,
                overflowExpandLabel: c,
                onItemLayout: y,
                overflowItemsRef: h,
            }),
            b &&
                (0, o.jsx)("ul", {
                    onKeyDown: I,
                    className: x.P_,
                    children: f.map((e) => (0, o.jsx)(k, { navId: p, option: e, selectedKey: n }, e.key)),
                }),
        ],
    });
}
function L(e) {
    let { options: t, navId: n, overflowLabel: r, overflowExpandLabel: a, onItemLayout: s, overflowItemsRef: c } = e,
        u = `${n}-measure`;
    return (0, o.jsxs)("div", {
        "aria-hidden": !0,
        className: x.Zb,
        children: [
            t.map((e, t) =>
                (0, o.jsx)(
                    l.Ae,
                    { index: t, onItemLayout: s, children: (0, o.jsx)(k, { navId: u, option: e }) },
                    e.key,
                ),
            ),
            (0, o.jsx)("div", {
                ref: c,
                children: (0, o.jsx)(k, {
                    navId: u,
                    option: { type: "menu", key: "more-measure", text: r, expandLabel: a, options: [] },
                }),
            }),
        ],
    });
}
