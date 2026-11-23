var a = n(582128),
    s = n(259065),
    i = n(287809),
    r = n(100663);
n.d(
    t,
    {},
    {
        A: function () {
            let { analyticsLocations: e, shouldOpenDisplayNameStyles: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (0, a.useCallback)(() => {
                let n = i.default.getCurrentUser();
                null != n &&
                    (0, r.openUserProfileModal)({
                        userId: n.id,
                        sourceAnalyticsLocations: e,
                        onModalOpen: t
                            ? () => {
                                  (0, s.L)({ analyticsLocations: e ?? [], stackingBehavior: "stack" });
                              }
                            : void 0,
                    });
            }, [e, t]);
        },
    },
);
