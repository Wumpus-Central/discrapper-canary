n.d(t, { A: () => r }), n(938796);
var i = n(821418),
    l = n(665260),
    a = n(340837);
let r = {
    canAcceptInvite: function (e, t) {
        let [n] = e,
            { guild: r } = t;
        return (
            !(null != r && (0, l.Lt)(n.getSelfMember(r.id)?.flags ?? 0, a.D.IS_GUEST)) ||
            (0, l.Lt)(t.flags ?? 0, i.Q.IS_GUEST_INVITE)
        );
    },
};
