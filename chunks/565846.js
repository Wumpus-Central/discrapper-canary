i.d(n, { A: () => b });
var e = i(627968);
i(64700);
var l = i(17928),
    r = i(477782),
    a = i(442433),
    s = i(565645),
    d = i(159273),
    o = i(919577),
    u = i(435470),
    c = i(406704),
    A = i(734057),
    h = i(690521);
i(253913);
var g = i(985018);
function b(t) {
    let n = (0, l.bG)([A.A], () => A.A.getChannel(t), [t]),
        i = (0, c.NI)(n),
        b = (0, l.bG)([A.A], () => A.A.getChannel(n?.parent_id), [n]),
        m = (0, u.OT)(b),
        f = (0, u.kt)(n),
        j = f.length >= 5,
        v = (0, c.Id)(n),
        p = (0, l.bG)([d.Ay], () => {
            let t = new Set();
            for (let n of m ?? [])
                if (null != n.emojiId) {
                    let i = d.Ay.getUsableCustomEmojiById(n.emojiId);
                    i?.animated && t.add(n.emojiId);
                }
            return t;
        }, [m]);
    if (null == n) return (0, a.Z_)(), null;
    if (!i || __OVERLAY__ || !n.isForumPost() || m?.length === 0 || !v || n.isModeratorReportChannel()) return null;
    let x = m?.map((t) => {
        let i = f.includes(t),
            l = null != t.emojiId || null != t.emojiName;
        return (0, e.jsx)(
            r.sL,
            {
                id: t.id,
                label: t.name,
                leftIcon: l
                    ? (0, e.jsx)(s.A, {
                          emojiId: t.emojiId,
                          emojiName: t.emojiName,
                          animated: null != t.emojiId && p.has(t.emojiId),
                      })
                    : void 0,
                leadingAccessory: (function (t, n) {
                    let { emojiId: i, emojiName: e } = t;
                    if (null != i || null != e)
                        return {
                            type: "emoji",
                            emojiId: i,
                            src: null == i && null != e ? h.Ay.getURL(e) : void 0,
                            animated: null != i && n.has(i),
                        };
                })(t, p),
                disabled: j && !i,
                action: () =>
                    ((t) => {
                        let i = new Set(f);
                        if (i.has(t)) i.delete(t);
                        else {
                            if (j) return;
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
    return (0, e.jsx)(r.Dr, { id: "edit-tags", label: g.intl.string(g.t["436ZFw"]), children: x });
}
