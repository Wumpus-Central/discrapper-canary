n.d(t, { A: () => N, n: () => I });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(228366),
    s = n(272355),
    _ = n(267102),
    l = n(287809),
    o = n(207803),
    E = n(958805),
    d = n(485745),
    c = n(652215);
let u = new Set();
function I(e, t) {
    return `USER_PROFILE_MODAL_KEY:${e}:${null == t ? "" : t}`;
}
async function A(e) {
    let {
            userId: t,
            tabSection: a,
            scrollTarget: s,
            guildId: A,
            originGuildId: T,
            channelId: S,
            appContext: N,
            customStatusPrompt: O,
            ...R
        } = e,
        f = l.default.getUser(t);
    if (null == f) return;
    let C = l.default.getCurrentUser();
    if (null == C) return;
    (0, o.XQ)();
    let p = I(t, A);
    u.add(
        await (0, r.openModalLazy)(
            async () => {
                let e = (
                    await Promise.all([
                        n.e("34786"),
                        n.e("93103"),
                        n.e("53635"),
                        n.e("82486"),
                        n.e("98765"),
                        n.e("92803"),
                        n.e("40393"),
                        n.e("33773"),
                        n.e("27752"),
                        n.e("46277"),
                        n.e("80388"),
                        n.e("13988"),
                        n.e("66512"),
                        n.e("19119"),
                        n.e("35843"),
                        n.e("68515"),
                        n.e("15307"),
                        n.e("33064"),
                        n.e("80683"),
                        n.e("5536"),
                        n.e("12942"),
                        n.e("75041"),
                        n.e("49282"),
                        n.e("75193"),
                    ]).then(n.bind(n, 438857))
                ).default;
                return (t) =>
                    (0, i.jsx)(e, {
                        user: f,
                        currentUser: C,
                        guildId: A,
                        originGuildId: T ?? A,
                        initialTabSection: a,
                        initialScrollTarget: s,
                        channelId: S,
                        customStatusPrompt: O,
                        ...t,
                        ...R,
                    });
            },
            {
                modalKey: p,
                contextKey: (0, r.modalContextFromAppContext)(N ?? (0, _.zd)() ?? c.BRT.APP),
                onCloseRequest: () => {
                    t === C.id && (0, d.b)()
                        ? (0, o.VQ)()
                        : ((0, r.closeModal)(p), u.delete(p), E.A.clearPendingWidgets(), (0, o.XQ)());
                },
            },
        ),
    );
}
function T() {
    if (0 !== u.size) {
        for (let e of u) (0, r.closeModal)(e);
        u.clear(), E.A.clearPendingWidgets(), (0, o.XQ)();
    }
}
class S extends s.A {
    _initialize() {
        a.h.subscribe("USER_PROFILE_MODAL_OPEN", A), a.h.subscribe("USER_PROFILE_MODAL_CLOSE", T);
    }
    _terminate() {
        a.h.unsubscribe("USER_PROFILE_MODAL_OPEN", A), a.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", T);
    }
}
let N = new S();
