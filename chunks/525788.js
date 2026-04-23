"use strict";
n.d(t, { A: () => U });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(311907),
    d = n(451988),
    c = n(990078),
    _ = n(305866),
    f = n(573613),
    E = n(534514),
    h = n(39623),
    p = n(97808),
    m = n(778712),
    g = n(265872),
    A = n(442433),
    I = n(820284),
    T = n(942857),
    S = n(538451),
    y = n(616356),
    N = n(287809),
    O = n(403362),
    R = n(562153),
    v = n(806931),
    C = n(652215),
    b = n(985018),
    D = n(36721);
function L(e, t) {
    switch (e) {
        case v.lp.ACTIVITY:
            return b.intl.formatToPlainString(b.t.TCM94S, { numUsers: t });
        case v.lp.STREAM:
            return b.intl.formatToPlainString(b.t.BR7Tno, { numViewers: t });
        default:
            throw Error("Unknown participant type.");
    }
}
function w(e) {
    let { users: t, disableInteraction: n, guildId: i, participantType: s, channelId: o, handleUserContextMenu: l } = e,
        u = L(s, t.length);
    return (0, r.jsx)(_.l, {
        "aria-label": u,
        className: D.XM,
        children: (0, r.jsxs)(f.Ip, {
            className: D.XG,
            children: [
                (0, r.jsx)(E.D, { variant: "heading-deprecated-12/semibold", className: D.o, children: u }),
                (0, r.jsx)("div", {
                    children: t.map((e) =>
                        (0, r.jsx)(
                            S.A,
                            {
                                user: e,
                                guildId: i ?? void 0,
                                channelId: o,
                                nick: R.Ay.getNickname(i, o, e),
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
    let { users: t, guildId: n, channelId: i, maxVisibleUsers: s = 3, className: o, participantType: l } = e,
        u = L(l, t.length),
        d =
            t.length < s
                ? b.intl.format(b.t["A+bT9O"], {
                      users: t.length,
                      user1: R.Ay.getName(n, i, t[0]),
                      user2: R.Ay.getName(n, i, t[1]),
                      commaSeparatedUsers: t
                          .slice(0, t.length - 1)
                          .map((e) => R.Ay.getName(n, i, e))
                          .join(", "),
                      lastUser: R.Ay.getName(n, i, t[t.length - 1]),
                  })
                : u;
    return (0, r.jsx)(c.m, {
        text: d,
        children: (0, r.jsxs)("div", {
            className: a()(D.Mj, o),
            children: [
                (0, r.jsx)(h.b, { size: "xs", color: "currentColor", className: D.N0 }),
                (0, r.jsx)("span", { "aria-hidden": "true", children: t.length }),
            ],
        }),
    });
}
let P = [];
function U(e) {
    let {
            channelId: t,
            guildId: s,
            participant: o,
            className: c,
            compact: _ = !1,
            disableInteraction: f = !1,
            maxVisibleUsers: E = 3,
        } = e,
        h = i.useRef(null),
        S = (0, T.A)(),
        [R, b] = i.useState(!1),
        L = i.useRef(new d.J_(150, () => b(!1))),
        U = (0, u.yK)([y.A, N.default], () => {
            if (o.type === v.lp.STREAM) {
                let e = y.A.getViewerIds(o.id);
                return e.length > 0 ? e.map((e) => N.default.getUser(e)).filter(O.Vq) : P;
            }
            return o.type === v.lp.ACTIVITY && o.participants.length > 0
                ? Array.from(o.participants)
                      .map((e) => N.default.getUser(e.userId))
                      .filter(O.Vq)
                : P;
        }, [o]);
    i.useEffect(() => {
        S && (L.current.cancel(), b(!1));
    }, [S]);
    let k = i.useCallback(() => {
            L.current.cancel(), b(!0);
        }, []),
        x = i.useCallback(() => {
            L.current.delay();
        }, []),
        G = i.useCallback(
            (e, t) => {
                k(),
                    (0, A.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("88017"),
                                n.e("92493"),
                                n.e("53635"),
                                n.e("32418"),
                                n.e("45083"),
                            ]).then(n.bind(n, 668569));
                            return (n) => (0, r.jsx)(e, { ...n, user: t });
                        },
                        { onClose: x },
                    );
            },
            [x, k],
        );
    if (0 === U.length) return null;
    if (_)
        return (0, r.jsx)(M, {
            maxVisibleUsers: E,
            users: U,
            guildId: s,
            channelId: t,
            className: c,
            participantType: o.type,
        });
    let V = l()(U)
        .take(E)
        .map((e) =>
            (0, r.jsx)(
                p.eu,
                { src: e.getAvatarURL(s, 24), "aria-label": e.username, size: m._3.SIZE_24, className: D.lJ },
                e.id,
            ),
        )
        .value();
    return (
        U.length > E &&
            (V[V.length - 1] = (0, r.jsxs)("div", { className: D.ju, children: ["+", U.length - E + 1] }, "overflow")),
        (0, r.jsx)(I.A, {
            section: C.JJy.STREAM_VIEWER_POPOUT,
            children: (0, r.jsx)("div", {
                onMouseEnter: k,
                onMouseLeave: x,
                children: (0, r.jsx)(g.Y, {
                    targetElementRef: h,
                    renderPopout: () =>
                        (0, r.jsx)(w, {
                            participantType: o.type,
                            handleUserContextMenu: G,
                            guildId: s,
                            channelId: t,
                            users: U,
                            disableInteraction: f,
                        }),
                    shouldShow: R && !S,
                    position: "top",
                    children: () => (0, r.jsx)("div", { ref: h, className: a()(D.Mj, c), children: V }),
                }),
            }),
        })
    );
}
