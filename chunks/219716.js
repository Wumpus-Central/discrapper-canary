s.d(t, { A: () => y });
var r = s(627968),
    n = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(91871),
    o = s.n(i),
    c = s(735438),
    h = s.n(c),
    d = s(96337),
    u = s(76948),
    p = s(573613),
    m = s(235986),
    C = s(518977),
    f = s(985018),
    A = s(441153),
    g = s(604949);
class y extends n.PureComponent {
    constructor(e) {
        super(e), (this.state = { query: "" });
    }
    renderItems() {
        let { query: e } = this.state,
            t = d.A.flatMap((e, t) => {
                let { alpha2: s, phoneCountryCodes: n, name: l } = e,
                    a = (0, C.Gw)(s);
                return n.map((e) => ({
                    key: `${t}-${e}`,
                    name: l,
                    translatedName: a,
                    countryData: { name: l, alpha2: s, code: e },
                    children: (0, r.jsxs)(m.A, {
                        className: A.kw,
                        justify: m.A.Justify.CENTER,
                        align: m.A.Align.CENTER,
                        children: [
                            (0, r.jsx)(m.A.Child, { className: A.GL, children: a }),
                            (0, r.jsx)(m.A.Child, { className: A.kf, grow: 0, shrink: 0, children: e }),
                        ],
                    }),
                }));
            }),
            s = h()(t)
                .filter(
                    (t) =>
                        0 === e.length ||
                        o()(e.toLowerCase(), t.name.toLowerCase()) ||
                        o()(e.toLowerCase(), t.translatedName.toLowerCase()),
                )
                .map((e) =>
                    (0, n.createElement)(u.i.Item, { ...e, key: e.key, onClick: () => this.onClick(e.countryData) }),
                )
                .value();
        return 0 === s.length
            ? (0, r.jsx)(u.i.Empty, { children: f.intl.string(f.t.PoWNfe) })
            : (0, r.jsx)(p.Ar, { className: A.Dm, children: s });
    }
    render() {
        let { className: e } = this.props;
        return (0, r.jsxs)(u.i, {
            className: a()(A.eQ, g.Cw, e),
            children: [
                (0, r.jsx)(u.i.SearchBar, {
                    query: this.state.query,
                    placeholder: f.intl.string(f.t.hGOODh),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off",
                }),
                (0, r.jsx)(u.i.Divider, {}),
                this.renderItems(),
            ],
        });
    }
    onChangeQuery = (e) => {
        this.setState({ query: e });
    };
    onClearQuery = () => {
        this.setState({ query: "" });
    };
    onClick = (e) => {
        this.props.onClick?.(e);
    };
}
