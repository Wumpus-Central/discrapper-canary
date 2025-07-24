(n.d(t, { Z: () => k }), n(388685), n(781311), n(953529), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(392711),
    s = n.n(l),
    a = n(399606),
    o = n(481060),
    c = n(239091),
    d = n(749210),
    u = n(479531),
    m = n(110924),
    g = n(410030),
    p = n(367907),
    f = n(906732),
    h = n(218867),
    x = n(733026),
    b = n(246946),
    j = n(594174),
    v = n(626135),
    _ = n(136015),
    O = n(51144),
    y = n(434404),
    C = n(999382),
    N = n(84613),
    I = n(740903),
    E = n(981631),
    S = n(388032),
    T = n(260797);
function P(e, t, n) {
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
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            }));
    }
    return e;
}
function R(e, t) {
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
function Z(e) {
    var t;
    let { transitionState: n, guild: l, user: s, ban: a, hideDiscriminator: c, onClose: m } = e,
        [g, h] = i.useState(!1),
        [x, b] = i.useState(null),
        { analyticsLocations: j } = (0, f.ZP)(),
        _ = null != (t = null == j ? void 0 : j[0]) ? t : null;
    async function y() {
        if (null != l) {
            (b(null), h(!0));
            try {
                (await d.Z.unbanUser(l.id, s.id),
                    m(),
                    v.default.track(
                        E.rMx.GUILD_BAN_REMOVED,
                        R(w({}, (0, p.hH)(l.id)), {
                            target_user_id: s.id,
                            reason: a.reason,
                            location: _
                        })
                    ));
            } catch (e) {
                (b(new u.Z(e)), h(!1));
            }
        }
    }
    return (0, r.jsxs)(o.Y0X, {
        className: T.bannedUserModal,
        transitionState: n,
        parentComponent: 'GuildSettingsBansNew',
        children: [
            (0, r.jsxs)(o.xBx, {
                className: T.header,
                separator: !1,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-xl/semibold',
                        className: T.userUsername,
                        children: O.ZP.getUserTag(s, {
                            mode: 'username',
                            identifiable: c ? 'never' : 'always'
                        })
                    }),
                    c || s.isPomelo()
                        ? null
                        : (0, r.jsxs)(o.X6q, {
                              variant: 'heading-xl/semibold',
                              className: T.userDiscrim,
                              children: ['#', s.discriminator]
                          })
                ]
            }),
            (0, r.jsxs)(o.hzk, {
                className: T.content,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        children: S.intl.string(S.t['9Ki66O'])
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-secondary',
                        children: null != a.reason && '' !== a.reason ? a.reason : S.intl.string(S.t['t+2Zcn'])
                    }),
                    null != x
                        ? (0, r.jsx)(o.Text, {
                              className: T.error,
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: x.getAnyErrorMessage()
                          })
                        : null
                ]
            }),
            (0, r.jsx)(o.mzw, {
                className: T.footer,
                children: (0, r.jsxs)(o.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, r.jsx)(o.zxk, {
                            variant: 'primary',
                            text: S.intl.string(S.t.i4jeWV),
                            onClick: m
                        }),
                        (0, r.jsx)(o.zxk, {
                            variant: 'critical-secondary',
                            text: S.intl.string(S.t.UPcIa2),
                            onClick: y,
                            loading: g
                        })
                    ]
                })
            })
        ]
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
                    'aria-label': t.username,
                    size: o.EFr.SIZE_40,
                    className: T.bannedUserAvatar
                }),
                (0, r.jsxs)('div', {
                    className: T.username,
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
        (super(...e),
            P(this, 'handleShowModal', () => {
                let { guild: e, user: t, hideDiscriminator: n, ban: i } = this.props;
                (0, o.h7j)((l) =>
                    (0, r.jsx)(
                        Z,
                        R(w({}, l), {
                            guild: e,
                            user: t,
                            ban: i,
                            hideDiscriminator: n
                        })
                    )
                );
            }),
            P(this, 'handleContextMenu', (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('23835').then(n.bind(n, 768079));
                    return (t) => (0, r.jsx)(e, R(w({}, t), { user: this.props.user }));
                });
            }));
    }
}
let A = i.forwardRef(function (e, t) {
    let { guild: n, sortedBans: l, bans: s } = e,
        c = (0, a.e7)([b.Z], () => b.Z.hidePersonalInformation, []),
        d = i.useCallback(
            (e) => {
                var t;
                if (null == s && 0 === e) return 60;
                let n = l[e],
                    r = null == s ? void 0 : s.get(null != (t = null == n ? void 0 : n.id) ? t : '');
                return 60 * (null != n && null != r);
            },
            [s, l]
        ),
        u = i.useCallback(
            (e) => {
                var t;
                if (null == s && 0 === e)
                    return (0, r.jsx)(
                        o.$jN,
                        {
                            className: T.spinner,
                            type: o.$jN.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let i = l[e],
                    a = null == s ? void 0 : s.get(null != (t = null == i ? void 0 : i.id) ? t : '');
                if (null != i && null != a)
                    return (0, r.jsx)(
                        D,
                        {
                            user: i,
                            ban: a,
                            hideDiscriminator: c,
                            guild: n
                        },
                        i.id
                    );
            },
            [s, n, l, c]
        );
    return (0, r.jsx)(h.Z, {
        role: 'listbox',
        listPadding: [8, 8, 8, 8],
        rowCount: l.length,
        rowHeight: d,
        renderRow: u,
        ref: t
    });
});
function L(e) {
    let { guildId: t, storedSearchQuery: n } = e,
        [l, s] = i.useState(null != n ? n : ''),
        [a, c] = i.useState(!1),
        u = i.useCallback(() => {
            (y.Z.setSection(E.pNK.SAFETY), (0, N.K)(I.u.DM_AND_SPAM_PROTECTION));
        }, []),
        m = i.useCallback((e) => {
            (s(e), 0 === e.trim().length && y.Z.setSearchQuery(e));
        }, []),
        g = i.useCallback(() => {
            (s(''), y.Z.setSearchQuery(''));
        }, []),
        p = i.useCallback(async () => {
            if (0 === l.trim().length) {
                (y.Z.setSearchQuery(l), c(!1));
                return;
            }
            if (!a)
                try {
                    c(!0);
                    let [e, n] = (0, x.C)(l),
                        r = e[0];
                    (y.Z.setSearchQuery(l), await d.Z.searchGuildBans(t, r, n), c(!1));
                } catch (e) {
                    c(!1);
                }
        }, [t, a, l]),
        f = i.useCallback(
            (e) => {
                'Enter' === e.key && (e.preventDefault(), e.stopPropagation(), p());
            },
            [p]
        );
    return (0, r.jsxs)(
        o.hjN,
        {
            tag: o.RB0.H1,
            title: S.intl.string(S.t['7OY0gI']),
            children: [
                (0, r.jsx)('div', {
                    className: T.settingsHeader,
                    children: (0, r.jsx)(o.R94, {
                        type: o.geA.DESCRIPTION,
                        className: T.description,
                        children: S.intl.format(S.t.JcZ36u, { onModerationClick: u })
                    })
                }),
                (0, r.jsxs)('div', {
                    className: T.bansSearchContainer,
                    children: [
                        (0, r.jsx)(o.E1j, {
                            className: T.searchBar,
                            query: null != l ? l : '',
                            placeholder: S.intl.string(S.t.MiqUmZ),
                            'aria-label': S.intl.string(S.t.MiqUmZ),
                            onChange: m,
                            onKeyDown: f,
                            onClear: g,
                            size: o.E1j.Sizes.MEDIUM,
                            isLoading: a
                        }),
                        (0, r.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: T.searchButton,
                            children: (0, r.jsx)(o.zxk, {
                                variant: 'primary',
                                size: 'sm',
                                text: S.intl.string(S.t['5h0QOD']),
                                onClick: p,
                                disabled: a,
                                loading: a
                            })
                        })
                    ]
                })
            ]
        },
        'bans-header'
    );
}
function k() {
    var e, t;
    let { guild: c, searchQuery: u } = (0, a.e7)([C.Z], () => C.Z.getProps(), [], l.isEqual),
        p = null != u && u.trim().length > 0,
        f = (0, m.Z)(p),
        h = p !== f,
        [b] = (0, a.e7)([C.Z], () => C.Z.getBans(), [], _.Q),
        v = null != (e = null == b ? void 0 : b.size) ? e : 0,
        O = (0, g.ZP)(),
        y = null != (t = null == c ? void 0 : c.id) ? t : E.lds,
        N = i.useRef(null),
        I = i.useCallback(
            (e) =>
                null == e || 0 === e.length
                    ? (e) => null != e
                    : (t) => {
                          if (null == t || 0 === e.trim().length) return !1;
                          let [[n], r] = (0, x.C)(e);
                          return !!r.includes(t.id) || (null != n && !!(t.username.toLowerCase().includes(n.toLowerCase()) || (null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase()))));
                      },
            []
        ),
        P = i.useCallback(
            (e, t, n) => {
                if (null == e || 0 === n) return [];
                let r = [];
                for (let n of e.keys()) {
                    let e = j.default.getUser(n);
                    null != e && I(t)(e) && r.push(e);
                }
                return r;
            },
            [I]
        ),
        Z = i.useMemo(() => P(b, u, v), [b, P, u, v]),
        D = null != b,
        k = Z.length % 1000 == 0 && Z.length > 0 && D,
        M = 0 === Z.length,
        [G, U] = i.useState({
            currentPage: 1,
            pageSize: 100
        });
    i.useEffect(() => {
        h && 1 !== G.currentPage && U((e) => R(w({}, e), { currentPage: 1 }));
    }, [h, G.currentPage]);
    let B = i.useCallback(
            (e) => {
                d.Z.fetchGuildBansBatch(y, 1000, e);
            },
            [y]
        ),
        F = i.useMemo(() => s().chunk(Z, G.pageSize), [G.pageSize, Z]),
        H = i.useCallback(
            (e) => {
                var t, n, r;
                (null == (t = N.current) || t.scrollToSectionTop(0), (e + 1) * G.pageSize > Z.length && k && !p && ((z.current = null != (r = null == (n = Z[Z.length - 1]) ? void 0 : n.id) ? r : null), B(z.current)), (null != F[e - 1] || k) && U((t) => R(w({}, t), { currentPage: e })));
            },
            [G.pageSize, Z, k, F, B, p]
        ),
        z = i.useRef(null);
    i.useEffect(() => {
        B(z.current);
    }, [B]);
    let W = i.useMemo(() => {
        var e;
        return null != (e = F[G.currentPage - 1]) ? e : [];
    }, [F, G.currentPage]);
    return null == c
        ? null
        : (0, r.jsxs)('div', {
              className: T.container,
              children: [
                  (0, r.jsx)(L, {
                      guildId: y,
                      storedSearchQuery: u
                  }),
                  (0, r.jsxs)('div', {
                      className: T.scrollerContainer,
                      children: [
                          !M &&
                              (0, r.jsx)(A, {
                                  guild: c,
                                  bans: b,
                                  sortedBans: W,
                                  ref: N
                              }),
                          !k &&
                              M &&
                              (0, r.jsxs)(o.ubH, {
                                  theme: O,
                                  className: T.emptyState,
                                  children: [
                                      (0, r.jsx)(o.oxh, {
                                          darkSrc: n(532747),
                                          lightSrc: n(433466),
                                          width: 256,
                                          height: 212
                                      }),
                                      (0, r.jsx)(o.OZU, {
                                          note: S.intl.string(S.t.zfCsAw),
                                          style: { maxWidth: 300 },
                                          children: S.intl.string(S.t.ZEiY1N)
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: T.__invalid_paginationContainer,
                      children: (0, r.jsx)(o.DsT, {
                          className: T.paginationInput,
                          totalCount: Z.length + (k ? G.pageSize : 0),
                          pageSize: G.pageSize,
                          currentPage: G.currentPage,
                          onPageChange: H,
                          maxVisiblePages: 9
                      })
                  })
              ]
          });
}
