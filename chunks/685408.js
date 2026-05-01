"use strict";
n.d(t, { c: () => a });
var i = n(292348),
    r = n(652215),
    s = n(985018);
function a(e) {
    let t = s.intl.string(s.t.B3vFdU);
    switch (e) {
        case r.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE:
            return { title: t, body: s.intl.formatToPlainString(s.t.DYFPg2, { maxSizeMb: i.YK }) };
        case r.t02.CLOUD_UPLOAD_NOT_FOUND:
            return { title: t, body: s.intl.string(s.t.bQldfH) };
        case r.t02.INVALID_PERMISSIONS:
            return { title: t, body: s.intl.string(s.t.zl4Weq) };
        default:
            return null;
    }
}
