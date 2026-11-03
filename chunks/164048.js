t.d(n, { A: () => E });
var l = t(477900),
    i = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(29477),
    s = t(702841),
    c = t(661531),
    d = t(462887),
    u = t(844222),
    m = t(717421),
    h = t(602853),
    p = t(866323),
    g = t(939249),
    x = t(834730),
    f = t(933832),
    A = t(62010),
    j = t(788026),
    C = t(736653),
    v = t(236285),
    y = t(386784),
    _ = t(105292),
    N = t(455168);
function E(e) {
    let { guildId: n, option: t, selected: a, onSelect: E, hideMemberCount: w, canBeNew: I } = e,
        b = (0, d.M)((0, C.Ay)()),
        [k, M] = i.useState(!1),
        R = k && !w,
        O = i.useRef(null),
        { reducedMotion: T } = i.useContext(u.C),
        D = (0, s.bG)([v.Ay], () => t.emoji?.id != null && (v.Ay.getCustomEmojiById(t.emoji?.id)?.animated ?? !1)),
        H = (0, y.A)(n, 1e3),
        K = null == H || null == t.roleIds ? 0 : Math.max(...t.roleIds.map((e) => H[e])),
        L = I && !a && t.isUnseen,
        U = (0, m.z)(
            { transform: a || T.enabled ? "scale(1)" : "scale(0.7)", opacity: +!!a, config: { duration: 150 } },
            "animate-always",
        ),
        G = (0, h.r)(c.A.colors.BORDER_SUBTLE),
        P = (0, h.r)(c.A.unsafe_rawColors.BRAND_500),
        B = (0, m.z)(
            {
                from: { color: P.spring() },
                color: G.spring({ opacity: b ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500,
            },
            "animate-always",
        ),
        W = (0, p.p)(
            R,
            {
                from: { transform: T.enabled ? "translateX(0)" : "translateX(8px)", opacity: 0 },
                enter: { transform: "translateX(0)", opacity: 1 },
                leave: { opacity: 0 },
                trail: 400,
                config: { duration: 150 },
            },
            "animate-always",
        ),
        [z, S] = i.useState(!1);
    i.useEffect(() => {
        if (R)
            return (
                (O.current = setTimeout(() => {
                    (M(!1), (O.current = null));
                }, 3e3)),
                () => {
                    null != O.current && clearTimeout(O.current);
                }
            );
    }, [R]);
    let Z = r()(N.RH, { [N.wH]: a, [N.Vq]: z }),
        V = L ? { borderColor: B.color } : {};
    return (0, l.jsx)(o.animated.div, {
        style: V,
        className: Z,
        children: (0, l.jsxs)(g.D, {
            className: N.AP,
            onClick: function () {
                (M(!a), E(!a));
            },
            onMouseDown: () => S(!0),
            onMouseUp: () => S(!1),
            "aria-pressed": a,
            children: [
                null != t.emoji && (null != t.emoji.id || null != t.emoji.name)
                    ? (0, l.jsx)(j.A, {
                          animated: t.emoji.animated || D,
                          className: N.t0,
                          emojiId: t.emoji.id,
                          emojiName: t.emoji.name,
                      })
                    : null,
                (0, l.jsxs)("div", {
                    className: N._d,
                    children: [
                        (0, l.jsx)(x.E, { variant: "body-md/medium", color: "text-strong", children: t.title }),
                        t.description.length > 0
                            ? (0, l.jsx)(x.E, {
                                  variant: "body-xs/normal",
                                  color: "text-default",
                                  children: t.description,
                              })
                            : null,
                    ],
                }),
                (0, l.jsx)(o.animated.div, {
                    className: N.oE,
                    style: U,
                    children: (0, l.jsx)(f.CheckmarkLargeIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: c.A.unsafe_rawColors.WHITE.css,
                    }),
                }),
                W(
                    (e, n) =>
                        K > 0 &&
                        n &&
                        (0, l.jsx)(o.animated.div, {
                            className: N.Kl,
                            style: e,
                            children: (0, l.jsx)(x.E, {
                                variant: "body-xs/normal",
                                color: "text-overlay-light",
                                children: _.intl.format(_.t.EgKsZA, { memberCount: K }),
                            }),
                        }),
                ),
                L &&
                    (0, l.jsx)("div", {
                        className: N.Ad,
                        children: (0, l.jsx)(A.E, { type: "new", variant: "primary" }),
                    }),
            ],
        }),
    });
}
