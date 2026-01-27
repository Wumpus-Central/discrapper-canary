n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(403362),
    a = n(143582),
    o = n(915043),
    c = n(888848),
    d = n(331441),
    u = n(20770),
    _ = n(985018);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class A extends i.PureComponent {
    static getDerivedStateFromError(e) {
        return {
            hasError: !0,
        };
    }
    render() {
        return this.state.hasError
            ? (0, r.jsxs)(l.$Td, {
                  color: l.Hv$.DANGER,
                  style: {
                      borderRadius: 0,
                  },
                  children: [
                      _.intl.format(_.t.IIHUUF, {
                          subscriptionId: this.props.subscription.id,
                      }),
                      " ",
                      _.intl.format(_.t.fh65ES, {
                          helpLink: "https://support.discord.com/hc/en-us",
                      }),
                  ],
              })
            : this.props.children;
    }
    constructor(...e) {
        super(...e),
            p(this, "state", {
                hasError: !1,
            });
    }
}

function f(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [l, p] = i.useState({
            route: d.R.HOME,
        }),
        { route: f } = l,
        h = () => {
            p({
                route: d.R.HOME,
            });
        },
        b = (e) => {
            p(
                m(
                    {
                        route: d.R.SWITCH_APP_PLANS,
                    },
                    e,
                ),
            ),
                n(_.intl.string(_.t.VFqtkP), h);
        },
        [E, x] = i.useState({});
    i.useEffect(() => {
        for (let n of t) {
            var e;
            let t = null == (e = n.items[0]) ? void 0 : e.planId;
            null != t &&
                (x((e) =>
                    g(m({}, e), {
                        [n.id]: c.G.LOADING,
                    }),
                ),
                (0, a._R)(t)
                    .then(() => {
                        x((e) =>
                            g(m({}, e), {
                                [n.id]: c.G.DONE,
                            }),
                        );
                    })
                    .catch(() => {
                        x((e) =>
                            g(m({}, e), {
                                [n.id]: c.G.ERROR,
                            }),
                        );
                    }));
        }
    }, [t]);
    let { loadState: O } = (0, o.E)(),
        C = O !== o.mJ.LOADED;
    switch (f) {
        case d.R.HOME:
            return (0, r.jsx)(r.Fragment, {
                children: t.map((e) => {
                    var t;
                    return (0, r.jsx)(
                        A,
                        {
                            subscription: e,
                            children: (0, r.jsx)(c.A, {
                                subscription: e,
                                navigateToSwitchPlan: b,
                                loadingState: C ? c.G.LOADING : null != (t = E[e.id]) ? t : c.G.LOADING,
                            }),
                        },
                        e.id,
                    );
                }),
            });
        case d.R.SWITCH_APP_PLANS:
            let { route: I } = l,
                T = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i,
                        l = {};
                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                            (r = n[i]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (l[r] = e[r]);
                        return l;
                    }
                    if (
                        ((l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.getOwnPropertyNames(e);
                            for (r = 0; r < l.length; r++)
                                (n = l[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                            return i;
                        })(e, t)),
                        Object.getOwnPropertySymbols)
                    )
                        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                            (r = n[i]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (l[r] = e[r]);
                    return l;
                })(l, ["route"]);
            return (0, r.jsx)(
                u.A,
                g(m({}, T), {
                    navigateToHome: h,
                }),
            );
        default:
            (0, s.xb)(f);
    }
}
