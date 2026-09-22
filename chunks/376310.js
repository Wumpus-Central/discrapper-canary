i.d(l, { Ay: () => k, cq: () => I, q6: () => S });
var t,
    n = i(477900),
    a = i(582128),
    s = i(503698),
    r = i.n(s),
    o = i(837381),
    m = i(17928),
    d = i(789645),
    c = i(834730),
    u = i(939249),
    j = i(866665),
    x = i(669257),
    b = i(442433),
    g = i(565645),
    p = i(775602),
    y = i(236285),
    h = i(885386),
    A = i(486020),
    f = i(957565),
    C = i(690521),
    L = i(732139),
    M = i(375708),
    N = i(715434),
    v = (((t = v || {})[(t.SMALL = 0)] = "SMALL"), (t[(t.MEDIUM = 1)] = "MEDIUM"), t);
function E(e) {
    let l = null != e.emojiId ? y.Ay.getUsableCustomEmojiById(e.emojiId) : null;
    return {
        id: e.id,
        label: e.name,
        icon:
            null != e.emojiId
                ? {
                      type: "image",
                      src: A.Ay.getEmojiURL({ id: e.emojiId, animated: !!l?.animated, size: L.Ec.reaction }),
                  }
                : null != e.emojiName
                  ? { type: "image", src: C.Ay.getURL(e.emojiName) }
                  : void 0,
    };
}
function I(e) {
    return (0, m.bG)([], () => e.map(E));
}
function k(e) {
    let { tag: l, size: t = 1, disabled: s, className: j, onClick: x, onRemove: A, selected: C, ariaLabel: L } = e,
        { name: v, emojiId: E, emojiName: I } = l,
        k = null != A,
        [S, z] = a.useState(!1),
        P = (0, m.bG)([y.Ay], () => (null != E ? y.Ay.getUsableCustomEmojiById(E) : null)),
        R = k || null != x,
        U = (!k || !S) && (null != E || null != I),
        T = 0 === t,
        _ = a.useRef(null),
        w = (0, m.bG)([p.Ay], () => p.Ay.keyboardModeEnabled),
        D = (0, n.jsxs)(n.Fragment, {
            children: [
                U
                    ? (0, n.jsx)(g.A, {
                          className: r()(N.emoji, { [N.small]: T }),
                          emojiId: E,
                          emojiName: I,
                          animated: !!P?.animated,
                          size: "reaction",
                      })
                    : null,
                S &&
                    k &&
                    (0, n.jsx)("div", {
                        className: N.closeCircle,
                        children: (0, n.jsx)(d.P, { size: "md", color: "currentColor", className: N.close }),
                    }),
                (0, n.jsx)(c.E, {
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
                N.pill,
                {
                    [N.disabled]: s,
                    [N.clickable]: R,
                    [N.small]: T,
                    [N.selected]: C,
                    [N[l.color]]: null != l.color && !R,
                },
                j,
            ),
            onClick: function (e) {
                (x?.(e), A?.(l), w || null == _.current || _.current.blur());
            },
            onContextMenu: (e) => {
                let t;
                return (
                    (t = h.Q_.getSetting()),
                    void (
                        f.p5 &&
                        t &&
                        (0, b.L3)(e, async () => {
                            let { default: e } = await i.e("432612").then(i.bind(i, 960015));
                            return (i) => (0, n.jsx)(e, { ...i, tag: l });
                        })
                    )
                );
            },
            onMouseEnter: () => k && z(!0),
            onMouseLeave: () => k && z(!1),
        },
        G = (0, o.rm)(`forum-tag-${l.id}`);
    return R
        ? (0, n.jsx)(u.D, {
              ...G,
              innerRef: _,
              focusProps: { ringTarget: _ },
              "aria-label": null != L ? L : M.intl.formatToPlainString(M.t.iyRTLm, { tagName: v }),
              role: "button",
              "aria-pressed": C,
              ...F,
              children: D,
          })
        : (0, n.jsx)("div", { ...F, children: D });
}
function S(e) {
    let { tags: l, count: i, size: t = 1, useManaTagGroup: a = !1 } = e,
        s = 0 === t,
        o = I(l);
    return (0, n.jsx)(j.m, {
        "aria-label": M.intl.string(M.t["P/y+sj"]),
        __unsupportedReactNodeAsText: a
            ? (0, n.jsx)(x.C, { variant: "filter", size: "xs", label: M.intl.string(M.t["P/y+sj"]), items: o })
            : (0, n.jsx)(n.Fragment, {
                  children: l.map((e) =>
                      (0, n.jsx)(k, { tag: e, className: N.tooltipPill, size: k.Sizes.SMALL }, e.id),
                  ),
              }),
        children: (0, n.jsx)("div", {
            className: r()(N.pill, { [N.small]: s, [N.manaFilterTag]: a }),
            children: (0, n.jsxs)(c.E, {
                variant: a ? "text-xs/normal" : s ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", i],
            }),
        }),
    });
}
k.Sizes = v;
