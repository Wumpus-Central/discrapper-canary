"use strict";
n.d(t, { A: () => g, n: () => p });
var r = n(627968);
n(64700);
var i = n(397927),
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
            originGuildId: m,
            channelId: E,
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
        await (0, i.mMO)(
            async () => {
                let e = (
                    await Promise.all([
                        n.e("10614"),
                        n.e("91757"),
                        n.e("49924"),
                        n.e("28936"),
                        n.e("3916"),
                        n.e("55905"),
                        n.e("25699"),
                        n.e("10117"),
                        n.e("63596"),
                        n.e("23291"),
                        n.e("49282"),
                        n.e("3933"),
                    ]).then(n.bind(n, 293071))
                ).default;
                return (t) =>
                    (0, r.jsx)(e, {
                        user: T,
                        currentUser: S,
                        guildId: h,
                        originGuildId: m ?? h,
                        initialTabSection: s,
                        initialScrollTarget: a,
                        channelId: E,
                        customStatusPrompt: A,
                        ...t,
                        ...I,
                    });
            },
            {
                modalKey: y,
                contextKey: (0, i.TId)(g ?? (0, o.zd)() ?? _.BRT.APP),
                onCloseRequest: () => {
                    t === S.id && (0, d.b)()
                        ? (0, u.VQ)()
                        : ((0, i.OoC)(y), f.delete(y), c.A.clearPendingWidgets(), (0, u.XQ)());
                },
            },
        ),
    );
}
function m() {
    if (0 !== f.size) {
        for (let e of f) (0, i.OoC)(e);
        f.clear(), c.A.clearPendingWidgets(), (0, u.XQ)();
    }
}
class E extends a.A {
    _initialize() {
        s.h.subscribe("USER_PROFILE_MODAL_OPEN", h), s.h.subscribe("USER_PROFILE_MODAL_CLOSE", m);
    }
    _terminate() {
        s.h.unsubscribe("USER_PROFILE_MODAL_OPEN", h), s.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", m);
    }
}
let g = new E();
