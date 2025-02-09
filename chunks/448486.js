l.d(t, { _: () => o });
var n = l(192379),
    s = l(442837),
    r = l(594174),
    a = l(823379),
    i = l(51144),
    u = l(388032);
function o(e) {
    let t = (0, s.Wu)([r.default], () =>
        e.recipients
            .map((e) => r.default.getUser(e))
            .filter(a.lm)
            .map((e) => i.ZP.getName(e))
    );
    return n.useMemo(
        () =>
            '' === e.name
                ? null
                : (function (e) {
                      if (0 === e.length) return null;
                      if (1 === e.length) return u.intl.formatToPlainString(u.t['J+Wpsr'], { first: e[0] });
                      if (2 === e.length)
                          return u.intl.formatToPlainString(u.t.gwRP0d, {
                              first: e[0],
                              second: e[1]
                          });
                      if (3 === e.length)
                          return u.intl.formatToPlainString(u.t.QDB5en, {
                              first: e[0],
                              second: e[1],
                              third: e[2]
                          });
                      let t = e.length - 3;
                      return u.intl.formatToPlainString(u.t.VYfueX, {
                          first: e[0],
                          second: e[1],
                          third: e[2],
                          count: t
                      });
                  })(t),
        [e, t]
    );
}
