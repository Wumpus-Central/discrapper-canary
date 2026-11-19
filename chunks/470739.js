var n = t(477900),
    r = t(277057),
    l = t.n(r),
    i = t(192308);
let d = null;
t.d(
    a,
    {},
    {
        openBadgeDirectoryModal: function () {
            let {
                initialBadgeId: e,
                targetUserId: a,
                targetUsername: r,
                viewingCurrentUserBadges: s,
                stackingBehavior: o,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            null != d && (0, i.CT)(d);
            let c = l()("badge-directory-modal");
            return (
                (d = c),
                (0, i.mM)(
                    async () => {
                        let { default: l } = await Promise.all([
                            t.e(431510),
                            t.e(485480),
                            t.e(399437),
                            t.e(463095),
                            t.e(710911),
                            t.e(90373),
                            t.e(332875),
                            t.e(571180),
                            t.e(32944),
                            t.e(312064),
                            t.e(143075),
                        ]).then(t.bind(t, 110766));
                        return (t) =>
                            (0, n.jsx)(l, {
                                ...t,
                                initialBadgeId: e,
                                targetUserId: a,
                                targetUsername: r,
                                viewingCurrentUserBadges: s,
                            });
                    },
                    {
                        modalKey: c,
                        stackingBehavior: o ?? "stack",
                        onCloseCallback: () => {
                            d === c && (d = null);
                        },
                    },
                )
            );
        },
    },
);
