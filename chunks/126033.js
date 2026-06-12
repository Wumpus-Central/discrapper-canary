i.d(e, { EmojiAddModal: () => j });
var a = i(627968),
    n = i(64700),
    s = i(189213),
    l = i(27192),
    r = i(834730),
    d = i(331322),
    o = i(486020),
    c = i(320137),
    m = i(375708),
    h = i(240640);
function u(t) {
    let { emoji: e, onChange: i, value: n } = t,
        s = o.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 24 });
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
                (0, a.jsx)(r.E, { color: "text-strong", variant: "text-md/medium", className: h.JN, children: e.name }),
            ],
        }),
    });
}
function j(t) {
    let {
            guildId: e,
            initialTierEmojiIds: i,
            onSubmit: l,
            transitionToManageEmoji: o,
            transitionState: j,
            onClose: x,
        } = t,
        p = (0, c.A)(e),
        [v, g] = n.useState(new Set()),
        C = v.size > 0;
    return (0, a.jsx)(s.Modal, {
        transitionState: j,
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
                disabled: !C,
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
                        children: p.map((t) =>
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
                                                      return v.has(e) ? i.delete(e) : i.add(e), i;
                                                  })
                                              );
                                          },
                                          value: v.has(t.id),
                                      },
                                      t.id,
                                  ),
                        ),
                    }),
            ],
        }),
    });
}
