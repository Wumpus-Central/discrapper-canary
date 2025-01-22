n.d(t, {
    _: function () {
        return c;
    }
});
var l = n(192379),
    i = n(442837),
    a = n(594174),
    r = n(823379),
    s = n(51144),
    o = n(388032);
function c(e) {
    let t = (0, i.Wu)([a.default], () =>
        e.recipients
            .map((e) => a.default.getUser(e))
            .filter(r.lm)
            .map((e) => s.ZP.getName(e))
    );
    return l.useMemo(
        () =>
            '' === e.name
                ? null
                : (function (e) {
                      if (0 === e.length) return null;
                      if (1 === e.length) return o.intl.formatToPlainString(o.t['J+Wpsr'], { first: e[0] });
                      if (2 === e.length)
                          return o.intl.formatToPlainString(o.t.gwRP0d, {
                              first: e[0],
                              second: e[1]
                          });
                      if (3 === e.length)
                          return o.intl.formatToPlainString(o.t.QDB5en, {
                              first: e[0],
                              second: e[1],
                              third: e[2]
                          });
                      let t = e.length - 3;
                      return o.intl.formatToPlainString(o.t.VYfueX, {
                          first: e[0],
                          second: e[1],
                          third: e[2],
                          count: t
                      });
                  })(t),
        [e, t]
    );
}
