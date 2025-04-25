n.d(t, {
    ZP: () => y,
    c4: () => h,
    st: () => _
});
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    l = n(931609),
    s = n(442837),
    c = n(481060),
    u = n(292419),
    d = n(282397),
    p = n(188597),
    g = n(981631),
    m = n(388032),
    f = n(964732);
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
        text: null != e ? e : m.intl.string(m.t.VCsUJi),
        color: 'text-danger',
        icon: (0, r.jsx)(c.P4T, {
            size: 'xs',
            color: 'currentColor',
            className: i()(f.icon, f.errorIcon)
        })
    };
}
function _(e) {
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
let y = o.memo(function (e) {
    let { message: t, className: n, component: a } = e,
        i = (0, l.Z)(),
        c = (0, s.e7)([d.ZP], () => d.ZP.getInteraction(t), [t]);
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
                    return b(m.intl.string(m.t.RiLfBQ));
                case p.rQ.CREATED:
                    return b(m.intl.formatToPlainString(m.t['7ePV4u'], { applicationName: t.author.username }));
                case p.rQ.TIMED_OUT:
                    return h(m.intl.string(m.t.h8hzPT));
                case p.rQ.FAILED:
                    return h(t.interactionError);
            }
        })(c, t);
    else {
        let e = (0, u.SD)(c, t, a);
        null != e && (f = h(e));
    }
    if (null == f) return null;
    let { text: y, icon: v, color: O } = f;
    return (0, r.jsx)(_, {
        icon: v,
        text: y,
        className: n,
        color: O
    });
});
