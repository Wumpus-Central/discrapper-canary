n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(390547);
var s = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    r = n(658722),
    a = n.n(r),
    h = n(392711),
    c = n.n(h),
    u = n(217986),
    d = n(481060),
    p = n(600164),
    E = n(133080),
    m = n(388032),
    R = n(279793),
    f = n(517877);
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
class g extends i.PureComponent {
    renderItems() {
        let { query: e } = this.state,
            t = u.Z.flatMap((e, t) => {
                let { alpha2: n, phoneCountryCodes: i, name: o } = e,
                    l = (0, E.q9)(n);
                return i.map((e) => ({
                    key: ''.concat(t, '-').concat(e),
                    name: o,
                    translatedName: l,
                    countryData: {
                        name: o,
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
                                children: l
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
                .map((e) =>
                    (0, i.createElement)(d.PopoutList.Item, {
                        ...e,
                        key: e.key,
                        onClick: () => this.onClick(e.countryData)
                    })
                )
                .value();
        return 0 === n.length
            ? (0, s.jsx)(d.PopoutList.Empty, { children: m.intl.string(m.t.PoWNfX) })
            : (0, s.jsx)(d.ScrollerAuto, {
                  className: R.phoneFieldScroller,
                  children: n
              });
    }
    render() {
        let { className: e } = this.props;
        return (0, s.jsxs)(d.PopoutList, {
            className: l()(R.phoneFieldPopout, f.elevationBorderLow, e),
            children: [
                (0, s.jsx)(d.PopoutList.SearchBar, {
                    query: this.state.query,
                    placeholder: m.intl.string(m.t.hGOODg),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: 'off'
                }),
                (0, s.jsx)(d.PopoutList.Divider, {}),
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
                null === (t = (n = this.props).onClick) || void 0 === t || t.call(n, e);
            }),
            (this.state = { query: '' });
    }
}
