n.d(t, { A: () => s });
var r = n(240872),
    i = n(403182),
    o = n(981631),
    a = n(388032);
function s(e) {
    let { guildId: t, code: n, onRecoverDraft: s } = e;
    if (n === o.evJ.ENTITY_TOO_LARGE) {
        null == s || s();
        let e = (0, i.dg)(t);
        return (
            r.Z.show({
                title: a.intl.string(a.t['/tGlcn']),
                body: a.intl.formatToPlainString(a.t.fxEKdX, { maxSize: (0, i.Ng)(e) })
            }),
            !0
        );
    }
    return n === o.evJ.TOO_MANY_ATTACHMENTS
        ? (null == s || s(),
          r.Z.show({
              title: a.intl.string(a.t.wOr6hI),
              body: a.intl.formatToPlainString(a.t['qqyp/f'], { limit: o.dN1 })
          }),
          !0)
        : (n === o.evJ.ENTITY_EMPTY &&
              (null == s || s(),
              r.Z.show({
                  title: a.intl.string(a.t.B3vFdX),
                  body: a.intl.string(a.t['9ZpT2N'])
              })),
          !1);
}
