"use strict";
n.d(t, { eW: () => R, em: () => N, oi: () => C, wN: () => S });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(661531),
    l = n(406810),
    o = n(789645),
    d = n(933832),
    c = n(22231),
    u = n(812993),
    _ = n(565787),
    E = n(81466),
    A = n(451394),
    h = n(31300),
    I = n(428689),
    f = n(983851),
    p = n(323384),
    T = n(513461),
    m = n(791606),
    g = n(29774);
function S(e, t, n) {
    return (0, i.jsx)(u.hV, { count: e, color: t, "aria-hidden": n });
}
function N() {
    return (0, i.jsx)(u.fk, { icon: (0, _.k)(m.A), disableColor: !0, className: g.yk });
}
function C(e) {
    let t,
        {
            audio: n,
            video: i,
            screenshare: r,
            isCurrentUserConnected: a,
            liveStage: s,
            activeEvent: l,
            activity: o,
        } = e;
    if (l) t = E.C;
    else if (s) t = A.q;
    else if (r) t = h.k;
    else if (i) t = I.n;
    else if (n) t = f.H;
    else {
        if (!o) return null;
        t = p.k;
    }
    return O({ icon: t, isCurrentUserConnected: a });
}
function R(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case T.B5.SUBMITTED:
                    return [void 0, l.O];
                case T.B5.REJECTED:
                    return [s.A.unsafe_rawColors.RED_400.css, o.P];
                case T.B5.APPROVED:
                    return [s.A.unsafe_rawColors.GREEN_360.css, d.A];
                default:
                    return [void 0, c.R];
            }
        })(t);
    return O({ icon: i, color: n });
}
function O(e) {
    let { icon: t, color: n, isCurrentUserConnected: r } = e;
    return (0, i.jsx)(u.fk, {
        icon: t,
        className: a()(g.bG, { [g.gB]: r }),
        ...(null == n ? { disableColor: !0 } : { color: n }),
    });
}
