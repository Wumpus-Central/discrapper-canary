n.d(t, {
    ZP: () => I,
    c4: () => g,
    st: () => v
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(931609),
    l = n(442837),
    u = n(481060),
    c = n(292419),
    d = n(282397),
    f = n(188597),
    _ = n(981631),
    p = n(388032),
    h = n(497344);
function m(e) {
    return {
        text: e,
        icon: (0, i.jsx)(u.bbz, {
            className: h.icon,
            dotRadius: 3.5,
            themed: !0
        })
    };
}
function g(e) {
    return {
        text: null != e ? e : p.intl.string(p.t.VCsUJi),
        color: 'text-danger',
        icon: (0, i.jsx)(u.P4T, {
            size: 'xs',
            color: 'currentColor',
            className: s()(h.icon, h.errorIcon)
        })
    };
}
function E(e, t) {
    switch ((0, f.t$)(t, e)) {
        case f.rQ.SENDING:
            return m(p.intl.string(p.t.RiLfBQ));
        case f.rQ.CREATED:
            return m(p.intl.formatToPlainString(p.t['7ePV4u'], { applicationName: t.author.username }));
        case f.rQ.TIMED_OUT:
            return g(p.intl.string(p.t.h8hzPT));
        case f.rQ.FAILED:
            return g(t.interactionError);
    }
}
function v(e) {
    let { className: t, icon: n, text: r, color: a } = e;
    return (0, i.jsxs)('div', {
        className: s()(h.wrapper, t),
        children: [
            n,
            (0, i.jsx)(u.Text, {
                variant: 'text-md/normal',
                color: a,
                scaleFontToUserSetting: !0,
                children: r
            })
        ]
    });
}
function y(e) {
    let { message: t, className: n, component: a } = e,
        s = (0, o.Z)(),
        u = (0, l.e7)([d.ZP], () => d.ZP.getInteraction(t), [t]);
    r.useEffect(() => {
        let e = null;
        if (t.hasFlag(_.iLy.LOADING) && null != u) {
            let n = (0, f.ow)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => s(), 1000 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [s, u, t]);
    let p = null;
    if (null == a) p = E(u, t);
    else {
        let e = (0, c.SD)(u, t, a);
        null != e && (p = g(e));
    }
    if (null == p) return null;
    let { text: h, icon: m, color: y } = p;
    return (0, i.jsx)(v, {
        icon: m,
        text: h,
        className: n,
        color: y
    });
}
let I = r.memo(y);
