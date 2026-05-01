"use strict";
n.d(t, { k: () => l });
var i = n(139033),
    r = n(453771),
    s = n(292348),
    a = n(652215),
    o = n(375708);
function l(e) {
    let { guildId: t, code: n } = e;
    if (void 0 === n) return !1;
    if (n === a.t02.ENTITY_TOO_LARGE) {
        let e = (0, r.o2)(t);
        return (
            (0, i.A)({
                title: o.intl.string(o.t["/tGlcj"]),
                subtitle: o.intl.formatToPlainString(o.t.fxEKdS, { maxSize: (0, r.Hb)(e) }),
            }),
            !0
        );
    }
    if (n === a.t02.TOO_MANY_ATTACHMENTS)
        return (
            (0, i.A)({
                title: o.intl.string(o.t.wOr6hB),
                subtitle: o.intl.formatToPlainString(o.t["qqyp/e"], { limit: a.XgB }),
            }),
            !0
        );
    if (n === a.t02.ENTITY_EMPTY)
        return (0, i.A)({ title: o.intl.string(o.t.B3vFdU), subtitle: o.intl.string(o.t["9ZpT2C"]) }), !0;
    if (n === a.t02.INVALID_FILE_ASSET)
        return (0, i.A)({ title: o.intl.string(o.t.B3vFdU), subtitle: o.intl.string(o.t.zMEjJg) }), !0;
    let l = (function (e) {
        let t = o.intl.string(o.t.B3vFdU);
        switch (e) {
            case a.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE:
                return { title: t, body: o.intl.formatToPlainString(o.t.DYFPg2, { maxSizeMb: s.YK }) };
            case a.t02.CLOUD_UPLOAD_NOT_FOUND:
                return { title: t, body: o.intl.string(o.t.bQldfH) };
            case a.t02.INVALID_PERMISSIONS:
                return { title: t, body: o.intl.string(o.t.zl4Weq) };
            default:
                return null;
        }
    })(n);
    return null != l && ((0, i.A)({ title: l.title, subtitle: l.body }), !0);
}
