n.d(t, { _: () => l });
var a = n(627968),
    r = n(192308);
function l() {
    let {
        initialBadgeId: e,
        targetUserId: t,
        targetUsername: l,
        viewingCurrentUserBadges: i,
        stackingBehavior: s,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.openModalLazy)(
        async () => {
            let { default: r } = await Promise.all([n.e("58877"), n.e("28971")]).then(n.bind(n, 546214));
            return (n) =>
                (0, a.jsx)(r, {
                    ...n,
                    initialBadgeId: e,
                    targetUserId: t,
                    targetUsername: l,
                    viewingCurrentUserBadges: i,
                });
        },
        { stackingBehavior: s ?? "stack" },
    );
}
