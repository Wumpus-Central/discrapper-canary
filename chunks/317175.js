n.d(t, { Z: () => v }), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(658722),
    l = n.n(s),
    c = n(392711),
    u = n.n(c),
    d = n(217986),
    f = n(481060),
    _ = n(600164),
    p = n(133080),
    h = n(388032),
    m = n(70787),
    g = n(285236);
function E(e, t, n) {
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class v extends i.PureComponent {
    renderItems() {
        let { query: e } = this.state,
            t = d.Z.flatMap((e, t) => {
                let { alpha2: n, phoneCountryCodes: i, name: a } = e,
                    o = (0, p.q9)(n);
                return i.map((e) => ({
                    key: "".concat(t, "-").concat(e),
                    name: a,
                    translatedName: o,
                    countryData: {
                        name: a,
                        alpha2: n,
                        code: e,
                    },
                    children: (0, r.jsxs)(_.Z, {
                        className: m.countryItem,
                        justify: _.Z.Justify.CENTER,
                        align: _.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(_.Z.Child, {
                                className: m.countryName,
                                children: o,
                            }),
                            (0, r.jsx)(_.Z.Child, {
                                className: m.countryCode,
                                grow: 0,
                                shrink: 0,
                                children: e,
                            }),
                        ],
                    }),
                }));
            }),
            n = u()(t)
                .filter(
                    (t) =>
                        0 === e.length ||
                        l()(e.toLowerCase(), t.name.toLowerCase()) ||
                        l()(e.toLowerCase(), t.translatedName.toLowerCase()),
                )
                .map((e) =>
                    (0, i.createElement)(
                        f.mzC.Item,
                        O(b({}, e), {
                            key: e.key,
                            onClick: () => this.onClick(e.countryData),
                        }),
                    ),
                )
                .value();
        return 0 === n.length
            ? (0, r.jsx)(f.mzC.Empty, { children: h.intl.string(h.t.PoWNfX) })
            : (0, r.jsx)(f.w0Z, {
                  className: m.phoneFieldScroller,
                  children: n,
              });
    }
    render() {
        let { className: e } = this.props;
        return (0, r.jsxs)(f.mzC, {
            className: o()(m.phoneFieldPopout, g.elevationBorderLow, e),
            children: [
                (0, r.jsx)(f.mzC.SearchBar, {
                    query: this.state.query,
                    placeholder: h.intl.string(h.t.hGOODg),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off",
                }),
                (0, r.jsx)(f.mzC.Divider, {}),
                this.renderItems(),
            ],
        });
    }
    constructor(e) {
        super(e),
            E(this, "onChangeQuery", (e) => {
                this.setState({ query: e });
            }),
            E(this, "onClearQuery", () => {
                this.setState({ query: "" });
            }),
            E(this, "onClick", (e) => {
                var t, n;
                null == (t = (n = this.props).onClick) || t.call(n, e);
            }),
            (this.state = { query: "" });
    }
}
