n.d(t, { Z: () => b }), n(388685);
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(239091),
    o = n(596454),
    s = n(339085),
    c = n(883429),
    u = n(456269),
    d = n(665906),
    p = n(592125),
    h = n(710352),
    f = n(388032),
    m = n(939852);
function g(e) {
    let { tag: t } = e,
        { name: n, emojiId: l, emojiName: a } = t,
        c = (0, i.e7)([s.ZP], () => (null != l ? s.ZP.getUsableCustomEmojiById(l) : null));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != a || null != l
                ? (0, r.jsx)(o.Z, {
                      className: m.emoji,
                      emojiId: l,
                      emojiName: a,
                      animated: !!(null == c ? void 0 : c.animated)
                  })
                : null,
            n
        ]
    });
}
function b(e) {
    let t = (0, i.e7)([p.Z], () => p.Z.getChannel(e), [e]),
        n = (0, d.C7)(t),
        o = (0, i.e7)([p.Z], () => p.Z.getChannel(null == t ? void 0 : t.parent_id), [t]),
        s = (0, u.Vm)(o),
        m = (0, u.eV)(t),
        b = m.length >= h.Cn,
        _ = (0, d.$R)(t);
    if (null == t) return (0, a.Zy)(), null;
    if (!n || __OVERLAY__ || !t.isForumPost() || (null == s ? void 0 : s.length) === 0 || !_ || t.isModeratorReportChannel()) return null;
    let y = (e) => {
            let n = new Set(m);
            if (n.has(e)) n.delete(e);
            else {
                if (b) return;
                n.add(e);
            }
            let r = Array.from(n).map((e) => e.id);
            c.Z.updateForumPostTags(t.id, r);
        },
        x =
            null == s
                ? void 0
                : s.map((e) => {
                      let t = m.includes(e);
                      return (0, r.jsx)(
                          l.S89,
                          {
                              id: e.id,
                              label: (0, r.jsx)(g, { tag: e }),
                              disabled: b && !t,
                              action: () => y(e),
                              checked: t
                          },
                          e.id
                      );
                  });
    return (0, r.jsx)(l.sNh, {
        id: 'edit-tags',
        label: f.intl.string(f.t['436ZFx']),
        children: x
    });
}
