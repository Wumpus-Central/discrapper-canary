r.d(t, { default: () => m });
var n = r(200651);
r(192379);
var s = r(990547),
    i = r(442837),
    a = r(481060),
    o = r(287734),
    l = r(592125),
    c = r(699516),
    u = r(594174),
    _ = r(626135),
    d = r(33194),
    A = r(343544),
    f = r(14251),
    E = r(110223),
    I = r(981631),
    N = r(388032),
    g = r(868269);
function m(e) {
    let { channelId: t, userId: r, transitionState: m, onClose: S } = e,
        h = (0, i.e7)([c.Z], () => c.Z.isBlocked(r)),
        x = (0, i.e7)([l.Z], () => l.Z.getChannel(t));
    if (null == u.default.getUser(r)) return null;
    let p = [
            {
                icon: (0, f.r)([r], null == x ? void 0 : x.guild_id),
                text: (0, f.a)([r], 1, null == x ? void 0 : x.guild_id, t),
                className: g.row
            },
            {
                icon: (0, n.jsx)('div', {
                    className: g.icon,
                    children: (0, n.jsx)(a.aNP, {})
                }),
                text: N.NW.string(N.t['+4O9nZ']),
                className: g.row
            }
        ],
        O = h
            ? (0, n.jsxs)(n.Fragment, {
                  children: [N.NW.string(N.t.cpgfFh), (0, n.jsx)('br', {}), N.NW.string(N.t.UKQ4Cg)]
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [N.NW.string(N.t['xj3j4+']), (0, n.jsx)('br', {}), N.NW.string(N.t.wWueRU)]
              });
    return (0, n.jsx)(A.Z, {
        headerText: N.NW.string(N.t['1/gpFh']),
        descriptionText: O,
        infoRows: p,
        onDismissAndStay: () => {
            S(),
                (0, d.g6)(t),
                _.default.track(I.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: E.q.CLICK_TO_STAY,
                    channel_id: t,
                    blocked_user_ids: h ? [r] : [],
                    ignored_user_ids: h ? [] : [r],
                    warning_surface: E.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            S(),
                o.default.disconnect(),
                _.default.track(I.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: E.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: h ? [r] : [],
                    ignored_user_ids: h ? [] : [r],
                    warning_surface: E.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: N.NW.string(N.t['Y56/oK']),
        stayButtonText: N.NW.string(N.t['Z+/hfX']),
        transitionState: m,
        onClose: S,
        impression: {
            impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: h ? [r] : [],
                ignored_user_ids: h ? [] : [r],
                warning_surface: E.fz.POST_JOIN_MODAL
            }
        }
    });
}
