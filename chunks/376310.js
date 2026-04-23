n.d(t, { A: () => C, q: () => S });
var a,
    i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(837381),
    c = n(17928),
    d = n(990078),
    u = n(789645),
    m = n(834730),
    _ = n(939249),
    h = n(442433),
    p = n(565645),
    g = n(775602),
    f = n(159273),
    A = n(253932),
    b = n(957565),
    T = n(985018),
    I = n(422017),
    E = (((a = E || {})[(a.SMALL = 0)] = "SMALL"), (a[(a.MEDIUM = 1)] = "MEDIUM"), a);
function C(e) {
    let { tag: t, size: a = 1, disabled: r, className: d, onClick: E, onRemove: C, selected: S, ariaLabel: y } = e,
        { name: x, emojiId: v, emojiName: O } = t,
        N = null != C,
        [w, M] = l.useState(!1),
        R = (0, c.bG)([f.Ay], () => (null != v ? f.Ay.getUsableCustomEmojiById(v) : null)),
        L = N || null != E,
        j = (!N || !w) && (null != v || null != O),
        k = 0 === a,
        D = l.useRef(null),
        F = (0, c.bG)([g.A], () => g.A.keyboardModeEnabled),
        P = (0, i.jsxs)(i.Fragment, {
            children: [
                j
                    ? (0, i.jsx)(p.A, {
                          className: s()(I.emoji, { [I.small]: k }),
                          emojiId: v,
                          emojiName: O,
                          animated: !!R?.animated,
                          size: "reaction",
                      })
                    : null,
                w &&
                    N &&
                    (0, i.jsx)("div", {
                        className: I.closeCircle,
                        children: (0, i.jsx)(u.P, { size: "md", color: "currentColor", className: I.close }),
                    }),
                (0, i.jsx)(m.E, {
                    variant: k ? "text-xs/semibold" : "text-sm/semibold",
                    lineClamp: 1,
                    color: "currentColor",
                    children: x,
                }),
            ],
        }),
        G = {
            key: t.id,
            className: s()(
                I.pill,
                {
                    [I.disabled]: r,
                    [I.clickable]: L,
                    [I.small]: k,
                    [I.selected]: S,
                    [I[t.color]]: null != t.color && !L,
                },
                d,
            ),
            onClick: (e) => {
                E?.(e), C?.(t), F || null == D.current || D.current.blur();
            },
            onContextMenu: (e) => {
                let a;
                return (
                    (a = A.Q_.getSetting()),
                    void (
                        b.p5 &&
                        a &&
                        (0, h.L3)(e, async () => {
                            let { default: e } = await n.e("32612").then(n.bind(n, 960015));
                            return (n) => (0, i.jsx)(e, { ...n, tag: t });
                        })
                    )
                );
            },
            onMouseEnter: () => N && M(!0),
            onMouseLeave: () => N && M(!1),
        },
        U = (0, o.rm)(`forum-tag-${t.id}`);
    return L
        ? (0, i.jsx)(_.D, {
              ...U,
              innerRef: D,
              focusProps: { ringTarget: D },
              "aria-label": null != y ? y : T.intl.formatToPlainString(T.t.iyRTLm, { tagName: x }),
              role: "button",
              "aria-pressed": S,
              ...G,
              children: P,
          })
        : (0, i.jsx)("div", { ...G, children: P });
}
function S(e) {
    let { tags: t, count: n, size: a = 1 } = e,
        l = 0 === a;
    return (0, i.jsx)(d.m, {
        "aria-label": T.intl.string(T.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, i.jsx)(i.Fragment, {
            children: t.map((e) => (0, i.jsx)(C, { tag: e, className: I.tooltipPill, size: C.Sizes.SMALL }, e.id)),
        }),
        children: (0, i.jsx)("div", {
            className: s()(I.pill, { [I.small]: l }),
            children: (0, i.jsxs)(m.E, { variant: l ? "text-xs/semibold" : "text-sm/semibold", children: ["+", n] }),
        }),
    });
}
C.Sizes = E;
