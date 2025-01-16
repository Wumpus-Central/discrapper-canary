r.d(n, {
    c4: function () {
        return E;
    },
    st: function () {
        return I;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(931609),
    u = r(442837),
    c = r(481060),
    d = r(292419),
    f = r(282397),
    _ = r(188597),
    h = r(981631),
    p = r(388032),
    m = r(497344);
function g(e) {
    return {
        text: e,
        icon: (0, i.jsx)(c.Dots, {
            className: m.icon,
            dotRadius: 3.5,
            themed: !0
        })
    };
}
function E(e) {
    return {
        text: null != e ? e : p.intl.string(p.t.VCsUJi),
        color: 'text-danger',
        icon: (0, i.jsx)(c.CircleWarningIcon, {
            size: 'xs',
            color: 'currentColor',
            className: o()(m.icon, m.errorIcon)
        })
    };
}
function v(e, n) {
    switch ((0, _.t$)(n, e)) {
        case _.rQ.SENDING:
            return g(p.intl.string(p.t.RiLfBQ));
        case _.rQ.CREATED:
            return g(p.intl.formatToPlainString(p.t['7ePV4u'], { applicationName: n.author.username }));
        case _.rQ.TIMED_OUT:
            return E(p.intl.string(p.t.h8hzPT));
        case _.rQ.FAILED:
            return E(n.interactionError);
    }
}
function I(e) {
    let { className: n, icon: r, text: a, color: s } = e;
    return (0, i.jsxs)('div', {
        className: o()(m.wrapper, n),
        children: [
            r,
            (0, i.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: s,
                scaleFontToUserSetting: !0,
                children: a
            })
        ]
    });
}
function T(e) {
    let { message: n, className: r, component: s } = e,
        o = (0, l.Z)(),
        c = (0, u.e7)([f.ZP], () => f.ZP.getInteraction(n), [n]);
    a.useEffect(() => {
        let e = null;
        if (n.hasFlag(h.iLy.LOADING) && null != c) {
            let r = (0, _.ow)(n.id) - Date.now();
            r > 0 && (e = setTimeout(() => o(), 1000 + r));
        }
        return () => {
            clearTimeout(e);
        };
    }, [o, c, n]);
    let p = null;
    if (null == s) p = v(c, n);
    else {
        let e = (0, d.SD)(c, n, s);
        null != e && (p = E(e));
    }
    if (null == p) return null;
    let { text: m, icon: g, color: T } = p;
    return (0, i.jsx)(I, {
        icon: g,
        text: m,
        className: r,
        color: T
    });
}
n.ZP = a.memo(T);
