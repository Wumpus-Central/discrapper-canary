t.d(e, { A: () => o });
var l = t(627968);
t(64700);
var i = t(17928),
    a = t(477782),
    d = t(192308),
    r = t(994500),
    s = t(375708);
function o(n) {
    let { user: e, onAction: o, appContext: u } = n,
        c = e.id,
        [A, b] = (0, i.yK)([r.A], () => [r.A.isFriend(c), r.A.getNickname(c) ?? null], [c]);
    if (!A) return null;
    let p = null == b ? s.intl.string(s.t.BGYkaH) : s.intl.string(s.t["8pOYUE"]);
    return (0, l.jsx)(a.Dr, {
        id: null == b ? "add-friend-nickname" : "edit-friend-nickname",
        label: p,
        action: () => {
            o?.(),
                (0, d.openModalLazy)(
                    async () => {
                        let { default: n } = await Promise.all([t.e("72811"), t.e("88941"), t.e("59139")]).then(
                            t.bind(t, 609422),
                        );
                        return (t) => (0, l.jsx)(n, { user: e, nickname: b, ...t });
                    },
                    { contextKey: null != u ? (0, d.modalContextFromAppContext)(u) : void 0 },
                );
        },
    });
}
