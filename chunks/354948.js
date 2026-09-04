n.d(t, { A: () => J });
var s = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    l = n(573725),
    o = n(452027),
    c = n(915089),
    d = n(628387),
    u = n(74445),
    h = n(717421),
    p = n(922016),
    m = n(939249),
    N = n(557722),
    E = n(91871),
    f = n.n(E),
    g = n(435558),
    y = n.n(g),
    A = n(96337),
    x = n(404778),
    I = n(683438),
    w = n(305866),
    C = n(317097),
    v = n(259678),
    S = n(933832),
    j = n(661531),
    _ = n(235986),
    b = n(650583),
    T = n(858918),
    k = n(221851);
let P = y().memoize((e) => {
    let t = !1;
    if (null != e && (0, C.qt)(e)) {
        let n = (0, C.LX)(e);
        null != n && (t = 0.2 > (0, C.OK)(n));
    }
    return t ? j.A.unsafe_rawColors.BLACK.css : j.A.unsafe_rawColors.WHITE.css;
});
class L extends r.PureComponent {
    state = { color: P(this.props.color) };
    render() {
        let e,
            { selected: t, color: n, className: r, children: a } = this.props,
            l = P(n);
        return (
            t
                ? (e = { color: l, background: n ?? j.A.unsafe_rawColors.BRAND_500.css })
                : null != n && (e = { color: n }),
            (0, s.jsx)(v.vN, {
                offset: { left: 4 },
                children: (0, s.jsxs)(_.A, {
                    className: i()(T.OR, r, { [T.wH]: t }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: _.A.Align.CENTER,
                    style: { ...e, ...this.props.style },
                    role: "button",
                    tabIndex: 0,
                    children: [
                        (0, s.jsx)(_.A, { align: _.A.Align.CENTER, className: T.Ix, shrink: 1, children: a }),
                        t &&
                            (0, s.jsx)(_.A, {
                                wrap: _.A.Wrap.WRAP,
                                className: k.Gf,
                                grow: 0,
                                shrink: 0,
                                children: (0, s.jsx)(S.CheckmarkLargeIcon, { size: "md", color: l }),
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
var O = n(968788);
function G() {
    return (0, s.jsx)(x.c, { className: O.yF });
}
function R(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: O.Fm, children: t });
}
class D extends r.PureComponent {
    static defaultProps = { autoFocus: !0 };
    render() {
        return (0, s.jsx)(I.I, { ...this.props, size: "sm" });
    }
}
class F extends r.PureComponent {
    static SearchBar = D;
    static Item = L;
    static Divider = G;
    static Empty = R;
    render() {
        let { className: e, children: t } = this.props;
        return (0, s.jsx)(w.l, { className: i()(O.qE, e), "aria-label": this.props["aria-label"], children: t });
    }
}
var M = n(364522),
    K = n(423764),
    W = n(375708),
    B = n(352412),
    U = n(969426);
class $ extends r.PureComponent {
    constructor(e) {
        super(e), (this.state = { query: "" });
    }
    renderItems() {
        let { query: e } = this.state,
            t = A.A.flatMap((e, t) => {
                let { alpha2: n, phoneCountryCodes: r, name: a } = e,
                    i = (0, K.Gw)(n);
                return r.map((e) => ({
                    key: `${t}-${e}`,
                    name: a,
                    translatedName: i,
                    countryData: { name: a, alpha2: n, code: e },
                    children: (0, s.jsxs)(_.A, {
                        className: B.kw,
                        justify: _.A.Justify.CENTER,
                        align: _.A.Align.CENTER,
                        children: [
                            (0, s.jsx)(_.A.Child, { className: B.GL, children: i }),
                            (0, s.jsx)(_.A.Child, { className: B.kf, grow: 0, shrink: 0, children: e }),
                        ],
                    }),
                }));
            }),
            n = y()(t)
                .filter(
                    (t) =>
                        0 === e.length ||
                        f()(e.toLowerCase(), t.name.toLowerCase()) ||
                        f()(e.toLowerCase(), t.translatedName.toLowerCase()),
                )
                .map((e) =>
                    (0, r.createElement)(F.Item, { ...e, key: e.key, onClick: () => this.onClick(e.countryData) }),
                )
                .value();
        return 0 === n.length
            ? (0, s.jsx)(F.Empty, { children: W.intl.string(W.t.PoWNfe) })
            : (0, s.jsx)(M.Ar, { className: B.Dm, children: n });
    }
    render() {
        let { className: e } = this.props;
        return (0, s.jsxs)(F, {
            className: i()(B.eQ, U.Cw, e),
            children: [
                (0, s.jsx)(F.SearchBar, {
                    query: this.state.query,
                    placeholder: W.intl.string(W.t.hGOODh),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off",
                }),
                (0, s.jsx)(F.Divider, {}),
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
var H = n(931952);
function z(e) {
    let { show: t, alpha2: n, countryCode: a } = e,
        l = r.useRef(null),
        o = r.useRef(null),
        [c, d] = r.useState(0),
        [E, f] = r.useState(!1);
    r.useEffect(() => {
        function e() {
            d(t ? (o.current?.getBoundingClientRect().width ?? 0) : 0);
        }
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }, [t, n, a]);
    let g = (0, h.z)({
        width: `${c}px`,
        onStart: () => {
            f(!0);
        },
        onRest: () => {
            f(!1);
        },
    });
    return (0, s.jsx)(p.Y, {
        targetElementRef: l,
        position: "top",
        renderPopout: (e) =>
            (0, s.jsx)($, {
                className: H.SW,
                onClick: (t) => {
                    N.A.setCountryCode(t), e.closePopout();
                },
            }),
        children: (e) =>
            (0, s.jsx)("div", {
                className: i()(H.nw, { [H.R]: !(t || E) }),
                ref: l,
                children: (0, s.jsx)(u.animated.div, {
                    className: H.kL,
                    style: g,
                    children: (0, s.jsxs)("div", {
                        className: H.WH,
                        ref: o,
                        children: [
                            (0, s.jsxs)(m.D, { ...e, className: H.kf, children: [n, " ", a] }),
                            (0, s.jsx)("div", { className: H.me }),
                        ],
                    }),
                }),
            }),
    });
}
var V = n(315073),
    Z = n(151167);
function J(e) {
    let {
            alpha2: t,
            countryCode: n,
            forceMode: a,
            label: u,
            error: h,
            className: p,
            required: m,
            value: N,
            setRef: E,
            placeholder: f,
            autoFocus: g,
            maxLength: y,
            spellCheck: A,
            autoComplete: x,
            autoCapitalize: I,
            autoCorrect: w,
            onChange: C,
            inputClassName: v,
        } = e,
        S = (0, c.GV)(),
        [j, _] = r.useState(!1),
        b = (0, d.Vl)(a, N);
    return (0, s.jsx)("div", {
        className: p ?? void 0,
        children: (0, s.jsx)(o.D, {
            label: u,
            errorMessage: h,
            required: m,
            id: S,
            children: (0, s.jsxs)("div", {
                className: i()(Z.hF, V.hF, v, { [Z.z3]: null != h, [Z.in]: j }),
                children: [
                    (0, s.jsx)(z, { show: b, alpha2: t, countryCode: n }),
                    (0, s.jsx)(l.p, {
                        id: S,
                        name: "email",
                        type: a === d.Pd.EMAIL ? "email" : "text",
                        value: N,
                        inputRef: E,
                        placeholder: f,
                        "aria-label": u,
                        required: m,
                        onChange: function (e) {
                            let t = (0, d.Vl)(a, e) ? n : "";
                            C(e, t);
                        },
                        autoComplete: x,
                        autoCapitalize: I,
                        autoCorrect: w,
                        autoFocus: g,
                        maxLength: y,
                        spellCheck: A,
                        className: V.I6,
                        inputClassName: V.LF,
                        onFocus: () => _(!0),
                        onBlur: () => _(!1),
                    }),
                ],
            }),
        }),
    });
}
