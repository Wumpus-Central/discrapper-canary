l.d(e, { default: () => L }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(189213),
    r = l(331322),
    u = l(534514),
    s = l(144228),
    d = l(260598),
    b = l(145331),
    E = l(670455),
    v = l(985018);
let O = "other";
function f(t) {
    return { name: t.label, value: t.value };
}
function g(t) {
    let e = t.freeformText.trim().slice(0, E.u0);
    return e.length > 0 ? e : null;
}
function _(t) {
    return t.selectedOption?.value;
}
function o(t) {
    var e;
    if (null == _(t)) return !1;
    if (((e = t.selectedOption), e?.value === O)) {
        let e = g(t);
        return null != e && e.length > 0;
    }
    return !0;
}
function U() {
    return [
        { value: "missing_expected_result", label: v.intl.string(v.t["4DEniX"]) },
        { value: "no_results", label: v.intl.string(v.t.jlh29e) },
        { value: "required_multiple_searches", label: v.intl.string(v.t.TpGBIB) },
        { value: "buried_expected_result", label: v.intl.string(v.t.Zh6bNN) },
        { value: "irrelevant_results", label: v.intl.string(v.t.WCiDBF) },
        { value: "inadequate_filters", label: v.intl.string(v.t.mf36b7) },
        { value: "hard_to_scan_results", label: v.intl.string(v.t.ECI0Of) },
        { value: O, label: v.intl.string(v.t.oxbtmN) },
    ];
}
function h() {
    return [
        { value: "looking_for_known_answer", label: v.intl.string(v.t["Str6/o"]) },
        { value: "looking_for_unknown_answer", label: v.intl.string(v.t.DePZNY) },
        { value: "message_from_specific_author", label: v.intl.string(v.t["sGKG/Y"]) },
        { value: "images_and_files_results", label: v.intl.string(v.t.DYLXHx) },
        { value: "link_results", label: v.intl.string(v.t.a1ZtE8) },
        { value: "specific_topic", label: v.intl.string(v.t.EIHXbc) },
        { value: "navigation_results", label: v.intl.string(v.t["6wKpiV"]) },
        { value: O, label: v.intl.string(v.t.RBmOLj) },
    ];
}
var S = l(930932);
function N(t) {
    let { getOptions: e } = t,
        l = a.useMemo(() => {
            let t = e();
            return (0, S.ed)(t, O);
        }, [e]),
        [n, i] = a.useState(null),
        [r, u] = a.useState(""),
        [s, d] = a.useState(!1),
        b = a.useCallback((t) => {
            d(!0), i(t);
        }, []),
        E = a.useCallback((t) => {
            u(t);
        }, []);
    return a.useMemo(
        () => ({
            options: l,
            selectedOption: n,
            freeformText: r,
            isFreeformEnabled: s,
            selectOption: b,
            onFreeformTextChange: E,
        }),
        [l, n, r, s, b, E],
    );
}
function c(t) {
    let {
            title: e,
            options: l,
            selectedOption: i,
            freeformText: b,
            isFreeformEnabled: O,
            selectOption: g,
            onFreeformTextChange: _,
        } = t,
        o = a.useMemo(() => l.map(f), [l]),
        U = a.useCallback(
            (t) => {
                let e = l.find((e) => e.value === t);
                null != e && g(e);
            },
            [g, l],
        );
    return (0, n.jsxs)(r.B, {
        gap: 24,
        children: [
            (0, n.jsxs)(r.B, {
                gap: 16,
                children: [
                    (0, n.jsx)(u.D, { variant: "heading-lg/semibold", color: "text-strong", children: e }),
                    (0, n.jsx)(s.z, { options: o, value: i?.value, onChange: U }),
                ],
            }),
            (0, n.jsxs)(r.B, {
                gap: 16,
                children: [
                    (0, n.jsx)(u.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: v.intl.string(v.t.oV10fv),
                    }),
                    (0, n.jsx)(d.f, { value: b, maxLength: E.u0, onChange: _, disabled: !O }),
                ],
            }),
        ],
    });
}
let L = function (t) {
    let { searchContext: e, rating: l, transitionState: r, onClose: u } = t,
        s = N({ getOptions: U }),
        d = N({ getOptions: h }),
        O = l === E.P0.BAD,
        { questionItems: f, questionTitles: S } = a.useMemo(() => {
            let t = [],
                e = [];
            return (
                O && (t.push(s), e.push(v.intl.string(v.t.UyBQF7))),
                t.push(d),
                e.push(v.intl.string(v.t.LhMLCk)),
                { questionItems: t, questionTitles: e }
            );
        }, [O, d, s]);
    a.useEffect(() => {
        (0, b.wU)({ rating: l, searchContext: e });
    }, [l, e]);
    let [L, C] = a.useState(0),
        D = 0 === L,
        I = L === f.length - 1,
        V = a.useMemo(() => {
            let t = f[L],
                e = S[L];
            return (0, n.jsx)(c, { title: e, ...t });
        }, [f, S, L]),
        T = a.useMemo(() => f.every(o), [f]),
        p = a.useMemo(() => o(f[L]), [f, L]),
        A = a.useCallback(() => {
            T &&
                ((0, b.uZ)({
                    rating: l,
                    searchContext: e,
                    unsatisfiedQuestionOption: O ? _(s) : null,
                    unsatisfiedQuestionText: O ? g(s) : null,
                    describeSearchQuestionOption: _(d),
                    describeSearchQuestionText: g(d),
                }),
                u());
        }, [T, l, e, O, s, d, u]),
        R = a.useCallback(() => {
            D ? u() : C(L - 1);
        }, [D, L, u]),
        j = a.useCallback(() => {
            C(L + 1);
        }, [L]),
        M = a.useMemo(() => {
            let t = [];
            return (
                D
                    ? t.push({ variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: u })
                    : t.push({ variant: "secondary", text: v.intl.string(v.t["13/7kX"]), onClick: R }),
                I
                    ? t.push({ variant: "primary", text: v.intl.string(v.t["4Zpxtl"]), onClick: A, disabled: !T })
                    : t.push({ variant: "primary", text: v.intl.string(v.t.PDTjLN), onClick: j, disabled: !p }),
                t
            );
        }, [D, I, T, p, u, R, A, j]);
    return (0, n.jsx)(i.Modal, {
        title: v.intl.string(v.t.LRGdVy),
        actions: M,
        onClose: u,
        transitionState: r,
        children: V,
    });
};
