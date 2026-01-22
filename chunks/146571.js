r.d(t, {
    A: () => f,
}),
    r(896048);
var n = r(627968),
    s = r(64700),
    i = r(503698),
    a = r.n(i),
    l = r(421380),
    o = r(397927),
    c = r(915089),
    u = r(628387),
    d = r(920768),
    h = r(291255),
    p = r(713545);

function f(e) {
    let {
            alpha2: t,
            countryCode: r,
            forceMode: i,
            label: f,
            error: y,
            className: m,
            required: g,
            value: O,
            setRef: b,
            placeholder: j,
            autoFocus: w,
            maxLength: C,
            spellCheck: S,
            autoComplete: v,
            autoCapitalize: A,
            autoCorrect: E,
            onChange: x,
            inputClassName: P,
        } = e,
        N = (0, c.GV)(),
        [k, T] = s.useState(!1),
        _ = (0, u.Vl)(i, O);
    return (0, n.jsx)("div", {
        className: null != m ? m : void 0,
        children: (0, n.jsx)(o.D0$, {
            label: f,
            errorMessage: y,
            required: g,
            id: N,
            children: (0, n.jsxs)("div", {
                className: a()(p.hF, h.hF, P, {
                    [p.z3]: null != y,
                    [p.in]: k,
                }),
                children: [
                    (0, n.jsx)(d.A, {
                        show: _,
                        alpha2: t,
                        countryCode: r,
                    }),
                    (0, n.jsx)(l.ob, {
                        id: N,
                        name: "email",
                        type: i === u.Pd.EMAIL ? "email" : "text",
                        value: O,
                        inputRef: b,
                        placeholder: j,
                        "aria-label": f,
                        required: g,
                        onChange: function (e) {
                            let t = (0, u.Vl)(i, e) ? r : "";
                            x(e, t);
                        },
                        autoComplete: v,
                        autoCapitalize: A,
                        autoCorrect: E,
                        autoFocus: w,
                        maxLength: C,
                        spellCheck: S,
                        className: h.I6,
                        inputClassName: h.LF,
                        onFocus: () => T(!0),
                        onBlur: () => T(!1),
                    }),
                ],
            }),
        }),
    });
}
