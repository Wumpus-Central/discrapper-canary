"use strict";
n.d(t, { eW: () => C, em: () => N, oi: () => y, wN: () => S });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(661531),
    o = n(406810),
    l = n(789645),
    u = n(933832),
    c = n(22231),
    d = n(777666),
    _ = n(565787),
    f = n(81466),
    h = n(451394),
    p = n(31300),
    E = n(428689),
    m = n(983851),
    g = n(323384),
    A = n(513461),
    I = n(791606),
    T = n(266062);
function S(e, t, n) {
    return (0, i.jsx)(d.hV, { count: e, color: t, "aria-hidden": n });
}
function N() {
    return (0, i.jsx)(d.fk, { icon: (0, _.k)(I.A), disableColor: !0, className: T.yk });
}
function y(e) {
    let t,
        {
            audio: n,
            video: i,
            screenshare: r,
            isCurrentUserConnected: s,
            liveStage: a,
            activeEvent: o,
            activity: l,
        } = e;
    if (o) t = f.C;
    else if (a) t = h.q;
    else if (r) t = p.k;
    else if (i) t = E.n;
    else if (n) t = m.H;
    else {
        if (!l) return null;
        t = g.k;
    }
    return v({ icon: t, isCurrentUserConnected: s });
}
function C(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case A.B5.SUBMITTED:
                    return [void 0, o.O];
                case A.B5.REJECTED:
                    return [a.A.unsafe_rawColors.RED_400.css, l.P];
                case A.B5.APPROVED:
                    return [a.A.unsafe_rawColors.GREEN_360.css, u.A];
                default:
                    return [void 0, c.R];
            }
        })(t);
    return v({ icon: i, color: n });
}
function v(e) {
    let { icon: t, color: n, isCurrentUserConnected: r } = e;
    return (0, i.jsx)(d.fk, {
        icon: t,
        className: s()(T.bG, { [T.gB]: r }),
        ...(null == n ? { disableColor: !0 } : { color: n }),
    });
}
