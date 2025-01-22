n.d(t, {
    i: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(477660),
    s = n.n(o),
    c = n(481060),
    d = n(770146),
    u = n(241209),
    m = n(73346),
    p = n(388032),
    h = n(797844);
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
let C = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
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
                let n = e.match(C);
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
                        className: h.assetWrapper,
                        children: (0, i.jsx)('img', {
                            alt: e.alt,
                            src: (0, m._W)(e.applicationId, e.asset, 800),
                            className: h.asset
                        })
                    },
                    n.key
                )
        }
    },
    v = s().parserFor(x),
    _ = s().reactFor(s().ruleOutput(x, 'react'));
class f extends a.PureComponent {
    componentDidMount() {
        if (null != this._container) {
            let { height: e } = this._container.getBoundingClientRect();
            this.setState({ collapsable: e > 400 });
        }
    }
    render() {
        let { applicationId: e, description: t, blurb: n, className: a, assets: r } = this.props,
            { collapsed: o, collapsable: s } = this.state;
        return (0, i.jsxs)('div', {
            className: a,
            children: [
                (0, i.jsx)('div', {
                    className: l()({ [h.collapsed]: s && o }),
                    children: (0, i.jsxs)('div', {
                        ref: this.setContentContainerRef,
                        children: [
                            (0, i.jsx)('div', {
                                className: h.blurb,
                                children: n
                            }),
                            (0, i.jsx)(u.Z, {
                                className: h.description,
                                parser: v,
                                output: _,
                                state: {
                                    assets: r,
                                    applicationId: e
                                },
                                children: t
                            })
                        ]
                    })
                }),
                s
                    ? (0, i.jsx)(c.Button, {
                          className: h.toggleCollapseButton,
                          onClick: this.handleToggleCollapse,
                          color: c.Button.Colors.PRIMARY,
                          children: o ? p.intl.string(p.t.DxcOXF) : p.intl.string(p.t.rD6EaG)
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
t.Z = f;
