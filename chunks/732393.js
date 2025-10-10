e.d(n, { Z: () => b }), e(388685);
var i = e(951288);
e(647438);
var a = e(442837),
    l = e(481060),
    r = e(239091),
    o = e(596454),
    s = e(339085),
    d = e(883429),
    u = e(456269),
    c = e(665906),
    f = e(592125),
    h = e(710352),
    v = e(388032),
    g = e(433307);
function Z(t) {
    let { tag: n } = t,
        { name: e, emojiId: l, emojiName: r } = n,
        d = (0, a.e7)([s.ZP], () => (null != l ? s.ZP.getUsableCustomEmojiById(l) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != r || null != l
                ? (0, i.jsx)(o.Z, {
                      className: g.emoji,
                      emojiId: l,
                      emojiName: r,
                      animated: !!(null == d ? void 0 : d.animated),
                  })
                : null,
            e,
        ],
    });
}
function b(t) {
    let n = (0, a.e7)([f.Z], () => f.Z.getChannel(t), [t]),
        e = (0, c.C7)(n),
        o = (0, a.e7)([f.Z], () => f.Z.getChannel(null == n ? void 0 : n.parent_id), [n]),
        s = (0, u.Vm)(o),
        g = (0, u.eV)(n),
        b = g.length >= h.Cn,
        p = (0, c.$R)(n);
    if (null == n) return (0, r.Zy)(), null;
    if (
        !e ||
        __OVERLAY__ ||
        !n.isForumPost() ||
        (null == s ? void 0 : s.length) === 0 ||
        !p ||
        n.isModeratorReportChannel()
    )
        return null;
    let m =
        null == s
            ? void 0
            : s.map((t) => {
                  let e = g.includes(t);
                  return (0, i.jsx)(
                      l.S89,
                      {
                          id: t.id,
                          label: (0, i.jsx)(Z, { tag: t }),
                          disabled: b && !e,
                          action: () =>
                              ((t) => {
                                  let e = new Set(g);
                                  if (e.has(t)) e.delete(t);
                                  else {
                                      if (b) return;
                                      e.add(t);
                                  }
                                  let i = Array.from(e).map((t) => t.id);
                                  d.Z.updateForumPostTags(n.id, i);
                              })(t),
                          checked: e,
                      },
                      t.id,
                  );
              });
    return (0, i.jsx)(l.sNh, {
        id: "edit-tags",
        label: v.intl.string(v.t["436ZFx"]),
        children: m,
    });
}
