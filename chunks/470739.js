n.d(t, { _: () => d });
var a = n(627968),
    l = n(296489),
    r = n.n(l),
    s = n(192308);
let i = null;
function d() {
    let {
        initialBadgeId: e,
        targetUserId: t,
        targetUsername: l,
        viewingCurrentUserBadges: d,
        stackingBehavior: o,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    null != i && (0, s.closeModalInAllContexts)(i);
    let c = r()("badge-directory-modal");
    return (
        (i = c),
        (0, s.openModalLazy)(
            async () => {
                let { default: r } = await Promise.all([n.e("58877"), n.e("98400")]).then(n.bind(n, 734883));
                return (n) =>
                    (0, a.jsx)(r, {
                        ...n,
                        initialBadgeId: e,
                        targetUserId: t,
                        targetUsername: l,
                        viewingCurrentUserBadges: d,
                    });
            },
            {
                modalKey: c,
                stackingBehavior: o ?? "stack",
                onCloseCallback: () => {
                    i === c && (i = null);
                },
            },
        )
    );
}
