n.d(t, {
    Z: () => y,
    i: () => x
}),
    n(301563),
    n(47120),
    n(266796);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(477660),
    s = n.n(o),
    c = n(481060),
    d = n(770146),
    u = n(241209),
    p = n(73346),
    m = n(388032),
    h = n(455660);
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
let b = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
    x = _(f({}, u.Z.rules), {
        heading: _(f({}, u.Z.rules.heading), {
            react(e, t, n) {
                let a = 'h'.concat(Math.min(Math.max(2, e.level + 1), 4));
                return (0, r.jsx)(
                    d.Z,
                    {
                        tag: a,
                        children: t(e.content, n)
                    },
                    n.key
                );
            }
        }),
        assetImage: {
            order: 5,
            match(e, t) {
                let n = e.match(b);
                if (null != n) {
                    let e = n[2],
                        r = t.assets.find((t) => t.id === e);
                    return null != r && [...n, r, t.applicationId];
                }
                return !1;
            },
            parse: (e) => ({
                asset: e[3],
                alt: e[1],
                applicationId: e[4]
            }),
            react: (e, t, n) =>
                (0, r.jsx)(
                    'div',
                    {
                        className: h.assetWrapper,
                        children: (0, r.jsx)('img', {
                            alt: e.alt,
                            src: (0, p._W)(e.applicationId, e.asset, 800),
                            className: h.asset
                        })
                    },
                    n.key
                )
        }
    }),
    v = s().parserFor(x),
    C = s().reactFor(s().ruleOutput(x, 'react'));
class j extends a.PureComponent {
    componentDidMount() {
        if (null != this._container) {
            let { height: e } = this._container.getBoundingClientRect();
            this.setState({ collapsable: e > 400 });
        }
    }
    render() {
        let { applicationId: e, description: t, blurb: n, className: a, assets: i } = this.props,
            { collapsed: o, collapsable: s } = this.state;
        return (0, r.jsxs)('div', {
            className: a,
            children: [
                (0, r.jsx)('div', {
                    className: l()({ [h.collapsed]: s && o }),
                    children: (0, r.jsxs)('div', {
                        ref: this.setContentContainerRef,
                        children: [
                            (0, r.jsx)('div', {
                                className: h.blurb,
                                children: n
                            }),
                            (0, r.jsx)(u.Z, {
                                className: h.description,
                                parser: v,
                                output: C,
                                state: {
                                    assets: i,
                                    applicationId: e
                                },
                                children: t
                            })
                        ]
                    })
                }),
                s
                    ? (0, r.jsx)(c.zxk, {
                          className: h.toggleCollapseButton,
                          onClick: this.handleToggleCollapse,
                          color: c.zxk.Colors.PRIMARY,
                          children: o ? m.NW.string(m.t.DxcOXF) : m.NW.string(m.t.rD6EaG)
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
let y = j;
