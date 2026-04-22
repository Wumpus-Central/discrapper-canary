i.d(t, { EmojiAddModal: () => u });
var a = i(627968),
    n = i(64700),
    s = i(189213),
    l = i(27192),
    r = i(834730),
    d = i(331322),
    o = i(486020),
    c = i(320137),
    m = i(985018),
    h = i(240640);
function j(e) {
    let { emoji: t, onChange: i, value: n } = e,
        s = o.Ay.getEmojiURL({ id: t.id, animated: t.animated, size: 24 });
    return (0, a.jsx)(l.Kj, {
        size: 20,
        className: h.nI,
        onChange: i,
        type: l.Or.INVERTED,
        value: n,
        reverse: !0,
        children: (0, a.jsxs)("div", {
            className: h.H1,
            children: [
                (0, a.jsx)("img", { className: h.mp, src: s, width: 24, height: 24, alt: "" }),
                (0, a.jsx)(r.E, { color: "text-strong", variant: "text-md/medium", className: h.JN, children: t.name }),
            ],
        }),
    });
}
function u(e) {
    let {
            guildId: t,
            initialTierEmojiIds: i,
            onSubmit: l,
            transitionToManageEmoji: o,
            transitionState: u,
            onClose: x,
        } = e,
        p = (0, c.A)(t),
        [v, _] = n.useState(new Set()),
        g = v.size > 0;
    return (0, a.jsx)(s.Modal, {
        transitionState: u,
        onClose: x,
        title: m.intl.string(m.t.xC6tUv),
        actions: [
            { text: m.intl.string(m.t["ETE/oC"]), variant: "secondary", onClick: x },
            {
                text: m.intl.format(m.t.pX74jh, { totalEmoji: v.size }),
                variant: "primary",
                onClick: function () {
                    l(v), x();
                },
                disabled: !g,
            },
        ],
        children: (0, a.jsxs)(d.B, {
            gap: "md",
            children: [
                (0, a.jsx)(r.E, {
                    variant: "text-md/normal",
                    children: m.intl.format(m.t["OnK+C1"], { transitionToManageEmoji: o }),
                }),
                null != p &&
                    p.length > 0 &&
                    (0, a.jsx)("div", {
                        className: h.qq,
                        children: p.map((e) =>
                            null != i && i.has(e.id)
                                ? null
                                : (0, a.jsx)(
                                      j,
                                      {
                                          emoji: e,
                                          onChange: () => {
                                              var t;
                                              return (
                                                  (t = e.id),
                                                  void _((e) => {
                                                      let i = new Set(e);
                                                      return v.has(t) ? i.delete(t) : i.add(t), i;
                                                  })
                                              );
                                          },
                                          value: v.has(e.id),
                                      },
                                      e.id,
                                  ),
                        ),
                    }),
            ],
        }),
    });
}
