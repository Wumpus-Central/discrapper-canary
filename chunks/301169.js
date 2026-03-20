"use strict";
n.d(t, { k: () => o });
var r = n(139033),
    i = n(453771),
    s = n(652215),
    a = n(985018);
function o(e) {
    let { guildId: t, code: n } = e;
    if (n === s.t02.ENTITY_TOO_LARGE) {
        let e = (0, i.o2)(t);
        return (
            (0, r.A)({
                title: a.intl.string(a.t["/tGlcj"]),
                subtitle: a.intl.formatToPlainString(a.t.fxEKdS, { maxSize: (0, i.Hb)(e) }),
            }),
            !0
        );
    }
    return n === s.t02.TOO_MANY_ATTACHMENTS
        ? ((0, r.A)({
              title: a.intl.string(a.t.wOr6hB),
              subtitle: a.intl.formatToPlainString(a.t["qqyp/e"], { limit: s.XgB }),
          }),
          !0)
        : n === s.t02.ENTITY_EMPTY
          ? ((0, r.A)({ title: a.intl.string(a.t.B3vFdU), subtitle: a.intl.string(a.t["9ZpT2C"]) }), !0)
          : n === s.t02.INVALID_FILE_ASSET &&
            ((0, r.A)({ title: a.intl.string(a.t.B3vFdU), subtitle: a.intl.string(a.t.zMEjJg) }), !0);
}
