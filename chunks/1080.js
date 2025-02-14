n.d(t, { Z: () => M }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(399606),
    d = n(481060),
    u = n(239091),
    m = n(749210),
    h = n(479531),
    g = n(110924),
    x = n(410030),
    p = n(367907),
    _ = n(906732),
    C = n(118012),
    f = n(218867),
    v = n(733026),
    N = n(246946),
    j = n(594174),
    I = n(626135),
    E = n(136015),
    b = n(51144),
    T = n(434404),
    S = n(999382),
    R = n(84613),
    Z = n(740903),
    y = n(981631),
    A = n(388032),
    L = n(167099);
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
function O(e) {
    var t;
    let { transitionState: n, guild: l, user: s, ban: a, hideDiscriminator: o, onClose: c } = e,
        [u, g] = r.useState(!1),
        [x, f] = r.useState(null),
        { analyticsLocations: v } = (0, _.ZP)(),
        N = null !== (t = null == v ? void 0 : v[0]) && void 0 !== t ? t : null;
    async function j() {
        if (null != l) {
            f(null), g(!0);
            try {
                await m.Z.unbanUser(l.id, s.id),
                    c(),
                    I.default.track(y.rMx.GUILD_BAN_REMOVED, {
                        ...(0, p.hH)(l.id),
                        target_user_id: s.id,
                        reason: a.reason,
                        location: N
                    });
            } catch (e) {
                f(new h.Z(e)), g(!1);
            }
        }
    }
    return (0, i.jsxs)(d.Y0X, {
        className: L.bannedUserModal,
        transitionState: n,
        children: [
            (0, i.jsxs)(d.xBx, {
                className: L.header,
                separator: !1,
                children: [
                    (0, i.jsx)(C.Z, {
                        size: C.Z.Sizes.SIZE_24,
                        className: L.userUsername,
                        children: b.ZP.getUserTag(s, {
                            mode: 'username',
                            identifiable: o ? 'never' : 'always'
                        })
                    }),
                    o || s.isPomelo()
                        ? null
                        : (0, i.jsxs)(C.Z, {
                              size: C.Z.Sizes.SIZE_24,
                              className: L.userDiscrim,
                              children: ['#', s.discriminator]
                          })
                ]
            }),
            (0, i.jsxs)(d.hzk, {
                className: L.content,
                children: [
                    (0, i.jsx)(d.Text, {
                        className: L.reasonHeader,
                        variant: 'text-md/medium',
                        children: A.intl.string(A.t['9Ki66O'])
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-secondary',
                        children: null != a.reason && '' !== a.reason ? a.reason : A.intl.string(A.t['t+2Zcn'])
                    }),
                    null != x
                        ? (0, i.jsx)(d.Text, {
                              className: L.error,
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: x.getAnyErrorMessage()
                          })
                        : null
                ]
            }),
            (0, i.jsxs)(d.mzw, {
                className: L.footer,
                children: [
                    (0, i.jsx)(d.zxk, {
                        onClick: c,
                        children: A.intl.string(A.t.i4jeWV)
                    }),
                    (0, i.jsx)(d.zxk, {
                        onClick: j,
                        look: d.zxk.Looks.LINK,
                        color: d.zxk.Colors.RED,
                        submitting: u,
                        children: A.intl.string(A.t.UPcIa2)
                    })
                ]
            })
        ]
    });
}
class k extends r.PureComponent {
    render() {
        let { user: e, hideDiscriminator: t, guild: n } = this.props,
            r = b.ZP.getGlobalName(e);
        return (0, i.jsxs)(d.P3F, {
            className: s()(L.bannedUser),
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, i.jsx)(d.qEK, {
                    src: e.getAvatarURL(null == n ? void 0 : n.id, 40),
                    'aria-label': e.username,
                    size: d.EFr.SIZE_40,
                    className: L.bannedUserAvatar
                }),
                (0, i.jsxs)('div', {
                    className: L.username,
                    children: [
                        b.ZP.getUserTag(e, {
                            mode: 'username',
                            identifiable: t ? 'never' : 'always'
                        }),
                        !t &&
                            !e.isPomelo() &&
                            (0, i.jsxs)('span', {
                                className: L.discrim,
                                children: ['#', e.discriminator]
                            }),
                        e.isPomelo() &&
                            (0, i.jsxs)('span', {
                                className: L.discrim,
                                children: ['(', r, ')']
                            })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            D(this, 'handleShowModal', () => {
                let { guild: e, user: t, hideDiscriminator: n, ban: r } = this.props;
                (0, d.h7j)((l) =>
                    (0, i.jsx)(O, {
                        ...l,
                        guild: e,
                        user: t,
                        ban: r,
                        hideDiscriminator: n
                    })
                );
            }),
            D(this, 'handleContextMenu', (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('23835').then(n.bind(n, 768079));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            user: this.props.user
                        });
                });
            });
    }
}
let P = r.forwardRef(function (e, t) {
    let { guild: n, sortedBans: l, bans: s } = e,
        a = (0, c.e7)([N.Z], () => N.Z.hidePersonalInformation, []),
        o = r.useCallback(
            (e) => {
                var t;
                if (null == s && 0 === e) return 60;
                let n = l[e],
                    i = null == s ? void 0 : s.get(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '');
                return null == n || null == i ? 0 : 60;
            },
            [s, l]
        ),
        u = r.useCallback(
            (e) => {
                var t;
                if (null == s && 0 === e)
                    return (0, i.jsx)(
                        d.$jN,
                        {
                            className: L.spinner,
                            type: d.$jN.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let r = l[e],
                    o = null == s ? void 0 : s.get(null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : '');
                if (null != r && null != o)
                    return (0, i.jsx)(
                        k,
                        {
                            user: r,
                            ban: o,
                            hideDiscriminator: a,
                            guild: n
                        },
                        r.id
                    );
            },
            [s, n, l, a]
        );
    return (0, i.jsx)(f.Z, {
        role: 'listbox',
        listPadding: [8, 8, 8, 8],
        rowCount: l.length,
        rowHeight: o,
        renderRow: u,
        ref: t
    });
});
function w(e) {
    let { guildId: t, storedSearchQuery: n } = e,
        [l, s] = r.useState(null != n ? n : ''),
        [a, o] = r.useState(!1),
        c = r.useCallback(() => {
            T.Z.setSection(y.pNK.SAFETY), (0, R.K)(Z.u.DM_AND_SPAM_PROTECTION);
        }, []),
        u = r.useCallback((e) => {
            s(e), 0 === e.trim().length && T.Z.setSearchQuery(e);
        }, []),
        h = r.useCallback(() => {
            s(''), T.Z.setSearchQuery('');
        }, []),
        g = r.useCallback(async () => {
            if (0 === l.trim().length) {
                T.Z.setSearchQuery(l), o(!1);
                return;
            }
            if (!a)
                try {
                    o(!0);
                    let [e, n] = (0, v.C)(l),
                        i = e[0];
                    T.Z.setSearchQuery(l), await m.Z.searchGuildBans(t, i, n), o(!1);
                } catch (e) {
                    o(!1);
                }
        }, [t, a, l]),
        x = r.useCallback(
            (e) => {
                'Enter' === e.key && (e.preventDefault(), e.stopPropagation(), g());
            },
            [g]
        );
    return (0, i.jsxs)(
        d.hjN,
        {
            tag: d.RB0.H1,
            title: A.intl.string(A.t['7OY0gI']),
            children: [
                (0, i.jsx)('div', {
                    className: L.settingsHeader,
                    children: (0, i.jsx)(d.R94, {
                        type: d.geA.DESCRIPTION,
                        className: L.description,
                        children: A.intl.format(A.t.JcZ36u, { onModerationClick: c })
                    })
                }),
                (0, i.jsxs)('div', {
                    className: L.bansSearchContainer,
                    children: [
                        (0, i.jsx)(d.E1j, {
                            className: L.searchBar,
                            query: null != l ? l : '',
                            placeholder: A.intl.string(A.t.MiqUmZ),
                            'aria-label': A.intl.string(A.t.MiqUmZ),
                            onChange: u,
                            onKeyDown: x,
                            onClear: h,
                            size: d.E1j.Sizes.MEDIUM,
                            isLoading: a
                        }),
                        (0, i.jsx)(d.zxk, {
                            color: d.zxk.Colors.BRAND,
                            onClick: g,
                            size: d.zxk.Sizes.SMALL,
                            disabled: a,
                            submitting: a,
                            className: L.searchButton,
                            children: A.intl.string(A.t['5h0QOD'])
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
    let { guild: l, searchQuery: u } = (0, c.e7)([S.Z], () => S.Z.getProps(), [], a.isEqual),
        h = null != u && u.trim().length > 0,
        p = (0, g.Z)(h),
        _ = h !== p,
        [C] = (0, c.e7)([S.Z], () => S.Z.getBans(), [], E.Q),
        f = null !== (e = null == C ? void 0 : C.size) && void 0 !== e ? e : 0,
        N = (0, x.ZP)(),
        I = null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : y.lds,
        b = r.useRef(null),
        T = r.useCallback(
            (e) =>
                null == e || 0 === e.length
                    ? (e) => null != e
                    : (t) => {
                          if (null == t || 0 === e.trim().length) return !1;
                          let [[n], i] = (0, v.C)(e);
                          return !!i.includes(t.id) || (null != n && !!(t.username.toLowerCase().includes(n.toLowerCase()) || (null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase()))));
                      },
            []
        ),
        R = r.useCallback(
            (e, t, n) => {
                if (null == e || 0 === n) return [];
                let i = [];
                for (let n of e.keys()) {
                    let e = j.default.getUser(n);
                    null != e && T(t)(e) && i.push(e);
                }
                return i;
            },
            [T]
        ),
        Z = r.useMemo(() => R(C, u, f), [C, R, u, f]),
        D = null != C,
        O = Z.length % 1000 == 0 && Z.length > 0 && D,
        k = 0 === Z.length,
        [M, U] = r.useState({
            currentPage: 1,
            pageSize: 100
        });
    r.useEffect(() => {
        _ &&
            1 !== M.currentPage &&
            U((e) => ({
                ...e,
                currentPage: 1
            }));
    }, [_, M.currentPage]);
    let G = r.useCallback(
            (e) => {
                m.Z.fetchGuildBansBatch(I, 1000, e);
            },
            [I]
        ),
        B = r.useMemo(() => o().chunk(Z, M.pageSize), [M.pageSize, Z]),
        F = r.useCallback(
            (e) => {
                var t, n, i;
                null === (t = b.current) || void 0 === t || t.scrollToSectionTop(0),
                    (e + 1) * M.pageSize > Z.length && O && !h && ((z.current = null !== (i = null === (n = Z[Z.length - 1]) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null), G(z.current)),
                    (null != B[e - 1] || O) &&
                        U((t) => ({
                            ...t,
                            currentPage: e
                        }));
            },
            [M.pageSize, Z, O, B, G, h]
        ),
        z = r.useRef(null);
    r.useEffect(() => {
        G(z.current);
    }, [G]);
    let H = r.useMemo(() => {
        var e;
        return null !== (e = B[M.currentPage - 1]) && void 0 !== e ? e : [];
    }, [B, M.currentPage]);
    return null == l
        ? null
        : (0, i.jsxs)('div', {
              className: s()(L.container),
              children: [
                  (0, i.jsx)(w, {
                      guildId: I,
                      storedSearchQuery: u
                  }),
                  (0, i.jsxs)('div', {
                      className: s()(L.scrollerContainer),
                      children: [
                          !k &&
                              (0, i.jsx)(P, {
                                  guild: l,
                                  bans: C,
                                  sortedBans: H,
                                  ref: b
                              }),
                          !O &&
                              k &&
                              (0, i.jsxs)(d.ubH, {
                                  theme: N,
                                  className: L.emptyState,
                                  children: [
                                      (0, i.jsx)(d.oxh, {
                                          darkSrc: n(532747),
                                          lightSrc: n(433466),
                                          width: 256,
                                          height: 212
                                      }),
                                      (0, i.jsx)(d.OZU, {
                                          note: A.intl.string(A.t.zfCsAw),
                                          style: { maxWidth: 300 },
                                          children: A.intl.string(A.t.ZEiY1N)
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: s()(L.__invalid_paginationContainer),
                      children: (0, i.jsx)(d.DsT, {
                          className: s()(L.paginationInput),
                          totalCount: Z.length + (O ? M.pageSize : 0),
                          pageSize: M.pageSize,
                          currentPage: M.currentPage,
                          onPageChange: F,
                          maxVisiblePages: 9
                      })
                  })
              ]
          });
}
