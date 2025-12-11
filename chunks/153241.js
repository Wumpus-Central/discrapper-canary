r.d(t, { default: () => I }), r(388685), r(539854);
var n = r(54381),
    s = r(473749),
    i = r(793030),
    a = r(442837),
    l = r(481060),
    o = r(794433),
    c = r(480466),
    u = r(313789),
    d = r(518596),
    f = r(51144),
    p = r(904399),
    b = r(80721),
    m = r(643281),
    g = r(172782),
    y = r(154122),
    h = r(282793),
    v = r(981631),
    j = r(137427),
    O = r(388032),
    S = r(992909),
    x = r(135471);
function w(e) {
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
function C(e, t) {
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
let N = (e) => {
        var { onInvite: t, onClose: r, subscriptionId: u } = e,
            d = C(e, ["onInvite", "onClose", "subscriptionId"]);
        let [b, y] = s.useState([]),
            [v, x] = s.useState(""),
            N = (0, c.Z)(v, 400),
            k = (0, a.e7)([m.Z], () => m.Z.getNumAvailableInvites()),
            {
                eligibleUsers: I,
                getNextRows: Z,
                hasError: E,
                isFetching: M,
            } = (0, g.Z)({
                subscriptionId: u,
                searchQuery: N,
            }),
            [z, U] = s.useState(!1);
        return E
            ? (0, n.jsx)(
                  i.Modal,
                  w(
                      {
                          size: "sm",
                          title: O.intl.string(j.default["54lM5y"]),
                          subtitle: O.intl.string(j.default.zrtwpV),
                          onClose: r,
                          actions: [],
                      },
                      d,
                  ),
              )
            : 0 !== I.length || M || 0 !== N.length
              ? (0, n.jsx)(
                    i.Modal,
                    P(
                        w(
                            {
                                size: "md",
                                title: O.intl.string(j.default["Um/7BM"]),
                                subtitle: O.intl.format(j.default.qSWXaf, {
                                    totalSeats: h.v$,
                                    premiumGroupProductName: (0, h.sO)(),
                                    helpCenterLink: h.j3,
                                }),
                                onClose: r,
                                input: (0, n.jsx)(o.Z, {
                                    className: S.searchbar,
                                    size: o.Z.Sizes.MEDIUM,
                                    tags: b.map((e) => f.ZP.getName(e)),
                                    placeholder: 0 === b.length ? O.intl.string(j.default.wRS8vo) : "",
                                    query: v,
                                    onRemoveTag: (e) => {
                                        y((t) => t.filter((t, r) => r !== e));
                                    },
                                    onQueryChange: x,
                                    onClear: () => x(""),
                                }),
                                actions: [],
                                actionBarInput: (() => {
                                    let e = N.length > 0 && 0 === I.length;
                                    return (0, n.jsx)(l.Button, {
                                        variant: "primary",
                                        disabled: (0 === b.length && !e) || z,
                                        text: O.intl.string(j.default["5fZHp3"]),
                                        size: "md",
                                        fullWidth: !0,
                                        onClick: async () => {
                                            if (e) return void r();
                                            U(!0), await t(b), U(!1);
                                        },
                                    });
                                })(),
                            },
                            d,
                        ),
                        {
                            children: (0, n.jsx)(p.Z, {
                                users: I,
                                isUserSelected: (e) => b.some((t) => t.id === e.id),
                                onSelectionChange: (e, t) => {
                                    y((r) => (t ? [...r, e] : r.filter((t) => t.id !== e.id)));
                                },
                                isUserDisabled: () => b.length >= k,
                                isFetching: M,
                                onFetchMore: Z,
                                searchQuery: N,
                                emptySearchContent: {
                                    header: O.intl.string(j.default.gaamNe),
                                    body: O.intl.string(j.default.nQcM39),
                                },
                                className: S.list,
                            }),
                        },
                    ),
                )
              : (0, n.jsx)(
                    i.Modal,
                    w(
                        {
                            size: "sm",
                            title: O.intl.string(j.default.ONaJLH),
                            subtitle: O.intl.format(j.default["0LHbPc"], { helpCenterLink: h.j3 }),
                            onClose: r,
                            actions: [],
                        },
                        d,
                    ),
                );
    },
    k = (e) => {
        var { onClose: t, inviteUsersResult: r } = e,
            s = C(e, ["onClose", "inviteUsersResult"]);
        return (0, n.jsx)(
            i.ExpressiveModal,
            P(
                w(
                    {
                        graphic: {
                            type: "image",
                            src: x.Z,
                        },
                        gradientColor: "nitro-pink",
                        title: O.intl.formatToPlainString(j.default["0yblpx"], {
                            premiumGroupProductName: (0, h.sO)(),
                        }),
                        subtitle: O.intl.format(j.default.olkQkj, {
                            onClick: () => {
                                t(), (0, d.openUserSettings)(u.n.SUBSCRIPTIONS_PANEL, { section: v.oAB.SUBSCRIPTIONS });
                            },
                        }),
                        onClose: t,
                    },
                    s,
                ),
                {
                    children: r.map((e) =>
                        (0, n.jsx)(
                            y.J,
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
    I = (e) => {
        var { subscription: t } = e,
            r = C(e, ["subscription"]);
        let [i, a] = s.useState([]),
            [l, o] = s.useState(1),
            c = async (e) => {
                let r = new Map(),
                    n = [];
                for (let t of e) r.set(t.id, t), n.push(t.id);
                let s = await (0, b.cD)(t.id, n);
                if (null == s) {
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
                  N,
                  P(w({}, r), {
                      onInvite: c,
                      subscriptionId: t.id,
                  }),
              )
            : 2 === l
              ? (0, n.jsx)(k, P(w({}, r), { inviteUsersResult: i }))
              : void 0;
    };
