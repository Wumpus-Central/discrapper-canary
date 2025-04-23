n.d(t, { Z: () => M }), n(388685), n(781311), n(953529), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    s = n.n(l),
    a = n(399606),
    o = n(481060),
    c = n(239091),
    u = n(749210),
    d = n(479531),
    m = n(110924),
    g = n(410030),
    p = n(367907),
    f = n(906732),
    h = n(118012),
    x = n(218867),
    b = n(733026),
    j = n(246946),
    _ = n(594174),
    v = n(626135),
    O = n(136015),
    C = n(51144),
    y = n(434404),
    N = n(999382),
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
    let { transitionState: n, guild: l, user: s, ban: a, hideDiscriminator: c, onClose: m } = e,
        [g, x] = i.useState(!1),
        [b, j] = i.useState(null),
        { analyticsLocations: _ } = (0, f.ZP)(),
        O = null != (t = null == _ ? void 0 : _[0]) ? t : null;
    async function y() {
        if (null != l) {
            j(null), x(!0);
            try {
                await u.Z.unbanUser(l.id, s.id),
                    m(),
                    v.default.track(
                        S.rMx.GUILD_BAN_REMOVED,
                        Z(R({}, (0, p.hH)(l.id)), {
                            target_user_id: s.id,
                            reason: a.reason,
                            location: O
                        })
                    );
            } catch (e) {
                j(new d.Z(e)), x(!1);
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
                    (0, r.jsx)(h.Z, {
                        size: h.Z.Sizes.SIZE_24,
                        className: P.userUsername,
                        children: C.ZP.getUserTag(s, {
                            mode: 'username',
                            identifiable: c ? 'never' : 'always'
                        })
                    }),
                    c || s.isPomelo()
                        ? null
                        : (0, r.jsxs)(h.Z, {
                              size: h.Z.Sizes.SIZE_24,
                              className: P.userDiscrim,
                              children: ['#', s.discriminator]
                          })
                ]
            }),
            (0, r.jsxs)(o.hzk, {
                className: P.content,
                children: [
                    (0, r.jsx)(o.Text, {
                        className: P.reasonHeader,
                        variant: 'text-md/medium',
                        children: T.intl.string(T.t['9Ki66O'])
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-secondary',
                        children: null != a.reason && '' !== a.reason ? a.reason : T.intl.string(T.t['t+2Zcn'])
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
                        children: T.intl.string(T.t.i4jeWV)
                    }),
                    (0, r.jsx)(o.zxk, {
                        onClick: y,
                        look: o.zxk.Looks.LINK,
                        color: o.zxk.Colors.RED,
                        submitting: g,
                        children: T.intl.string(T.t.UPcIa2)
                    })
                ]
            })
        ]
    });
}
class k extends i.PureComponent {
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
                (0, o.h7j)((l) =>
                    (0, r.jsx)(
                        D,
                        Z(R({}, l), {
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
let A = i.forwardRef(function (e, t) {
    let { guild: n, sortedBans: l, bans: s } = e,
        c = (0, a.e7)([j.Z], () => j.Z.hidePersonalInformation, []),
        u = i.useCallback(
            (e) => {
                var t;
                if (null == s && 0 === e) return 60;
                let n = l[e],
                    r = null == s ? void 0 : s.get(null != (t = null == n ? void 0 : n.id) ? t : '');
                return 60 * (null != n && null != r);
            },
            [s, l]
        ),
        d = i.useCallback(
            (e) => {
                var t;
                if (null == s && 0 === e)
                    return (0, r.jsx)(
                        o.$jN,
                        {
                            className: P.spinner,
                            type: o.$jN.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let i = l[e],
                    a = null == s ? void 0 : s.get(null != (t = null == i ? void 0 : i.id) ? t : '');
                if (null != i && null != a)
                    return (0, r.jsx)(
                        k,
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
    return (0, r.jsx)(x.Z, {
        role: 'listbox',
        listPadding: [8, 8, 8, 8],
        rowCount: l.length,
        rowHeight: u,
        renderRow: d,
        ref: t
    });
});
function L(e) {
    let { guildId: t, storedSearchQuery: n } = e,
        [l, s] = i.useState(null != n ? n : ''),
        [a, c] = i.useState(!1),
        d = i.useCallback(() => {
            y.Z.setSection(S.pNK.SAFETY), (0, I.K)(E.u.DM_AND_SPAM_PROTECTION);
        }, []),
        m = i.useCallback((e) => {
            s(e), 0 === e.trim().length && y.Z.setSearchQuery(e);
        }, []),
        g = i.useCallback(() => {
            s(''), y.Z.setSearchQuery('');
        }, []),
        p = i.useCallback(async () => {
            if (0 === l.trim().length) {
                y.Z.setSearchQuery(l), c(!1);
                return;
            }
            if (!a)
                try {
                    c(!0);
                    let [e, n] = (0, b.C)(l),
                        r = e[0];
                    y.Z.setSearchQuery(l), await u.Z.searchGuildBans(t, r, n), c(!1);
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
            title: T.intl.string(T.t['7OY0gI']),
            children: [
                (0, r.jsx)('div', {
                    className: P.settingsHeader,
                    children: (0, r.jsx)(o.R94, {
                        type: o.geA.DESCRIPTION,
                        className: P.description,
                        children: T.intl.format(T.t.JcZ36u, { onModerationClick: d })
                    })
                }),
                (0, r.jsxs)('div', {
                    className: P.bansSearchContainer,
                    children: [
                        (0, r.jsx)(o.E1j, {
                            className: P.searchBar,
                            query: null != l ? l : '',
                            placeholder: T.intl.string(T.t.MiqUmZ),
                            'aria-label': T.intl.string(T.t.MiqUmZ),
                            onChange: m,
                            onKeyDown: f,
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
                            children: T.intl.string(T.t['5h0QOD'])
                        })
                    ]
                })
            ]
        },
        'bans-header'
    );
}
function M() {
    var e, t;
    let { guild: c, searchQuery: d } = (0, a.e7)([N.Z], () => N.Z.getProps(), [], l.isEqual),
        p = null != d && d.trim().length > 0,
        f = (0, m.Z)(p),
        h = p !== f,
        [x] = (0, a.e7)([N.Z], () => N.Z.getBans(), [], O.Q),
        j = null != (e = null == x ? void 0 : x.size) ? e : 0,
        v = (0, g.ZP)(),
        C = null != (t = null == c ? void 0 : c.id) ? t : S.lds,
        y = i.useRef(null),
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
                    let e = _.default.getUser(n);
                    null != e && I(t)(e) && r.push(e);
                }
                return r;
            },
            [I]
        ),
        w = i.useMemo(() => E(x, d, j), [x, E, d, j]),
        D = null != x,
        k = w.length % 1000 == 0 && w.length > 0 && D,
        M = 0 === w.length,
        [G, U] = i.useState({
            currentPage: 1,
            pageSize: 100
        });
    i.useEffect(() => {
        h && 1 !== G.currentPage && U((e) => Z(R({}, e), { currentPage: 1 }));
    }, [h, G.currentPage]);
    let B = i.useCallback(
            (e) => {
                u.Z.fetchGuildBansBatch(C, 1000, e);
            },
            [C]
        ),
        F = i.useMemo(() => s().chunk(w, G.pageSize), [G.pageSize, w]),
        z = i.useCallback(
            (e) => {
                var t, n, r;
                null == (t = y.current) || t.scrollToSectionTop(0), (e + 1) * G.pageSize > w.length && k && !p && ((H.current = null != (r = null == (n = w[w.length - 1]) ? void 0 : n.id) ? r : null), B(H.current)), (null != F[e - 1] || k) && U((t) => Z(R({}, t), { currentPage: e }));
            },
            [G.pageSize, w, k, F, B, p]
        ),
        H = i.useRef(null);
    i.useEffect(() => {
        B(H.current);
    }, [B]);
    let W = i.useMemo(() => {
        var e;
        return null != (e = F[G.currentPage - 1]) ? e : [];
    }, [F, G.currentPage]);
    return null == c
        ? null
        : (0, r.jsxs)('div', {
              className: P.container,
              children: [
                  (0, r.jsx)(L, {
                      guildId: C,
                      storedSearchQuery: d
                  }),
                  (0, r.jsxs)('div', {
                      className: P.scrollerContainer,
                      children: [
                          !M &&
                              (0, r.jsx)(A, {
                                  guild: c,
                                  bans: x,
                                  sortedBans: W,
                                  ref: y
                              }),
                          !k &&
                              M &&
                              (0, r.jsxs)(o.ubH, {
                                  theme: v,
                                  className: P.emptyState,
                                  children: [
                                      (0, r.jsx)(o.oxh, {
                                          darkSrc: n(532747),
                                          lightSrc: n(433466),
                                          width: 256,
                                          height: 212
                                      }),
                                      (0, r.jsx)(o.OZU, {
                                          note: T.intl.string(T.t.zfCsAw),
                                          style: { maxWidth: 300 },
                                          children: T.intl.string(T.t.ZEiY1N)
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: P.__invalid_paginationContainer,
                      children: (0, r.jsx)(o.DsT, {
                          className: P.paginationInput,
                          totalCount: w.length + (k ? G.pageSize : 0),
                          pageSize: G.pageSize,
                          currentPage: G.currentPage,
                          onPageChange: z,
                          maxVisiblePages: 9
                      })
                  })
              ]
          });
}
