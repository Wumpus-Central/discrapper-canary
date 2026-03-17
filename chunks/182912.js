n.d(t, { A: () => d });
var i = n(627968),
    r = n(503698),
    l = n.n(r),
    a = n(397927),
    s = n(486020),
    o = n(558770);
function d(e) {
    let { className: t, voiceStates: n, guildId: r } = e,
        d = n.length <= 4 ? n : n.slice(0, 3),
        c = Math.max(0, n.length - 4),
        u = d.length + +(c > 0);
    return (0, i.jsxs)("div", {
        className: l()(o.gg, t),
        "data-count": u,
        "aria-hidden": !0,
        children: [
            d.map((e, t) => {
                var n;
                return (0, i.jsx)(
                    "div",
                    {
                        className: o.my,
                        children: (0, i.jsx)(
                            a.euF,
                            {
                                src:
                                    ((n = 0 === t ? 80 : 56),
                                    (null != e.member ? (0, s.xT)(e.member) : null) ?? e.user.getAvatarURL(r, n)),
                                size:
                                    1 === u
                                        ? a._3J.SIZE_80
                                        : 2 === u && 0 === t
                                          ? a._3J.DEPRECATED_SIZE_60
                                          : 2 === u && 1 === t
                                            ? a._3J.SIZE_40
                                            : u > 2 && 0 === t
                                              ? a._3J.DEPRECATED_SIZE_60
                                              : u > 2 && 1 === t
                                                ? a._3J.SIZE_48
                                                : u > 2
                                                  ? a._3J.SIZE_40
                                                  : a._3J.SIZE_48,
                                "aria-hidden": !0,
                            },
                            e.user.id,
                        ),
                    },
                    e.user.id,
                );
            }),
            c > 0 &&
                (0, i.jsx)(
                    "div",
                    {
                        className: o.k2,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            children: c > 99 ? ">99" : `+${c}`,
                        }),
                    },
                    "overflow",
                ),
        ],
    });
}
