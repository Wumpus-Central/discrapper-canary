n.d(t, {
    k: () => o,
});
var r = n(579872),
    i = n(453771),
    a = n(652215),
    s = n(985018);

function o(e) {
    let { guildId: t, code: n } = e;
    if (n === a.t02.ENTITY_TOO_LARGE) {
        let e = (0, i.o2)(t);
        return (
            r.A.show({
                title: s.intl.string(s.t["/tGlcj"]),
                body: s.intl.formatToPlainString(s.t.fxEKdS, {
                    maxSize: (0, i.Hb)(e),
                }),
            }),
            !0
        );
    }
    return n === a.t02.TOO_MANY_ATTACHMENTS
        ? (r.A.show({
              title: s.intl.string(s.t.wOr6hB),
              body: s.intl.formatToPlainString(s.t["qqyp/e"], {
                  limit: a.XgB,
              }),
          }),
          !0)
        : n === a.t02.ENTITY_EMPTY
          ? (r.A.show({
                title: s.intl.string(s.t.B3vFdU),
                body: s.intl.string(s.t["9ZpT2C"]),
            }),
            !0)
          : n === a.t02.INVALID_FILE_ASSET &&
            (r.A.show({
                title: s.intl.string(s.t.B3vFdU),
                body: s.intl.string(s.t.zMEjJg),
            }),
            !0);
}
