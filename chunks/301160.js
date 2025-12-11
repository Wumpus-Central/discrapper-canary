t.d(i, { EmojiAddModal: () => h }), t(388685);
var a = t(54381),
    n = t(473749),
    o = t(793030),
    s = t(755721),
    l = t(481060),
    r = t(768581),
    m = t(570533),
    c = t(388032),
    d = t(851120);
function j(e) {
    let { emoji: i, onChange: t, value: n } = e,
        o = r.ZP.getEmojiURL({
            id: i.id,
            animated: i.animated,
            size: 24,
        });
    return (0, a.jsx)(s.$q, {
        size: 20,
        className: d.emojiRow,
        onChange: t,
        type: s.M0.INVERTED,
        value: n,
        reverse: !0,
        children: (0, a.jsxs)("div", {
            className: d.emojiLabel,
            children: [
                (0, a.jsx)("img", {
                    className: d.emojiImage,
                    src: o,
                    width: 24,
                    height: 24,
                    alt: "",
                }),
                (0, a.jsx)(l.Text, {
                    color: "text-strong",
                    variant: "text-md/medium",
                    className: d.emojiAlias,
                    children: i.name,
                }),
            ],
        }),
    });
}
function h(e) {
    let {
            guildId: i,
            initialTierEmojiIds: t,
            onSubmit: s,
            transitionToManageEmoji: r,
            transitionState: h,
            onClose: u,
        } = e,
        x = (0, m.Z)(i),
        [g, p] = n.useState(new Set()),
        v = g.size > 0;
    return (0, a.jsx)(o.Modal, {
        transitionState: h,
        onClose: u,
        title: c.intl.string(c.t.xC6tUv),
        actions: [
            {
                text: c.intl.string(c.t["ETE/oC"]),
                variant: "secondary",
                onClick: u,
            },
            {
                text: c.intl.format(c.t.pX74jh, { totalEmoji: g.size }),
                variant: "primary",
                onClick: function () {
                    s(g), u();
                },
                disabled: !v,
            },
        ],
        children: (0, a.jsxs)(l.Kqy, {
            gap: "md",
            children: [
                (0, a.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: c.intl.format(c.t["OnK+C1"], { transitionToManageEmoji: r }),
                }),
                null != x &&
                    x.length > 0 &&
                    (0, a.jsx)("div", {
                        className: d.emojiContainer,
                        children: x.map((e) =>
                            null != t && t.has(e.id)
                                ? null
                                : (0, a.jsx)(
                                      j,
                                      {
                                          emoji: e,
                                          onChange: () => {
                                              var i;
                                              return (
                                                  (i = e.id),
                                                  void p((e) => {
                                                      let t = new Set(e);
                                                      return g.has(i) ? t.delete(i) : t.add(i), t;
                                                  })
                                              );
                                          },
                                          value: g.has(e.id),
                                      },
                                      e.id,
                                  ),
                        ),
                    }),
            ],
        }),
    });
}
