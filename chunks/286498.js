n.d(t, {
    A: () => I,
}),
    n(896048),
    n(747238);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(837381),
    o = n(311907),
    c = n(435371),
    u = n(397927),
    d = n(49229),
    p = n(297413),
    h = n(966327),
    f = n(793574),
    g = n(235986),
    m = n(803664),
    b = n(583311),
    A = n(290863),
    y = n(584777),
    _ = n(994500),
    O = n(427262),
    j = n(652215),
    v = n(985018),
    x = n(318880);

function E(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (e) => {
    let { user: t } = e,
        n = (0, o.bG)([_.A], () => _.A.getRelationshipType(t.id)),
        [i, s] = l.useState(!1),
        a = (0, m.A)({
            user: t,
            location: f.A.NEW_GROUP_DM_INVITE_MODAL,
            setLoading: s,
        }),
        p = l.useRef(null),
        h = l.useCallback(async () => {
            s(!0),
                await d.A.addRelationship({
                    userId: t.id,
                    context: {
                        location: f.A.NEW_GROUP_DM_INVITE_MODAL,
                    },
                }),
                s(!1);
        }, [t.id]);
    if (t.bot) return null;
    switch (n) {
        case j.eA$.FRIEND:
            return null;
        case j.eA$.PENDING_INCOMING:
            return (0, r.jsx)(b.A, {
                targetElementRef: p,
                menuItems: [a],
                children: (e) =>
                    (0, r.jsx)(c.m_, {
                        asContainer: !0,
                        text: v.intl.string(v.t["6QQCQ+"]),
                        ariaHidden: !0,
                        children: (0, r.jsx)(
                            u.K0,
                            C(E({}, e), {
                                buttonRef: p,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": v.intl.string(v.t["6QQCQ+"]),
                                icon: u.lI8,
                                loading: i,
                            }),
                        ),
                    }),
            });
        case j.eA$.PENDING_OUTGOING:
            return (0, r.jsx)(c.m_, {
                asContainer: !0,
                text: v.intl.string(v.t["s/+byI"]),
                ariaHidden: !0,
                children: (0, r.jsx)(u.K0, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": v.intl.string(v.t["s/+byI"]),
                    icon: u.lI8,
                    disabled: !0,
                }),
            });
        default:
            return (0, r.jsx)(c.m_, {
                asContainer: !0,
                text: v.intl.string(v.t.w5uwoI),
                ariaHidden: !0,
                children: (0, r.jsx)(u.K0, {
                    size: "sm",
                    onClick: h,
                    variant: "icon-only",
                    "aria-label": v.intl.string(v.t.w5uwoI),
                    icon: u.Rvf,
                    loading: i,
                }),
            });
    }
};

function I(e) {
    let t,
        {
            user: n,
            section: l,
            row: i,
            hideDiscriminator: d,
            comparator: f,
            selected: m,
            checked: b,
            disabled: _ = !1,
            onClick: j,
            onMouseEnter: I,
            onMessageClick: N,
            "aria-setsize": T,
            "aria-posinset": P,
            numSelected: w,
            staffOverride: R,
            showFriendButton: D = !1,
        } = e,
        M = (0, o.bG)([A.A], () => A.A.getStatus(n.id)),
        L = (0, a.rm)(String(n.id));
    return (
        (t = R
            ? (0, r.jsx)(u.P7L, {
                  checked: b,
                  disabled: _,
              })
            : 0 === w
              ? (0, r.jsx)(u.Button, {
                    variant: "secondary",
                    text: v.intl.string(v.t["g33r/P"]),
                    size: "sm",
                    onClick: () => {
                        null != N && N(n.id);
                    },
                })
              : (0, r.jsx)(c.m_, {
                    asContainer: !0,
                    text: v.intl.string(v.t.z9qAt9),
                    children: (0, r.jsx)(u.P7L, {
                        checked: b,
                        disabled: !0,
                    }),
                })),
        (0, r.jsx)(
            u.DUT,
            C(
                E(
                    {
                        id: "user-row-".concat(i),
                        className: s()(x.Se, {
                            [x.r9]: _,
                        }),
                        onClick:
                            l === y.A.FRIENDS || R
                                ? () => {
                                      null != j && j(n.id);
                                  }
                                : void 0,
                        onMouseEnter: () => {
                            null != I && I(l, i);
                        },
                    },
                    L,
                ),
                {
                    role: "option",
                    "aria-selected": b,
                    "aria-disabled": _,
                    "aria-setsize": T,
                    "aria-posinset": P,
                    children: (0, r.jsxs)(g.A, {
                        align: g.A.Align.CENTER,
                        className: s()(x.Bc, {
                            [x.oz]: m,
                        }),
                        children: [
                            (0, r.jsx)(h.A, {
                                user: n,
                                status: M,
                                className: x.my,
                            }),
                            (0, r.jsxs)("div", {
                                className: x.YW,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        tag: "strong",
                                        className: x.$R,
                                        "aria-hidden": !0,
                                        variant: "text-md/medium",
                                        children:
                                            null != f && f === n.tag
                                                ? O.Ay.getName(n)
                                                : null != f && "" !== f
                                                  ? f
                                                  : O.Ay.getName(n),
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: (0, r.jsx)(p.A, {
                                            user: n,
                                            hideDiscriminator: d,
                                            className: x.xK,
                                            usernameClass: x.__invalid_weightMedium,
                                            discriminatorClass: x.__invalid_weightMedium,
                                            forceUsername: !0,
                                        }),
                                    }),
                                ],
                            }),
                            l !== y.A.FRIENDS && D
                                ? (0, r.jsx)(S, {
                                      user: n,
                                  })
                                : null,
                            l === y.A.FRIENDS
                                ? (0, r.jsx)(u.P7L, {
                                      checked: b,
                                      disabled: _,
                                  })
                                : t,
                        ],
                    }),
                },
            ),
        )
    );
}
