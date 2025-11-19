n.d(t, {
    ZP: () => O,
    c4: () => g,
    st: () => b,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(110660),
    l = n(442837),
    c = n(481060),
    u = n(292419),
    d = n(282397),
    f = n(188597),
    _ = n(981631),
    p = n(388032),
    h = n(151478);
function m(e) {
    return {
        text: e,
        icon: (0, r.jsx)(c.bbz, {
            className: h.icon,
            dotRadius: 3.5,
            themed: !0,
        }),
    };
}
function g(e) {
    return {
        text: null != e ? e : p.intl.string(p.t.VCsUJu),
        color: "text-danger",
        icon: (0, r.jsx)(c.Mgn, {
            size: "xs",
            color: "currentColor",
            className: o()(h.icon, h.errorIcon),
        }),
    };
}
function E(e, t) {
    switch ((0, f.t$)(t, e)) {
        case f.rQ.SENDING:
            return m(p.intl.string(p.t.RiLfBY));
        case f.rQ.CREATED:
            return m(p.intl.formatToPlainString(p.t["7ePV4t"], { applicationName: t.author.username }));
        case f.rQ.TIMED_OUT:
            return g(p.intl.string(p.t.h8hzPd));
        case f.rQ.FAILED:
            return g(t.interactionError);
    }
}
function b(e) {
    let { className: t, icon: n, text: i, color: a } = e;
    return (0, r.jsxs)("div", {
        className: o()(h.wrapper, t),
        children: [
            n,
            (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                color: a,
                scaleFontToUserSetting: !0,
                children: i,
            }),
        ],
    });
}
function y(e) {
    let { message: t, className: n, component: a } = e,
        o = (0, s.Z)(),
        c = (0, l.e7)([d.ZP], () => d.ZP.getInteraction(t), [t]);
    i.useEffect(() => {
        let e = null;
        if (t.hasFlag(_.iLy.LOADING) && null != c) {
            let n = (0, f.ow)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => o(), 1000 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [o, c, t]);
    let p = null;
    if (null == a) p = E(c, t);
    else {
        let e = (0, u.SD)(c, t, a);
        null != e && (p = g(e));
    }
    if (null == p) return null;
    let { text: h, icon: m, color: y } = p;
    return (0, r.jsx)(b, {
        icon: m,
        text: h,
        className: n,
        color: y,
    });
}
let O = i.memo(y);
