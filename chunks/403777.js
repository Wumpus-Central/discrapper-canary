"use strict";
n.d(t, { A: () => E, n: () => f });
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
async function h(e) {
    let {
            userId: t,
            tabSection: a,
            scrollTarget: s,
            guildId: h,
            channelId: p,
            showGuildProfile: g = !0,
            appContext: E,
            customStatusPrompt: A,
            disableActionsForPreview: I = !1,
            ...T
        } = e,
        y = l.default.getUser(t);
    if (null == y) return;
    let S = l.default.getCurrentUser();
    if (null == S) return;
    let v = f(t, g ? h : void 0);
    _.add(
        await (0, i.mMO)(
            async () => {
                let e = (
                    await Promise.all([
                        n.e("10614"),
                        n.e("28936"),
                        n.e("95320"),
                        n.e("10117"),
                        n.e("66255"),
                        n.e("45672"),
                        n.e("49282"),
                        n.e("22623"),
                    ]).then(n.bind(n, 293071))
                ).default;
                return (t) =>
                    (0, r.jsx)(e, {
                        user: y,
                        currentUser: S,
                        guildId: h,
                        initialTabSection: a,
                        initialScrollTarget: s,
                        channelId: p,
                        showGuildProfile: g,
                        customStatusPrompt: A,
                        disableActionsForPreview: I,
                        ...t,
                        ...T,
                    });
            },
            {
                modalKey: v,
                contextKey: (0, i.TId)(E ?? (0, o.zd)() ?? d.BRT.APP),
                onCloseRequest: () => {
                    c.A.hasUnsavedChanges()
                        ? u.A.notifyUnsavedWidgets()
                        : ((0, i.OoC)(v), _.delete(v), u.A.clearPendingWidgets());
                },
            },
        ),
    );
}
function p() {
    if (0 !== _.size) {
        for (let e of _) (0, i.OoC)(e);
        _.clear(), u.A.clearPendingWidgets();
    }
}
class g extends s.A {
    _initialize() {
        a.h.subscribe("USER_PROFILE_MODAL_OPEN", h), a.h.subscribe("USER_PROFILE_MODAL_CLOSE", p);
    }
    _terminate() {
        a.h.unsubscribe("USER_PROFILE_MODAL_OPEN", h), a.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", p);
    }
}
let E = new g();
