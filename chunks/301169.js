"use strict";
n.d(t, { k: () => l });
var r = n(139033),
    i = n(453771),
    s = n(685408),
    a = n(652215),
    o = n(985018);
function l(e) {
    let { guildId: t, code: n } = e;
    if (void 0 === n) return !1;
    if (n === a.t02.ENTITY_TOO_LARGE) {
        let e = (0, i.o2)(t);
        return (
            (0, r.A)({
                title: o.intl.string(o.t["/tGlcj"]),
                subtitle: o.intl.formatToPlainString(o.t.fxEKdS, { maxSize: (0, i.Hb)(e) }),
            }),
            !0
        );
    }
    if (n === a.t02.TOO_MANY_ATTACHMENTS)
        return (
            (0, r.A)({
                title: o.intl.string(o.t.wOr6hB),
                subtitle: o.intl.formatToPlainString(o.t["qqyp/e"], { limit: a.XgB }),
            }),
            !0
        );
    if (n === a.t02.ENTITY_EMPTY)
        return (0, r.A)({ title: o.intl.string(o.t.B3vFdU), subtitle: o.intl.string(o.t["9ZpT2C"]) }), !0;
    if (n === a.t02.INVALID_FILE_ASSET)
        return (0, r.A)({ title: o.intl.string(o.t.B3vFdU), subtitle: o.intl.string(o.t.zMEjJg) }), !0;
    let l = (0, s.c)(n);
    return null != l && ((0, r.A)({ title: l.title, subtitle: l.body }), !0);
}
