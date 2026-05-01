"use strict";
n.d(t, { A: () => s });
var i = n(155718),
    r = n(723702);
function s(e) {
    let t;
    return (t = (0, r.isIOS)() ? i.Yl.IOS : (0, r.isAndroid)() ? i.Yl.ANDROID : i.Yl.WEB), e?.includes(t) ?? !1;
}
