"use strict";
n.d(t, { A: () => v }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(417597),
    o = n(397927),
    d = n(442433),
    c = n(686956),
    u = n(475743),
    m = n(736653),
    g = n(962125),
    x = n(859126),
    h = n(287809),
    _ = n(996439),
    A = n(997509),
    p = n(555337),
    f = n(203498),
    j = n(660496),
    N = n(652215),
    E = n(985018),
    C = n(399199);
class T extends s.PureComponent {
    render() {
        let { user: e, guild: t } = this.props;
        return (0, i.jsxs)(o.DUT, {
            className: C.KD,
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, i.jsx)(o.euF, {
                    src: e.getAvatarURL(t?.id, 40),
                    "aria-label": e.username,
                    size: o._3J.SIZE_40,
                    className: C.pX,
                }),
                (0, i.jsxs)("div", {
                    className: C.Xh,
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            children: e.globalName ?? e.username,
                        }),
                        (0, i.jsx)(o.Text, {
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
        let { guild: e, user: t, ban: s } = this.props;
        (0, o.mMO)(async () => {
            let { default: l } = await n.e("50437").then(n.bind(n, 392516));
            return (n) => (0, i.jsx)(l, { ...n, guild: e, user: t, ban: s });
        });
    };
    handleContextMenu = (e) => {
        (0, d.L3)(e, async () => {
            let { default: e } = await n.e("12123").then(n.bind(n, 263702));
            return (t) => (0, i.jsx)(e, { ...t, user: this.props.user });
        });
    };
}
let I = s.forwardRef(function (e, t) {
    let { guild: n, sortedBans: l, bans: r } = e,
        a = s.useCallback(
            (e) => {
                if (null == r && 0 === e) return 60;
                let t = l[e],
                    n = r?.get(t?.id ?? "");
                return 60 * (null != t && null != n);
            },
            [r, l],
        ),
        d = s.useCallback(
            (e) => {
                if (null == r && 0 === e)
                    return (0, i.jsx)(o.y$y, { className: C.u1, type: o.y$y.Type.SPINNING_CIRCLE }, "spinner");
                let t = l[e],
                    s = r?.get(t?.id ?? "");
                if (null != t && null != s) return (0, i.jsx)(T, { user: t, ban: s, guild: n }, t.id);
            },
            [r, n, l],
        );
    return (0, i.jsx)(g.A, {
        role: "listbox",
        listPadding: [8, 8, 8, 8],
        rowCount: l.length,
        rowHeight: a,
        renderRow: d,
        ref: t,
    });
});
function b(e) {
    let { guildId: t, storedSearchQuery: n } = e,
        [l, r] = s.useState(n ?? ""),
        [a, d] = s.useState(!1),
        u = s.useCallback(() => {
            A.A.setSection(N.BEX.SAFETY), (0, f.K)(j.C.DM_AND_SPAM_PROTECTION);
        }, []),
        m = s.useCallback((e) => {
            r(e), 0 === e.trim().length && A.A.setSearchQuery(e);
        }, []),
        g = s.useCallback(() => {
            r(""), A.A.setSearchQuery("");
        }, []),
        h = s.useCallback(async () => {
            if (0 === l.trim().length) {
                A.A.setSearchQuery(l), d(!1);
                return;
            }
            if (!a)
                try {
                    d(!0);
                    let [e, n] = (0, x.H)(l),
                        i = e[0];
                    A.A.setSearchQuery(l), await c.A.searchGuildBans(t, i, n), d(!1);
                } catch (e) {
                    d(!1);
                }
        }, [t, a, l]),
        _ = s.useCallback(
            (e) => {
                "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), h());
            },
            [h],
        );
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(o.Heading, { variant: "heading-lg/semibold", children: E.intl.string(E.t["7OY0gJ"]) }),
            (0, i.jsx)("div", {
                className: C.Vu,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    className: C.h_,
                    children: E.intl.format(E.t.JcZ36i, { onModerationClick: u }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: C.IA,
                children: [
                    (0, i.jsx)(o.IWV, {
                        query: l ?? "",
                        placeholder: E.intl.string(E.t.MiqUmf),
                        "aria-label": E.intl.string(E.t.MiqUmf),
                        onChange: m,
                        onKeyDown: _,
                        onClear: g,
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: C.JU,
                        children: (0, i.jsx)(o.Button, {
                            variant: "primary",
                            text: E.intl.string(E.t["5h0QOP"]),
                            onClick: h,
                            disabled: a,
                            loading: a,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function v() {
    let { guild: e, searchQuery: t } = (0, a.bG)([p.A], () => p.A.getProps(), [], l.isEqual),
        d = null != t && t.trim().length > 0,
        g = (0, u.A)(d),
        A = d !== g,
        [f] = (0, a.bG)([p.A], () => p.A.getBans(), [], _.D),
        j = f?.size ?? 0,
        T = (0, m.Ay)(),
        v = e?.id ?? N.dJq,
        S = s.useRef(null),
        y = s.useCallback(
            (e) =>
                null == e || 0 === e.length
                    ? (e) => null != e
                    : (t) => {
                          if (null == t || 0 === e.trim().length) return !1;
                          let [[n], i] = (0, x.H)(e);
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
        R = s.useCallback(
            (e, t, n) => {
                if (null == e || 0 === n) return [];
                let i = [];
                for (let n of e.keys()) {
                    let e = h.default.getUser(n);
                    null != e && y(t)(e) && i.push(e);
                }
                return i;
            },
            [y],
        ),
        O = s.useMemo(() => R(f, t, j), [f, R, t, j]),
        G = null != f,
        L = O.length % 1e3 == 0 && O.length > 0 && G,
        D = 0 === O.length,
        [M, k] = s.useState({ currentPage: 1, pageSize: 100 });
    s.useEffect(() => {
        A && 1 !== M.currentPage && k((e) => ({ ...e, currentPage: 1 }));
    }, [A, M.currentPage]);
    let U = s.useCallback(
            (e) => {
                c.A.fetchGuildBansBatch(v, 1e3, e);
            },
            [v],
        ),
        P = s.useMemo(() => r().chunk(O, M.pageSize), [M.pageSize, O]),
        w = s.useCallback(
            (e) => {
                S.current?.scrollToSectionTop(0),
                    (e + 1) * M.pageSize > O.length &&
                        L &&
                        !d &&
                        ((B.current = O[O.length - 1]?.id ?? null), U(B.current)),
                    (null != P[e - 1] || L) && k((t) => ({ ...t, currentPage: e }));
            },
            [M.pageSize, O, L, P, U, d],
        ),
        B = s.useRef(null);
    s.useEffect(() => {
        U(B.current);
    }, [U]);
    let F = s.useMemo(() => P[M.currentPage - 1] ?? [], [P, M.currentPage]);
    return null == e
        ? null
        : (0, i.jsxs)("div", {
              className: C.kL,
              children: [
                  (0, i.jsx)(b, { guildId: v, storedSearchQuery: t }),
                  (0, i.jsxs)("div", {
                      className: C.gs,
                      children: [
                          !D && (0, i.jsx)(I, { guild: e, bans: f, sortedBans: F, ref: S }),
                          !L &&
                              D &&
                              (0, i.jsxs)(o.ppr, {
                                  theme: T,
                                  className: C.p$,
                                  children: [
                                      (0, i.jsx)(o.G8R, {
                                          darkSrc: n(251474),
                                          lightSrc: n(993507),
                                          width: 256,
                                          height: 212,
                                      }),
                                      (0, i.jsx)(o.SGT, {
                                          note: E.intl.string(E.t.zfCsAw),
                                          style: { maxWidth: 300 },
                                          children: E.intl.string(E.t.ZEiY1D),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      children: (0, i.jsx)(o.mgR, {
                          className: C.JV,
                          totalCount: O.length + (L ? M.pageSize : 0),
                          pageSize: M.pageSize,
                          currentPage: M.currentPage,
                          onPageChange: w,
                          maxVisiblePages: 9,
                      }),
                  }),
              ],
          });
}
