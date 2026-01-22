r.d(t, {
    A: () => y,
}),
    r(896048);
var n = r(627968),
    l = r(64700),
    i = r(158954),
    o = r(397927),
    a = r(154672),
    c = r(198982),
    s = r(330936),
    u = r(652215),
    p = r(985018);
let y = (e) => {
    var t, r;
    let { email: y, setStep: f, onBack: O, school: b, setSchool: d } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, ["email", "setStep", "onBack", "school", "setSchool"]),
        [j, m] = l.useState(null),
        [h, E] = l.useState(!1),
        v = async () => {
            m(null), E(!0);
            try {
                await a.A.signup(y, b), f(s.Di.EMAIL_WAITLIST);
            } catch (e) {
                m(new c.LG(e));
            } finally {
                E(!1);
            }
        },
        I = async (e) => {
            null != b && "" !== b && e.charCode === u.Ks6.ENTER && (await v());
        };
    return (0, n.jsx)(
        i.Modal,
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
        })({}, g)),
        (r = r =
            {
                title: p.intl.string(p.t["2FNWBG"]),
                subtitle: p.intl.string(p.t["/4y6ox"]),
                actions: [
                    {
                        variant: "secondary",
                        onClick: O,
                        text: p.intl.string(p.t["13/7kX"]),
                    },
                    {
                        variant: "primary",
                        text: p.intl.string(p.t.PDsYAo),
                        onClick: v,
                        loading: h,
                    },
                ],
                children: (0, n.jsx)(o.ksK, {
                    label: p.intl.string(p.t["L+AfJr"]),
                    onKeyPress: I,
                    placeholder: p.intl.string(p.t.Y1btJd),
                    onChange: (e) => {
                        d(e);
                    },
                    error: null == j ? void 0 : j.getAnyErrorMessage(),
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
    );
};
