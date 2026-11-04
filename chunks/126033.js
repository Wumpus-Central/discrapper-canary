var a = i(477900),
    n = i(582128),
    s = i(189213),
    d = i(27192),
    l = i(834730),
    r = i(331322),
    o = i(486020),
    c = i(320137),
    m = i(792996),
    h = i(628363);
function u(t) {
    let { emoji: e, onChange: i, value: n } = t,
        s = o.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 24 });
    return (0, a.jsx)(d.Kj, {
        size: 20,
        className: h.nI,
        onChange: i,
        type: d.Or.INVERTED,
        value: n,
        reverse: !0,
        children: (0, a.jsxs)("div", {
            className: h.H1,
            children: [
                (0, a.jsx)("img", { className: h.mp, src: s, width: 24, height: 24, alt: "" }),
                (0, a.jsx)(l.E, { color: "text-strong", variant: "body-md/medium", className: h.JN, children: e.name }),
            ],
        }),
    });
}
i.d(
    e,
    {},
    {
        EmojiAddModal: function (t) {
            let {
                    guildId: e,
                    initialTierEmojiIds: i,
                    onSubmit: d,
                    transitionToManageEmoji: o,
                    transitionState: j,
                    onClose: p,
                } = t,
                v = (0, c.A)(e),
                [x, g] = n.useState(new Set()),
                C = x.size > 0;
            return (0, a.jsx)(s.a, {
                transitionState: j,
                onClose: p,
                title: m.intl.string(m.t.xC6tUv),
                actions: [
                    { text: m.intl.string(m.t["ETE/oC"]), variant: "secondary", onClick: p },
                    {
                        text: m.intl.format(m.t.pX74jh, { totalEmoji: x.size }),
                        variant: "primary",
                        onClick: function () {
                            (d(x), p());
                        },
                        disabled: !C,
                    },
                ],
                children: (0, a.jsxs)(r.B, {
                    gap: "md",
                    children: [
                        (0, a.jsx)(l.E, {
                            variant: "body-md/normal",
                            children: m.intl.format(m.t["OnK+C1"], { transitionToManageEmoji: o }),
                        }),
                        null != v &&
                            v.length > 0 &&
                            (0, a.jsx)("div", {
                                className: h.qq,
                                children: v.map((t) =>
                                    null != i && i.has(t.id)
                                        ? null
                                        : (0, a.jsx)(
                                              u,
                                              {
                                                  emoji: t,
                                                  onChange: () => {
                                                      var e;
                                                      return (
                                                          (e = t.id),
                                                          void g((t) => {
                                                              let i = new Set(t);
                                                              return (x.has(e) ? i.delete(e) : i.add(e), i);
                                                          })
                                                      );
                                                  },
                                                  value: x.has(t.id),
                                              },
                                              t.id,
                                          ),
                                ),
                            }),
                    ],
                }),
            });
        },
    },
);
