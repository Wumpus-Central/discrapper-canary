s.d(l, { A: () => N, q: () => f });
var t,
    n = s(627968),
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
    g = s(253932),
    M = s(957565),
    A = s(985018),
    C = s(422017),
    L = (((t = L || {})[(t.SMALL = 0)] = "SMALL"), (t[(t.MEDIUM = 1)] = "MEDIUM"), t);
function N(e) {
    let { tag: l, size: t = 1, disabled: a, className: d, onClick: L, onRemove: N, selected: f, ariaLabel: k } = e,
        { name: v, emojiId: y, emojiName: S } = l,
        E = null != N,
        [z, P] = i.useState(!1),
        _ = (0, c.bG)([h.Ay], () => (null != y ? h.Ay.getUsableCustomEmojiById(y) : null)),
        I = E || null != L,
        R = (!E || !z) && (null != y || null != S),
        T = 0 === t,
        w = i.useRef(null),
        D = (0, c.bG)([p.A], () => p.A.keyboardModeEnabled),
        U = (0, n.jsxs)(n.Fragment, {
            children: [
                R
                    ? (0, n.jsx)(j.A, {
                          className: r()(C.emoji, { [C.small]: T }),
                          emojiId: y,
                          emojiName: S,
                          animated: !!_?.animated,
                          size: "reaction",
                      })
                    : null,
                z &&
                    E &&
                    (0, n.jsx)("div", {
                        className: C.closeCircle,
                        children: (0, n.jsx)(u.P, { size: "md", color: "currentColor", className: C.close }),
                    }),
                (0, n.jsx)(m.E, {
                    variant: T ? "text-xs/semibold" : "text-sm/semibold",
                    lineClamp: 1,
                    color: "currentColor",
                    children: v,
                }),
            ],
        }),
        F = {
            key: l.id,
            className: r()(
                C.pill,
                {
                    [C.disabled]: a,
                    [C.clickable]: I,
                    [C.small]: T,
                    [C.selected]: f,
                    [C[l.color]]: null != l.color && !I,
                },
                d,
            ),
            onClick: (e) => {
                L?.(e), N?.(l), D || null == w.current || w.current.blur();
            },
            onContextMenu: (e) => {
                let t;
                return (
                    (t = g.Q_.getSetting()),
                    void (
                        M.p5 &&
                        t &&
                        (0, b.L3)(e, async () => {
                            let { default: e } = await s.e("32612").then(s.bind(s, 960015));
                            return (s) => (0, n.jsx)(e, { ...s, tag: l });
                        })
                    )
                );
            },
            onMouseEnter: () => E && P(!0),
            onMouseLeave: () => E && P(!1),
        },
        G = (0, o.rm)(`forum-tag-${l.id}`);
    return I
        ? (0, n.jsx)(x.D, {
              ...G,
              innerRef: w,
              focusProps: { ringTarget: w },
              "aria-label": null != k ? k : A.intl.formatToPlainString(A.t.iyRTLm, { tagName: v }),
              role: "button",
              "aria-pressed": f,
              ...F,
              children: U,
          })
        : (0, n.jsx)("div", { ...F, children: U });
}
function f(e) {
    let { tags: l, count: s, size: t = 1 } = e,
        i = 0 === t;
    return (0, n.jsx)(d.m, {
        "aria-label": A.intl.string(A.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, n.jsx)(n.Fragment, {
            children: l.map((e) => (0, n.jsx)(N, { tag: e, className: C.tooltipPill, size: N.Sizes.SMALL }, e.id)),
        }),
        children: (0, n.jsx)("div", {
            className: r()(C.pill, { [C.small]: i }),
            children: (0, n.jsxs)(m.E, { variant: i ? "text-xs/semibold" : "text-sm/semibold", children: ["+", s] }),
        }),
    });
}
N.Sizes = L;
