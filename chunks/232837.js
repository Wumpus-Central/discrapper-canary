n.d(t, { default: () => b }), n(627341);
var s = n(200651);
n(192379);
var i = n(278074),
    o = n(990547),
    _ = n(442837),
    a = n(481060),
    r = n(287734),
    c = n(922611),
    d = n(592125),
    u = n(699516),
    l = n(594174),
    g = n(626135),
    p = n(33194),
    f = n(343544),
    h = n(14251),
    m = n(110223),
    N = n(981631),
    x = n(388032),
    I = n(584937);
function b(e) {
    let { channelId: t, userId: n, transitionState: b, onClose: C } = e,
        E = (0, _.e7)([u.Z], () => u.Z.isBlocked(n)),
        M = (0, c.Do)({ location: 'BlockedUserJoinedVoiceChannelModal' }),
        O = (0, _.e7)([d.Z], () => d.Z.getChannel(t)),
        w = l.default.getUser(n);
    if (null == w) return null;
    let A = [
            {
                icon: M ? (0, h.r)([n], null == O ? void 0 : O.guild_id) : (0, s.jsx)(a.tBG, {}),
                text: M ? (0, h.a)([n], 1, null == O ? void 0 : O.guild_id, t) : x.NW.formatToPlainString(x.t.w0YvUl, { userName: null == w ? void 0 : w.username }),
                className: M ? I.row : void 0
            },
            {
                icon: M
                    ? (0, s.jsx)('div', {
                          className: I.icon,
                          children: (0, s.jsx)(a.aNP, {})
                      })
                    : (0, s.jsx)(a.S6n, {}),
                text: x.NW.string(x.t['+4O9nZ']),
                className: M ? I.row : void 0
            }
        ],
        v = (0, i.EQ)({
            stealthRemediationEnabled: M,
            isBlocked: E
        })
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !0
                },
                () =>
                    (0, s.jsxs)(s.Fragment, {
                        children: [x.NW.string(x.t.cpgfFh), (0, s.jsx)('br', {}), x.NW.string(x.t.UKQ4Cg)]
                    })
            )
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !1
                },
                () =>
                    (0, s.jsxs)(s.Fragment, {
                        children: [x.NW.string(x.t['xj3j4+']), (0, s.jsx)('br', {}), x.NW.string(x.t.wWueRU)]
                    })
            )
            .otherwise(() => x.NW.string(x.t.K8YIgY));
    return (0, s.jsx)(f.Z, {
        headerText: M ? x.NW.string(x.t['1/gpFh']) : x.NW.string(x.t.LGnmpa),
        secondaryHeaderText: M ? void 0 : x.NW.string(x.t['1/gpFh']),
        descriptionText: v,
        infoRows: A,
        onDismissAndStay: () => {
            C(),
                (0, p.g6)(t),
                g.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_STAY,
                    channel_id: t,
                    blocked_user_ids: E ? [n] : [],
                    ignored_user_ids: E ? [] : [n],
                    warning_surface: m.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            C(),
                r.default.disconnect(),
                g.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: E ? [n] : [],
                    ignored_user_ids: E ? [] : [n],
                    warning_surface: m.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: x.NW.string(x.t['Y56/oK']),
        stayButtonText: x.NW.string(x.t['Z+/hfX']),
        transitionState: b,
        onClose: C,
        impression: {
            impressionName: o.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: E ? [n] : [],
                ignored_user_ids: E ? [] : [n],
                warning_surface: m.fz.POST_JOIN_MODAL
            }
        }
    });
}
