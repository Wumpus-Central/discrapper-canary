"use strict";
n.d(t, { A: () => s });
var r = n(155718),
    i = n(723702);
function s(e) {
    let t;
    return (t = (0, i.isIOS)() ? r.Yl.IOS : (0, i.isAndroid)() ? r.Yl.ANDROID : r.Yl.WEB), e?.includes(t) ?? !1;
}
