e.d(t, { Z: () => v }), e(388685);
var i = e(200651);
e(192379);
var l = e(442837),
    r = e(481060),
    a = e(239091),
    o = e(596454),
    s = e(339085),
    d = e(883429),
    u = e(456269),
    c = e(665906),
    h = e(592125),
    g = e(710352),
    f = e(388032),
    Z = e(939852);
function b(n) {
    let { tag: t } = n,
        { name: e, emojiId: r, emojiName: a } = t,
        d = (0, l.e7)([s.ZP], () => (null != r ? s.ZP.getUsableCustomEmojiById(r) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != a || null != r
                ? (0, i.jsx)(o.Z, {
                      className: Z.emoji,
                      emojiId: r,
                      emojiName: a,
                      animated: !!(null == d ? void 0 : d.animated)
                  })
                : null,
            e
        ]
    });
}
function v(n) {
    let t = (0, l.e7)([h.Z], () => h.Z.getChannel(n), [n]),
        e = (0, c.C7)(t),
        o = (0, l.e7)([h.Z], () => h.Z.getChannel(null == t ? void 0 : t.parent_id), [t]),
        s = (0, u.Vm)(o),
        Z = (0, u.eV)(t),
        v = Z.length >= g.Cn,
        p = (0, c.$R)(t);
    if (null == t) return (0, a.Zy)(), null;
    if (!e || __OVERLAY__ || !t.isForumPost() || (null == s ? void 0 : s.length) === 0 || !p) return null;
    let j = (n) => {
            let e = new Set(Z);
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
                      let t = Z.includes(n);
                      return (0, i.jsx)(
                          r.S89,
                          {
                              id: n.id,
                              label: (0, i.jsx)(b, { tag: n }),
                              disabled: v && !t,
                              action: () => j(n),
                              checked: t
                          },
                          n.id
                      );
                  });
    return (0, i.jsx)(r.sNh, {
        id: 'edit-tags',
        label: f.intl.string(f.t['436ZFx']),
        children: m
    });
}
