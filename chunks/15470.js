n.d(t, {
    Z: () => y,
    i: () => v,
}),
    n(35282),
    n(388685),
    n(953529);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(159635),
    o = n.n(s),
    c = n(755721),
    d = n(770146),
    u = n(241209),
    p = n(73346),
    m = n(388032),
    h = n(697110);
function f(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
    v = b(g({}, u.Z.rules), {
        heading: b(g({}, u.Z.rules.heading), {
            react(e, t, n) {
                let r = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
                return (0, a.jsx)(
                    d.Z,
                    {
                        tag: r,
                        children: t(e.content, n),
                    },
                    n.key,
                );
            },
        }),
        assetImage: {
            order: 5,
            match(e, t) {
                let n = e.match(x);
                if (null != n) {
                    let e = n[2],
                        a = t.assets.find((t) => t.id === e);
                    return null != a && [...n, a, t.applicationId];
                }
                return !1;
            },
            parse: (e) => ({
                asset: e[3],
                alt: e[1],
                applicationId: e[4],
            }),
            react: (e, t, n) =>
                (0, a.jsx)(
                    "div",
                    {
                        className: h.assetWrapper,
                        children: (0, a.jsx)("img", {
                            alt: e.alt,
                            src: (0, p._W)(e.applicationId, e.asset, 800),
                            className: h.asset,
                        }),
                    },
                    n.key,
                ),
        },
    }),
    C = o().parserFor(v),
    j = o().reactFor(o().ruleOutput(v, "react"));
class _ extends r.PureComponent {
    componentDidMount() {
        if (null != this._container) {
            let { height: e } = this._container.getBoundingClientRect();
            this.setState({ collapsable: e > 400 });
        }
    }
    render() {
        let { applicationId: e, description: t, blurb: n, className: r, assets: i } = this.props,
            { collapsed: s, collapsable: o } = this.state;
        return (0, a.jsxs)("div", {
            className: r,
            children: [
                (0, a.jsx)("div", {
                    className: l()({ [h.collapsed]: o && s }),
                    children: (0, a.jsxs)("div", {
                        ref: this.setContentContainerRef,
                        children: [
                            (0, a.jsx)("div", {
                                className: h.blurb,
                                children: n,
                            }),
                            (0, a.jsx)(u.Z, {
                                className: h.description,
                                parser: C,
                                output: j,
                                state: {
                                    assets: i,
                                    applicationId: e,
                                },
                                children: t,
                            }),
                        ],
                    }),
                }),
                o
                    ? (0, a.jsx)(c.zx, {
                          className: h.toggleCollapseButton,
                          onClick: this.handleToggleCollapse,
                          color: c.zx.Colors.PRIMARY,
                          children: s ? m.intl.string(m.t.DxcOXA) : m.intl.string(m.t.rD6EaA),
                      })
                    : null,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            f(this, "state", {
                collapsed: !0,
                collapsable: !0,
            }),
            f(this, "_container", void 0),
            f(this, "handleToggleCollapse", () => {
                this.setState({ collapsed: !this.state.collapsed });
            }),
            f(this, "setContentContainerRef", (e) => {
                this._container = e;
            });
    }
}
let y = _;
