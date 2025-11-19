e.d(n, { Z: () => m }), e(388685);
var i = e(54381);
e(473749);
var a = e(442837),
    l = e(481060),
    r = e(239091),
    s = e(596454),
    o = e(339085),
    d = e(883429),
    u = e(456269),
    c = e(665906),
    h = e(592125),
    f = e(710352),
    g = e(388032),
    v = e(907729);
function Z(t) {
    let { tag: n } = t,
        { name: e, emojiId: l, emojiName: r } = n,
        d = (0, a.e7)([o.ZP], () => (null != l ? o.ZP.getUsableCustomEmojiById(l) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != r || null != l
                ? (0, i.jsx)(s.Z, {
                      className: v.emoji,
                      emojiId: l,
                      emojiName: r,
                      animated: !!(null == d ? void 0 : d.animated),
                  })
                : null,
            e,
        ],
    });
}
function m(t) {
    let n = (0, a.e7)([h.Z], () => h.Z.getChannel(t), [t]),
        e = (0, c.C7)(n),
        s = (0, a.e7)([h.Z], () => h.Z.getChannel(null == n ? void 0 : n.parent_id), [n]),
        o = (0, u.Vm)(s),
        v = (0, u.eV)(n),
        m = v.length >= f.Cn,
        b = (0, c.$R)(n);
    if (null == n) return (0, r.Zy)(), null;
    if (
        !e ||
        __OVERLAY__ ||
        !n.isForumPost() ||
        (null == o ? void 0 : o.length) === 0 ||
        !b ||
        n.isModeratorReportChannel()
    )
        return null;
    let p =
        null == o
            ? void 0
            : o.map((t) => {
                  let e = v.includes(t);
                  return (0, i.jsx)(
                      l.S89,
                      {
                          id: t.id,
                          label: (0, i.jsx)(Z, { tag: t }),
                          disabled: m && !e,
                          action: () =>
                              ((t) => {
                                  let e = new Set(v);
                                  if (e.has(t)) e.delete(t);
                                  else {
                                      if (m) return;
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
        label: g.intl.string(g.t["436ZFw"]),
        children: p,
    });
}
