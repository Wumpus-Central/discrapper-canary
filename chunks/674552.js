n.d(t, {
    Ne: function () {
        return h;
    },
    Ny: function () {
        return p;
    },
    Or: function () {
        return m;
    },
    jt: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(44315),
    s = n(246364),
    c = n(460562),
    u = n(981631),
    d = n(940722);
function h(e, t) {
    return (0, i.jsx)(a.NumberBadge, {
        count: e,
        color: t
    });
}
function p() {
    return (0, i.jsx)(a.IconBadge, {
        icon: (0, a.makeIconCompat)(c.Z),
        disableColor: !0,
        className: d.unavailableBadge
    });
}
function m(e) {
    let t,
        { audio: n, video: i, screenshare: l, isCurrentUserConnected: r, liveStage: o, activeEvent: s, activity: c } = e;
    if (s) t = a.CalendarIcon;
    else if (o) t = a.StageIcon;
    else if (c) t = a.ActivitiesIcon;
    else if (l) t = a.ScreenIcon;
    else if (i) t = a.VideoIcon;
    else {
        if (!n) return null;
        t = a.VoiceNormalIcon;
    }
    return g({
        icon: t,
        isCurrentUserConnected: r
    });
}
function f(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case s.wB.SUBMITTED:
                    return [void 0, a.ClockIcon];
                case s.wB.REJECTED:
                    return [u.Ilk.RED_400, a.XSmallIcon];
                case s.wB.APPROVED:
                    return [u.Ilk.GREEN_360, a.CheckmarkLargeIcon];
                default:
                    return [void 0, a.PencilIcon];
            }
        })(t);
    return g({
        icon: i,
        color: n
    });
}
function g(e) {
    let { icon: t, color: n, isCurrentUserConnected: l } = e,
        s = null == n ? { disableColor: !0 } : { color: (0, o.Lq)(n) };
    return (0, i.jsx)(a.IconBadge, {
        icon: t,
        className: r()(d.iconBadge, { [d.isCurrentUserConnected]: l }),
        ...s
    });
}
