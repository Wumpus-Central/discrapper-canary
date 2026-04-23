n.d(t, { A: () => M }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    d = n(311907),
    c = n(695366),
    u = n(834730),
    m = n(534514),
    g = n(821609),
    h = n(123292),
    x = n(954197),
    _ = n(245604),
    p = n(599319),
    A = n(73153),
    E = n(370480),
    f = n(975571),
    j = n(642133),
    N = n(636042),
    I = n(396816),
    C = n(785312),
    b = n(158720),
    v = n(316506),
    S = n(927573),
    T = n(652215),
    y = n(783419),
    R = n(985018),
    L = n(844919),
    D = n(838719);
function O(e, t) {
    return t !== E.jO.AND
        ? Object.values(o().groupBy(e, (e) => `${e.connectionType}:${e.applicationId}`))
        : 0 === e.length
          ? []
          : [[...e]];
}
function G(e) {
    let { handleAddVerificationClicked: t, locked: n } = e;
    return (0, i.jsxs)("div", {
        className: L.Gq,
        children: [
            (0, i.jsx)(m.D, { className: L.gg, variant: "eyebrow", children: R.intl.string(R.t.nMir27) }),
            (0, i.jsx)(u.E, {
                variant: "text-sm/normal",
                color: "text-default",
                className: L.$L,
                children: R.intl.format(R.t.q5f7tK, {
                    helpdeskArticleUrl: f.A.getArticleURL(T.MVz.CONNECTION_DETAILS_ADMIN),
                }),
            }),
            (0, i.jsx)(g.$, {
                disabled: n,
                onClick: t,
                text: R.intl.string(R.t["OSvW5+"]),
                fullWidth: !0,
                variant: "primary",
            }),
        ],
    });
}
function M(e) {
    let { guild: t, role: n, locked: s, setSelectedSection: a, integrations: o } = e,
        { headerHeight: M, headerRef: k } = (0, C.A)(0),
        { scrolledToTop: U, handleScroll: w } = (0, v.u)(),
        P = (0, d.bG)([j.A], () => j.A.getRoleMemberCount(t.id)?.[n.id], [n.id, t.id]),
        B = (0, d.yK)([I.A], () => I.A.getEditedRoleConnectionConfigurationsMap().get(n.id) ?? []),
        F = B.length > 1 ? E.jO.OR : E.jO.AND,
        H = l.useMemo(() => (F === E.jO.OR ? B.flat() : null != B && B.length > 0 ? B[0] : []), [F, B]),
        V = l.useMemo(() => new Set(H.map((e) => e.connectionType)), [H]);
    function z(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            i = [...H];
        i.push({
            connectionType: e,
            connectionMetadataField: void 0,
            applicationId: t,
            operator: void 0,
            value: void 0,
        }),
            (0, N.pn)(n.id, O(i, F));
    }
    function W() {
        A.h.dispatch({
            type: "CONNECTIONS_GRID_MODAL_SHOW",
            onComplete: (e) => z(e),
            excludedPlatformTypes: V,
            integrations: o,
            onCompleteApplication: (e) => z(y.zR, e),
            includeApplicationConnections: !1,
        });
    }
    let Y = null;
    if (0 === H.length) Y = (0, i.jsx)(G, { handleAddVerificationClicked: W, locked: s });
    else if (H.length > 0) {
        var K, X;
        let e,
            t = null;
        H.length < 10 &&
            (t = (0, i.jsx)(g.$, {
                disabled: s,
                onClick: W,
                text: R.intl.string(R.t["OSvW5+"]),
                icon: _.U,
                fullWidth: !0,
                variant: "secondary",
            })),
            (Y = (0, i.jsxs)(i.Fragment, {
                children: [
                    ((K = () => (0, N.pn)(n.id, [])),
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)("div", {
                                className: L.$$,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: L.Ir,
                                        children: (0, i.jsx)(m.D, {
                                            variant: "eyebrow",
                                            children: R.intl.string(R.t.nMir27),
                                        }),
                                    }),
                                    (0, i.jsx)(h.Q, {
                                        variant: "critical",
                                        onClick: K,
                                        disabled: s,
                                        text: R.intl.string(R.t.ntW1cc),
                                        textVariant: "text-sm/semibold",
                                    }),
                                ],
                            }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/normal",
                                children: R.intl.format(R.t.q5f7tK, {
                                    helpdeskArticleUrl: f.A.getArticleURL(T.MVz.CONNECTION_DETAILS_ADMIN),
                                }),
                            }),
                        ],
                    })),
                    (n.id,
                    (X = (e, t) => (0, N.pn)(n.id, O(e, t))),
                    (e = O(H, E.jO.OR)),
                    (0, i.jsx)(x.z, {
                        label: R.intl.string(R.t.Xs7PHX),
                        options: [
                            { name: R.intl.string(R.t.W3iY58), value: E.jO.OR },
                            { name: R.intl.string(R.t.gHXS9A), value: E.jO.AND },
                        ],
                        onChange: (e) => X(H, e),
                        value: F,
                        disabled: s || e.length < 2,
                    })),
                    (function (e, t, n, l, s) {
                        function r(n, i) {
                            let l = [];
                            for (let t of e) l.push({ ...t });
                            if (null == n) {
                                let t = e[i];
                                null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value
                                    ? (l = l.filter((e) =>
                                          null == t.applicationId
                                              ? e.connectionType !== t.connectionType
                                              : e.connectionType !== t.connectionType ||
                                                e.applicationId !== t.applicationId,
                                      ))
                                    : l.splice(i, 1);
                            } else -1 === i ? l.push(n) : i >= 0 && (l[i] = n);
                            t(l);
                        }
                        let a = new Map();
                        for (let t of (e.forEach((e, t) => {
                            let n = `${e.connectionType}:${e.applicationId}`;
                            if (a.has(n)) {
                                let i = a.get(n);
                                i?.push({ index: t, configuration: e });
                            } else a.set(n, [{ index: t, configuration: e }]);
                        }),
                        a.values())) {
                            if (
                                t.some((e) => {
                                    let { configuration: t } = e;
                                    return null == t.connectionMetadataField && null == t.operator && null == t.value;
                                })
                            )
                                continue;
                            let n = {
                                    ...t[0].configuration,
                                    connectionMetadataField: void 0,
                                    operator: void 0,
                                    value: void 0,
                                },
                                i = e.push(n);
                            t.push({ index: i - 1, configuration: n });
                        }
                        return (0, i.jsx)("div", {
                            className: L.rr,
                            children: Array.from(a.values()).map((e) =>
                                (0, i.jsx)(
                                    b.A,
                                    { configurationItems: e, onConfigurationChange: r, locked: n, integrations: s },
                                    e[0].configuration.connectionType + ":" + e[0].index,
                                ),
                            ),
                        });
                    })(H, (e) => (0, N.pn)(n.id, O(e, F)), s, n.id, o),
                    t,
                ],
            }));
    }
    return (0, i.jsx)(p.Gt, {
        className: L.XG,
        style: { scrollPaddingTop: M },
        onScroll: w,
        children: (0, i.jsxs)("div", {
            className: D.Q,
            children: [
                (0, i.jsx)("div", {
                    className: r()(D.wx, D.ln, { [D.l6]: !U }),
                    ref: k,
                    children: (0, i.jsx)(v.A, {
                        guild: t,
                        role: n,
                        selectedSection: S.T$.VERIFICATIONS,
                        setSelectedSection: a,
                    }),
                }),
                (P ?? 0) > 0
                    ? (0, i.jsxs)("div", {
                          className: L.UW,
                          children: [
                              (0, i.jsx)(c.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: L.QW,
                              }),
                              (0, i.jsx)(u.E, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: R.intl.string(R.t["2aFeef"]),
                              }),
                          ],
                      })
                    : null,
                Y,
            ],
        }),
    });
}
