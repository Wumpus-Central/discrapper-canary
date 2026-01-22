r.d(t, {
    default: () => C,
}),
    r(896048),
    r(321073);
var n = r(627968),
    s = r(64700),
    i = r(158954),
    l = r(311907),
    a = r(397927),
    c = r(718213),
    o = r(780964),
    u = r(840065),
    d = r(954571),
    f = r(427262),
    p = r(761546),
    b = r(677185),
    g = r(233317),
    m = r(783437),
    y = r(298492),
    h = r(88001),
    O = r(652215),
    S = r(519412),
    j = r(985018),
    _ = r(300296),
    v = r(788396);

function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}

function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}

function x(e, t) {
    if (null == e) return {};
    var r,
        n,
        s,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (s = 0, r = Reflect.ownKeys(e); s < r.length; s++)
            (n = r[s]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                s = {},
                i = Object.getOwnPropertyNames(e);
            for (n = 0; n < i.length; n++)
                (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
            return s;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
            (n = r[s]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let E = (e) => {
        let t,
            { onInvite: r, onClose: o, subscriptionId: u } = e,
            b = x(e, ["onInvite", "onClose", "subscriptionId"]),
            [y, v] = s.useState([]),
            [E, w] = s.useState(""),
            C = (0, c.A)(E, 400),
            N = (0, l.bG)([g.A], () => g.A.getNumAvailableInvites());
        s.useEffect(() => {
            d.default.track(O.HAw.PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED);
        }, []);
        let {
                eligibleUsers: k,
                getNextRows: M,
                hasError: R,
                isFetching: A,
            } = (0, m.A)({
                subscriptionId: u,
                searchQuery: C,
            }),
            [U, D] = s.useState(!1),
            T = s.useCallback(
                (e) => {
                    v((t) => t.filter((t) => !e.has(t.id)));
                },
                [v],
            ),
            z = s.useMemo(
                () =>
                    y.map((e) => ({
                        id: e.id,
                        label: f.Ay.getName(e),
                    })),
                [y],
            );
        return R
            ? (0, n.jsx)(
                  i.Modal,
                  P(
                      {
                          size: "sm",
                          title: j.intl.string(S.default["54lM5y"]),
                          subtitle: j.intl.string(S.default.zrtwpV),
                          onClose: o,
                          actions: [],
                      },
                      b,
                  ),
              )
            : 0 !== k.length || A || 0 !== C.length
              ? (0, n.jsx)(
                    i.Modal,
                    I(
                        P(
                            {
                                size: "md",
                                title: j.intl.string(S.default["Um/7BM"]),
                                subtitle: j.intl.format(S.default.qSWXaf, {
                                    totalSeats: h.LM,
                                    premiumGroupProductName: (0, h.DP)(),
                                    helpCenterLink: h.TE,
                                }),
                                onClose: o,
                                input: (0, n.jsx)("div", {
                                    className: _.c,
                                    children: (0, n.jsx)(a.ksK, {
                                        value: E,
                                        onChange: w,
                                        placeholder: 0 === y.length ? j.intl.string(S.default.wRS8vo) : "",
                                        leading:
                                            z.length > 0
                                                ? {
                                                      type: "tags",
                                                      label: j.intl.string(S.default["Um/7BM"]),
                                                      items: z,
                                                      onRemove: T,
                                                  }
                                                : void 0,
                                    }),
                                }),
                                actions: [],
                                actionBarInput:
                                    ((t = C.length > 0 && 0 === k.length),
                                    (0, n.jsx)(a.Button, {
                                        variant: "primary",
                                        disabled: (0 === y.length && !t) || U,
                                        text: j.intl.string(S.default["5fZHp3"]),
                                        size: "md",
                                        fullWidth: !0,
                                        onClick: async () => {
                                            t
                                                ? o()
                                                : (d.default.track(O.HAw.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
                                                      invited_user_ids: y.map((e) => e.id),
                                                  }),
                                                  D(!0),
                                                  await r(y),
                                                  D(!1));
                                        },
                                    })),
                            },
                            b,
                        ),
                        {
                            children: (0, n.jsx)(p.A, {
                                users: k,
                                isUserSelected: (e) => y.some((t) => t.id === e.id),
                                onSelectionChange: (e, t) => {
                                    v((r) => (t ? [...r, e] : r.filter((t) => t.id !== e.id)));
                                },
                                isUserDisabled: (e) => y.length >= N && !y.some((t) => t.id === e.id),
                                isFetching: A,
                                onFetchMore: M,
                                searchQuery: C,
                                emptySearchContent: {
                                    header: j.intl.string(S.default.gaamNe),
                                    body: j.intl.string(S.default.nQcM39),
                                },
                                className: _.p_,
                            }),
                        },
                    ),
                )
              : (0, n.jsx)(
                    i.Modal,
                    P(
                        {
                            size: "sm",
                            title: j.intl.string(S.default.ONaJLH),
                            subtitle: j.intl.format(S.default["0LHbPc"], {
                                helpCenterLink: h.TE,
                            }),
                            onClose: o,
                            actions: [],
                        },
                        b,
                    ),
                );
    },
    w = (e) => {
        let { onClose: t, inviteUsersResult: r } = e,
            s = x(e, ["onClose", "inviteUsersResult"]);
        return (0, n.jsx)(
            i.ExpressiveModal,
            I(
                P(
                    {
                        graphic: {
                            type: "image",
                            src: v.A,
                        },
                        gradientColor: "nitro-pink",
                        title: j.intl.formatToPlainString(S.default.MIiPur, {
                            premiumGroupProductName: (0, h.DP)(),
                            sentCount: r.filter((e) => e.isSuccess).length,
                        }),
                        subtitle: j.intl.format(S.default.olkQkj, {
                            onClick: () => {
                                t(),
                                    (0, u.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL, {
                                        section: O.nc_.SUBSCRIPTIONS,
                                    });
                            },
                        }),
                        onClose: t,
                    },
                    s,
                ),
                {
                    children: (0, n.jsx)("div", {
                        className: _.yk,
                        children: r.map((e) =>
                            (0, n.jsx)(
                                y.q,
                                {
                                    recipient: e.user,
                                    isSuccess: e.isSuccess,
                                    onClose: t,
                                },
                                e.user.id,
                            ),
                        ),
                    }),
                },
            ),
        );
    },
    C = (e) => {
        let { subscription: t } = e,
            r = x(e, ["subscription"]),
            [i, l] = s.useState([]),
            [a, c] = s.useState(1),
            o = async (e) => {
                let r = new Map(),
                    n = [];
                for (let t of e) r.set(t.id, t), n.push(t.id);
                let s = await (0, b.n2)(t.id, n);
                if (null == s) {
                    d.default.track(O.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                        successful_user_ids: [],
                        failed_user_ids: n,
                    }),
                        l(
                            e.map((e) => ({
                                user: e,
                                isSuccess: !1,
                            })),
                        ),
                        c(2);
                    return;
                }
                let { invitedUsers: i, ineligibleUsers: a } = s;
                d.default.track(O.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                    successful_user_ids: i,
                    failed_user_ids: a,
                }),
                    l([
                        ...i.map((e) => ({
                            user: r.get(e),
                            isSuccess: !0,
                        })),
                        ...a.map((e) => ({
                            user: r.get(e),
                            isSuccess: !1,
                        })),
                    ]),
                    c(2);
            };
        return 1 === a
            ? (0, n.jsx)(
                  E,
                  I(P({}, r), {
                      onInvite: o,
                      subscriptionId: t.id,
                  }),
              )
            : 2 === a
              ? (0, n.jsx)(
                    w,
                    I(P({}, r), {
                        inviteUsersResult: i,
                    }),
                )
              : void 0;
    };
