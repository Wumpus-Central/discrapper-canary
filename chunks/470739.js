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
                            t.e(144909),
                            t.e(512831),
                            t.e(188941),
                            t.e(314243),
                            t.e(463095),
                            t.e(710911),
                            t.e(482815),
                            t.e(90373),
                            t.e(920282),
                            t.e(195468),
                            t.e(517087),
                        ]).then(t.bind(t, 319842));
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
