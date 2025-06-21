n.d(t, { Z: () => f }), n(361932), n(187205);
var s = n(255367),
    i = n(73800),
    r = n(120356),
    l = n.n(r),
    o = n(658722),
    a = n.n(o),
    c = n(392711),
    h = n.n(c),
    u = n(217986),
    d = n(481060),
    E = n(600164),
    p = n(133080),
    R = n(388032),
    m = n(939175),
    I = n(20795);
function C(e, t, n) {
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
class f extends i.PureComponent {
    renderItems() {
        let { query: e } = this.state,
            t = u.Z.flatMap((e, t) => {
                let { alpha2: n, phoneCountryCodes: i, name: r } = e,
                    l = (0, p.q9)(n);
                return i.map((e) => ({
                    key: ''.concat(t, '-').concat(e),
                    name: r,
                    translatedName: l,
                    countryData: {
                        name: r,
                        alpha2: n,
                        code: e
                    },
                    children: (0, s.jsxs)(E.Z, {
                        className: m.countryItem,
                        justify: E.Z.Justify.CENTER,
                        align: E.Z.Align.CENTER,
                        children: [
                            (0, s.jsx)(E.Z.Child, {
                                className: m.countryName,
                                children: l
                            }),
                            (0, s.jsx)(E.Z.Child, {
                                className: m.countryCode,
                                grow: 0,
                                shrink: 0,
                                children: e
                            })
                        ]
                    })
                }));
            }),
            n = h()(t)
                .filter((t) => 0 === e.length || a()(e.toLowerCase(), t.name.toLowerCase()) || a()(e.toLowerCase(), t.translatedName.toLowerCase()))
                .map((e) => {
                    var t, n;
                    return (0, i.createElement)(
                        d.mzC.Item,
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
                                        C(e, t, n[t]);
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
            ? (0, s.jsx)(d.mzC.Empty, { children: R.intl.string(R.t.PoWNfX) })
            : (0, s.jsx)(d.w0Z, {
                  className: m.phoneFieldScroller,
                  children: n
              });
    }
    render() {
        let { className: e } = this.props;
        return (0, s.jsxs)(d.mzC, {
            className: l()(m.phoneFieldPopout, I.elevationBorderLow, e),
            children: [
                (0, s.jsx)(d.mzC.SearchBar, {
                    query: this.state.query,
                    placeholder: R.intl.string(R.t.hGOODg),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: 'off'
                }),
                (0, s.jsx)(d.mzC.Divider, {}),
                this.renderItems()
            ]
        });
    }
    constructor(e) {
        super(e),
            C(this, 'onChangeQuery', (e) => {
                this.setState({ query: e });
            }),
            C(this, 'onClearQuery', () => {
                this.setState({ query: '' });
            }),
            C(this, 'onClick', (e) => {
                var t, n;
                null == (t = (n = this.props).onClick) || t.call(n, e);
            }),
            (this.state = { query: '' });
    }
}
