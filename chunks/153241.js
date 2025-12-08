r.d(t, { default: () => _ }), r(388685), r(539854);
var n = r(54381),
    i = r(473749),
    s = r(512722),
    a = r.n(s),
    o = r(793030),
    l = r(442837),
    c = r(481060),
    u = r(794433),
    d = r(480466),
    f = r(313789),
    p = r(518596),
    b = r(78839),
    m = r(51144),
    g = r(904399),
    y = r(80721),
    h = r(172782),
    v = r(154122),
    O = r(282793),
    j = r(981631),
    S = r(441677),
    x = r(388032),
    w = r(781565),
    P = r(383092);
function C() {
    return (C =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function N(e) {
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
function k(e, t) {
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
function Z(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                s = Object.keys(e);
            for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++)
            (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    }
    return i;
}
let I = (e) => {
        var { onInvite: t, onClose: r, subscriptionId: s } = e,
            a = Z(e, ["onInvite", "onClose", "subscriptionId"]);
        let [l, f] = i.useState([]),
            [p, b] = i.useState(""),
            y = (0, d.Z)(p, 400),
            {
                eligibleUsers: v,
                getNextRows: j,
                hasError: P,
                isFetching: C,
            } = (0, h.Z)({
                subscriptionId: s,
                searchQuery: y,
            }),
            [I, E] = i.useState(!1);
        return P
            ? (0, n.jsx)(
                  o.Modal,
                  N(
                      {
                          size: "sm",
                          title: x.intl.string(S.default["54lM5y"]),
                          subtitle: x.intl.string(S.default.zrtwpV),
                          onClose: r,
                          actions: [],
                      },
                      a,
                  ),
              )
            : 0 !== v.length || C || 0 !== y.length
              ? (0, n.jsx)(
                    o.Modal,
                    k(
                        N(
                            {
                                size: "md",
                                title: x.intl.string(S.default["Um/7BM"]),
                                subtitle: x.intl.format(S.default.qSWXaf, {
                                    totalSeats: O.v$,
                                    premiumGroupProductName: (0, O.sO)(),
                                    helpCenterLink: O.j3,
                                }),
                                onClose: r,
                                input: (0, n.jsx)(u.Z, {
                                    className: w.searchbar,
                                    size: u.Z.Sizes.MEDIUM,
                                    tags: l.map((e) => m.ZP.getName(e)),
                                    placeholder: 0 === l.length ? x.intl.string(S.default.wRS8vo) : "",
                                    query: p,
                                    onRemoveTag: (e) => {
                                        f((t) => t.filter((t, r) => r !== e));
                                    },
                                    onQueryChange: b,
                                    onClear: () => b(""),
                                }),
                                actions: [],
                                actionBarInput: (() => {
                                    let e = y.length > 0 && 0 === v.length;
                                    return (0, n.jsx)(c.Button, {
                                        variant: "primary",
                                        disabled: (0 === l.length && !e) || I,
                                        text: x.intl.string(S.default["5fZHp3"]),
                                        size: "md",
                                        fullWidth: !0,
                                        onClick: async () => {
                                            if (e) return void r();
                                            E(!0), await t(l), E(!1);
                                        },
                                    });
                                })(),
                            },
                            a,
                        ),
                        {
                            children: (0, n.jsx)(g.Z, {
                                users: v,
                                isUserSelected: (e) => l.some((t) => t.id === e.id),
                                onSelectionChange: (e, t) => {
                                    f((r) => (t ? [...r, e] : r.filter((t) => t.id !== e.id)));
                                },
                                isUserDisabled: () => l.length >= O.v$,
                                isFetching: C,
                                onFetchMore: j,
                                searchQuery: y,
                                emptySearchContent: {
                                    header: x.intl.string(S.default.gaamNe),
                                    body: x.intl.string(S.default.nQcM39),
                                },
                                className: w.list,
                            }),
                        },
                    ),
                )
              : (0, n.jsx)(
                    o.Modal,
                    N(
                        {
                            size: "sm",
                            title: x.intl.string(S.default.ONaJLH),
                            subtitle: x.intl.format(S.default["0LHbPc"], { helpCenterLink: O.j3 }),
                            onClose: r,
                            actions: [],
                        },
                        a,
                    ),
                );
    },
    E = (e) => {
        var { onClose: t, inviteUsersResult: r } = e,
            i = Z(e, ["onClose", "inviteUsersResult"]);
        return (0, n.jsx)(
            o.ExpressiveModal,
            k(
                N(
                    {
                        graphic: {
                            type: "image",
                            src: P.Z,
                        },
                        gradientColor: "nitro-pink",
                        title: x.intl.formatToPlainString(S.default["0yblpx"], {
                            premiumGroupProductName: (0, O.sO)(),
                        }),
                        subtitle: x.intl.format(S.default.olkQkj, {
                            onClick: () => {
                                t(), (0, p.openUserSettings)(f.n.SUBSCRIPTIONS_PANEL, { section: j.oAB.SUBSCRIPTIONS });
                            },
                        }),
                        onClose: t,
                    },
                    i,
                ),
                {
                    children: r.map((e) =>
                        (0, n.jsx)(
                            v.J,
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
    _ = (e) => {
        var t = C(
            {},
            (function (e) {
                if (null == e) throw TypeError("Cannot destructure " + e);
                return e;
            })(e),
        );
        let r = (0, l.e7)([b.Z], () => b.Z.getPremiumGroupSubscription()),
            [s, o] = i.useState([]);
        a()(null != r, "Subscription not found");
        let [c, u] = i.useState(1),
            d = async (e) => {
                let t = new Map(),
                    n = [];
                for (let r of e) t.set(r.id, r), n.push(r.id);
                let i = await (0, y.cD)(r.id, n);
                if (null == i) {
                    o(
                        e.map((e) => ({
                            user: e,
                            isSuccess: !1,
                        })),
                    ),
                        u(2);
                    return;
                }
                let { invitedUsers: s, ineligibleUsers: a } = i;
                o([
                    ...s.map((e) => ({
                        user: t.get(e),
                        isSuccess: !0,
                    })),
                    ...a.map((e) => ({
                        user: t.get(e),
                        isSuccess: !1,
                    })),
                ]),
                    u(2);
            };
        return 1 === c
            ? (0, n.jsx)(
                  I,
                  k(N({}, t), {
                      onInvite: d,
                      subscriptionId: r.id,
                  }),
              )
            : 2 === c
              ? (0, n.jsx)(E, k(N({}, t), { inviteUsersResult: s }))
              : void 0;
    };
