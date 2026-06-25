n.d(t, { A: () => Q });
var s = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    l = n(573725),
    o = n(452027),
    c = n(915089),
    d = n(628387),
    u = n(308186),
    h = n(717421),
    p = n(922016),
    m = n(939249),
    N = n(557722),
    E = n(91871),
    y = n.n(E),
    A = n(735438),
    f = n.n(A),
    g = n(96337),
    w = n(404778),
    I = n(305866),
    x = n(892547),
    C = n(317097),
    v = n(187322),
    S = n(661531),
    _ = n(933832),
    j = n(235986),
    b = n(650583),
    T = n(827553),
    k = n(373378);
let P = f().memoize((e) => {
    let t = !1;
    if (null != e && (0, C.qt)(e)) {
        let n = (0, C.LX)(e);
        null != n && (t = 0.2 > (0, C.OK)(n));
    }
    return t ? S.A.unsafe_rawColors.BLACK.css : S.A.unsafe_rawColors.WHITE.css;
});
class L extends r.PureComponent {
    state = { color: P(this.props.color) };
    render() {
        let e,
            { selected: t, color: n, className: r, children: a } = this.props,
            l = P(n);
        return (
            t
                ? (e = { color: l, background: n ?? S.A.unsafe_rawColors.BRAND_500.css })
                : null != n && (e = { color: n }),
            (0, s.jsx)(v.vN, {
                offset: { left: 4 },
                children: (0, s.jsxs)(j.A, {
                    className: i()(T.OR, r, { [T.wH]: t }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: j.A.Align.CENTER,
                    style: { ...e, ...this.props.style },
                    role: "button",
                    tabIndex: 0,
                    children: [
                        (0, s.jsx)(j.A, { align: j.A.Align.CENTER, className: T.Ix, shrink: 1, children: a }),
                        t &&
                            (0, s.jsx)(j.A, {
                                wrap: j.A.Wrap.WRAP,
                                className: k.Gf,
                                grow: 0,
                                shrink: 0,
                                children: (0, s.jsx)(_.A, { size: "md", color: l }),
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
var O = n(912871);
function G() {
    return (0, s.jsx)(w.c, { className: O.yF });
}
function R(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: O.Fm, children: t });
}
class D extends r.PureComponent {
    static defaultProps = { autoFocus: !0 };
    render() {
        return (0, s.jsx)(x.I, { ...this.props, size: "sm" });
    }
}
class M extends r.PureComponent {
    static SearchBar = D;
    static Item = L;
    static Divider = G;
    static Empty = R;
    render() {
        let { className: e, children: t } = this.props;
        return (0, s.jsx)(I.l, { className: i()(O.qE, e), "aria-label": this.props["aria-label"], children: t });
    }
}
var F = n(364522),
    K = n(423764),
    W = n(375708),
    U = n(189377),
    $ = n(794005);
class B extends r.PureComponent {
    constructor(e) {
        super(e), (this.state = { query: "" });
    }
    renderItems() {
        let { query: e } = this.state,
            t = g.A.flatMap((e, t) => {
                let { alpha2: n, phoneCountryCodes: r, name: a } = e,
                    i = (0, K.Gw)(n);
                return r.map((e) => ({
                    key: `${t}-${e}`,
                    name: a,
                    translatedName: i,
                    countryData: { name: a, alpha2: n, code: e },
                    children: (0, s.jsxs)(j.A, {
                        className: U.kw,
                        justify: j.A.Justify.CENTER,
                        align: j.A.Align.CENTER,
                        children: [
                            (0, s.jsx)(j.A.Child, { className: U.GL, children: i }),
                            (0, s.jsx)(j.A.Child, { className: U.kf, grow: 0, shrink: 0, children: e }),
                        ],
                    }),
                }));
            }),
            n = f()(t)
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
        return 0 === n.length
            ? (0, s.jsx)(M.Empty, { children: W.intl.string(W.t.PoWNfe) })
            : (0, s.jsx)(F.Ar, { className: U.Dm, children: n });
    }
    render() {
        let { className: e } = this.props;
        return (0, s.jsxs)(M, {
            className: i()(U.eQ, $.Cw, e),
            children: [
                (0, s.jsx)(M.SearchBar, {
                    query: this.state.query,
                    placeholder: W.intl.string(W.t.hGOODh),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off",
                }),
                (0, s.jsx)(M.Divider, {}),
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
var H = n(460553);
function z(e) {
    let { show: t, alpha2: n, countryCode: a } = e,
        l = r.useRef(null),
        o = r.useRef(null),
        [c, d] = r.useState(0),
        [E, y] = r.useState(!1);
    r.useEffect(() => {
        function e() {
            d(t ? (o.current?.getBoundingClientRect().width ?? 0) : 0);
        }
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }, [t, n, a]);
    let A = (0, h.z)({
        width: `${c}px`,
        onStart: () => {
            y(!0);
        },
        onRest: () => {
            y(!1);
        },
    });
    return (0, s.jsx)(p.Y, {
        targetElementRef: l,
        position: "top",
        renderPopout: (e) =>
            (0, s.jsx)(B, {
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
                    style: A,
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
var V = n(251030),
    Z = n(661772);
function Q(e) {
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
    return (0, s.jsx)("div", {
        className: p ?? void 0,
        children: (0, s.jsx)(o.D, {
            label: u,
            errorMessage: h,
            required: m,
            id: S,
            children: (0, s.jsxs)("div", {
                className: i()(Z.hF, V.hF, v, { [Z.z3]: null != h, [Z.in]: _ }),
                children: [
                    (0, s.jsx)(z, { show: b, alpha2: t, countryCode: n }),
                    (0, s.jsx)(l.p, {
                        id: S,
                        name: "email",
                        type: a === d.Pd.EMAIL ? "email" : "text",
                        value: N,
                        inputRef: E,
                        placeholder: y,
                        "aria-label": u,
                        required: m,
                        onChange: function (e) {
                            let t = (0, d.Vl)(a, e) ? n : "";
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
