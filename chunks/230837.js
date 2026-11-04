var l = e(780964),
    i = e(766075),
    a = e(99206);
e.d(
    n,
    {},
    {
        A: function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (0, i.openUserSettings)(
                (function (t) {
                    switch (t) {
                        case a.J.MY_GAMES:
                            return l.X.REGISTERED_GAMES_PANEL;
                        case a.J.OVERLAY:
                            return l.X.OVERLAY_PANEL;
                        case a.J.ACTIVITY_PRIVACY:
                            return l.X.ACTIVITY_PRIVACY_PANEL;
                    }
                })(t),
                n,
            );
        },
    },
);
