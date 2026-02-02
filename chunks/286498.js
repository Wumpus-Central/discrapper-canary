n.d(t, {
    A: () => I,
}),
    n(896048),
    n(747238);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(837381),
    o = n(311907),
    c = n(435371),
    u = n(397927),
    d = n(49229),
    h = n(297413),
    p = n(966327),
    f = n(793574),
    m = n(235986),
    g = n(803664),
    A = n(583311),
    b = n(290863),
    _ = n(584777),
    y = n(994500),
    v = n(427262),
    E = n(652215),
    O = n(985018),
    C = n(318880);

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = (e) => {
    let { user: t, handleTrackAction: n } = e,
        i = (0, o.bG)([y.A], () => y.A.getRelationshipType(t.id)),
        [a, s] = r.useState(!1),
        h = (0, g.A)({
            user: t,
            location: f.A.NEW_GROUP_DM_INVITE_MODAL,
            setLoading: s,
        }),
        p = r.useRef(null),
        m = r.useCallback(async () => {
            n(),
                s(!0),
                await d.A.addRelationship({
                    userId: t.id,
                    context: {
                        location: f.A.NEW_GROUP_DM_INVITE_MODAL,
                    },
                }),
                s(!1);
        }, [n, t.id]);
    if (t.bot) return null;
    switch (i) {
        case E.eA$.FRIEND:
            return null;
        case E.eA$.PENDING_INCOMING:
            return (0, l.jsx)(A.A, {
                targetElementRef: p,
                menuItems: [h],
                children: (e) =>
                    (0, l.jsx)(c.m_, {
                        asContainer: !0,
                        text: O.intl.string(O.t["6QQCQ+"]),
                        ariaHidden: !0,
                        children: (0, l.jsx)(
                            u.K0,
                            S(x({}, e), {
                                buttonRef: p,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": O.intl.string(O.t["6QQCQ+"]),
                                icon: u.lI8,
                                loading: a,
                            }),
                        ),
                    }),
            });
        case E.eA$.PENDING_OUTGOING:
            return (0, l.jsx)(c.m_, {
                asContainer: !0,
                text: O.intl.string(O.t["s/+byI"]),
                ariaHidden: !0,
                children: (0, l.jsx)(u.K0, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": O.intl.string(O.t["s/+byI"]),
                    icon: u.lI8,
                    disabled: !0,
                }),
            });
        default:
            return (0, l.jsx)(c.m_, {
                asContainer: !0,
                text: O.intl.string(O.t.w5uwoI),
                ariaHidden: !0,
                children: (0, l.jsx)(u.K0, {
                    size: "sm",
                    onClick: m,
                    variant: "icon-only",
                    "aria-label": O.intl.string(O.t.w5uwoI),
                    icon: u.Rvf,
                    loading: a,
                }),
            });
    }
};

function I(e) {
    let t,
        {
            user: n,
            section: r,
            row: i,
            hideDiscriminator: d,
            comparator: f,
            selected: g,
            checked: A,
            disabled: y = !1,
            onClick: E,
            onMouseEnter: I,
            onMessageClick: T,
            "aria-setsize": N,
            "aria-posinset": P,
            numSelected: w,
            staffOverride: R,
            handleTrackAction: D,
            showFriendButton: M = !1,
        } = e,
        L = (0, o.bG)([b.A], () => b.A.getStatus(n.id)),
        k = (0, s.rm)(String(n.id));
    return (
        (t = R
            ? (0, l.jsx)(u.P7L, {
                  checked: A,
                  disabled: y,
              })
            : 0 === w
              ? (0, l.jsx)(u.Button, {
                    variant: "secondary",
                    text: O.intl.string(O.t["g33r/P"]),
                    size: "sm",
                    onClick: () => {
                        D(r, i, "message"), null != T && T(n.id);
                    },
                })
              : (0, l.jsx)(c.m_, {
                    asContainer: !0,
                    text: O.intl.string(O.t.z9qAt9),
                    children: (0, l.jsx)(u.P7L, {
                        checked: A,
                        disabled: !0,
                    }),
                })),
        (0, l.jsx)(
            u.DUT,
            S(
                x(
                    {
                        id: "user-row-".concat(i),
                        className: a()(C.Se, {
                            [C.r9]: y,
                        }),
                        onClick:
                            r === _.A.FRIENDS || R
                                ? () => {
                                      D(r, i, "select"), null != E && E(n.id);
                                  }
                                : void 0,
                        onMouseEnter: () => {
                            null != I && I(r, i);
                        },
                    },
                    k,
                ),
                {
                    role: "option",
                    "aria-selected": A,
                    "aria-disabled": y,
                    "aria-setsize": N,
                    "aria-posinset": P,
                    children: (0, l.jsxs)(m.A, {
                        align: m.A.Align.CENTER,
                        className: a()(C.Bc, {
                            [C.oz]: g,
                        }),
                        children: [
                            (0, l.jsx)(p.A, {
                                user: n,
                                status: L,
                                className: C.my,
                            }),
                            (0, l.jsxs)("div", {
                                className: C.YW,
                                children: [
                                    (0, l.jsx)(u.Text, {
                                        tag: "strong",
                                        className: C.$R,
                                        "aria-hidden": !0,
                                        variant: "text-md/medium",
                                        children:
                                            null != f && f === n.tag
                                                ? v.Ay.getName(n)
                                                : null != f && "" !== f
                                                  ? f
                                                  : v.Ay.getName(n),
                                    }),
                                    (0, l.jsx)(u.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: (0, l.jsx)(h.A, {
                                            user: n,
                                            hideDiscriminator: d,
                                            className: C.xK,
                                            usernameClass: C.__invalid_weightMedium,
                                            discriminatorClass: C.__invalid_weightMedium,
                                            forceUsername: !0,
                                        }),
                                    }),
                                ],
                            }),
                            r !== _.A.FRIENDS && M
                                ? (0, l.jsx)(j, {
                                      user: n,
                                      handleTrackAction: () => D(r, i, "friend"),
                                  })
                                : null,
                            r === _.A.FRIENDS
                                ? (0, l.jsx)(u.P7L, {
                                      checked: A,
                                      disabled: y,
                                  })
                                : t,
                        ],
                    }),
                },
            ),
        )
    );
}
