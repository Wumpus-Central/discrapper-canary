var n,
    a = i(477900),
    s = i(582128),
    t = i(503698),
    r = i.n(t),
    o = i(837381),
    d = i(855986),
    m = i(789645),
    c = i(834730),
    u = i(939249),
    j = i(866665),
    b = i(431527),
    y = i(442433),
    g = i(565645),
    p = i(775602),
    x = i(121681),
    h = i(253932),
    A = i(486020),
    f = i(957565),
    C = i(690521),
    L = i(732139),
    M = i(792996),
    N = i(715434),
    v = (((n = v || {})[(n.SMALL = 0)] = "SMALL"), (n[(n.MEDIUM = 1)] = "MEDIUM"), n);
function E(e) {
    let l = null != e.emojiId ? x.Ay.getUsableCustomEmojiById(e.emojiId) : null;
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
    return (0, d.bG)([], () => e.map(E));
}
function k(e) {
    let { tag: l, size: n = 1, disabled: t, className: j, onClick: b, onRemove: A, selected: C, ariaLabel: L } = e,
        { name: v, emojiId: E, emojiName: I } = l,
        k = null != A,
        [S, z] = s.useState(!1),
        P = (0, d.bG)([x.Ay], () => (null != E ? x.Ay.getUsableCustomEmojiById(E) : null)),
        R = k || null != b,
        U = (!k || !S) && (null != E || null != I),
        T = 0 === n,
        _ = s.useRef(null),
        w = (0, d.bG)([p.Ay], () => p.Ay.keyboardModeEnabled),
        D = (0, a.jsxs)(a.Fragment, {
            children: [
                U
                    ? (0, a.jsx)(g.A, {
                          className: r()(N.emoji, { [N.small]: T }),
                          emojiId: E,
                          emojiName: I,
                          animated: !!P?.animated,
                          size: "reaction",
                      })
                    : null,
                S &&
                    k &&
                    (0, a.jsx)("div", {
                        className: N.closeCircle,
                        children: (0, a.jsx)(m.P, { size: "md", color: "currentColor", className: N.close }),
                    }),
                (0, a.jsx)(c.E, {
                    variant: T ? "body-xs/semibold" : "body-sm/semibold",
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
                    [N.disabled]: t,
                    [N.clickable]: R,
                    [N.small]: T,
                    [N.selected]: C,
                    [N[l.color]]: null != l.color && !R,
                },
                j,
            ),
            onClick: function (e) {
                (b?.(e), A?.(l), w || null == _.current || _.current.blur());
            },
            onContextMenu: (e) => {
                let n;
                return (
                    (n = h.Q_.getSetting()),
                    void (
                        f.p5 &&
                        n &&
                        (0, y.L3)(e, async () => {
                            let { default: e } = await Promise.all([i.e(638221), i.e(432612)]).then(i.bind(i, 960015));
                            return (i) => (0, a.jsx)(e, { ...i, tag: l });
                        })
                    )
                );
            },
            onMouseEnter: () => k && z(!0),
            onMouseLeave: () => k && z(!1),
        },
        G = (0, o.rm)(`forum-tag-${l.id}`);
    return R
        ? (0, a.jsx)(u.D, {
              ...G,
              innerRef: _,
              focusProps: { ringTarget: _ },
              "aria-label": null != L ? L : M.intl.formatToPlainString(M.t.iyRTLm, { tagName: v }),
              role: "button",
              "aria-pressed": C,
              ...F,
              children: D,
          })
        : (0, a.jsx)("div", { ...F, children: D });
}
((k.Sizes = v),
    i.d(
        l,
        {},
        {
            Ay: k,
            cq: I,
            q6: function (e) {
                let { tags: l, count: i, size: n = 1, useManaTagGroup: s = !1 } = e,
                    t = 0 === n,
                    o = I(l);
                return (0, a.jsx)(j.m, {
                    "aria-label": M.intl.string(M.t["P/y+sj"]),
                    __unsupportedReactNodeAsText: s
                        ? (0, a.jsx)(b.C, {
                              variant: "filter",
                              size: "xs",
                              label: M.intl.string(M.t["P/y+sj"]),
                              items: o,
                          })
                        : (0, a.jsx)(a.Fragment, {
                              children: l.map((e) =>
                                  (0, a.jsx)(k, { tag: e, className: N.tooltipPill, size: k.Sizes.SMALL }, e.id),
                              ),
                          }),
                    children: (0, a.jsx)("div", {
                        className: r()(N.pill, { [N.small]: t, [N.manaFilterTag]: s }),
                        children: (0, a.jsxs)(c.E, {
                            variant: s ? "body-xs/normal" : t ? "body-xs/semibold" : "body-sm/semibold",
                            children: ["+", i],
                        }),
                    }),
                });
            },
        },
    ));
