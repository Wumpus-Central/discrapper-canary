"use strict";
n.d(t, { A: () => D });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(616356),
    g = n(287809),
    A = n(403362),
    I = n(562153),
    T = n(806931),
    S = n(652215),
    y = n(985018),
    v = n(625409);
let N = 150;
function C(e, t) {
    switch (e) {
        case T.lp.ACTIVITY:
            return y.intl.formatToPlainString(y.t.TCM94S, { numUsers: t });
        case T.lp.STREAM:
            return y.intl.formatToPlainString(y.t.BR7Tno, { numViewers: t });
        default:
            throw Error("Unknown participant type.");
    }
}
function R(e) {
    let { users: t, disableInteraction: n, guildId: i, participantType: s, channelId: o, handleUserContextMenu: l } = e,
        u = C(s, t.length);
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
function O(e) {
    let { users: t, guildId: n, channelId: i, maxVisibleUsers: s = 3, className: o, participantType: l } = e,
        u = C(l, t.length),
        c =
            t.length < s
                ? y.intl.format(y.t["A+bT9O"], {
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
            className: a()(v.Mj, o),
            children: [
                (0, r.jsx)(_.bMW, { size: "xs", color: "currentColor", className: v.N0 }),
                (0, r.jsx)("span", { "aria-hidden": "true", children: t.length }),
            ],
        }),
    });
}
let b = [];
function D(e) {
    let {
            channelId: t,
            guildId: s,
            participant: o,
            className: d,
            compact: m = !1,
            disableInteraction: I = !1,
            maxVisibleUsers: y = 3,
        } = e,
        C = i.useRef(null),
        D = (0, h.A)(),
        [L, w] = i.useState(!1),
        M = i.useRef(new c.J_(N, () => w(!1))),
        P = (0, u.yK)([E.A, g.default], () => {
            if (o.type === T.lp.STREAM) {
                let e = E.A.getViewerIds(o.id);
                return e.length > 0 ? e.map((e) => g.default.getUser(e)).filter(A.Vq) : b;
            }
            return o.type === T.lp.ACTIVITY && o.participants.length > 0
                ? Array.from(o.participants)
                      .map((e) => g.default.getUser(e.userId))
                      .filter(A.Vq)
                : b;
        }, [o]);
    i.useEffect(() => {
        D && (M.current.cancel(), w(!1));
    }, [D]);
    let x = i.useCallback(() => {
            M.current.cancel(), w(!0);
        }, []),
        k = i.useCallback(() => {
            M.current.delay();
        }, []),
        U = i.useCallback(
            (e, t) => {
                x(),
                    (0, f.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("11478"),
                                n.e("32418"),
                                n.e("73417"),
                            ]).then(n.bind(n, 668569));
                            return (n) => (0, r.jsx)(e, { ...n, user: t });
                        },
                        { onClose: k },
                    );
            },
            [k, x],
        );
    if (0 === P.length) return null;
    if (m)
        return (0, r.jsx)(O, {
            maxVisibleUsers: y,
            users: P,
            guildId: s,
            channelId: t,
            className: d,
            participantType: o.type,
        });
    let G = l()(P)
        .take(y)
        .map((e) =>
            (0, r.jsx)(
                _.euF,
                { src: e.getAvatarURL(s, 24), "aria-label": e.username, size: _._3J.SIZE_24, className: v.lJ },
                e.id,
            ),
        )
        .value();
    return (
        P.length > y &&
            (G[G.length - 1] = (0, r.jsxs)("div", { className: v.ju, children: ["+", P.length - y + 1] }, "overflow")),
        (0, r.jsx)(p.A, {
            section: S.JJy.STREAM_VIEWER_POPOUT,
            children: (0, r.jsx)("div", {
                onMouseEnter: x,
                onMouseLeave: k,
                children: (0, r.jsx)(_.YNO, {
                    targetElementRef: C,
                    renderPopout: () =>
                        (0, r.jsx)(R, {
                            participantType: o.type,
                            handleUserContextMenu: U,
                            guildId: s,
                            channelId: t,
                            users: P,
                            disableInteraction: I,
                        }),
                    shouldShow: L && !D,
                    position: "top",
                    children: () => (0, r.jsx)("div", { ref: C, className: a()(v.Mj, d), children: G }),
                }),
            }),
        })
    );
}
