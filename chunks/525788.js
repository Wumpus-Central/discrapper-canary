"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(17928),
    c = n(451988),
    d = n(990078),
    _ = n(305866),
    f = n(364522),
    h = n(534514),
    p = n(39623),
    E = n(97808),
    m = n(778712),
    g = n(922016),
    A = n(442433),
    I = n(820284),
    T = n(942857),
    S = n(538451),
    N = n(616356),
    y = n(287809),
    C = n(403362),
    v = n(562153),
    O = n(806931),
    R = n(652215),
    b = n(375708),
    D = n(36721);
function L(e, t) {
    switch (e) {
        case O.lp.ACTIVITY:
            return b.intl.formatToPlainString(b.t.TCM94S, { numUsers: t });
        case O.lp.STREAM:
            return b.intl.formatToPlainString(b.t.BR7Tno, { numViewers: t });
        default:
            throw Error("Unknown participant type.");
    }
}
function w(e) {
    let { users: t, disableInteraction: n, guildId: r, participantType: s, channelId: o, handleUserContextMenu: l } = e,
        u = L(s, t.length);
    return (0, i.jsx)(_.l, {
        "aria-label": u,
        className: D.XM,
        children: (0, i.jsxs)(f.Ip, {
            className: D.XG,
            children: [
                (0, i.jsx)(h.D, { variant: "heading-deprecated-12/semibold", className: D.o, children: u }),
                (0, i.jsx)("div", {
                    children: t.map((e) =>
                        (0, i.jsx)(
                            S.A,
                            {
                                user: e,
                                guildId: r ?? void 0,
                                channelId: o,
                                nick: v.Ay.getNickname(r, o, e),
                                className: a()(D.kp, { [D.YR]: n }),
                                textClassName: D.vc,
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
function M(e) {
    let { users: t, guildId: n, channelId: r, maxVisibleUsers: s = 3, className: o, participantType: l } = e,
        u = L(l, t.length),
        c =
            t.length < s
                ? b.intl.format(b.t["A+bT9O"], {
                      users: t.length,
                      user1: v.Ay.getName(n, r, t[0]),
                      user2: v.Ay.getName(n, r, t[1]),
                      commaSeparatedUsers: t
                          .slice(0, t.length - 1)
                          .map((e) => v.Ay.getName(n, r, e))
                          .join(", "),
                      lastUser: v.Ay.getName(n, r, t[t.length - 1]),
                  })
                : u;
    return (0, i.jsx)(d.m, {
        text: c,
        children: (0, i.jsxs)("div", {
            className: a()(D.Mj, o),
            children: [
                (0, i.jsx)(p.b, { size: "xs", color: "currentColor", className: D.N0 }),
                (0, i.jsx)("span", { "aria-hidden": "true", children: t.length }),
            ],
        }),
    });
}
let P = [];
function x(e) {
    let {
            channelId: t,
            guildId: s,
            participant: o,
            className: d,
            compact: _ = !1,
            disableInteraction: f = !1,
            maxVisibleUsers: h = 3,
        } = e,
        p = r.useRef(null),
        S = (0, T.A)(),
        [v, b] = r.useState(!1),
        L = r.useRef(new c.J_(150, () => b(!1))),
        x = (0, u.yK)([N.A, y.default], () => {
            if (o.type === O.lp.STREAM) {
                let e = N.A.getViewerIds(o.id);
                return e.length > 0 ? e.map((e) => y.default.getUser(e)).filter(C.Vq) : P;
            }
            return o.type === O.lp.ACTIVITY && o.participants.length > 0
                ? Array.from(o.participants)
                      .map((e) => y.default.getUser(e.userId))
                      .filter(C.Vq)
                : P;
        }, [o]);
    r.useEffect(() => {
        S && (L.current.cancel(), b(!1));
    }, [S]);
    let U = r.useCallback(() => {
            L.current.cancel(), b(!0);
        }, []),
        k = r.useCallback(() => {
            L.current.delay();
        }, []),
        G = r.useCallback(
            (e, t) => {
                U(),
                    (0, A.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("8516"),
                                n.e("20706"),
                                n.e("94881"),
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("34552"),
                                n.e("8757"),
                                n.e("34530"),
                                n.e("89673"),
                                n.e("85968"),
                                n.e("60195"),
                                n.e("68403"),
                                n.e("29787"),
                                n.e("97558"),
                                n.e("94000"),
                                n.e("91994"),
                                n.e("53729"),
                                n.e("76665"),
                                n.e("36320"),
                                n.e("90889"),
                                n.e("96443"),
                                n.e("76273"),
                                n.e("24198"),
                                n.e("56753"),
                                n.e("25486"),
                                n.e("14461"),
                                n.e("72883"),
                                n.e("49644"),
                                n.e("42204"),
                                n.e("42191"),
                                n.e("32418"),
                            ]).then(n.bind(n, 668569));
                            return (n) => (0, i.jsx)(e, { ...n, user: t });
                        },
                        { onClose: k },
                    );
            },
            [k, U],
        );
    if (0 === x.length) return null;
    if (_)
        return (0, i.jsx)(M, {
            maxVisibleUsers: h,
            users: x,
            guildId: s,
            channelId: t,
            className: d,
            participantType: o.type,
        });
    let F = l()(x)
        .take(h)
        .map((e) =>
            (0, i.jsx)(
                E.eu,
                { src: e.getAvatarURL(s, 24), "aria-label": e.username, size: m._3.SIZE_24, className: D.lJ },
                e.id,
            ),
        )
        .value();
    return (
        x.length > h &&
            (F[F.length - 1] = (0, i.jsxs)("div", { className: D.ju, children: ["+", x.length - h + 1] }, "overflow")),
        (0, i.jsx)(I.A, {
            section: R.JJy.STREAM_VIEWER_POPOUT,
            children: (0, i.jsx)("div", {
                onMouseEnter: U,
                onMouseLeave: k,
                children: (0, i.jsx)(g.Y, {
                    targetElementRef: p,
                    renderPopout: () =>
                        (0, i.jsx)(w, {
                            participantType: o.type,
                            handleUserContextMenu: G,
                            guildId: s,
                            channelId: t,
                            users: x,
                            disableInteraction: f,
                        }),
                    shouldShow: v && !S,
                    position: "top",
                    children: () => (0, i.jsx)("div", { ref: p, className: a()(D.Mj, d), children: F }),
                }),
            }),
        })
    );
}
