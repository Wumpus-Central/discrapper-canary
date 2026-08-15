n.d(t, { A: () => eu });
var l = n(477900),
    i = n(582128),
    s = n(38021),
    r = n(839979),
    a = n(796637),
    o = n(196765),
    d = n(554146),
    c = n(228366),
    u = n(558845),
    h = n(131607),
    A = n(93055),
    g = n(652215),
    m = n(49999);
let f = [],
    p = (0, o.v)((e) => (c.h.subscribe("LOGOUT", () => e({ suggestions: f })), { suggestions: f, dismiss: g.tEg }));
function C(e) {
    p.setState({ suggestions: e });
}
n(321073);
var E = n(17928),
    x = n(115718),
    N = n(280157),
    _ = n(513520),
    S = n(130100),
    I = n(151054),
    b = n(219271),
    G = n(427358),
    j = n(734057),
    R = n(462617),
    v = n(507696);
function y(e) {
    return e.channelId;
}
function M(e) {
    return j.A.getDMFromUserId(e.otherUserId);
}
function L() {
    let e = (function () {
        let e,
            t,
            n = (0, R.A)(),
            { results: l } = (0, I.R)({ channelFilter: n, includeFrecency: !1 }),
            s =
                (i.useEffect(() => {
                    (0, _.I)();
                }, []),
                (e = (0, E.bG)([S.A], () => S.A.getChannelAffinities())),
                i.useMemo(() => e.slice().sort((e, t) => t.score - e.score), [e])),
            r =
                (i.useEffect(() => {
                    (0, b.u)();
                }, []),
                (t = (0, E.bG)([G.A], () => G.A.getUserAffinitiesMap())),
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
                i = { affinities: s, getChannelId: y, index: 0 },
                a = { affinities: r, getChannelId: M, index: 0 },
                o = 0;
            function d(e) {
                for (; e.index < e.affinities.length; ) {
                    let l = e.affinities[e.index];
                    if ((e.index++, null == l)) continue;
                    let i = e.getChannelId(l);
                    if (null == i) continue;
                    let s = (0, N.A)(i);
                    if (!(null == s || !(0, v.N)(s) || t.has(s.record.id)) && n(s, !1)) return s;
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
                                if ((o++, !(null == e || e.type === x.rD.HEADER || t.has(e.record.id)))) return e;
                            }
                            return null;
                        })()),
                    null == s)
                )
                    break;
                t.add(s.record.id), e.push(s);
            }
            return e.length > 0 ? e : f;
        }, [s, n, 4, l, r]);
    })();
    return (
        i.useLayoutEffect(() => {
            C(e);
        }, [e]),
        null
    );
}
let T = i.memo(function () {
    let { isEligible: e, isSelected: t } = (function () {
        let { hasAccess: e, isFreemium: t } = (0, A.TW)(),
            n = (0, u.Ay)((e) => e.postConnectionOpen),
            l = e && t && n,
            [s, r] = (0, h.kn)(l ? [d.M.FAVORITES_GUILD_SUGGESTIONS] : []),
            a = s === d.M.FAVORITES_GUILD_SUGGESTIONS;
        return (
            i.useLayoutEffect(() => {
                p.setState({
                    dismiss: () => {
                        r(m.i.USER_DISMISS), C(f);
                    },
                });
            }, [r]),
            i.useLayoutEffect(() => () => p.setState({ dismiss: g.tEg }), []),
            { isEligible: l, isSelected: a }
        );
    })();
    return (i.useLayoutEffect(() => {
        e || C(f);
    }, [e]),
    t)
        ? (0, l.jsx)(L, {})
        : null;
});
var U = n(192308),
    D = n(834730),
    O = n(276293),
    P = n(661531),
    V = n(983851),
    w = n(534890),
    H = n(331322),
    B = n(297264),
    k = n(17839),
    F = n(449817),
    K = n(375708),
    z = n(496327);
function W() {
    let e = i.useCallback(() => {
        let { hasAccess: e } = (0, A.ad)();
        e
            ? (0, k.A)({ source: "favorites_empty_sidebar" })
            : (0, U.openModalLazy)(async () => {
                  let { default: e } = await n.e("307476").then(n.bind(n, 777023));
                  return (t) => (0, l.jsx)(e, { ...t, source: "favorites_empty_sidebar" });
              });
    }, []);
    return (0, l.jsx)(D.E, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: K.intl.format(F.default.LyZZLX, { onClick: e }),
    });
}
function Y() {
    return (0, l.jsxs)("div", {
        className: z.v0,
        "aria-hidden": "true",
        children: [
            (0, l.jsxs)("div", {
                className: z._f,
                children: [
                    (0, l.jsx)(O.N, { size: "xs", color: P.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: z.D_ }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: z._f,
                children: [
                    (0, l.jsx)(V.H, { size: "xs", color: P.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: z.VG }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: z._f,
                children: [
                    (0, l.jsx)(w.o, { size: "xs", color: P.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: z.D_ }),
                ],
            }),
        ],
    });
}
function X() {
    let e = p((e) => e.suggestions.length > 0);
    return (0, l.jsxs)(H.B, {
        gap: 8,
        children: [
            e ? (0, l.jsx)("div", { className: z.yF }) : null,
            (0, l.jsxs)(H.B, {
                gap: 8,
                padding: { top: 16, right: 16, bottom: 0, left: 16 },
                fullWidth: !1,
                children: [
                    (0, l.jsx)(B.D, { variant: "heading-md/semibold", children: K.intl.string(F.default["1n0TGE"]) }),
                    (0, l.jsx)(W, {}),
                ],
            }),
            e
                ? null
                : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("div", { className: z.yF }), (0, l.jsx)(Y, {})] }),
        ],
    });
}
var q = n(866665),
    Z = n(939249),
    J = n(789645),
    $ = n(821609),
    Q = n(47167),
    ee = n(485947),
    et = n(61916),
    en = n(223863),
    el = n(994500),
    ei = n(287809),
    es = n(427262),
    er = n(16236);
async function ea(e) {
    let t = await (0, en.pk)(e);
    null != t &&
        (await (0, er.nR)({ channelIds: [t], categoryName: K.intl.string(K.t.OGiMXJ), source: "suggestions" }));
}
var eo = n(266141);
function ed(e) {
    let { withDivider: t = !1 } = e,
        n = p((e) => e.suggestions),
        i = p((e) => e.dismiss);
    return 0 === n.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: eo.kL,
                      children: [
                          (0, l.jsxs)("div", {
                              className: eo.wx,
                              children: [
                                  (0, l.jsx)(ee.A, { className: eo.TK, children: K.intl.string(F.default.oHWnLy) }),
                                  (0, l.jsx)(q.m, {
                                      text: K.intl.string(K.t.WAI6xu),
                                      children: (0, l.jsx)(Z.D, {
                                          className: eo.r,
                                          onClick: i,
                                          role: "button",
                                          "aria-label": K.intl.string(F.default.F3dWTe),
                                          children: (0, l.jsx)(J.P, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: eo.CB,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: eo.p_,
                              role: "list",
                              children: n.map((e, t) =>
                                  (0, l.jsx)(
                                      et.N,
                                      {
                                          result: e,
                                          trailing: (0, l.jsx)($.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: K.intl.string(K.t.OYkgVk),
                                              "aria-label": K.intl.formatToPlainString(F.default.Hevebj, {
                                                  name:
                                                      e.type === x.rD.USER
                                                          ? es.Ay.getName(e.record)
                                                          : (0, Q.m1)(e.record, ei.default, el.A),
                                              }),
                                              onClick: () => ea((0, en.hY)(e)),
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
                  t ? (0, l.jsx)("div", { className: z.yF }) : null,
              ],
          });
}
var ec = n(808240);
function eu(e) {
    let { guildChannels: t, shouldShowEmptyState: n, hasNoChannels: i } = (0, a.D)(),
        { density: o } = (0, s.wR)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(T, {}),
            n
                ? (0, l.jsxs)("div", { className: ec.XG, children: [(0, l.jsx)(ed, {}), (0, l.jsx)(X, {})] })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", { className: eo._I, children: (0, l.jsx)(ed, { withDivider: !i }) }),
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
