n.d(t, { A: () => f });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(4208),
    s = n(417597),
    c = n(827734),
    d = n(582754),
    u = n(397927),
    m = n(565645),
    h = n(736653),
    p = n(508675),
    x = n(386784),
    A = n(985018),
    g = n(942783);
function f(e) {
    let { guildId: t, option: n, selected: a, onSelect: f, hideMemberCount: C, canBeNew: j } = e,
        v = (0, d.Mw)((0, h.Ay)()),
        [_, N] = i.useState(!1),
        y = _ && !C,
        w = i.useRef(null),
        { reducedMotion: E } = i.useContext(u.CZY),
        I = (0, s.bG)([p.Ay], () => n.emoji?.id != null && (p.Ay.getCustomEmojiById(n.emoji?.id)?.animated ?? !1)),
        M = (0, x.A)(t, 1e3),
        b = null == M || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => M[e])),
        k = j && !a && n.isUnseen,
        T = (0, u.zhh)(
            { transform: a || E.enabled ? "scale(1)" : "scale(0.7)", opacity: +!!a, config: { duration: 150 } },
            "animate-always",
        ),
        R = (0, u.rdh)(c.A.colors.BORDER_SUBTLE),
        D = (0, u.rdh)(c.A.unsafe_rawColors.BRAND_500),
        O = (0, u.zhh)(
            {
                from: { color: D.spring() },
                color: R.spring({ opacity: v ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500,
            },
            "animate-always",
        ),
        K = (0, u.pnh)(
            y,
            {
                from: { transform: E.enabled ? "translateX(0)" : "translateX(8px)", opacity: 0 },
                enter: { transform: "translateX(0)", opacity: 1 },
                leave: { opacity: 0 },
                trail: 400,
                config: { duration: 150 },
            },
            "animate-always",
        ),
        [L, H] = i.useState(!1);
    i.useEffect(() => {
        if (y)
            return (
                (w.current = setTimeout(() => {
                    N(!1), (w.current = null);
                }, 3e3)),
                () => {
                    null != w.current && clearTimeout(w.current);
                }
            );
    }, [y]);
    let B = r()(g.RH, { [g.wH]: a, [g.Vq]: L }),
        G = k ? { borderColor: O.color } : {};
    return (0, l.jsx)(o.animated.div, {
        style: G,
        className: B,
        children: (0, l.jsxs)(u.DUT, {
            className: g.AP,
            onClick: () => {
                N(!a), f(!a);
            },
            onMouseDown: () => H(!0),
            onMouseUp: () => H(!1),
            children: [
                null != n.emoji && (null != n.emoji.id || null != n.emoji.name)
                    ? (0, l.jsx)(m.A, {
                          animated: n.emoji.animated || I,
                          className: g.t0,
                          emojiId: n.emoji.id,
                          emojiName: n.emoji.name,
                      })
                    : null,
                (0, l.jsxs)("div", {
                    className: g._d,
                    children: [
                        (0, l.jsx)(u.Text, { variant: "text-md/medium", color: "text-strong", children: n.title }),
                        n.description.length > 0
                            ? (0, l.jsx)(u.Text, {
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
                    children: (0, l.jsx)(u.A9s, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: c.A.unsafe_rawColors.WHITE.css,
                    }),
                }),
                K(
                    (e, t) =>
                        b > 0 &&
                        t &&
                        (0, l.jsx)(o.animated.div, {
                            className: g.Kl,
                            style: e,
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: A.intl.format(A.t.EgKsZA, { memberCount: b }),
                            }),
                        }),
                ),
                k &&
                    (0, l.jsx)(u.LpS, {
                        color: c.A.unsafe_rawColors.BRAND_260.css,
                        text: A.intl.string(A.t.y2b7CA),
                        className: g.Ad,
                    }),
            ],
        }),
    });
}
