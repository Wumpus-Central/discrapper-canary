s.d(t, { A: () => $ });
var l = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(573725),
    o = s(452027),
    c = s(915089),
    u = s(628387),
    d = s(419354),
    h = s(717421),
    p = s(922016),
    f = s(939249),
    m = s(557722),
    C = s(91871),
    A = s.n(C),
    g = s(735438),
    y = s.n(g),
    x = s(96337),
    E = s(404778),
    N = s(305866),
    k = s(892547),
    w = s(317097),
    j = s(187322),
    v = s(661531),
    R = s(933832),
    I = s(235986),
    S = s(650583),
    _ = s(330273),
    L = s(818050);
let P = y().memoize((e) => {
    let t = !1;
    if (null != e && (0, w.qt)(e)) {
        let s = (0, w.LX)(e);
        null != s && (t = 0.2 > (0, w.OK)(s));
    }
    return t ? v.A.unsafe_rawColors.BLACK.css : v.A.unsafe_rawColors.WHITE.css;
});
class b extends n.PureComponent {
    state = { color: P(this.props.color) };
    render() {
        let e,
            { selected: t, color: s, className: n, children: a } = this.props,
            i = P(s);
        return (
            t
                ? (e = { color: i, background: s ?? v.A.unsafe_rawColors.BRAND_500.css })
                : null != s && (e = { color: s }),
            (0, l.jsx)(j.vN, {
                offset: { left: 4 },
                children: (0, l.jsxs)(I.A, {
                    className: r()(_.OR, n, { [_.wH]: t }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: I.A.Align.CENTER,
                    style: { ...e, ...this.props.style },
                    role: "button",
                    tabIndex: 0,
                    children: [
                        (0, l.jsx)(I.A, { align: I.A.Align.CENTER, className: _.Ix, shrink: 1, children: a }),
                        t &&
                            (0, l.jsx)(I.A, {
                                wrap: I.A.Wrap.WRAP,
                                className: L.Gf,
                                grow: 0,
                                shrink: 0,
                                children: (0, l.jsx)(R.A, { size: "md", color: i }),
                            }),
                    ],
                }),
            })
        );
    }
    handleKeyUp = (e) => {
        if (e.key === S.dh.ENTER || e.key === S.dh.SPACE) {
            let { onClick: e, ...t } = this.props;
            e(t);
        }
    };
    handleClick = () => {
        let { onClick: e, ...t } = this.props;
        e(t);
    };
}
var D = s(99879);
let T = () => (0, l.jsx)(E.c, { className: D.yF }),
    B = (e) => {
        let { children: t } = e;
        return (0, l.jsx)("div", { className: D.Fm, children: t });
    };
class F extends n.PureComponent {
    static defaultProps = { autoFocus: !0 };
    render() {
        return (0, l.jsx)(k.I, { ...this.props, size: "sm" });
    }
}
class O extends n.PureComponent {
    static SearchBar = F;
    static Item = b;
    static Divider = T;
    static Empty = B;
    render() {
        let { className: e, children: t } = this.props;
        return (0, l.jsx)(N.l, { className: r()(D.qE, e), "aria-label": this.props["aria-label"], children: t });
    }
}
var K = s(364522),
    W = s(518977),
    G = s(985018),
    H = s(441153),
    z = s(604949);
class M extends n.PureComponent {
    constructor(e) {
        super(e), (this.state = { query: "" });
    }
    renderItems() {
        let { query: e } = this.state,
            t = x.A.flatMap((e, t) => {
                let { alpha2: s, phoneCountryCodes: n, name: a } = e,
                    r = (0, W.Gw)(s);
                return n.map((e) => ({
                    key: `${t}-${e}`,
                    name: a,
                    translatedName: r,
                    countryData: { name: a, alpha2: s, code: e },
                    children: (0, l.jsxs)(I.A, {
                        className: H.kw,
                        justify: I.A.Justify.CENTER,
                        align: I.A.Align.CENTER,
                        children: [
                            (0, l.jsx)(I.A.Child, { className: H.GL, children: r }),
                            (0, l.jsx)(I.A.Child, { className: H.kf, grow: 0, shrink: 0, children: e }),
                        ],
                    }),
                }));
            }),
            s = y()(t)
                .filter(
                    (t) =>
                        0 === e.length ||
                        A()(e.toLowerCase(), t.name.toLowerCase()) ||
                        A()(e.toLowerCase(), t.translatedName.toLowerCase()),
                )
                .map((e) =>
                    (0, n.createElement)(O.Item, { ...e, key: e.key, onClick: () => this.onClick(e.countryData) }),
                )
                .value();
        return 0 === s.length
            ? (0, l.jsx)(O.Empty, { children: G.intl.string(G.t.PoWNfe) })
            : (0, l.jsx)(K.Ar, { className: H.Dm, children: s });
    }
    render() {
        let { className: e } = this.props;
        return (0, l.jsxs)(O, {
            className: r()(H.eQ, z.Cw, e),
            children: [
                (0, l.jsx)(O.SearchBar, {
                    query: this.state.query,
                    placeholder: G.intl.string(G.t.hGOODh),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off",
                }),
                (0, l.jsx)(O.Divider, {}),
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
var V = s(696841);
function q(e) {
    let { show: t, alpha2: s, countryCode: a } = e,
        i = n.useRef(null),
        o = n.useRef(null),
        [c, u] = n.useState(0),
        [C, A] = n.useState(!1);
    n.useEffect(() => {
        function e() {
            u(t ? (o.current?.getBoundingClientRect().width ?? 0) : 0);
        }
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }, [t, s, a]);
    let g = (0, h.z)({
        width: `${c}px`,
        onStart: () => {
            A(!0);
        },
        onRest: () => {
            A(!1);
        },
    });
    return (0, l.jsx)(p.Y, {
        targetElementRef: i,
        position: "top",
        renderPopout: (e) =>
            (0, l.jsx)(M, {
                className: V.SW,
                onClick: (t) => {
                    m.A.setCountryCode(t), e.closePopout();
                },
            }),
        children: (e) =>
            (0, l.jsx)("div", {
                className: r()(V.nw, { [V.R]: !(t || C) }),
                ref: i,
                children: (0, l.jsx)(d.animated.div, {
                    className: V.kL,
                    style: g,
                    children: (0, l.jsxs)("div", {
                        className: V.WH,
                        ref: o,
                        children: [
                            (0, l.jsxs)(f.D, { ...e, className: V.kf, children: [s, " ", a] }),
                            (0, l.jsx)("div", { className: V.me }),
                        ],
                    }),
                }),
            }),
    });
}
var U = s(145046),
    Q = s(482188);
function $(e) {
    let {
            alpha2: t,
            countryCode: s,
            forceMode: a,
            label: d,
            error: h,
            className: p,
            required: f,
            value: m,
            setRef: C,
            placeholder: A,
            autoFocus: g,
            maxLength: y,
            spellCheck: x,
            autoComplete: E,
            autoCapitalize: N,
            autoCorrect: k,
            onChange: w,
            inputClassName: j,
        } = e,
        v = (0, c.GV)(),
        [R, I] = n.useState(!1),
        S = (0, u.Vl)(a, m);
    return (0, l.jsx)("div", {
        className: p ?? void 0,
        children: (0, l.jsx)(o.D, {
            label: d,
            errorMessage: h,
            required: f,
            id: v,
            children: (0, l.jsxs)("div", {
                className: r()(Q.hF, U.hF, j, { [Q.z3]: null != h, [Q.in]: R }),
                children: [
                    (0, l.jsx)(q, { show: S, alpha2: t, countryCode: s }),
                    (0, l.jsx)(i.p, {
                        id: v,
                        name: "email",
                        type: a === u.Pd.EMAIL ? "email" : "text",
                        value: m,
                        inputRef: C,
                        placeholder: A,
                        "aria-label": d,
                        required: f,
                        onChange: function (e) {
                            let t = (0, u.Vl)(a, e) ? s : "";
                            w(e, t);
                        },
                        autoComplete: E,
                        autoCapitalize: N,
                        autoCorrect: k,
                        autoFocus: g,
                        maxLength: y,
                        spellCheck: x,
                        className: U.I6,
                        inputClassName: U.LF,
                        onFocus: () => I(!0),
                        onBlur: () => I(!1),
                    }),
                ],
            }),
        }),
    });
}
