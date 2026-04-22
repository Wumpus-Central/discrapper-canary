n.d(t, { A: () => S, n: () => h });
var a = n(627968);
n(64700);
var r = n(192308),
    l = n(73153),
    i = n(272355),
    o = n(267102),
    s = n(287809),
    c = n(207803),
    u = n(958805),
    d = n(485745),
    f = n(652215);
let _ = new Set();
function h(e, t) {
    return `USER_PROFILE_MODAL_KEY:${e}:${null == t ? "" : t}`;
}
async function A(e) {
    let {
            userId: t,
            tabSection: l,
            scrollTarget: i,
            guildId: A,
            originGuildId: p,
            channelId: m,
            appContext: S,
            customStatusPrompt: g,
            ...b
        } = e,
        x = s.default.getUser(t);
    if (null == x) return;
    let T = s.default.getCurrentUser();
    if (null == T) return;
    (0, c.XQ)();
    let E = h(t, A);
    _.add(
        await (0, r.openModalLazy)(
            async () => {
                let e = (
                    await Promise.all([
                        n.e("61943"),
                        n.e("10614"),
                        n.e("28367"),
                        n.e("27411"),
                        n.e("12721"),
                        n.e("58283"),
                        n.e("8087"),
                        n.e("93103"),
                        n.e("55057"),
                        n.e("60471"),
                        n.e("48563"),
                        n.e("27355"),
                        n.e("67876"),
                        n.e("53635"),
                        n.e("82486"),
                        n.e("28936"),
                        n.e("755"),
                        n.e("16419"),
                        n.e("87306"),
                        n.e("25401"),
                        n.e("38114"),
                        n.e("6453"),
                        n.e("77302"),
                        n.e("27727"),
                        n.e("19677"),
                        n.e("10117"),
                        n.e("39558"),
                        n.e("14995"),
                        n.e("71555"),
                        n.e("33577"),
                        n.e("45445"),
                        n.e("23291"),
                        n.e("75169"),
                        n.e("49282"),
                        n.e("95127"),
                    ]).then(n.bind(n, 293071))
                ).default;
                return (t) =>
                    (0, a.jsx)(e, {
                        user: x,
                        currentUser: T,
                        guildId: A,
                        originGuildId: p ?? A,
                        initialTabSection: l,
                        initialScrollTarget: i,
                        channelId: m,
                        customStatusPrompt: g,
                        ...t,
                        ...b,
                    });
            },
            {
                modalKey: E,
                contextKey: (0, r.modalContextFromAppContext)(S ?? (0, o.zd)() ?? f.BRT.APP),
                onCloseRequest: () => {
                    t === T.id && (0, d.b)()
                        ? (0, c.VQ)()
                        : ((0, r.closeModal)(E), _.delete(E), u.A.clearPendingWidgets(), (0, c.XQ)());
                },
            },
        ),
    );
}
function p() {
    if (0 !== _.size) {
        for (let e of _) (0, r.closeModal)(e);
        _.clear(), u.A.clearPendingWidgets(), (0, c.XQ)();
    }
}
class m extends i.A {
    _initialize() {
        l.h.subscribe("USER_PROFILE_MODAL_OPEN", A), l.h.subscribe("USER_PROFILE_MODAL_CLOSE", p);
    }
    _terminate() {
        l.h.unsubscribe("USER_PROFILE_MODAL_OPEN", A), l.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", p);
    }
}
let S = new m();
