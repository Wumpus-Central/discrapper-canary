n.d(e, { A: () => r });
var l = n(780964),
    i = n(766075),
    a = n(99206);
function r(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
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
        e,
    );
}
