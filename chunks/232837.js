n.r(e),
    n.d(e, {
        default: function () {
            return L;
        }
    }),
    n(627341);
var a = n(200651);
n(192379);
var i = n(278074),
    s = n(990547),
    r = n(442837),
    o = n(481060),
    l = n(287734),
    d = n(922611),
    u = n(592125),
    _ = n(699516),
    c = n(594174),
    A = n(626135),
    I = n(33194),
    S = n(807031),
    E = n(343544),
    h = n(14251),
    g = n(110223),
    N = n(981631),
    m = n(388032),
    f = n(633211);
function L(t) {
    let { channelId: e, userId: n, transitionState: L, onClose: x } = t,
        p = (0, S.KR)({ location: 'warning_modal' }),
        C = (0, r.e7)([_.Z], () => _.Z.isBlocked(n)),
        v = (0, d.Do)({ location: 'BlockedUserJoinedVoiceChannelModal' }),
        G = (0, r.e7)([u.Z], () => u.Z.getChannel(e));
    if (!p) return null;
    let O = c.default.getUser(n);
    if (null == O) return null;
    let T = [
            {
                icon: v ? (0, h.r)([n], null == G ? void 0 : G.guild_id) : (0, a.jsx)(o.UserIcon, {}),
                text: v ? (0, h.a)([n], 1, null == G ? void 0 : G.guild_id, e) : m.intl.formatToPlainString(m.t.w0YvUl, { userName: null == O ? void 0 : O.username }),
                className: v ? f.row : void 0
            },
            {
                icon: v
                    ? (0, a.jsx)('div', {
                          className: f.icon,
                          children: (0, a.jsx)(o.WarningIcon, {})
                      })
                    : (0, a.jsx)(o.MicrophoneIcon, {}),
                text: m.intl.string(m.t['+4O9nZ']),
                className: v ? f.row : void 0
            }
        ],
        j = (0, i.EQ)({
            stealthRemediationEnabled: v,
            isBlocked: C
        })
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !0
                },
                () =>
                    (0, a.jsxs)(a.Fragment, {
                        children: [m.intl.string(m.t.cpgfFh), (0, a.jsx)('br', {}), m.intl.string(m.t.UKQ4Cg)]
                    })
            )
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !1
                },
                () =>
                    (0, a.jsxs)(a.Fragment, {
                        children: [m.intl.string(m.t['xj3j4+']), (0, a.jsx)('br', {}), m.intl.string(m.t.wWueRU)]
                    })
            )
            .otherwise(() => m.intl.string(m.t.K8YIgY));
    return (0, a.jsx)(E.Z, {
        headerText: v ? m.intl.string(m.t['1/gpFh']) : m.intl.string(m.t.LGnmpa),
        secondaryHeaderText: v ? void 0 : m.intl.string(m.t['1/gpFh']),
        descriptionText: j,
        infoRows: T,
        onDismissAndStay: () => {
            x(),
                (0, I.g6)(e),
                A.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: g.q.CLICK_TO_STAY,
                    channel_id: e,
                    blocked_user_ids: C ? [n] : [],
                    ignored_user_ids: C ? [] : [n],
                    warning_surface: g.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            x(),
                l.default.disconnect(),
                A.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: g.q.CLICK_TO_LEAVE,
                    channel_id: e,
                    blocked_user_ids: C ? [n] : [],
                    ignored_user_ids: C ? [] : [n],
                    warning_surface: g.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: m.intl.string(m.t['Y56/oK']),
        stayButtonText: m.intl.string(m.t['Z+/hfX']),
        transitionState: L,
        onClose: x,
        impression: {
            impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: e,
                blocked_user_ids: C ? [n] : [],
                ignored_user_ids: C ? [] : [n],
                warning_surface: g.fz.POST_JOIN_MODAL
            }
        }
    });
}
