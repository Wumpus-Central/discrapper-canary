"use strict";
r.d(t, { A: () => b, n: () => f });
var n = r(627968);
r(64700);
var i = r(192308),
    a = r(228366),
    s = r(272355),
    l = r(267102),
    o = r(287809),
    c = r(207803),
    d = r(958805),
    u = r(485745),
    _ = r(652215);
let p = new Set();
function f(e, t) {
    return `USER_PROFILE_MODAL_KEY:${e}:${null == t ? "" : t}`;
}
async function m(e) {
    let {
            userId: t,
            tabSection: a,
            scrollTarget: s,
            guildId: m,
            originGuildId: h,
            channelId: g,
            appContext: b,
            customStatusPrompt: A,
            ...E
        } = e,
        v = o.default.getUser(t);
    if (null == v) return;
    let y = o.default.getCurrentUser();
    if (null == y) return;
    (0, c.XQ)();
    let I = f(t, m);
    p.add(
        await (0, i.openModalLazy)(
            async () => {
                let e = (
                    await Promise.all([
                        r.e("32292"),
                        r.e("34786"),
                        r.e("28367"),
                        r.e("45174"),
                        r.e("85519"),
                        r.e("11871"),
                        r.e("37266"),
                        r.e("55057"),
                        r.e("14976"),
                        r.e("63229"),
                        r.e("31988"),
                        r.e("55343"),
                        r.e("93103"),
                        r.e("98765"),
                        r.e("48900"),
                        r.e("10567"),
                        r.e("12542"),
                        r.e("84317"),
                        r.e("93858"),
                        r.e("82486"),
                        r.e("40393"),
                        r.e("33773"),
                        r.e("27752"),
                        r.e("7679"),
                        r.e("8021"),
                        r.e("98352"),
                        r.e("77058"),
                        r.e("4986"),
                        r.e("55811"),
                        r.e("2059"),
                        r.e("49914"),
                        r.e("19119"),
                        r.e("48612"),
                        r.e("11848"),
                        r.e("5536"),
                        r.e("66774"),
                        r.e("76062"),
                        r.e("49282"),
                        r.e("13225"),
                    ]).then(r.bind(r, 438857))
                ).default;
                return (t) =>
                    (0, n.jsx)(e, {
                        user: v,
                        currentUser: y,
                        guildId: m,
                        originGuildId: h ?? m,
                        initialTabSection: a,
                        initialScrollTarget: s,
                        channelId: g,
                        customStatusPrompt: A,
                        ...t,
                        ...E,
                    });
            },
            {
                modalKey: I,
                contextKey: (0, i.modalContextFromAppContext)(b ?? (0, l.zd)() ?? _.BRT.APP),
                onCloseRequest: () => {
                    t === y.id && (0, u.b)()
                        ? (0, c.VQ)()
                        : ((0, i.closeModal)(I), p.delete(I), d.A.clearPendingWidgets(), (0, c.XQ)());
                },
            },
        ),
    );
}
function h() {
    if (0 !== p.size) {
        for (let e of p) (0, i.closeModal)(e);
        p.clear(), d.A.clearPendingWidgets(), (0, c.XQ)();
    }
}
class g extends s.A {
    _initialize() {
        a.h.subscribe("USER_PROFILE_MODAL_OPEN", m), a.h.subscribe("USER_PROFILE_MODAL_CLOSE", h);
    }
    _terminate() {
        a.h.unsubscribe("USER_PROFILE_MODAL_OPEN", m), a.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", h);
    }
}
let b = new g();
