"use strict";
n.d(t, { i: () => s }), n(582128), n(17928);
var i = n(617617);
n(287809);
var r = n(428262),
    a = n(965162);
function s(e) {
    var t;
    let n,
        s = i.A.settings;
    return (
        (t = s.voiceAndVideo?.videoBackgroundFilterDesktop),
        (n = (0, a.Hk)(t, e.id)),
        (0, a.d1)(n) && !r.Ay.canUseCustomBackgrounds(e) ? null : "number" != typeof n || (0, a.pR)(n) ? n : null
    );
}
