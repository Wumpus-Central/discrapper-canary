n.d(t, { _: () => c });
var a = n(192379),
    r = n(442837),
    l = n(594174),
    i = n(823379),
    s = n(51144),
    o = n(388032);
function c(e) {
    let t = (0, r.Wu)([l.default], () =>
        e.recipients
            .map((e) => l.default.getUser(e))
            .filter(i.lm)
            .map((e) => s.ZP.getName(e))
    );
    return a.useMemo(
        () =>
            '' === e.name
                ? null
                : (function (e) {
                      if (0 === e.length) return null;
                      if (1 === e.length) return o.NW.formatToPlainString(o.t['J+Wpsr'], { first: e[0] });
                      if (2 === e.length)
                          return o.NW.formatToPlainString(o.t.gwRP0d, {
                              first: e[0],
                              second: e[1]
                          });
                      if (3 === e.length)
                          return o.NW.formatToPlainString(o.t.QDB5en, {
                              first: e[0],
                              second: e[1],
                              third: e[2]
                          });
                      let t = e.length - 3;
                      return o.NW.formatToPlainString(o.t.VYfueX, {
                          first: e[0],
                          second: e[1],
                          third: e[2],
                          count: t
                      });
                  })(t),
        [e, t]
    );
}
