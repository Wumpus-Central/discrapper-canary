s.d(t, { A: () => Q });
var n = s(627968),
    r = s(64700),
    a = s(503698),
    i = s.n(a),
    l = s(573725),
    o = s(452027),
    c = s(915089),
    d = s(628387),
    u = s(922139),
    h = s(717421),
    p = s(922016),
    m = s(939249),
    N = s(557722),
    E = s(91871),
    y = s.n(E),
    A = s(735438),
    f = s.n(A),
    g = s(96337),
    w = s(404778),
    I = s(305866),
    x = s(892547),
    C = s(317097),
    v = s(187322),
    S = s(661531),
    _ = s(933832),
    j = s(235986),
    b = s(650583),
    T = s(330273),
    k = s(818050);
let P = f().memoize((e) => {
    let t = !1;
    if (null != e && (0, C.qt)(e)) {
        let s = (0, C.LX)(e);
        null != s && (t = 0.2 > (0, C.OK)(s));
    }
    return t ? S.A.unsafe_rawColors.BLACK.css : S.A.unsafe_rawColors.WHITE.css;
});
class L extends r.PureComponent {
    state = { color: P(this.props.color) };
    render() {
        let e,
            { selected: t, color: s, className: r, children: a } = this.props,
            l = P(s);
        return (
            t
                ? (e = { color: l, background: s ?? S.A.unsafe_rawColors.BRAND_500.css })
                : null != s && (e = { color: s }),
            (0, n.jsx)(v.vN, {
                offset: { left: 4 },
                children: (0, n.jsxs)(j.A, {
                    className: i()(T.OR, r, { [T.wH]: t }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: j.A.Align.CENTER,
                    style: { ...e, ...this.props.style },
                    role: "button",
                    tabIndex: 0,
                    children: [
                        (0, n.jsx)(j.A, { align: j.A.Align.CENTER, className: T.Ix, shrink: 1, children: a }),
                        t &&
                            (0, n.jsx)(j.A, {
                                wrap: j.A.Wrap.WRAP,
                                className: k.Gf,
                                grow: 0,
                                shrink: 0,
                                children: (0, n.jsx)(_.A, { size: "md", color: l }),
                            }),
                    ],
                }),
            })
        );
    }
    handleKeyUp = (e) => {
        if (e.key === b.dh.ENTER || e.key === b.dh.SPACE) {
            let { onClick: e, ...t } = this.props;
            e(t);
        }
    };
    handleClick = () => {
        let { onClick: e, ...t } = this.props;
        e(t);
    };
}
var O = s(99879);
let G = () => (0, n.jsx)(w.c, { className: O.yF }),
    R = (e) => {
        let { children: t } = e;
        return (0, n.jsx)("div", { className: O.Fm, children: t });
    };
class D extends r.PureComponent {
    static defaultProps = { autoFocus: !0 };
    render() {
        return (0, n.jsx)(x.I, { ...this.props, size: "sm" });
    }
}
class M extends r.PureComponent {
    static SearchBar = D;
    static Item = L;
    static Divider = G;
    static Empty = R;
    render() {
        let { className: e, children: t } = this.props;
        return (0, n.jsx)(I.l, { className: i()(O.qE, e), "aria-label": this.props["aria-label"], children: t });
    }
}
var F = s(364522),
    K = s(423764),
    W = s(375708),
    U = s(441153),
    $ = s(604949);
class B extends r.PureComponent {
    constructor(e) {
        super(e), (this.state = { query: "" });
    }
    renderItems() {
        let { query: e } = this.state,
            t = g.A.flatMap((e, t) => {
                let { alpha2: s, phoneCountryCodes: r, name: a } = e,
                    i = (0, K.Gw)(s);
                return r.map((e) => ({
                    key: `${t}-${e}`,
                    name: a,
                    translatedName: i,
                    countryData: { name: a, alpha2: s, code: e },
                    children: (0, n.jsxs)(j.A, {
                        className: U.kw,
                        justify: j.A.Justify.CENTER,
                        align: j.A.Align.CENTER,
                        children: [
                            (0, n.jsx)(j.A.Child, { className: U.GL, children: i }),
                            (0, n.jsx)(j.A.Child, { className: U.kf, grow: 0, shrink: 0, children: e }),
                        ],
                    }),
                }));
            }),
            s = f()(t)
                .filter(
                    (t) =>
                        0 === e.length ||
                        y()(e.toLowerCase(), t.name.toLowerCase()) ||
                        y()(e.toLowerCase(), t.translatedName.toLowerCase()),
                )
                .map((e) =>
                    (0, r.createElement)(M.Item, { ...e, key: e.key, onClick: () => this.onClick(e.countryData) }),
                )
                .value();
        return 0 === s.length
            ? (0, n.jsx)(M.Empty, { children: W.intl.string(W.t.PoWNfe) })
            : (0, n.jsx)(F.Ar, { className: U.Dm, children: s });
    }
    render() {
        let { className: e } = this.props;
        return (0, n.jsxs)(M, {
            className: i()(U.eQ, $.Cw, e),
            children: [
                (0, n.jsx)(M.SearchBar, {
                    query: this.state.query,
                    placeholder: W.intl.string(W.t.hGOODh),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off",
                }),
                (0, n.jsx)(M.Divider, {}),
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
var H = s(696841);
function z(e) {
    let { show: t, alpha2: s, countryCode: a } = e,
        l = r.useRef(null),
        o = r.useRef(null),
        [c, d] = r.useState(0),
        [E, y] = r.useState(!1);
    r.useEffect(() => {
        function e() {
            d(t ? (o.current?.getBoundingClientRect().width ?? 0) : 0);
        }
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }, [t, s, a]);
    let A = (0, h.z)({
        width: `${c}px`,
        onStart: () => {
            y(!0);
        },
        onRest: () => {
            y(!1);
        },
    });
    return (0, n.jsx)(p.Y, {
        targetElementRef: l,
        position: "top",
        renderPopout: (e) =>
            (0, n.jsx)(B, {
                className: H.SW,
                onClick: (t) => {
                    N.A.setCountryCode(t), e.closePopout();
                },
            }),
        children: (e) =>
            (0, n.jsx)("div", {
                className: i()(H.nw, { [H.R]: !(t || E) }),
                ref: l,
                children: (0, n.jsx)(u.animated.div, {
                    className: H.kL,
                    style: A,
                    children: (0, n.jsxs)("div", {
                        className: H.WH,
                        ref: o,
                        children: [
                            (0, n.jsxs)(m.D, { ...e, className: H.kf, children: [s, " ", a] }),
                            (0, n.jsx)("div", { className: H.me }),
                        ],
                    }),
                }),
            }),
    });
}
var V = s(145046),
    Z = s(482188);
function Q(e) {
    let {
            alpha2: t,
            countryCode: s,
            forceMode: a,
            label: u,
            error: h,
            className: p,
            required: m,
            value: N,
            setRef: E,
            placeholder: y,
            autoFocus: A,
            maxLength: f,
            spellCheck: g,
            autoComplete: w,
            autoCapitalize: I,
            autoCorrect: x,
            onChange: C,
            inputClassName: v,
        } = e,
        S = (0, c.GV)(),
        [_, j] = r.useState(!1),
        b = (0, d.Vl)(a, N);
    return (0, n.jsx)("div", {
        className: p ?? void 0,
        children: (0, n.jsx)(o.D, {
            label: u,
            errorMessage: h,
            required: m,
            id: S,
            children: (0, n.jsxs)("div", {
                className: i()(Z.hF, V.hF, v, { [Z.z3]: null != h, [Z.in]: _ }),
                children: [
                    (0, n.jsx)(z, { show: b, alpha2: t, countryCode: s }),
                    (0, n.jsx)(l.p, {
                        id: S,
                        name: "email",
                        type: a === d.Pd.EMAIL ? "email" : "text",
                        value: N,
                        inputRef: E,
                        placeholder: y,
                        "aria-label": u,
                        required: m,
                        onChange: function (e) {
                            let t = (0, d.Vl)(a, e) ? s : "";
                            C(e, t);
                        },
                        autoComplete: w,
                        autoCapitalize: I,
                        autoCorrect: x,
                        autoFocus: A,
                        maxLength: f,
                        spellCheck: g,
                        className: V.I6,
                        inputClassName: V.LF,
                        onFocus: () => j(!0),
                        onBlur: () => j(!1),
                    }),
                ],
            }),
        }),
    });
}
