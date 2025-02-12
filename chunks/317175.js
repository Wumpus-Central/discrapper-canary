s.d(t, { Z: () => C }), s(390547);
var n = s(200651),
    r = s(192379),
    o = s(120356),
    i = s.n(o),
    a = s(658722),
    l = s.n(a),
    c = s(392711),
    u = s.n(c),
    d = s(217986),
    h = s(481060),
    p = s(600164),
    f = s(133080),
    m = s(388032),
    g = s(826699),
    _ = s(60412);
function x(e, t, s) {
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
class C extends r.PureComponent {
    renderItems() {
        let { query: e } = this.state,
            t = d.Z.flatMap((e, t) => {
                let { alpha2: s, phoneCountryCodes: r, name: o } = e,
                    i = (0, f.q9)(s);
                return r.map((e) => ({
                    key: ''.concat(t, '-').concat(e),
                    name: o,
                    translatedName: i,
                    countryData: {
                        name: o,
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
                                children: i
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
            s = u()(t)
                .filter((t) => 0 === e.length || l()(e.toLowerCase(), t.name.toLowerCase()) || l()(e.toLowerCase(), t.translatedName.toLowerCase()))
                .map((e) =>
                    (0, r.createElement)(h.mzC.Item, {
                        ...e,
                        key: e.key,
                        onClick: () => this.onClick(e.countryData)
                    })
                )
                .value();
        return 0 === s.length
            ? (0, n.jsx)(h.mzC.Empty, { children: m.intl.string(m.t.PoWNfX) })
            : (0, n.jsx)(h.w0Z, {
                  className: g.phoneFieldScroller,
                  children: s
              });
    }
    render() {
        let { className: e } = this.props;
        return (0, n.jsxs)(h.mzC, {
            className: i()(g.phoneFieldPopout, _.elevationBorderLow, e),
            children: [
                (0, n.jsx)(h.mzC.SearchBar, {
                    query: this.state.query,
                    placeholder: m.intl.string(m.t.hGOODg),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: 'off'
                }),
                (0, n.jsx)(h.mzC.Divider, {}),
                this.renderItems()
            ]
        });
    }
    constructor(e) {
        super(e),
            x(this, 'onChangeQuery', (e) => {
                this.setState({ query: e });
            }),
            x(this, 'onClearQuery', () => {
                this.setState({ query: '' });
            }),
            x(this, 'onClick', (e) => {
                var t, s;
                null === (t = (s = this.props).onClick) || void 0 === t || t.call(s, e);
            }),
            (this.state = { query: '' });
    }
}
