n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(844222),
    s = n(477782),
    o = n(769297),
    d = n(157559),
    c = n(969632),
    u = n(649963),
    g = n(815807),
    A = n(406704),
    h = n(576705),
    m = n(486020),
    f = n(690521),
    p = n(652215),
    E = n(985018);
function y(e, t) {
    let { reducedMotion: n } = l.useContext(r.C),
        m = (0, A.Id)(t),
        y = (0, a.bG)([h.A], () => h.A.can(p.xBc.MANAGE_MESSAGES, t) && m, [t, m]),
        _ = e.reactions.reduce(
            (e, t) =>
                t.count_details?.vote != null ||
                null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name)
                    ? e
                    : [...e, t.emoji],
            [],
        );
    return !y || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, c.Gh)(e))
        ? null
        : (0, i.jsx)(s.Dr, {
              id: "remove-emoji-reactions",
              label: E.intl.string(E.t["zx/e4P"]),
              leadingAccessory: { type: "icon", icon: o.F },
              color: "danger",
              children: _.map((l) =>
                  (0, i.jsx)(
                      s.Dr,
                      {
                          id: `remove-emoji-reactions-${l.name ?? l.id}`,
                          label: (0, g.b3)(l),
                          action: (n) => {
                              n.shiftKey
                                  ? (0, u.Jf)(t.id, e.id, l)
                                  : d.A.show({
                                        title: E.intl.string(E.t["73GqTz"]),
                                        body: E.intl.string(E.t.dmy5bn),
                                        confirmText: E.intl.string(E.t.p89ACt),
                                        confirmVariant: "critical-primary",
                                        cancelText: E.intl.string(E.t.gm1Vej),
                                        onConfirm: () => {
                                            (0, u.Jf)(t.id, e.id, l);
                                        },
                                    });
                          },
                          leadingAccessory: {
                              type: "emoji",
                              emojiId: l.id,
                              src: null == l.id ? f.Ay.getURL(l.name ?? "") : void 0,
                              animated: l.animated,
                          },
                          icon: (e) => (0, i.jsx)(v, { ...e, reducedMotionEnabled: n.enabled, emoji: l }),
                          dontCloseOnActionIfHoldingShiftKey: !0,
                      },
                      l.name ?? l.id,
                  ),
              ),
          });
}
function v(e) {
    let { emoji: t, reducedMotionEnabled: n, className: l = "", isFocused: a = !1 } = e;
    return (0, i.jsx)("img", {
        className: l,
        src:
            null != t.id
                ? m.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : f.Ay.getURL(t.name ?? ""),
        alt: "",
    });
}
