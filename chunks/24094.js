r.d(t, {
    default: () => p,
}),
    r(896048),
    r(733351);
var n = r(627968),
    a = r(64700),
    l = r(296489),
    c = r.n(l),
    i = r(820284),
    o = r(198982),
    s = r(513461),
    u = r(241499),
    b = r(242273),
    f = r(652215),
    d = r(985018);
let p = function (e) {
    var t, r;
    let { field: l, onSave: p, onClose: y, guild: O } = e,
        [g, v] = a.useState(
            (null == l ? void 0 : l.values) != null
                ? null == l
                    ? void 0
                    : l.values.map((e) => ({
                          id: c()(),
                          value: e,
                      }))
                : [
                      {
                          id: c()(),
                          value: "",
                      },
                  ],
        ),
        [j, h] = a.useState(null),
        w = async () => {
            null != j && h(null);
            let e = g.map((e) => e.value.trim()).filter((e) => "" !== e);
            if (0 === e.length) return void h(d.intl.string(d.t.TCHkcd));
            let t = {
                field_type: s.rX.TERMS,
                label: d.intl.string(d.t["9suSIA"]),
                values: e,
                required: !0,
            };
            try {
                await p(t), y();
            } catch (e) {
                h(new o.LG(e).getAnyErrorMessage());
            }
        };
    return (0, n.jsx)(i.A, {
        page: f.liQ.GUILD_RULES_CREATE_MODAL,
        children: (0, n.jsx)(
            b.A,
            ((t = (function (e) {
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
            })({}, e)),
            (r = r =
                {
                    errorText: j,
                    title: d.intl.string(d.t["3pz9t3"]),
                    onCancel: y,
                    onConfirm: w,
                    children: (0, n.jsx)(u._, {
                        guild: O,
                        rules: g,
                        setRules: v,
                    }),
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t),
        ),
    });
};
