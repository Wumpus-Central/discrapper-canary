s.d(t, { A: () => m });
var r = s(627968),
    n = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(573725),
    o = s(452027),
    c = s(915089),
    h = s(628387),
    d = s(920768),
    u = s(145046),
    p = s(482188);
function m(e) {
    let {
            alpha2: t,
            countryCode: s,
            forceMode: l,
            label: m,
            error: C,
            className: f,
            required: A,
            value: g,
            setRef: y,
            placeholder: x,
            autoFocus: E,
            maxLength: N,
            spellCheck: S,
            autoComplete: w,
            autoCapitalize: k,
            autoCorrect: j,
            onChange: v,
            inputClassName: R,
        } = e,
        _ = (0, c.GV)(),
        [T, P] = n.useState(!1),
        I = (0, h.Vl)(l, g);
    return (0, r.jsx)("div", {
        className: f ?? void 0,
        children: (0, r.jsx)(o.D, {
            label: m,
            errorMessage: C,
            required: A,
            id: _,
            children: (0, r.jsxs)("div", {
                className: a()(p.hF, u.hF, R, { [p.z3]: null != C, [p.in]: T }),
                children: [
                    (0, r.jsx)(d.A, { show: I, alpha2: t, countryCode: s }),
                    (0, r.jsx)(i.p, {
                        id: _,
                        name: "email",
                        type: l === h.Pd.EMAIL ? "email" : "text",
                        value: g,
                        inputRef: y,
                        placeholder: x,
                        "aria-label": m,
                        required: A,
                        onChange: function (e) {
                            let t = (0, h.Vl)(l, e) ? s : "";
                            v(e, t);
                        },
                        autoComplete: w,
                        autoCapitalize: k,
                        autoCorrect: j,
                        autoFocus: E,
                        maxLength: N,
                        spellCheck: S,
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
