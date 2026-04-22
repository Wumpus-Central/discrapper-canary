n.d(t, { A: () => U }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n.n(s),
    a = n(417597),
    o = n(939249),
    d = n(97808),
    c = n(778712),
    u = n(834730),
    m = n(192308),
    g = n(289873),
    h = n(534514),
    x = n(892547),
    _ = n(821609),
    p = n(396478),
    A = n(158142),
    E = n(442433),
    f = n(686956),
    j = n(475743),
    N = n(736653),
    I = n(962125),
    C = n(859126),
    b = n(287809),
    v = n(996439),
    S = n(997509),
    T = n(555337),
    y = n(203498),
    R = n(660496),
    L = n(652215),
    D = n(985018),
    O = n(399199);
class G extends l.PureComponent {
    render() {
        let { user: e, guild: t } = this.props;
        return (0, i.jsxs)(o.D, {
            className: O.KD,
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, i.jsx)(d.eu, {
                    src: e.getAvatarURL(t?.id, 40),
                    "aria-label": e.username,
                    size: c._3.SIZE_40,
                    className: O.pX,
                }),
                (0, i.jsxs)("div", {
                    className: O.Xh,
                    children: [
                        (0, i.jsx)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            children: e.globalName ?? e.username,
                        }),
                        (0, i.jsx)(u.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: null != e.globalName ? e.username : null,
                        }),
                    ],
                }),
            ],
        });
    }
    handleShowModal = () => {
        let { guild: e, user: t, ban: l } = this.props;
        (0, m.openModalLazy)(async () => {
            let { default: s } = await n.e("50437").then(n.bind(n, 392516));
            return (n) => (0, i.jsx)(s, { ...n, guild: e, user: t, ban: l });
        });
    };
    handleContextMenu = (e) => {
        (0, E.L3)(e, async () => {
            let { default: e } = await n.e("12123").then(n.bind(n, 263702));
            return (t) => (0, i.jsx)(e, { ...t, user: this.props.user });
        });
    };
}
let M = l.forwardRef(function (e, t) {
    let { guild: n, sortedBans: s, bans: r } = e,
        a = l.useCallback(
            (e) => {
                if (null == r && 0 === e) return 60;
                let t = s[e],
                    n = r?.get(t?.id ?? "");
                return 60 * (null != t && null != n);
            },
            [r, s],
        ),
        o = l.useCallback(
            (e) => {
                if (null == r && 0 === e)
                    return (0, i.jsx)(g.y, { className: O.u1, type: g.y.Type.SPINNING_CIRCLE }, "spinner");
                let t = s[e],
                    l = r?.get(t?.id ?? "");
                if (null != t && null != l) return (0, i.jsx)(G, { user: t, ban: l, guild: n }, t.id);
            },
            [r, n, s],
        );
    return (0, i.jsx)(I.A, {
        role: "listbox",
        listPadding: [8, 8, 8, 8],
        rowCount: s.length,
        rowHeight: a,
        renderRow: o,
        ref: t,
    });
});
function k(e) {
    let { guildId: t, storedSearchQuery: n } = e,
        [s, r] = l.useState(n ?? ""),
        [a, o] = l.useState(!1),
        d = l.useCallback(() => {
            S.A.setSection(L.BEX.SAFETY), (0, y.K)(R.C.DM_AND_SPAM_PROTECTION);
        }, []),
        c = l.useCallback((e) => {
            r(e), 0 === e.trim().length && S.A.setSearchQuery(e);
        }, []),
        m = l.useCallback(() => {
            r(""), S.A.setSearchQuery("");
        }, []),
        g = l.useCallback(async () => {
            if (0 === s.trim().length) {
                S.A.setSearchQuery(s), o(!1);
                return;
            }
            if (!a)
                try {
                    o(!0);
                    let [e, n] = (0, C.H)(s),
                        i = e[0];
                    S.A.setSearchQuery(s), await f.A.searchGuildBans(t, i, n), o(!1);
                } catch (e) {
                    o(!1);
                }
        }, [t, a, s]),
        p = l.useCallback(
            (e) => {
                "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), g());
            },
            [g],
        );
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(h.D, { variant: "heading-lg/semibold", children: D.intl.string(D.t["7OY0gJ"]) }),
            (0, i.jsx)("div", {
                className: O.Vu,
                children: (0, i.jsx)(u.E, {
                    variant: "text-sm/normal",
                    className: O.h_,
                    children: D.intl.format(D.t.JcZ36i, { onModerationClick: d }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: O.IA,
                children: [
                    (0, i.jsx)(x.I, {
                        query: s ?? "",
                        placeholder: D.intl.string(D.t.MiqUmf),
                        "aria-label": D.intl.string(D.t.MiqUmf),
                        onChange: c,
                        onKeyDown: p,
                        onClear: m,
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: O.JU,
                        children: (0, i.jsx)(_.$, {
                            variant: "primary",
                            text: D.intl.string(D.t["5h0QOP"]),
                            onClick: g,
                            disabled: a,
                            loading: a,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function U() {
    let { guild: e, searchQuery: t } = (0, a.bG)([T.A], () => T.A.getProps(), [], s.isEqual),
        o = null != t && t.trim().length > 0,
        d = (0, j.A)(o),
        c = o !== d,
        [u] = (0, a.bG)([T.A], () => T.A.getBans(), [], v.D),
        m = u?.size ?? 0,
        g = (0, N.Ay)(),
        h = e?.id ?? L.dJq,
        x = l.useRef(null),
        _ = l.useCallback(
            (e) =>
                null == e || 0 === e.length
                    ? (e) => null != e
                    : (t) => {
                          if (null == t || 0 === e.trim().length) return !1;
                          let [[n], i] = (0, C.H)(e);
                          return (
                              !!i.includes(t.id) ||
                              (null != n &&
                                  !!(
                                      t.username.toLowerCase().includes(n.toLowerCase()) ||
                                      (null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase()))
                                  ))
                          );
                      },
            [],
        ),
        E = l.useCallback(
            (e, t, n) => {
                if (null == e || 0 === n) return [];
                let i = [];
                for (let n of e.keys()) {
                    let e = b.default.getUser(n);
                    null != e && _(t)(e) && i.push(e);
                }
                return i;
            },
            [_],
        ),
        I = l.useMemo(() => E(u, t, m), [u, E, t, m]),
        S = null != u,
        y = I.length % 1e3 == 0 && I.length > 0 && S,
        R = 0 === I.length,
        [G, U] = l.useState({ currentPage: 1, pageSize: 100 });
    l.useEffect(() => {
        c && 1 !== G.currentPage && U((e) => ({ ...e, currentPage: 1 }));
    }, [c, G.currentPage]);
    let w = l.useCallback(
            (e) => {
                f.A.fetchGuildBansBatch(h, 1e3, e);
            },
            [h],
        ),
        P = l.useMemo(() => r().chunk(I, G.pageSize), [G.pageSize, I]),
        B = l.useCallback(
            (e) => {
                x.current?.scrollToSectionTop(0),
                    (e + 1) * G.pageSize > I.length &&
                        y &&
                        !o &&
                        ((F.current = I[I.length - 1]?.id ?? null), w(F.current)),
                    (null != P[e - 1] || y) && U((t) => ({ ...t, currentPage: e }));
            },
            [G.pageSize, I, y, P, w, o],
        ),
        F = l.useRef(null);
    l.useEffect(() => {
        w(F.current);
    }, [w]);
    let H = l.useMemo(() => P[G.currentPage - 1] ?? [], [P, G.currentPage]);
    return null == e
        ? null
        : (0, i.jsxs)("div", {
              className: O.kL,
              children: [
                  (0, i.jsx)(k, { guildId: h, storedSearchQuery: t }),
                  (0, i.jsxs)("div", {
                      className: O.gs,
                      children: [
                          !R && (0, i.jsx)(M, { guild: e, bans: u, sortedBans: H, ref: x }),
                          !y &&
                              R &&
                              (0, i.jsxs)(p.pp, {
                                  theme: g,
                                  className: O.p$,
                                  children: [
                                      (0, i.jsx)(p.G8, {
                                          darkSrc: n(251474),
                                          lightSrc: n(993507),
                                          width: 256,
                                          height: 212,
                                      }),
                                      (0, i.jsx)(p.SG, {
                                          note: D.intl.string(D.t.zfCsAw),
                                          style: { maxWidth: 300 },
                                          children: D.intl.string(D.t.ZEiY1D),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      children: (0, i.jsx)(A.m, {
                          className: O.JV,
                          totalCount: I.length + (y ? G.pageSize : 0),
                          pageSize: G.pageSize,
                          currentPage: G.currentPage,
                          onPageChange: B,
                          maxVisiblePages: 9,
                      }),
                  }),
              ],
          });
}
