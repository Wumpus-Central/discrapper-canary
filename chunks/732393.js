e.d(t, { Z: () => C }), e(47120);
var i = e(200651);
e(192379);
var a = e(442837),
    l = e(481060),
    r = e(239091),
    d = e(596454),
    o = e(339085),
    s = e(883429),
    u = e(456269),
    c = e(665906),
    h = e(592125),
    f = e(710352),
    v = e(388032),
    Z = e(928188);
function g(n) {
    let { tag: t } = n,
        { name: e, emojiId: l, emojiName: r } = t,
        s = (0, a.e7)([o.ZP], () => (null != l ? o.ZP.getUsableCustomEmojiById(l) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != r || null != l
                ? (0, i.jsx)(d.Z, {
                      className: Z.emoji,
                      emojiId: l,
                      emojiName: r,
                      animated: !!(null == s ? void 0 : s.animated)
                  })
                : null,
            e
        ]
    });
}
function C(n) {
    let t = (0, a.e7)([h.Z], () => h.Z.getChannel(n), [n]),
        e = (0, c.C7)(t),
        d = (0, a.e7)([h.Z], () => h.Z.getChannel(null == t ? void 0 : t.parent_id), [t]),
        o = (0, u.Vm)(d),
        Z = (0, u.eV)(t),
        C = Z.length >= f.Cn,
        p = (0, c.$R)(t);
    if (null == t) return (0, r.Zy)(), null;
    if (!e || __OVERLAY__ || !t.isForumPost() || (null == o ? void 0 : o.length) === 0 || !p) return null;
    let E = (n) => {
            let e = new Set(Z);
            if (e.has(n)) e.delete(n);
            else {
                if (C) return;
                e.add(n);
            }
            let i = Array.from(e).map((n) => n.id);
            s.Z.updateForumPostTags(t.id, i);
        },
        m =
            null == o
                ? void 0
                : o.map((n) => {
                      let t = Z.includes(n);
                      return (0, i.jsx)(
                          l.S89,
                          {
                              id: n.id,
                              label: (0, i.jsx)(g, { tag: n }),
                              disabled: C && !t,
                              action: () => E(n),
                              checked: t
                          },
                          n.id
                      );
                  });
    return (0, i.jsx)(l.sNh, {
        id: 'edit-tags',
        label: v.intl.string(v.t['436ZFx']),
        children: m
    });
}
