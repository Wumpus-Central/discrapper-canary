t.d(n, { default: () => x });
var s = t(200651);
t(192379);
var _ = t(990547),
    i = t(442837),
    o = t(481060),
    r = t(287734),
    a = t(592125),
    c = t(699516),
    d = t(594174),
    u = t(626135),
    g = t(33194),
    l = t(343544),
    p = t(14251),
    f = t(110223),
    m = t(981631),
    N = t(388032),
    h = t(868269);
function x(e) {
    let { channelId: n, userId: t, transitionState: x, onClose: C } = e,
        I = (0, i.e7)([c.Z], () => c.Z.isBlocked(t)),
        b = (0, i.e7)([a.Z], () => a.Z.getChannel(n));
    if (null == d.default.getUser(t)) return null;
    let E = [
            {
                icon: (0, p.r)([t], null == b ? void 0 : b.guild_id),
                text: (0, p.a)([t], 1, null == b ? void 0 : b.guild_id, n),
                className: h.row
            },
            {
                icon: (0, s.jsx)('div', {
                    className: h.icon,
                    children: (0, s.jsx)(o.aNP, {})
                }),
                text: N.NW.string(N.t['+4O9nZ']),
                className: h.row
            }
        ],
        O = I
            ? (0, s.jsxs)(s.Fragment, {
                  children: [N.NW.string(N.t.cpgfFh), (0, s.jsx)('br', {}), N.NW.string(N.t.UKQ4Cg)]
              })
            : (0, s.jsxs)(s.Fragment, {
                  children: [N.NW.string(N.t['xj3j4+']), (0, s.jsx)('br', {}), N.NW.string(N.t.wWueRU)]
              });
    return (0, s.jsx)(l.Z, {
        headerText: N.NW.string(N.t['1/gpFh']),
        descriptionText: O,
        infoRows: E,
        onDismissAndStay: () => {
            C(),
                (0, g.g6)(n),
                u.default.track(m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: f.q.CLICK_TO_STAY,
                    channel_id: n,
                    blocked_user_ids: I ? [t] : [],
                    ignored_user_ids: I ? [] : [t],
                    warning_surface: f.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            C(),
                r.default.disconnect(),
                u.default.track(m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: f.q.CLICK_TO_LEAVE,
                    channel_id: n,
                    blocked_user_ids: I ? [t] : [],
                    ignored_user_ids: I ? [] : [t],
                    warning_surface: f.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: N.NW.string(N.t['Y56/oK']),
        stayButtonText: N.NW.string(N.t['Z+/hfX']),
        transitionState: x,
        onClose: C,
        impression: {
            impressionName: _.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: n,
                blocked_user_ids: I ? [t] : [],
                ignored_user_ids: I ? [] : [t],
                warning_surface: f.fz.POST_JOIN_MODAL
            }
        }
    });
}
