"use strict";
n.d(t, { Ay: () => I, PS: () => A, S0: () => E });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(27867),
    o = n(17928),
    c = n(863610),
    d = n(695366),
    u = n(834730),
    _ = n(814890),
    p = n(436283),
    f = n(296043),
    h = n(652215),
    m = n(985018),
    g = n(304033);
function b(e) {
    return { text: e, icon: (0, i.jsx)(c.n, { className: g.Kk, dotRadius: 3.5, themed: !0 }) };
}
function A(e) {
    return {
        text: e ?? m.intl.string(m.t.VCsUJu),
        color: "text-feedback-critical",
        icon: (0, i.jsx)(d.E, { size: "xs", color: "currentColor", className: s()(g.Kk, g.ik) }),
    };
}
function E(e) {
    let { className: t, icon: n, text: r, color: a } = e;
    return (0, i.jsxs)("div", {
        className: s()(g.iE, t),
        children: [
            n,
            (0, i.jsx)(u.E, { variant: "text-md/normal", color: a, scaleFontToUserSetting: !0, children: r }),
        ],
    });
}
let I = r.memo(function (e) {
    let { message: t, className: n, component: a } = e,
        s = (0, l.A)(),
        c = (0, o.bG)([p.Ay], () => p.Ay.getInteraction(t), [t]);
    r.useEffect(() => {
        let e = null;
        if (t.hasFlag(h.pr7.LOADING) && null != c) {
            let n = (0, f.I5)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => s(), 1e3 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [s, c, t]);
    let d = null;
    if (null == a)
        d = (function (e, t) {
            switch ((0, f.fK)(t, e)) {
                case f.h0.SENDING:
                    return b(m.intl.string(m.t.RiLfBY));
                case f.h0.CREATED:
                    return b(m.intl.formatToPlainString(m.t["7ePV4t"], { applicationName: t.author.username }));
                case f.h0.TIMED_OUT:
                    return A(m.intl.string(m.t.h8hzPd));
                case f.h0.FAILED:
                    return A(t.interactionError);
            }
        })(c, t);
    else {
        let e = (0, _.zv)(c, t, a);
        null != e && (d = A(e));
    }
    if (null == d) return null;
    let { text: u, icon: g, color: I } = d;
    return (0, i.jsx)(E, { icon: g, text: u, className: n, color: I });
});
