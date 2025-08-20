i.d(n, { Z: () => b }), i(388685);
var e = i(951288);
i(647438);
var l = i(442837),
    r = i(481060),
    a = i(239091),
    d = i(596454),
    o = i(339085),
    s = i(883429),
    u = i(456269),
    c = i(665906),
    h = i(592125),
    Z = i(710352),
    v = i(388032),
    f = i(433307);
function g(t) {
    let { tag: n } = t,
        { name: i, emojiId: r, emojiName: a } = n,
        s = (0, l.e7)([o.ZP], () => (null != r ? o.ZP.getUsableCustomEmojiById(r) : null));
    return (0, e.jsxs)(e.Fragment, {
        children: [
            null != a || null != r
                ? (0, e.jsx)(d.Z, {
                      className: f.emoji,
                      emojiId: r,
                      emojiName: a,
                      animated: !!(null == s ? void 0 : s.animated),
                  })
                : null,
            i,
        ],
    });
}
function b(t) {
    let n = (0, l.e7)([h.Z], () => h.Z.getChannel(t), [t]),
        i = (0, c.C7)(n),
        d = (0, l.e7)([h.Z], () => h.Z.getChannel(null == n ? void 0 : n.parent_id), [n]),
        o = (0, u.Vm)(d),
        f = (0, u.eV)(n),
        b = f.length >= Z.Cn,
        m = (0, c.$R)(n);
    if (null == n) return (0, a.Zy)(), null;
    if (
        !i ||
        __OVERLAY__ ||
        !n.isForumPost() ||
        (null == o ? void 0 : o.length) === 0 ||
        !m ||
        n.isModeratorReportChannel()
    )
        return null;
    let j =
        null == o
            ? void 0
            : o.map((t) => {
                  let i = f.includes(t);
                  return (0, e.jsx)(
                      r.S89,
                      {
                          id: t.id,
                          label: (0, e.jsx)(g, { tag: t }),
                          disabled: b && !i,
                          action: () =>
                              ((t) => {
                                  let i = new Set(f);
                                  if (i.has(t)) i.delete(t);
                                  else {
                                      if (b) return;
                                      i.add(t);
                                  }
                                  let e = Array.from(i).map((t) => t.id);
                                  s.Z.updateForumPostTags(n.id, e);
                              })(t),
                          checked: i,
                      },
                      t.id,
                  );
              });
    return (0, e.jsx)(r.sNh, {
        id: "edit-tags",
        label: v.intl.string(v.t["436ZFx"]),
        children: j,
    });
}
