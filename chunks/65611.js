n.d(t, { eW: () => _, em: () => h, oi: () => A, wN: () => u });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(827734),
    r = n(397927),
    o = n(513461),
    c = n(791606),
    d = n(186942);
function u(e, t, n) {
    return (0, i.jsx)(r.hVq, { count: e, color: t, "aria-hidden": n });
}
function h() {
    return (0, i.jsx)(r.fkz, { icon: (0, r.kHD)(c.A), disableColor: !0, className: d.yk });
}
function A(e) {
    let t,
        {
            audio: n,
            video: i,
            screenshare: l,
            isCurrentUserConnected: s,
            liveStage: a,
            activeEvent: o,
            activity: c,
        } = e;
    if (o) t = r.CTc;
    else if (a) t = r.qux;
    else if (l) t = r.kN9;
    else if (i) t = r.npA;
    else if (n) t = r.HKD;
    else {
        if (!c) return null;
        t = r.k9F;
    }
    return m({ icon: t, isCurrentUserConnected: s });
}
function _(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case o.B5.SUBMITTED:
                    return [void 0, r.O4];
                case o.B5.REJECTED:
                    return [a.A.unsafe_rawColors.RED_400.css, r.PGe];
                case o.B5.APPROVED:
                    return [a.A.unsafe_rawColors.GREEN_360.css, r.A9s];
                default:
                    return [void 0, r.R2l];
            }
        })(t);
    return m({ icon: i, color: n });
}
function m(e) {
    let { icon: t, color: n, isCurrentUserConnected: l } = e;
    return (0, i.jsx)(r.fkz, {
        icon: t,
        className: s()(d.bG, { [d.gB]: l }),
        ...(null == n ? { disableColor: !0 } : { color: n }),
    });
}
