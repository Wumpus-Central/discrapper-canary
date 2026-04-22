n.d(t, { A: () => C, q: () => x });
var a,
    i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(837381),
    c = n(311907),
    u = n(990078),
    d = n(789645),
    m = n(834730),
    _ = n(939249),
    h = n(442433),
    p = n(565645),
    f = n(775602),
    g = n(508675),
    A = n(253932),
    b = n(957565),
    I = n(985018),
    S = n(422017),
    T = (((a = T || {})[(a.SMALL = 0)] = "SMALL"), (a[(a.MEDIUM = 1)] = "MEDIUM"), a);
function C(e) {
    let { tag: t, size: a = 1, disabled: r, className: u, onClick: T, onRemove: C, selected: x, ariaLabel: E } = e,
        { name: y, emojiId: v, emojiName: M } = t,
        w = null != C,
        [L, R] = l.useState(!1),
        j = (0, c.bG)([g.Ay], () => (null != v ? g.Ay.getUsableCustomEmojiById(v) : null)),
        N = w || null != T,
        k = (!w || !L) && (null != v || null != M),
        O = 0 === a,
        D = l.useRef(null),
        F = (0, c.bG)([f.A], () => f.A.keyboardModeEnabled),
        G = (0, i.jsxs)(i.Fragment, {
            children: [
                k
                    ? (0, i.jsx)(p.A, {
                          className: s()(S.emoji, { [S.small]: O }),
                          emojiId: v,
                          emojiName: M,
                          animated: !!j?.animated,
                          size: "reaction",
                      })
                    : null,
                L &&
                    w &&
                    (0, i.jsx)("div", {
                        className: S.closeCircle,
                        children: (0, i.jsx)(d.P, { size: "md", color: "currentColor", className: S.close }),
                    }),
                (0, i.jsx)(m.E, {
                    variant: O ? "text-xs/semibold" : "text-sm/semibold",
                    lineClamp: 1,
                    color: "currentColor",
                    children: y,
                }),
            ],
        }),
        U = {
            key: t.id,
            className: s()(
                S.pill,
                {
                    [S.disabled]: r,
                    [S.clickable]: N,
                    [S.small]: O,
                    [S.selected]: x,
                    [S[t.color]]: null != t.color && !N,
                },
                u,
            ),
            onClick: (e) => {
                T?.(e), C?.(t), F || null == D.current || D.current.blur();
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
            onMouseEnter: () => w && R(!0),
            onMouseLeave: () => w && R(!1),
        },
        P = (0, o.rm)(`forum-tag-${t.id}`);
    return N
        ? (0, i.jsx)(_.D, {
              ...P,
              innerRef: D,
              focusProps: { ringTarget: D },
              "aria-label": null != E ? E : I.intl.formatToPlainString(I.t.iyRTLm, { tagName: y }),
              role: "button",
              "aria-pressed": x,
              ...U,
              children: G,
          })
        : (0, i.jsx)("div", { ...U, children: G });
}
function x(e) {
    let { tags: t, count: n, size: a = 1 } = e,
        l = 0 === a;
    return (0, i.jsx)(u.m, {
        "aria-label": I.intl.string(I.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, i.jsx)(i.Fragment, {
            children: t.map((e) => (0, i.jsx)(C, { tag: e, className: S.tooltipPill, size: C.Sizes.SMALL }, e.id)),
        }),
        children: (0, i.jsx)("div", {
            className: s()(S.pill, { [S.small]: l }),
            children: (0, i.jsxs)(m.E, { variant: l ? "text-xs/semibold" : "text-sm/semibold", children: ["+", n] }),
        }),
    });
}
C.Sizes = T;
