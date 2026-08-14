n.d(t, { A: () => ec });
var l = n(477900),
    i = n(582128),
    s = n(38021),
    r = n(839979),
    a = n(796637),
    o = n(196765),
    d = n(554146),
    c = n(558845),
    u = n(131607),
    h = n(93055),
    A = n(652215),
    g = n(49999);
let m = [],
    f = (0, o.v)(() => ({ suggestions: m, dismiss: A.tEg }));
function p(e) {
    f.setState({ suggestions: e });
}
n(321073);
var C = n(17928),
    E = n(115718),
    x = n(280157),
    N = n(513520),
    _ = n(130100),
    S = n(151054),
    I = n(219271),
    b = n(427358),
    G = n(734057),
    j = n(462617),
    R = n(507696);
function v(e) {
    return e.channelId;
}
function y(e) {
    return G.A.getDMFromUserId(e.otherUserId);
}
function M() {
    let e = (function () {
        let e,
            t,
            n = (0, j.A)(),
            { results: l } = (0, S.R)({ channelFilter: n, includeFrecency: !1 }),
            s =
                (i.useEffect(() => {
                    (0, N.I)();
                }, []),
                (e = (0, C.bG)([_.A], () => _.A.getChannelAffinities())),
                i.useMemo(() => e.slice().sort((e, t) => t.score - e.score), [e])),
            r =
                (i.useEffect(() => {
                    (0, I.u)();
                }, []),
                (t = (0, C.bG)([b.A], () => b.A.getUserAffinitiesMap())),
                i.useMemo(() => {
                    let e = Array(t.size),
                        n = 0;
                    return (
                        t.forEach((t) => {
                            e[n++] = t;
                        }),
                        e.sort((e, t) => t.dmProbability - e.dmProbability)
                    );
                }, [t]));
        return i.useMemo(() => {
            let e = [],
                t = new Set(),
                i = { affinities: s, getChannelId: v, index: 0 },
                a = { affinities: r, getChannelId: y, index: 0 },
                o = 0;
            function d(e) {
                for (; e.index < e.affinities.length; ) {
                    let l = e.affinities[e.index];
                    if ((e.index++, null == l)) continue;
                    let i = e.getChannelId(l);
                    if (null == i) continue;
                    let s = (0, x.A)(i);
                    if (!(null == s || !(0, R.N)(s) || t.has(s.record.id)) && n(s, !1)) return s;
                }
                return null;
            }
            for (; e.length < 4; ) {
                let n = e.length % 2 == 0,
                    s = d(n ? i : a);
                if (
                    (null == s && (s = d(n ? a : i)),
                    null == s &&
                        (s = (function () {
                            for (; o < l.length; ) {
                                let e = l[o];
                                if ((o++, !(null == e || e.type === E.rD.HEADER || t.has(e.record.id)))) return e;
                            }
                            return null;
                        })()),
                    null == s)
                )
                    break;
                t.add(s.record.id), e.push(s);
            }
            return e.length > 0 ? e : m;
        }, [s, n, 4, l, r]);
    })();
    return (
        i.useLayoutEffect(() => {
            p(e);
        }, [e]),
        i.useLayoutEffect(() => () => p(m), []),
        null
    );
}
let L = i.memo(function () {
    return !(function () {
        let { hasAccess: e, isFreemium: t } = (0, h.TW)(),
            n = (0, c.Ay)((e) => e.postConnectionOpen),
            [l, s] = (0, u.kn)(e && t && n ? [d.M.FAVORITES_GUILD_SUGGESTIONS] : []);
        return (
            i.useLayoutEffect(() => {
                f.setState({ dismiss: () => s(g.i.USER_DISMISS) });
            }, [s]),
            i.useLayoutEffect(() => () => f.setState({ dismiss: A.tEg }), []),
            l === d.M.FAVORITES_GUILD_SUGGESTIONS
        );
    })()
        ? null
        : (0, l.jsx)(M, {});
});
var T = n(192308),
    U = n(834730),
    D = n(276293),
    O = n(661531),
    P = n(983851),
    V = n(534890),
    w = n(331322),
    H = n(297264),
    B = n(17839),
    k = n(449817),
    F = n(375708),
    K = n(496327);
function z() {
    let e = i.useCallback(() => {
        let { hasAccess: e } = (0, h.ad)();
        e
            ? (0, B.A)({ source: "favorites_empty_sidebar" })
            : (0, T.openModalLazy)(async () => {
                  let { default: e } = await n.e("7476").then(n.bind(n, 777023));
                  return (t) => (0, l.jsx)(e, { ...t, source: "favorites_empty_sidebar" });
              });
    }, []);
    return (0, l.jsx)(U.E, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: F.intl.format(k.default.LyZZLX, { onClick: e }),
    });
}
function W() {
    return (0, l.jsxs)("div", {
        className: K.v0,
        "aria-hidden": "true",
        children: [
            (0, l.jsxs)("div", {
                className: K._f,
                children: [
                    (0, l.jsx)(D.N, { size: "xs", color: O.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: K.D_ }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: K._f,
                children: [
                    (0, l.jsx)(P.H, { size: "xs", color: O.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: K.VG }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: K._f,
                children: [
                    (0, l.jsx)(V.o, { size: "xs", color: O.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: K.D_ }),
                ],
            }),
        ],
    });
}
function Y() {
    let e = f((e) => e.suggestions.length > 0);
    return (0, l.jsxs)(w.B, {
        gap: 8,
        children: [
            e ? (0, l.jsx)("div", { className: K.yF }) : null,
            (0, l.jsxs)(w.B, {
                gap: 8,
                padding: { top: 16, right: 16, bottom: 0, left: 16 },
                fullWidth: !1,
                children: [
                    (0, l.jsx)(H.D, { variant: "heading-md/semibold", children: F.intl.string(k.default["1n0TGE"]) }),
                    (0, l.jsx)(z, {}),
                ],
            }),
            e
                ? null
                : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("div", { className: K.yF }), (0, l.jsx)(W, {})] }),
        ],
    });
}
var X = n(866665),
    q = n(939249),
    Z = n(789645),
    J = n(821609),
    $ = n(47167),
    Q = n(485947),
    ee = n(61916),
    et = n(223863),
    en = n(994500),
    el = n(287809),
    ei = n(427262),
    es = n(16236);
async function er(e) {
    let t = await (0, et.pk)(e);
    null != t &&
        (await (0, es.nR)({ channelIds: [t], categoryName: F.intl.string(F.t.OGiMXJ), source: "suggestions" }));
}
var ea = n(266141);
function eo(e) {
    let { withDivider: t = !1 } = e,
        n = f((e) => e.suggestions),
        i = f((e) => e.dismiss);
    return 0 === n.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: ea.kL,
                      children: [
                          (0, l.jsxs)("div", {
                              className: ea.wx,
                              children: [
                                  (0, l.jsx)(Q.A, { className: ea.TK, children: F.intl.string(k.default.oHWnLy) }),
                                  (0, l.jsx)(X.m, {
                                      text: F.intl.string(F.t.WAI6xu),
                                      children: (0, l.jsx)(q.D, {
                                          className: ea.r,
                                          onClick: i,
                                          role: "button",
                                          "aria-label": F.intl.string(k.default.F3dWTe),
                                          children: (0, l.jsx)(Z.P, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: ea.CB,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: ea.p_,
                              role: "list",
                              children: n.map((e, t) =>
                                  (0, l.jsx)(
                                      ee.N,
                                      {
                                          result: e,
                                          trailing: (0, l.jsx)(J.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: F.intl.string(F.t.OYkgVk),
                                              "aria-label": F.intl.formatToPlainString(k.default.Hevebj, {
                                                  name:
                                                      e.type === E.rD.USER
                                                          ? ei.Ay.getName(e.record)
                                                          : (0, $.m1)(e.record, el.default, en.A),
                                              }),
                                              onClick: () => er((0, et.hY)(e)),
                                          }),
                                          "aria-posinset": t + 1,
                                          "aria-setsize": n.length,
                                      },
                                      `${e.type}-${e.record.id}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
                  t ? (0, l.jsx)("div", { className: K.yF }) : null,
              ],
          });
}
var ed = n(808240);
function ec(e) {
    let { guildChannels: t, shouldShowEmptyState: n, hasNoChannels: i } = (0, a.D)(),
        { density: o } = (0, s.wR)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L, {}),
            n
                ? (0, l.jsxs)("div", { className: ed.XG, children: [(0, l.jsx)(eo, {}), (0, l.jsx)(Y, {})] })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", { className: ea._I, children: (0, l.jsx)(eo, { withDivider: !i }) }),
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
