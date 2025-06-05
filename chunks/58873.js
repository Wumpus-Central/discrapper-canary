n.d(t, { A: () => s });
var r = n(240872),
    i = n(403182),
    a = n(981631),
    o = n(388032);
function s(e) {
    let { guildId: t, code: n } = e;
    if (n === a.evJ.ENTITY_TOO_LARGE) {
        let e = (0, i.dg)(t);
        return (
            r.Z.show({
                title: o.intl.string(o.t['/tGlcn']),
                body: o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: (0, i.Ng)(e) })
            }),
            !0
        );
    }
    return n === a.evJ.TOO_MANY_ATTACHMENTS
        ? (r.Z.show({
              title: o.intl.string(o.t.wOr6hI),
              body: o.intl.formatToPlainString(o.t['qqyp/f'], { limit: a.dN1 })
          }),
          !0)
        : (n === a.evJ.ENTITY_EMPTY &&
              r.Z.show({
                  title: o.intl.string(o.t.B3vFdX),
                  body: o.intl.string(o.t['9ZpT2N'])
              }),
          !1);
}
