n.d(t, { default: () => h });
var r = n(255367),
    s = n(73800),
    i = n(990547),
    a = n(442837),
    l = n(481060),
    o = n(287734),
    c = n(493773),
    u = n(592125),
    _ = n(699516),
    d = n(594174),
    A = n(626135),
    f = n(33194),
    E = n(343544),
    I = n(14251),
    g = n(110223),
    m = n(981631),
    N = n(388032),
    S = n(868269);
function h(e) {
    let { channelId: t, userId: n, transitionState: h, onClose: x } = e,
        p = s.useRef(!1),
        O = (0, a.e7)([_.Z], () => _.Z.isBlocked(n)),
        L = (0, a.e7)([u.Z], () => u.Z.getChannel(t));
    if (
        ((0, c.zq)(() => {
            p.current || (0, f.g6)(t);
        }),
        null == d.default.getUser(n))
    )
        return null;
    let j = [
            {
                icon: (0, I.r)([n], null == L ? void 0 : L.guild_id),
                text: (0, I.a)([n], 1, null == L ? void 0 : L.guild_id, t),
                className: S.row
            },
            {
                icon: (0, r.jsx)('div', {
                    className: S.icon,
                    children: (0, r.jsx)(l.aNP, {})
                }),
                text: N.intl.string(N.t['+4O9nZ']),
                className: S.row
            }
        ],
        C = O
            ? (0, r.jsxs)(r.Fragment, {
                  children: [N.intl.string(N.t.cpgfFh), (0, r.jsx)('br', {}), N.intl.string(N.t.UKQ4Cg)]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [N.intl.string(N.t['xj3j4+']), (0, r.jsx)('br', {}), N.intl.string(N.t.wWueRU)]
              });
    return (0, r.jsx)(E.Z, {
        headerText: N.intl.string(N.t['1/gpFh']),
        descriptionText: C,
        infoRows: j,
        onDismissAndStay: () => {
            (p.current = !0),
                x(),
                (0, f.g6)(t),
                A.default.track(m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: g.q.CLICK_TO_STAY,
                    channel_id: t,
                    blocked_user_ids: O ? [n] : [],
                    ignored_user_ids: O ? [] : [n],
                    warning_surface: g.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            (p.current = !0),
                x(),
                o.default.disconnect(),
                A.default.track(m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: g.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: O ? [n] : [],
                    ignored_user_ids: O ? [] : [n],
                    warning_surface: g.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: N.intl.string(N.t['Y56/oK']),
        stayButtonText: N.intl.string(N.t['Z+/hfX']),
        transitionState: h,
        onClose: x,
        impression: {
            impressionName: i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: O ? [n] : [],
                ignored_user_ids: O ? [] : [n],
                warning_surface: g.fz.POST_JOIN_MODAL
            }
        }
    });
}
