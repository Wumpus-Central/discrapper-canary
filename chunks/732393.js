e.d(n, { Z: () => b }), e(388685);
var i = e(951288);
e(647438);
var l = e(442837),
    a = e(481060),
    r = e(239091),
    o = e(596454),
    s = e(339085),
    d = e(883429),
    u = e(456269),
    c = e(665906),
    f = e(592125),
    h = e(710352),
    g = e(388032),
    v = e(433307);
function Z(t) {
    let { tag: n } = t,
        { name: e, emojiId: a, emojiName: r } = n,
        d = (0, l.e7)([s.ZP], () => (null != a ? s.ZP.getUsableCustomEmojiById(a) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != r || null != a
                ? (0, i.jsx)(o.Z, {
                      className: v.emoji,
                      emojiId: a,
                      emojiName: r,
                      animated: !!(null == d ? void 0 : d.animated),
                  })
                : null,
            e,
        ],
    });
}
function b(t) {
    let n = (0, l.e7)([f.Z], () => f.Z.getChannel(t), [t]),
        e = (0, c.C7)(n),
        o = (0, l.e7)([f.Z], () => f.Z.getChannel(null == n ? void 0 : n.parent_id), [n]),
        s = (0, u.Vm)(o),
        v = (0, u.eV)(n),
        b = v.length >= h.Cn,
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
                  let e = v.includes(t);
                  return (0, i.jsx)(
                      a.S89,
                      {
                          id: t.id,
                          label: (0, i.jsx)(Z, { tag: t }),
                          disabled: b && !e,
                          action: () =>
                              ((t) => {
                                  let e = new Set(v);
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
    return (0, i.jsx)(a.sNh, {
        id: "edit-tags",
        label: g.intl.string(g.t["436ZFx"]),
        children: m,
    });
}
