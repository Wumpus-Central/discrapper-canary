n.d(e, { A: () => h });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(442433),
    s = n(565645),
    d = n(508675),
    o = n(919577),
    u = n(435470),
    c = n(406704),
    A = n(734057),
    g = n(690521);
n(253913);
var f = n(985018);
function h(t) {
    let e = (0, r.bG)([A.A], () => A.A.getChannel(t), [t]),
        n = (0, c.NI)(e),
        h = (0, r.bG)([A.A], () => A.A.getChannel(e?.parent_id), [e]),
        p = (0, u.OT)(h),
        m = (0, u.kt)(e),
        v = m.length >= 5,
        b = (0, c.Id)(e),
        _ = (0, r.bG)([d.Ay], () => {
            let t = new Set();
            for (let e of p ?? [])
                if (null != e.emojiId) {
                    let n = d.Ay.getUsableCustomEmojiById(e.emojiId);
                    n?.animated && t.add(e.emojiId);
                }
            return t;
        }, [p]);
    if (null == e) return (0, a.Z_)(), null;
    if (!n || __OVERLAY__ || !e.isForumPost() || p?.length === 0 || !b || e.isModeratorReportChannel()) return null;
    let C = p?.map((t) => {
        let n = m.includes(t),
            r = null != t.emojiId || null != t.emojiName;
        return (0, i.jsx)(
            l.sLh,
            {
                id: t.id,
                label: t.name,
                leftIcon: r
                    ? (0, i.jsx)(s.A, {
                          emojiId: t.emojiId,
                          emojiName: t.emojiName,
                          animated: null != t.emojiId && _.has(t.emojiId),
                      })
                    : void 0,
                leadingAccessory: (function (t, e) {
                    let { emojiId: n, emojiName: i } = t;
                    if (null != n || null != i)
                        return {
                            type: "emoji",
                            emojiId: n,
                            src: null == n && null != i ? g.Ay.getURL(i) : void 0,
                            animated: null != n && e.has(n),
                        };
                })(t, _),
                disabled: v && !n,
                action: () =>
                    ((t) => {
                        let n = new Set(m);
                        if (n.has(t)) n.delete(t);
                        else {
                            if (v) return;
                            n.add(t);
                        }
                        let i = Array.from(n).map((t) => t.id);
                        o.A.updateForumPostTags(e.id, i);
                    })(t),
                checked: n,
            },
            t.id,
        );
    });
    return (0, i.jsx)(l.Drp, { id: "edit-tags", label: f.intl.string(f.t["436ZFw"]), children: C });
}
