"use strict";
n.d(t, { Ay: () => C, oE: () => g });
var i = n(439372),
    r = n(734057),
    a = n(763827),
    s = n(994500),
    l = n(927813),
    o = n(549022);
n(741812);
var d = n(627968);
n(64700);
var c = n(192308),
    u = n(174459),
    _ = n(105600),
    E = n(64175),
    A = n(652215);
n(100544);
let h = 3 * l.A.Millis.DAY,
    I = 2 * l.A.Millis.DAY,
    f = +l.A.Millis.HOUR;
function p(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let i = r.A.getChannel(t);
    if (null != i && i.isGroupDM()) {
        var a;
        let e = i.recipients.filter((e) => s.A.isBlocked(e)),
            r = i.recipients.filter((e) => s.A.isIgnored(e));
        (e.length > 0 || r.length > 0) &&
            !i.blockedUserWarningDismissed &&
            ((a = t), !(((0, o.Oz)(a) ?? 0) > Date.now() - h)) &&
            (function (e) {
                let { channelId: t, blockedUserIds: i, ignoredUserIds: r } = e;
                (0, c.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("16747"),
                            n.e("42157"),
                            n.e("66714"),
                            n.e("72467"),
                            n.e("81647"),
                            n.e("24922"),
                            n.e("42234"),
                            n.e("65617"),
                            n.e("20577"),
                            n.e("83792"),
                            n.e("24958"),
                        ]).then(n.bind(n, 876717));
                        return (n) => {
                            let { transitionState: a, onClose: s } = n;
                            return (0, d.jsx)(e, {
                                channelId: t,
                                blockedUserIds: i,
                                ignoredUserIds: r,
                                transitionState: a,
                                onClose: s,
                            });
                        };
                    },
                    {
                        onCloseCallback: () => {
                            (0, _.U)(t),
                                u.default.track(A.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
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
function T(e) {
    let { state: t } = e;
}
function m() {
    return ((0, o.Iz)() ?? 0) > Date.now() - f;
}
function g(e) {
    return m() || Array.from(e).every((e) => S(e, !0));
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !!(!t && m()) || ((0, o.kP)(e) ?? 0) > Date.now() - I;
}
class N extends i.A {
    actions = { CHANNEL_SELECT: p, APP_STATE_UPDATE: T };
    handleBlockedOrIgnoredUserVoiceChannelJoin(e, t) {
        let i = a.A.getChannelId();
        if (e === i && null != r.A.getChannel(e)) {
            let e;
            S(t) ||
                ((e = s.A.isBlocked(t)),
                (0, c.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("42157"),
                            n.e("66714"),
                            n.e("16747"),
                            n.e("72467"),
                            n.e("35588"),
                            n.e("81647"),
                            n.e("24922"),
                            n.e("42234"),
                            n.e("65617"),
                            n.e("20577"),
                            n.e("83792"),
                            n.e("39679"),
                        ]).then(n.bind(n, 552258));
                        return (n) => {
                            let { transitionState: r, onClose: a } = n;
                            return (0, d.jsx)(e, { channelId: i, userId: t, transitionState: r, onClose: a });
                        };
                    },
                    {
                        modalKey: "blocked_user_joined_voice_channel_modal",
                        onCloseCallback: () => {
                            u.default.track(A.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
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
