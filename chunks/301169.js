n.d(t, { k: () => o });
var i = n(139033),
    r = n(453771),
    l = n(685408),
    a = n(652215),
    s = n(985018);
function o(e) {
    let { guildId: t, code: n } = e;
    if (void 0 === n) return !1;
    if (n === a.t02.ENTITY_TOO_LARGE) {
        let e = (0, r.o2)(t);
        return (
            (0, i.A)({
                title: s.intl.string(s.t["/tGlcj"]),
                subtitle: s.intl.formatToPlainString(s.t.fxEKdS, { maxSize: (0, r.Hb)(e) }),
            }),
            !0
        );
    }
    if (n === a.t02.TOO_MANY_ATTACHMENTS)
        return (
            (0, i.A)({
                title: s.intl.string(s.t.wOr6hB),
                subtitle: s.intl.formatToPlainString(s.t["qqyp/e"], { limit: a.XgB }),
            }),
            !0
        );
    if (n === a.t02.ENTITY_EMPTY)
        return (0, i.A)({ title: s.intl.string(s.t.B3vFdU), subtitle: s.intl.string(s.t["9ZpT2C"]) }), !0;
    if (n === a.t02.INVALID_FILE_ASSET)
        return (0, i.A)({ title: s.intl.string(s.t.B3vFdU), subtitle: s.intl.string(s.t.zMEjJg) }), !0;
    let o = (0, l.c)(n);
    return null != o && ((0, i.A)({ title: o.title, subtitle: o.body }), !0);
}
