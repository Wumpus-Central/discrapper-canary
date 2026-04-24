"use strict";
n.d(t, { A: () => b, n: () => m });
var a = n(627968);
n(64700);
var r = n(192308),
    i = n(228366),
    l = n(272355),
    s = n(267102),
    o = n(287809),
    c = n(207803),
    d = n(958805),
    u = n(485745),
    _ = n(652215);
let p = new Set();
function m(e, t) {
    return `USER_PROFILE_MODAL_KEY:${e}:${null == t ? "" : t}`;
}
async function h(e) {
    let {
            userId: t,
            tabSection: i,
            scrollTarget: l,
            guildId: h,
            originGuildId: f,
            channelId: g,
            appContext: b,
            customStatusPrompt: v,
            ...A
        } = e,
        x = o.default.getUser(t);
    if (null == x) return;
    let E = o.default.getCurrentUser();
    if (null == E) return;
    (0, c.XQ)();
    let T = m(t, h);
    p.add(
        await (0, r.openModalLazy)(
            async () => {
                let e = (
                    await Promise.all([
                        n.e("32292"),
                        n.e("34786"),
                        n.e("28367"),
                        n.e("45174"),
                        n.e("85519"),
                        n.e("87963"),
                        n.e("37266"),
                        n.e("55057"),
                        n.e("76021"),
                        n.e("63229"),
                        n.e("31988"),
                        n.e("55343"),
                        n.e("93103"),
                        n.e("98765"),
                        n.e("48900"),
                        n.e("10567"),
                        n.e("43436"),
                        n.e("22802"),
                        n.e("54865"),
                        n.e("82486"),
                        n.e("40393"),
                        n.e("33773"),
                        n.e("27752"),
                        n.e("7679"),
                        n.e("91749"),
                        n.e("98352"),
                        n.e("4986"),
                        n.e("77058"),
                        n.e("55811"),
                        n.e("2059"),
                        n.e("49914"),
                        n.e("19119"),
                        n.e("48612"),
                        n.e("13215"),
                        n.e("5536"),
                        n.e("12942"),
                        n.e("76062"),
                        n.e("49282"),
                        n.e("19051"),
                    ]).then(n.bind(n, 438857))
                ).default;
                return (t) =>
                    (0, a.jsx)(e, {
                        user: x,
                        currentUser: E,
                        guildId: h,
                        originGuildId: f ?? h,
                        initialTabSection: i,
                        initialScrollTarget: l,
                        channelId: g,
                        customStatusPrompt: v,
                        ...t,
                        ...A,
                    });
            },
            {
                modalKey: T,
                contextKey: (0, r.modalContextFromAppContext)(b ?? (0, s.zd)() ?? _.BRT.APP),
                onCloseRequest: () => {
                    t === E.id && (0, u.b)()
                        ? (0, c.VQ)()
                        : ((0, r.closeModal)(T), p.delete(T), d.A.clearPendingWidgets(), (0, c.XQ)());
                },
            },
        ),
    );
}
function f() {
    if (0 !== p.size) {
        for (let e of p) (0, r.closeModal)(e);
        p.clear(), d.A.clearPendingWidgets(), (0, c.XQ)();
    }
}
class g extends l.A {
    _initialize() {
        i.h.subscribe("USER_PROFILE_MODAL_OPEN", h), i.h.subscribe("USER_PROFILE_MODAL_CLOSE", f);
    }
    _terminate() {
        i.h.unsubscribe("USER_PROFILE_MODAL_OPEN", h), i.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", f);
    }
}
let b = new g();
