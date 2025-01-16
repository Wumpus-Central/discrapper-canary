e.d(t, {
    Z: function () {
        return m;
    }
}),
    e(47120);
var i = e(200651);
e(192379);
var r = e(442837),
    a = e(481060),
    l = e(239091),
    o = e(596454),
    u = e(339085),
    d = e(883429),
    s = e(456269),
    c = e(665906),
    f = e(592125),
    h = e(710352),
    v = e(388032),
    Z = e(979595);
function C(n) {
    let { tag: t } = n,
        { name: e, emojiId: a, emojiName: l } = t,
        d = (0, r.e7)([u.ZP], () => (null != a ? u.ZP.getUsableCustomEmojiById(a) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != l || null != a
                ? (0, i.jsx)(o.Z, {
                      className: Z.emoji,
                      emojiId: a,
                      emojiName: l,
                      animated: !!(null == d ? void 0 : d.animated)
                  })
                : null,
            e
        ]
    });
}
function m(n) {
    let t = (0, r.e7)([f.Z], () => f.Z.getChannel(n), [n]),
        e = (0, c.C7)(t),
        o = (0, r.e7)([f.Z], () => f.Z.getChannel(null == t ? void 0 : t.parent_id), [t]),
        u = (0, s.Vm)(o),
        Z = (0, s.eV)(t),
        m = Z.length >= h.Cn,
        g = (0, c.$R)(t);
    if (null == t) return (0, l.Zy)(), null;
    if (!e || __OVERLAY__ || !t.isForumPost() || (null == u ? void 0 : u.length) === 0 || !g) return null;
    let p = (n) => {
            let e = new Set(Z);
            if (e.has(n)) e.delete(n);
            else {
                if (m) return;
                e.add(n);
            }
            let i = Array.from(e).map((n) => n.id);
            d.Z.updateForumPostTags(t.id, i);
        },
        E =
            null == u
                ? void 0
                : u.map((n) => {
                      let t = Z.includes(n);
                      return (0, i.jsx)(
                          a.MenuCheckboxItem,
                          {
                              id: n.id,
                              label: (0, i.jsx)(C, { tag: n }),
                              disabled: m && !t,
                              action: () => p(n),
                              checked: t
                          },
                          n.id
                      );
                  });
    return (0, i.jsx)(a.MenuItem, {
        id: 'edit-tags',
        label: v.intl.string(v.t['436ZFx']),
        children: E
    });
}
