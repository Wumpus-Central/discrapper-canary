n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(417098),
    a = n(403362),
    r = n(143582),
    o = n(915043),
    d = n(888848),
    u = n(331441),
    c = n(20770),
    g = n(985018);
class m extends s.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, i.jsxs)(l.$T, {
                  color: l.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      g.intl.format(g.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      g.intl.format(g.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function _(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [l, _] = s.useState({ route: u.R.HOME }),
        { route: A } = l,
        h = () => {
            _({ route: u.R.HOME });
        },
        p = (e) => {
            _({ route: u.R.SWITCH_APP_PLANS, ...e }), n(g.intl.string(g.t.VFqtkP), h);
        },
        [x, E] = s.useState({});
    s.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (E((t) => ({ ...t, [e.id]: d.G.LOADING })),
                (0, r._R)(t)
                    .then(() => {
                        E((t) => ({ ...t, [e.id]: d.G.DONE }));
                    })
                    .catch(() => {
                        E((t) => ({ ...t, [e.id]: d.G.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: T } = (0, o.E)(),
        S = T !== o.mJ.LOADED;
    switch (A) {
        case u.R.HOME:
            return (0, i.jsx)(i.Fragment, {
                children: t.map((e) =>
                    (0, i.jsx)(
                        m,
                        {
                            subscription: e,
                            children: (0, i.jsx)(d.A, {
                                subscription: e,
                                navigateToSwitchPlan: p,
                                loadingState: S ? d.G.LOADING : (x[e.id] ?? d.G.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case u.R.SWITCH_APP_PLANS:
            let { route: f, ...b } = l;
            return (0, i.jsx)(c.A, { ...b, navigateToHome: h });
        default:
            (0, a.xb)(A);
    }
}
