r.d(t, { default: () => k }), r(388685), r(539854);
var n = r(54381),
    i = r(473749),
    a = r(512722),
    s = r.n(a),
    o = r(793030),
    l = r(442837),
    c = r(481060),
    u = r(794433),
    d = r(480466),
    p = r(313789),
    f = r(518596),
    m = r(78839),
    b = r(51144),
    y = r(904399),
    h = r(80721),
    g = r(172782),
    v = r(154122),
    O = r(282793),
    j = r(981631),
    S = r(606097),
    x = r(388032),
    w = r(781565),
    P = r(383092);
function _() {
    return (_ =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function I(e) {
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
function N(e, t) {
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
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                a = Object.keys(e);
            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
            (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    }
    return i;
}
let E = (e) => {
        var { onInvite: t, onClose: r, subscriptionId: a } = e,
            s = C(e, ["onInvite", "onClose", "subscriptionId"]);
        let [l, p] = i.useState([]),
            [f, m] = i.useState(""),
            h = (0, d.Z)(f, 400),
            {
                eligibleUsers: v,
                getNextRows: j,
                hasError: P,
                isFetching: _,
            } = (0, g.Z)({
                subscriptionId: a,
                searchQuery: h,
            }),
            [E, Z] = i.useState(!1);
        return P
            ? (0, n.jsx)(
                  o.Modal,
                  I(
                      {
                          size: "sm",
                          title: x.intl.string(S.default["54lM5y"]),
                          subtitle: x.intl.string(S.default.zrtwpV),
                          onClose: r,
                          actions: [],
                      },
                      s,
                  ),
              )
            : 0 !== v.length || _ || 0 !== h.length
              ? (0, n.jsx)(
                    o.Modal,
                    N(
                        I(
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
                                    tags: l.map((e) => b.ZP.getName(e)),
                                    placeholder: 0 === l.length ? x.intl.string(S.default.wRS8vo) : "",
                                    query: f,
                                    onRemoveTag: (e) => {
                                        p((t) => t.filter((t, r) => r !== e));
                                    },
                                    onQueryChange: m,
                                    onClear: () => m(""),
                                }),
                                actions: [],
                                actionBarInput: (() => {
                                    let e = h.length > 0 && 0 === v.length;
                                    return (0, n.jsx)(c.Button, {
                                        variant: "primary",
                                        disabled: (0 === l.length && !e) || E,
                                        text: x.intl.string(S.default["5fZHp3"]),
                                        size: "md",
                                        fullWidth: !0,
                                        onClick: async () => {
                                            if (e) return void r();
                                            Z(!0), await t(l), Z(!1);
                                        },
                                    });
                                })(),
                            },
                            s,
                        ),
                        {
                            children: (0, n.jsx)(y.Z, {
                                users: v,
                                isUserSelected: (e) => l.some((t) => t.id === e.id),
                                onSelectionChange: (e, t) => {
                                    p((r) => (t ? [...r, e] : r.filter((t) => t.id !== e.id)));
                                },
                                isUserDisabled: () => l.length >= O.v$,
                                isFetching: _,
                                onFetchMore: j,
                                searchQuery: h,
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
                    I(
                        {
                            size: "sm",
                            title: x.intl.string(S.default.ONaJLH),
                            subtitle: x.intl.format(S.default["0LHbPc"], { helpCenterLink: O.j3 }),
                            onClose: r,
                            actions: [],
                        },
                        s,
                    ),
                );
    },
    Z = (e) => {
        var { onClose: t, inviteUsersResult: r } = e,
            i = C(e, ["onClose", "inviteUsersResult"]);
        return (0, n.jsx)(
            o.ExpressiveModal,
            N(
                I(
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
                                t(), (0, f.openUserSettings)(p.n.SUBSCRIPTIONS_PANEL, { section: j.oAB.SUBSCRIPTIONS });
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
    k = (e) => {
        var t = _(
            {},
            (function (e) {
                if (null == e) throw TypeError("Cannot destructure " + e);
                return e;
            })(e),
        );
        let r = (0, l.e7)([m.Z], () => m.Z.getPremiumGroupSubscription()),
            [a, o] = i.useState([]);
        s()(null != r, "Subscription not found");
        let [c, u] = i.useState(1),
            d = async (e) => {
                let t = [];
                for (let n of e)
                    await (0, h.cD)(r.id, [n.id]),
                        t.push({
                            user: n,
                            isSuccess: !0,
                        });
                o(t), u(2);
            };
        return 1 === c
            ? (0, n.jsx)(
                  E,
                  N(I({}, t), {
                      onInvite: d,
                      subscriptionId: r.id,
                  }),
              )
            : 2 === c
              ? (0, n.jsx)(Z, N(I({}, t), { inviteUsersResult: a }))
              : void 0;
    };
