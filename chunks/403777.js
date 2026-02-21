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
            channelId: h,
            showGuildProfile: m = !0,
            appContext: E,
            customStatusPrompt: g,
            disableActionsForPreview: A = !1,
            ...I
        } = e,
        T = l.default.getUser(t);
    if (null == T) return;
    let S = l.default.getCurrentUser();
    if (null == S) return;
    let y = f(t, m ? p : void 0);
    _.add(
        await (0, i.mMO)(
            async () => {
                let e = (
                    await Promise.all([
                        n.e("18299"),
                        n.e("28936"),
                        n.e("18731"),
                        n.e("13696"),
                        n.e("54041"),
                        n.e("10117"),
                        n.e("94556"),
                        n.e("45672"),
                        n.e("49282"),
                        n.e("17653"),
                    ]).then(n.bind(n, 293071))
                ).default;
                return (t) =>
                    (0, r.jsx)(e, {
                        user: T,
                        currentUser: S,
                        guildId: p,
                        initialTabSection: s,
                        initialScrollTarget: a,
                        channelId: h,
                        showGuildProfile: m,
                        customStatusPrompt: g,
                        disableActionsForPreview: A,
                        ...t,
                        ...I,
                    });
            },
            {
                modalKey: y,
                contextKey: (0, i.TId)(E ?? (0, o.zd)() ?? d.BRT.APP),
                onCloseRequest: () => {
                    c.A.hasUnsavedChanges()
                        ? u.A.notifyUnsavedWidgets()
                        : ((0, i.OoC)(y), _.delete(y), u.A.clearPendingWidgets());
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
