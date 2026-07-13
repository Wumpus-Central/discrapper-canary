"use strict";
n.d(t, { A: () => s });
var i = n(780964),
    r = n(766075),
    a = n(99206);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (0, r.openUserSettings)(
        (function (e) {
            switch (e) {
                case a.J.MY_GAMES:
                    return i.X.REGISTERED_GAMES_PANEL;
                case a.J.OVERLAY:
                    return i.X.OVERLAY_PANEL;
                case a.J.ACTIVITY_PRIVACY:
                    return i.X.ACTIVITY_PRIVACY_PANEL;
            }
        })(e),
        t,
    );
}
