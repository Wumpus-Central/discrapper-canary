n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120),
    n(653041);
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
    f = n(906732),
    C = n(118012),
    v = n(218867),
    I = n(733026),
    N = n(246946),
    _ = n(594174),
    T = n(626135),
    j = n(136015),
    b = n(51144),
    E = n(434404),
    S = n(999382),
    R = n(84613),
    y = n(740903),
    A = n(981631),
    Z = n(388032),
    L = n(996381);
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
        [x, v] = r.useState(null),
        { analyticsLocations: I } = (0, f.ZP)(),
        N = null !== (t = null == I ? void 0 : I[0]) && void 0 !== t ? t : null;
    async function _() {
        if (null != l) {
            v(null), g(!0);
            try {
                await m.Z.unbanUser(l.id, s.id),
                    c(),
                    T.default.track(A.rMx.GUILD_BAN_REMOVED, {
                        ...(0, p.hH)(l.id),
                        target_user_id: s.id,
                        reason: a.reason,
                        location: N
                    });
            } catch (e) {
                v(new h.Z(e)), g(!1);
            }
        }
    }
    return (0, i.jsxs)(d.ModalRoot, {
        className: L.bannedUserModal,
        transitionState: n,
        children: [
            (0, i.jsxs)(d.ModalHeader, {
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
            (0, i.jsxs)(d.ModalContent, {
                className: L.content,
                children: [
                    (0, i.jsx)(d.Text, {
                        className: L.reasonHeader,
                        variant: 'text-md/medium',
                        children: Z.intl.string(Z.t['9Ki66O'])
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-secondary',
                        children: null != a.reason && '' !== a.reason ? a.reason : Z.intl.string(Z.t['t+2Zcn'])
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
            (0, i.jsxs)(d.ModalFooter, {
                className: L.footer,
                children: [
                    (0, i.jsx)(d.Button, {
                        onClick: c,
                        children: Z.intl.string(Z.t.i4jeWV)
                    }),
                    (0, i.jsx)(d.Button, {
                        onClick: _,
                        look: d.Button.Looks.LINK,
                        color: d.Button.Colors.RED,
                        submitting: u,
                        children: Z.intl.string(Z.t.UPcIa2)
                    })
                ]
            })
        ]
    });
}
class M extends r.PureComponent {
    render() {
        let { user: e, hideDiscriminator: t, guild: n } = this.props,
            r = b.ZP.getGlobalName(e);
        return (0, i.jsxs)(d.Clickable, {
            className: s()(L.bannedUser),
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, i.jsx)(d.Avatar, {
                    src: e.getAvatarURL(null == n ? void 0 : n.id, 40),
                    'aria-label': e.username,
                    size: d.AvatarSizes.SIZE_40,
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
                (0, d.openModal)((l) =>
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
                        d.Spinner,
                        {
                            className: L.spinner,
                            type: d.Spinner.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let r = l[e],
                    o = null == s ? void 0 : s.get(null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : '');
                if (null != r && null != o)
                    return (0, i.jsx)(
                        M,
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
    return (0, i.jsx)(v.Z, {
        role: 'listbox',
        listPadding: [8, 8, 8, 8],
        rowCount: l.length,
        rowHeight: o,
        renderRow: u,
        ref: t
    });
});
function k(e) {
    let { guildId: t, storedSearchQuery: n } = e,
        [l, s] = r.useState(null != n ? n : ''),
        [a, o] = r.useState(!1),
        c = r.useCallback(() => {
            E.Z.setSection(A.pNK.SAFETY), (0, R.K)(y.u.DM_AND_SPAM_PROTECTION);
        }, []),
        u = r.useCallback((e) => {
            s(e), 0 === e.trim().length && E.Z.setSearchQuery(e);
        }, []),
        h = r.useCallback(() => {
            s(''), E.Z.setSearchQuery('');
        }, []),
        g = r.useCallback(async () => {
            if (0 === l.trim().length) {
                E.Z.setSearchQuery(l), o(!1);
                return;
            }
            if (!a)
                try {
                    o(!0);
                    let [e, n] = (0, I.C)(l),
                        i = e[0];
                    E.Z.setSearchQuery(l), await m.Z.searchGuildBans(t, i, n), o(!1);
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
        d.FormSection,
        {
            tag: d.FormTitleTags.H1,
            title: Z.intl.string(Z.t['7OY0gI']),
            children: [
                (0, i.jsx)('div', {
                    className: L.settingsHeader,
                    children: (0, i.jsx)(d.FormText, {
                        type: d.FormTextTypes.DESCRIPTION,
                        className: L.description,
                        children: Z.intl.format(Z.t.JcZ36u, { onModerationClick: c })
                    })
                }),
                (0, i.jsxs)('div', {
                    className: L.bansSearchContainer,
                    children: [
                        (0, i.jsx)(d.SearchBar, {
                            className: L.searchBar,
                            query: null != l ? l : '',
                            placeholder: Z.intl.string(Z.t.MiqUmZ),
                            'aria-label': Z.intl.string(Z.t.MiqUmZ),
                            onChange: u,
                            onKeyDown: x,
                            onClear: h,
                            size: d.SearchBar.Sizes.MEDIUM,
                            isLoading: a
                        }),
                        (0, i.jsx)(d.Button, {
                            color: d.Button.Colors.BRAND,
                            onClick: g,
                            size: d.Button.Sizes.SMALL,
                            disabled: a,
                            submitting: a,
                            className: L.searchButton,
                            children: Z.intl.string(Z.t['5h0QOD'])
                        })
                    ]
                })
            ]
        },
        'bans-header'
    );
}
function w() {
    var e, t;
    let { guild: l, searchQuery: u } = (0, c.e7)([S.Z], () => S.Z.getProps(), [], a.isEqual),
        h = null != u && u.trim().length > 0,
        p = (0, g.Z)(h),
        f = h !== p,
        [C] = (0, c.e7)([S.Z], () => S.Z.getBans(), [], j.Q),
        v = null !== (e = null == C ? void 0 : C.size) && void 0 !== e ? e : 0,
        N = (0, x.ZP)(),
        T = null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : A.lds,
        b = r.useRef(null),
        E = r.useCallback(
            (e) =>
                null == e || 0 === e.length
                    ? (e) => null != e
                    : (t) => {
                          if (null == t || 0 === e.trim().length) return !1;
                          let [[n], i] = (0, I.C)(e);
                          return !!i.includes(t.id) || (null != n && (!!(t.username.toLowerCase().includes(n.toLowerCase()) || (null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase()))) || !1));
                      },
            []
        ),
        R = r.useCallback(
            (e, t, n) => {
                if (null == e || 0 === n) return [];
                let i = [];
                for (let n of e.keys()) {
                    let e = _.default.getUser(n);
                    null != e && E(t)(e) && i.push(e);
                }
                return i;
            },
            [E]
        ),
        y = r.useMemo(() => R(C, u, v), [C, R, u, v]),
        D = null != C,
        O = y.length % 1000 == 0 && y.length > 0 && D,
        M = 0 === y.length,
        [w, B] = r.useState({
            currentPage: 1,
            pageSize: 100
        });
    r.useEffect(() => {
        f &&
            1 !== w.currentPage &&
            B((e) => ({
                ...e,
                currentPage: 1
            }));
    }, [f, w.currentPage]);
    let U = r.useCallback(
            (e) => {
                m.Z.fetchGuildBansBatch(T, 1000, e);
            },
            [T]
        ),
        G = r.useMemo(() => o().chunk(y, w.pageSize), [w.pageSize, y]),
        F = r.useCallback(
            (e) => {
                var t, n, i;
                if ((null === (t = b.current) || void 0 === t || t.scrollToSectionTop(0), (e + 1) * w.pageSize > y.length && O && !h && ((H.current = null !== (i = null === (n = y[y.length - 1]) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null), U(H.current)), null != G[e - 1] || !!O))
                    B((t) => ({
                        ...t,
                        currentPage: e
                    }));
            },
            [w.pageSize, y, O, G, U, h]
        ),
        H = r.useRef(null);
    r.useEffect(() => {
        U(H.current);
    }, [U]);
    let z = r.useMemo(() => {
        var e;
        return null !== (e = G[w.currentPage - 1]) && void 0 !== e ? e : [];
    }, [G, w.currentPage]);
    return null == l
        ? null
        : (0, i.jsxs)('div', {
              className: s()(L.container),
              children: [
                  (0, i.jsx)(k, {
                      guildId: T,
                      storedSearchQuery: u
                  }),
                  (0, i.jsxs)('div', {
                      className: s()(L.scrollerContainer),
                      children: [
                          !M &&
                              (0, i.jsx)(P, {
                                  guild: l,
                                  bans: C,
                                  sortedBans: z,
                                  ref: b
                              }),
                          !O &&
                              M &&
                              (0, i.jsxs)(d.EmptyState, {
                                  theme: N,
                                  className: L.emptyState,
                                  children: [
                                      (0, i.jsx)(d.EmptyStateImage, {
                                          darkSrc: n(532747),
                                          lightSrc: n(433466),
                                          width: 256,
                                          height: 212
                                      }),
                                      (0, i.jsx)(d.EmptyStateText, {
                                          note: Z.intl.string(Z.t.zfCsAw),
                                          style: { maxWidth: 300 },
                                          children: Z.intl.string(Z.t.ZEiY1N)
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: s()(L.__invalid_paginationContainer),
                      children: (0, i.jsx)(d.Paginator, {
                          className: s()(L.paginationInput),
                          totalCount: y.length + (O ? w.pageSize : 0),
                          pageSize: w.pageSize,
                          currentPage: w.currentPage,
                          onPageChange: F,
                          maxVisiblePages: 9
                      })
                  })
              ]
          });
}
