r.d(t, { Z: () => C }), r(361932), r(187205);
var n = r(54381),
    s = r(473749),
    i = r(120356),
    a = r.n(i),
    o = r(658722),
    l = r.n(o),
    c = r(392711),
    u = r.n(c),
    d = r(217986),
    h = r(481060),
    p = r(600164),
    f = r(133080),
    m = r(388032),
    g = r(70787),
    y = r(285236);
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
class C extends s.PureComponent {
    renderItems() {
        let { query: e } = this.state,
            t = d.Z.flatMap((e, t) => {
                let { alpha2: r, phoneCountryCodes: s, name: i } = e,
                    a = (0, f.q9)(r);
                return s.map((e) => ({
                    key: "".concat(t, "-").concat(e),
                    name: i,
                    translatedName: a,
                    countryData: {
                        name: i,
                        alpha2: r,
                        code: e,
                    },
                    children: (0, n.jsxs)(p.Z, {
                        className: g.countryItem,
                        justify: p.Z.Justify.CENTER,
                        align: p.Z.Align.CENTER,
                        children: [
                            (0, n.jsx)(p.Z.Child, {
                                className: g.countryName,
                                children: a,
                            }),
                            (0, n.jsx)(p.Z.Child, {
                                className: g.countryCode,
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
                        l()(e.toLowerCase(), t.name.toLowerCase()) ||
                        l()(e.toLowerCase(), t.translatedName.toLowerCase()),
                )
                .map((e) => {
                    var t, r;
                    return (0, s.createElement)(
                        h.mzC.Item,
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
            ? (0, n.jsx)(h.mzC.Empty, { children: m.intl.string(m.t.PoWNfe) })
            : (0, n.jsx)(h.w0Z, {
                  className: g.phoneFieldScroller,
                  children: r,
              });
    }
    render() {
        let { className: e } = this.props;
        return (0, n.jsxs)(h.mzC, {
            className: a()(g.phoneFieldPopout, y.elevationBorderLow, e),
            children: [
                (0, n.jsx)(h.mzC.SearchBar, {
                    query: this.state.query,
                    placeholder: m.intl.string(m.t.hGOODh),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off",
                }),
                (0, n.jsx)(h.mzC.Divider, {}),
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
