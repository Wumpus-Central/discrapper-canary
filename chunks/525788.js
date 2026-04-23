"use strict";
n.d(t, { A: () => x });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(311907),
    c = n(451988),
    d = n(990078),
    _ = n(305866),
    f = n(573613),
    p = n(534514),
    h = n(39623),
    E = n(97808),
    m = n(778712),
    g = n(265872),
    A = n(442433),
    I = n(820284),
    T = n(942857),
    S = n(538451),
    y = n(616356),
    N = n(287809),
    v = n(403362),
    C = n(562153),
    O = n(806931),
    R = n(652215),
    b = n(985018),
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
    let { users: t, disableInteraction: n, guildId: i, participantType: s, channelId: o, handleUserContextMenu: l } = e,
        u = L(s, t.length);
    return (0, r.jsx)(_.l, {
        "aria-label": u,
        className: D.XM,
        children: (0, r.jsxs)(f.Ip, {
            className: D.XG,
            children: [
                (0, r.jsx)(p.D, { variant: "heading-deprecated-12/semibold", className: D.o, children: u }),
                (0, r.jsx)("div", {
                    children: t.map((e) =>
                        (0, r.jsx)(
                            S.A,
                            {
                                user: e,
                                guildId: i ?? void 0,
                                channelId: o,
                                nick: C.Ay.getNickname(i, o, e),
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
        c =
            t.length < s
                ? b.intl.format(b.t["A+bT9O"], {
                      users: t.length,
                      user1: C.Ay.getName(n, i, t[0]),
                      user2: C.Ay.getName(n, i, t[1]),
                      commaSeparatedUsers: t
                          .slice(0, t.length - 1)
                          .map((e) => C.Ay.getName(n, i, e))
                          .join(", "),
                      lastUser: C.Ay.getName(n, i, t[t.length - 1]),
                  })
                : u;
    return (0, r.jsx)(d.m, {
        text: c,
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
function x(e) {
    let {
            channelId: t,
            guildId: s,
            participant: o,
            className: d,
            compact: _ = !1,
            disableInteraction: f = !1,
            maxVisibleUsers: p = 3,
        } = e,
        h = i.useRef(null),
        S = (0, T.A)(),
        [C, b] = i.useState(!1),
        L = i.useRef(new c.J_(150, () => b(!1))),
        x = (0, u.yK)([y.A, N.default], () => {
            if (o.type === O.lp.STREAM) {
                let e = y.A.getViewerIds(o.id);
                return e.length > 0 ? e.map((e) => N.default.getUser(e)).filter(v.Vq) : P;
            }
            return o.type === O.lp.ACTIVITY && o.participants.length > 0
                ? Array.from(o.participants)
                      .map((e) => N.default.getUser(e.userId))
                      .filter(v.Vq)
                : P;
        }, [o]);
    i.useEffect(() => {
        S && (L.current.cancel(), b(!1));
    }, [S]);
    let k = i.useCallback(() => {
            L.current.cancel(), b(!0);
        }, []),
        U = i.useCallback(() => {
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
                                n.e("92493"),
                                n.e("53635"),
                                n.e("32418"),
                                n.e("72090"),
                            ]).then(n.bind(n, 668569));
                            return (n) => (0, r.jsx)(e, { ...n, user: t });
                        },
                        { onClose: U },
                    );
            },
            [U, k],
        );
    if (0 === x.length) return null;
    if (_)
        return (0, r.jsx)(M, {
            maxVisibleUsers: p,
            users: x,
            guildId: s,
            channelId: t,
            className: d,
            participantType: o.type,
        });
    let F = l()(x)
        .take(p)
        .map((e) =>
            (0, r.jsx)(
                E.eu,
                { src: e.getAvatarURL(s, 24), "aria-label": e.username, size: m._3.SIZE_24, className: D.lJ },
                e.id,
            ),
        )
        .value();
    return (
        x.length > p &&
            (F[F.length - 1] = (0, r.jsxs)("div", { className: D.ju, children: ["+", x.length - p + 1] }, "overflow")),
        (0, r.jsx)(I.A, {
            section: R.JJy.STREAM_VIEWER_POPOUT,
            children: (0, r.jsx)("div", {
                onMouseEnter: k,
                onMouseLeave: U,
                children: (0, r.jsx)(g.Y, {
                    targetElementRef: h,
                    renderPopout: () =>
                        (0, r.jsx)(w, {
                            participantType: o.type,
                            handleUserContextMenu: G,
                            guildId: s,
                            channelId: t,
                            users: x,
                            disableInteraction: f,
                        }),
                    shouldShow: C && !S,
                    position: "top",
                    children: () => (0, r.jsx)("div", { ref: h, className: a()(D.Mj, d), children: F }),
                }),
            }),
        })
    );
}
