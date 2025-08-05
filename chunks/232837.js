t.d(n, { default: () => E });
var r = t(255367),
    s = t(73800),
    i = t(990547),
    a = t(442837),
    o = t(481060),
    l = t(287734),
    c = t(493773),
    d = t(592125),
    u = t(699516),
    _ = t(594174),
    m = t(626135),
    x = t(33194),
    f = t(343544),
    h = t(14251),
    g = t(110223),
    N = t(981631),
    p = t(388032),
    j = t(868269);
function E(e) {
    let { channelId: n, userId: t, transitionState: E, onClose: C } = e,
        k = s.useRef(!1),
        v = (0, a.e7)([u.Z], () => u.Z.isBlocked(t)),
        O = (0, a.e7)([d.Z], () => d.Z.getChannel(n));
    if (
        ((0, c.zq)(() => {
            k.current || (0, x.nC)(t);
        }),
        null == _.default.getUser(t))
    )
        return null;
    let I = [
            {
                icon: (0, h.r)([t], null == O ? void 0 : O.guild_id),
                text: (0, h.a)([t], 1, null == O ? void 0 : O.guild_id, n),
                className: j.row
            },
            {
                icon: (0, r.jsx)('div', {
                    className: j.icon,
                    children: (0, r.jsx)(o.aNP, {})
                }),
                text: p.intl.string(p.t['+4O9nZ']),
                className: j.row
            }
        ],
        b = v
            ? (0, r.jsxs)(r.Fragment, {
                  children: [p.intl.string(p.t.cpgfFh), (0, r.jsx)('br', {}), p.intl.string(p.t.UKQ4Cg)]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [p.intl.string(p.t['xj3j4+']), (0, r.jsx)('br', {}), p.intl.string(p.t.wWueRU)]
              });
    return (0, r.jsx)(f.Z, {
        headerText: p.intl.string(p.t['1/gpFh']),
        descriptionText: b,
        infoRows: I,
        onDismissAndStay: () => {
            ((k.current = !0),
                C(),
                (0, x.nC)(t),
                m.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: g.q.CLICK_TO_STAY,
                    channel_id: n,
                    blocked_user_ids: v ? [t] : [],
                    ignored_user_ids: v ? [] : [t],
                    warning_surface: g.fz.POST_JOIN_MODAL
                }));
        },
        onDismissAndLeave: () => {
            ((k.current = !0),
                C(),
                l.default.disconnect(),
                m.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: g.q.CLICK_TO_LEAVE,
                    channel_id: n,
                    blocked_user_ids: v ? [t] : [],
                    ignored_user_ids: v ? [] : [t],
                    warning_surface: g.fz.POST_JOIN_MODAL
                }));
        },
        leaveButtonText: p.intl.string(p.t['Y56/oK']),
        stayButtonText: p.intl.string(p.t['Z+/hfX']),
        transitionState: E,
        onClose: C,
        impression: {
            impressionName: i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: n,
                blocked_user_ids: v ? [t] : [],
                ignored_user_ids: v ? [] : [t],
                warning_surface: g.fz.POST_JOIN_MODAL
            }
        }
    });
}
