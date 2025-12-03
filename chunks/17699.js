n.d(t, { Z: () => k }), n(388685), n(781311), n(953529), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(399606),
    o = n(481060),
    c = n(239091),
    u = n(749210),
    d = n(479531),
    g = n(110924),
    m = n(410030),
    p = n(367907),
    f = n(906732),
    h = n(218867),
    b = n(733026),
    x = n(246946),
    j = n(594174),
    _ = n(626135),
    v = n(136015),
    O = n(51144),
    C = n(434404),
    y = n(999382),
    N = n(84613),
    E = n(740903),
    I = n(981631),
    S = n(388032),
    T = n(40175);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
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
function R(e) {
    var t;
    let { transitionState: n, guild: l, user: a, ban: s, hideDiscriminator: c, onClose: g } = e,
        [m, h] = i.useState(!1),
        [b, x] = i.useState(null),
        { analyticsLocations: j } = (0, f.ZP)(),
        v = null != (t = null == j ? void 0 : j[0]) ? t : null;
    async function C() {
        if (null != l) {
            x(null), h(!0);
            try {
                await u.Z.unbanUser(l.id, a.id),
                    g(),
                    _.default.track(
                        I.rMx.GUILD_BAN_REMOVED,
                        Z(w({}, (0, p.hH)(l.id)), {
                            target_user_id: a.id,
                            reason: s.reason,
                            location: v,
                        }),
                    );
            } catch (e) {
                x(new d.Z(e)), h(!1);
            }
        }
    }
    return (0, r.jsxs)(o.Y0X, {
        className: T.bannedUserModal,
        transitionState: n,
        parentComponent: "GuildSettingsBans",
        children: [
            (0, r.jsxs)(o.xBx, {
                className: T.header,
                separator: !1,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        className: T.userUsername,
                        children: O.ZP.getUserTag(a, {
                            mode: "username",
                            identifiable: c ? "never" : "always",
                        }),
                    }),
                    c || a.hasUniqueUsername()
                        ? null
                        : (0, r.jsxs)(o.Heading, {
                              variant: "heading-xl/semibold",
                              className: T.userDiscrim,
                              children: ["#", a.discriminator],
                          }),
                ],
            }),
            (0, r.jsxs)(o.hzk, {
                className: T.content,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        children: S.intl.string(S.t["9Ki66N"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: null != s.reason && "" !== s.reason ? s.reason : S.intl.string(S.t["t+2Zci"]),
                    }),
                    null != b
                        ? (0, r.jsx)(o.Text, {
                              className: T.error,
                              color: "text-feedback-critical",
                              variant: "text-sm/normal",
                              children: b.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(o.mzw, {
                className: T.footer,
                children: (0, r.jsxs)(o.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(o.Button, {
                            variant: "primary",
                            text: S.intl.string(S.t.i4jeWR),
                            onClick: g,
                        }),
                        (0, r.jsx)(o.Button, {
                            variant: "critical-secondary",
                            text: S.intl.string(S.t.UPcIa5),
                            onClick: C,
                            loading: m,
                        }),
                    ],
                }),
            }),
        ],
    });
}
class D extends i.PureComponent {
    render() {
        var e;
        let { user: t, guild: n } = this.props;
        return (0, r.jsxs)(o.P3F, {
            className: T.bannedUser,
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, r.jsx)(o.qEK, {
                    src: t.getAvatarURL(null == n ? void 0 : n.id, 40),
                    "aria-label": t.username,
                    size: o.EFr.SIZE_40,
                    className: T.bannedUserAvatar,
                }),
                (0, r.jsxs)("div", {
                    className: T.username,
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
            P(this, "handleShowModal", () => {
                let { guild: e, user: t, hideDiscriminator: n, ban: i } = this.props;
                (0, o.h7j)((l) =>
                    (0, r.jsx)(
                        R,
                        Z(w({}, l), {
                            guild: e,
                            user: t,
                            ban: i,
                            hideDiscriminator: n,
                        }),
                    ),
                );
            }),
            P(this, "handleContextMenu", (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e("23835").then(n.bind(n, 768079));
                    return (t) => (0, r.jsx)(e, Z(w({}, t), { user: this.props.user }));
                });
            });
    }
}
let A = i.forwardRef(function (e, t) {
    let { guild: n, sortedBans: l, bans: a } = e,
        c = (0, s.e7)([x.Z], () => x.Z.hidePersonalInformation, []),
        u = i.useCallback(
            (e) => {
                var t;
                if (null == a && 0 === e) return 60;
                let n = l[e],
                    r = null == a ? void 0 : a.get(null != (t = null == n ? void 0 : n.id) ? t : "");
                return 60 * (null != n && null != r);
            },
            [a, l],
        ),
        d = i.useCallback(
            (e) => {
                var t;
                if (null == a && 0 === e)
                    return (0, r.jsx)(
                        o.$jN,
                        {
                            className: T.spinner,
                            type: o.$jN.Type.SPINNING_CIRCLE,
                        },
                        "spinner",
                    );
                let i = l[e],
                    s = null == a ? void 0 : a.get(null != (t = null == i ? void 0 : i.id) ? t : "");
                if (null != i && null != s)
                    return (0, r.jsx)(
                        D,
                        {
                            user: i,
                            ban: s,
                            hideDiscriminator: c,
                            guild: n,
                        },
                        i.id,
                    );
            },
            [a, n, l, c],
        );
    return (0, r.jsx)(h.Z, {
        role: "listbox",
        listPadding: [8, 8, 8, 8],
        rowCount: l.length,
        rowHeight: u,
        renderRow: d,
        ref: t,
    });
});
function L(e) {
    let { guildId: t, storedSearchQuery: n } = e,
        [l, a] = i.useState(null != n ? n : ""),
        [s, c] = i.useState(!1),
        d = i.useCallback(() => {
            C.Z.setSection(I.pNK.SAFETY), (0, N.K)(E.u.DM_AND_SPAM_PROTECTION);
        }, []),
        g = i.useCallback((e) => {
            a(e), 0 === e.trim().length && C.Z.setSearchQuery(e);
        }, []),
        m = i.useCallback(() => {
            a(""), C.Z.setSearchQuery("");
        }, []),
        p = i.useCallback(async () => {
            if (0 === l.trim().length) {
                C.Z.setSearchQuery(l), c(!1);
                return;
            }
            if (!s)
                try {
                    c(!0);
                    let [e, n] = (0, b.C)(l),
                        r = e[0];
                    C.Z.setSearchQuery(l), await u.Z.searchGuildBans(t, r, n), c(!1);
                } catch (e) {
                    c(!1);
                }
        }, [t, s, l]),
        f = i.useCallback(
            (e) => {
                "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), p());
            },
            [p],
        );
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                children: S.intl.string(S.t["7OY0gJ"]),
            }),
            (0, r.jsx)("div", {
                className: T.settingsHeader,
                children: (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    className: T.description,
                    children: S.intl.format(S.t.JcZ36i, { onModerationClick: d }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: T.bansSearchContainer,
                children: [
                    (0, r.jsx)(o.E1j, {
                        query: null != l ? l : "",
                        placeholder: S.intl.string(S.t.MiqUmf),
                        "aria-label": S.intl.string(S.t.MiqUmf),
                        onChange: g,
                        onKeyDown: f,
                        onClear: m,
                    }),
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T.searchButton,
                        children: (0, r.jsx)(o.Button, {
                            variant: "primary",
                            text: S.intl.string(S.t["5h0QOP"]),
                            onClick: p,
                            disabled: s,
                            loading: s,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function k() {
    var e, t;
    let { guild: c, searchQuery: d } = (0, s.e7)([y.Z], () => y.Z.getProps(), [], l.isEqual),
        p = null != d && d.trim().length > 0,
        f = (0, g.Z)(p),
        h = p !== f,
        [x] = (0, s.e7)([y.Z], () => y.Z.getBans(), [], v.Q),
        _ = null != (e = null == x ? void 0 : x.size) ? e : 0,
        O = (0, m.ZP)(),
        C = null != (t = null == c ? void 0 : c.id) ? t : I.lds,
        N = i.useRef(null),
        E = i.useCallback(
            (e) =>
                null == e || 0 === e.length
                    ? (e) => null != e
                    : (t) => {
                          if (null == t || 0 === e.trim().length) return !1;
                          let [[n], r] = (0, b.C)(e);
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
        P = i.useCallback(
            (e, t, n) => {
                if (null == e || 0 === n) return [];
                let r = [];
                for (let n of e.keys()) {
                    let e = j.default.getUser(n);
                    null != e && E(t)(e) && r.push(e);
                }
                return r;
            },
            [E],
        ),
        R = i.useMemo(() => P(x, d, _), [x, P, d, _]),
        D = null != x,
        k = R.length % 1000 == 0 && R.length > 0 && D,
        G = 0 === R.length,
        [M, U] = i.useState({
            currentPage: 1,
            pageSize: 100,
        });
    i.useEffect(() => {
        h && 1 !== M.currentPage && U((e) => Z(w({}, e), { currentPage: 1 }));
    }, [h, M.currentPage]);
    let B = i.useCallback(
            (e) => {
                u.Z.fetchGuildBansBatch(C, 1000, e);
            },
            [C],
        ),
        F = i.useMemo(() => a().chunk(R, M.pageSize), [M.pageSize, R]),
        H = i.useCallback(
            (e) => {
                var t, n, r;
                null == (t = N.current) || t.scrollToSectionTop(0),
                    (e + 1) * M.pageSize > R.length &&
                        k &&
                        !p &&
                        ((W.current = null != (r = null == (n = R[R.length - 1]) ? void 0 : n.id) ? r : null),
                        B(W.current)),
                    (null != F[e - 1] || k) && U((t) => Z(w({}, t), { currentPage: e }));
            },
            [M.pageSize, R, k, F, B, p],
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
              className: T.container,
              children: [
                  (0, r.jsx)(L, {
                      guildId: C,
                      storedSearchQuery: d,
                  }),
                  (0, r.jsxs)("div", {
                      className: T.scrollerContainer,
                      children: [
                          !G &&
                              (0, r.jsx)(A, {
                                  guild: c,
                                  bans: x,
                                  sortedBans: z,
                                  ref: N,
                              }),
                          !k &&
                              G &&
                              (0, r.jsxs)(o.ubH, {
                                  theme: O,
                                  className: T.emptyState,
                                  children: [
                                      (0, r.jsx)(o.oxh, {
                                          darkSrc: n(532747),
                                          lightSrc: n(433466),
                                          width: 256,
                                          height: 212,
                                      }),
                                      (0, r.jsx)(o.OZU, {
                                          note: S.intl.string(S.t.zfCsAw),
                                          style: { maxWidth: 300 },
                                          children: S.intl.string(S.t.ZEiY1D),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)(o.DsT, {
                          className: T.paginationInput,
                          totalCount: R.length + (k ? M.pageSize : 0),
                          pageSize: M.pageSize,
                          currentPage: M.currentPage,
                          onPageChange: H,
                          maxVisiblePages: 9,
                      }),
                  }),
              ],
          });
}
