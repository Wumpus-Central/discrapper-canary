i.d(t, { EmojiAddModal: () => j });
var a = i(627968),
    n = i(64700),
    s = i(158954),
    l = i(421380),
    r = i(397927),
    d = i(486020),
    o = i(320137),
    c = i(985018),
    m = i(66335);
function h(e) {
    let { emoji: t, onChange: i, value: n } = e,
        s = d.Ay.getEmojiURL({ id: t.id, animated: t.animated, size: 24 });
    return (0, a.jsx)(l.Kj, {
        size: 20,
        className: m.nI,
        onChange: i,
        type: l.Xo.INVERTED,
        value: n,
        reverse: !0,
        children: (0, a.jsxs)("div", {
            className: m.H1,
            children: [
                (0, a.jsx)("img", { className: m.mp, src: s, width: 24, height: 24, alt: "" }),
                (0, a.jsx)(r.Text, {
                    color: "text-strong",
                    variant: "text-md/medium",
                    className: m.JN,
                    children: t.name,
                }),
            ],
        }),
    });
}
function j(e) {
    let {
            guildId: t,
            initialTierEmojiIds: i,
            onSubmit: l,
            transitionToManageEmoji: d,
            transitionState: j,
            onClose: u,
        } = e,
        x = (0, o.A)(t),
        [p, v] = n.useState(new Set()),
        _ = p.size > 0;
    return (0, a.jsx)(s.Modal, {
        transitionState: j,
        onClose: u,
        title: c.intl.string(c.t.xC6tUv),
        actions: [
            { text: c.intl.string(c.t["ETE/oC"]), variant: "secondary", onClick: u },
            {
                text: c.intl.format(c.t.pX74jh, { totalEmoji: p.size }),
                variant: "primary",
                onClick: function () {
                    l(p), u();
                },
                disabled: !_,
            },
        ],
        children: (0, a.jsxs)(r.BJc, {
            gap: "md",
            children: [
                (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: c.intl.format(c.t["OnK+C1"], { transitionToManageEmoji: d }),
                }),
                null != x &&
                    x.length > 0 &&
                    (0, a.jsx)("div", {
                        className: m.qq,
                        children: x.map((e) =>
                            null != i && i.has(e.id)
                                ? null
                                : (0, a.jsx)(
                                      h,
                                      {
                                          emoji: e,
                                          onChange: () => {
                                              var t;
                                              return (
                                                  (t = e.id),
                                                  void v((e) => {
                                                      let i = new Set(e);
                                                      return p.has(t) ? i.delete(t) : i.add(t), i;
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
