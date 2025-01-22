r.d(n, {
    c4: function () {
        return E;
    },
    st: function () {
        return y;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(931609),
    u = r(442837),
    c = r(481060),
    d = r(292419),
    f = r(282397),
    p = r(188597),
    h = r(981631),
    _ = r(388032),
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
        text: null != e ? e : _.intl.string(_.t.VCsUJi),
        color: 'text-danger',
        icon: (0, i.jsx)(c.CircleWarningIcon, {
            size: 'xs',
            color: 'currentColor',
            className: s()(m.icon, m.errorIcon)
        })
    };
}
function v(e, n) {
    switch ((0, p.t$)(n, e)) {
        case p.rQ.SENDING:
            return g(_.intl.string(_.t.RiLfBQ));
        case p.rQ.CREATED:
            return g(_.intl.formatToPlainString(_.t['7ePV4u'], { applicationName: n.author.username }));
        case p.rQ.TIMED_OUT:
            return E(_.intl.string(_.t.h8hzPT));
        case p.rQ.FAILED:
            return E(n.interactionError);
    }
}
function y(e) {
    let { className: n, icon: r, text: a, color: o } = e;
    return (0, i.jsxs)('div', {
        className: s()(m.wrapper, n),
        children: [
            r,
            (0, i.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: o,
                scaleFontToUserSetting: !0,
                children: a
            })
        ]
    });
}
function b(e) {
    let { message: n, className: r, component: o } = e,
        s = (0, l.Z)(),
        c = (0, u.e7)([f.ZP], () => f.ZP.getInteraction(n), [n]);
    a.useEffect(() => {
        let e = null;
        if (n.hasFlag(h.iLy.LOADING) && null != c) {
            let r = (0, p.ow)(n.id) - Date.now();
            r > 0 && (e = setTimeout(() => s(), 1000 + r));
        }
        return () => {
            clearTimeout(e);
        };
    }, [s, c, n]);
    let _ = null;
    if (null == o) _ = v(c, n);
    else {
        let e = (0, d.SD)(c, n, o);
        null != e && (_ = E(e));
    }
    if (null == _) return null;
    let { text: m, icon: g, color: b } = _;
    return (0, i.jsx)(y, {
        icon: g,
        text: m,
        className: r,
        color: b
    });
}
n.ZP = a.memo(b);
