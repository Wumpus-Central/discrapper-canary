n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(157559),
    o = n(969632),
    d = n(649963),
    c = n(406704),
    u = n(576705),
    g = n(486020),
    A = n(690521),
    p = n(652215),
    m = n(985018);
function f(e, t) {
    let { reducedMotion: n } = l.useContext(r.CZY),
        g = (0, c.Id)(t),
        f = (0, a.bG)([u.A], () => u.A.can(p.xBc.MANAGE_MESSAGES, t) && g, [t, g]),
        h = e.reactions.reduce(
            (e, t) =>
                t.count_details?.vote != null ||
                null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name)
                    ? e
                    : [...e, t.emoji],
            [],
        );
    return !f || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, o.Gh)(e))
        ? null
        : (0, i.jsx)(r.Drp, {
              id: "remove-emoji-reactions",
              label: m.intl.string(m.t["zx/e4P"]),
              leadingAccessory: { type: "icon", icon: r.FD6 },
              color: "danger",
              children: h.map((l) =>
                  (0, i.jsx)(
                      r.Drp,
                      {
                          id: `remove-emoji-reactions-${l.name ?? l.id}`,
                          label: null == l.id ? l.name : `:${l.name}:`,
                          action: (n) => {
                              n.shiftKey
                                  ? (0, d.Jf)(t.id, e.id, l)
                                  : s.A.show({
                                        title: m.intl.string(m.t["73GqTz"]),
                                        body: m.intl.string(m.t.dmy5bn),
                                        confirmText: m.intl.string(m.t.p89ACt),
                                        confirmVariant: "critical-primary",
                                        cancelText: m.intl.string(m.t.gm1Vej),
                                        onConfirm: () => {
                                            (0, d.Jf)(t.id, e.id, l);
                                        },
                                    });
                          },
                          leadingAccessory: {
                              type: "emoji",
                              emojiId: l.id,
                              src: null == l.id ? A.Ay.getURL(l.name ?? "") : void 0,
                              animated: l.animated,
                          },
                          icon: (e) => (0, i.jsx)(y, { ...e, reducedMotionEnabled: n.enabled, emoji: l }),
                          dontCloseOnActionIfHoldingShiftKey: !0,
                      },
                      l.name ?? l.id,
                  ),
              ),
          });
}
function y(e) {
    let { emoji: t, reducedMotionEnabled: n, className: l = "", isFocused: a = !1 } = e;
    return (0, i.jsx)("img", {
        className: l,
        src:
            null != t.id
                ? g.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : A.Ay.getURL(t.name ?? ""),
        alt: "",
    });
}
