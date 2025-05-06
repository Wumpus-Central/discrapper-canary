e.d(n, { Z: () => v }), e(388685);
var i = e(255367);
e(73800);
var r = e(442837),
    l = e(481060),
    a = e(239091),
    o = e(596454),
    s = e(339085),
    d = e(883429),
    c = e(456269),
    u = e(665906),
    h = e(592125),
    g = e(710352),
    f = e(388032),
    b = e(939852);
function Z(t) {
    let { tag: n } = t,
        { name: e, emojiId: l, emojiName: a } = n,
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
function v(t) {
    let n = (0, r.e7)([h.Z], () => h.Z.getChannel(t), [t]),
        e = (0, u.C7)(n),
        o = (0, r.e7)([h.Z], () => h.Z.getChannel(null == n ? void 0 : n.parent_id), [n]),
        s = (0, c.Vm)(o),
        b = (0, c.eV)(n),
        v = b.length >= g.Cn,
        p = (0, u.$R)(n);
    if (null == n) return (0, a.Zy)(), null;
    if (!e || __OVERLAY__ || !n.isForumPost() || (null == s ? void 0 : s.length) === 0 || !p) return null;
    let j = (t) => {
            let e = new Set(b);
            if (e.has(t)) e.delete(t);
            else {
                if (v) return;
                e.add(t);
            }
            let i = Array.from(e).map((t) => t.id);
            d.Z.updateForumPostTags(n.id, i);
        },
        m =
            null == s
                ? void 0
                : s.map((t) => {
                      let n = b.includes(t);
                      return (0, i.jsx)(
                          l.S89,
                          {
                              id: t.id,
                              label: (0, i.jsx)(Z, { tag: t }),
                              disabled: v && !n,
                              action: () => j(t),
                              checked: n
                          },
                          t.id
                      );
                  });
    return (0, i.jsx)(l.sNh, {
        id: 'edit-tags',
        label: f.intl.string(f.t['436ZFx']),
        children: m
    });
}
