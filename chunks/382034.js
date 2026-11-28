n.d(t, { A: () => g, e: () => m });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(179771),
    o = n(417098),
    d = n(793574),
    c = n(688810),
    u = n(429913),
    _ = n(430783),
    E = n(660298),
    A = n(942370),
    f = n(49999),
    h = n(810505),
    I = n(792996),
    p = n(971656);
function m(e) {
    return null != e && !e.scopes.includes(l.F.SDK_SOCIAL_LAYER) && e.application.id === A.Tr.ACTIVISION_APPLICATION_ID;
}
let g = function (e) {
    let { markAsDismissed: t, recurringDismiss: n, noticeType: a } = e,
        l = A.Tr.CALL_OF_DUTY_APPLICATION_ID,
        g = (0, u.h)(l),
        T = g?.name,
        { startAuthorization: S, canStartAuthorization: N, fetched: C, token: O } = (0, E.RD)(g),
        { analyticsLocations: R } = (0, c.Ay)(d.A.NOTICE),
        L = m(O),
        [y, D] = r.useState(!1);
    if (
        (r.useEffect(() => {
            C && !L && t(y ? f.i.TAKE_ACTION : f.i.INDIRECT_ACTION);
        }, [y, C, t, L]),
        null == g || !N || !C)
    )
        return null;
    function b() {
        (D(!0), S({ analyticsLocations: R }));
    }
    let v = (0, i.jsxs)(o.$T, {
        color: o.Hv.WARNING,
        children: [
            (0, i.jsx)(o.PM, {
                noticeType: a,
                onClick: () => {
                    t(f.i.USER_DISMISS);
                },
            }),
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/37dd378cbc52678cf98cba1b9abef1a63da6d2bdbc6535c3982aff71e6d23783.png",
                alt: T,
                className: s()(p.tV, p.Y5),
            }),
            I.intl.string(h.default.OleW32),
            (0, i.jsx)(o.Z_, { onClick: b, className: p.NS, noticeType: a, children: I.intl.string(h.default.ZeOhh9) }),
            (0, i.jsx)(o.zr, {
                onClick: () => n(f.i.USER_DISMISS),
                className: p.go,
                children: I.intl.string(h.default["8qJAeT"]),
            }),
        ],
    });
    return (0, i.jsx)(_.qg, {
        noticeType: a,
        variant: "status",
        type: "warning",
        message: I.intl.string(h.default.OleW32),
        primaryAction: { text: I.intl.string(h.default.ZeOhh9), onClick: b },
        secondaryAction: { text: I.intl.string(h.default["8qJAeT"]), onClick: () => n(f.i.USER_DISMISS) },
        onDismiss: () => t(f.i.USER_DISMISS),
        legacy: v,
    });
};
