n.d(t, {
    _: function () {
        return o;
    }
});
var l = n(192379),
    r = n(442837),
    s = n(594174),
    i = n(823379),
    a = n(51144),
    u = n(388032);
function o(e) {
    let t = (0, r.Wu)([s.default], () =>
        e.recipients
            .map((e) => s.default.getUser(e))
            .filter(i.lm)
            .map((e) => a.ZP.getName(e))
    );
    return l.useMemo(
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
