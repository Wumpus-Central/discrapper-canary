n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(994500),
    d = n(985018);
function o(e) {
    let { user: t, onAction: o, appContext: s } = e,
        u = t.id,
        [c, A] = (0, i.yK)([r.A], () => [r.A.isFriend(u), r.A.getNickname(u) ?? null], [u]);
    if (!c) return null;
    let g = null == A ? d.intl.string(d.t.BGYkaH) : d.intl.string(d.t["8pOYUE"]);
    return (0, l.jsx)(a.Drp, {
        id: null == A ? "add-friend-nickname" : "edit-friend-nickname",
        label: g,
        action: () => {
            o?.(),
                (0, a.mMO)(
                    async () => {
                        let { default: e } = await n.e("59139").then(n.bind(n, 609422));
                        return (n) => (0, l.jsx)(e, { user: t, nickname: A, ...n });
                    },
                    { contextKey: null != s ? (0, a.TId)(s) : void 0 },
                );
        },
    });
}
