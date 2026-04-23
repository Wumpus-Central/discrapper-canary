"use strict";
n.d(t, { A: () => M });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    d = n(17928),
    _ = n(451988),
    u = n(990078),
    c = n(305866),
    E = n(364522),
    h = n(534514),
    m = n(39623),
    f = n(97808),
    g = n(778712),
    p = n(922016),
    A = n(442433),
    I = n(820284),
    T = n(942857),
    S = n(538451),
    N = n(616356),
    C = n(287809),
    R = n(403362),
    O = n(562153),
    y = n(806931),
    v = n(652215),
    D = n(985018),
    L = n(36721);
function b(e, t) {
    switch (e) {
        case y.lp.ACTIVITY:
            return D.intl.formatToPlainString(D.t.TCM94S, { numUsers: t });
        case y.lp.STREAM:
            return D.intl.formatToPlainString(D.t.BR7Tno, { numViewers: t });
        default:
            throw Error("Unknown participant type.");
    }
}
function w(e) {
    let { users: t, disableInteraction: n, guildId: r, participantType: s, channelId: o, handleUserContextMenu: l } = e,
        d = b(s, t.length);
    return (0, i.jsx)(c.l, {
        "aria-label": d,
        className: L.XM,
        children: (0, i.jsxs)(E.Ip, {
            className: L.XG,
            children: [
                (0, i.jsx)(h.D, { variant: "heading-deprecated-12/semibold", className: L.o, children: d }),
                (0, i.jsx)("div", {
                    children: t.map((e) =>
                        (0, i.jsx)(
                            S.A,
                            {
                                user: e,
                                guildId: r ?? void 0,
                                channelId: o,
                                nick: O.Ay.getNickname(r, o, e),
                                className: a()(L.kp, { [L.YR]: n }),
                                textClassName: L.vc,
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
function P(e) {
    let { users: t, guildId: n, channelId: r, maxVisibleUsers: s = 3, className: o, participantType: l } = e,
        d = b(l, t.length),
        _ =
            t.length < s
                ? D.intl.format(D.t["A+bT9O"], {
                      users: t.length,
                      user1: O.Ay.getName(n, r, t[0]),
                      user2: O.Ay.getName(n, r, t[1]),
                      commaSeparatedUsers: t
                          .slice(0, t.length - 1)
                          .map((e) => O.Ay.getName(n, r, e))
                          .join(", "),
                      lastUser: O.Ay.getName(n, r, t[t.length - 1]),
                  })
                : d;
    return (0, i.jsx)(u.m, {
        text: _,
        children: (0, i.jsxs)("div", {
            className: a()(L.Mj, o),
            children: [
                (0, i.jsx)(m.b, { size: "xs", color: "currentColor", className: L.N0 }),
                (0, i.jsx)("span", { "aria-hidden": "true", children: t.length }),
            ],
        }),
    });
}
let k = [];
function M(e) {
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
        [O, D] = r.useState(!1),
        b = r.useRef(new _.J_(150, () => D(!1))),
        M = (0, d.yK)([N.A, C.default], () => {
            if (o.type === y.lp.STREAM) {
                let e = N.A.getViewerIds(o.id);
                return e.length > 0 ? e.map((e) => C.default.getUser(e)).filter(R.Vq) : k;
            }
            return o.type === y.lp.ACTIVITY && o.participants.length > 0
                ? Array.from(o.participants)
                      .map((e) => C.default.getUser(e.userId))
                      .filter(R.Vq)
                : k;
        }, [o]);
    r.useEffect(() => {
        S && (b.current.cancel(), D(!1));
    }, [S]);
    let U = r.useCallback(() => {
            b.current.cancel(), D(!0);
        }, []),
        x = r.useCallback(() => {
            b.current.delay();
        }, []),
        G = r.useCallback(
            (e, t) => {
                U(),
                    (0, A.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("24170"),
                                n.e("53635"),
                                n.e("32418"),
                                n.e("17563"),
                            ]).then(n.bind(n, 668569));
                            return (n) => (0, i.jsx)(e, { ...n, user: t });
                        },
                        { onClose: x },
                    );
            },
            [x, U],
        );
    if (0 === M.length) return null;
    if (c)
        return (0, i.jsx)(P, {
            maxVisibleUsers: h,
            users: M,
            guildId: s,
            channelId: t,
            className: u,
            participantType: o.type,
        });
    let V = l()(M)
        .take(h)
        .map((e) =>
            (0, i.jsx)(
                f.eu,
                { src: e.getAvatarURL(s, 24), "aria-label": e.username, size: g._3.SIZE_24, className: L.lJ },
                e.id,
            ),
        )
        .value();
    return (
        M.length > h &&
            (V[V.length - 1] = (0, i.jsxs)("div", { className: L.ju, children: ["+", M.length - h + 1] }, "overflow")),
        (0, i.jsx)(I.A, {
            section: v.JJy.STREAM_VIEWER_POPOUT,
            children: (0, i.jsx)("div", {
                onMouseEnter: U,
                onMouseLeave: x,
                children: (0, i.jsx)(p.Y, {
                    targetElementRef: m,
                    renderPopout: () =>
                        (0, i.jsx)(w, {
                            participantType: o.type,
                            handleUserContextMenu: G,
                            guildId: s,
                            channelId: t,
                            users: M,
                            disableInteraction: E,
                        }),
                    shouldShow: O && !S,
                    position: "top",
                    children: () => (0, i.jsx)("div", { ref: m, className: a()(L.Mj, u), children: V }),
                }),
            }),
        })
    );
}
