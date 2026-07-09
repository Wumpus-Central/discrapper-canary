"use strict";
n.d(t, { A: () => w });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(735438),
    o = n.n(l),
    d = n(17928),
    c = n(451988),
    u = n(990078),
    _ = n(305866),
    E = n(364522),
    A = n(534514),
    h = n(39623),
    I = n(97808),
    f = n(778712),
    p = n(922016),
    T = n(442433),
    m = n(820284),
    g = n(942857),
    S = n(538451),
    N = n(616356),
    C = n(287809),
    R = n(403362),
    O = n(562153),
    L = n(806931),
    D = n(652215),
    y = n(375708),
    v = n(641009);
function b(e, t) {
    switch (e) {
        case L.lp.ACTIVITY:
            return y.intl.formatToPlainString(y.t.TCM94S, { numUsers: t });
        case L.lp.STREAM:
            return y.intl.formatToPlainString(y.t.BR7Tno, { numViewers: t });
        default:
            throw Error("Unknown participant type.");
    }
}
function M(e) {
    let { users: t, disableInteraction: n, guildId: r, participantType: a, channelId: l, handleUserContextMenu: o } = e,
        d = b(a, t.length);
    return (0, i.jsx)(_.l, {
        "aria-label": d,
        className: v.XM,
        children: (0, i.jsxs)(E.Ip, {
            className: v.XG,
            children: [
                (0, i.jsx)(A.D, { variant: "heading-deprecated-12/semibold", className: v.o, children: d }),
                (0, i.jsx)("div", {
                    children: t.map((e) =>
                        (0, i.jsx)(
                            S.A,
                            {
                                user: e,
                                guildId: r ?? void 0,
                                channelId: l,
                                nick: O.Ay.getNickname(r, l, e),
                                className: s()(v.kp, { [v.YR]: n }),
                                textClassName: v.vc,
                                disablePopout: n,
                                onContextMenu: (t) => (n ? null : o(t, e)),
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
    let { users: t, guildId: n, channelId: r, maxVisibleUsers: a = 3, className: l, participantType: o } = e,
        d = b(o, t.length),
        c =
            t.length < a
                ? y.intl.format(y.t["A+bT9O"], {
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
        text: c,
        children: (0, i.jsxs)("div", {
            className: s()(v.Mj, l),
            children: [
                (0, i.jsx)(h.b, { size: "xs", color: "currentColor", className: v.N0 }),
                (0, i.jsx)("span", { "aria-hidden": "true", children: t.length }),
            ],
        }),
    });
}
let U = [];
function w(e) {
    let {
            channelId: t,
            guildId: a,
            participant: l,
            className: u,
            compact: _ = !1,
            disableInteraction: E = !1,
            maxVisibleUsers: A = 3,
        } = e,
        h = r.useRef(null),
        S = (0, g.A)(),
        [O, y] = r.useState(!1),
        b = r.useRef(new c.J_(150, () => y(!1))),
        w = (0, d.yK)([N.A, C.default], () => {
            if (l.type === L.lp.STREAM) {
                let e = N.A.getViewerIds(l.id);
                return e.length > 0 ? e.map((e) => C.default.getUser(e)).filter(R.Vq) : U;
            }
            return l.type === L.lp.ACTIVITY && l.participants.length > 0
                ? Array.from(l.participants)
                      .map((e) => C.default.getUser(e.userId))
                      .filter(R.Vq)
                : U;
        }, [l]);
    r.useEffect(() => {
        S && (b.current.cancel(), y(!1));
    }, [S]);
    let G = r.useCallback(() => {
            b.current.cancel(), y(!0);
        }, []),
        x = r.useCallback(() => {
            b.current.delay();
        }, []),
        k = r.useCallback(
            (e, t) => {
                G(),
                    (0, T.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("10570"),
                                n.e("98273"),
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("34552"),
                                n.e("8757"),
                                n.e("85968"),
                                n.e("89673"),
                                n.e("68403"),
                                n.e("52168"),
                                n.e("82073"),
                                n.e("97558"),
                                n.e("91994"),
                                n.e("76665"),
                                n.e("76273"),
                                n.e("24198"),
                                n.e("56753"),
                                n.e("14461"),
                                n.e("95264"),
                                n.e("25486"),
                                n.e("49644"),
                                n.e("42204"),
                                n.e("42191"),
                                n.e("32418"),
                            ]).then(n.bind(n, 668569));
                            return (n) => (0, i.jsx)(e, { ...n, user: t });
                        },
                        { onClose: x },
                    );
            },
            [x, G],
        );
    if (0 === w.length) return null;
    if (_)
        return (0, i.jsx)(P, {
            maxVisibleUsers: A,
            users: w,
            guildId: a,
            channelId: t,
            className: u,
            participantType: l.type,
        });
    let F = o()(w)
        .take(A)
        .map((e) =>
            (0, i.jsx)(
                I.eu,
                { src: e.getAvatarURL(a, 24), "aria-label": e.username, size: f._3.SIZE_24, className: v.lJ },
                e.id,
            ),
        )
        .value();
    return (
        w.length > A &&
            (F[F.length - 1] = (0, i.jsxs)("div", { className: v.ju, children: ["+", w.length - A + 1] }, "overflow")),
        (0, i.jsx)(m.A, {
            section: D.JJy.STREAM_VIEWER_POPOUT,
            children: (0, i.jsx)("div", {
                onMouseEnter: G,
                onMouseLeave: x,
                children: (0, i.jsx)(p.Y, {
                    targetElementRef: h,
                    renderPopout: () =>
                        (0, i.jsx)(M, {
                            participantType: l.type,
                            handleUserContextMenu: k,
                            guildId: a,
                            channelId: t,
                            users: w,
                            disableInteraction: E,
                        }),
                    shouldShow: O && !S,
                    position: "top",
                    children: () => (0, i.jsx)("div", { ref: h, className: s()(v.Mj, u), children: F }),
                }),
            }),
        })
    );
}
