var i = t(477900);
t(582128);
var r = t(855986),
    l = t(477782),
    a = t(442433),
    o = t(565645),
    d = t(121681),
    s = t(919577),
    u = t(691060),
    c = t(406704),
    h = t(734057),
    m = t(690521);
t(253913);
var A = t(792996);
t.d(
    e,
    {},
    {
        A: function (n) {
            let e = (0, r.bG)([h.A], () => h.A.getChannel(n), [n]),
                t = (0, c.NI)(e),
                g = (0, r.bG)([h.A], () => h.A.getChannel(e?.parent_id), [e]),
                b = (0, u.OT)(g),
                p = (0, u.kt)(e),
                j = p.length >= 5,
                f = (0, c.Id)(e),
                I = (0, r.bG)(
                    [d.Ay],
                    () => {
                        let n = new Set();
                        for (let e of b ?? [])
                            if (null != e.emojiId) {
                                let t = d.Ay.getUsableCustomEmojiById(e.emojiId);
                                t?.animated && n.add(e.emojiId);
                            }
                        return n;
                    },
                    [b],
                );
            if (null == e) return ((0, a.Z_)(), null);
            if (!t || __OVERLAY__ || !e.isForumPost() || b?.length === 0 || !f || e.isModeratorReportChannel())
                return null;
            let _ = b?.map((n) => {
                let t = p.includes(n),
                    r = null != n.emojiId || null != n.emojiName;
                return (0, i.jsx)(
                    l.sL,
                    {
                        id: n.id,
                        label: n.name,
                        leftIcon: r
                            ? (0, i.jsx)(o.A, {
                                  emojiId: n.emojiId,
                                  emojiName: n.emojiName,
                                  animated: null != n.emojiId && I.has(n.emojiId),
                              })
                            : void 0,
                        leadingAccessory: (function (n, e) {
                            let { emojiId: t, emojiName: i } = n;
                            if (null != t || null != i)
                                return {
                                    type: "emoji",
                                    emojiId: t,
                                    src: null == t && null != i ? m.Ay.getURL(i) : void 0,
                                    animated: null != t && e.has(t),
                                };
                        })(n, I),
                        disabled: j && !t,
                        action: () =>
                            (function (n) {
                                if (null == e) return;
                                let t = new Set(p);
                                if (t.has(n)) t.delete(n);
                                else {
                                    if (j) return;
                                    t.add(n);
                                }
                                let i = Array.from(t).map((n) => n.id);
                                s.A.updateForumPostTags(e.id, i);
                            })(n),
                        checked: t,
                    },
                    n.id,
                );
            });
            return (0, i.jsx)(l.Dr, { id: "edit-tags", label: A.intl.string(A.t["436ZFw"]), children: _ });
        },
    },
);
