"use strict";
n.d(t, { A: () => S }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n.n(a),
    d = n(311907),
    c = n(397927),
    u = n(73153),
    m = n(370480),
    g = n(975571),
    x = n(642133),
    h = n(636042),
    _ = n(396816),
    A = n(785312),
    p = n(158720),
    f = n(316506),
    j = n(927573),
    N = n(652215),
    E = n(783419),
    T = n(985018),
    C = n(524487),
    I = n(407759);
function b(e, t) {
    return t !== m.jO.AND
        ? Object.values(o().groupBy(e, (e) => `${e.connectionType}:${e.applicationId}`))
        : 0 === e.length
          ? []
          : [[...e]];
}
function v(e) {
    let { handleAddVerificationClicked: t, locked: n } = e;
    return (0, i.jsxs)("div", {
        className: C.Gq,
        children: [
            (0, i.jsx)(c.Heading, { className: C.gg, variant: "eyebrow", children: T.intl.string(T.t.nMir27) }),
            (0, i.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: C.$L,
                children: T.intl.format(T.t.q5f7tK, {
                    helpdeskArticleUrl: g.A.getArticleURL(N.MVz.CONNECTION_DETAILS_ADMIN),
                }),
            }),
            (0, i.jsx)(c.Button, {
                disabled: n,
                onClick: t,
                text: T.intl.string(T.t["OSvW5+"]),
                fullWidth: !0,
                variant: "primary",
            }),
        ],
    });
}
function S(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, integrations: o } = e,
        { headerHeight: S, headerRef: y } = (0, A.A)(0),
        { scrolledToTop: R, handleScroll: O } = (0, f.u)(),
        G = (0, d.bG)([x.A], () => x.A.getRoleMemberCount(t.id)?.[n.id], [n.id, t.id]),
        L = (0, d.yK)([_.A], () => _.A.getEditedRoleConnectionConfigurationsMap().get(n.id) ?? []),
        D = L.length > 1 ? m.jO.OR : m.jO.AND,
        M = s.useMemo(() => (D === m.jO.OR ? L.flat() : null != L && L.length > 0 ? L[0] : []), [D, L]),
        k = s.useMemo(() => new Set(M.map((e) => e.connectionType)), [M]);
    function U(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            i = [...M];
        i.push({
            connectionType: e,
            connectionMetadataField: void 0,
            applicationId: t,
            operator: void 0,
            value: void 0,
        }),
            (0, h.pn)(n.id, b(i, D));
    }
    function P() {
        u.h.dispatch({
            type: "CONNECTIONS_GRID_MODAL_SHOW",
            onComplete: (e) => U(e),
            excludedPlatformTypes: k,
            integrations: o,
            onCompleteApplication: (e) => U(E.zR, e),
            includeApplicationConnections: !1,
        });
    }
    let w = null;
    if (0 === M.length) w = (0, i.jsx)(v, { handleAddVerificationClicked: P, locked: l });
    else if (M.length > 0) {
        var B, F;
        let e,
            t = null;
        M.length < 10 &&
            (t = (0, i.jsx)(c.Button, {
                disabled: l,
                onClick: P,
                text: T.intl.string(T.t["OSvW5+"]),
                icon: c.U1e,
                fullWidth: !0,
                variant: "secondary",
            })),
            (w = (0, i.jsxs)(i.Fragment, {
                children: [
                    ((B = () => (0, h.pn)(n.id, [])),
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)("div", {
                                className: C.$$,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: C.Ir,
                                        children: (0, i.jsx)(c.Heading, {
                                            variant: "eyebrow",
                                            children: T.intl.string(T.t.nMir27),
                                        }),
                                    }),
                                    (0, i.jsx)(c.QWc, {
                                        variant: "critical",
                                        onClick: B,
                                        disabled: l,
                                        text: T.intl.string(T.t.ntW1cc),
                                        textVariant: "text-sm/semibold",
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: T.intl.format(T.t.q5f7tK, {
                                    helpdeskArticleUrl: g.A.getArticleURL(N.MVz.CONNECTION_DETAILS_ADMIN),
                                }),
                            }),
                        ],
                    })),
                    (n.id,
                    (F = (e, t) => (0, h.pn)(n.id, b(e, t))),
                    (e = b(M, m.jO.OR)),
                    (0, i.jsx)(c.z6M, {
                        label: T.intl.string(T.t.Xs7PHX),
                        options: [
                            { name: T.intl.string(T.t.W3iY58), value: m.jO.OR },
                            { name: T.intl.string(T.t.gHXS9A), value: m.jO.AND },
                        ],
                        onChange: (e) => F(M, e),
                        value: D,
                        disabled: l || e.length < 2,
                    })),
                    (function (e, t, n, s, l) {
                        function r(n, i) {
                            let s = [];
                            for (let t of e) s.push({ ...t });
                            if (null == n) {
                                let t = e[i];
                                null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value
                                    ? (s = s.filter((e) =>
                                          null == t.applicationId
                                              ? e.connectionType !== t.connectionType
                                              : e.connectionType !== t.connectionType ||
                                                e.applicationId !== t.applicationId,
                                      ))
                                    : s.splice(i, 1);
                            } else -1 === i ? s.push(n) : i >= 0 && (s[i] = n);
                            t(s);
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
                            className: C.rr,
                            children: Array.from(a.values()).map((e) =>
                                (0, i.jsx)(
                                    p.A,
                                    { configurationItems: e, onConfigurationChange: r, locked: n, integrations: l },
                                    e[0].configuration.connectionType + ":" + e[0].index,
                                ),
                            ),
                        });
                    })(M, (e) => (0, h.pn)(n.id, b(e, D)), l, n.id, o),
                    t,
                ],
            }));
    }
    return (0, i.jsx)(c.GtU, {
        className: C.XG,
        style: { scrollPaddingTop: S },
        onScroll: O,
        children: (0, i.jsxs)("div", {
            className: I.Q,
            children: [
                (0, i.jsx)("div", {
                    className: r()(I.wx, I.ln, { [I.l6]: !R }),
                    ref: y,
                    children: (0, i.jsx)(f.A, {
                        guild: t,
                        role: n,
                        selectedSection: j.T$.VERIFICATIONS,
                        setSelectedSection: a,
                    }),
                }),
                (G ?? 0) > 0
                    ? (0, i.jsxs)("div", {
                          className: C.UW,
                          children: [
                              (0, i.jsx)(c.EpV, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: C.QW,
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: T.intl.string(T.t["2aFeef"]),
                              }),
                          ],
                      })
                    : null,
                w,
            ],
        }),
    });
}
