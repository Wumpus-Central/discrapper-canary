var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(646514),
    l = n(406810),
    o = n(789645),
    d = n(933832),
    c = n(22231),
    u = n(812993),
    _ = n(565787),
    E = n(81466),
    A = n(451394),
    f = n(31300),
    h = n(428689),
    I = n(983851),
    p = n(323384),
    m = n(152367),
    g = n(513461),
    T = n(791606),
    S = n(260727);
function N(e) {
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
    if (l) t = E.CalendarIcon;
    else if (s) t = A.StageIcon;
    else if (r) t = f.ScreenIcon;
    else if (i) t = h.VideoIcon;
    else if (n) t = I.VoiceNormalIcon;
    else {
        if (!o) return null;
        t = p.AppsIcon;
    }
    return C({ icon: t, isCurrentUserConnected: a });
}
function C(e) {
    let { icon: t, color: n, isCurrentUserConnected: r, className: s } = e;
    return (0, i.jsx)(u.fk, {
        icon: t,
        className: a()(S.bG, s, { [S.gB]: r }),
        ...(null == n ? { disableColor: !0 } : { color: n }),
    });
}
n.d(
    t,
    {},
    {
        eW: function (e) {
            let { guildJoinRequestStatus: t } = e,
                [n, i] = (function (e) {
                    switch (e) {
                        case g.B5.SUBMITTED:
                            return [void 0, l.ClockIcon];
                        case g.B5.REJECTED:
                            return [s.A.unsafe_rawColors.RED_400.css, o.XSmallIcon];
                        case g.B5.APPROVED:
                            return [s.A.unsafe_rawColors.GREEN_360.css, d.CheckmarkLargeIcon];
                        default:
                            return [void 0, c.PencilIcon];
                    }
                })(t);
            return C({ icon: i, color: n });
        },
        hP: function (e) {
            let { unavailable: t, conjureWorking: n, mediaState: r } = e;
            return t
                ? (0, i.jsx)(u.fk, { icon: (0, _.k)(T.A), disableColor: !0, className: S.yk })
                : n
                  ? C({ icon: m.MagicWandIcon, className: S.lE })
                  : null != r
                    ? N(r)
                    : void 0;
        },
        oi: N,
        wN: function (e, t, n) {
            return (0, i.jsx)(u.hV, { count: e, color: t, "aria-hidden": n });
        },
    },
);
