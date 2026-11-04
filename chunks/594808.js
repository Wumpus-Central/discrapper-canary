var l = t(477900),
    r = t(582128),
    i = t(503698),
    a = t.n(i),
    u = t(265431),
    s = t(855986),
    o = t(863610),
    c = t(695366),
    d = t(834730),
    h = t(257249),
    m = t(436283),
    f = t(964363),
    p = t(652215),
    g = t(792996),
    x = t(389760);
function v(e) {
    return { text: e, icon: (0, l.jsx)(o.n, { className: x.Kk, dotRadius: 3.5, themed: !0 }) };
}
function j(e) {
    return {
        text: e ?? g.intl.string(g.t.VCsUJu),
        color: "text-feedback-critical",
        icon: (0, l.jsx)(c.E, { size: "xs", color: "currentColor", className: a()(x.Kk, x.ik) }),
    };
}
function I(e) {
    let { className: n, icon: t, text: r, color: i } = e;
    return (0, l.jsxs)("div", {
        className: a()(x.iE, n),
        children: [
            t,
            (0, l.jsx)(d.E, { variant: "body-md/normal", color: i, scaleFontToUserSetting: !0, children: r }),
        ],
    });
}
let y = r.memo(function (e) {
    let { message: n, className: t, component: i } = e,
        a = (0, u.A)(),
        o = (0, s.bG)([m.Ay], () => m.Ay.getInteraction(n), [n]);
    r.useEffect(() => {
        let e = null;
        if (n.hasFlag(p.pr7.LOADING) && null != o) {
            let t = (0, f.I5)(n.id) - Date.now();
            t > 0 && (e = setTimeout(() => a(), 1e3 + t));
        }
        return () => {
            clearTimeout(e);
        };
    }, [a, o, n]);
    let c = null;
    if (null == i)
        c = (function (e, n) {
            switch ((0, f.fK)(n, e)) {
                case f.h0.SENDING:
                    return v(g.intl.string(g.t.RiLfBY));
                case f.h0.CREATED:
                    return v(g.intl.formatToPlainString(g.t["7ePV4t"], { applicationName: n.author.username }));
                case f.h0.TIMED_OUT:
                    return j(g.intl.string(g.t.h8hzPd));
                case f.h0.FAILED:
                    return j(n.interactionError);
            }
        })(o, n);
    else {
        let e = (0, h.zv)(o, n, i);
        null != e && (c = j(e));
    }
    if (null == c) return null;
    let { text: d, icon: x, color: y } = c;
    return (0, l.jsx)(I, { icon: x, text: d, className: t, color: y });
});
t.d(n, {}, { Ay: y, PS: j, S0: I });
