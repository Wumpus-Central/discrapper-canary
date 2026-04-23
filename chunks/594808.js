n.d(t, { Ay: () => A, PS: () => m, S0: () => g });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(27867),
    s = n(17928),
    c = n(863610),
    u = n(695366),
    d = n(834730),
    E = n(814890),
    p = n(436283),
    _ = n(296043),
    h = n(652215),
    T = n(985018),
    I = n(304033);
function f(e) {
    return { text: e, icon: (0, l.jsx)(c.n, { className: I.Kk, dotRadius: 3.5, themed: !0 }) };
}
function m(e) {
    return {
        text: e ?? T.intl.string(T.t.VCsUJu),
        color: "text-feedback-critical",
        icon: (0, l.jsx)(u.E, { size: "xs", color: "currentColor", className: a()(I.Kk, I.ik) }),
    };
}
function g(e) {
    let { className: t, icon: n, text: i, color: r } = e;
    return (0, l.jsxs)("div", {
        className: a()(I.iE, t),
        children: [
            n,
            (0, l.jsx)(d.E, { variant: "text-md/normal", color: r, scaleFontToUserSetting: !0, children: i }),
        ],
    });
}
let A = i.memo(function (e) {
    let { message: t, className: n, component: r } = e,
        a = (0, o.A)(),
        c = (0, s.bG)([p.Ay], () => p.Ay.getInteraction(t), [t]);
    i.useEffect(() => {
        let e = null;
        if (t.hasFlag(h.pr7.LOADING) && null != c) {
            let n = (0, _.I5)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => a(), 1e3 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [a, c, t]);
    let u = null;
    if (null == r)
        u = (function (e, t) {
            switch ((0, _.fK)(t, e)) {
                case _.h0.SENDING:
                    return f(T.intl.string(T.t.RiLfBY));
                case _.h0.CREATED:
                    return f(T.intl.formatToPlainString(T.t["7ePV4t"], { applicationName: t.author.username }));
                case _.h0.TIMED_OUT:
                    return m(T.intl.string(T.t.h8hzPd));
                case _.h0.FAILED:
                    return m(t.interactionError);
            }
        })(c, t);
    else {
        let e = (0, E.zv)(c, t, r);
        null != e && (u = m(e));
    }
    if (null == u) return null;
    let { text: d, icon: I, color: A } = u;
    return (0, l.jsx)(g, { icon: I, text: d, className: n, color: A });
});
