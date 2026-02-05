s.d(t, { A: () => m });
var r = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    l = s(421380),
    o = s(397927),
    h = s(915089),
    c = s(628387),
    d = s(920768),
    u = s(291255),
    p = s(713545);
function m(e) {
    let {
            alpha2: t,
            countryCode: s,
            forceMode: a,
            label: m,
            error: C,
            className: A,
            required: g,
            value: E,
            setRef: S,
            placeholder: f,
            autoFocus: x,
            maxLength: y,
            spellCheck: w,
            autoComplete: N,
            autoCapitalize: j,
            autoCorrect: k,
            onChange: v,
            inputClassName: T,
        } = e,
        _ = (0, h.GV)(),
        [O, P] = n.useState(!1),
        L = (0, c.Vl)(a, E);
    return (0, r.jsx)("div", {
        className: A ?? void 0,
        children: (0, r.jsx)(o.D0$, {
            label: m,
            errorMessage: C,
            required: g,
            id: _,
            children: (0, r.jsxs)("div", {
                className: i()(p.hF, u.hF, T, { [p.z3]: null != C, [p.in]: O }),
                children: [
                    (0, r.jsx)(d.A, { show: L, alpha2: t, countryCode: s }),
                    (0, r.jsx)(l.ob, {
                        id: _,
                        name: "email",
                        type: a === c.Pd.EMAIL ? "email" : "text",
                        value: E,
                        inputRef: S,
                        placeholder: f,
                        "aria-label": m,
                        required: g,
                        onChange: function (e) {
                            let t = (0, c.Vl)(a, e) ? s : "";
                            v(e, t);
                        },
                        autoComplete: N,
                        autoCapitalize: j,
                        autoCorrect: k,
                        autoFocus: x,
                        maxLength: y,
                        spellCheck: w,
                        className: u.I6,
                        inputClassName: u.LF,
                        onFocus: () => P(!0),
                        onBlur: () => P(!1),
                    }),
                ],
            }),
        }),
    });
}
