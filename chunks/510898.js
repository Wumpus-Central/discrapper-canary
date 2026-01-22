n.d(t, { A: () => O }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(403362),
    o = n(143582),
    l = n(915043),
    c = n(888848),
    u = n(331441),
    d = n(20770),
    f = n(985018);
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
function _(e) {
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
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = E(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let b = "https://support.discord.com/hc/en-us";
class y extends i.PureComponent {
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, r.jsxs)(a.$Td, {
                  color: a.Hv$.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      f.intl.format(f.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      f.intl.format(f.t.fh65ES, { helpLink: b }),
                  ],
              })
            : this.props.children;
    }
    constructor(...e) {
        super(...e), p(this, "state", { hasError: !1 });
    }
}
function O(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [a, p] = i.useState({ route: u.R.HOME }),
        { route: h } = a,
        E = () => {
            p({ route: u.R.HOME });
        },
        b = (e) => {
            p(_({ route: u.R.SWITCH_APP_PLANS }, e)), n(f.intl.string(f.t.VFqtkP), E);
        },
        [O, A] = i.useState({});
    i.useEffect(() => {
        for (let n of t) {
            var e;
            let t = null == (e = n.items[0]) ? void 0 : e.planId;
            null != t &&
                (A((e) => m(_({}, e), { [n.id]: c.G.LOADING })),
                (0, o._R)(t)
                    .then(() => {
                        A((e) => m(_({}, e), { [n.id]: c.G.DONE }));
                    })
                    .catch(() => {
                        A((e) => m(_({}, e), { [n.id]: c.G.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: v } = (0, l.E)(),
        S = v !== l.mJ.LOADED;
    switch (h) {
        case u.R.HOME:
            return (0, r.jsx)(r.Fragment, {
                children: t.map((e) => {
                    var t;
                    return (0, r.jsx)(
                        y,
                        {
                            subscription: e,
                            children: (0, r.jsx)(c.A, {
                                subscription: e,
                                navigateToSwitchPlan: b,
                                loadingState: S ? c.G.LOADING : null != (t = O[e.id]) ? t : c.G.LOADING,
                            }),
                        },
                        e.id,
                    );
                }),
            });
        case u.R.SWITCH_APP_PLANS:
            let { route: I } = a,
                T = g(a, ["route"]);
            return (0, r.jsx)(d.A, m(_({}, T), { navigateToHome: E }));
        default:
            (0, s.xb)(h);
    }
}
