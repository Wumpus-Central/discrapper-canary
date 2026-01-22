a.d(t, { EmojiAddModal: () => u }), a(896048);
var i = a(627968),
    n = a(64700),
    s = a(158954),
    d = a(421380),
    l = a(397927),
    r = a(486020),
    c = a(320137),
    o = a(985018),
    m = a(887369);
function h(e) {
    let { emoji: t, onChange: a, value: n } = e,
        s = r.Ay.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 24,
        });
    return (0, i.jsx)(d.Kj, {
        size: 20,
        className: m.nI,
        onChange: a,
        type: d.Xo.INVERTED,
        value: n,
        reverse: !0,
        children: (0, i.jsxs)("div", {
            className: m.H1,
            children: [
                (0, i.jsx)("img", {
                    className: m.mp,
                    src: s,
                    width: 24,
                    height: 24,
                    alt: "",
                }),
                (0, i.jsx)(l.Text, {
                    color: "text-strong",
                    variant: "text-md/medium",
                    className: m.JN,
                    children: t.name,
                }),
            ],
        }),
    });
}
function u(e) {
    let {
            guildId: t,
            initialTierEmojiIds: a,
            onSubmit: d,
            transitionToManageEmoji: r,
            transitionState: u,
            onClose: x,
        } = e,
        j = (0, c.A)(t),
        [p, f] = n.useState(new Set()),
        v = p.size > 0;
    return (0, i.jsx)(s.Modal, {
        transitionState: u,
        onClose: x,
        title: o.intl.string(o.t.xC6tUv),
        actions: [
            {
                text: o.intl.string(o.t["ETE/oC"]),
                variant: "secondary",
                onClick: x,
            },
            {
                text: o.intl.format(o.t.pX74jh, { totalEmoji: p.size }),
                variant: "primary",
                onClick: function () {
                    d(p), x();
                },
                disabled: !v,
            },
        ],
        children: (0, i.jsxs)(l.BJc, {
            gap: "md",
            children: [
                (0, i.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: o.intl.format(o.t["OnK+C1"], { transitionToManageEmoji: r }),
                }),
                null != j &&
                    j.length > 0 &&
                    (0, i.jsx)("div", {
                        className: m.qq,
                        children: j.map((e) =>
                            null != a && a.has(e.id)
                                ? null
                                : (0, i.jsx)(
                                      h,
                                      {
                                          emoji: e,
                                          onChange: () => {
                                              var t;
                                              return (
                                                  (t = e.id),
                                                  void f((e) => {
                                                      let a = new Set(e);
                                                      return p.has(t) ? a.delete(t) : a.add(t), a;
                                                  })
                                              );
                                          },
                                          value: p.has(e.id),
                                      },
                                      e.id,
                                  ),
                        ),
                    }),
            ],
        }),
    });
}
