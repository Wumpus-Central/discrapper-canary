n.d(t, {
    A: () => x,
}),
    n(65821),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(311907),
    u = n(451988),
    d = n(435371),
    f = n(397927),
    p = n(442433),
    _ = n(820284),
    h = n(942857),
    m = n(538451),
    g = n(616356),
    E = n(287809),
    y = n(403362),
    b = n(562153),
    O = n(806931),
    v = n(652215),
    A = n(985018),
    I = n(405434);

function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}

function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = 150;

function R(e, t) {
    switch (e) {
        case O.lp.ACTIVITY:
            return A.intl.formatToPlainString(A.t.TCM94S, {
                numUsers: t,
            });
        case O.lp.STREAM:
            return A.intl.formatToPlainString(A.t.BR7Tno, {
                numViewers: t,
            });
        default:
            throw Error("Unknown participant type.");
    }
}

function P(e) {
    let { users: t, disableInteraction: n, guildId: i, participantType: a, channelId: s, handleUserContextMenu: l } = e,
        c = R(a, t.length);
    return (0, r.jsx)(f.lGe, {
        "aria-label": c,
        className: I.XM,
        children: (0, r.jsxs)(f.HOs, {
            className: I.XG,
            children: [
                (0, r.jsx)(f.Heading, {
                    variant: "heading-deprecated-12/semibold",
                    className: I.o,
                    children: c,
                }),
                (0, r.jsx)("div", {
                    children: t.map((e) =>
                        (0, r.jsx)(
                            m.A,
                            {
                                user: e,
                                guildId: null != i ? i : void 0,
                                channelId: s,
                                nick: b.Ay.getNickname(i, s, e),
                                className: o()(I.kp, {
                                    [I.YR]: n,
                                }),
                                textClassName: I.vc,
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

function D(e) {
    let { users: t, guildId: n, channelId: i, maxVisibleUsers: a = 3, className: s, participantType: l } = e,
        c = R(l, t.length),
        u =
            t.length < a
                ? A.intl.format(A.t["A+bT9O"], {
                      users: t.length,
                      user1: b.Ay.getName(n, i, t[0]),
                      user2: b.Ay.getName(n, i, t[1]),
                      commaSeparatedUsers: t
                          .slice(0, t.length - 1)
                          .map((e) => b.Ay.getName(n, i, e))
                          .join(", "),
                      lastUser: b.Ay.getName(n, i, t[t.length - 1]),
                  })
                : c;
    return (0, r.jsx)(d.m_, {
        text: u,
        children: (0, r.jsxs)("div", {
            className: o()(I.Mj, s),
            children: [
                (0, r.jsx)(f.bMW, {
                    size: "xs",
                    color: "currentColor",
                    className: I.N0,
                }),
                (0, r.jsx)("span", {
                    "aria-hidden": "true",
                    children: t.length,
                }),
            ],
        }),
    });
}
let L = [];

function x(e) {
    let {
            channelId: t,
            guildId: a,
            participant: s,
            className: d,
            compact: m = !1,
            disableInteraction: b = !1,
            maxVisibleUsers: A = 3,
        } = e,
        S = i.useRef(null),
        C = (0, h.A)(),
        [R, x] = i.useState(!1),
        M = i.useRef(new u.J_(w, () => x(!1))),
        j = (0, c.yK)([g.A, E.default], () => {
            if (s.type === O.lp.STREAM) {
                let e = g.A.getViewerIds(s.id);
                return e.length > 0 ? e.map((e) => E.default.getUser(e)).filter(y.Vq) : L;
            }
            return s.type === O.lp.ACTIVITY && s.participants.length > 0
                ? Array.from(s.participants)
                      .map((e) => E.default.getUser(e.userId))
                      .filter(y.Vq)
                : L;
        }, [s]);
    i.useEffect(() => {
        C && (M.current.cancel(), x(!1));
    }, [C]);
    let k = i.useCallback(() => {
            M.current.cancel(), x(!0);
        }, []),
        U = i.useCallback(() => {
            M.current.delay();
        }, []),
        G = i.useCallback(
            (e, t) => {
                k(),
                    (0, p.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("3795"),
                                n.e("32418"),
                                n.e("16938"),
                            ]).then(n.bind(n, 668569));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    N(T({}, n), {
                                        user: t,
                                    }),
                                );
                        },
                        {
                            onClose: U,
                        },
                    );
            },
            [U, k],
        );
    if (0 === j.length) return null;
    if (m)
        return (0, r.jsx)(D, {
            maxVisibleUsers: A,
            users: j,
            guildId: a,
            channelId: t,
            className: d,
            participantType: s.type,
        });
    let F = l()(j)
        .take(A)
        .map((e) =>
            (0, r.jsx)(
                f.euF,
                {
                    src: e.getAvatarURL(a, 24),
                    "aria-label": e.username,
                    size: f._3J.SIZE_24,
                    className: I.lJ,
                },
                e.id,
            ),
        )
        .value();
    return (
        j.length > A &&
            (F[F.length - 1] = (0, r.jsxs)(
                "div",
                {
                    className: I.ju,
                    children: ["+", j.length - A + 1],
                },
                "overflow",
            )),
        (0, r.jsx)(_.A, {
            section: v.JJy.STREAM_VIEWER_POPOUT,
            children: (0, r.jsx)("div", {
                onMouseEnter: k,
                onMouseLeave: U,
                children: (0, r.jsx)(f.YNO, {
                    targetElementRef: S,
                    renderPopout: () =>
                        (0, r.jsx)(P, {
                            participantType: s.type,
                            handleUserContextMenu: G,
                            guildId: a,
                            channelId: t,
                            users: j,
                            disableInteraction: b,
                        }),
                    shouldShow: R && !C,
                    position: "top",
                    children: () =>
                        (0, r.jsx)("div", {
                            ref: S,
                            className: o()(I.Mj, d),
                            children: F,
                        }),
                }),
            }),
        })
    );
}
