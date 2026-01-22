n.d(t, {
    Ay: () => O,
    PS: () => g,
    S0: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(27867),
    l = n(311907),
    c = n(397927),
    u = n(814890),
    d = n(436283),
    f = n(296043),
    p = n(652215),
    _ = n(985018),
    h = n(133898);

function m(e) {
    return {
        text: e,
        icon: (0, r.jsx)(c.nvX, {
            className: h.Kk,
            dotRadius: 3.5,
            themed: !0,
        }),
    };
}

function g(e) {
    return {
        text: null != e ? e : _.intl.string(_.t.VCsUJu),
        color: "text-feedback-critical",
        icon: (0, r.jsx)(c.EpV, {
            size: "xs",
            color: "currentColor",
            className: s()(h.Kk, h.ik),
        }),
    };
}

function E(e, t) {
    switch ((0, f.fK)(t, e)) {
        case f.h0.SENDING:
            return m(_.intl.string(_.t.RiLfBY));
        case f.h0.CREATED:
            return m(
                _.intl.formatToPlainString(_.t["7ePV4t"], {
                    applicationName: t.author.username,
                }),
            );
        case f.h0.TIMED_OUT:
            return g(_.intl.string(_.t.h8hzPd));
        case f.h0.FAILED:
            return g(t.interactionError);
    }
}

function b(e) {
    let { className: t, icon: n, text: i, color: a } = e;
    return (0, r.jsxs)("div", {
        className: s()(h.iE, t),
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
        s = (0, o.A)(),
        c = (0, l.bG)([d.Ay], () => d.Ay.getInteraction(t), [t]);
    i.useEffect(() => {
        let e = null;
        if (t.hasFlag(p.pr7.LOADING) && null != c) {
            let n = (0, f.I5)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => s(), 1e3 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [s, c, t]);
    let _ = null;
    if (null == a) _ = E(c, t);
    else {
        let e = (0, u.zv)(c, t, a);
        null != e && (_ = g(e));
    }
    if (null == _) return null;
    let { text: h, icon: m, color: y } = _;
    return (0, r.jsx)(b, {
        icon: m,
        text: h,
        className: n,
        color: y,
    });
}
let O = i.memo(y);
