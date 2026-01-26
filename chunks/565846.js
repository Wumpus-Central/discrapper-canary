i.d(n, {
    A: () => m,
}),
    i(896048);
var e = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(442433),
    d = i(565645),
    o = i(508675),
    s = i(919577),
    u = i(435470),
    c = i(406704),
    h = i(734057),
    A = i(690521);
i(253913);
var g = i(985018);

function m(t) {
    let n = (0, r.bG)([h.A], () => h.A.getChannel(t), [t]),
        i = (0, c.NI)(n),
        m = (0, r.bG)([h.A], () => h.A.getChannel(null == n ? void 0 : n.parent_id), [n]),
        v = (0, u.OT)(m),
        b = (0, u.kt)(n),
        p = b.length >= 5,
        f = (0, c.Id)(n),
        j = (0, r.bG)([o.Ay], () => {
            let t = new Set();
            for (let n of null != v ? v : [])
                if (null != n.emojiId) {
                    let i = o.Ay.getUsableCustomEmojiById(n.emojiId);
                    (null == i ? void 0 : i.animated) && t.add(n.emojiId);
                }
            return t;
        }, [v]);
    if (null == n) return (0, a.Z_)(), null;
    if (
        !i ||
        __OVERLAY__ ||
        !n.isForumPost() ||
        (null == v ? void 0 : v.length) === 0 ||
        !f ||
        n.isModeratorReportChannel()
    )
        return null;
    let _ =
        null == v
            ? void 0
            : v.map((t) => {
                  let i = b.includes(t),
                      r = null != t.emojiId || null != t.emojiName;
                  return (0, e.jsx)(
                      l.sLh,
                      {
                          id: t.id,
                          label: t.name,
                          leftIcon: r
                              ? (0, e.jsx)(d.A, {
                                    emojiId: t.emojiId,
                                    emojiName: t.emojiName,
                                    animated: null != t.emojiId && j.has(t.emojiId),
                                })
                              : void 0,
                          leadingAccessory: (function (t, n) {
                              let { emojiId: i, emojiName: e } = t;
                              if (null != i || null != e)
                                  return {
                                      type: "emoji",
                                      emojiId: i,
                                      src: null == i && null != e ? A.Ay.getURL(e) : void 0,
                                      animated: null != i && n.has(i),
                                  };
                          })(t, j),
                          disabled: p && !i,
                          action: () =>
                              ((t) => {
                                  let i = new Set(b);
                                  if (i.has(t)) i.delete(t);
                                  else {
                                      if (p) return;
                                      i.add(t);
                                  }
                                  let e = Array.from(i).map((t) => t.id);
                                  s.A.updateForumPostTags(n.id, e);
                              })(t),
                          checked: i,
                      },
                      t.id,
                  );
              });
    return (0, e.jsx)(l.Drp, {
        id: "edit-tags",
        label: g.intl.string(g.t["436ZFw"]),
        children: _,
    });
}
