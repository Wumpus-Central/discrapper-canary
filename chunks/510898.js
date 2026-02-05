n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(403362),
    l = n(143582),
    o = n(915043),
    c = n(888848),
    d = n(331441),
    u = n(20770),
    _ = n(985018);
class m extends s.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, i.jsxs)(r.$Td, {
                  color: r.Hv$.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      _.intl.format(_.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      _.intl.format(_.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function A(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [r, A] = s.useState({ route: d.R.HOME }),
        { route: g } = r,
        E = () => {
            A({ route: d.R.HOME });
        },
        h = (e) => {
            A({ route: d.R.SWITCH_APP_PLANS, ...e }), n(_.intl.string(_.t.VFqtkP), E);
        },
        [p, C] = s.useState({});
    s.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (C((t) => ({ ...t, [e.id]: c.G.LOADING })),
                (0, l._R)(t)
                    .then(() => {
                        C((t) => ({ ...t, [e.id]: c.G.DONE }));
                    })
                    .catch(() => {
                        C((t) => ({ ...t, [e.id]: c.G.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: x } = (0, o.E)(),
        T = x !== o.mJ.LOADED;
    switch (g) {
        case d.R.HOME:
            return (0, i.jsx)(i.Fragment, {
                children: t.map((e) =>
                    (0, i.jsx)(
                        m,
                        {
                            subscription: e,
                            children: (0, i.jsx)(c.A, {
                                subscription: e,
                                navigateToSwitchPlan: h,
                                loadingState: T ? c.G.LOADING : (p[e.id] ?? c.G.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case d.R.SWITCH_APP_PLANS:
            let { route: I, ...S } = r;
            return (0, i.jsx)(u.A, { ...S, navigateToHome: E });
        default:
            (0, a.xb)(g);
    }
}
