n.d(t, { default: () => h });
var r = n(951288),
    s = n(647438),
    i = n(990547),
    a = n(442837),
    l = n(481060),
    o = n(287734),
    u = n(493773),
    c = n(592125),
    _ = n(699516),
    d = n(594174),
    A = n(626135),
    f = n(33194),
    E = n(343544),
    I = n(14251),
    S = n(110223),
    N = n(981631),
    g = n(388032),
    m = n(623146);
function h(e) {
    let { channelId: t, userId: n, transitionState: h, onClose: x } = e,
        p = s.useRef(!1),
        L = (0, a.e7)([_.Z], () => _.Z.isBlocked(n)),
        O = (0, a.e7)([c.Z], () => c.Z.getChannel(t));
    if (
        ((0, u.zq)(() => {
            p.current || (0, f.nC)(n);
        }),
        null == d.default.getUser(n))
    )
        return null;
    let C = [
            {
                icon: (0, I.r)([n], null == O ? void 0 : O.guild_id),
                text: (0, I.a)([n], 1, null == O ? void 0 : O.guild_id, t),
                className: m.row,
            },
            {
                icon: (0, r.jsx)("div", {
                    className: m.icon,
                    children: (0, r.jsx)(l.aNP, {}),
                }),
                text: g.intl.string(g.t["+4O9nZ"]),
                className: m.row,
            },
        ],
        j = L
            ? (0, r.jsxs)(r.Fragment, {
                  children: [g.intl.string(g.t.cpgfFh), (0, r.jsx)("br", {}), g.intl.string(g.t.UKQ4Cg)],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [g.intl.string(g.t["xj3j4+"]), (0, r.jsx)("br", {}), g.intl.string(g.t.wWueRU)],
              });
    return (0, r.jsx)(E.Z, {
        headerText: g.intl.string(g.t["1/gpFh"]),
        descriptionText: j,
        infoRows: C,
        onDismissAndStay: () => {
            (p.current = !0),
                x(),
                (0, f.nC)(n),
                A.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: S.q.CLICK_TO_STAY,
                    channel_id: t,
                    blocked_user_ids: L ? [n] : [],
                    ignored_user_ids: L ? [] : [n],
                    warning_surface: S.fz.POST_JOIN_MODAL,
                });
        },
        onDismissAndLeave: () => {
            (p.current = !0),
                x(),
                o.default.disconnect(),
                A.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: S.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: L ? [n] : [],
                    ignored_user_ids: L ? [] : [n],
                    warning_surface: S.fz.POST_JOIN_MODAL,
                });
        },
        leaveButtonText: g.intl.string(g.t["Y56/oK"]),
        stayButtonText: g.intl.string(g.t["Z+/hfX"]),
        transitionState: h,
        onClose: x,
        impression: {
            impressionName: i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: L ? [n] : [],
                ignored_user_ids: L ? [] : [n],
                warning_surface: S.fz.POST_JOIN_MODAL,
            },
        },
    });
}
