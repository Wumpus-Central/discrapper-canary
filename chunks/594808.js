n.d(t, { Ay: () => T, PS: () => C, S0: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    l = n(27867),
    o = n(17928),
    c = n(863610),
    d = n(695366),
    u = n(834730),
    m = n(814890),
    h = n(436283),
    p = n(296043),
    f = n(652215),
    E = n(985018),
    A = n(304033);
function g(e) {
    return { text: e, icon: (0, i.jsx)(c.n, { className: A.Kk, dotRadius: 3.5, themed: !0 }) };
}
function C(e) {
    return {
        text: e ?? E.intl.string(E.t.VCsUJu),
        color: "text-feedback-critical",
        icon: (0, i.jsx)(d.E, { size: "xs", color: "currentColor", className: a()(A.Kk, A.ik) }),
    };
}
function S(e) {
    let { className: t, icon: n, text: r, color: s } = e;
    return (0, i.jsxs)("div", {
        className: a()(A.iE, t),
        children: [
            n,
            (0, i.jsx)(u.E, { variant: "text-md/normal", color: s, scaleFontToUserSetting: !0, children: r }),
        ],
    });
}
let T = r.memo(function (e) {
    let { message: t, className: n, component: s } = e,
        a = (0, l.A)(),
        c = (0, o.bG)([h.Ay], () => h.Ay.getInteraction(t), [t]);
    r.useEffect(() => {
        let e = null;
        if (t.hasFlag(f.pr7.LOADING) && null != c) {
            let n = (0, p.I5)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => a(), 1e3 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [a, c, t]);
    let d = null;
    if (null == s)
        d = (function (e, t) {
            switch ((0, p.fK)(t, e)) {
                case p.h0.SENDING:
                    return g(E.intl.string(E.t.RiLfBY));
                case p.h0.CREATED:
                    return g(E.intl.formatToPlainString(E.t["7ePV4t"], { applicationName: t.author.username }));
                case p.h0.TIMED_OUT:
                    return C(E.intl.string(E.t.h8hzPd));
                case p.h0.FAILED:
                    return C(t.interactionError);
            }
        })(c, t);
    else {
        let e = (0, m.zv)(c, t, s);
        null != e && (d = C(e));
    }
    if (null == d) return null;
    let { text: u, icon: A, color: T } = d;
    return (0, i.jsx)(S, { icon: A, text: u, className: n, color: T });
});
