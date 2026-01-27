r.d(t, {
    A: () => a,
});
var n = r(627968);
r(64700);
var i = r(397927),
    o = r(770666),
    c = r(823508),
    l = r(985018);

function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        a = (0, o.A)(e),
        u = (0, c.A)();
    return a
        ? (0, n.jsx)(i.Drp, {
              id: "create-event",
              label: l.intl.string(l.t["60lJ0C"]),
              icon: t ? i.UC$ : void 0,
              leadingAccessory: t
                  ? {
                        type: "icon",
                        icon: i.UC$,
                    }
                  : void 0,
              action: () => {
                  (0, i.mMO)(async () => {
                      let { default: t } = await Promise.all([
                          r.e("68587"),
                          r.e("51354"),
                          r.e("342"),
                          r.e("62106"),
                      ]).then(r.bind(r, 21653));
                      return (r) => {
                          var i, o;
                          return (0, n.jsx)(
                              t,
                              ((i = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              }),
                                          )),
                                          n.forEach(function (t) {
                                              var n;
                                              (n = r[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = n);
                                          });
                                  }
                                  return e;
                              })({}, r)),
                              (o = o =
                                  {
                                      guildId: e,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(o)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                    }),
                              i),
                          );
                      };
                  }, u);
              },
          })
        : null;
}
