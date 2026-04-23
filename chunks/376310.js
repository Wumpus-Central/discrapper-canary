n.d(t, { A: () => S, q: () => E });
var a,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(837381),
    c = n(311907),
    d = n(990078),
    u = n(789645),
    m = n(834730),
    _ = n(939249),
    h = n(442433),
    p = n(565645),
    g = n(775602),
    f = n(508675),
    A = n(253932),
    b = n(957565),
    T = n(985018),
    I = n(422017),
    C = (((a = C || {})[(a.SMALL = 0)] = "SMALL"), (a[(a.MEDIUM = 1)] = "MEDIUM"), a);
function S(e) {
    let { tag: t, size: a = 1, disabled: s, className: d, onClick: C, onRemove: S, selected: E, ariaLabel: y } = e,
        { name: x, emojiId: v, emojiName: w } = t,
        M = null != S,
        [j, R] = l.useState(!1),
        N = (0, c.bG)([f.Ay], () => (null != v ? f.Ay.getUsableCustomEmojiById(v) : null)),
        O = M || null != C,
        L = (!M || !j) && (null != v || null != w),
        k = 0 === a,
        D = l.useRef(null),
        F = (0, c.bG)([g.A], () => g.A.keyboardModeEnabled),
        U = (0, i.jsxs)(i.Fragment, {
            children: [
                L
                    ? (0, i.jsx)(p.A, {
                          className: r()(I.emoji, { [I.small]: k }),
                          emojiId: v,
                          emojiName: w,
                          animated: !!N?.animated,
                          size: "reaction",
                      })
                    : null,
                j &&
                    M &&
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
            className: r()(
                I.pill,
                {
                    [I.disabled]: s,
                    [I.clickable]: O,
                    [I.small]: k,
                    [I.selected]: E,
                    [I[t.color]]: null != t.color && !O,
                },
                d,
            ),
            onClick: (e) => {
                C?.(e), S?.(t), F || null == D.current || D.current.blur();
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
            onMouseEnter: () => M && R(!0),
            onMouseLeave: () => M && R(!1),
        },
        P = (0, o.rm)(`forum-tag-${t.id}`);
    return O
        ? (0, i.jsx)(_.D, {
              ...P,
              innerRef: D,
              focusProps: { ringTarget: D },
              "aria-label": null != y ? y : T.intl.formatToPlainString(T.t.iyRTLm, { tagName: x }),
              role: "button",
              "aria-pressed": E,
              ...G,
              children: U,
          })
        : (0, i.jsx)("div", { ...G, children: U });
}
function E(e) {
    let { tags: t, count: n, size: a = 1 } = e,
        l = 0 === a;
    return (0, i.jsx)(d.m, {
        "aria-label": T.intl.string(T.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, i.jsx)(i.Fragment, {
            children: t.map((e) => (0, i.jsx)(S, { tag: e, className: I.tooltipPill, size: S.Sizes.SMALL }, e.id)),
        }),
        children: (0, i.jsx)("div", {
            className: r()(I.pill, { [I.small]: l }),
            children: (0, i.jsxs)(m.E, { variant: l ? "text-xs/semibold" : "text-sm/semibold", children: ["+", n] }),
        }),
    });
}
S.Sizes = C;
