n.d(e, { Z: () => N }), n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    l = n(239091),
    s = n(596454),
    o = n(339085),
    d = n(883429),
    c = n(456269),
    u = n(665906),
    h = n(592125),
    g = n(710352),
    f = n(388032),
    b = n(939852);
function Z(t) {
    let { tag: e } = t,
        { name: n, emojiId: a, emojiName: l } = e,
        d = (0, r.e7)([o.ZP], () => (null != a ? o.ZP.getUsableCustomEmojiById(a) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != l || null != a
                ? (0, i.jsx)(s.Z, {
                      className: b.emoji,
                      emojiId: a,
                      emojiName: l,
                      animated: !!(null == d ? void 0 : d.animated)
                  })
                : null,
            n
        ]
    });
}
function N(t) {
    let e = (0, r.e7)([h.Z], () => h.Z.getChannel(t), [t]),
        n = (0, u.C7)(e),
        s = (0, r.e7)([h.Z], () => h.Z.getChannel(null == e ? void 0 : e.parent_id), [e]),
        o = (0, c.Vm)(s),
        b = (0, c.eV)(e),
        N = b.length >= g.Cn,
        v = (0, u.$R)(e);
    if (null == e) return (0, l.Zy)(), null;
    if (!n || __OVERLAY__ || !e.isForumPost() || (null == o ? void 0 : o.length) === 0 || !v) return null;
    let p = (t) => {
            let n = new Set(b);
            if (n.has(t)) n.delete(t);
            else {
                if (N) return;
                n.add(t);
            }
            let i = Array.from(n).map((t) => t.id);
            d.Z.updateForumPostTags(e.id, i);
        },
        j =
            null == o
                ? void 0
                : o.map((t) => {
                      let e = b.includes(t);
                      return (0, i.jsx)(
                          a.S89,
                          {
                              id: t.id,
                              label: (0, i.jsx)(Z, { tag: t }),
                              disabled: N && !e,
                              action: () => p(t),
                              checked: e
                          },
                          t.id
                      );
                  });
    return (0, i.jsx)(a.sNh, {
        id: 'edit-tags',
        label: f.NW.string(f.t['436ZFx']),
        children: j
    });
}
