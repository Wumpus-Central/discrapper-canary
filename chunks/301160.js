t.d(i, { EmojiAddModal: () => h }), t(388685);
var a = t(54381),
    n = t(473749),
    o = t(793030),
    s = t(755721),
    l = t(481060),
    r = t(768581),
    m = t(570533),
    d = t(388032),
    c = t(811725);
function j(e) {
    let { emoji: i, onChange: t, value: n } = e,
        o = r.ZP.getEmojiURL({
            id: i.id,
            animated: i.animated,
            size: 24,
        });
    return (0, a.jsx)(s.$q, {
        size: 20,
        className: c.emojiRow,
        onChange: t,
        type: s.M0.INVERTED,
        value: n,
        reverse: !0,
        children: (0, a.jsxs)("div", {
            className: c.emojiLabel,
            children: [
                (0, a.jsx)("img", {
                    className: c.emojiImage,
                    src: o,
                    width: 24,
                    height: 24,
                    alt: "",
                }),
                (0, a.jsx)(l.Text, {
                    color: "header-primary",
                    variant: "text-md/medium",
                    className: c.emojiAlias,
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
        [p, v] = n.useState(new Set()),
        C = p.size > 0;
    return (0, a.jsx)(o.Modal, {
        transitionState: h,
        onClose: u,
        title: d.intl.string(d.t.xC6tUv),
        actions: [
            {
                text: d.intl.string(d.t["ETE/oC"]),
                variant: "secondary",
                onClick: u,
            },
            {
                text: d.intl.format(d.t.pX74jh, { totalEmoji: p.size }),
                variant: "primary",
                onClick: function () {
                    s(p), u();
                },
                disabled: !C,
            },
        ],
        children: (0, a.jsxs)(l.Kqy, {
            gap: "md",
            children: [
                (0, a.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: d.intl.format(d.t["OnK+C1"], { transitionToManageEmoji: r }),
                }),
                null != x &&
                    x.length > 0 &&
                    (0, a.jsx)("div", {
                        className: c.emojiContainer,
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
                                                  void v((e) => {
                                                      let t = new Set(e);
                                                      return p.has(i) ? t.delete(i) : t.add(i), t;
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
