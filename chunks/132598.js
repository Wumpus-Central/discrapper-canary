n.d(t, { A: () => et });
var l = n(477900),
    i = n(582128),
    s = n(38021),
    r = n(616740),
    a = n(796637),
    o = n(117600);
n(321073);
var d = n(855986),
    c = n(662090),
    u = n(280157),
    h = n(513520),
    m = n(134460),
    g = n(151054),
    A = n(404885),
    f = n(812020),
    p = n(734057),
    C = n(462617),
    E = n(507696);
function x(e) {
    return e.channelId;
}
function N(e) {
    return p.A.getDMFromUserId(e.otherUserId);
}
function I() {
    let e = (function () {
        let e,
            t,
            n = (0, C.A)(),
            { results: l } = (0, g.R)({ channelFilter: n, includeFrecency: !1 }),
            s =
                (i.useEffect(() => {
                    (0, h.I)();
                }, []),
                (e = (0, d.bG)([m.A], () => m.A.getChannelAffinities())),
                i.useMemo(() => e.slice().sort((e, t) => t.score - e.score), [e])),
            r =
                (i.useEffect(() => {
                    (0, A.u)();
                }, []),
                (t = (0, d.bG)([f.A], () => f.A.getUserAffinitiesMap())),
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
                i = { affinities: s, getChannelId: x, index: 0 },
                a = { affinities: r, getChannelId: N, index: 0 },
                d = 0;
            function h(e) {
                for (; e.index < e.affinities.length;) {
                    let l = e.affinities[e.index];
                    if ((e.index++, null == l)) continue;
                    let i = e.getChannelId(l);
                    if (null == i) continue;
                    let s = (0, u.A)(i);
                    if (!(null == s || !(0, E.N)(s) || t.has(s.record.id)) && n(s, !1)) return s;
                }
                return null;
            }
            for (; e.length < 4;) {
                let n = e.length % 2 == 0,
                    s = h(n ? i : a);
                if (
                    (null == s && (s = h(n ? a : i)),
                    null == s &&
                        (s = (function () {
                            for (; d < l.length;) {
                                let e = l[d];
                                if ((d++, !(null == e || e.type === c.rD.HEADER || t.has(e.record.id)))) return e;
                            }
                            return null;
                        })()),
                    null == s)
                )
                    break;
                (t.add(s.record.id), e.push(s));
            }
            return e.length > 0 ? e : o.E9;
        }, [s, n, 4, l, r]);
    })();
    return (
        i.useLayoutEffect(() => {
            (0, o.CU)(e);
        }, [e]),
        null
    );
}
let _ = i.memo(function () {
    let { isEligible: e, isSelected: t } = (0, o.lK)(),
        n = i.useRef(!1);
    return (i.useLayoutEffect(() => {
        if (t) {
            n.current = !0;
            return;
        }
        (n.current || !e) && ((n.current = !1), (0, o.CU)(o.E9));
    }, [e, t]),
    t)
        ? (0, l.jsx)(I, {})
        : null;
});
var S = n(225123),
    b = n(181079),
    j = n(794412),
    v = n(834730),
    G = n(276293),
    y = n(646514),
    R = n(983851),
    M = n(534890),
    T = n(331322),
    L = n(534514),
    U = n(17839),
    D = n(708526),
    O = n(792996),
    P = n(27948);
function w() {
    let e = i.useCallback(() => {
        (0, U.A)({ source: "favorites_empty_sidebar" });
    }, []);
    return (0, l.jsx)(v.E, {
        variant: "body-sm/medium",
        color: "text-muted",
        children: O.intl.format(D.default.LyZZLX, { onClick: e }),
    });
}
function V() {
    return (0, l.jsxs)("div", {
        className: P.v0,
        "aria-hidden": "true",
        children: [
            (0, l.jsxs)("div", {
                className: P._f,
                children: [
                    (0, l.jsx)(G.TextIcon, { size: "xs", color: y.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: P.D_ }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: P._f,
                children: [
                    (0, l.jsx)(R.VoiceNormalIcon, { size: "xs", color: y.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: P.VG }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: P._f,
                children: [
                    (0, l.jsx)(M.ChatIcon, { size: "xs", color: y.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: P.D_ }),
                ],
            }),
        ],
    });
}
function H() {
    let e = (0, o.fj)();
    return (0, l.jsxs)(T.B, {
        gap: 8,
        children: [
            e ? (0, l.jsx)("div", { className: P.yF }) : null,
            (0, l.jsxs)(T.B, {
                gap: 8,
                padding: { top: 16, right: 16, bottom: 0, left: 16 },
                fullWidth: !1,
                children: [
                    (0, l.jsx)(L.D, { variant: "heading-sm/semibold", children: O.intl.string(D.default["1n0TGE"]) }),
                    (0, l.jsx)(w, {}),
                ],
            }),
            e
                ? null
                : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("div", { className: P.yF }), (0, l.jsx)(V, {})] }),
        ],
    });
}
var k = n(866665),
    B = n(939249),
    F = n(789645),
    W = n(821609),
    K = n(47167),
    z = n(485947),
    Y = n(61916),
    X = n(223863),
    J = n(994500),
    $ = n(287809),
    q = n(427262),
    Z = n(487470);
function Q(e) {
    let { withDivider: t = !1 } = e,
        n = (0, o.Z0)(),
        i = (0, o.aj)();
    return 0 === n.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: Z.kL,
                      children: [
                          (0, l.jsxs)("div", {
                              className: Z.wx,
                              children: [
                                  (0, l.jsx)(z.A, { className: Z.TK, children: O.intl.string(D.default.oHWnLy) }),
                                  (0, l.jsx)(k.m, {
                                      text: O.intl.string(O.t.WAI6xu),
                                      children: (0, l.jsx)(B.D, {
                                          className: Z.r,
                                          onClick: i,
                                          role: "button",
                                          "aria-label": O.intl.string(D.default.F3dWTe),
                                          children: (0, l.jsx)(F.XSmallIcon, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: Z.CB,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: Z.p_,
                              role: "list",
                              children: n.map((e, t) =>
                                  (0, l.jsx)(
                                      Y.N,
                                      {
                                          result: e,
                                          trailing: (0, l.jsx)(W.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: O.intl.string(O.t.OYkgVk),
                                              "aria-label": O.intl.formatToPlainString(D.default.Hevebj, {
                                                  name:
                                                      e.type === c.rD.USER
                                                          ? q.Ay.getName(e.record)
                                                          : (0, K.m1)(e.record, $.default, J.A),
                                              }),
                                              onClick: () =>
                                                  (async function (e) {
                                                      let t = await (0, X.pk)(e);
                                                      null != t &&
                                                          (await (0, j.nR)({
                                                              channelIds: [t],
                                                              categoryName: O.intl.string(O.t.OGiMXJ),
                                                              source: "suggestions",
                                                          }));
                                                  })((0, X.hY)(e)),
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
                  t ? (0, l.jsx)("div", { className: P.yF }) : null,
              ],
          });
}
var ee = n(906659);
function et(e) {
    let t,
        n,
        { guildChannels: o, shouldShowEmptyState: c, hasNoChannels: u } = (0, a.D)(),
        { density: h } = (0, s.wR)();
    return (
        (t = (0, d.bG)([S.A], () => S.A.isConnected())),
        (n = (0, d.bG)([b.A], () => b.A.pruneInactiveThreads)),
        i.useEffect(() => {
            t &&
                n &&
                (async function () {
                    try {
                        await (0, j.Nz)();
                    } catch {
                        return;
                    }
                })();
        }, [t, n]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(_, {}),
                c
                    ? (0, l.jsxs)("div", { className: ee.XG, children: [(0, l.jsx)(Q, {}), (0, l.jsx)(H, {})] })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", { className: Z._I, children: (0, l.jsx)(Q, { withDivider: !u }) }),
                              (0, l.jsx)(r.i, {
                                  ...e,
                                  guildChannels: o,
                                  guildChannelsVersion: 0,
                                  withGuildIcon: !1,
                                  density: h,
                              }),
                          ],
                      }),
            ],
        })
    );
}
