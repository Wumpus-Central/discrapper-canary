"use strict";
n.d(t, { A: () => g, n: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(73153),
    s = n(272355),
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
            tabSection: a,
            scrollTarget: s,
            guildId: p,
            channelId: h,
            showGuildProfile: m = !0,
            appContext: g,
            customStatusPrompt: E,
            disableActionsForPreview: A = !1,
            ...I
        } = e,
        T = l.default.getUser(t);
    if (null == T) return;
    let y = l.default.getCurrentUser();
    if (null == y) return;
    let S = f(t, m ? p : void 0);
    _.add(
        await (0, i.mMO)(
            async () => {
                let e = (
                    await Promise.all([
                        n.e("10614"),
                        n.e("28936"),
                        n.e("61486"),
                        n.e("63786"),
                        n.e("56825"),
                        n.e("10117"),
                        n.e("12362"),
                        n.e("49282"),
                        n.e("63974"),
                    ]).then(n.bind(n, 293071))
                ).default;
                return (t) =>
                    (0, r.jsx)(e, {
                        user: T,
                        currentUser: y,
                        guildId: p,
                        initialTabSection: a,
                        initialScrollTarget: s,
                        channelId: h,
                        showGuildProfile: m,
                        customStatusPrompt: E,
                        disableActionsForPreview: A,
                        ...t,
                        ...I,
                    });
            },
            {
                modalKey: S,
                contextKey: (0, i.TId)(g ?? (0, o.zd)() ?? d.BRT.APP),
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
class m extends s.A {
    _initialize() {
        a.h.subscribe("USER_PROFILE_MODAL_OPEN", p), a.h.subscribe("USER_PROFILE_MODAL_CLOSE", h);
    }
    _terminate() {
        a.h.unsubscribe("USER_PROFILE_MODAL_OPEN", p), a.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", h);
    }
}
let g = new m();
