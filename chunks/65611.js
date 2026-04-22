n.d(t, { eW: () => S, em: () => b, oi: () => N, wN: () => C });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(827734),
    r = n(406810),
    o = n(789645),
    d = n(933832),
    c = n(22231),
    u = n(777666),
    h = n(565787),
    A = n(81466),
    _ = n(451394),
    m = n(31300),
    g = n(428689),
    p = n(983851),
    f = n(323384),
    E = n(513461),
    x = n(791606),
    I = n(266062);
function C(e, t, n) {
    return (0, i.jsx)(u.hV, { count: e, color: t, "aria-hidden": n });
}
function b() {
    return (0, i.jsx)(u.fk, { icon: (0, h.k)(x.A), disableColor: !0, className: I.yk });
}
function N(e) {
    let t,
        {
            audio: n,
            video: i,
            screenshare: l,
            isCurrentUserConnected: s,
            liveStage: a,
            activeEvent: r,
            activity: o,
        } = e;
    if (r) t = A.C;
    else if (a) t = _.q;
    else if (l) t = m.k;
    else if (i) t = g.n;
    else if (n) t = p.H;
    else {
        if (!o) return null;
        t = f.k;
    }
    return v({ icon: t, isCurrentUserConnected: s });
}
function S(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case E.B5.SUBMITTED:
                    return [void 0, r.O];
                case E.B5.REJECTED:
                    return [a.A.unsafe_rawColors.RED_400.css, o.P];
                case E.B5.APPROVED:
                    return [a.A.unsafe_rawColors.GREEN_360.css, d.A];
                default:
                    return [void 0, c.R];
            }
        })(t);
    return v({ icon: i, color: n });
}
function v(e) {
    let { icon: t, color: n, isCurrentUserConnected: l } = e;
    return (0, i.jsx)(u.fk, {
        icon: t,
        className: s()(I.bG, { [I.gB]: l }),
        ...(null == n ? { disableColor: !0 } : { color: n }),
    });
}
