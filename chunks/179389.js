n.d(t, {
    A: () => y,
    i: () => v,
}),
    n(747238),
    n(896048),
    n(228524);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(280230),
    c = n.n(s),
    o = n(421380),
    d = n(481859),
    u = n(558179),
    p = n(371794),
    h = n(985018),
    m = n(663533);

function b(e, t, n) {
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

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                b(e, t, n[t]);
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
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
    v = g(f({}, u.A.rules), {
        heading: g(f({}, u.A.rules.heading), {
            react(e, t, n) {
                let a = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
                return (0, l.jsx)(
                    d.A,
                    {
                        tag: a,
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
                        l = t.assets.find((t) => t.id === e);
                    return null != l && [...n, l, t.applicationId];
                }
                return !1;
            },
            parse: (e) => ({
                asset: e[3],
                alt: e[1],
                applicationId: e[4],
            }),
            react: (e, t, n) =>
                (0, l.jsx)(
                    "div",
                    {
                        className: m.c6,
                        children: (0, l.jsx)("img", {
                            alt: e.alt,
                            src: (0, p.YE)(e.applicationId, e.asset, 800),
                            className: m.LY,
                        }),
                    },
                    n.key,
                ),
        },
    }),
    j = c().parserFor(v),
    A = c().reactFor(c().ruleOutput(v, "react"));
class _ extends a.PureComponent {
    componentDidMount() {
        if (null != this._container) {
            let { height: e } = this._container.getBoundingClientRect();
            this.setState({
                collapsable: e > 400,
            });
        }
    }
    render() {
        let { applicationId: e, description: t, blurb: n, className: a, assets: r } = this.props,
            { collapsed: s, collapsable: c } = this.state;
        return (0, l.jsxs)("div", {
            className: a,
            children: [
                (0, l.jsx)("div", {
                    className: i()({
                        [m.yZ]: c && s,
                    }),
                    children: (0, l.jsxs)("div", {
                        ref: this.setContentContainerRef,
                        children: [
                            (0, l.jsx)("div", {
                                className: m.I0,
                                children: n,
                            }),
                            (0, l.jsx)(u.A, {
                                className: m.h_,
                                parser: j,
                                output: A,
                                state: {
                                    assets: r,
                                    applicationId: e,
                                },
                                children: t,
                            }),
                        ],
                    }),
                }),
                c
                    ? (0, l.jsx)(o.$n, {
                          className: m.OZ,
                          onClick: this.handleToggleCollapse,
                          color: o.$n.Colors.PRIMARY,
                          children: s ? h.intl.string(h.t.DxcOXA) : h.intl.string(h.t.rD6EaA),
                      })
                    : null,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            b(this, "state", {
                collapsed: !0,
                collapsable: !0,
            }),
            b(this, "_container", void 0),
            b(this, "handleToggleCollapse", () => {
                this.setState({
                    collapsed: !this.state.collapsed,
                });
            }),
            b(this, "setContentContainerRef", (e) => {
                this._container = e;
            });
    }
}
let y = _;
