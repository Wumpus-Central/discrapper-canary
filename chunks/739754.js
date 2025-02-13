t.d(n, {
    ZP: () => T,
    c4: () => S,
    st: () => C
});
var i = t(200651),
    o = t(192379),
    r = t(120356),
    a = t.n(r),
    l = t(931609),
    c = t(442837),
    s = t(481060),
    _ = t(292419),
    d = t(282397),
    u = t(188597),
    p = t(981631),
    I = t(388032),
    f = t(376310);
function m(e) {
    return {
        text: e,
        icon: (0, i.jsx)(s.bbz, {
            className: f.icon,
            dotRadius: 3.5,
            themed: !0
        })
    };
}
function S(e) {
    return {
        text: null != e ? e : I.intl.string(I.t.VCsUJi),
        color: 'text-danger',
        icon: (0, i.jsx)(s.P4T, {
            size: 'xs',
            color: 'currentColor',
            className: a()(f.icon, f.errorIcon)
        })
    };
}
function C(e) {
    let { className: n, icon: t, text: o, color: r } = e;
    return (0, i.jsxs)('div', {
        className: a()(f.wrapper, n),
        children: [
            t,
            (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: r,
                scaleFontToUserSetting: !0,
                children: o
            })
        ]
    });
}
let T = o.memo(function (e) {
    let { message: n, className: t, component: r } = e,
        a = (0, l.Z)(),
        s = (0, c.e7)([d.ZP], () => d.ZP.getInteraction(n), [n]);
    o.useEffect(() => {
        let e = null;
        if (n.hasFlag(p.iLy.LOADING) && null != s) {
            let t = (0, u.ow)(n.id) - Date.now();
            t > 0 && (e = setTimeout(() => a(), 1000 + t));
        }
        return () => {
            clearTimeout(e);
        };
    }, [a, s, n]);
    let f = null;
    if (null == r)
        f = (function (e, n) {
            switch ((0, u.t$)(n, e)) {
                case u.rQ.SENDING:
                    return m(I.intl.string(I.t.RiLfBQ));
                case u.rQ.CREATED:
                    return m(I.intl.formatToPlainString(I.t['7ePV4u'], { applicationName: n.author.username }));
                case u.rQ.TIMED_OUT:
                    return S(I.intl.string(I.t.h8hzPT));
                case u.rQ.FAILED:
                    return S(n.interactionError);
            }
        })(s, n);
    else {
        let e = (0, _.SD)(s, n, r);
        null != e && (f = S(e));
    }
    if (null == f) return null;
    let { text: T, icon: b, color: h } = f;
    return (0, i.jsx)(C, {
        icon: b,
        text: T,
        className: t,
        color: h
    });
});
