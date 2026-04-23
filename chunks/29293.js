n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var l = n(17928),
    a = n(477782),
    r = n(192308),
    d = n(994500),
    o = n(985018);
function s(e) {
    let { user: t, onAction: s, appContext: u } = e,
        c = t.id,
        [A, g] = (0, l.yK)([d.A], () => [d.A.isFriend(c), d.A.getNickname(c) ?? null], [c]);
    if (!A) return null;
    let f = null == g ? o.intl.string(o.t.BGYkaH) : o.intl.string(o.t["8pOYUE"]);
    return (0, i.jsx)(a.Dr, {
        id: null == g ? "add-friend-nickname" : "edit-friend-nickname",
        label: f,
        action: () => {
            s?.(),
                (0, r.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("59139").then(n.bind(n, 609422));
                        return (n) => (0, i.jsx)(e, { user: t, nickname: g, ...n });
                    },
                    { contextKey: null != u ? (0, r.modalContextFromAppContext)(u) : void 0 },
                );
        },
    });
}
