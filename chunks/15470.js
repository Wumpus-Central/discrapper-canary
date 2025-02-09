n.d(t, {
    Z: () => I,
    i: () => x
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(477660),
    o = n.n(s),
    c = n(481060),
    d = n(770146),
    u = n(241209),
    m = n(73346),
    h = n(388032),
    p = n(140939);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
    x = {
        ...u.Z.rules,
        heading: {
            ...u.Z.rules.heading,
            react(e, t, n) {
                let a = 'h'.concat(Math.min(Math.max(2, e.level + 1), 4));
                return (0, i.jsx)(
                    d.Z,
                    {
                        tag: a,
                        children: t(e.content, n)
                    },
                    n.key
                );
            }
        },
        assetImage: {
            order: 5,
            match(e, t) {
                let n = e.match(_);
                if (null != n) {
                    let e = n[2],
                        i = t.assets.find((t) => t.id === e);
                    return null != i && [...n, i, t.applicationId];
                }
                return !1;
            },
            parse: (e) => ({
                asset: e[3],
                alt: e[1],
                applicationId: e[4]
            }),
            react: (e, t, n) =>
                (0, i.jsx)(
                    'div',
                    {
                        className: p.assetWrapper,
                        children: (0, i.jsx)('img', {
                            alt: e.alt,
                            src: (0, m._W)(e.applicationId, e.asset, 800),
                            className: p.asset
                        })
                    },
                    n.key
                )
        }
    },
    C = o().parserFor(x),
    v = o().reactFor(o().ruleOutput(x, 'react'));
class f extends a.PureComponent {
    componentDidMount() {
        if (null != this._container) {
            let { height: e } = this._container.getBoundingClientRect();
            this.setState({ collapsable: e > 400 });
        }
    }
    render() {
        let { applicationId: e, description: t, blurb: n, className: a, assets: r } = this.props,
            { collapsed: s, collapsable: o } = this.state;
        return (0, i.jsxs)('div', {
            className: a,
            children: [
                (0, i.jsx)('div', {
                    className: l()({ [p.collapsed]: o && s }),
                    children: (0, i.jsxs)('div', {
                        ref: this.setContentContainerRef,
                        children: [
                            (0, i.jsx)('div', {
                                className: p.blurb,
                                children: n
                            }),
                            (0, i.jsx)(u.Z, {
                                className: p.description,
                                parser: C,
                                output: v,
                                state: {
                                    assets: r,
                                    applicationId: e
                                },
                                children: t
                            })
                        ]
                    })
                }),
                o
                    ? (0, i.jsx)(c.zxk, {
                          className: p.toggleCollapseButton,
                          onClick: this.handleToggleCollapse,
                          color: c.zxk.Colors.PRIMARY,
                          children: s ? h.intl.string(h.t.DxcOXF) : h.intl.string(h.t.rD6EaG)
                      })
                    : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', {
                collapsed: !0,
                collapsable: !0
            }),
            g(this, '_container', void 0),
            g(this, 'handleToggleCollapse', () => {
                this.setState({ collapsed: !this.state.collapsed });
            }),
            g(this, 'setContentContainerRef', (e) => {
                this._container = e;
            });
    }
}
let I = f;
