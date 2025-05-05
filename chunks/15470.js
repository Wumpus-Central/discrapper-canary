n.d(t, {
    Z: () => y,
    i: () => x
}),
    n(35282),
    n(388685),
    n(953529);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(159635),
    o = n.n(s),
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
function _(e) {
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
function f(e, t) {
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
    x = f(_({}, u.Z.rules), {
        heading: f(_({}, u.Z.rules.heading), {
            react(e, t, n) {
                let i = 'h'.concat(Math.min(Math.max(2, e.level + 1), 4));
                return (0, r.jsx)(
                    d.Z,
                    {
                        tag: i,
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
    v = o().parserFor(x),
    C = o().reactFor(o().ruleOutput(x, 'react'));
class j extends i.PureComponent {
    componentDidMount() {
        if (null != this._container) {
            let { height: e } = this._container.getBoundingClientRect();
            this.setState({ collapsable: e > 400 });
        }
    }
    render() {
        let { applicationId: e, description: t, blurb: n, className: i, assets: a } = this.props,
            { collapsed: s, collapsable: o } = this.state;
        return (0, r.jsxs)('div', {
            className: i,
            children: [
                (0, r.jsx)('div', {
                    className: l()({ [h.collapsed]: o && s }),
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
                                    assets: a,
                                    applicationId: e
                                },
                                children: t
                            })
                        ]
                    })
                }),
                o
                    ? (0, r.jsx)(c.zxk, {
                          className: h.toggleCollapseButton,
                          onClick: this.handleToggleCollapse,
                          color: c.zxk.Colors.PRIMARY,
                          children: s ? m.intl.string(m.t.DxcOXF) : m.intl.string(m.t.rD6EaG)
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
