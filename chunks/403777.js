"use strict";
n.d(t, { A: () => b, n: () => f });
var r = n(627968);
n(64700);
var a = n(192308),
    i = n(228366),
    l = n(272355),
    s = n(267102),
    o = n(287809),
    c = n(207803),
    d = n(958805),
    u = n(485745),
    _ = n(652215);
let p = new Set();
function f(e, t) {
    return `USER_PROFILE_MODAL_KEY:${e}:${null == t ? "" : t}`;
}
async function m(e) {
    let {
            userId: t,
            tabSection: i,
            scrollTarget: l,
            guildId: m,
            originGuildId: h,
            channelId: g,
            appContext: b,
            customStatusPrompt: A,
            ...E
        } = e,
        v = o.default.getUser(t);
    if (null == v) return;
    let I = o.default.getCurrentUser();
    if (null == I) return;
    (0, c.XQ)();
    let y = f(t, m);
    p.add(
        await (0, a.openModalLazy)(
            async () => {
                let e = (
                    await Promise.all([
                        n.e("32292"),
                        n.e("34786"),
                        n.e("28367"),
                        n.e("45174"),
                        n.e("85519"),
                        n.e("11871"),
                        n.e("37266"),
                        n.e("55057"),
                        n.e("14976"),
                        n.e("63229"),
                        n.e("31988"),
                        n.e("55343"),
                        n.e("93103"),
                        n.e("98765"),
                        n.e("48900"),
                        n.e("10567"),
                        n.e("12542"),
                        n.e("84317"),
                        n.e("93858"),
                        n.e("82486"),
                        n.e("40393"),
                        n.e("33773"),
                        n.e("27752"),
                        n.e("7679"),
                        n.e("8021"),
                        n.e("98352"),
                        n.e("77058"),
                        n.e("4986"),
                        n.e("55811"),
                        n.e("2059"),
                        n.e("49914"),
                        n.e("19119"),
                        n.e("48612"),
                        n.e("11848"),
                        n.e("5536"),
                        n.e("66774"),
                        n.e("76062"),
                        n.e("49282"),
                        n.e("13225"),
                    ]).then(n.bind(n, 438857))
                ).default;
                return (t) =>
                    (0, r.jsx)(e, {
                        user: v,
                        currentUser: I,
                        guildId: m,
                        originGuildId: h ?? m,
                        initialTabSection: i,
                        initialScrollTarget: l,
                        channelId: g,
                        customStatusPrompt: A,
                        ...t,
                        ...E,
                    });
            },
            {
                modalKey: y,
                contextKey: (0, a.modalContextFromAppContext)(b ?? (0, s.zd)() ?? _.BRT.APP),
                onCloseRequest: () => {
                    t === I.id && (0, u.b)()
                        ? (0, c.VQ)()
                        : ((0, a.closeModal)(y), p.delete(y), d.A.clearPendingWidgets(), (0, c.XQ)());
                },
            },
        ),
    );
}
function h() {
    if (0 !== p.size) {
        for (let e of p) (0, a.closeModal)(e);
        p.clear(), d.A.clearPendingWidgets(), (0, c.XQ)();
    }
}
class g extends l.A {
    _initialize() {
        i.h.subscribe("USER_PROFILE_MODAL_OPEN", m), i.h.subscribe("USER_PROFILE_MODAL_CLOSE", h);
    }
    _terminate() {
        i.h.unsubscribe("USER_PROFILE_MODAL_OPEN", m), i.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", h);
    }
}
let b = new g();
