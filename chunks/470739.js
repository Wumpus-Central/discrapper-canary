n.d(t, { _: () => o });
var a = n(477900),
    l = n(277057),
    r = n.n(l),
    i = n(192308);
let s = null;
function o() {
    let {
        initialBadgeId: e,
        targetUserId: t,
        targetUsername: l,
        viewingCurrentUserBadges: o,
        stackingBehavior: d,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    null != s && (0, i.closeModalInAllContexts)(s);
    let c = r()("badge-directory-modal");
    return (
        (s = c),
        (0, i.openModalLazy)(
            async () => {
                let { default: r } = await Promise.all([n.e("578389"), n.e("80561")]).then(n.bind(n, 810568));
                return (n) =>
                    (0, a.jsx)(r, {
                        ...n,
                        initialBadgeId: e,
                        targetUserId: t,
                        targetUsername: l,
                        viewingCurrentUserBadges: o,
                    });
            },
            {
                modalKey: c,
                stackingBehavior: d ?? "stack",
                onCloseCallback: () => {
                    s === c && (s = null);
                },
            },
        )
    );
}
