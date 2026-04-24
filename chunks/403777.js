n.d(t, { A: () => b, n: () => f });
var a = n(627968);
n(64700);
var i = n(192308),
    l = n(228366),
    r = n(272355),
    o = n(267102),
    s = n(287809),
    c = n(207803),
    d = n(958805),
    u = n(485745),
    _ = n(652215);
let p = new Set();
function f(e, t) {
    return `USER_PROFILE_MODAL_KEY:${e}:${null == t ? "" : t}`;
}
async function h(e) {
    let {
            userId: t,
            tabSection: l,
            scrollTarget: r,
            guildId: h,
            originGuildId: m,
            channelId: g,
            appContext: b,
            customStatusPrompt: A,
            ...E
        } = e,
        v = s.default.getUser(t);
    if (null == v) return;
    let I = s.default.getCurrentUser();
    if (null == I) return;
    (0, c.XQ)();
    let y = f(t, h);
    p.add(
        await (0, i.openModalLazy)(
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
                        user: v,
                        currentUser: I,
                        guildId: h,
                        originGuildId: m ?? h,
                        initialTabSection: l,
                        initialScrollTarget: r,
                        channelId: g,
                        customStatusPrompt: A,
                        ...t,
                        ...E,
                    });
            },
            {
                modalKey: y,
                contextKey: (0, i.modalContextFromAppContext)(b ?? (0, o.zd)() ?? _.BRT.APP),
                onCloseRequest: () => {
                    t === I.id && (0, u.b)()
                        ? (0, c.VQ)()
                        : ((0, i.closeModal)(y), p.delete(y), d.A.clearPendingWidgets(), (0, c.XQ)());
                },
            },
        ),
    );
}
function m() {
    if (0 !== p.size) {
        for (let e of p) (0, i.closeModal)(e);
        p.clear(), d.A.clearPendingWidgets(), (0, c.XQ)();
    }
}
class g extends r.A {
    _initialize() {
        l.h.subscribe("USER_PROFILE_MODAL_OPEN", h), l.h.subscribe("USER_PROFILE_MODAL_CLOSE", m);
    }
    _terminate() {
        l.h.unsubscribe("USER_PROFILE_MODAL_OPEN", h), l.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", m);
    }
}
let b = new g();
