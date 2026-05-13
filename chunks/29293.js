e.d(t, { A: () => o });
var i = e(627968);
e(64700);
var l = e(17928),
    a = e(477782),
    d = e(192308),
    r = e(994500),
    s = e(375708);
function o(n) {
    let { user: t, onAction: o, appContext: u } = n,
        c = t.id,
        [A, b] = (0, l.yK)([r.A], () => [r.A.isFriend(c), r.A.getNickname(c) ?? null], [c]);
    if (!A) return null;
    let p = null == b ? s.intl.string(s.t.BGYkaH) : s.intl.string(s.t["8pOYUE"]);
    return (0, i.jsx)(a.Dr, {
        id: null == b ? "add-friend-nickname" : "edit-friend-nickname",
        label: p,
        action: () => {
            o?.(),
                (0, d.openModalLazy)(
                    async () => {
                        let { default: n } = await Promise.all([e.e("93010"), e.e("88941"), e.e("59139")]).then(
                            e.bind(e, 609422),
                        );
                        return (e) => (0, i.jsx)(n, { user: t, nickname: b, ...e });
                    },
                    { contextKey: null != u ? (0, d.modalContextFromAppContext)(u) : void 0 },
                );
        },
    });
}
