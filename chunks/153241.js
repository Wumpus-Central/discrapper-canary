r.d(t, { default: () => C }), r(388685), r(539854);
var n = r(54381),
    s = r(473749),
    i = r(793030),
    a = r(442837),
    l = r(481060),
    o = r(480466),
    c = r(313789),
    u = r(518596),
    d = r(626135),
    f = r(51144),
    b = r(904399),
    p = r(80721),
    m = r(643281),
    g = r(172782),
    h = r(154122),
    v = r(282793),
    y = r(981631),
    O = r(353149),
    S = r(388032),
    j = r(992909),
    x = r(135471);
function _(e) {
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
function P(e, t) {
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
function I(e, t) {
    if (null == e) return {};
    var r,
        n,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                s = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++)
            (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
    }
    return s;
}
let E = (e) => {
        var { onInvite: t, onClose: r, subscriptionId: c } = e,
            u = I(e, ["onInvite", "onClose", "subscriptionId"]);
        let [p, h] = s.useState([]),
            [x, E] = s.useState(""),
            N = (0, o.Z)(x, 400),
            C = (0, a.e7)([m.Z], () => m.Z.getNumAvailableInvites());
        s.useEffect(() => {
            d.default.track(y.rMx.PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED);
        }, []);
        let {
                eligibleUsers: w,
                getNextRows: M,
                hasError: R,
                isFetching: k,
            } = (0, g.Z)({
                subscriptionId: c,
                searchQuery: N,
            }),
            [U, T] = s.useState(!1),
            Z = s.useCallback(
                (e) => {
                    h((t) => t.filter((t) => !e.has(t.id)));
                },
                [h],
            ),
            D = s.useMemo(
                () =>
                    p.map((e) => ({
                        id: e.id,
                        label: f.ZP.getName(e),
                    })),
                [p],
            );
        return R
            ? (0, n.jsx)(
                  i.Modal,
                  _(
                      {
                          size: "sm",
                          title: S.intl.string(O.default["54lM5y"]),
                          subtitle: S.intl.string(O.default.zrtwpV),
                          onClose: r,
                          actions: [],
                      },
                      u,
                  ),
              )
            : 0 !== w.length || k || 0 !== N.length
              ? (0, n.jsx)(
                    i.Modal,
                    P(
                        _(
                            {
                                size: "md",
                                title: S.intl.string(O.default["Um/7BM"]),
                                subtitle: S.intl.format(O.default.qSWXaf, {
                                    totalSeats: v.v$,
                                    premiumGroupProductName: (0, v.sO)(),
                                    helpCenterLink: v.j3,
                                }),
                                onClose: r,
                                input: (0, n.jsx)("div", {
                                    className: j.searchbar,
                                    children: (0, n.jsx)(l.oil, {
                                        value: x,
                                        onChange: E,
                                        placeholder: 0 === p.length ? S.intl.string(O.default.wRS8vo) : "",
                                        leading:
                                            D.length > 0
                                                ? {
                                                      type: "tags",
                                                      label: S.intl.string(O.default["Um/7BM"]),
                                                      items: D,
                                                      onRemove: Z,
                                                  }
                                                : void 0,
                                    }),
                                }),
                                actions: [],
                                actionBarInput: (() => {
                                    let e = N.length > 0 && 0 === w.length;
                                    return (0, n.jsx)(l.Button, {
                                        variant: "primary",
                                        disabled: (0 === p.length && !e) || U,
                                        text: S.intl.string(O.default["5fZHp3"]),
                                        size: "md",
                                        fullWidth: !0,
                                        onClick: async () => {
                                            if (e) return void r();
                                            d.default.track(y.rMx.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
                                                invited_user_ids: p.map((e) => e.id),
                                            }),
                                                T(!0),
                                                await t(p),
                                                T(!1);
                                        },
                                    });
                                })(),
                            },
                            u,
                        ),
                        {
                            children: (0, n.jsx)(b.Z, {
                                users: w,
                                isUserSelected: (e) => p.some((t) => t.id === e.id),
                                onSelectionChange: (e, t) => {
                                    h((r) => (t ? [...r, e] : r.filter((t) => t.id !== e.id)));
                                },
                                isUserDisabled: (e) => p.length >= C && !p.some((t) => t.id === e.id),
                                isFetching: k,
                                onFetchMore: M,
                                searchQuery: N,
                                emptySearchContent: {
                                    header: S.intl.string(O.default.gaamNe),
                                    body: S.intl.string(O.default.nQcM39),
                                },
                                className: j.list,
                            }),
                        },
                    ),
                )
              : (0, n.jsx)(
                    i.Modal,
                    _(
                        {
                            size: "sm",
                            title: S.intl.string(O.default.ONaJLH),
                            subtitle: S.intl.format(O.default["0LHbPc"], { helpCenterLink: v.j3 }),
                            onClose: r,
                            actions: [],
                        },
                        u,
                    ),
                );
    },
    N = (e) => {
        var { onClose: t, inviteUsersResult: r } = e,
            s = I(e, ["onClose", "inviteUsersResult"]);
        return (0, n.jsx)(
            i.ExpressiveModal,
            P(
                _(
                    {
                        graphic: {
                            type: "image",
                            src: x.Z,
                        },
                        gradientColor: "nitro-pink",
                        title: S.intl.formatToPlainString(O.default.MIiPur, {
                            premiumGroupProductName: (0, v.sO)(),
                            sentCount: r.filter((e) => e.isSuccess).length,
                        }),
                        subtitle: S.intl.format(O.default.olkQkj, {
                            onClick: () => {
                                t(), (0, u.openUserSettings)(c.n.SUBSCRIPTIONS_PANEL, { section: y.oAB.SUBSCRIPTIONS });
                            },
                        }),
                        onClose: t,
                    },
                    s,
                ),
                {
                    children: (0, n.jsx)("div", {
                        className: j.inviteUsersResultContainer,
                        children: r.map((e) =>
                            (0, n.jsx)(
                                h.J,
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
        var { subscription: t } = e,
            r = I(e, ["subscription"]);
        let [i, a] = s.useState([]),
            [l, o] = s.useState(1),
            c = async (e) => {
                let r = new Map(),
                    n = [];
                for (let t of e) r.set(t.id, t), n.push(t.id);
                let s = await (0, p.cD)(t.id, n);
                if (null == s) {
                    d.default.track(y.rMx.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                        successful_user_ids: [],
                        failed_user_ids: n,
                    }),
                        a(
                            e.map((e) => ({
                                user: e,
                                isSuccess: !1,
                            })),
                        ),
                        o(2);
                    return;
                }
                let { invitedUsers: i, ineligibleUsers: l } = s;
                d.default.track(y.rMx.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                    successful_user_ids: i,
                    failed_user_ids: l,
                }),
                    a([
                        ...i.map((e) => ({
                            user: r.get(e),
                            isSuccess: !0,
                        })),
                        ...l.map((e) => ({
                            user: r.get(e),
                            isSuccess: !1,
                        })),
                    ]),
                    o(2);
            };
        return 1 === l
            ? (0, n.jsx)(
                  E,
                  P(_({}, r), {
                      onInvite: c,
                      subscriptionId: t.id,
                  }),
              )
            : 2 === l
              ? (0, n.jsx)(N, P(_({}, r), { inviteUsersResult: i }))
              : void 0;
    };
