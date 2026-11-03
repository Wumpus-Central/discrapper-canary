n.d(e, { Ay: () => A, PS: () => N, S0: () => g });
var r = n(477900),
    i = n(582128),
    l = n(503698),
    s = n.n(l),
    c = n(265431),
    a = n(17928),
    o = n(863610),
    u = n(695366),
    h = n(834730),
    d = n(437517),
    f = n(436283),
    m = n(743738),
    p = n(652215),
    E = n(105292),
    x = n(389760);
function k(t) {
    return { text: t, icon: (0, r.jsx)(o.n, { className: x.Kk, dotRadius: 3.5, themed: !0 }) };
}
function N(t) {
    return {
        text: t ?? E.intl.string(E.t.VCsUJu),
        color: "text-feedback-critical",
        icon: (0, r.jsx)(u.E, { size: "xs", color: "currentColor", className: s()(x.Kk, x.ik) }),
    };
}
function g(t) {
    let { className: e, icon: n, text: i, color: l } = t;
    return (0, r.jsxs)("div", {
        className: s()(x.iE, e),
        children: [
            n,
            (0, r.jsx)(h.E, { variant: "body-md/normal", color: l, scaleFontToUserSetting: !0, children: i }),
        ],
    });
}
let A = i.memo(function (t) {
    let { message: e, className: n, component: l } = t,
        s = (0, c.A)(),
        o = (0, a.bG)([f.Ay], () => f.Ay.getInteraction(e), [e]);
    i.useEffect(() => {
        let t = null;
        if (e.hasFlag(p.pr7.LOADING) && null != o) {
            let n = (0, m.I5)(e.id) - Date.now();
            n > 0 && (t = setTimeout(() => s(), 1e3 + n));
        }
        return () => {
            clearTimeout(t);
        };
    }, [s, o, e]);
    let u = null;
    if (null == l)
        u = (function (t, e) {
            switch ((0, m.fK)(e, t)) {
                case m.h0.SENDING:
                    return k(E.intl.string(E.t.RiLfBY));
                case m.h0.CREATED:
                    return k(E.intl.formatToPlainString(E.t["7ePV4t"], { applicationName: e.author.username }));
                case m.h0.TIMED_OUT:
                    return N(E.intl.string(E.t.h8hzPd));
                case m.h0.FAILED:
                    return N(e.interactionError);
            }
        })(o, e);
    else {
        let t = (0, d.zv)(o, e, l);
        null != t && (u = N(t));
    }
    if (null == u) return null;
    let { text: h, icon: x, color: A } = u;
    return (0, r.jsx)(g, { icon: x, text: h, className: n, color: A });
});
