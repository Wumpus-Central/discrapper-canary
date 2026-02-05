n.d(t, { A: () => f });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(563495),
    s = n(417597),
    c = n(827734),
    u = n(582754),
    d = n(397927),
    m = n(565645),
    h = n(736653),
    p = n(508675),
    x = n(386784),
    A = n(985018),
    g = n(603414);
function f(e) {
    let { guildId: t, option: n, selected: a, onSelect: f, hideMemberCount: C, canBeNew: j } = e,
        v = (0, u.Mw)((0, h.Ay)()),
        [y, _] = i.useState(!1),
        N = y && !C,
        w = i.useRef(null),
        { reducedMotion: E } = i.useContext(d.CZY),
        b = (0, s.bG)([p.Ay], () => n.emoji?.id != null && (p.Ay.getCustomEmojiById(n.emoji?.id)?.animated ?? !1)),
        I = (0, x.A)(t, 1e3),
        k = null == I || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => I[e])),
        M = j && !a && n.isUnseen,
        T = (0, d.zhh)(
            { transform: a || E.enabled ? "scale(1)" : "scale(0.7)", opacity: +!!a, config: { duration: 150 } },
            "animate-always",
        ),
        R = (0, d.rdh)(c.A.colors.BORDER_SUBTLE),
        D = (0, d.rdh)(c.A.unsafe_rawColors.BRAND_500),
        O = (0, d.zhh)(
            {
                from: { color: D.spring() },
                color: R.spring({ opacity: v ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500,
            },
            "animate-always",
        ),
        L = (0, d.pnh)(
            N,
            {
                from: { transform: E.enabled ? "translateX(0)" : "translateX(8px)", opacity: 0 },
                enter: { transform: "translateX(0)", opacity: 1 },
                leave: { opacity: 0 },
                trail: 400,
                config: { duration: 150 },
            },
            "animate-always",
        ),
        [K, G] = i.useState(!1);
    i.useEffect(() => {
        if (N)
            return (
                (w.current = setTimeout(() => {
                    _(!1), (w.current = null);
                }, 3e3)),
                () => {
                    null != w.current && clearTimeout(w.current);
                }
            );
    }, [N]);
    let H = r()(g.RH, { [g.wH]: a, [g.Vq]: K }),
        B = M ? { borderColor: O.color } : {};
    return (0, l.jsx)(o.animated.div, {
        style: B,
        className: H,
        children: (0, l.jsxs)(d.DUT, {
            className: g.AP,
            onClick: () => {
                _(!a), f(!a);
            },
            onMouseDown: () => G(!0),
            onMouseUp: () => G(!1),
            children: [
                null != n.emoji && (null != n.emoji.id || null != n.emoji.name)
                    ? (0, l.jsx)(m.A, {
                          animated: n.emoji.animated || b,
                          className: g.t0,
                          emojiId: n.emoji.id,
                          emojiName: n.emoji.name,
                      })
                    : null,
                (0, l.jsxs)("div", {
                    className: g._d,
                    children: [
                        (0, l.jsx)(d.Text, { variant: "text-md/medium", color: "text-strong", children: n.title }),
                        n.description.length > 0
                            ? (0, l.jsx)(d.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: n.description,
                              })
                            : null,
                    ],
                }),
                (0, l.jsx)(o.animated.div, {
                    className: g.oE,
                    style: T,
                    children: (0, l.jsx)(d.A9s, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: c.A.unsafe_rawColors.WHITE.css,
                    }),
                }),
                L(
                    (e, t) =>
                        k > 0 &&
                        t &&
                        (0, l.jsx)(o.animated.div, {
                            className: g.Kl,
                            style: e,
                            children: (0, l.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: A.intl.format(A.t.EgKsZA, { memberCount: k }),
                            }),
                        }),
                ),
                M &&
                    (0, l.jsx)(d.LpS, {
                        color: c.A.unsafe_rawColors.BRAND_260.css,
                        text: A.intl.string(A.t.y2b7CA),
                        className: g.Ad,
                    }),
            ],
        }),
    });
}
