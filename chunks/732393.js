e.d(t, { Z: () => v }), e(388685);
var i = e(255367);
e(73800);
var r = e(442837),
    l = e(481060),
    a = e(239091),
    o = e(596454),
    s = e(339085),
    d = e(883429),
    u = e(456269),
    c = e(665906),
    h = e(592125),
    g = e(710352),
    f = e(388032),
    b = e(518235);
function Z(n) {
    let { tag: t } = n,
        { name: e, emojiId: l, emojiName: a } = t,
        d = (0, r.e7)([s.ZP], () => (null != l ? s.ZP.getUsableCustomEmojiById(l) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != a || null != l
                ? (0, i.jsx)(o.Z, {
                      className: b.emoji,
                      emojiId: l,
                      emojiName: a,
                      animated: !!(null == d ? void 0 : d.animated)
                  })
                : null,
            e
        ]
    });
}
function v(n) {
    let t = (0, r.e7)([h.Z], () => h.Z.getChannel(n), [n]),
        e = (0, c.C7)(t),
        o = (0, r.e7)([h.Z], () => h.Z.getChannel(null == t ? void 0 : t.parent_id), [t]),
        s = (0, u.Vm)(o),
        b = (0, u.eV)(t),
        v = b.length >= g.Cn,
        p = (0, c.$R)(t);
    if (null == t) return (0, a.Zy)(), null;
    if (!e || __OVERLAY__ || !t.isForumPost() || (null == s ? void 0 : s.length) === 0 || !p) return null;
    let j = (n) => {
            let e = new Set(b);
            if (e.has(n)) e.delete(n);
            else {
                if (v) return;
                e.add(n);
            }
            let i = Array.from(e).map((n) => n.id);
            d.Z.updateForumPostTags(t.id, i);
        },
        m =
            null == s
                ? void 0
                : s.map((n) => {
                      let t = b.includes(n);
                      return (0, i.jsx)(
                          l.S89,
                          {
                              id: n.id,
                              label: (0, i.jsx)(Z, { tag: n }),
                              disabled: v && !t,
                              action: () => j(n),
                              checked: t
                          },
                          n.id
                      );
                  });
    return (0, i.jsx)(l.sNh, {
        id: 'edit-tags',
        label: f.intl.string(f.t['436ZFx']),
        children: m
    });
}
