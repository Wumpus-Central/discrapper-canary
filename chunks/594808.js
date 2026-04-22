"use strict";
r.d(t, { Ay: () => T, PS: () => A, S0: () => E });
var i = r(627968),
    a = r(64700),
    n = r(503698),
    l = r.n(n),
    s = r(27867),
    o = r(311907),
    c = r(863610),
    d = r(695366),
    u = r(834730),
    _ = r(814890),
    p = r(436283),
    h = r(296043),
    f = r(652215),
    m = r(985018),
    g = r(304033);
function b(e) {
    return { text: e, icon: (0, i.jsx)(c.n, { className: g.Kk, dotRadius: 3.5, themed: !0 }) };
}
function A(e) {
    return {
        text: e ?? m.intl.string(m.t.VCsUJu),
        color: "text-feedback-critical",
        icon: (0, i.jsx)(d.E, { size: "xs", color: "currentColor", className: l()(g.Kk, g.ik) }),
    };
}
function E(e) {
    let { className: t, icon: r, text: a, color: n } = e;
    return (0, i.jsxs)("div", {
        className: l()(g.iE, t),
        children: [
            r,
            (0, i.jsx)(u.E, { variant: "text-md/normal", color: n, scaleFontToUserSetting: !0, children: a }),
        ],
    });
}
let T = a.memo(function (e) {
    let { message: t, className: r, component: n } = e,
        l = (0, s.A)(),
        c = (0, o.bG)([p.Ay], () => p.Ay.getInteraction(t), [t]);
    a.useEffect(() => {
        let e = null;
        if (t.hasFlag(f.pr7.LOADING) && null != c) {
            let r = (0, h.I5)(t.id) - Date.now();
            r > 0 && (e = setTimeout(() => l(), 1e3 + r));
        }
        return () => {
            clearTimeout(e);
        };
    }, [l, c, t]);
    let d = null;
    if (null == n)
        d = (function (e, t) {
            switch ((0, h.fK)(t, e)) {
                case h.h0.SENDING:
                    return b(m.intl.string(m.t.RiLfBY));
                case h.h0.CREATED:
                    return b(m.intl.formatToPlainString(m.t["7ePV4t"], { applicationName: t.author.username }));
                case h.h0.TIMED_OUT:
                    return A(m.intl.string(m.t.h8hzPd));
                case h.h0.FAILED:
                    return A(t.interactionError);
            }
        })(c, t);
    else {
        let e = (0, _.zv)(c, t, n);
        null != e && (d = A(e));
    }
    if (null == d) return null;
    let { text: u, icon: g, color: T } = d;
    return (0, i.jsx)(E, { icon: g, text: u, className: r, color: T });
});
