"use strict";
n.d(t, { Ay: () => T, PS: () => g, S0: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(27867),
    l = n(311907),
    u = n(397927),
    c = n(814890),
    d = n(436283),
    _ = n(296043),
    f = n(652215),
    p = n(985018),
    h = n(133898);
function m(e) {
    return { text: e, icon: (0, r.jsx)(u.nvX, { className: h.Kk, dotRadius: 3.5, themed: !0 }) };
}
function g(e) {
    return {
        text: e ?? p.intl.string(p.t.VCsUJu),
        color: "text-feedback-critical",
        icon: (0, r.jsx)(u.EpV, { size: "xs", color: "currentColor", className: s()(h.Kk, h.ik) }),
    };
}
function E(e, t) {
    switch ((0, _.fK)(t, e)) {
        case _.h0.SENDING:
            return m(p.intl.string(p.t.RiLfBY));
        case _.h0.CREATED:
            return m(p.intl.formatToPlainString(p.t["7ePV4t"], { applicationName: t.author.username }));
        case _.h0.TIMED_OUT:
            return g(p.intl.string(p.t.h8hzPd));
        case _.h0.FAILED:
            return g(t.interactionError);
    }
}
function A(e) {
    let { className: t, icon: n, text: i, color: a } = e;
    return (0, r.jsxs)("div", {
        className: s()(h.iE, t),
        children: [
            n,
            (0, r.jsx)(u.Text, { variant: "text-md/normal", color: a, scaleFontToUserSetting: !0, children: i }),
        ],
    });
}
function I(e) {
    let { message: t, className: n, component: a } = e,
        s = (0, o.A)(),
        u = (0, l.bG)([d.Ay], () => d.Ay.getInteraction(t), [t]);
    i.useEffect(() => {
        let e = null;
        if (t.hasFlag(f.pr7.LOADING) && null != u) {
            let n = (0, _.I5)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => s(), 1e3 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [s, u, t]);
    let p = null;
    if (null == a) p = E(u, t);
    else {
        let e = (0, c.zv)(u, t, a);
        null != e && (p = g(e));
    }
    if (null == p) return null;
    let { text: h, icon: m, color: I } = p;
    return (0, r.jsx)(A, { icon: m, text: h, className: n, color: I });
}
let T = i.memo(I);
