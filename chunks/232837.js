n.d(t, { default: () => S }), n(627341);
var s = n(200651);
n(192379);
var i = n(278074),
    a = n(990547),
    r = n(442837),
    o = n(481060),
    l = n(287734),
    _ = n(922611),
    d = n(592125),
    c = n(699516),
    u = n(594174),
    A = n(626135),
    g = n(33194),
    I = n(807031),
    E = n(343544),
    h = n(14251),
    m = n(110223),
    f = n(981631),
    N = n(388032),
    x = n(743398);
function S(e) {
    let { channelId: t, userId: n, transitionState: S, onClose: p } = e,
        L = (0, I.KR)({ location: 'warning_modal' }),
        C = (0, r.e7)([c.Z], () => c.Z.isBlocked(n)),
        G = (0, _.Do)({ location: 'BlockedUserJoinedVoiceChannelModal' }),
        O = (0, r.e7)([d.Z], () => d.Z.getChannel(t));
    if (!L) return null;
    let j = u.default.getUser(n);
    if (null == j) return null;
    let v = [
            {
                icon: G ? (0, h.r)([n], null == O ? void 0 : O.guild_id) : (0, s.jsx)(o.tBG, {}),
                text: G ? (0, h.a)([n], 1, null == O ? void 0 : O.guild_id, t) : N.intl.formatToPlainString(N.t.w0YvUl, { userName: null == j ? void 0 : j.username }),
                className: G ? x.row : void 0
            },
            {
                icon: G
                    ? (0, s.jsx)('div', {
                          className: x.icon,
                          children: (0, s.jsx)(o.aNP, {})
                      })
                    : (0, s.jsx)(o.S6n, {}),
                text: N.intl.string(N.t['+4O9nZ']),
                className: G ? x.row : void 0
            }
        ],
        F = (0, i.EQ)({
            stealthRemediationEnabled: G,
            isBlocked: C
        })
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !0
                },
                () =>
                    (0, s.jsxs)(s.Fragment, {
                        children: [N.intl.string(N.t.cpgfFh), (0, s.jsx)('br', {}), N.intl.string(N.t.UKQ4Cg)]
                    })
            )
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !1
                },
                () =>
                    (0, s.jsxs)(s.Fragment, {
                        children: [N.intl.string(N.t['xj3j4+']), (0, s.jsx)('br', {}), N.intl.string(N.t.wWueRU)]
                    })
            )
            .otherwise(() => N.intl.string(N.t.K8YIgY));
    return (0, s.jsx)(E.Z, {
        headerText: G ? N.intl.string(N.t['1/gpFh']) : N.intl.string(N.t.LGnmpa),
        secondaryHeaderText: G ? void 0 : N.intl.string(N.t['1/gpFh']),
        descriptionText: F,
        infoRows: v,
        onDismissAndStay: () => {
            p(),
                (0, g.g6)(t),
                A.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_STAY,
                    channel_id: t,
                    blocked_user_ids: C ? [n] : [],
                    ignored_user_ids: C ? [] : [n],
                    warning_surface: m.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            p(),
                l.default.disconnect(),
                A.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: C ? [n] : [],
                    ignored_user_ids: C ? [] : [n],
                    warning_surface: m.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: N.intl.string(N.t['Y56/oK']),
        stayButtonText: N.intl.string(N.t['Z+/hfX']),
        transitionState: S,
        onClose: p,
        impression: {
            impressionName: a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: C ? [n] : [],
                ignored_user_ids: C ? [] : [n],
                warning_surface: m.fz.POST_JOIN_MODAL
            }
        }
    });
}
