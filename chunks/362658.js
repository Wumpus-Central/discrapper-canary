n.d(t, {
    Z: () => o,
    z: () => i
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2021-09_favorites_server',
        label: 'Favorites Server',
        defaultConfig: {
            favoritesEnabled: !1,
            canShow: !0,
            isFavoritesPerk: !1,
            hasStaffPrivileges: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Favorites v1 - On',
                config: {
                    favoritesEnabled: !0,
                    canShow: !0,
                    isFavoritesPerk: !1,
                    hasStaffPrivileges: !0
                }
            },
            {
                id: 2,
                label: 'Favorites v1 - Forced Off',
                config: {
                    favoritesEnabled: !1,
                    canShow: !1,
                    isFavoritesPerk: !1,
                    hasStaffPrivileges: !0
                }
            },
            {
                id: 3,
                label: 'Favorites v2',
                config: {
                    favoritesEnabled: !0,
                    canShow: !0,
                    isFavoritesPerk: !0,
                    hasStaffPrivileges: !0
                }
            },
            {
                id: 4,
                label: 'Favorites v2 w/o Staff Privileges',
                config: {
                    favoritesEnabled: !0,
                    canShow: !0,
                    isFavoritesPerk: !0,
                    hasStaffPrivileges: !1
                }
            }
        ]
    }),
    i = (e) => r.useExperiment({ location: e }, { autoTrackExposure: !0 }),
    o = r;
