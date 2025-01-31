n.d(t, { default: () => S }), n(627341);
var i = n(200651);
n(192379);
var s = n(278074),
    r = n(990547),
    a = n(442837),
    l = n(481060),
    o = n(287734),
    d = n(922611),
    _ = n(592125),
    c = n(699516),
    u = n(594174),
    A = n(626135),
    E = n(33194),
    I = n(807031),
    f = n(343544),
    h = n(14251),
    N = n(110223),
    g = n(981631),
    m = n(388032),
    x = n(633211);
function S(e) {
    let { channelId: t, userId: n, transitionState: S, onClose: L } = e,
        C = (0, I.KR)({ location: 'warning_modal' }),
        p = (0, a.e7)([c.Z], () => c.Z.isBlocked(n)),
        G = (0, d.Do)({ location: 'BlockedUserJoinedVoiceChannelModal' }),
        O = (0, a.e7)([_.Z], () => _.Z.getChannel(t));
    if (!C) return null;
    let j = u.default.getUser(n);
    if (null == j) return null;
    let P = [
            {
                icon: G ? (0, h.r)([n], null == O ? void 0 : O.guild_id) : (0, i.jsx)(l.tBG, {}),
                text: G ? (0, h.a)([n], 1, null == O ? void 0 : O.guild_id, t) : m.intl.formatToPlainString(m.t.w0YvUl, { userName: null == j ? void 0 : j.username }),
                className: G ? x.row : void 0
            },
            {
                icon: G
                    ? (0, i.jsx)('div', {
                          className: x.icon,
                          children: (0, i.jsx)(l.aNP, {})
                      })
                    : (0, i.jsx)(l.S6n, {}),
                text: m.intl.string(m.t['+4O9nZ']),
                className: G ? x.row : void 0
            }
        ],
        T = (0, s.EQ)({
            stealthRemediationEnabled: G,
            isBlocked: p
        })
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !0
                },
                () =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [m.intl.string(m.t.cpgfFh), (0, i.jsx)('br', {}), m.intl.string(m.t.UKQ4Cg)]
                    })
            )
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !1
                },
                () =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [m.intl.string(m.t['xj3j4+']), (0, i.jsx)('br', {}), m.intl.string(m.t.wWueRU)]
                    })
            )
            .otherwise(() => m.intl.string(m.t.K8YIgY));
    return (0, i.jsx)(f.Z, {
        headerText: G ? m.intl.string(m.t['1/gpFh']) : m.intl.string(m.t.LGnmpa),
        secondaryHeaderText: G ? void 0 : m.intl.string(m.t['1/gpFh']),
        descriptionText: T,
        infoRows: P,
        onDismissAndStay: () => {
            L(),
                (0, E.g6)(t),
                A.default.track(g.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: N.q.CLICK_TO_STAY,
                    channel_id: t,
                    blocked_user_ids: p ? [n] : [],
                    ignored_user_ids: p ? [] : [n],
                    warning_surface: N.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            L(),
                o.default.disconnect(),
                A.default.track(g.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: N.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: p ? [n] : [],
                    ignored_user_ids: p ? [] : [n],
                    warning_surface: N.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: m.intl.string(m.t['Y56/oK']),
        stayButtonText: m.intl.string(m.t['Z+/hfX']),
        transitionState: S,
        onClose: L,
        impression: {
            impressionName: r.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: p ? [n] : [],
                ignored_user_ids: p ? [] : [n],
                warning_surface: N.fz.POST_JOIN_MODAL
            }
        }
    });
}
