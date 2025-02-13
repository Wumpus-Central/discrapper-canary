s.d(t, { Z: () => x }), s(390547);
var n = s(200651),
    i = s(192379),
    l = s(120356),
    o = s.n(l),
    a = s(658722),
    r = s.n(a),
    h = s(392711),
    d = s.n(h),
    c = s(217986),
    u = s(481060),
    p = s(600164),
    m = s(133080),
    f = s(388032),
    g = s(920178),
    C = s(801919);
function y(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
class x extends i.PureComponent {
    renderItems() {
        let { query: e } = this.state,
            t = c.Z.flatMap((e, t) => {
                let { alpha2: s, phoneCountryCodes: i, name: l } = e,
                    o = (0, m.q9)(s);
                return i.map((e) => ({
                    key: ''.concat(t, '-').concat(e),
                    name: l,
                    translatedName: o,
                    countryData: {
                        name: l,
                        alpha2: s,
                        code: e
                    },
                    children: (0, n.jsxs)(p.Z, {
                        className: g.countryItem,
                        justify: p.Z.Justify.CENTER,
                        align: p.Z.Align.CENTER,
                        children: [
                            (0, n.jsx)(p.Z.Child, {
                                className: g.countryName,
                                children: o
                            }),
                            (0, n.jsx)(p.Z.Child, {
                                className: g.countryCode,
                                grow: 0,
                                shrink: 0,
                                children: e
                            })
                        ]
                    })
                }));
            }),
            s = d()(t)
                .filter((t) => 0 === e.length || r()(e.toLowerCase(), t.name.toLowerCase()) || r()(e.toLowerCase(), t.translatedName.toLowerCase()))
                .map((e) =>
                    (0, i.createElement)(u.mzC.Item, {
                        ...e,
                        key: e.key,
                        onClick: () => this.onClick(e.countryData)
                    })
                )
                .value();
        return 0 === s.length
            ? (0, n.jsx)(u.mzC.Empty, { children: f.intl.string(f.t.PoWNfX) })
            : (0, n.jsx)(u.w0Z, {
                  className: g.phoneFieldScroller,
                  children: s
              });
    }
    render() {
        let { className: e } = this.props;
        return (0, n.jsxs)(u.mzC, {
            className: o()(g.phoneFieldPopout, C.elevationBorderLow, e),
            children: [
                (0, n.jsx)(u.mzC.SearchBar, {
                    query: this.state.query,
                    placeholder: f.intl.string(f.t.hGOODg),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: 'off'
                }),
                (0, n.jsx)(u.mzC.Divider, {}),
                this.renderItems()
            ]
        });
    }
    constructor(e) {
        super(e),
            y(this, 'onChangeQuery', (e) => {
                this.setState({ query: e });
            }),
            y(this, 'onClearQuery', () => {
                this.setState({ query: '' });
            }),
            y(this, 'onClick', (e) => {
                var t, s;
                null === (t = (s = this.props).onClick) || void 0 === t || t.call(s, e);
            }),
            (this.state = { query: '' });
    }
}
