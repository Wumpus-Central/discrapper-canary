n.d(t, {
    ZP: () => C,
    c4: () => S,
    st: () => b
});
var i = n(200651),
    o = n(192379),
    r = n(120356),
    a = n.n(r),
    c = n(931609),
    l = n(442837),
    s = n(481060),
    _ = n(292419),
    d = n(282397),
    u = n(188597),
    p = n(981631),
    f = n(388032),
    I = n(217802);
function m(e) {
    return {
        text: e,
        icon: (0, i.jsx)(s.bbz, {
            className: I.icon,
            dotRadius: 3.5,
            themed: !0
        })
    };
}
function S(e) {
    return {
        text: null != e ? e : f.NW.string(f.t.VCsUJi),
        color: 'text-danger',
        icon: (0, i.jsx)(s.P4T, {
            size: 'xs',
            color: 'currentColor',
            className: a()(I.icon, I.errorIcon)
        })
    };
}
function b(e) {
    let { className: t, icon: n, text: o, color: r } = e;
    return (0, i.jsxs)('div', {
        className: a()(I.wrapper, t),
        children: [
            n,
            (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: r,
                scaleFontToUserSetting: !0,
                children: o
            })
        ]
    });
}
let C = o.memo(function (e) {
    let { message: t, className: n, component: r } = e,
        a = (0, c.Z)(),
        s = (0, l.e7)([d.ZP], () => d.ZP.getInteraction(t), [t]);
    o.useEffect(() => {
        let e = null;
        if (t.hasFlag(p.iLy.LOADING) && null != s) {
            let n = (0, u.ow)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => a(), 1000 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [a, s, t]);
    let I = null;
    if (null == r)
        I = (function (e, t) {
            switch ((0, u.t$)(t, e)) {
                case u.rQ.SENDING:
                    return m(f.NW.string(f.t.RiLfBQ));
                case u.rQ.CREATED:
                    return m(f.NW.formatToPlainString(f.t['7ePV4u'], { applicationName: t.author.username }));
                case u.rQ.TIMED_OUT:
                    return S(f.NW.string(f.t.h8hzPT));
                case u.rQ.FAILED:
                    return S(t.interactionError);
            }
        })(s, t);
    else {
        let e = (0, _.SD)(s, t, r);
        null != e && (I = S(e));
    }
    if (null == I) return null;
    let { text: C, icon: T, color: g } = I;
    return (0, i.jsx)(b, {
        icon: T,
        text: C,
        className: n,
        color: g
    });
});
