"use strict";
l.d(t, { A: () => v, q: () => N });
var n,
    i = l(627968),
    s = l(64700),
    a = l(503698),
    r = l.n(a),
    o = l(837381),
    d = l(17928),
    c = l(990078),
    u = l(789645),
    h = l(834730),
    g = l(939249),
    m = l(442433),
    p = l(565645),
    x = l(775602),
    _ = l(159273),
    A = l(253932),
    f = l(957565),
    b = l(985018),
    C = l(422017),
    S = (((n = S || {})[(n.SMALL = 0)] = "SMALL"), (n[(n.MEDIUM = 1)] = "MEDIUM"), n);
function v(e) {
    let { tag: t, size: n = 1, disabled: a, className: c, onClick: S, onRemove: v, selected: N, ariaLabel: j } = e,
        { name: E, emojiId: I, emojiName: T } = t,
        y = null != v,
        [R, M] = s.useState(!1),
        L = (0, d.bG)([_.Ay], () => (null != I ? _.Ay.getUsableCustomEmojiById(I) : null)),
        w = y || null != S,
        O = (!y || !R) && (null != I || null != T),
        D = 0 === n,
        G = s.useRef(null),
        P = (0, d.bG)([x.A], () => x.A.keyboardModeEnabled),
        k = (0, i.jsxs)(i.Fragment, {
            children: [
                O
                    ? (0, i.jsx)(p.A, {
                          className: r()(C.emoji, { [C.small]: D }),
                          emojiId: I,
                          emojiName: T,
                          animated: !!L?.animated,
                          size: "reaction",
                      })
                    : null,
                R &&
                    y &&
                    (0, i.jsx)("div", {
                        className: C.closeCircle,
                        children: (0, i.jsx)(u.P, { size: "md", color: "currentColor", className: C.close }),
                    }),
                (0, i.jsx)(h.E, {
                    variant: D ? "text-xs/semibold" : "text-sm/semibold",
                    lineClamp: 1,
                    color: "currentColor",
                    children: E,
                }),
            ],
        }),
        B = {
            key: t.id,
            className: r()(
                C.pill,
                {
                    [C.disabled]: a,
                    [C.clickable]: w,
                    [C.small]: D,
                    [C.selected]: N,
                    [C[t.color]]: null != t.color && !w,
                },
                c,
            ),
            onClick: (e) => {
                S?.(e), v?.(t), P || null == G.current || G.current.blur();
            },
            onContextMenu: (e) => {
                let n;
                return (
                    (n = A.Q_.getSetting()),
                    void (
                        f.p5 &&
                        n &&
                        (0, m.L3)(e, async () => {
                            let { default: e } = await l.e("32612").then(l.bind(l, 960015));
                            return (l) => (0, i.jsx)(e, { ...l, tag: t });
                        })
                    )
                );
            },
            onMouseEnter: () => y && M(!0),
            onMouseLeave: () => y && M(!1),
        },
        U = (0, o.rm)(`forum-tag-${t.id}`);
    return w
        ? (0, i.jsx)(g.D, {
              ...U,
              innerRef: G,
              focusProps: { ringTarget: G },
              "aria-label": null != j ? j : b.intl.formatToPlainString(b.t.iyRTLm, { tagName: E }),
              role: "button",
              "aria-pressed": N,
              ...B,
              children: k,
          })
        : (0, i.jsx)("div", { ...B, children: k });
}
function N(e) {
    let { tags: t, count: l, size: n = 1 } = e,
        s = 0 === n;
    return (0, i.jsx)(c.m, {
        "aria-label": b.intl.string(b.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, i.jsx)(i.Fragment, {
            children: t.map((e) => (0, i.jsx)(v, { tag: e, className: C.tooltipPill, size: v.Sizes.SMALL }, e.id)),
        }),
        children: (0, i.jsx)("div", {
            className: r()(C.pill, { [C.small]: s }),
            children: (0, i.jsxs)(h.E, { variant: s ? "text-xs/semibold" : "text-sm/semibold", children: ["+", l] }),
        }),
    });
}
v.Sizes = S;
