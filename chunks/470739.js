n.d(t, { _: () => d });
var a = n(627968),
    r = n(296489),
    l = n.n(r),
    i = n(192308);
let s = null;
function d() {
    let {
        initialBadgeId: e,
        targetUserId: t,
        targetUsername: r,
        viewingCurrentUserBadges: d,
        stackingBehavior: o,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    null != s && (0, i.closeModalInAllContexts)(s);
    let c = l()("badge-directory-modal");
    return (
        (s = c),
        (0, i.openModalLazy)(
            async () => {
                let { default: l } = await Promise.all([n.e("17277"), n.e("28971")]).then(n.bind(n, 546214));
                return (n) =>
                    (0, a.jsx)(l, {
                        ...n,
                        initialBadgeId: e,
                        targetUserId: t,
                        targetUsername: r,
                        viewingCurrentUserBadges: d,
                    });
            },
            {
                modalKey: c,
                stackingBehavior: o ?? "stack",
                onCloseCallback: () => {
                    s === c && (s = null);
                },
            },
        )
    );
}
