i.d(n, {
    A: () => v,
}),
    i(896048);
var e = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(442433),
    d = i(565645),
    s = i(508675),
    o = i(919577),
    u = i(435470),
    c = i(406704),
    h = i(734057);
i(253913);
var A = i(985018),
    g = i(559728);

function b(t) {
    let { tag: n } = t,
        { name: i, emojiId: l, emojiName: a } = n,
        o = (0, r.bG)([s.Ay], () => (null != l ? s.Ay.getUsableCustomEmojiById(l) : null));
    return (0, e.jsxs)(e.Fragment, {
        children: [
            null != a || null != l
                ? (0, e.jsx)(d.A, {
                      className: g.Z,
                      emojiId: l,
                      emojiName: a,
                      animated: !!(null == o ? void 0 : o.animated),
                  })
                : null,
            i,
        ],
    });
}

function v(t) {
    let n = (0, r.bG)([h.A], () => h.A.getChannel(t), [t]),
        i = (0, c.NI)(n),
        d = (0, r.bG)([h.A], () => h.A.getChannel(null == n ? void 0 : n.parent_id), [n]),
        s = (0, u.OT)(d),
        g = (0, u.kt)(n),
        v = g.length >= 5,
        p = (0, c.Id)(n);
    if (null == n) return (0, a.Z_)(), null;
    if (
        !i ||
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
                  let i = g.includes(t);
                  return (0, e.jsx)(
                      l.sLh,
                      {
                          id: t.id,
                          label: (0, e.jsx)(b, {
                              tag: t,
                          }),
                          disabled: v && !i,
                          action: () =>
                              ((t) => {
                                  let i = new Set(g);
                                  if (i.has(t)) i.delete(t);
                                  else {
                                      if (v) return;
                                      i.add(t);
                                  }
                                  let e = Array.from(i).map((t) => t.id);
                                  o.A.updateForumPostTags(n.id, e);
                              })(t),
                          checked: i,
                      },
                      t.id,
                  );
              });
    return (0, e.jsx)(l.Drp, {
        id: "edit-tags",
        label: A.intl.string(A.t["436ZFw"]),
        children: m,
    });
}
