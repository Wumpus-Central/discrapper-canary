n.d(t, { Z: () => P }), n(388685), n(781311), n(953529), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(399606),
    o = n(481060),
    c = n(239091),
    d = n(749210),
    u = n(110924),
    g = n(410030),
    m = n(218867),
    p = n(733026),
    f = n(594174),
    h = n(136015),
    b = n(434404),
    x = n(999382),
    j = n(84613),
    _ = n(740903),
    v = n(981631),
    O = n(388032),
    C = n(40175);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
}
class I extends i.PureComponent {
    render() {
        var e;
        let { user: t, guild: n } = this.props;
        return (0, r.jsxs)(o.P3F, {
            className: C.bannedUser,
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, r.jsx)(o.qEK, {
                    src: t.getAvatarURL(null == n ? void 0 : n.id, 40),
                    "aria-label": t.username,
                    size: o.EFr.SIZE_40,
                    className: C.bannedUserAvatar,
                }),
                (0, r.jsxs)("div", {
                    className: C.username,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: null != (e = t.globalName) ? e : t.username,
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: null != t.globalName ? t.username : null,
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            y(this, "handleShowModal", () => {
                let { guild: e, user: t, ban: i } = this.props;
                (0, o.ZDy)(async () => {
                    let { default: l } = await n.e("61697").then(n.bind(n, 355160));
                    return (n) =>
                        (0, r.jsx)(
                            l,
                            E(N({}, n), {
                                guild: e,
                                user: t,
                                ban: i,
                            }),
                        );
                });
            }),
            y(this, "handleContextMenu", (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e("23835").then(n.bind(n, 768079));
                    return (t) => (0, r.jsx)(e, E(N({}, t), { user: this.props.user }));
                });
            });
    }
}
let S = i.forwardRef(function (e, t) {
    let { guild: n, sortedBans: l, bans: a } = e,
        s = i.useCallback(
            (e) => {
                var t;
                if (null == a && 0 === e) return 60;
                let n = l[e],
                    r = null == a ? void 0 : a.get(null != (t = null == n ? void 0 : n.id) ? t : "");
                return 60 * (null != n && null != r);
            },
            [a, l],
        ),
        c = i.useCallback(
            (e) => {
                var t;
                if (null == a && 0 === e)
                    return (0, r.jsx)(
                        o.$jN,
                        {
                            className: C.spinner,
                            type: o.$jN.Type.SPINNING_CIRCLE,
                        },
                        "spinner",
                    );
                let i = l[e],
                    s = null == a ? void 0 : a.get(null != (t = null == i ? void 0 : i.id) ? t : "");
                if (null != i && null != s)
                    return (0, r.jsx)(
                        I,
                        {
                            user: i,
                            ban: s,
                            guild: n,
                        },
                        i.id,
                    );
            },
            [a, n, l],
        );
    return (0, r.jsx)(m.Z, {
        role: "listbox",
        listPadding: [8, 8, 8, 8],
        rowCount: l.length,
        rowHeight: s,
        renderRow: c,
        ref: t,
    });
});
function T(e) {
    let { guildId: t, storedSearchQuery: n } = e,
        [l, a] = i.useState(null != n ? n : ""),
        [s, c] = i.useState(!1),
        u = i.useCallback(() => {
            b.Z.setSection(v.pNK.SAFETY), (0, j.K)(_.u.DM_AND_SPAM_PROTECTION);
        }, []),
        g = i.useCallback((e) => {
            a(e), 0 === e.trim().length && b.Z.setSearchQuery(e);
        }, []),
        m = i.useCallback(() => {
            a(""), b.Z.setSearchQuery("");
        }, []),
        f = i.useCallback(async () => {
            if (0 === l.trim().length) {
                b.Z.setSearchQuery(l), c(!1);
                return;
            }
            if (!s)
                try {
                    c(!0);
                    let [e, n] = (0, p.C)(l),
                        r = e[0];
                    b.Z.setSearchQuery(l), await d.Z.searchGuildBans(t, r, n), c(!1);
                } catch (e) {
                    c(!1);
                }
        }, [t, s, l]),
        h = i.useCallback(
            (e) => {
                "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), f());
            },
            [f],
        );
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                children: O.intl.string(O.t["7OY0gJ"]),
            }),
            (0, r.jsx)("div", {
                className: C.settingsHeader,
                children: (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    className: C.description,
                    children: O.intl.format(O.t.JcZ36i, { onModerationClick: u }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: C.bansSearchContainer,
                children: [
                    (0, r.jsx)(o.E1j, {
                        query: null != l ? l : "",
                        placeholder: O.intl.string(O.t.MiqUmf),
                        "aria-label": O.intl.string(O.t.MiqUmf),
                        onChange: g,
                        onKeyDown: h,
                        onClear: m,
                    }),
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: C.searchButton,
                        children: (0, r.jsx)(o.Button, {
                            variant: "primary",
                            text: O.intl.string(O.t["5h0QOP"]),
                            onClick: f,
                            disabled: s,
                            loading: s,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function P() {
    var e, t;
    let { guild: c, searchQuery: m } = (0, s.e7)([x.Z], () => x.Z.getProps(), [], l.isEqual),
        b = null != m && m.trim().length > 0,
        j = (0, u.Z)(b),
        _ = b !== j,
        [y] = (0, s.e7)([x.Z], () => x.Z.getBans(), [], h.Q),
        I = null != (e = null == y ? void 0 : y.size) ? e : 0,
        P = (0, g.ZP)(),
        w = null != (t = null == c ? void 0 : c.id) ? t : v.lds,
        Z = i.useRef(null),
        R = i.useCallback(
            (e) =>
                null == e || 0 === e.length
                    ? (e) => null != e
                    : (t) => {
                          if (null == t || 0 === e.trim().length) return !1;
                          let [[n], r] = (0, p.C)(e);
                          return (
                              !!r.includes(t.id) ||
                              (null != n &&
                                  !!(
                                      t.username.toLowerCase().includes(n.toLowerCase()) ||
                                      (null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase()))
                                  ))
                          );
                      },
            [],
        ),
        D = i.useCallback(
            (e, t, n) => {
                if (null == e || 0 === n) return [];
                let r = [];
                for (let n of e.keys()) {
                    let e = f.default.getUser(n);
                    null != e && R(t)(e) && r.push(e);
                }
                return r;
            },
            [R],
        ),
        A = i.useMemo(() => D(y, m, I), [y, D, m, I]),
        L = null != y,
        k = A.length % 1000 == 0 && A.length > 0 && L,
        G = 0 === A.length,
        [M, U] = i.useState({
            currentPage: 1,
            pageSize: 100,
        });
    i.useEffect(() => {
        _ && 1 !== M.currentPage && U((e) => E(N({}, e), { currentPage: 1 }));
    }, [_, M.currentPage]);
    let B = i.useCallback(
            (e) => {
                d.Z.fetchGuildBansBatch(w, 1000, e);
            },
            [w],
        ),
        F = i.useMemo(() => a().chunk(A, M.pageSize), [M.pageSize, A]),
        H = i.useCallback(
            (e) => {
                var t, n, r;
                null == (t = Z.current) || t.scrollToSectionTop(0),
                    (e + 1) * M.pageSize > A.length &&
                        k &&
                        !b &&
                        ((W.current = null != (r = null == (n = A[A.length - 1]) ? void 0 : n.id) ? r : null),
                        B(W.current)),
                    (null != F[e - 1] || k) && U((t) => E(N({}, t), { currentPage: e }));
            },
            [M.pageSize, A, k, F, B, b],
        ),
        W = i.useRef(null);
    i.useEffect(() => {
        B(W.current);
    }, [B]);
    let z = i.useMemo(() => {
        var e;
        return null != (e = F[M.currentPage - 1]) ? e : [];
    }, [F, M.currentPage]);
    return null == c
        ? null
        : (0, r.jsxs)("div", {
              className: C.container,
              children: [
                  (0, r.jsx)(T, {
                      guildId: w,
                      storedSearchQuery: m,
                  }),
                  (0, r.jsxs)("div", {
                      className: C.scrollerContainer,
                      children: [
                          !G &&
                              (0, r.jsx)(S, {
                                  guild: c,
                                  bans: y,
                                  sortedBans: z,
                                  ref: Z,
                              }),
                          !k &&
                              G &&
                              (0, r.jsxs)(o.ubH, {
                                  theme: P,
                                  className: C.emptyState,
                                  children: [
                                      (0, r.jsx)(o.oxh, {
                                          darkSrc: n(532747),
                                          lightSrc: n(433466),
                                          width: 256,
                                          height: 212,
                                      }),
                                      (0, r.jsx)(o.OZU, {
                                          note: O.intl.string(O.t.zfCsAw),
                                          style: { maxWidth: 300 },
                                          children: O.intl.string(O.t.ZEiY1D),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)(o.DsT, {
                          className: C.paginationInput,
                          totalCount: A.length + (k ? M.pageSize : 0),
                          pageSize: M.pageSize,
                          currentPage: M.currentPage,
                          onPageChange: H,
                          maxVisiblePages: 9,
                      }),
                  }),
              ],
          });
}
