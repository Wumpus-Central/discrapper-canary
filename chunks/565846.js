e.d(n, { A: () => g });
var i = e(477900);
e(582128);
var r = e(17928),
    l = e(477782),
    a = e(442433),
    d = e(565645),
    s = e(159273),
    o = e(919577),
    u = e(691060),
    c = e(406704),
    h = e(734057),
    A = e(690521);
e(253913);
var m = e(375708);
function g(t) {
    let n = (0, r.bG)([h.A], () => h.A.getChannel(t), [t]),
        e = (0, c.NI)(n),
        g = (0, r.bG)([h.A], () => h.A.getChannel(n?.parent_id), [n]),
        b = (0, u.OT)(g),
        j = (0, u.kt)(n),
        p = j.length >= 5,
        f = (0, c.Id)(n),
        v = (0, r.bG)([s.Ay], () => {
            let t = new Set();
            for (let n of b ?? [])
                if (null != n.emojiId) {
                    let e = s.Ay.getUsableCustomEmojiById(n.emojiId);
                    e?.animated && t.add(n.emojiId);
                }
            return t;
        }, [b]);
    if (null == n) return (0, a.Z_)(), null;
    if (!e || __OVERLAY__ || !n.isForumPost() || b?.length === 0 || !f || n.isModeratorReportChannel()) return null;
    let _ = b?.map((t) => {
        let e = j.includes(t),
            r = null != t.emojiId || null != t.emojiName;
        return (0, i.jsx)(
            l.sL,
            {
                id: t.id,
                label: t.name,
                leftIcon: r
                    ? (0, i.jsx)(d.A, {
                          emojiId: t.emojiId,
                          emojiName: t.emojiName,
                          animated: null != t.emojiId && v.has(t.emojiId),
                      })
                    : void 0,
                leadingAccessory: (function (t, n) {
                    let { emojiId: e, emojiName: i } = t;
                    if (null != e || null != i)
                        return {
                            type: "emoji",
                            emojiId: e,
                            src: null == e && null != i ? A.Ay.getURL(i) : void 0,
                            animated: null != e && n.has(e),
                        };
                })(t, v),
                disabled: p && !e,
                action: () =>
                    (function (t) {
                        if (null == n) return;
                        let e = new Set(j);
                        if (e.has(t)) e.delete(t);
                        else {
                            if (p) return;
                            e.add(t);
                        }
                        let i = Array.from(e).map((t) => t.id);
                        o.A.updateForumPostTags(n.id, i);
                    })(t),
                checked: e,
            },
            t.id,
        );
    });
    return (0, i.jsx)(l.Dr, { id: "edit-tags", label: m.intl.string(m.t["436ZFw"]), children: _ });
}
