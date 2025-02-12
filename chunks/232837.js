s.d(t, { default: () => x }), s(627341);
var n = s(200651);
s(192379);
var i = s(278074),
    a = s(990547),
    r = s(442837),
    o = s(481060),
    l = s(287734),
    _ = s(922611),
    d = s(592125),
    c = s(699516),
    u = s(594174),
    A = s(626135),
    I = s(33194),
    g = s(343544),
    E = s(14251),
    h = s(110223),
    m = s(981631),
    f = s(388032),
    N = s(698284);
function x(e) {
    let { channelId: t, userId: s, transitionState: x, onClose: S } = e,
        p = (0, r.e7)([c.Z], () => c.Z.isBlocked(s)),
        L = (0, _.Do)({ location: 'BlockedUserJoinedVoiceChannelModal' }),
        C = (0, r.e7)([d.Z], () => d.Z.getChannel(t)),
        G = u.default.getUser(s);
    if (null == G) return null;
    let O = [
            {
                icon: L ? (0, E.r)([s], null == C ? void 0 : C.guild_id) : (0, n.jsx)(o.tBG, {}),
                text: L ? (0, E.a)([s], 1, null == C ? void 0 : C.guild_id, t) : f.intl.formatToPlainString(f.t.w0YvUl, { userName: null == G ? void 0 : G.username }),
                className: L ? N.row : void 0
            },
            {
                icon: L
                    ? (0, n.jsx)('div', {
                          className: N.icon,
                          children: (0, n.jsx)(o.aNP, {})
                      })
                    : (0, n.jsx)(o.S6n, {}),
                text: f.intl.string(f.t['+4O9nZ']),
                className: L ? N.row : void 0
            }
        ],
        j = (0, i.EQ)({
            stealthRemediationEnabled: L,
            isBlocked: p
        })
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !0
                },
                () =>
                    (0, n.jsxs)(n.Fragment, {
                        children: [f.intl.string(f.t.cpgfFh), (0, n.jsx)('br', {}), f.intl.string(f.t.UKQ4Cg)]
                    })
            )
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !1
                },
                () =>
                    (0, n.jsxs)(n.Fragment, {
                        children: [f.intl.string(f.t['xj3j4+']), (0, n.jsx)('br', {}), f.intl.string(f.t.wWueRU)]
                    })
            )
            .otherwise(() => f.intl.string(f.t.K8YIgY));
    return (0, n.jsx)(g.Z, {
        headerText: L ? f.intl.string(f.t['1/gpFh']) : f.intl.string(f.t.LGnmpa),
        secondaryHeaderText: L ? void 0 : f.intl.string(f.t['1/gpFh']),
        descriptionText: j,
        infoRows: O,
        onDismissAndStay: () => {
            S(),
                (0, I.g6)(t),
                A.default.track(m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: h.q.CLICK_TO_STAY,
                    channel_id: t,
                    blocked_user_ids: p ? [s] : [],
                    ignored_user_ids: p ? [] : [s],
                    warning_surface: h.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            S(),
                l.default.disconnect(),
                A.default.track(m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: h.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: p ? [s] : [],
                    ignored_user_ids: p ? [] : [s],
                    warning_surface: h.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: f.intl.string(f.t['Y56/oK']),
        stayButtonText: f.intl.string(f.t['Z+/hfX']),
        transitionState: x,
        onClose: S,
        impression: {
            impressionName: a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: p ? [s] : [],
                ignored_user_ids: p ? [] : [s],
                warning_surface: h.fz.POST_JOIN_MODAL
            }
        }
    });
}
