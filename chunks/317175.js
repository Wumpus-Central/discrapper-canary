n.d(t, { Z: () => g }), n(390547);
var s = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(658722),
    r = n.n(a),
    h = n(392711),
    c = n.n(h),
    d = n(217986),
    u = n(481060),
    p = n(600164),
    E = n(133080),
    m = n(388032),
    R = n(132646),
    C = n(616926);
function f(e, t, n) {
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
class g extends i.PureComponent {
    renderItems() {
        let { query: e } = this.state,
            t = d.Z.flatMap((e, t) => {
                let { alpha2: n, phoneCountryCodes: i, name: l } = e,
                    o = (0, E.q9)(n);
                return i.map((e) => ({
                    key: ''.concat(t, '-').concat(e),
                    name: l,
                    translatedName: o,
                    countryData: {
                        name: l,
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
                .filter((t) => 0 === e.length || r()(e.toLowerCase(), t.name.toLowerCase()) || r()(e.toLowerCase(), t.translatedName.toLowerCase()))
                .map((e) =>
                    (0, i.createElement)(u.mzC.Item, {
                        ...e,
                        key: e.key,
                        onClick: () => this.onClick(e.countryData)
                    })
                )
                .value();
        return 0 === n.length
            ? (0, s.jsx)(u.mzC.Empty, { children: m.intl.string(m.t.PoWNfX) })
            : (0, s.jsx)(u.w0Z, {
                  className: R.phoneFieldScroller,
                  children: n
              });
    }
    render() {
        let { className: e } = this.props;
        return (0, s.jsxs)(u.mzC, {
            className: o()(R.phoneFieldPopout, C.elevationBorderLow, e),
            children: [
                (0, s.jsx)(u.mzC.SearchBar, {
                    query: this.state.query,
                    placeholder: m.intl.string(m.t.hGOODg),
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
            f(this, 'onChangeQuery', (e) => {
                this.setState({ query: e });
            }),
            f(this, 'onClearQuery', () => {
                this.setState({ query: '' });
            }),
            f(this, 'onClick', (e) => {
                var t, n;
                null === (t = (n = this.props).onClick) || void 0 === t || t.call(n, e);
            }),
            (this.state = { query: '' });
    }
}
