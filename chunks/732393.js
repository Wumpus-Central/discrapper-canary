t.d(e, { Z: () => Z }), t(388685);
var i = t(255367);
t(73800);
var r = t(442837),
    a = t(481060),
    l = t(239091),
    o = t(596454),
    s = t(339085),
    d = t(883429),
    u = t(456269),
    c = t(665906),
    f = t(592125),
    h = t(710352),
    v = t(388032),
    p = t(939852);
function g(n) {
    let { tag: e } = n,
        { name: t, emojiId: a, emojiName: l } = e,
        d = (0, r.e7)([s.ZP], () => (null != a ? s.ZP.getUsableCustomEmojiById(a) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != l || null != a
                ? (0, i.jsx)(o.Z, {
                      className: p.emoji,
                      emojiId: a,
                      emojiName: l,
                      animated: !!(null == d ? void 0 : d.animated)
                  })
                : null,
            t
        ]
    });
}
function Z(n) {
    let e = (0, r.e7)([f.Z], () => f.Z.getChannel(n), [n]),
        t = (0, c.C7)(e),
        o = (0, r.e7)([f.Z], () => f.Z.getChannel(null == e ? void 0 : e.parent_id), [e]),
        s = (0, u.Vm)(o),
        p = (0, u.eV)(e),
        Z = p.length >= h.Cn,
        C = (0, c.$R)(e);
    if (null == e) return (0, l.Zy)(), null;
    if (!t || __OVERLAY__ || !e.isForumPost() || (null == s ? void 0 : s.length) === 0 || !C || e.isModeratorReportChannel()) return null;
    let b = (n) => {
            let t = new Set(p);
            if (t.has(n)) t.delete(n);
            else {
                if (Z) return;
                t.add(n);
            }
            let i = Array.from(t).map((n) => n.id);
            d.Z.updateForumPostTags(e.id, i);
        },
        m =
            null == s
                ? void 0
                : s.map((n) => {
                      let e = p.includes(n);
                      return (0, i.jsx)(
                          a.S89,
                          {
                              id: n.id,
                              label: (0, i.jsx)(g, { tag: n }),
                              disabled: Z && !e,
                              action: () => b(n),
                              checked: e
                          },
                          n.id
                      );
                  });
    return (0, i.jsx)(a.sNh, {
        id: 'edit-tags',
        label: v.intl.string(v.t['436ZFx']),
        children: m
    });
}
