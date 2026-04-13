"use strict";
n.d(t, { c: () => a });
var r = n(292348),
    i = n(652215),
    s = n(985018);
function a(e) {
    let t = s.intl.string(s.t.B3vFdU);
    switch (e) {
        case i.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE:
            return { title: t, body: s.intl.formatToPlainString(s.t.DYFPg2, { maxSizeMb: r.YK }) };
        case i.t02.CLOUD_UPLOAD_NOT_FOUND:
            return { title: t, body: s.intl.string(s.t.bQldfH) };
        case i.t02.INVALID_PERMISSIONS:
            return { title: t, body: s.intl.string(s.t.zl4Weq) };
        default:
            return null;
    }
}
