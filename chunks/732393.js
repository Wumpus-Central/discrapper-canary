n.d(t, { Z: () => _ }), n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(239091),
    s = n(596454),
    o = n(339085),
    c = n(883429),
    d = n(456269),
    u = n(665906),
    h = n(592125),
    p = n(710352),
    m = n(388032),
    f = n(769340);
function g(e) {
    let { tag: t } = e,
        { name: n, emojiId: a, emojiName: r } = t,
        c = (0, l.e7)([o.ZP], () => (null != a ? o.ZP.getUsableCustomEmojiById(a) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != r || null != a
                ? (0, i.jsx)(s.Z, {
                      className: f.emoji,
                      emojiId: a,
                      emojiName: r,
                      animated: !!(null == c ? void 0 : c.animated)
                  })
                : null,
            n
        ]
    });
}
function _(e) {
    let t = (0, l.e7)([h.Z], () => h.Z.getChannel(e), [e]),
        n = (0, u.C7)(t),
        s = (0, l.e7)([h.Z], () => h.Z.getChannel(null == t ? void 0 : t.parent_id), [t]),
        o = (0, d.Vm)(s),
        f = (0, d.eV)(t),
        _ = f.length >= p.Cn,
        C = (0, u.$R)(t);
    if (null == t) return (0, r.Zy)(), null;
    if (!n || __OVERLAY__ || !t.isForumPost() || (null == o ? void 0 : o.length) === 0 || !C) return null;
    let x = (e) => {
            let n = new Set(f);
            if (n.has(e)) n.delete(e);
            else {
                if (_) return;
                n.add(e);
            }
            let i = Array.from(n).map((e) => e.id);
            c.Z.updateForumPostTags(t.id, i);
        },
        v =
            null == o
                ? void 0
                : o.map((e) => {
                      let t = f.includes(e);
                      return (0, i.jsx)(
                          a.S89,
                          {
                              id: e.id,
                              label: (0, i.jsx)(g, { tag: e }),
                              disabled: _ && !t,
                              action: () => x(e),
                              checked: t
                          },
                          e.id
                      );
                  });
    return (0, i.jsx)(a.sNh, {
        id: 'edit-tags',
        label: m.intl.string(m.t['436ZFx']),
        children: v
    });
}
