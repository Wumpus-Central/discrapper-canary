n.d(t, { Z: () => L }), n(415506), n(388685);
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
    p = n(239091),
    _ = n(410575),
    m = n(350810),
    h = n(751688),
    g = n(199902),
    E = n(594174),
    b = n(823379),
    y = n(5192),
    O = n(354459),
    v = n(981631),
    S = n(388032),
    I = n(299348);
function T(e, t, n) {
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
function C(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = 150;
function R(e, t) {
    switch (e) {
        case O.fO.ACTIVITY:
            return S.intl.formatToPlainString(S.t.TCM94S, { numUsers: t });
        case O.fO.STREAM:
            return S.intl.formatToPlainString(S.t.BR7Tno, { numViewers: t });
        default:
            throw Error("Unknown participant type.");
    }
}
function w(e) {
    let { users: t, disableInteraction: n, guildId: i, participantType: a, channelId: s, handleUserContextMenu: l } = e,
        c = R(a, t.length);
    return (0, r.jsx)(f.VqE, {
        "aria-label": c,
        className: I.popoutWrapper,
        children: (0, r.jsxs)(f.Ttm, {
            className: I.scroller,
            children: [
                (0, r.jsx)(f.Heading, {
                    variant: "heading-deprecated-12/semibold",
                    className: I.memberListHeader,
                    children: c,
                }),
                (0, r.jsx)("div", {
                    children: t.map((e) =>
                        (0, r.jsx)(
                            h.Z,
                            {
                                user: e,
                                guildId: null != i ? i : void 0,
                                channelId: s,
                                nick: y.ZP.getNickname(i, s, e),
                                className: o()(I.memberListItem, { [I.popoutDisabled]: n }),
                                textClassName: I.memberListItemText,
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
                ? S.intl.format(S.t["A+bT9O"], {
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
            className: o()(I.viewers, s),
            children: [
                (0, r.jsx)(f.tEF, {
                    size: "xs",
                    color: "currentColor",
                    className: I.viewersIcon,
                }),
                (0, r.jsx)("span", {
                    "aria-hidden": "true",
                    children: t.length,
                }),
            ],
        }),
    });
}
let x = [];
function L(e) {
    let {
            channelId: t,
            guildId: a,
            participant: s,
            className: d,
            compact: h = !1,
            disableInteraction: y = !1,
            maxVisibleUsers: S = 3,
        } = e,
        T = i.useRef(null),
        A = (0, m.Z)(),
        [R, L] = i.useState(!1),
        j = i.useRef(new u.sW(P, () => L(!1))),
        M = (0, c.Wu)([g.Z, E.default], () => {
            if (s.type === O.fO.STREAM) {
                let e = g.Z.getViewerIds(s.id);
                return e.length > 0 ? e.map((e) => E.default.getUser(e)).filter(b.lm) : x;
            }
            return s.type === O.fO.ACTIVITY && s.participants.length > 0
                ? Array.from(s.participants)
                      .map((e) => E.default.getUser(e.userId))
                      .filter(b.lm)
                : x;
        }, [s]);
    i.useEffect(() => {
        A && (j.current.cancel(), L(!1));
    }, [A]);
    let k = i.useCallback(() => {
            j.current.cancel(), L(!0);
        }, []),
        U = i.useCallback(() => {
            j.current.delay();
        }, []),
        G = i.useCallback(
            (e, t) => {
                k(),
                    (0, p.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("26465")]).then(
                                n.bind(n, 881351),
                            );
                            return (n) => (0, r.jsx)(e, N(C({}, n), { user: t }));
                        },
                        { onClose: U },
                    );
            },
            [U, k],
        );
    if (0 === M.length) return null;
    if (h)
        return (0, r.jsx)(D, {
            maxVisibleUsers: S,
            users: M,
            guildId: a,
            channelId: t,
            className: d,
            participantType: s.type,
        });
    let Z = l()(M)
        .take(S)
        .map((e) =>
            (0, r.jsx)(
                f.qEK,
                {
                    src: e.getAvatarURL(a, 24),
                    "aria-label": e.username,
                    size: f.EFr.SIZE_24,
                    className: I.viewer,
                },
                e.id,
            ),
        )
        .value();
    return (
        M.length > S &&
            (Z[Z.length - 1] = (0, r.jsxs)(
                "div",
                {
                    className: I.overflow,
                    children: ["+", M.length - S + 1],
                },
                "overflow",
            )),
        (0, r.jsx)(_.Z, {
            section: v.jXE.STREAM_VIEWER_POPOUT,
            children: (0, r.jsx)("div", {
                onMouseEnter: k,
                onMouseLeave: U,
                children: (0, r.jsx)(f.yRy, {
                    targetElementRef: T,
                    renderPopout: () =>
                        (0, r.jsx)(w, {
                            participantType: s.type,
                            handleUserContextMenu: G,
                            guildId: a,
                            channelId: t,
                            users: M,
                            disableInteraction: y,
                        }),
                    shouldShow: R && !A,
                    position: "top",
                    children: () =>
                        (0, r.jsx)("div", {
                            ref: T,
                            className: o()(I.viewers, d),
                            children: Z,
                        }),
                }),
            }),
        })
    );
}
