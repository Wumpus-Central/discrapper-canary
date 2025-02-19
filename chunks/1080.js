n.d(t, { Z: () => U }), n(47120), n(566702), n(266796), n(653041);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(399606),
    d = n(481060),
    u = n(239091),
    m = n(749210),
    p = n(479531),
    g = n(110924),
    h = n(410030),
    f = n(367907),
    b = n(906732),
    x = n(118012),
    j = n(218867),
    N = n(733026),
    v = n(246946),
    _ = n(594174),
    O = n(626135),
    y = n(136015),
    C = n(51144),
    I = n(434404),
    E = n(999382),
    S = n(84613),
    T = n(740903),
    P = n(981631),
    w = n(388032),
    R = n(81250);
function D(e, t, n) {
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
function Z(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function k(e) {
    var t;
    let { transitionState: n, guild: s, user: a, ban: l, hideDiscriminator: o, onClose: c } = e,
        [u, g] = i.useState(!1),
        [h, j] = i.useState(null),
        { analyticsLocations: N } = (0, b.ZP)(),
        v = null !== (t = null == N ? void 0 : N[0]) && void 0 !== t ? t : null;
    async function _() {
        if (null != s) {
            j(null), g(!0);
            try {
                await m.Z.unbanUser(s.id, a.id),
                    c(),
                    O.default.track(
                        P.rMx.GUILD_BAN_REMOVED,
                        A(Z({}, (0, f.hH)(s.id)), {
                            target_user_id: a.id,
                            reason: l.reason,
                            location: v
                        })
                    );
            } catch (e) {
                j(new p.Z(e)), g(!1);
            }
        }
    }
    return (0, r.jsxs)(d.Y0X, {
        className: R.bannedUserModal,
        transitionState: n,
        children: [
            (0, r.jsxs)(d.xBx, {
                className: R.header,
                separator: !1,
                children: [
                    (0, r.jsx)(x.Z, {
                        size: x.Z.Sizes.SIZE_24,
                        className: R.userUsername,
                        children: C.ZP.getUserTag(a, {
                            mode: 'username',
                            identifiable: o ? 'never' : 'always'
                        })
                    }),
                    o || a.isPomelo()
                        ? null
                        : (0, r.jsxs)(x.Z, {
                              size: x.Z.Sizes.SIZE_24,
                              className: R.userDiscrim,
                              children: ['#', a.discriminator]
                          })
                ]
            }),
            (0, r.jsxs)(d.hzk, {
                className: R.content,
                children: [
                    (0, r.jsx)(d.Text, {
                        className: R.reasonHeader,
                        variant: 'text-md/medium',
                        children: w.NW.string(w.t['9Ki66O'])
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-secondary',
                        children: null != l.reason && '' !== l.reason ? l.reason : w.NW.string(w.t['t+2Zcn'])
                    }),
                    null != h
                        ? (0, r.jsx)(d.Text, {
                              className: R.error,
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: h.getAnyErrorMessage()
                          })
                        : null
                ]
            }),
            (0, r.jsxs)(d.mzw, {
                className: R.footer,
                children: [
                    (0, r.jsx)(d.zxk, {
                        onClick: c,
                        children: w.NW.string(w.t.i4jeWV)
                    }),
                    (0, r.jsx)(d.zxk, {
                        onClick: _,
                        look: d.zxk.Looks.LINK,
                        color: d.zxk.Colors.RED,
                        submitting: u,
                        children: w.NW.string(w.t.UPcIa2)
                    })
                ]
            })
        ]
    });
}
class W extends i.PureComponent {
    render() {
        let { user: e, hideDiscriminator: t, guild: n } = this.props,
            i = C.ZP.getGlobalName(e);
        return (0, r.jsxs)(d.P3F, {
            className: a()(R.bannedUser),
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, r.jsx)(d.qEK, {
                    src: e.getAvatarURL(null == n ? void 0 : n.id, 40),
                    'aria-label': e.username,
                    size: d.EFr.SIZE_40,
                    className: R.bannedUserAvatar
                }),
                (0, r.jsxs)('div', {
                    className: R.username,
                    children: [
                        C.ZP.getUserTag(e, {
                            mode: 'username',
                            identifiable: t ? 'never' : 'always'
                        }),
                        !t &&
                            !e.isPomelo() &&
                            (0, r.jsxs)('span', {
                                className: R.discrim,
                                children: ['#', e.discriminator]
                            }),
                        e.isPomelo() &&
                            (0, r.jsxs)('span', {
                                className: R.discrim,
                                children: ['(', i, ')']
                            })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            D(this, 'handleShowModal', () => {
                let { guild: e, user: t, hideDiscriminator: n, ban: i } = this.props;
                (0, d.h7j)((s) =>
                    (0, r.jsx)(
                        k,
                        A(Z({}, s), {
                            guild: e,
                            user: t,
                            ban: i,
                            hideDiscriminator: n
                        })
                    )
                );
            }),
            D(this, 'handleContextMenu', (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('23835').then(n.bind(n, 768079));
                    return (t) => (0, r.jsx)(e, A(Z({}, t), { user: this.props.user }));
                });
            });
    }
}
let L = i.forwardRef(function (e, t) {
    let { guild: n, sortedBans: s, bans: a } = e,
        l = (0, c.e7)([v.Z], () => v.Z.hidePersonalInformation, []),
        o = i.useCallback(
            (e) => {
                var t;
                if (null == a && 0 === e) return 60;
                let n = s[e],
                    r = null == a ? void 0 : a.get(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '');
                return 60 * (null != n && null != r);
            },
            [a, s]
        ),
        u = i.useCallback(
            (e) => {
                var t;
                if (null == a && 0 === e)
                    return (0, r.jsx)(
                        d.$jN,
                        {
                            className: R.spinner,
                            type: d.$jN.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let i = s[e],
                    o = null == a ? void 0 : a.get(null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : '');
                if (null != i && null != o)
                    return (0, r.jsx)(
                        W,
                        {
                            user: i,
                            ban: o,
                            hideDiscriminator: l,
                            guild: n
                        },
                        i.id
                    );
            },
            [a, n, s, l]
        );
    return (0, r.jsx)(j.Z, {
        role: 'listbox',
        listPadding: [8, 8, 8, 8],
        rowCount: s.length,
        rowHeight: o,
        renderRow: u,
        ref: t
    });
});
function M(e) {
    let { guildId: t, storedSearchQuery: n } = e,
        [s, a] = i.useState(null != n ? n : ''),
        [l, o] = i.useState(!1),
        c = i.useCallback(() => {
            I.Z.setSection(P.pNK.SAFETY), (0, S.K)(T.u.DM_AND_SPAM_PROTECTION);
        }, []),
        u = i.useCallback((e) => {
            a(e), 0 === e.trim().length && I.Z.setSearchQuery(e);
        }, []),
        p = i.useCallback(() => {
            a(''), I.Z.setSearchQuery('');
        }, []),
        g = i.useCallback(async () => {
            if (0 === s.trim().length) {
                I.Z.setSearchQuery(s), o(!1);
                return;
            }
            if (!l)
                try {
                    o(!0);
                    let [e, n] = (0, N.C)(s),
                        r = e[0];
                    I.Z.setSearchQuery(s), await m.Z.searchGuildBans(t, r, n), o(!1);
                } catch (e) {
                    o(!1);
                }
        }, [t, l, s]),
        h = i.useCallback(
            (e) => {
                'Enter' === e.key && (e.preventDefault(), e.stopPropagation(), g());
            },
            [g]
        );
    return (0, r.jsxs)(
        d.hjN,
        {
            tag: d.RB0.H1,
            title: w.NW.string(w.t['7OY0gI']),
            children: [
                (0, r.jsx)('div', {
                    className: R.settingsHeader,
                    children: (0, r.jsx)(d.R94, {
                        type: d.geA.DESCRIPTION,
                        className: R.description,
                        children: w.NW.format(w.t.JcZ36u, { onModerationClick: c })
                    })
                }),
                (0, r.jsxs)('div', {
                    className: R.bansSearchContainer,
                    children: [
                        (0, r.jsx)(d.E1j, {
                            className: R.searchBar,
                            query: null != s ? s : '',
                            placeholder: w.NW.string(w.t.MiqUmZ),
                            'aria-label': w.NW.string(w.t.MiqUmZ),
                            onChange: u,
                            onKeyDown: h,
                            onClear: p,
                            size: d.E1j.Sizes.MEDIUM,
                            isLoading: l
                        }),
                        (0, r.jsx)(d.zxk, {
                            color: d.zxk.Colors.BRAND,
                            onClick: g,
                            size: d.zxk.Sizes.SMALL,
                            disabled: l,
                            submitting: l,
                            className: R.searchButton,
                            children: w.NW.string(w.t['5h0QOD'])
                        })
                    ]
                })
            ]
        },
        'bans-header'
    );
}
function U() {
    var e, t;
    let { guild: s, searchQuery: u } = (0, c.e7)([E.Z], () => E.Z.getProps(), [], l.isEqual),
        p = null != u && u.trim().length > 0,
        f = (0, g.Z)(p),
        b = p !== f,
        [x] = (0, c.e7)([E.Z], () => E.Z.getBans(), [], y.Q),
        j = null !== (e = null == x ? void 0 : x.size) && void 0 !== e ? e : 0,
        v = (0, h.ZP)(),
        O = null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : P.lds,
        C = i.useRef(null),
        I = i.useCallback(
            (e) =>
                null == e || 0 === e.length
                    ? (e) => null != e
                    : (t) => {
                          if (null == t || 0 === e.trim().length) return !1;
                          let [[n], r] = (0, N.C)(e);
                          return !!r.includes(t.id) || (null != n && !!(t.username.toLowerCase().includes(n.toLowerCase()) || (null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase()))));
                      },
            []
        ),
        S = i.useCallback(
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
        T = i.useMemo(() => S(x, u, j), [x, S, u, j]),
        D = null != x,
        k = T.length % 1000 == 0 && T.length > 0 && D,
        W = 0 === T.length,
        [U, G] = i.useState({
            currentPage: 1,
            pageSize: 100
        });
    i.useEffect(() => {
        b && 1 !== U.currentPage && G((e) => A(Z({}, e), { currentPage: 1 }));
    }, [b, U.currentPage]);
    let B = i.useCallback(
            (e) => {
                m.Z.fetchGuildBansBatch(O, 1000, e);
            },
            [O]
        ),
        F = i.useMemo(() => o().chunk(T, U.pageSize), [U.pageSize, T]),
        z = i.useCallback(
            (e) => {
                var t, n, r;
                null === (t = C.current) || void 0 === t || t.scrollToSectionTop(0), (e + 1) * U.pageSize > T.length && k && !p && ((H.current = null !== (r = null === (n = T[T.length - 1]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : null), B(H.current)), (null != F[e - 1] || k) && G((t) => A(Z({}, t), { currentPage: e }));
            },
            [U.pageSize, T, k, F, B, p]
        ),
        H = i.useRef(null);
    i.useEffect(() => {
        B(H.current);
    }, [B]);
    let V = i.useMemo(() => {
        var e;
        return null !== (e = F[U.currentPage - 1]) && void 0 !== e ? e : [];
    }, [F, U.currentPage]);
    return null == s
        ? null
        : (0, r.jsxs)('div', {
              className: a()(R.container),
              children: [
                  (0, r.jsx)(M, {
                      guildId: O,
                      storedSearchQuery: u
                  }),
                  (0, r.jsxs)('div', {
                      className: a()(R.scrollerContainer),
                      children: [
                          !W &&
                              (0, r.jsx)(L, {
                                  guild: s,
                                  bans: x,
                                  sortedBans: V,
                                  ref: C
                              }),
                          !k &&
                              W &&
                              (0, r.jsxs)(d.ubH, {
                                  theme: v,
                                  className: R.emptyState,
                                  children: [
                                      (0, r.jsx)(d.oxh, {
                                          darkSrc: n(532747),
                                          lightSrc: n(433466),
                                          width: 256,
                                          height: 212
                                      }),
                                      (0, r.jsx)(d.OZU, {
                                          note: w.NW.string(w.t.zfCsAw),
                                          style: { maxWidth: 300 },
                                          children: w.NW.string(w.t.ZEiY1N)
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: a()(R.__invalid_paginationContainer),
                      children: (0, r.jsx)(d.DsT, {
                          className: a()(R.paginationInput),
                          totalCount: T.length + (k ? U.pageSize : 0),
                          pageSize: U.pageSize,
                          currentPage: U.currentPage,
                          onPageChange: z,
                          maxVisiblePages: 9
                      })
                  })
              ]
          });
}
