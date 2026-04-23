n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(265872),
    r = n(292666),
    a = n(452027),
    o = n(565645),
    d = n(375499),
    c = n(937773),
    u = n(690521),
    m = n(997509),
    g = n(307731),
    h = n(985018),
    x = n(946964);
let _ = { label: "" };
function p(e) {
    let { emoji: t, disabled: n, handleSelectEmoji: r } = e,
        a = l.useRef(null),
        m = l.useMemo(
            () =>
                null == t || null == t.name
                    ? null
                    : function () {
                          let e = u.Ay.isCustomEmoji(t) ? t.name : t.surrogates;
                          return (0, i.jsx)(o.A, { animated: t.animated ?? !1, emojiId: t.id, emojiName: e });
                      },
            [t],
        );
    return n
        ? (0, i.jsx)(d.A, { tabIndex: -1, active: !1, renderButtonContents: m })
        : (0, i.jsx)(s.Y, {
              targetElementRef: a,
              position: "bottom",
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(c.A, {
                      closePopout: t,
                      onSelectEmoji: r(t),
                      pickerIntention: g.EmojiIntention.GUILD_PROFILE,
                  });
              },
              children: (e, t) => {
                  let { isShown: n } = t;
                  return (0, i.jsx)(d.A, { ...e, ref: a, tabIndex: 0, active: n, renderButtonContents: m });
              },
          });
}
function A(e) {
    let { guildId: t, trait: n, index: s, onTraitUpdate: a, disabled: o } = e,
        d = l.useCallback(() => {
            a(t, s, { emoji: void 0, label: "" });
        }, [t, s, a]),
        c = l.useCallback(
            (e) => (n) => {
                let { emoji: i, willClose: l } = n;
                a(t, s, { emoji: i ?? void 0 }), l && e();
            },
            [t, s, a],
        ),
        u = l.useCallback(
            (e) => {
                a(t, s, { label: e });
            },
            [t, s, a],
        ),
        m = l.useMemo(() => n.emoji, [n.emoji]),
        g = (null != n.label && n.label.length > 0) || null != n.emoji;
    return (0, i.jsx)("div", {
        className: x.II,
        children: (0, i.jsx)(r.k, {
            disabled: o,
            value: n.label,
            onChange: u,
            maxLength: 24,
            leading: { type: "emoji", button: (0, i.jsx)(p, { emoji: m, disabled: o, handleSelectEmoji: c }) },
            clearable: { show: g },
            onClear: d,
        }),
    });
}
let E = [0, 1, 2, 3, 4];
function f(e) {
    let { profile: t, canManageGuild: n } = e,
        s = l.useMemo(() => t.traits, [t]),
        r = l.useCallback(
            (e, t, n) => {
                let i = [...s];
                (i[t] = { ...s[t], ...n }), m.A.updateGuildProfile(e, { traits: i });
            },
            [s],
        );
    return (0, i.jsx)(a.D, {
        label: h.intl.string(h.t.S6JNrh),
        description: h.intl.string(h.t.l7Ig5Z),
        children: (0, i.jsx)("div", {
            className: x.Vg,
            children: E.map((e) =>
                (0, i.jsx)(
                    A,
                    { guildId: t.id, trait: s[e] ?? _, index: e, onTraitUpdate: r, disabled: !n },
                    `trait-${e}`,
                ),
            ),
        }),
    });
}
