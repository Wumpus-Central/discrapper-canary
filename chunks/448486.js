n.d(t, {
    _: function () {
        return u;
    }
});
var l = n(192379),
    r = n(442837),
    i = n(594174),
    s = n(823379),
    a = n(51144),
    o = n(388032);
function u(e) {
    let t = (0, r.Wu)([i.default], () =>
        e.recipients
            .map((e) => i.default.getUser(e))
            .filter(s.lm)
            .map((e) => a.ZP.getName(e))
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
