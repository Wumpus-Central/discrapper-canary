n.d(t, {
    ZP: () => x,
    c4: () => f,
    st: () => C
});
var a = n(200651),
    o = n(192379),
    i = n(120356),
    r = n.n(i),
    s = n(931609),
    l = n(442837),
    c = n(481060),
    u = n(292419),
    d = n(282397),
    p = n(188597),
    m = n(981631),
    g = n(388032),
    _ = n(497344);
function h(e) {
    return {
        text: e,
        icon: (0, a.jsx)(c.bbz, {
            className: _.icon,
            dotRadius: 3.5,
            themed: !0
        })
    };
}
function f(e) {
    return {
        text: null != e ? e : g.intl.string(g.t.VCsUJi),
        color: 'text-danger',
        icon: (0, a.jsx)(c.P4T, {
            size: 'xs',
            color: 'currentColor',
            className: r()(_.icon, _.errorIcon)
        })
    };
}
function C(e) {
    let { className: t, icon: n, text: o, color: i } = e;
    return (0, a.jsxs)('div', {
        className: r()(_.wrapper, t),
        children: [
            n,
            (0, a.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: i,
                scaleFontToUserSetting: !0,
                children: o
            })
        ]
    });
}
let x = o.memo(function (e) {
    let { message: t, className: n, component: i } = e,
        r = (0, s.Z)(),
        c = (0, l.e7)([d.ZP], () => d.ZP.getInteraction(t), [t]);
    o.useEffect(() => {
        let e = null;
        if (t.hasFlag(m.iLy.LOADING) && null != c) {
            let n = (0, p.ow)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => r(), 1000 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [r, c, t]);
    let _ = null;
    if (null == i)
        _ = (function (e, t) {
            switch ((0, p.t$)(t, e)) {
                case p.rQ.SENDING:
                    return h(g.intl.string(g.t.RiLfBQ));
                case p.rQ.CREATED:
                    return h(g.intl.formatToPlainString(g.t['7ePV4u'], { applicationName: t.author.username }));
                case p.rQ.TIMED_OUT:
                    return f(g.intl.string(g.t.h8hzPT));
                case p.rQ.FAILED:
                    return f(t.interactionError);
            }
        })(c, t);
    else {
        let e = (0, u.SD)(c, t, i);
        null != e && (_ = f(e));
    }
    if (null == _) return null;
    let { text: x, icon: v, color: b } = _;
    return (0, a.jsx)(C, {
        icon: v,
        text: x,
        className: n,
        color: b
    });
});
