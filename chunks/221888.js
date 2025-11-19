n.d(t, { Z: () => x }), n(415506), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(846519),
    d = n(681715),
    f = n(481060),
    _ = n(239091),
    p = n(410575),
    h = n(350810),
    m = n(751688),
    g = n(199902),
    E = n(594174),
    b = n(823379),
    y = n(5192),
    O = n(354459),
    v = n(981631),
    I = n(388032),
    T = n(390962);
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
function A(e) {
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
let R = 150;
function P(e, t) {
    switch (e) {
        case O.fO.ACTIVITY:
            return I.intl.formatToPlainString(I.t.TCM94S, { numUsers: t });
        case O.fO.STREAM:
            return I.intl.formatToPlainString(I.t.BR7Tno, { numViewers: t });
        default:
            throw Error("Unknown participant type.");
    }
}
function D(e) {
    let { users: t, disableInteraction: n, guildId: i, participantType: a, channelId: s, handleUserContextMenu: l } = e,
        c = P(a, t.length);
    return (0, r.jsx)(f.VqE, {
        "aria-label": c,
        className: T.popoutWrapper,
        children: (0, r.jsxs)(f.Ttm, {
            className: T.scroller,
            children: [
                (0, r.jsx)(f.Heading, {
                    variant: "heading-deprecated-12/semibold",
                    className: T.memberListHeader,
                    children: c,
                }),
                (0, r.jsx)("div", {
                    children: t.map((e) =>
                        (0, r.jsx)(
                            m.Z,
                            {
                                user: e,
                                guildId: null != i ? i : void 0,
                                channelId: s,
                                nick: y.ZP.getNickname(i, s, e),
                                className: o()(T.memberListItem, { [T.popoutDisabled]: n }),
                                textClassName: T.memberListItemText,
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
function w(e) {
    let { users: t, guildId: n, channelId: i, maxVisibleUsers: a = 3, className: s, participantType: l } = e,
        c = P(l, t.length),
        u =
            t.length < a
                ? I.intl.format(I.t["A+bT9O"], {
                      users: t.length,
                      user1: y.ZP.getName(n, i, t[0]),
                      user2: y.ZP.getName(n, i, t[1]),
                      commaSeparatedUsers: t
                          .slice(0, t.length - 1)
                          .map((e) => y.ZP.getName(n, i, e))
                          .join(", "),
                      lastUser: y.ZP.getName(n, i, t[t.length - 1]),
                  })
                : c;
    return (0, r.jsx)(d.u, {
        text: u,
        children: (0, r.jsxs)("div", {
            className: o()(T.viewers, s),
            children: [
                (0, r.jsx)(f.tEF, {
                    size: "xs",
                    color: "currentColor",
                    className: T.viewersIcon,
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
            disableInteraction: y = !1,
            maxVisibleUsers: I = 3,
        } = e,
        S = i.useRef(null),
        C = (0, h.Z)(),
        [P, x] = i.useState(!1),
        M = i.useRef(new u.sW(R, () => x(!1))),
        k = (0, c.Wu)([g.Z, E.default], () => {
            if (s.type === O.fO.STREAM) {
                let e = g.Z.getViewerIds(s.id);
                return e.length > 0 ? e.map((e) => E.default.getUser(e)).filter(b.lm) : L;
            }
            return s.type === O.fO.ACTIVITY && s.participants.length > 0
                ? Array.from(s.participants)
                      .map((e) => E.default.getUser(e.userId))
                      .filter(b.lm)
                : L;
        }, [s]);
    i.useEffect(() => {
        C && (M.current.cancel(), x(!1));
    }, [C]);
    let j = i.useCallback(() => {
            M.current.cancel(), x(!0);
        }, []),
        U = i.useCallback(() => {
            M.current.delay();
        }, []),
        G = i.useCallback(
            (e, t) => {
                j(),
                    (0, _.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("73444")]).then(
                                n.bind(n, 881351),
                            );
                            return (n) => (0, r.jsx)(e, N(A({}, n), { user: t }));
                        },
                        { onClose: U },
                    );
            },
            [U, j],
        );
    if (0 === k.length) return null;
    if (m)
        return (0, r.jsx)(w, {
            maxVisibleUsers: I,
            users: k,
            guildId: a,
            channelId: t,
            className: d,
            participantType: s.type,
        });
    let B = l()(k)
        .take(I)
        .map((e) =>
            (0, r.jsx)(
                f.qEK,
                {
                    src: e.getAvatarURL(a, 24),
                    "aria-label": e.username,
                    size: f.EFr.SIZE_24,
                    className: T.viewer,
                },
                e.id,
            ),
        )
        .value();
    return (
        k.length > I &&
            (B[B.length - 1] = (0, r.jsxs)(
                "div",
                {
                    className: T.overflow,
                    children: ["+", k.length - I + 1],
                },
                "overflow",
            )),
        (0, r.jsx)(p.Z, {
            section: v.jXE.STREAM_VIEWER_POPOUT,
            children: (0, r.jsx)("div", {
                onMouseEnter: j,
                onMouseLeave: U,
                children: (0, r.jsx)(f.yRy, {
                    targetElementRef: S,
                    renderPopout: () =>
                        (0, r.jsx)(D, {
                            participantType: s.type,
                            handleUserContextMenu: G,
                            guildId: a,
                            channelId: t,
                            users: k,
                            disableInteraction: y,
                        }),
                    shouldShow: P && !C,
                    position: "top",
                    children: () =>
                        (0, r.jsx)("div", {
                            ref: S,
                            className: o()(T.viewers, d),
                            children: B,
                        }),
                }),
            }),
        })
    );
}
