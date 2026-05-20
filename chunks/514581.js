"use strict";
n.d(t, { Ay: () => y, oE: () => T });
var i = n(439372),
    r = n(734057),
    s = n(763827),
    a = n(994500),
    o = n(927813),
    l = n(549022);
n(741812);
var u = n(627968);
n(64700);
var c = n(192308),
    d = n(174459),
    _ = n(105600),
    f = n(64175),
    h = n(652215);
n(100544);
let p = 3 * o.A.Millis.DAY,
    E = 2 * o.A.Millis.DAY,
    m = +o.A.Millis.HOUR;
function g(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let i = r.A.getChannel(t);
    if (null != i && i.isGroupDM()) {
        var s;
        let e = i.recipients.filter((e) => a.A.isBlocked(e)),
            r = i.recipients.filter((e) => a.A.isIgnored(e));
        (e.length > 0 || r.length > 0) &&
            !i.blockedUserWarningDismissed &&
            ((s = t), !(((0, l.Oz)(s) ?? 0) > Date.now() - p)) &&
            (function (e) {
                let { channelId: t, blockedUserIds: i, ignoredUserIds: r } = e;
                (0, c.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("41816"),
                            n.e("8802"),
                            n.e("21537"),
                            n.e("18943"),
                            n.e("42234"),
                            n.e("65617"),
                            n.e("20577"),
                            n.e("83792"),
                            n.e("24958"),
                        ]).then(n.bind(n, 876717));
                        return (n) => {
                            let { transitionState: s, onClose: a } = n;
                            return (0, u.jsx)(e, {
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
                            (0, _.U)(t),
                                d.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                    action: f.Qi.DISMISS,
                                    channel_id: t,
                                    warning_medium: f.W_.MODAL,
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
    return ((0, l.Iz)() ?? 0) > Date.now() - m;
}
function T(e) {
    return I() || Array.from(e).every((e) => S(e, !0));
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !!(!t && I()) || ((0, l.kP)(e) ?? 0) > Date.now() - E;
}
class N extends i.A {
    actions = { CHANNEL_SELECT: g, APP_STATE_UPDATE: A };
    handleBlockedOrIgnoredUserVoiceChannelJoin(e, t) {
        let i = s.A.getChannelId();
        if (e === i && null != r.A.getChannel(e)) {
            let e;
            S(t) ||
                ((e = a.A.isBlocked(t)),
                (0, c.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("8802"),
                            n.e("21537"),
                            n.e("41816"),
                            n.e("35588"),
                            n.e("18943"),
                            n.e("42234"),
                            n.e("65617"),
                            n.e("20577"),
                            n.e("83792"),
                            n.e("39679"),
                        ]).then(n.bind(n, 552258));
                        return (n) => {
                            let { transitionState: r, onClose: s } = n;
                            return (0, u.jsx)(e, { channelId: i, userId: t, transitionState: r, onClose: s });
                        };
                    },
                    {
                        modalKey: "blocked_user_joined_voice_channel_modal",
                        onCloseCallback: () => {
                            d.default.track(h.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                action: f.Qi.DISMISS,
                                channel_id: i,
                                blocked_user_ids: e ? [t] : [],
                                ignored_user_ids: e ? [] : [t],
                                warning_surface: f.gD.POST_JOIN_MODAL,
                            });
                        },
                    },
                ));
        }
    }
}
let y = new N();
