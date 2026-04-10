"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(565645),
    a = n(375499),
    o = n(937773),
    d = n(690521),
    c = n(997509),
    u = n(307731),
    m = n(985018),
    g = n(663684);
let x = { label: "" };
function h(e) {
    let { emoji: t, disabled: n, handleSelectEmoji: c } = e,
        m = s.useRef(null),
        g = s.useMemo(
            () =>
                null == t || null == t.name
                    ? null
                    : function () {
                          let e = d.Ay.isCustomEmoji(t) ? t.name : t.surrogates;
                          return (0, i.jsx)(r.A, { animated: t.animated ?? !1, emojiId: t.id, emojiName: e });
                      },
            [t],
        );
    return n
        ? (0, i.jsx)(a.A, { tabIndex: -1, active: !1, renderButtonContents: g })
        : (0, i.jsx)(l.YNO, {
              targetElementRef: m,
              position: "bottom",
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(o.A, {
                      closePopout: t,
                      onSelectEmoji: c(t),
                      pickerIntention: u.EmojiIntention.GUILD_PROFILE,
                  });
              },
              children: (e, t) => {
                  let { isShown: n } = t;
                  return (0, i.jsx)(a.A, { ...e, ref: m, tabIndex: 0, active: n, renderButtonContents: g });
              },
          });
}
function _(e) {
    let { guildId: t, trait: n, index: r, onTraitUpdate: a, disabled: o } = e,
        d = s.useCallback(() => {
            a(t, r, { emoji: void 0, label: "" });
        }, [t, r, a]),
        c = s.useCallback(
            (e) => (n) => {
                let { emoji: i, willClose: s } = n;
                a(t, r, { emoji: i ?? void 0 }), s && e();
            },
            [t, r, a],
        ),
        u = s.useCallback(
            (e) => {
                a(t, r, { label: e });
            },
            [t, r, a],
        ),
        m = s.useMemo(() => n.emoji, [n.emoji]),
        x = (null != n.label && n.label.length > 0) || null != n.emoji;
    return (0, i.jsx)("div", {
        className: g.II,
        children: (0, i.jsx)(l.ksK, {
            disabled: o,
            value: n.label,
            onChange: u,
            maxLength: 24,
            leading: { type: "emoji", button: (0, i.jsx)(h, { emoji: m, disabled: o, handleSelectEmoji: c }) },
            clearable: { show: x },
            onClear: d,
        }),
    });
}
let A = [0, 1, 2, 3, 4];
function p(e) {
    let { profile: t, canManageGuild: n } = e,
        r = s.useMemo(() => t.traits, [t]),
        a = s.useCallback(
            (e, t, n) => {
                let i = [...r];
                (i[t] = { ...r[t], ...n }), c.A.updateGuildProfile(e, { traits: i });
            },
            [r],
        );
    return (0, i.jsx)(l.D0$, {
        label: m.intl.string(m.t.S6JNrh),
        description: m.intl.string(m.t.l7Ig5Z),
        children: (0, i.jsx)("div", {
            className: g.Vg,
            children: A.map((e) =>
                (0, i.jsx)(
                    _,
                    { guildId: t.id, trait: r[e] ?? x, index: e, onTraitUpdate: a, disabled: !n },
                    `trait-${e}`,
                ),
            ),
        }),
    });
}
