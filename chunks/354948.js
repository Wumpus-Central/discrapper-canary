s.d(t, { A: () => q });
var n = s(477900),
    r = s(582128),
    a = s(503698),
    i = s.n(a),
    l = s(573725),
    o = s(452027),
    c = s(915089),
    d = s(628387),
    u = s(941143),
    h = s(717421),
    p = s(265872),
    m = s(939249),
    N = s(557722),
    E = s(91871),
    g = s.n(E),
    f = s(435558),
    A = s.n(f),
    y = s(96337),
    x = s(404778),
    I = s(683438),
    w = s(305866),
    C = s(317097),
    v = s(559106),
    _ = s(933832),
    j = s(661531),
    S = s(235986),
    b = s(650583),
    T = s(858918),
    k = s(221851);
let P = A().memoize((e) => {
    let t = !1;
    if (null != e && (0, C.qt)(e)) {
        let s = (0, C.LX)(e);
        null != s && (t = 0.2 > (0, C.OK)(s));
    }
    return t ? j.A.unsafe_rawColors.BLACK.css : j.A.unsafe_rawColors.WHITE.css;
});
class L extends r.PureComponent {
    state = { color: P(this.props.color) };
    render() {
        let e,
            { selected: t, color: s, className: r, children: a } = this.props,
            l = P(s);
        return (
            t
                ? (e = { color: l, background: s ?? j.A.unsafe_rawColors.BRAND_500.css })
                : null != s && (e = { color: s }),
            (0, n.jsx)(v.vN, {
                offset: { left: 4 },
                children: (0, n.jsxs)(S.A, {
                    className: i()(T.OR, r, { [T.wH]: t }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: S.A.Align.CENTER,
                    style: { ...e, ...this.props.style },
                    role: "button",
                    tabIndex: 0,
                    children: [
                        (0, n.jsx)(S.A, { align: S.A.Align.CENTER, className: T.Ix, shrink: 1, children: a }),
                        t &&
                            (0, n.jsx)(S.A, {
                                wrap: S.A.Wrap.WRAP,
                                className: k.Gf,
                                grow: 0,
                                shrink: 0,
                                children: (0, n.jsx)(_.CheckmarkLargeIcon, { size: "md", color: l }),
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
var O = s(968788);
function R() {
    return (0, n.jsx)(x.c, { className: O.yF });
}
function G(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: O.Fm, children: t });
}
class D extends r.PureComponent {
    static defaultProps = { autoFocus: !0 };
    render() {
        return (0, n.jsx)(I.I, { ...this.props, size: "sm" });
    }
}
class F extends r.PureComponent {
    static SearchBar = D;
    static Item = L;
    static Divider = R;
    static Empty = G;
    render() {
        let { className: e, children: t } = this.props;
        return (0, n.jsx)(w.l, { className: i()(O.qE, e), "aria-label": this.props["aria-label"], children: t });
    }
}
var M = s(364522),
    K = s(423764),
    W = s(105292),
    B = s(352412),
    U = s(969426);
class $ extends r.PureComponent {
    constructor(e) {
        (super(e), (this.state = { query: "" }));
    }
    renderItems() {
        let { query: e } = this.state,
            t = y.A.flatMap((e, t) => {
                let { alpha2: s, phoneCountryCodes: r, name: a } = e,
                    i = (0, K.Gw)(s);
                return r.map((e) => ({
                    key: `${t}-${e}`,
                    name: a,
                    translatedName: i,
                    countryData: { name: a, alpha2: s, code: e },
                    children: (0, n.jsxs)(S.A, {
                        className: B.kw,
                        justify: S.A.Justify.CENTER,
                        align: S.A.Align.CENTER,
                        children: [
                            (0, n.jsx)(S.A.Child, { className: B.GL, children: i }),
                            (0, n.jsx)(S.A.Child, { className: B.kf, grow: 0, shrink: 0, children: e }),
                        ],
                    }),
                }));
            }),
            s = A()(t)
                .filter(
                    (t) =>
                        0 === e.length ||
                        g()(e.toLowerCase(), t.name.toLowerCase()) ||
                        g()(e.toLowerCase(), t.translatedName.toLowerCase()),
                )
                .map((e) =>
                    (0, r.createElement)(F.Item, { ...e, key: e.key, onClick: () => this.onClick(e.countryData) }),
                )
                .value();
        return 0 === s.length
            ? (0, n.jsx)(F.Empty, { children: W.intl.string(W.t.PoWNfe) })
            : (0, n.jsx)(M.Ar, { className: B.Dm, children: s });
    }
    render() {
        let { className: e } = this.props;
        return (0, n.jsxs)(F, {
            className: i()(B.eQ, U.Cw, e),
            children: [
                (0, n.jsx)(F.SearchBar, {
                    query: this.state.query,
                    placeholder: W.intl.string(W.t.hGOODh),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off",
                }),
                (0, n.jsx)(F.Divider, {}),
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
var H = s(931952);
function z(e) {
    let { show: t, alpha2: s, countryCode: a } = e,
        l = r.useRef(null),
        o = r.useRef(null),
        [c, d] = r.useState(0),
        [E, g] = r.useState(!1);
    r.useEffect(() => {
        function e() {
            d(t ? (o.current?.getBoundingClientRect().width ?? 0) : 0);
        }
        return (e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
    }, [t, s, a]);
    let f = (0, h.z)({
        width: `${c}px`,
        onStart: () => {
            g(!0);
        },
        onRest: () => {
            g(!1);
        },
    });
    return (0, n.jsx)(p.Y, {
        targetElementRef: l,
        position: "top",
        renderPopout: (e) =>
            (0, n.jsx)($, {
                className: H.SW,
                onClick: (t) => {
                    (N.A.setCountryCode(t), e.closePopout());
                },
            }),
        children: (e) =>
            (0, n.jsx)("div", {
                className: i()(H.nw, { [H.R]: !(t || E) }),
                ref: l,
                children: (0, n.jsx)(u.animated.div, {
                    className: H.kL,
                    style: f,
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
var V = s(315073),
    Z = s(151167);
function q(e) {
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
            placeholder: g,
            autoFocus: f,
            maxLength: A,
            spellCheck: y,
            autoComplete: x,
            autoCapitalize: I,
            autoCorrect: w,
            onChange: C,
            inputClassName: v,
        } = e,
        _ = (0, c.GV)(),
        [j, S] = r.useState(!1),
        b = (0, d.Vl)(a, N);
    return (0, n.jsx)("div", {
        className: p ?? void 0,
        children: (0, n.jsx)(o.D, {
            label: u,
            errorMessage: h,
            required: m,
            id: _,
            children: (0, n.jsxs)("div", {
                className: i()(Z.hF, V.hF, v, { [Z.z3]: null != h, [Z.in]: j }),
                children: [
                    (0, n.jsx)(z, { show: b, alpha2: t, countryCode: s }),
                    (0, n.jsx)(l.p, {
                        id: _,
                        name: "email",
                        type: a === d.Pd.EMAIL ? "email" : "text",
                        value: N,
                        inputRef: E,
                        placeholder: g,
                        "aria-label": u,
                        required: m,
                        onChange: function (e) {
                            let t = (0, d.Vl)(a, e) ? s : "";
                            C(e, t);
                        },
                        autoComplete: x,
                        autoCapitalize: I,
                        autoCorrect: w,
                        autoFocus: f,
                        maxLength: A,
                        spellCheck: y,
                        className: V.I6,
                        inputClassName: V.LF,
                        onFocus: () => S(!0),
                        onBlur: () => S(!1),
                    }),
                ],
            }),
        }),
    });
}
