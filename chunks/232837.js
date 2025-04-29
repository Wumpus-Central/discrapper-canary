n.d(t, { default: () => m });
var r = n(255367);
n(73800);
var s = n(990547),
    i = n(442837),
    a = n(481060),
    l = n(287734),
    o = n(592125),
    c = n(699516),
    u = n(594174),
    _ = n(626135),
    d = n(33194),
    A = n(343544),
    f = n(14251),
    E = n(110223),
    I = n(981631),
    g = n(388032),
    N = n(868269);
function m(e) {
    let { channelId: t, userId: n, transitionState: m, onClose: S } = e,
        h = (0, i.e7)([c.Z], () => c.Z.isBlocked(n)),
        x = (0, i.e7)([o.Z], () => o.Z.getChannel(t));
    if (null == u.default.getUser(n)) return null;
    let p = [
            {
                icon: (0, f.r)([n], null == x ? void 0 : x.guild_id),
                text: (0, f.a)([n], 1, null == x ? void 0 : x.guild_id, t),
                className: N.row
            },
            {
                icon: (0, r.jsx)('div', {
                    className: N.icon,
                    children: (0, r.jsx)(a.aNP, {})
                }),
                text: g.intl.string(g.t['+4O9nZ']),
                className: N.row
            }
        ],
        O = h
            ? (0, r.jsxs)(r.Fragment, {
                  children: [g.intl.string(g.t.cpgfFh), (0, r.jsx)('br', {}), g.intl.string(g.t.UKQ4Cg)]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [g.intl.string(g.t['xj3j4+']), (0, r.jsx)('br', {}), g.intl.string(g.t.wWueRU)]
              });
    return (0, r.jsx)(A.Z, {
        headerText: g.intl.string(g.t['1/gpFh']),
        descriptionText: O,
        infoRows: p,
        onDismissAndStay: () => {
            S(),
                (0, d.g6)(t),
                _.default.track(I.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: E.q.CLICK_TO_STAY,
                    channel_id: t,
                    blocked_user_ids: h ? [n] : [],
                    ignored_user_ids: h ? [] : [n],
                    warning_surface: E.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            S(),
                l.default.disconnect(),
                _.default.track(I.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: E.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: h ? [n] : [],
                    ignored_user_ids: h ? [] : [n],
                    warning_surface: E.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: g.intl.string(g.t['Y56/oK']),
        stayButtonText: g.intl.string(g.t['Z+/hfX']),
        transitionState: m,
        onClose: S,
        impression: {
            impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: h ? [n] : [],
                ignored_user_ids: h ? [] : [n],
                warning_surface: E.fz.POST_JOIN_MODAL
            }
        }
    });
}
