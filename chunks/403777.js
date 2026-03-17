"use strict";
n.d(t, { A: () => E, n: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(73153),
    a = n(272355),
    o = n(267102),
    l = n(287809),
    u = n(958805),
    c = n(61881),
    d = n(652215);
let _ = new Set();
function f(e, t) {
    return `USER_PROFILE_MODAL_KEY:${e}:${null == t ? "" : t}`;
}
async function p(e) {
    let {
            userId: t,
            tabSection: s,
            scrollTarget: a,
            guildId: p,
            originGuildId: h,
            channelId: m,
            appContext: E,
            customStatusPrompt: g,
            ...A
        } = e,
        I = l.default.getUser(t);
    if (null == I) return;
    let T = l.default.getCurrentUser();
    if (null == T) return;
    let S = f(t, p);
    _.add(
        await (0, i.mMO)(
            async () => {
                let e = (
                    await Promise.all([
                        n.e("10614"),
                        n.e("28936"),
                        n.e("64129"),
                        n.e("10117"),
                        n.e("95814"),
                        n.e("45672"),
                        n.e("49282"),
                        n.e("27723"),
                    ]).then(n.bind(n, 293071))
                ).default;
                return (t) =>
                    (0, r.jsx)(e, {
                        user: I,
                        currentUser: T,
                        guildId: p,
                        originGuildId: h ?? p,
                        initialTabSection: s,
                        initialScrollTarget: a,
                        channelId: m,
                        customStatusPrompt: g,
                        ...t,
                        ...A,
                    });
            },
            {
                modalKey: S,
                contextKey: (0, i.TId)(E ?? (0, o.zd)() ?? d.BRT.APP),
                onCloseRequest: () => {
                    c.A.hasUnsavedChanges()
                        ? u.A.notifyUnsavedWidgets()
                        : ((0, i.OoC)(S), _.delete(S), u.A.clearPendingWidgets());
                },
            },
        ),
    );
}
function h() {
    if (0 !== _.size) {
        for (let e of _) (0, i.OoC)(e);
        _.clear(), u.A.clearPendingWidgets();
    }
}
class m extends a.A {
    _initialize() {
        s.h.subscribe("USER_PROFILE_MODAL_OPEN", p), s.h.subscribe("USER_PROFILE_MODAL_CLOSE", h);
    }
    _terminate() {
        s.h.unsubscribe("USER_PROFILE_MODAL_OPEN", p), s.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", h);
    }
}
let E = new m();
