(n.d(t, {
    FT: () => K,
    L3: () => Y,
    ZP: () => J
}),
    n(388685),
    n(583741));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(772848),
    m = n(442837),
    g = n(755721),
    p = n(481060),
    h = n(668781),
    f = n(80932),
    x = n(225433),
    b = n(599059),
    j = n(327802),
    v = n(110924),
    _ = n(200876),
    O = n(556019),
    y = n(748523),
    C = n(730089),
    N = n(372444),
    I = n(889564),
    E = n(372129),
    S = n(357156),
    T = n(210887),
    P = n(626135),
    w = n(768581),
    R = n(176354),
    Z = n(267642),
    D = n(51144),
    A = n(434404),
    k = n(471613),
    L = n(999382),
    M = n(981631),
    G = n(185923),
    U = n(388032),
    B = n(808574),
    F = n(588866);
function H(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let z = d().throttle(f.OQ, 1000),
    W = (e) => {
        let { guildId: t, emoji: n, onEdit: l, editingDisabled: s = !1 } = e,
            [o, c] = i.useState(n.name),
            d = w.ZP.getEmojiURL({
                id: n.id,
                animated: n.animated,
                size: 32
            }),
            u = D.ZP.useUserTag(n.user);
        return (0, r.jsxs)('div', {
            className: a()(B.emojiRow, F.card),
            children: [
                (0, r.jsx)('div', {
                    className: B.emojiColumn,
                    children: (0, r.jsx)(p.ua7, {
                        text: n.available ? null : U.intl.string(U.t['KUzI7+']),
                        children: (e) => {
                            var t, i;
                            return (0, r.jsx)(
                                'div',
                                ((t = H({}, e)),
                                (i = i =
                                    {
                                        className: a()(B.emojiImage, { [B.emojiDisabled]: !n.available }),
                                        style: { backgroundImage: 'url('.concat(d, ')') }
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                t)
                            );
                        }
                    })
                }),
                (0, r.jsx)('div', {
                    className: B.column,
                    children: (0, r.jsx)('div', {
                        className: B.emojiAliasInputContainer,
                        children: (0, r.jsx)(b.Z, {
                            className: a()({ [B.emojiAliasInputDisabled]: s }),
                            disabled: s,
                            minLen: 1,
                            maxLen: G.Yc,
                            name: U.intl.string(U.t.qUpzYG),
                            autoComplete: 'off',
                            value: null != o ? o : '',
                            onBlur: () => {
                                if (o !== n.name) {
                                    let e = R.ZP.sanitizeEmojiName(o);
                                    (e !== n.name &&
                                        (0, f.dv)({
                                            guildId: t,
                                            emojiId: n.id,
                                            name: e
                                        }),
                                        c(e));
                                }
                            },
                            onChange: (e) => {
                                c(e.target.value);
                            }
                        })
                    })
                }),
                (0, r.jsxs)('div', {
                    className: B.column,
                    children: [
                        (0, r.jsx)(p.qEK, {
                            src: n.user.getAvatarURL(t, 20),
                            'aria-label': u,
                            size: p.EFr.SIZE_20
                        }),
                        (0, r.jsx)(p.R94, {
                            className: B.emojiRowText,
                            children: u
                        })
                    ]
                }),
                null != l &&
                    !s &&
                    (0, r.jsx)(p.P3F, {
                        'aria-label': U.intl.string(U.t.bt75u7),
                        className: B.editEmojiRolesButton,
                        onClick: () => l(n, t),
                        children: (0, r.jsx)(p.vdY, {
                            size: 'md',
                            color: 'currentColor',
                            className: B.editEmojiRolesIcon
                        })
                    }),
                !s &&
                    (0, r.jsx)(x.Z, {
                        className: B.emojiRemove,
                        onClick: () => {
                            (0, f.RE)(t, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t &&
                                    h.Z.show({
                                        title: U.intl.string(U.t.iufib2),
                                        body: U.intl.string(U.t['Whhv4+'])
                                    });
                            });
                        }
                    })
            ]
        });
    },
    V = (e) => {
        let { isLoading: t, staticEmojis: i, animatedEmojis: l, theme: a, guild: s } = e;
        return t
            ? (0, r.jsx)(p.$jN, {
                  className: B.spinner,
                  type: p.$jN.Type.SPINNING_CIRCLE
              })
            : 0 === i.length && 0 === l.length
              ? (0, r.jsxs)(p.ubH, {
                    theme: a,
                    className: B.empty,
                    children: [
                        (0, r.jsx)(p.oxh, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212
                        }),
                        (0, r.jsx)(p.OZU, {
                            note: U.intl.string(U.t.RBbtMz),
                            children: U.intl.string(U.t.lxsmBQ)
                        })
                    ]
                })
              : (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(Y, {
                            title: U.intl.string(U.t.sMOuub),
                            maxSlots: (0, Z.y4)(s),
                            emojiCount: i.length
                        }),
                        (0, r.jsx)(K, {
                            emojis: i,
                            guild: s
                        }),
                        (0, r.jsx)(Y, {
                            title: U.intl.string(U.t.wWjQyc),
                            maxSlots: (0, Z.y4)(s),
                            emojiCount: l.length
                        }),
                        (0, r.jsx)(K, {
                            emojis: l,
                            guild: s
                        })
                    ]
                });
    },
    Y = (e) => {
        let { title: t, maxSlots: n, emojiCount: i } = e,
            l = Math.max(n - i, 0);
        return (0, r.jsxs)(p.vwX, {
            tag: p.RB0.H2,
            className: B.title,
            children: [
                t,
                (0, r.jsxs)('span', {
                    children: [' \u2014 ', U.intl.format(U.t.sgL8sL, { count: l })]
                })
            ]
        });
    },
    K = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: a = !1 } = e,
            s = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: o } = (0, S.Gw)(n);
        return 0 === t.length
            ? (0, r.jsx)(p.R94, {
                  type: p.geA.DESCRIPTION,
                  className: B.content,
                  children: U.intl.string(U.t.SpxYoa)
              })
            : (0, r.jsxs)(p.hjN, {
                  className: B.content,
                  children: [
                      (0, r.jsxs)('div', {
                          className: B.emojiTable,
                          children: [
                              (0, r.jsx)(p.R94, {
                                  type: p.geA.DESCRIPTION,
                                  className: B.emojiColumn,
                                  children: U.intl.string(U.t.Z0i3Gh)
                              }),
                              (0, r.jsx)(p.R94, {
                                  type: p.geA.DESCRIPTION,
                                  className: B.columnLabel,
                                  children: U.intl.string(U.t.giajw8)
                              }),
                              (0, r.jsx)(p.R94, {
                                  type: p.geA.DESCRIPTION,
                                  className: B.columnLabel,
                                  children: U.intl.string(U.t.edavpq)
                              })
                          ]
                      }),
                      s.map((e) =>
                          (0, r.jsx)(
                              W,
                              {
                                  guildId: n.id,
                                  emoji: e,
                                  onEdit: l,
                                  editingDisabled: a || !o(e)
                              },
                              e.id
                          )
                      )
                  ]
              });
    },
    q = (e) => {
        let t,
            n,
            i,
            { staticEmojiCount: l, animatedEmojiCount: a, guild: s } = e,
            o = (0, Z.y4)(s),
            c = Math.min(o - l, o - a),
            d = s.premiumTier,
            u = (0, Z.FZ)(d);
        return null == u || d === M.Eu4.TIER_3 || c > 0
            ? null
            : (c > o ? ((t = U.intl.formatToPlainString(U.t.j0UH0t, { level: u })), (n = U.intl.formatToPlainString(U.t.VQeyKy, { level: u })), (i = M.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL)) : ((t = U.intl.string(U.t.zT9Sxc)), (n = U.intl.formatToPlainString(U.t.dBZ1RU, { level: u })), (i = M.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(N.Z, {
                  header: t,
                  text: n,
                  guild: s,
                  analyticsLocation: {
                      page: M.ZY5.GUILD_SETTINGS,
                      section: M.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, Z.ge)(u)
                  }
              }));
    },
    X = () =>
        (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(p.vwX, {
                    tag: p.RB0.H2,
                    className: B.emojiUploadUploadRequirementsHeading,
                    children: U.intl.string(U.t.jrXfy8)
                }),
                (0, r.jsxs)('ul', {
                    className: B.emojiUploadUploadRequirementsList,
                    children: [
                        (0, r.jsx)('li', {
                            children: (0, r.jsx)(p.R94, {
                                type: p.geA.DESCRIPTION,
                                children: U.intl.string(U.t.N2qTQ0)
                            })
                        }),
                        (0, r.jsx)('li', {
                            children: (0, r.jsx)(p.R94, {
                                type: p.geA.DESCRIPTION,
                                children: U.intl.format(U.t.gfAXoa, { maxSize: G.xG })
                            })
                        }),
                        (0, r.jsx)('li', {
                            children: (0, r.jsx)(p.R94, {
                                type: p.geA.DESCRIPTION,
                                children: U.intl.string(U.t.rnwKPD)
                            })
                        }),
                        (0, r.jsx)('li', {
                            children: (0, r.jsx)(p.R94, {
                                type: p.geA.DESCRIPTION,
                                children: U.intl.string(U.t['8Vr5QU'])
                            })
                        })
                    ]
                })
            ]
        }),
    J = () => {
        let e = (0, m.e7)([L.Z], () => L.Z.getGuild()),
            [t, l] = i.useState('');
        o()(null != e, 'ConnectedGuildSettingsEmoji must be rendered within a guild context');
        let a = (0, m.e7)([T.Z], () => T.Z.theme),
            { canCreateExpressions: s } = (0, S.XJ)(e),
            { revision: c, emojis: h } = (0, m.cj)([k.Z], () => ({
                revision: k.Z.getEmojiRevision(e.id),
                emojis: k.Z.getEmojis(e.id)
            })),
            f = (0, v.Z)(c),
            [x, b] = i.useState(!1),
            [N, w] = i.useState(!1),
            R = i.useRef(null),
            D = (0, Z.y4)(e),
            [G, F] = i.useMemo(() => {
                let t = null == h ? void 0 : h.filter((t) => !(0, I.Kt)(t, e.id)),
                    [n, r] = d().partition(t, (e) => !e.animated);
                return [n, r];
            }, [h, e.id]),
            W = Math.max(D - G.length, D - F.length),
            { enabled: Y } = (0, O.qt)({
                location: 'guild_settings',
                autoTrackExposure: !0
            });
        (i.useEffect(() => {
            x && $();
        }, [x]),
            i.useEffect(() => {
                z(e.id);
            }, [e.id]),
            i.useEffect(() => {
                null != f && f < c && z(e.id);
            }, [c, f, e.id]));
        let K = i.useCallback(
                () =>
                    (0, y.i)({
                        analyticsLocation: {
                            page: M.ZY5.GUILD_SETTINGS,
                            section: M.jXE.GUILD_SETTINGS_EMOJI_ADD_BUTTON
                        }
                    }),
                []
            ),
            J = (n, r, i) =>
                (0, C.G)({
                    data: n,
                    file: r,
                    image: i,
                    guildId: e.id,
                    uploadId: t,
                    hideErrorModal: !0,
                    analyticsLocation: { page: M.ZY5.GUILD_SETTINGS }
                }),
            Q = async (n) => {
                (l((0, u.Z)()),
                    P.default.track(M.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: e.id,
                        upload_id: t
                    }),
                    await (0, E._j)(n, J),
                    b(!0));
            },
            $ = () => {
                null !== R.current && ((0, p.Mr3)(R.current), (R.current = null));
            },
            ee = async (e) => {
                R.current = await (0, p.ZDy)(async () => {
                    let { default: t } = await n.e('16169').then(n.bind(n, 935333));
                    return (n) => (0, r.jsx)(t, H({ processFiles: () => Q(e) }, n));
                });
            },
            et = (0, _.l)(e);
        return (0, r.jsxs)('div', {
            className: B.emojiSettings,
            children: [
                0 === W
                    ? null
                    : (0, r.jsx)(j.Z, {
                          className: B.emojiUploadContainer,
                          onDrop: ee
                      }),
                (0, r.jsxs)(p.hjN, {
                    tag: p.RB0.H1,
                    title: U.intl.string(U.t.sMOuub),
                    children: [
                        (0, r.jsx)(q, {
                            guild: e,
                            staticEmojiCount: G.length,
                            animatedEmojiCount: F.length
                        }),
                        (0, r.jsxs)(p.hjN, {
                            className: B.uploader,
                            children: [
                                (0, r.jsx)(p.R94, {
                                    type: p.geA.DESCRIPTION,
                                    children: U.intl.format(U.t.TA1BR0, { count: D })
                                }),
                                et &&
                                    (0, r.jsx)(p.R94, {
                                        type: p.geA.DESCRIPTION,
                                        children: U.intl.format(U.t.uMkfTk, { onClick: () => A.Z.open(e.id, M.pNK.ROLE_SUBSCRIPTIONS, void 0, M.KsC.ROLE_SUBSCRIPTION_EMOJI) })
                                    }),
                                Y
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(p.zxk, {
                                                  variant: 'primary',
                                                  text: U.intl.string(U.t.DU0dy8),
                                                  onClick: K,
                                                  disabled: 0 === W
                                              }),
                                              (0, r.jsx)(p.Text, {
                                                  variant: 'text-xs/normal',
                                                  children: U.intl.string(U.t.EgNCTk)
                                              })
                                          ]
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(X, {}),
                                              (0, r.jsxs)(g.zx, {
                                                  tabIndex: -1,
                                                  size: g.zx.Sizes.MEDIUM,
                                                  onClick: () => {
                                                      let t = (0, u.Z)();
                                                      (l(t),
                                                          P.default.track(M.rMx.EMOJI_UPLOAD_STARTED, {
                                                              guild_id: e.id,
                                                              upload_id: t
                                                          }));
                                                  },
                                                  disabled: N || 0 === W || !s,
                                                  submitting: N,
                                                  focusProps: { within: !0 },
                                                  children: [
                                                      U.intl.string(U.t.DU0dy8),
                                                      W > 0
                                                          ? (0, r.jsx)(E.ZP, {
                                                                disabled: N || 0 === W || !s,
                                                                tabIndex: 0,
                                                                onChange: J,
                                                                setLoading: w,
                                                                multiple: !0
                                                            })
                                                          : null
                                                  ]
                                              })
                                          ]
                                      })
                            ]
                        }),
                        (0, r.jsx)(V, {
                            isLoading: null == h,
                            staticEmojis: G,
                            animatedEmojis: F,
                            guild: e,
                            theme: a
                        })
                    ]
                })
            ]
        });
    };
