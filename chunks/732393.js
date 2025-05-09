e.d(t, { Z: () => Z }), e(388685);
var i = e(255367);
e(73800);
var r = e(442837),
    l = e(481060),
    a = e(239091),
    o = e(596454),
    u = e(339085),
    d = e(883429),
    s = e(456269),
    c = e(665906),
    f = e(592125),
    h = e(710352),
    v = e(388032),
    g = e(939852);
function p(n) {
    let { tag: t } = n,
        { name: e, emojiId: l, emojiName: a } = t,
        d = (0, r.e7)([u.ZP], () => (null != l ? u.ZP.getUsableCustomEmojiById(l) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != a || null != l
                ? (0, i.jsx)(o.Z, {
                      className: g.emoji,
                      emojiId: l,
                      emojiName: a,
                      animated: !!(null == d ? void 0 : d.animated)
                  })
                : null,
            e
        ]
    });
}
function Z(n) {
    let t = (0, r.e7)([f.Z], () => f.Z.getChannel(n), [n]),
        e = (0, c.C7)(t),
        o = (0, r.e7)([f.Z], () => f.Z.getChannel(null == t ? void 0 : t.parent_id), [t]),
        u = (0, s.Vm)(o),
        g = (0, s.eV)(t),
        Z = g.length >= h.Cn,
        C = (0, c.$R)(t);
    if (null == t) return (0, a.Zy)(), null;
    if (!e || __OVERLAY__ || !t.isForumPost() || (null == u ? void 0 : u.length) === 0 || !C) return null;
    let E = (n) => {
            let e = new Set(g);
            if (e.has(n)) e.delete(n);
            else {
                if (Z) return;
                e.add(n);
            }
            let i = Array.from(e).map((n) => n.id);
            d.Z.updateForumPostTags(t.id, i);
        },
        b =
            null == u
                ? void 0
                : u.map((n) => {
                      let t = g.includes(n);
                      return (0, i.jsx)(
                          l.S89,
                          {
                              id: n.id,
                              label: (0, i.jsx)(p, { tag: n }),
                              disabled: Z && !t,
                              action: () => E(n),
                              checked: t
                          },
                          n.id
                      );
                  });
    return (0, i.jsx)(l.sNh, {
        id: 'edit-tags',
        label: v.intl.string(v.t['436ZFx']),
        children: b
    });
}
