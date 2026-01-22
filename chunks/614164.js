n.d(t, { A: () => I }), n(896048), n(321073), n(864466), n(443073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    c = n.n(a),
    o = n(311907),
    d = n(397927),
    u = n(73153),
    f = n(370480),
    g = n(975571),
    b = n(642133),
    m = n(636042),
    p = n(396816),
    x = n(785312),
    h = n(158720),
    j = n(316506),
    O = n(927573),
    y = n(652215),
    v = n(783419),
    A = n(985018),
    E = n(750730),
    N = n(261223);
function _(e) {
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
function S(e, t) {
    return t !== f.jO.AND
        ? Object.values(c().groupBy(e, (e) => "".concat(e.connectionType, ":").concat(e.applicationId)))
        : 0 === e.length
          ? []
          : [[...e]];
}
function T(e) {
    let { handleAddVerificationClicked: t, locked: n } = e;
    return (0, r.jsxs)("div", {
        className: E.Gq,
        children: [
            (0, r.jsx)(d.Heading, {
                className: E.gg,
                variant: "eyebrow",
                children: A.intl.string(A.t.nMir27),
            }),
            (0, r.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: E.$L,
                children: A.intl.format(A.t.q5f7tK, {
                    helpdeskArticleUrl: g.A.getArticleURL(y.MVz.CONNECTION_DETAILS_ADMIN),
                }),
            }),
            (0, r.jsx)(d.Button, {
                disabled: n,
                onClick: t,
                text: A.intl.string(A.t["OSvW5+"]),
                fullWidth: !0,
                variant: "primary",
            }),
        ],
    });
}
function I(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, integrations: c } = e,
        { headerHeight: I, headerRef: C } = (0, x.A)(0),
        { scrolledToTop: P, handleScroll: w } = (0, j.u)(),
        R = (0, o.bG)([b.A], () => {
            var e;
            return null == (e = b.A.getRoleMemberCount(t.id)) ? void 0 : e[n.id];
        }, [n.id, t.id]),
        D = (0, o.yK)([p.A], () => {
            var e;
            return null != (e = p.A.getEditedRoleConnectionConfigurationsMap().get(n.id)) ? e : [];
        }),
        G = D.length > 1 ? f.jO.OR : f.jO.AND,
        L = i.useMemo(() => (G === f.jO.OR ? D.flat() : null != D && D.length > 0 ? D[0] : []), [G, D]),
        k = i.useMemo(() => new Set(L.map((e) => e.connectionType)), [L]);
    function M(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            r = [...L];
        r.push({
            connectionType: e,
            connectionMetadataField: void 0,
            applicationId: t,
            operator: void 0,
            value: void 0,
        }),
            (0, m.pn)(n.id, S(r, G));
    }
    function U() {
        u.h.dispatch({
            type: "CONNECTIONS_GRID_MODAL_SHOW",
            onComplete: (e) => M(e),
            excludedPlatformTypes: k,
            integrations: c,
            onCompleteApplication: (e) => M(v.zR, e),
        });
    }
    let F = null;
    if (0 === L.length)
        F = (0, r.jsx)(T, {
            handleAddVerificationClicked: U,
            locked: l,
        });
    else if (L.length > 0) {
        var B, H;
        let e,
            t = null;
        L.length < 10 &&
            (t = (0, r.jsx)(d.Button, {
                disabled: l,
                onClick: U,
                text: A.intl.string(A.t["OSvW5+"]),
                icon: d.U1e,
                fullWidth: !0,
                variant: "secondary",
            })),
            (F = (0, r.jsxs)(r.Fragment, {
                children: [
                    ((B = () => (0, m.pn)(n.id, [])),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)("div", {
                                className: E.$$,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: E.Ir,
                                        children: (0, r.jsx)(d.Heading, {
                                            variant: "eyebrow",
                                            children: A.intl.string(A.t.nMir27),
                                        }),
                                    }),
                                    (0, r.jsx)(d.QWc, {
                                        variant: "critical",
                                        onClick: B,
                                        disabled: l,
                                        text: A.intl.string(A.t.ntW1cc),
                                        textVariant: "text-sm/semibold",
                                    }),
                                ],
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: A.intl.format(A.t.q5f7tK, {
                                    helpdeskArticleUrl: g.A.getArticleURL(y.MVz.CONNECTION_DETAILS_ADMIN),
                                }),
                            }),
                        ],
                    })),
                    (n.id,
                    (H = (e, t) => (0, m.pn)(n.id, S(e, t))),
                    (e = S(L, f.jO.OR)),
                    (0, r.jsx)(d.z6M, {
                        label: A.intl.string(A.t.Xs7PHX),
                        options: [
                            {
                                name: A.intl.string(A.t.W3iY58),
                                value: f.jO.OR,
                            },
                            {
                                name: A.intl.string(A.t.gHXS9A),
                                value: f.jO.AND,
                            },
                        ],
                        onChange: (e) => H(L, e),
                        value: G,
                        disabled: l || e.length < 2,
                    })),
                    (function (e, t, n, i, l) {
                        function s(n, r) {
                            let i = [];
                            for (let t of e) i.push(_({}, t));
                            if (null == n) {
                                let t = e[r];
                                null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value
                                    ? (i = i.filter((e) =>
                                          null == t.applicationId
                                              ? e.connectionType !== t.connectionType
                                              : e.connectionType !== t.connectionType &&
                                                e.applicationId !== t.applicationId,
                                      ))
                                    : i.splice(r, 1);
                            } else -1 === r ? i.push(n) : r >= 0 && (i[r] = n);
                            t(i);
                        }
                        let a = new Map();
                        for (let t of (e.forEach((e, t) => {
                            let n = "".concat(e.connectionType, ":").concat(e.applicationId);
                            if (a.has(n)) {
                                let r = a.get(n);
                                null == r ||
                                    r.push({
                                        index: t,
                                        configuration: e,
                                    });
                            } else
                                a.set(n, [
                                    {
                                        index: t,
                                        configuration: e,
                                    },
                                ]);
                        }),
                        a.values())) {
                            if (
                                t.some((e) => {
                                    let { configuration: t } = e;
                                    return null == t.connectionMetadataField && null == t.operator && null == t.value;
                                })
                            )
                                continue;
                            let n = (function (e, t) {
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
                                })(_({}, t[0].configuration), {
                                    connectionMetadataField: void 0,
                                    operator: void 0,
                                    value: void 0,
                                }),
                                r = e.push(n);
                            t.push({
                                index: r - 1,
                                configuration: n,
                            });
                        }
                        return (0, r.jsx)("div", {
                            className: E.rr,
                            children: Array.from(a.values()).map((e) =>
                                (0, r.jsx)(
                                    h.A,
                                    {
                                        configurationItems: e,
                                        onConfigurationChange: s,
                                        locked: n,
                                        integrations: l,
                                    },
                                    e[0].configuration.connectionType + ":" + e[0].index,
                                ),
                            ),
                        });
                    })(L, (e) => (0, m.pn)(n.id, S(e, G)), l, n.id, c),
                    t,
                ],
            }));
    }
    return (0, r.jsx)(d.GtU, {
        className: E.XG,
        style: { scrollPaddingTop: I },
        onScroll: w,
        children: (0, r.jsxs)("div", {
            className: N.Q,
            children: [
                (0, r.jsx)("div", {
                    className: s()(N.wx, N.ln, { [N.l6]: !P }),
                    ref: C,
                    children: (0, r.jsx)(j.A, {
                        guild: t,
                        role: n,
                        selectedSection: O.T$.VERIFICATIONS,
                        setSelectedSection: a,
                    }),
                }),
                (null != R ? R : 0) > 0
                    ? (0, r.jsxs)("div", {
                          className: E.UW,
                          children: [
                              (0, r.jsx)(d.EpV, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: E.QW,
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: A.intl.string(A.t["2aFeef"]),
                              }),
                          ],
                      })
                    : null,
                F,
            ],
        }),
    });
}
