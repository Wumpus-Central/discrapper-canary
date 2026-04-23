"use strict";
n.d(t, { Ay: () => C, oE: () => T });
var i = n(439372),
    r = n(734057),
    s = n(763827),
    a = n(994500),
    o = n(927813),
    l = n(549022);
n(741812);
var d = n(627968);
n(64700);
var _ = n(192308),
    u = n(954571),
    c = n(105600),
    E = n(64175),
    h = n(652215);
n(100544);
let m = 3 * o.A.Millis.DAY,
    f = 2 * o.A.Millis.DAY,
    g = +o.A.Millis.HOUR;
function p(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let i = r.A.getChannel(t);
    if (null != i && i.isGroupDM()) {
        var s;
        let e = i.recipients.filter((e) => a.A.isBlocked(e)),
            r = i.recipients.filter((e) => a.A.isIgnored(e));
        (e.length > 0 || r.length > 0) &&
            !i.blockedUserWarningDismissed &&
            ((s = t), !(((0, l.Oz)(s) ?? 0) > Date.now() - m)) &&
            (function (e) {
                let { channelId: t, blockedUserIds: i, ignoredUserIds: r } = e;
                (0, _.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("24958").then(n.bind(n, 876717));
                        return (n) => {
                            let { transitionState: s, onClose: a } = n;
                            return (0, d.jsx)(e, {
                                channelId: t,
                                blockedUserIds: i,
                                ignoredUserIds: r,
                                transitionState: s,
                                onClose: a,
                            });
                        };
                    },
                    {
                        onCloseCallback: () => {
                            (0, c.U)(t),
                                u.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                    action: E.Qi.DISMISS,
                                    channel_id: t,
                                    warning_medium: E.W_.MODAL,
                                    blocked_user_ids: i,
                                    ignored_user_ids: r,
                                });
                        },
                    },
                );
            })({ channelId: t, blockedUserIds: e, ignoredUserIds: r });
    }
}
function A(e) {
    let { state: t } = e;
}
function I() {
    return ((0, l.Iz)() ?? 0) > Date.now() - g;
}
function T(e) {
    return I() || Array.from(e).every((e) => S(e, !0));
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !!(!t && I()) || ((0, l.kP)(e) ?? 0) > Date.now() - f;
}
class N extends i.A {
    actions = { CHANNEL_SELECT: p, APP_STATE_UPDATE: A };
    handleBlockedOrIgnoredUserVoiceChannelJoin(e, t) {
        let i = s.A.getChannelId();
        if (e === i && null != r.A.getChannel(e)) {
            let e;
            S(t) ||
                ((e = a.A.isBlocked(t)),
                (0, _.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("39679").then(n.bind(n, 552258));
                        return (n) => {
                            let { transitionState: r, onClose: s } = n;
                            return (0, d.jsx)(e, { channelId: i, userId: t, transitionState: r, onClose: s });
                        };
                    },
                    {
                        modalKey: "blocked_user_joined_voice_channel_modal",
                        onCloseCallback: () => {
                            u.default.track(h.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                action: E.Qi.DISMISS,
                                channel_id: i,
                                blocked_user_ids: e ? [t] : [],
                                ignored_user_ids: e ? [] : [t],
                                warning_surface: E.gD.POST_JOIN_MODAL,
                            });
                        },
                    },
                ));
        }
    }
}
let C = new N();
