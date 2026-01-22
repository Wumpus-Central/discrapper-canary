r.d(t, { A: () => b }), r(114821), r(339614);
var n = r(627968),
    s = r(64700),
    i = r(503698),
    a = r.n(i),
    l = r(91871),
    o = r.n(l),
    c = r(735438),
    u = r.n(c),
    d = r(96337),
    h = r(397927),
    p = r(235986),
    f = r(518977),
    y = r(985018),
    m = r(492933),
    g = r(976092);
function O(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
class b extends s.PureComponent {
    renderItems() {
        let { query: e } = this.state,
            t = d.A.flatMap((e, t) => {
                let { alpha2: r, phoneCountryCodes: s, name: i } = e,
                    a = (0, f.Gw)(r);
                return s.map((e) => ({
                    key: "".concat(t, "-").concat(e),
                    name: i,
                    translatedName: a,
                    countryData: {
                        name: i,
                        alpha2: r,
                        code: e,
                    },
                    children: (0, n.jsxs)(p.A, {
                        className: m.kw,
                        justify: p.A.Justify.CENTER,
                        align: p.A.Align.CENTER,
                        children: [
                            (0, n.jsx)(p.A.Child, {
                                className: m.GL,
                                children: a,
                            }),
                            (0, n.jsx)(p.A.Child, {
                                className: m.kf,
                                grow: 0,
                                shrink: 0,
                                children: e,
                            }),
                        ],
                    }),
                }));
            }),
            r = u()(t)
                .filter(
                    (t) =>
                        0 === e.length ||
                        o()(e.toLowerCase(), t.name.toLowerCase()) ||
                        o()(e.toLowerCase(), t.translatedName.toLowerCase()),
                )
                .map((e) => {
                    var t, r;
                    return (0, s.createElement)(
                        h.i6n.Item,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (t) {
                                        O(e, t, r[t]);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (r = r =
                            {
                                key: e.key,
                                onClick: () => this.onClick(e.countryData),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        t),
                    );
                })
                .value();
        return 0 === r.length
            ? (0, n.jsx)(h.i6n.Empty, { children: y.intl.string(y.t.PoWNfe) })
            : (0, n.jsx)(h.ArX, {
                  className: m.Dm,
                  children: r,
              });
    }
    render() {
        let { className: e } = this.props;
        return (0, n.jsxs)(h.i6n, {
            className: a()(m.eQ, g.Cw, e),
            children: [
                (0, n.jsx)(h.i6n.SearchBar, {
                    query: this.state.query,
                    placeholder: y.intl.string(y.t.hGOODh),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off",
                }),
                (0, n.jsx)(h.i6n.Divider, {}),
                this.renderItems(),
            ],
        });
    }
    constructor(e) {
        super(e),
            O(this, "onChangeQuery", (e) => {
                this.setState({ query: e });
            }),
            O(this, "onClearQuery", () => {
                this.setState({ query: "" });
            }),
            O(this, "onClick", (e) => {
                var t, r;
                null == (t = (r = this.props).onClick) || t.call(r, e);
            }),
            (this.state = { query: "" });
    }
}
