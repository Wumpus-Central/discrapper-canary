n.d(t, { default: () => w }), n(388685), n(539854);
var r = n(54381),
    l = n(473749),
    a = n(793030),
    s = n(442837),
    i = n(481060),
    o = n(794433),
    u = n(480466),
    c = n(313789),
    p = n(518596),
    h = n(51144),
    d = n(904399),
    f = n(80721),
    g = n(643281),
    b = n(172782),
    m = n(154122),
    v = n(282793),
    y = n(981631),
    O = n(96011),
    j = n(388032),
    P = n(781565),
    x = n(383092);
function S(e) {
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
function E(e, t) {
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
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let C = (e) => {
        var { onInvite: t, onClose: n, subscriptionId: c } = e,
            p = R(e, ["onInvite", "onClose", "subscriptionId"]);
        let [f, m] = l.useState([]),
            [y, x] = l.useState(""),
            C = (0, u.Z)(y, 400),
            _ = (0, s.e7)([g.Z], () => g.Z.getNumAvailableInvites()),
            {
                eligibleUsers: w,
                getNextRows: N,
                hasError: D,
                isFetching: k,
            } = (0, b.Z)({
                subscriptionId: c,
                searchQuery: C,
            }),
            [A, T] = l.useState(!1);
        return D
            ? (0, r.jsx)(
                  a.Modal,
                  S(
                      {
                          size: "sm",
                          title: j.intl.string(O.default["54lM5y"]),
                          subtitle: j.intl.string(O.default.zrtwpV),
                          onClose: n,
                          actions: [],
                      },
                      p,
                  ),
              )
            : 0 !== w.length || k || 0 !== C.length
              ? (0, r.jsx)(
                    a.Modal,
                    E(
                        S(
                            {
                                size: "md",
                                title: j.intl.string(O.default["Um/7BM"]),
                                subtitle: j.intl.format(O.default.qSWXaf, {
                                    totalSeats: v.v$,
                                    premiumGroupProductName: (0, v.sO)(),
                                    helpCenterLink: v.j3,
                                }),
                                onClose: n,
                                input: (0, r.jsx)(o.Z, {
                                    className: P.searchbar,
                                    size: o.Z.Sizes.MEDIUM,
                                    tags: f.map((e) => h.ZP.getName(e)),
                                    placeholder: 0 === f.length ? j.intl.string(O.default.wRS8vo) : "",
                                    query: y,
                                    onRemoveTag: (e) => {
                                        m((t) => t.filter((t, n) => n !== e));
                                    },
                                    onQueryChange: x,
                                    onClear: () => x(""),
                                }),
                                actions: [],
                                actionBarInput: (() => {
                                    let e = C.length > 0 && 0 === w.length;
                                    return (0, r.jsx)(i.Button, {
                                        variant: "primary",
                                        disabled: (0 === f.length && !e) || A,
                                        text: j.intl.string(O.default["5fZHp3"]),
                                        size: "md",
                                        fullWidth: !0,
                                        onClick: async () => {
                                            if (e) return void n();
                                            T(!0), await t(f), T(!1);
                                        },
                                    });
                                })(),
                            },
                            p,
                        ),
                        {
                            children: (0, r.jsx)(d.Z, {
                                users: w,
                                isUserSelected: (e) => f.some((t) => t.id === e.id),
                                onSelectionChange: (e, t) => {
                                    m((n) => (t ? [...n, e] : n.filter((t) => t.id !== e.id)));
                                },
                                isUserDisabled: () => f.length >= _,
                                isFetching: k,
                                onFetchMore: N,
                                searchQuery: C,
                                emptySearchContent: {
                                    header: j.intl.string(O.default.gaamNe),
                                    body: j.intl.string(O.default.nQcM39),
                                },
                                className: P.list,
                            }),
                        },
                    ),
                )
              : (0, r.jsx)(
                    a.Modal,
                    S(
                        {
                            size: "sm",
                            title: j.intl.string(O.default.ONaJLH),
                            subtitle: j.intl.format(O.default["0LHbPc"], { helpCenterLink: v.j3 }),
                            onClose: n,
                            actions: [],
                        },
                        p,
                    ),
                );
    },
    _ = (e) => {
        var { onClose: t, inviteUsersResult: n } = e,
            l = R(e, ["onClose", "inviteUsersResult"]);
        return (0, r.jsx)(
            a.ExpressiveModal,
            E(
                S(
                    {
                        graphic: {
                            type: "image",
                            src: x.Z,
                        },
                        gradientColor: "nitro-pink",
                        title: j.intl.formatToPlainString(O.default["0yblpx"], {
                            premiumGroupProductName: (0, v.sO)(),
                        }),
                        subtitle: j.intl.format(O.default.olkQkj, {
                            onClick: () => {
                                t(), (0, p.openUserSettings)(c.n.SUBSCRIPTIONS_PANEL, { section: y.oAB.SUBSCRIPTIONS });
                            },
                        }),
                        onClose: t,
                    },
                    l,
                ),
                {
                    children: n.map((e) =>
                        (0, r.jsx)(
                            m.J,
                            {
                                recipient: e.user,
                                isSuccess: e.isSuccess,
                                onClose: t,
                            },
                            e.user.id,
                        ),
                    ),
                },
            ),
        );
    },
    w = (e) => {
        var { subscription: t } = e,
            n = R(e, ["subscription"]);
        let [a, s] = l.useState([]),
            [i, o] = l.useState(1),
            u = async (e) => {
                let n = new Map(),
                    r = [];
                for (let t of e) n.set(t.id, t), r.push(t.id);
                let l = await (0, f.cD)(t.id, r);
                if (null == l) {
                    s(
                        e.map((e) => ({
                            user: e,
                            isSuccess: !1,
                        })),
                    ),
                        o(2);
                    return;
                }
                let { invitedUsers: a, ineligibleUsers: i } = l;
                s([
                    ...a.map((e) => ({
                        user: n.get(e),
                        isSuccess: !0,
                    })),
                    ...i.map((e) => ({
                        user: n.get(e),
                        isSuccess: !1,
                    })),
                ]),
                    o(2);
            };
        return 1 === i
            ? (0, r.jsx)(
                  C,
                  E(S({}, n), {
                      onInvite: u,
                      subscriptionId: t.id,
                  }),
              )
            : 2 === i
              ? (0, r.jsx)(_, E(S({}, n), { inviteUsersResult: a }))
              : void 0;
    };
