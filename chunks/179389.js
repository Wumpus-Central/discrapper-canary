a.d(t, { A: () => v, i: () => g });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(791332),
    o = a.n(r),
    c = a(158954),
    d = a(481859),
    u = a(558179),
    h = a(371794),
    m = a(985018),
    p = a(663533);
let _ = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
    g = {
        ...u.A.rules,
        heading: {
            ...u.A.rules.heading,
            react(e, t, a) {
                let i = `h${Math.min(Math.max(2, e.level + 1), 4)}`;
                return (0, n.jsx)(d.A, { tag: i, children: t(e.content, a) }, a.key);
            },
        },
        assetImage: {
            order: 5,
            match(e, t) {
                let a = e.match(_);
                if (null != a) {
                    let e = a[2],
                        n = t.assets.find((t) => t.id === e);
                    return null != n && [...a, n, t.applicationId];
                }
                return !1;
            },
            parse: (e) => ({ asset: e[3], alt: e[1], applicationId: e[4] }),
            react: (e, t, a) =>
                (0, n.jsx)(
                    "div",
                    {
                        className: p.c6,
                        children: (0, n.jsx)("img", {
                            alt: e.alt,
                            src: (0, h.YE)(e.applicationId, e.asset, 800),
                            className: p.LY,
                        }),
                    },
                    a.key,
                ),
        },
    },
    x = o().parserFor(g),
    A = o().reactFor(o().ruleOutput(g, "react"));
class C extends i.PureComponent {
    state = { collapsed: !0, collapsable: !0 };
    _container;
    componentDidMount() {
        if (null != this._container) {
            let { height: e } = this._container.getBoundingClientRect();
            this.setState({ collapsable: e > 400 });
        }
    }
    handleToggleCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };
    setContentContainerRef = (e) => {
        this._container = e;
    };
    render() {
        let { applicationId: e, description: t, blurb: a, className: i, assets: s } = this.props,
            { collapsed: r, collapsable: o } = this.state;
        return (0, n.jsxs)("div", {
            className: i,
            children: [
                (0, n.jsx)("div", {
                    className: l()({ [p.yZ]: o && r }),
                    children: (0, n.jsxs)("div", {
                        ref: this.setContentContainerRef,
                        children: [
                            (0, n.jsx)("div", { className: p.I0, children: a }),
                            (0, n.jsx)(u.A, {
                                className: p.h_,
                                parser: x,
                                output: A,
                                state: { assets: s, applicationId: e },
                                children: t,
                            }),
                        ],
                    }),
                }),
                o
                    ? (0, n.jsx)("div", {
                          className: p.OZ,
                          children: (0, n.jsx)(c.$nd, {
                              variant: "secondary",
                              onClick: this.handleToggleCollapse,
                              text: r ? m.intl.string(m.t.DxcOXA) : m.intl.string(m.t.rD6EaA),
                              fullWidth: !0,
                          }),
                      })
                    : null,
            ],
        });
    }
}
let v = C;
