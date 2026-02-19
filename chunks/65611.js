"use strict";
n.d(t, { eW: () => p, em: () => h, oi: () => A, wN: () => u });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(827734),
    a = n(397927),
    o = n(513461),
    c = n(791606),
    d = n(283237);
function u(e, t, n) {
    return (0, i.jsx)(a.hVq, { count: e, color: t, "aria-hidden": n });
}
function h() {
    return (0, i.jsx)(a.fkz, { icon: (0, a.kHD)(c.A), disableColor: !0, className: d.yk });
}
function A(e) {
    let t,
        {
            audio: n,
            video: i,
            screenshare: s,
            isCurrentUserConnected: l,
            liveStage: r,
            activeEvent: o,
            activity: c,
        } = e;
    if (o) t = a.CTc;
    else if (r) t = a.qux;
    else if (s) t = a.kN9;
    else if (i) t = a.npA;
    else if (n) t = a.HKD;
    else {
        if (!c) return null;
        t = a.k9F;
    }
    return g({ icon: t, isCurrentUserConnected: l });
}
function p(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case o.B5.SUBMITTED:
                    return [void 0, a.O4];
                case o.B5.REJECTED:
                    return [r.A.unsafe_rawColors.RED_400.css, a.PGe];
                case o.B5.APPROVED:
                    return [r.A.unsafe_rawColors.GREEN_360.css, a.A9s];
                default:
                    return [void 0, a.R2l];
            }
        })(t);
    return g({ icon: i, color: n });
}
function g(e) {
    let { icon: t, color: n, isCurrentUserConnected: s } = e;
    return (0, i.jsx)(a.fkz, {
        icon: t,
        className: l()(d.bG, { [d.gB]: s }),
        ...(null == n ? { disableColor: !0 } : { color: n }),
    });
}
