s.d(l, { A: () => C, q: () => L });
var n,
    t = s(627968),
    i = s(64700),
    a = s(503698),
    r = s.n(a),
    o = s(837381),
    c = s(17928),
    d = s(990078),
    u = s(789645),
    m = s(834730),
    x = s(939249),
    b = s(442433),
    j = s(565645),
    p = s(775602),
    h = s(159273),
    g = s(885386),
    M = s(957565),
    y = s(375708),
    A = s(422017),
    f = (((n = f || {})[(n.SMALL = 0)] = "SMALL"), (n[(n.MEDIUM = 1)] = "MEDIUM"), n);
function C(e) {
    let { tag: l, size: n = 1, disabled: a, className: d, onClick: f, onRemove: C, selected: L, ariaLabel: N } = e,
        { name: k, emojiId: v, emojiName: S } = l,
        E = null != C,
        [z, P] = i.useState(!1),
        _ = (0, c.bG)([h.Ay], () => (null != v ? h.Ay.getUsableCustomEmojiById(v) : null)),
        I = E || null != f,
        R = (!E || !z) && (null != v || null != S),
        T = 0 === n,
        w = i.useRef(null),
        D = (0, c.bG)([p.Ay], () => p.Ay.keyboardModeEnabled),
        U = (0, t.jsxs)(t.Fragment, {
            children: [
                R
                    ? (0, t.jsx)(j.A, {
                          className: r()(A.emoji, { [A.small]: T }),
                          emojiId: v,
                          emojiName: S,
                          animated: !!_?.animated,
                          size: "reaction",
                      })
                    : null,
                z &&
                    E &&
                    (0, t.jsx)("div", {
                        className: A.closeCircle,
                        children: (0, t.jsx)(u.P, { size: "md", color: "currentColor", className: A.close }),
                    }),
                (0, t.jsx)(m.E, {
                    variant: T ? "text-xs/semibold" : "text-sm/semibold",
                    lineClamp: 1,
                    color: "currentColor",
                    children: k,
                }),
            ],
        }),
        F = {
            key: l.id,
            className: r()(
                A.pill,
                {
                    [A.disabled]: a,
                    [A.clickable]: I,
                    [A.small]: T,
                    [A.selected]: L,
                    [A[l.color]]: null != l.color && !I,
                },
                d,
            ),
            onClick: function (e) {
                f?.(e), C?.(l), D || null == w.current || w.current.blur();
            },
            onContextMenu: (e) => {
                let n;
                return (
                    (n = g.Q_.getSetting()),
                    void (
                        M.p5 &&
                        n &&
                        (0, b.L3)(e, async () => {
                            let { default: e } = await s.e("32612").then(s.bind(s, 960015));
                            return (s) => (0, t.jsx)(e, { ...s, tag: l });
                        })
                    )
                );
            },
            onMouseEnter: () => E && P(!0),
            onMouseLeave: () => E && P(!1),
        },
        G = (0, o.rm)(`forum-tag-${l.id}`);
    return I
        ? (0, t.jsx)(x.D, {
              ...G,
              innerRef: w,
              focusProps: { ringTarget: w },
              "aria-label": null != N ? N : y.intl.formatToPlainString(y.t.iyRTLm, { tagName: k }),
              role: "button",
              "aria-pressed": L,
              ...F,
              children: U,
          })
        : (0, t.jsx)("div", { ...F, children: U });
}
function L(e) {
    let { tags: l, count: s, size: n = 1 } = e,
        i = 0 === n;
    return (0, t.jsx)(d.m, {
        "aria-label": y.intl.string(y.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, t.jsx)(t.Fragment, {
            children: l.map((e) => (0, t.jsx)(C, { tag: e, className: A.tooltipPill, size: C.Sizes.SMALL }, e.id)),
        }),
        children: (0, t.jsx)("div", {
            className: r()(A.pill, { [A.small]: i }),
            children: (0, t.jsxs)(m.E, { variant: i ? "text-xs/semibold" : "text-sm/semibold", children: ["+", s] }),
        }),
    });
}
C.Sizes = f;
