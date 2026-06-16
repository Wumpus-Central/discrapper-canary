n.d(t, { _: () => i });
var l = n(627968),
    r = n(192308);
let i = function () {
    let {
        initialBadgeId: e,
        targetUserId: t,
        targetUsername: i,
        viewingCurrentUserBadges: a,
        stackingBehavior: s,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.openModalLazy)(
        async () => {
            let { default: r } = await Promise.all([n.e("53502"), n.e("82085")]).then(n.bind(n, 60100));
            return (n) =>
                (0, l.jsx)(r, {
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
