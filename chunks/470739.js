n.d(t, { _: () => i });
var r = n(627968),
    l = n(192308);
let i = function () {
    let {
        initialBadgeId: e,
        targetUserId: t,
        targetUsername: i,
        viewingCurrentUserBadges: a,
        stackingBehavior: s,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, l.openModalLazy)(
        async () => {
            let { default: l } = await Promise.all([n.e("53502"), n.e("9473")]).then(n.bind(n, 613752));
            return (n) =>
                (0, r.jsx)(l, {
                    ...n,
                    initialBadgeId: e,
                    targetUserId: t,
                    targetUsername: i,
                    viewingCurrentUserBadges: a,
                });
        },
        { stackingBehavior: s ?? "stack" },
    );
};
