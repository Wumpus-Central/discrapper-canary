n.d(t, { Z: () => C }), n(13667), n(390547);
var s = n(200651),
    i = n(192379),
    r = n(120356),
    o = n.n(r),
    l = n(658722),
    a = n.n(l),
    h = n(392711),
    c = n.n(h),
    d = n(217986),
    u = n(481060),
    p = n(600164),
    E = n(133080),
    m = n(388032),
    R = n(939175),
    f = n(20795);
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
class C extends i.PureComponent {
    renderItems() {
        let { query: e } = this.state,
            t = d.Z.flatMap((e, t) => {
                let { alpha2: n, phoneCountryCodes: i, name: r } = e,
                    o = (0, E.q9)(n);
                return i.map((e) => ({
                    key: ''.concat(t, '-').concat(e),
                    name: r,
                    translatedName: o,
                    countryData: {
                        name: r,
                        alpha2: n,
                        code: e
                    },
                    children: (0, s.jsxs)(p.Z, {
                        className: R.countryItem,
                        justify: p.Z.Justify.CENTER,
                        align: p.Z.Align.CENTER,
                        children: [
                            (0, s.jsx)(p.Z.Child, {
                                className: R.countryName,
                                children: o
                            }),
                            (0, s.jsx)(p.Z.Child, {
                                className: R.countryCode,
                                grow: 0,
                                shrink: 0,
                                children: e
                            })
                        ]
                    })
                }));
            }),
            n = c()(t)
                .filter((t) => 0 === e.length || a()(e.toLowerCase(), t.name.toLowerCase()) || a()(e.toLowerCase(), t.translatedName.toLowerCase()))
                .map((e) => {
                    var t, n;
                    return (0, i.createElement)(
                        u.mzC.Item,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    s = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (s = s.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    s.forEach(function (t) {
                                        g(e, t, n[t]);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (n = n =
                            {
                                key: e.key,
                                onClick: () => this.onClick(e.countryData)
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var s = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, s);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t)
                    );
                })
                .value();
        return 0 === n.length
            ? (0, s.jsx)(u.mzC.Empty, { children: m.NW.string(m.t.PoWNfX) })
            : (0, s.jsx)(u.w0Z, {
                  className: R.phoneFieldScroller,
                  children: n
              });
    }
    render() {
        let { className: e } = this.props;
        return (0, s.jsxs)(u.mzC, {
            className: o()(R.phoneFieldPopout, f.elevationBorderLow, e),
            children: [
                (0, s.jsx)(u.mzC.SearchBar, {
                    query: this.state.query,
                    placeholder: m.NW.string(m.t.hGOODg),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: 'off'
                }),
                (0, s.jsx)(u.mzC.Divider, {}),
                this.renderItems()
            ]
        });
    }
    constructor(e) {
        super(e),
            g(this, 'onChangeQuery', (e) => {
                this.setState({ query: e });
            }),
            g(this, 'onClearQuery', () => {
                this.setState({ query: '' });
            }),
            g(this, 'onClick', (e) => {
                var t, n;
                null == (t = (n = this.props).onClick) || t.call(n, e);
            }),
            (this.state = { query: '' });
    }
}
