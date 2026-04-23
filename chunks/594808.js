"use strict";
n.d(t, { Ay: () => C, PS: () => v, S0: () => x });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(27867),
    o = n(311907),
    c = n(863610),
    u = n(695366),
    d = n(834730),
    m = n(814890),
    g = n(436283),
    h = n(296043),
    p = n(652215),
    A = n(985018),
    _ = n(304033);
function f(e) {
    return { text: e, icon: (0, l.jsx)(c.n, { className: _.Kk, dotRadius: 3.5, themed: !0 }) };
}
function v(e) {
    return {
        text: e ?? A.intl.string(A.t.VCsUJu),
        color: "text-feedback-critical",
        icon: (0, l.jsx)(u.E, { size: "xs", color: "currentColor", className: i()(_.Kk, _.ik) }),
    };
}
function x(e) {
    let { className: t, icon: n, text: a, color: s } = e;
    return (0, l.jsxs)("div", {
        className: i()(_.iE, t),
        children: [
            n,
            (0, l.jsx)(d.E, { variant: "text-md/normal", color: s, scaleFontToUserSetting: !0, children: a }),
        ],
    });
}
let C = a.memo(function (e) {
    let { message: t, className: n, component: s } = e,
        i = (0, r.A)(),
        c = (0, o.bG)([g.Ay], () => g.Ay.getInteraction(t), [t]);
    a.useEffect(() => {
        let e = null;
        if (t.hasFlag(p.pr7.LOADING) && null != c) {
            let n = (0, h.I5)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => i(), 1e3 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [i, c, t]);
    let u = null;
    if (null == s)
        u = (function (e, t) {
            switch ((0, h.fK)(t, e)) {
                case h.h0.SENDING:
                    return f(A.intl.string(A.t.RiLfBY));
                case h.h0.CREATED:
                    return f(A.intl.formatToPlainString(A.t["7ePV4t"], { applicationName: t.author.username }));
                case h.h0.TIMED_OUT:
                    return v(A.intl.string(A.t.h8hzPd));
                case h.h0.FAILED:
                    return v(t.interactionError);
            }
        })(c, t);
    else {
        let e = (0, m.zv)(c, t, s);
        null != e && (u = v(e));
    }
    if (null == u) return null;
    let { text: d, icon: _, color: C } = u;
    return (0, l.jsx)(x, { icon: _, text: d, className: n, color: C });
});
