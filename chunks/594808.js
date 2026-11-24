var r = n(477900),
    i = n(582128),
    o = n(503698),
    l = n.n(o),
    s = n(265431),
    c = n(855986),
    a = n(863610),
    u = n(695366),
    d = n(834730),
    m = n(257249),
    h = n(436283),
    f = n(964363),
    p = n(652215),
    A = n(792996),
    E = n(389760);
function C(e) {
    return { text: e, icon: (0, r.jsx)(a.n, { className: E.Kk, dotRadius: 3.5, themed: !0 }) };
}
function g(e) {
    return {
        text: e ?? A.intl.string(A.t.VCsUJu),
        color: "text-feedback-critical",
        icon: (0, r.jsx)(u.CircleErrorIcon, { size: "xs", color: "currentColor", className: l()(E.Kk, E.ik) }),
    };
}
function x(e) {
    let { className: t, icon: n, text: i, color: o } = e;
    return (0, r.jsxs)("div", {
        className: l()(E.iE, t),
        children: [
            n,
            (0, r.jsx)(d.E, { variant: "body-md/normal", color: o, scaleFontToUserSetting: !0, children: i }),
        ],
    });
}
let b = i.memo(function (e) {
    let { message: t, className: n, component: o } = e,
        l = (0, s.A)(),
        a = (0, c.bG)([h.Ay], () => h.Ay.getInteraction(t), [t]);
    i.useEffect(() => {
        let e = null;
        if (t.hasFlag(p.pr7.LOADING) && null != a) {
            let n = (0, f.I5)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => l(), 1e3 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [l, a, t]);
    let u = null;
    if (null == o)
        u = (function (e, t) {
            switch ((0, f.fK)(t, e)) {
                case f.h0.SENDING:
                    return C(A.intl.string(A.t.RiLfBY));
                case f.h0.CREATED:
                    return C(A.intl.formatToPlainString(A.t["7ePV4t"], { applicationName: t.author.username }));
                case f.h0.TIMED_OUT:
                    return g(A.intl.string(A.t.h8hzPd));
                case f.h0.FAILED:
                    return g(t.interactionError);
            }
        })(a, t);
    else {
        let e = (0, m.zv)(a, t, o);
        null != e && (u = g(e));
    }
    if (null == u) return null;
    let { text: d, icon: E, color: b } = u;
    return (0, r.jsx)(x, { icon: E, text: d, className: n, color: b });
});
n.d(t, {}, { Ay: b, PS: g, S0: x });
