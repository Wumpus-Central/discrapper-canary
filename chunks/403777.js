"use strict";
n.d(t, { A: () => g, n: () => p });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(73153),
    a = n(272355),
    o = n(267102),
    l = n(287809),
    u = n(207803),
    c = n(958805),
    d = n(485745),
    _ = n(652215);
let f = new Set();
function p(e, t) {
    return `USER_PROFILE_MODAL_KEY:${e}:${null == t ? "" : t}`;
}
async function h(e) {
    let {
            userId: t,
            tabSection: s,
            scrollTarget: a,
            guildId: h,
            originGuildId: E,
            channelId: m,
            appContext: g,
            customStatusPrompt: A,
            ...I
        } = e,
        T = l.default.getUser(t);
    if (null == T) return;
    let S = l.default.getCurrentUser();
    if (null == S) return;
    (0, u.XQ)();
    let y = p(t, h);
    f.add(
        await (0, i.openModalLazy)(
            async () => {
                let e = (
                    await Promise.all([
                        n.e("10614"),
                        n.e("93103"),
                        n.e("53635"),
                        n.e("82486"),
                        n.e("28936"),
                        n.e("755"),
                        n.e("16419"),
                        n.e("87306"),
                        n.e("46277"),
                        n.e("38114"),
                        n.e("13066"),
                        n.e("72684"),
                        n.e("10117"),
                        n.e("35843"),
                        n.e("39558"),
                        n.e("14995"),
                        n.e("93815"),
                        n.e("45071"),
                        n.e("45445"),
                        n.e("23291"),
                        n.e("86737"),
                        n.e("49282"),
                        n.e("78777"),
                    ]).then(n.bind(n, 293071))
                ).default;
                return (t) =>
                    (0, r.jsx)(e, {
                        user: T,
                        currentUser: S,
                        guildId: h,
                        originGuildId: E ?? h,
                        initialTabSection: s,
                        initialScrollTarget: a,
                        channelId: m,
                        customStatusPrompt: A,
                        ...t,
                        ...I,
                    });
            },
            {
                modalKey: y,
                contextKey: (0, i.modalContextFromAppContext)(g ?? (0, o.zd)() ?? _.BRT.APP),
                onCloseRequest: () => {
                    t === S.id && (0, d.b)()
                        ? (0, u.VQ)()
                        : ((0, i.closeModal)(y), f.delete(y), c.A.clearPendingWidgets(), (0, u.XQ)());
                },
            },
        ),
    );
}
function E() {
    if (0 !== f.size) {
        for (let e of f) (0, i.closeModal)(e);
        f.clear(), c.A.clearPendingWidgets(), (0, u.XQ)();
    }
}
class m extends a.A {
    _initialize() {
        s.h.subscribe("USER_PROFILE_MODAL_OPEN", h), s.h.subscribe("USER_PROFILE_MODAL_CLOSE", E);
    }
    _terminate() {
        s.h.unsubscribe("USER_PROFILE_MODAL_OPEN", h), s.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", E);
    }
}
let g = new m();
