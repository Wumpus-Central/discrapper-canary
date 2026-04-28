"use strict";
n.d(t, { A: () => U });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    _ = n(17928),
    d = n(451988),
    u = n(990078),
    c = n(305866),
    E = n(364522),
    h = n(534514),
    m = n(39623),
    f = n(97808),
    g = n(778712),
    I = n(922016),
    A = n(442433),
    p = n(820284),
    T = n(942857),
    S = n(538451),
    N = n(616356),
    O = n(287809),
    R = n(403362),
    C = n(562153),
    y = n(806931),
    D = n(652215),
    L = n(985018),
    v = n(36721);
function w(e, t) {
    switch (e) {
        case y.lp.ACTIVITY:
            return L.intl.formatToPlainString(L.t.TCM94S, { numUsers: t });
        case y.lp.STREAM:
            return L.intl.formatToPlainString(L.t.BR7Tno, { numViewers: t });
        default:
            throw Error("Unknown participant type.");
    }
}
function P(e) {
    let { users: t, disableInteraction: n, guildId: r, participantType: s, channelId: o, handleUserContextMenu: l } = e,
        _ = w(s, t.length);
    return (0, i.jsx)(c.l, {
        "aria-label": _,
        className: v.XM,
        children: (0, i.jsxs)(E.Ip, {
            className: v.XG,
            children: [
                (0, i.jsx)(h.D, { variant: "heading-deprecated-12/semibold", className: v.o, children: _ }),
                (0, i.jsx)("div", {
                    children: t.map((e) =>
                        (0, i.jsx)(
                            S.A,
                            {
                                user: e,
                                guildId: r ?? void 0,
                                channelId: o,
                                nick: C.Ay.getNickname(r, o, e),
                                className: a()(v.kp, { [v.YR]: n }),
                                textClassName: v.vc,
                                disablePopout: n,
                                onContextMenu: (t) => (n ? null : l(t, e)),
                            },
                            e.id,
                        ),
                    ),
                }),
            ],
        }),
    });
}
function b(e) {
    let { users: t, guildId: n, channelId: r, maxVisibleUsers: s = 3, className: o, participantType: l } = e,
        _ = w(l, t.length),
        d =
            t.length < s
                ? L.intl.format(L.t["A+bT9O"], {
                      users: t.length,
                      user1: C.Ay.getName(n, r, t[0]),
                      user2: C.Ay.getName(n, r, t[1]),
                      commaSeparatedUsers: t
                          .slice(0, t.length - 1)
                          .map((e) => C.Ay.getName(n, r, e))
                          .join(", "),
                      lastUser: C.Ay.getName(n, r, t[t.length - 1]),
                  })
                : _;
    return (0, i.jsx)(u.m, {
        text: d,
        children: (0, i.jsxs)("div", {
            className: a()(v.Mj, o),
            children: [
                (0, i.jsx)(m.b, { size: "xs", color: "currentColor", className: v.N0 }),
                (0, i.jsx)("span", { "aria-hidden": "true", children: t.length }),
            ],
        }),
    });
}
let k = [];
function U(e) {
    let {
            channelId: t,
            guildId: s,
            participant: o,
            className: u,
            compact: c = !1,
            disableInteraction: E = !1,
            maxVisibleUsers: h = 3,
        } = e,
        m = r.useRef(null),
        S = (0, T.A)(),
        [C, L] = r.useState(!1),
        w = r.useRef(new d.J_(150, () => L(!1))),
        U = (0, _.yK)([N.A, O.default], () => {
            if (o.type === y.lp.STREAM) {
                let e = N.A.getViewerIds(o.id);
                return e.length > 0 ? e.map((e) => O.default.getUser(e)).filter(R.Vq) : k;
            }
            return o.type === y.lp.ACTIVITY && o.participants.length > 0
                ? Array.from(o.participants)
                      .map((e) => O.default.getUser(e.userId))
                      .filter(R.Vq)
                : k;
        }, [o]);
    r.useEffect(() => {
        S && (w.current.cancel(), L(!1));
    }, [S]);
    let M = r.useCallback(() => {
            w.current.cancel(), L(!0);
        }, []),
        G = r.useCallback(() => {
            w.current.delay();
        }, []),
        x = r.useCallback(
            (e, t) => {
                M(),
                    (0, A.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("91388"),
                                n.e("77598"),
                                n.e("61748"),
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("34552"),
                                n.e("34530"),
                                n.e("43039"),
                                n.e("8757"),
                                n.e("53729"),
                                n.e("89673"),
                                n.e("68403"),
                                n.e("72535"),
                                n.e("85968"),
                                n.e("60195"),
                                n.e("28561"),
                                n.e("36320"),
                                n.e("45421"),
                                n.e("29787"),
                                n.e("88017"),
                                n.e("97558"),
                                n.e("94000"),
                                n.e("91994"),
                                n.e("21570"),
                                n.e("90889"),
                                n.e("76665"),
                                n.e("58765"),
                                n.e("76273"),
                                n.e("24198"),
                                n.e("86169"),
                                n.e("19871"),
                                n.e("24170"),
                                n.e("14461"),
                                n.e("25486"),
                                n.e("94503"),
                                n.e("14224"),
                                n.e("72883"),
                                n.e("49644"),
                                n.e("42204"),
                                n.e("83972"),
                                n.e("72072"),
                                n.e("32418"),
                            ]).then(n.bind(n, 668569));
                            return (n) => (0, i.jsx)(e, { ...n, user: t });
                        },
                        { onClose: G },
                    );
            },
            [G, M],
        );
    if (0 === U.length) return null;
    if (c)
        return (0, i.jsx)(b, {
            maxVisibleUsers: h,
            users: U,
            guildId: s,
            channelId: t,
            className: u,
            participantType: o.type,
        });
    let V = l()(U)
        .take(h)
        .map((e) =>
            (0, i.jsx)(
                f.eu,
                { src: e.getAvatarURL(s, 24), "aria-label": e.username, size: g._3.SIZE_24, className: v.lJ },
                e.id,
            ),
        )
        .value();
    return (
        U.length > h &&
            (V[V.length - 1] = (0, i.jsxs)("div", { className: v.ju, children: ["+", U.length - h + 1] }, "overflow")),
        (0, i.jsx)(p.A, {
            section: D.JJy.STREAM_VIEWER_POPOUT,
            children: (0, i.jsx)("div", {
                onMouseEnter: M,
                onMouseLeave: G,
                children: (0, i.jsx)(I.Y, {
                    targetElementRef: m,
                    renderPopout: () =>
                        (0, i.jsx)(P, {
                            participantType: o.type,
                            handleUserContextMenu: x,
                            guildId: s,
                            channelId: t,
                            users: U,
                            disableInteraction: E,
                        }),
                    shouldShow: C && !S,
                    position: "top",
                    children: () => (0, i.jsx)("div", { ref: m, className: a()(v.Mj, u), children: V }),
                }),
            }),
        })
    );
}
