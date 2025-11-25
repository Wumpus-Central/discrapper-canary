r.d(t, { default: () => k }), r(388685), r(539854);
var n = r(54381),
    i = r(473749),
    s = r(512722),
    a = r.n(s),
    o = r(793030),
    c = r(442837),
    l = r(481060),
    u = r(794433),
    d = r(480466),
    p = r(313789),
    f = r(518596),
    b = r(78839),
    m = r(51144),
    y = r(904399),
    h = r(80721),
    g = r(172782),
    v = r(154122),
    O = r(282793),
    j = r(981631),
    S = r(606097),
    x = r(388032),
    P = r(781565),
    w = r(383092);
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
let E = (e) => {
        var { onInvite: t, onClose: r, subscriptionId: s } = e,
            a = C(e, ["onInvite", "onClose", "subscriptionId"]);
        let [c, p] = i.useState([]),
            [f, b] = i.useState(""),
            h = (0, d.Z)(f, 400),
            {
                eligibleUsers: v,
                fetchUsers: j,
                hasError: w,
                isFetching: _,
            } = (0, g.Z)({
                subscriptionId: s,
                searchQuery: h,
            }),
            [E, Z] = i.useState(!1);
        return _
            ? (0, n.jsx)(l.$jN, {})
            : w
              ? (0, n.jsx)(
                    o.Modal,
                    I(
                        {
                            size: "sm",
                            title: x.intl.string(x.t.lcuio4),
                            subtitle: x.intl.string(x.t["x09+CD"]),
                            onClose: r,
                            actions: [],
                        },
                        a,
                    ),
                )
              : (0, n.jsx)(
                    o.Modal,
                    N(
                        I(
                            {
                                size: "md",
                                title: x.intl.string(S.default["Um/7BM"]),
                                subtitle: x.intl.formatToPlainString(S.default.qSWXaf, {
                                    totalSeats: O.v$,
                                    premiumGroupProductName: (0, O.sO)(),
                                }),
                                onClose: r,
                                input: (0, n.jsx)(u.Z, {
                                    className: P.searchbar,
                                    size: u.Z.Sizes.MEDIUM,
                                    tags: c.map((e) => m.ZP.getName(e)),
                                    placeholder: 0 === c.length ? x.intl.string(S.default.wRS8vo) : "",
                                    query: f,
                                    onRemoveTag: (e) => {
                                        p((t) => t.filter((t, r) => r !== e));
                                    },
                                    onQueryChange: b,
                                    onClear: () => b(""),
                                }),
                                actions: [],
                                actionBarInput: (() => {
                                    let e = h.length > 0 && 0 === v.length;
                                    return (0, n.jsx)(l.Button, {
                                        variant: "primary",
                                        disabled: (0 === c.length && !e) || E,
                                        text: x.intl.string(S.default.TEntiZ),
                                        size: "md",
                                        fullWidth: !0,
                                        onClick: async () => {
                                            if (e) return void r();
                                            Z(!0), await t(c), Z(!1);
                                        },
                                    });
                                })(),
                            },
                            a,
                        ),
                        {
                            children: (0, n.jsx)(y.Z, {
                                users: v,
                                isUserSelected: (e) => c.some((t) => t.id === e.id),
                                onSelectionChange: (e, t) => {
                                    p((r) => (t ? [...r, e] : r.filter((t) => t.id !== e.id)));
                                },
                                isUserDisabled: () => c.length >= O.v$,
                                isFetching: _,
                                onFetchMore: j,
                                searchQuery: h,
                                emptySearchContent: {
                                    header: x.intl.string(x.t["8+ywHD"]),
                                    body: x.intl.string(x.t.CgQmY2),
                                },
                                className: P.list,
                            }),
                        },
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
                            src: w.Z,
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
        let r = (0, c.e7)([b.Z], () => b.Z.getPremiumGroupSubscription()),
            [s, o] = i.useState([]);
        a()(null != r, "Subscription not found");
        let [l, u] = i.useState(1),
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
        return 1 === l
            ? (0, n.jsx)(
                  E,
                  N(I({}, t), {
                      onInvite: d,
                      subscriptionId: r.id,
                  }),
              )
            : 2 === l
              ? (0, n.jsx)(Z, N(I({}, t), { inviteUsersResult: s }))
              : void 0;
    };
