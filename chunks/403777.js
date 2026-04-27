a.d(t, { A: () => g, n: () => m });
var r = a(627968);
a(64700);
var n = a(192308),
    l = a(228366),
    i = a(272355),
    s = a(267102),
    o = a(287809),
    c = a(207803),
    d = a(958805),
    u = a(485745),
    h = a(652215);
let p = new Set();
function m(e, t) {
    return `USER_PROFILE_MODAL_KEY:${e}:${null == t ? "" : t}`;
}
async function f(e) {
    let {
            userId: t,
            tabSection: l,
            scrollTarget: i,
            guildId: f,
            originGuildId: b,
            channelId: _,
            appContext: g,
            customStatusPrompt: x,
            ...v
        } = e,
        A = o.default.getUser(t);
    if (null == A) return;
    let y = o.default.getCurrentUser();
    if (null == y) return;
    (0, c.XQ)();
    let E = m(t, f);
    p.add(
        await (0, n.openModalLazy)(
            async () => {
                let e = (
                    await Promise.all([
                        a.e("32292"),
                        a.e("34786"),
                        a.e("28367"),
                        a.e("45174"),
                        a.e("85519"),
                        a.e("87963"),
                        a.e("37266"),
                        a.e("55057"),
                        a.e("34717"),
                        a.e("63229"),
                        a.e("31988"),
                        a.e("55343"),
                        a.e("93103"),
                        a.e("98765"),
                        a.e("48900"),
                        a.e("10567"),
                        a.e("43436"),
                        a.e("84317"),
                        a.e("54865"),
                        a.e("82486"),
                        a.e("40393"),
                        a.e("33773"),
                        a.e("27752"),
                        a.e("7679"),
                        a.e("91749"),
                        a.e("98352"),
                        a.e("4986"),
                        a.e("77058"),
                        a.e("55811"),
                        a.e("2059"),
                        a.e("49914"),
                        a.e("19119"),
                        a.e("48612"),
                        a.e("11848"),
                        a.e("5536"),
                        a.e("66774"),
                        a.e("76062"),
                        a.e("49282"),
                        a.e("62384"),
                    ]).then(a.bind(a, 438857))
                ).default;
                return (t) =>
                    (0, r.jsx)(e, {
                        user: A,
                        currentUser: y,
                        guildId: f,
                        originGuildId: b ?? f,
                        initialTabSection: l,
                        initialScrollTarget: i,
                        channelId: _,
                        customStatusPrompt: x,
                        ...t,
                        ...v,
                    });
            },
            {
                modalKey: E,
                contextKey: (0, n.modalContextFromAppContext)(g ?? (0, s.zd)() ?? h.BRT.APP),
                onCloseRequest: () => {
                    t === y.id && (0, u.b)()
                        ? (0, c.VQ)()
                        : ((0, n.closeModal)(E), p.delete(E), d.A.clearPendingWidgets(), (0, c.XQ)());
                },
            },
        ),
    );
}
function b() {
    if (0 !== p.size) {
        for (let e of p) (0, n.closeModal)(e);
        p.clear(), d.A.clearPendingWidgets(), (0, c.XQ)();
    }
}
class _ extends i.A {
    _initialize() {
        l.h.subscribe("USER_PROFILE_MODAL_OPEN", f), l.h.subscribe("USER_PROFILE_MODAL_CLOSE", b);
    }
    _terminate() {
        l.h.unsubscribe("USER_PROFILE_MODAL_OPEN", f), l.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", b);
    }
}
let g = new _();
