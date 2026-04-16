s.d(t, { A: () => g });
var r = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    l = s(91871),
    o = s.n(l),
    c = s(735438),
    h = s.n(c),
    d = s(96337),
    u = s(397927),
    p = s(235986),
    m = s(518977),
    C = s(985018),
    A = s(441153),
    S = s(604949);
class g extends n.PureComponent {
    constructor(e) {
        super(e), (this.state = { query: "" });
    }
    renderItems() {
        let { query: e } = this.state,
            t = d.A.flatMap((e, t) => {
                let { alpha2: s, phoneCountryCodes: n, name: a } = e,
                    i = (0, m.Gw)(s);
                return n.map((e) => ({
                    key: `${t}-${e}`,
                    name: a,
                    translatedName: i,
                    countryData: { name: a, alpha2: s, code: e },
                    children: (0, r.jsxs)(p.A, {
                        className: A.kw,
                        justify: p.A.Justify.CENTER,
                        align: p.A.Align.CENTER,
                        children: [
                            (0, r.jsx)(p.A.Child, { className: A.GL, children: i }),
                            (0, r.jsx)(p.A.Child, { className: A.kf, grow: 0, shrink: 0, children: e }),
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
                    (0, n.createElement)(u.i6n.Item, { ...e, key: e.key, onClick: () => this.onClick(e.countryData) }),
                )
                .value();
        return 0 === s.length
            ? (0, r.jsx)(u.i6n.Empty, { children: C.intl.string(C.t.PoWNfe) })
            : (0, r.jsx)(u.ArX, { className: A.Dm, children: s });
    }
    render() {
        let { className: e } = this.props;
        return (0, r.jsxs)(u.i6n, {
            className: i()(A.eQ, S.Cw, e),
            children: [
                (0, r.jsx)(u.i6n.SearchBar, {
                    query: this.state.query,
                    placeholder: C.intl.string(C.t.hGOODh),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off",
                }),
                (0, r.jsx)(u.i6n.Divider, {}),
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
