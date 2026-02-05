"use strict";
n.d(t, { A: () => D });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(311907),
    c = n(451988),
    d = n(435371),
    _ = n(397927),
    f = n(442433),
    p = n(820284),
    h = n(942857),
    m = n(538451),
    g = n(616356),
    E = n(287809),
    A = n(403362),
    I = n(562153),
    T = n(806931),
    y = n(652215),
    S = n(985018),
    v = n(405434);
let C = 150;
function b(e, t) {
    switch (e) {
        case T.lp.ACTIVITY:
            return S.intl.formatToPlainString(S.t.TCM94S, { numUsers: t });
        case T.lp.STREAM:
            return S.intl.formatToPlainString(S.t.BR7Tno, { numViewers: t });
        default:
            throw Error("Unknown participant type.");
    }
}
function N(e) {
    let { users: t, disableInteraction: n, guildId: i, participantType: a, channelId: o, handleUserContextMenu: l } = e,
        u = b(a, t.length);
    return (0, r.jsx)(_.lGe, {
        "aria-label": u,
        className: v.XM,
        children: (0, r.jsxs)(_.HOs, {
            className: v.XG,
            children: [
                (0, r.jsx)(_.Heading, { variant: "heading-deprecated-12/semibold", className: v.o, children: u }),
                (0, r.jsx)("div", {
                    children: t.map((e) =>
                        (0, r.jsx)(
                            m.A,
                            {
                                user: e,
                                guildId: i ?? void 0,
                                channelId: o,
                                nick: I.Ay.getNickname(i, o, e),
                                className: s()(v.kp, { [v.YR]: n }),
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
function R(e) {
    let { users: t, guildId: n, channelId: i, maxVisibleUsers: a = 3, className: o, participantType: l } = e,
        u = b(l, t.length),
        c =
            t.length < a
                ? S.intl.format(S.t["A+bT9O"], {
                      users: t.length,
                      user1: I.Ay.getName(n, i, t[0]),
                      user2: I.Ay.getName(n, i, t[1]),
                      commaSeparatedUsers: t
                          .slice(0, t.length - 1)
                          .map((e) => I.Ay.getName(n, i, e))
                          .join(", "),
                      lastUser: I.Ay.getName(n, i, t[t.length - 1]),
                  })
                : u;
    return (0, r.jsx)(d.m_, {
        text: c,
        children: (0, r.jsxs)("div", {
            className: s()(v.Mj, o),
            children: [
                (0, r.jsx)(_.bMW, { size: "xs", color: "currentColor", className: v.N0 }),
                (0, r.jsx)("span", { "aria-hidden": "true", children: t.length }),
            ],
        }),
    });
}
let O = [];
function D(e) {
    let {
            channelId: t,
            guildId: a,
            participant: o,
            className: d,
            compact: m = !1,
            disableInteraction: I = !1,
            maxVisibleUsers: S = 3,
        } = e,
        b = i.useRef(null),
        D = (0, h.A)(),
        [L, w] = i.useState(!1),
        x = i.useRef(new c.J_(C, () => w(!1))),
        P = (0, u.yK)([g.A, E.default], () => {
            if (o.type === T.lp.STREAM) {
                let e = g.A.getViewerIds(o.id);
                return e.length > 0 ? e.map((e) => E.default.getUser(e)).filter(A.Vq) : O;
            }
            return o.type === T.lp.ACTIVITY && o.participants.length > 0
                ? Array.from(o.participants)
                      .map((e) => E.default.getUser(e.userId))
                      .filter(A.Vq)
                : O;
        }, [o]);
    i.useEffect(() => {
        D && (x.current.cancel(), w(!1));
    }, [D]);
    let M = i.useCallback(() => {
            x.current.cancel(), w(!0);
        }, []),
        k = i.useCallback(() => {
            x.current.delay();
        }, []),
        U = i.useCallback(
            (e, t) => {
                M(),
                    (0, f.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("3795"),
                                n.e("32418"),
                                n.e("57600"),
                            ]).then(n.bind(n, 668569));
                            return (n) => (0, r.jsx)(e, { ...n, user: t });
                        },
                        { onClose: k },
                    );
            },
            [k, M],
        );
    if (0 === P.length) return null;
    if (m)
        return (0, r.jsx)(R, {
            maxVisibleUsers: S,
            users: P,
            guildId: a,
            channelId: t,
            className: d,
            participantType: o.type,
        });
    let G = l()(P)
        .take(S)
        .map((e) =>
            (0, r.jsx)(
                _.euF,
                { src: e.getAvatarURL(a, 24), "aria-label": e.username, size: _._3J.SIZE_24, className: v.lJ },
                e.id,
            ),
        )
        .value();
    return (
        P.length > S &&
            (G[G.length - 1] = (0, r.jsxs)("div", { className: v.ju, children: ["+", P.length - S + 1] }, "overflow")),
        (0, r.jsx)(p.A, {
            section: y.JJy.STREAM_VIEWER_POPOUT,
            children: (0, r.jsx)("div", {
                onMouseEnter: M,
                onMouseLeave: k,
                children: (0, r.jsx)(_.YNO, {
                    targetElementRef: b,
                    renderPopout: () =>
                        (0, r.jsx)(N, {
                            participantType: o.type,
                            handleUserContextMenu: U,
                            guildId: a,
                            channelId: t,
                            users: P,
                            disableInteraction: I,
                        }),
                    shouldShow: L && !D,
                    position: "top",
                    children: () => (0, r.jsx)("div", { ref: b, className: s()(v.Mj, d), children: G }),
                }),
            }),
        })
    );
}
