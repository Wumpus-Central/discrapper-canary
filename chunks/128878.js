n.d(t, { A: () => en });
var l = n(477900),
    i = n(582128),
    s = n(38021),
    r = n(839979),
    a = n(462029);
n(321073), n(97378);
var o = n(115718),
    d = n(151054),
    c = n(196765),
    u = n(17928),
    h = n(554146),
    A = n(558845),
    g = n(131607),
    m = n(181079),
    f = n(93055),
    p = n(652215),
    C = n(49999);
let E = [],
    x = (0, c.v)(() => ({ suggestions: E, dismiss: p.tEg }));
function N(e) {
    x.setState({ suggestions: e });
}
var _ = n(462617);
function S() {
    let e = (0, _.A)(),
        { results: t } = (0, d.R)({ channelFilter: e, includeFrecency: !1 }),
        n = i.useMemo(() => {
            let e = [];
            for (let n of t) {
                if (e.length >= 3) break;
                n.type !== o.rD.HEADER && e.push(n);
            }
            return e.length > 0 ? e : E;
        }, [t]);
    return (
        i.useLayoutEffect(() => {
            N(n);
        }, [n]),
        i.useLayoutEffect(() => () => N(E), []),
        null
    );
}
let I = i.memo(function () {
    return !(function () {
        let { hasAccess: e, isFreemium: t } = (0, f.TW)(),
            n = (0, A.Ay)((e) => e.postConnectionOpen),
            [l, s] = (0, g.kn)(e && t && n ? [h.M.FAVORITES_GUILD_SUGGESTIONS] : []);
        return (
            i.useLayoutEffect(() => {
                x.setState({ dismiss: () => s(C.i.USER_DISMISS) });
            }, [s]),
            i.useLayoutEffect(() => () => x.setState({ dismiss: p.tEg }), []),
            l === h.M.FAVORITES_GUILD_SUGGESTIONS
        );
    })()
        ? null
        : (0, l.jsx)(S, {});
});
var b = n(192308),
    G = n(834730),
    j = n(276293),
    R = n(661531),
    v = n(983851),
    y = n(534890),
    M = n(331322),
    L = n(297264),
    T = n(17839),
    U = n(449817),
    D = n(375708),
    O = n(496327);
function P() {
    let e = i.useCallback(() => {
        let { hasAccess: e } = (0, f.ad)();
        e
            ? (0, T.A)({ source: "favorites_empty_sidebar" })
            : (0, b.openModalLazy)(async () => {
                  let { default: e } = await n.e("7476").then(n.bind(n, 777023));
                  return (t) => (0, l.jsx)(e, { ...t, source: "favorites_empty_sidebar" });
              });
    }, []);
    return (0, l.jsx)(G.E, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: D.intl.format(U.default.LyZZLX, { onClick: e }),
    });
}
function V() {
    return (0, l.jsxs)("div", {
        className: O.v0,
        "aria-hidden": "true",
        children: [
            (0, l.jsxs)("div", {
                className: O._f,
                children: [
                    (0, l.jsx)(j.N, { size: "xs", color: R.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: O.D_ }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: O._f,
                children: [
                    (0, l.jsx)(v.H, { size: "xs", color: R.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: O.VG }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: O._f,
                children: [
                    (0, l.jsx)(y.o, { size: "xs", color: R.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: O.D_ }),
                ],
            }),
        ],
    });
}
function w() {
    let e = x((e) => e.suggestions.length > 0);
    return (0, l.jsxs)(M.B, {
        gap: 8,
        children: [
            (0, l.jsxs)(M.B, {
                gap: 8,
                padding: { top: 16, right: 16, bottom: 0, left: 16 },
                fullWidth: !1,
                children: [
                    (0, l.jsx)(L.D, { variant: "heading-md/semibold", children: D.intl.string(U.default["1n0TGE"]) }),
                    (0, l.jsx)(P, {}),
                ],
            }),
            (0, l.jsx)("div", { className: O.yF }),
            e ? null : (0, l.jsx)(V, {}),
        ],
    });
}
var H = n(866665),
    B = n(939249),
    k = n(789645),
    F = n(821609),
    K = n(47167),
    z = n(485947),
    W = n(61916),
    Y = n(223863),
    X = n(994500),
    q = n(287809),
    Z = n(427262),
    J = n(422258),
    $ = n(606660),
    Q = n(266141);
function ee(e) {
    let t,
        { withDivider: n = !1 } = e,
        s = x((e) => e.suggestions),
        { canDismiss: r, dismiss: a } =
            ((t = x((e) => e.dismiss)),
            { canDismiss: (0, u.bG)([m.A], () => m.A.getFavoritesCountAgainstLimit() > 0), dismiss: t }),
        d = i.useCallback(async (e) => {
            let t = await (0, Y.pk)(e);
            null != t &&
                ((0, $.A)(),
                (0, J.nR)({ channelIds: [t], categoryName: D.intl.string(D.t.k8fFjp), source: "suggestions" }));
        }, []);
    return 0 === s.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: Q.kL,
                      children: [
                          (0, l.jsxs)("div", {
                              className: Q.wx,
                              children: [
                                  (0, l.jsx)(z.A, { className: Q.TK, children: D.intl.string(U.default.oHWnLy) }),
                                  r
                                      ? (0, l.jsx)(H.m, {
                                            text: D.intl.string(D.t.WAI6xu),
                                            children: (0, l.jsx)(B.D, {
                                                className: Q.r,
                                                onClick: a,
                                                role: "button",
                                                "aria-label": D.intl.string(U.default.F3dWTe),
                                                children: (0, l.jsx)(k.P, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: Q.CB,
                                                }),
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: Q.p_,
                              role: "list",
                              children: s.map((e, t) =>
                                  (0, l.jsx)(
                                      W.N,
                                      {
                                          result: e,
                                          trailing: (0, l.jsx)(F.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: D.intl.string(D.t.OYkgVk),
                                              "aria-label": D.intl.formatToPlainString(U.default.Hevebj, {
                                                  name:
                                                      e.type === o.rD.USER
                                                          ? Z.Ay.getName(e.record)
                                                          : (0, K.m1)(e.record, q.default, X.A),
                                              }),
                                              onClick: () => d((0, Y.hY)(e)),
                                          }),
                                          "aria-posinset": t + 1,
                                          "aria-setsize": s.length,
                                      },
                                      `${e.type}-${e.record.id}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
                  n ? (0, l.jsx)("div", { className: O.yF }) : null,
              ],
          });
}
var et = n(808240);
function en(e) {
    let { guildChannels: t, shouldShowEmptyState: n, hasNoChannels: i } = (0, a.D)(),
        { density: o } = (0, s.wR)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(I, {}),
            n
                ? (0, l.jsxs)("div", { className: et.XG, children: [(0, l.jsx)(w, {}), (0, l.jsx)(ee, {})] })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", { className: Q._I, children: (0, l.jsx)(ee, { withDivider: !i }) }),
                          (0, l.jsx)(r.i, {
                              ...e,
                              guildChannels: t,
                              guildChannelsVersion: 0,
                              withGuildIcon: !1,
                              density: o,
                          }),
                      ],
                  }),
        ],
    });
}
