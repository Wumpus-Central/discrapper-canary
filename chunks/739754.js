n.d(t, {
    ZP: () => _,
    c4: () => h,
    st: () => y
});
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(931609),
    l = n(442837),
    c = n(481060),
    u = n(292419),
    d = n(282397),
    p = n(188597),
    g = n(981631),
    m = n(388032),
    f = n(983976);
function b(e) {
    return {
        text: e,
        icon: (0, r.jsx)(c.bbz, {
            className: f.icon,
            dotRadius: 3.5,
            themed: !0
        })
    };
}
function h(e) {
    return {
        text: null != e ? e : m.NW.string(m.t.VCsUJi),
        color: 'text-danger',
        icon: (0, r.jsx)(c.P4T, {
            size: 'xs',
            color: 'currentColor',
            className: i()(f.icon, f.errorIcon)
        })
    };
}
function y(e) {
    let { className: t, icon: n, text: o, color: a } = e;
    return (0, r.jsxs)('div', {
        className: i()(f.wrapper, t),
        children: [
            n,
            (0, r.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: a,
                scaleFontToUserSetting: !0,
                children: o
            })
        ]
    });
}
let _ = o.memo(function (e) {
    let { message: t, className: n, component: a } = e,
        i = (0, s.Z)(),
        c = (0, l.e7)([d.ZP], () => d.ZP.getInteraction(t), [t]);
    o.useEffect(() => {
        let e = null;
        if (t.hasFlag(g.iLy.LOADING) && null != c) {
            let n = (0, p.ow)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => i(), 1000 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [i, c, t]);
    let f = null;
    if (null == a)
        f = (function (e, t) {
            switch ((0, p.t$)(t, e)) {
                case p.rQ.SENDING:
                    return b(m.NW.string(m.t.RiLfBQ));
                case p.rQ.CREATED:
                    return b(m.NW.formatToPlainString(m.t['7ePV4u'], { applicationName: t.author.username }));
                case p.rQ.TIMED_OUT:
                    return h(m.NW.string(m.t.h8hzPT));
                case p.rQ.FAILED:
                    return h(t.interactionError);
            }
        })(c, t);
    else {
        let e = (0, u.SD)(c, t, a);
        null != e && (f = h(e));
    }
    if (null == f) return null;
    let { text: _, icon: O, color: v } = f;
    return (0, r.jsx)(y, {
        icon: O,
        text: _,
        className: n,
        color: v
    });
});
