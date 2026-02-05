n.d(t, { A: () => T, q: () => v });
var l,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(837381),
    u = n(311907),
    c = n(990078),
    d = n(397927),
    h = n(442433),
    g = n(565645),
    f = n(775602),
    m = n(508675),
    p = n(253932),
    N = n(957565),
    A = n(985018),
    E = n(576140),
    x = (((l = x || {})[(l.SMALL = 0)] = "SMALL"), (l[(l.MEDIUM = 1)] = "MEDIUM"), l);
function T(e) {
    let { tag: t, size: l = 1, disabled: s, className: c, onClick: x, onRemove: T, selected: v, ariaLabel: b } = e,
        { name: S, emojiId: R, emojiName: y } = t,
        C = null != T,
        [D, M] = a.useState(!1),
        j = (0, u.bG)([m.Ay], () => (null != R ? m.Ay.getUsableCustomEmojiById(R) : null)),
        I = C || null != x,
        _ = (!C || !D) && (null != R || null != y),
        L = 0 === l,
        w = a.useRef(null),
        k = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled),
        G = (0, i.jsxs)(i.Fragment, {
            children: [
                _
                    ? (0, i.jsx)(g.A, {
                          className: r()(E.emoji, { [E.small]: L }),
                          emojiId: R,
                          emojiName: y,
                          animated: !!j?.animated,
                          size: "reaction",
                      })
                    : null,
                D &&
                    C &&
                    (0, i.jsx)("div", {
                        className: E.closeCircle,
                        children: (0, i.jsx)(d.PGe, { size: "md", color: "currentColor", className: E.close }),
                    }),
                (0, i.jsx)(d.Text, {
                    variant: L ? "text-xs/semibold" : "text-sm/semibold",
                    lineClamp: 1,
                    color: "currentColor",
                    children: S,
                }),
            ],
        }),
        O = {
            key: t.id,
            className: r()(
                E.pill,
                {
                    [E.disabled]: s,
                    [E.clickable]: I,
                    [E.small]: L,
                    [E.selected]: v,
                    [E[t.color]]: null != t.color && !I,
                },
                c,
            ),
            onClick: (e) => {
                x?.(e), T?.(t), k || null == w.current || w.current.blur();
            },
            onContextMenu: (e) => {
                let l;
                return (
                    (l = p.Q_.getSetting()),
                    void (
                        N.p5 &&
                        l &&
                        (0, h.L3)(e, async () => {
                            let { default: e } = await n.e("32612").then(n.bind(n, 960015));
                            return (n) => (0, i.jsx)(e, { ...n, tag: t });
                        })
                    )
                );
            },
            onMouseEnter: () => C && M(!0),
            onMouseLeave: () => C && M(!1),
        },
        P = (0, o.rm)(`forum-tag-${t.id}`);
    return I
        ? (0, i.jsx)(d.DUT, {
              ...P,
              innerRef: w,
              focusProps: { ringTarget: w },
              "aria-label": null != b ? b : A.intl.formatToPlainString(A.t.iyRTLm, { tagName: S }),
              role: "button",
              "aria-pressed": v,
              ...O,
              children: G,
          })
        : (0, i.jsx)("div", { ...O, children: G });
}
function v(e) {
    let { tags: t, count: n, size: l = 1 } = e,
        a = 0 === l;
    return (0, i.jsx)(c.m, {
        "aria-label": A.intl.string(A.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, i.jsx)(i.Fragment, {
            children: t.map((e) => (0, i.jsx)(T, { tag: e, className: E.tooltipPill, size: T.Sizes.SMALL }, e.id)),
        }),
        children: (0, i.jsx)("div", {
            className: r()(E.pill, { [E.small]: a }),
            children: (0, i.jsxs)(d.Text, { variant: a ? "text-xs/semibold" : "text-sm/semibold", children: ["+", n] }),
        }),
    });
}
T.Sizes = x;
