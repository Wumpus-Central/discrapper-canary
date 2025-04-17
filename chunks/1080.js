n.d(t, { Z: () => L }), n(388685), n(781311), n(953529), n(539854);
var r = n(200651),
    i = n(192379),
    s = n(392711),
    l = n.n(s),
    a = n(399606),
    o = n(481060),
    c = n(239091),
    d = n(749210),
    u = n(479531),
    m = n(110924),
    g = n(410030),
    p = n(367907),
    h = n(906732),
    f = n(118012),
    x = n(218867),
    b = n(733026),
    j = n(246946),
    N = n(594174),
    _ = n(626135),
    v = n(136015),
    O = n(51144),
    C = n(434404),
    y = n(999382),
    I = n(84613),
    E = n(740903),
    S = n(981631),
    T = n(388032),
    P = n(260797);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
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
function D(e) {
    var t;
    let { transitionState: n, guild: s, user: l, ban: a, hideDiscriminator: c, onClose: m } = e,
        [g, x] = i.useState(!1),
        [b, j] = i.useState(null),
        { analyticsLocations: N } = (0, h.ZP)(),
        v = null != (t = null == N ? void 0 : N[0]) ? t : null;
    async function C() {
        if (null != s) {
            j(null), x(!0);
            try {
                await d.Z.unbanUser(s.id, l.id),
                    m(),
                    _.default.track(
                        S.rMx.GUILD_BAN_REMOVED,
                        Z(R({}, (0, p.hH)(s.id)), {
                            target_user_id: l.id,
                            reason: a.reason,
                            location: v
                        })
                    );
            } catch (e) {
                j(new u.Z(e)), x(!1);
            }
        }
    }
    return (0, r.jsxs)(o.Y0X, {
        className: P.bannedUserModal,
        transitionState: n,
        children: [
            (0, r.jsxs)(o.xBx, {
                className: P.header,
                separator: !1,
                children: [
                    (0, r.jsx)(f.Z, {
                        size: f.Z.Sizes.SIZE_24,
                        className: P.userUsername,
                        children: O.ZP.getUserTag(l, {
                            mode: 'username',
                            identifiable: c ? 'never' : 'always'
                        })
                    }),
                    c || l.isPomelo()
                        ? null
                        : (0, r.jsxs)(f.Z, {
                              size: f.Z.Sizes.SIZE_24,
                              className: P.userDiscrim,
                              children: ['#', l.discriminator]
                          })
                ]
            }),
            (0, r.jsxs)(o.hzk, {
                className: P.content,
                children: [
                    (0, r.jsx)(o.Text, {
                        className: P.reasonHeader,
                        variant: 'text-md/medium',
                        children: T.NW.string(T.t['9Ki66O'])
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-secondary',
                        children: null != a.reason && '' !== a.reason ? a.reason : T.NW.string(T.t['t+2Zcn'])
                    }),
                    null != b
                        ? (0, r.jsx)(o.Text, {
                              className: P.error,
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: b.getAnyErrorMessage()
                          })
                        : null
                ]
            }),
            (0, r.jsxs)(o.mzw, {
                className: P.footer,
                children: [
                    (0, r.jsx)(o.zxk, {
                        onClick: m,
                        children: T.NW.string(T.t.i4jeWV)
                    }),
                    (0, r.jsx)(o.zxk, {
                        onClick: C,
                        look: o.zxk.Looks.LINK,
                        color: o.zxk.Colors.RED,
                        submitting: g,
                        children: T.NW.string(T.t.UPcIa2)
                    })
                ]
            })
        ]
    });
}
class A extends i.PureComponent {
    render() {
        var e;
        let { user: t, guild: n } = this.props;
        return (0, r.jsxs)(o.P3F, {
            className: P.bannedUser,
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, r.jsx)(o.qEK, {
                    src: t.getAvatarURL(null == n ? void 0 : n.id, 40),
                    'aria-label': t.username,
                    size: o.EFr.SIZE_40,
                    className: P.bannedUserAvatar
                }),
                (0, r.jsxs)('div', {
                    className: P.username,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: null != (e = t.globalName) ? e : t.username
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: null != t.globalName ? t.username : null
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            w(this, 'handleShowModal', () => {
                let { guild: e, user: t, hideDiscriminator: n, ban: i } = this.props;
                (0, o.h7j)((s) =>
                    (0, r.jsx)(
                        D,
                        Z(R({}, s), {
                            guild: e,
                            user: t,
                            ban: i,
                            hideDiscriminator: n
                        })
                    )
                );
            }),
            w(this, 'handleContextMenu', (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('23835').then(n.bind(n, 768079));
                    return (t) => (0, r.jsx)(e, Z(R({}, t), { user: this.props.user }));
                });
            });
    }
}
let k = i.forwardRef(function (e, t) {
    let { guild: n, sortedBans: s, bans: l } = e,
        c = (0, a.e7)([j.Z], () => j.Z.hidePersonalInformation, []),
        d = i.useCallback(
            (e) => {
                var t;
                if (null == l && 0 === e) return 60;
                let n = s[e],
                    r = null == l ? void 0 : l.get(null != (t = null == n ? void 0 : n.id) ? t : '');
                return 60 * (null != n && null != r);
            },
            [l, s]
        ),
        u = i.useCallback(
            (e) => {
                var t;
                if (null == l && 0 === e)
                    return (0, r.jsx)(
                        o.$jN,
                        {
                            className: P.spinner,
                            type: o.$jN.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let i = s[e],
                    a = null == l ? void 0 : l.get(null != (t = null == i ? void 0 : i.id) ? t : '');
                if (null != i && null != a)
                    return (0, r.jsx)(
                        A,
                        {
                            user: i,
                            ban: a,
                            hideDiscriminator: c,
                            guild: n
                        },
                        i.id
                    );
            },
            [l, n, s, c]
        );
    return (0, r.jsx)(x.Z, {
        role: 'listbox',
        listPadding: [8, 8, 8, 8],
        rowCount: s.length,
        rowHeight: d,
        renderRow: u,
        ref: t
    });
});
function W(e) {
    let { guildId: t, storedSearchQuery: n } = e,
        [s, l] = i.useState(null != n ? n : ''),
        [a, c] = i.useState(!1),
        u = i.useCallback(() => {
            C.Z.setSection(S.pNK.SAFETY), (0, I.K)(E.u.DM_AND_SPAM_PROTECTION);
        }, []),
        m = i.useCallback((e) => {
            l(e), 0 === e.trim().length && C.Z.setSearchQuery(e);
        }, []),
        g = i.useCallback(() => {
            l(''), C.Z.setSearchQuery('');
        }, []),
        p = i.useCallback(async () => {
            if (0 === s.trim().length) {
                C.Z.setSearchQuery(s), c(!1);
                return;
            }
            if (!a)
                try {
                    c(!0);
                    let [e, n] = (0, b.C)(s),
                        r = e[0];
                    C.Z.setSearchQuery(s), await d.Z.searchGuildBans(t, r, n), c(!1);
                } catch (e) {
                    c(!1);
                }
        }, [t, a, s]),
        h = i.useCallback(
            (e) => {
                'Enter' === e.key && (e.preventDefault(), e.stopPropagation(), p());
            },
            [p]
        );
    return (0, r.jsxs)(
        o.hjN,
        {
            tag: o.RB0.H1,
            title: T.NW.string(T.t['7OY0gI']),
            children: [
                (0, r.jsx)('div', {
                    className: P.settingsHeader,
                    children: (0, r.jsx)(o.R94, {
                        type: o.geA.DESCRIPTION,
                        className: P.description,
                        children: T.NW.format(T.t.JcZ36u, { onModerationClick: u })
                    })
                }),
                (0, r.jsxs)('div', {
                    className: P.bansSearchContainer,
                    children: [
                        (0, r.jsx)(o.E1j, {
                            className: P.searchBar,
                            query: null != s ? s : '',
                            placeholder: T.NW.string(T.t.MiqUmZ),
                            'aria-label': T.NW.string(T.t.MiqUmZ),
                            onChange: m,
                            onKeyDown: h,
                            onClear: g,
                            size: o.E1j.Sizes.MEDIUM,
                            isLoading: a
                        }),
                        (0, r.jsx)(o.zxk, {
                            color: o.zxk.Colors.BRAND,
                            onClick: p,
                            size: o.zxk.Sizes.SMALL,
                            disabled: a,
                            submitting: a,
                            className: P.searchButton,
                            children: T.NW.string(T.t['5h0QOD'])
                        })
                    ]
                })
            ]
        },
        'bans-header'
    );
}
function L() {
    var e, t;
    let { guild: c, searchQuery: u } = (0, a.e7)([y.Z], () => y.Z.getProps(), [], s.isEqual),
        p = null != u && u.trim().length > 0,
        h = (0, m.Z)(p),
        f = p !== h,
        [x] = (0, a.e7)([y.Z], () => y.Z.getBans(), [], v.Q),
        j = null != (e = null == x ? void 0 : x.size) ? e : 0,
        _ = (0, g.ZP)(),
        O = null != (t = null == c ? void 0 : c.id) ? t : S.lds,
        C = i.useRef(null),
        I = i.useCallback(
            (e) =>
                null == e || 0 === e.length
                    ? (e) => null != e
                    : (t) => {
                          if (null == t || 0 === e.trim().length) return !1;
                          let [[n], r] = (0, b.C)(e);
                          return !!r.includes(t.id) || (null != n && !!(t.username.toLowerCase().includes(n.toLowerCase()) || (null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase()))));
                      },
            []
        ),
        E = i.useCallback(
            (e, t, n) => {
                if (null == e || 0 === n) return [];
                let r = [];
                for (let n of e.keys()) {
                    let e = N.default.getUser(n);
                    null != e && I(t)(e) && r.push(e);
                }
                return r;
            },
            [I]
        ),
        w = i.useMemo(() => E(x, u, j), [x, E, u, j]),
        D = null != x,
        A = w.length % 1000 == 0 && w.length > 0 && D,
        L = 0 === w.length,
        [M, G] = i.useState({
            currentPage: 1,
            pageSize: 100
        });
    i.useEffect(() => {
        f && 1 !== M.currentPage && G((e) => Z(R({}, e), { currentPage: 1 }));
    }, [f, M.currentPage]);
    let U = i.useCallback(
            (e) => {
                d.Z.fetchGuildBansBatch(O, 1000, e);
            },
            [O]
        ),
        B = i.useMemo(() => l().chunk(w, M.pageSize), [M.pageSize, w]),
        F = i.useCallback(
            (e) => {
                var t, n, r;
                null == (t = C.current) || t.scrollToSectionTop(0), (e + 1) * M.pageSize > w.length && A && !p && ((z.current = null != (r = null == (n = w[w.length - 1]) ? void 0 : n.id) ? r : null), U(z.current)), (null != B[e - 1] || A) && G((t) => Z(R({}, t), { currentPage: e }));
            },
            [M.pageSize, w, A, B, U, p]
        ),
        z = i.useRef(null);
    i.useEffect(() => {
        U(z.current);
    }, [U]);
    let H = i.useMemo(() => {
        var e;
        return null != (e = B[M.currentPage - 1]) ? e : [];
    }, [B, M.currentPage]);
    return null == c
        ? null
        : (0, r.jsxs)('div', {
              className: P.container,
              children: [
                  (0, r.jsx)(W, {
                      guildId: O,
                      storedSearchQuery: u
                  }),
                  (0, r.jsxs)('div', {
                      className: P.scrollerContainer,
                      children: [
                          !L &&
                              (0, r.jsx)(k, {
                                  guild: c,
                                  bans: x,
                                  sortedBans: H,
                                  ref: C
                              }),
                          !A &&
                              L &&
                              (0, r.jsxs)(o.ubH, {
                                  theme: _,
                                  className: P.emptyState,
                                  children: [
                                      (0, r.jsx)(o.oxh, {
                                          darkSrc: n(532747),
                                          lightSrc: n(433466),
                                          width: 256,
                                          height: 212
                                      }),
                                      (0, r.jsx)(o.OZU, {
                                          note: T.NW.string(T.t.zfCsAw),
                                          style: { maxWidth: 300 },
                                          children: T.NW.string(T.t.ZEiY1N)
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: P.__invalid_paginationContainer,
                      children: (0, r.jsx)(o.DsT, {
                          className: P.paginationInput,
                          totalCount: w.length + (A ? M.pageSize : 0),
                          pageSize: M.pageSize,
                          currentPage: M.currentPage,
                          onPageChange: F,
                          maxVisiblePages: 9
                      })
                  })
              ]
          });
}
