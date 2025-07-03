(n.d(t, {
    FT: () => K,
    L3: () => Y,
    ZP: () => Q
}),
    n(388685),
    n(583741),
    n(35282));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(772848),
    m = n(442837),
    g = n(481060),
    p = n(668781),
    f = n(80932),
    h = n(225433),
    x = n(599059),
    b = n(327802),
    j = n(110924),
    _ = n(200876),
    v = n(556019),
    O = n(748523),
    C = n(730089),
    y = n(372444),
    N = n(889564),
    I = n(372129),
    E = n(357156),
    S = n(706454),
    T = n(210887),
    P = n(626135),
    w = n(768581),
    R = n(176354),
    Z = n(267642),
    D = n(51144),
    k = n(434404),
    A = n(471613),
    L = n(999382),
    M = n(981631),
    G = n(185923),
    U = n(388032),
    B = n(808574),
    F = n(588866);
function z(e) {
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
let H = d().throttle(f.OQ, 1000),
    V = (e) => {
        let { guildId: t, emoji: n, onEdit: l, editingDisabled: a = !1 } = e,
            [o, c] = i.useState(n.name),
            d = w.ZP.getEmojiURL({
                id: n.id,
                animated: n.animated,
                size: 32
            }),
            u = D.ZP.useUserTag(n.user);
        return (0, r.jsxs)('div', {
            className: s()(B.emojiRow, F.card),
            children: [
                (0, r.jsx)('div', {
                    className: B.emojiColumn,
                    children: (0, r.jsx)(g.ua7, {
                        text: n.available ? null : U.intl.string(U.t['KUzI7+']),
                        children: (e) => {
                            var t, i;
                            return (0, r.jsx)(
                                'div',
                                ((t = z({}, e)),
                                (i = i =
                                    {
                                        className: s()(B.emojiImage, { [B.emojiDisabled]: !n.available }),
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
                        children: (0, r.jsx)(x.Z, {
                            className: s()({ [B.emojiAliasInputDisabled]: a }),
                            disabled: a,
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
                        (0, r.jsx)(g.qEK, {
                            src: n.user.getAvatarURL(t, 20),
                            'aria-label': u,
                            size: g.EFr.SIZE_20
                        }),
                        (0, r.jsx)(g.R94, {
                            className: B.emojiRowText,
                            children: u
                        })
                    ]
                }),
                null != l &&
                    !a &&
                    (0, r.jsx)(g.P3F, {
                        'aria-label': U.intl.string(U.t.bt75u7),
                        className: B.editEmojiRolesButton,
                        onClick: () => l(n, t),
                        children: (0, r.jsx)(g.vdY, {
                            size: 'md',
                            color: 'currentColor',
                            className: B.editEmojiRolesIcon
                        })
                    }),
                !a &&
                    (0, r.jsx)(h.Z, {
                        className: B.emojiRemove,
                        onClick: () => {
                            (0, f.RE)(t, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t &&
                                    p.Z.show({
                                        title: U.intl.string(U.t.iufib2),
                                        body: U.intl.string(U.t['Whhv4+'])
                                    });
                            });
                        }
                    })
            ]
        });
    },
    W = (e) => {
        let { isLoading: t, staticEmojis: i, animatedEmojis: l, theme: s, guild: a } = e;
        return t
            ? (0, r.jsx)(g.$jN, {
                  className: B.spinner,
                  type: g.$jN.Type.SPINNING_CIRCLE
              })
            : 0 === i.length && 0 === l.length
              ? (0, r.jsxs)(g.ubH, {
                    theme: s,
                    className: B.empty,
                    children: [
                        (0, r.jsx)(g.oxh, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212
                        }),
                        (0, r.jsx)(g.OZU, {
                            note: U.intl.string(U.t.RBbtMz),
                            children: U.intl.string(U.t.lxsmBQ)
                        })
                    ]
                })
              : (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(Y, {
                            title: U.intl.string(U.t.sMOuub),
                            maxSlots: (0, Z.y4)(a),
                            emojiCount: i.length
                        }),
                        (0, r.jsx)(K, {
                            emojis: i,
                            guild: a
                        }),
                        (0, r.jsx)(Y, {
                            title: U.intl.string(U.t.wWjQyc),
                            maxSlots: (0, Z.y4)(a),
                            emojiCount: l.length
                        }),
                        (0, r.jsx)(K, {
                            emojis: l,
                            guild: a
                        })
                    ]
                });
    },
    Y = (e) => {
        let { title: t, maxSlots: n, emojiCount: i } = e,
            l = Math.max(n - i, 0);
        return (0, r.jsxs)(g.vwX, {
            tag: g.RB0.H2,
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
        let { emojis: t, guild: n, onEdit: l, editingDisabled: s = !1 } = e,
            a = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: o } = (0, E.Gw)(n);
        return 0 === t.length
            ? (0, r.jsx)(g.R94, {
                  type: g.geA.DESCRIPTION,
                  className: B.content,
                  children: U.intl.string(U.t.SpxYoa)
              })
            : (0, r.jsxs)(g.hjN, {
                  className: B.content,
                  children: [
                      (0, r.jsxs)('div', {
                          className: B.emojiTable,
                          children: [
                              (0, r.jsx)(g.R94, {
                                  type: g.geA.DESCRIPTION,
                                  className: B.emojiColumn,
                                  children: U.intl.string(U.t.Z0i3Gh)
                              }),
                              (0, r.jsx)(g.R94, {
                                  type: g.geA.DESCRIPTION,
                                  className: B.columnLabel,
                                  children: U.intl.string(U.t.giajw8)
                              }),
                              (0, r.jsx)(g.R94, {
                                  type: g.geA.DESCRIPTION,
                                  className: B.columnLabel,
                                  children: U.intl.string(U.t.edavpq)
                              })
                          ]
                      }),
                      a.map((e) =>
                          (0, r.jsx)(
                              V,
                              {
                                  guildId: n.id,
                                  emoji: e,
                                  onEdit: l,
                                  editingDisabled: s || !o(e)
                              },
                              e.id
                          )
                      )
                  ]
              });
    },
    X = (e) => {
        let t,
            n,
            i,
            { staticEmojiCount: l, animatedEmojiCount: s, guild: a } = e,
            o = (0, Z.y4)(a),
            c = Math.min(o - l, o - s),
            d = a.premiumTier,
            u = (0, Z.FZ)(d);
        return null == u || d === M.Eu4.TIER_3 || c > 0
            ? null
            : (c > o ? ((t = U.intl.formatToPlainString(U.t.j0UH0t, { level: u })), (n = U.intl.formatToPlainString(U.t.VQeyKy, { level: u })), (i = M.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL)) : ((t = U.intl.string(U.t.zT9Sxc)), (n = U.intl.formatToPlainString(U.t.dBZ1RU, { level: u })), (i = M.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(y.Z, {
                  header: t,
                  text: n,
                  guild: a,
                  analyticsLocation: {
                      page: M.ZY5.GUILD_SETTINGS,
                      section: M.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, Z.ge)(u)
                  }
              }));
    },
    q = () =>
        (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(g.vwX, {
                    tag: g.RB0.H2,
                    className: B.emojiUploadUploadRequirementsHeading,
                    children: U.intl.string(U.t.jrXfy8)
                }),
                (0, r.jsxs)('ul', {
                    className: B.emojiUploadUploadRequirementsList,
                    children: [
                        (0, r.jsx)('li', {
                            children: (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                children: U.intl.string(U.t.N2qTQ0)
                            })
                        }),
                        (0, r.jsx)('li', {
                            children: (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                children: U.intl.format(U.t.gfAXoa, { maxSize: G.xG })
                            })
                        }),
                        (0, r.jsx)('li', {
                            children: (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                children: U.intl.string(U.t.rnwKPD)
                            })
                        }),
                        (0, r.jsx)('li', {
                            children: (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                children: U.intl.string(U.t['8Vr5QU'])
                            })
                        })
                    ]
                })
            ]
        }),
    Q = () => {
        let e = (0, m.e7)([L.Z], () => L.Z.getGuild()),
            [t, l] = i.useState('');
        o()(null != e, 'ConnectedGuildSettingsEmoji must be rendered within a guild context');
        let s = (0, m.e7)([T.Z], () => T.Z.theme),
            { canCreateExpressions: a } = (0, E.XJ)(e),
            { revision: c, emojis: p } = (0, m.cj)([A.Z], () => ({
                revision: A.Z.getEmojiRevision(e.id),
                emojis: A.Z.getEmojis(e.id)
            })),
            f = (0, j.Z)(c),
            [h, x] = i.useState(!1),
            [y, w] = i.useState(!1),
            R = i.useRef(null),
            D = (0, Z.y4)(e),
            [G, F] = i.useMemo(() => {
                let t = null == p ? void 0 : p.filter((t) => !(0, N.Kt)(t, e.id)),
                    [n, r] = d().partition(t, (e) => !e.animated);
                return [n, r];
            }, [p, e.id]),
            V = Math.max(D - G.length, D - F.length),
            Y =
                (0, v.h)({
                    location: 'guild_settings',
                    autoTrackExposure: !0
                }) && V > 0;
        (i.useEffect(() => {
            h && $();
        }, [h]),
            i.useEffect(() => {
                H(e.id);
            }, [e.id]),
            i.useEffect(() => {
                null != f && f < c && H(e.id);
            }, [c, f, e.id]));
        let K = i.useCallback(
                () =>
                    (0, O.i)({
                        analyticsLocation: {
                            page: M.ZY5.GUILD_SETTINGS,
                            section: M.jXE.GUILD_SETTINGS_EMOJI_ADD_BUTTON
                        }
                    }),
                []
            ),
            Q = (n, r, i) =>
                (0, C.G)({
                    data: n,
                    file: r,
                    image: i,
                    guildId: e.id,
                    uploadId: t,
                    hideErrorModal: !0,
                    analyticsLocation: { page: M.ZY5.GUILD_SETTINGS }
                }),
            J = async (n) => {
                (l((0, u.Z)()),
                    P.default.track(M.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: e.id,
                        upload_id: t
                    }),
                    await (0, I._j)(n, Q),
                    x(!0));
            },
            $ = () => {
                null !== R.current && ((0, g.Mr3)(R.current), (R.current = null));
            },
            ee = async (e) => {
                R.current = await (0, g.ZDy)(async () => {
                    let { default: t } = await n.e('16169').then(n.bind(n, 935333));
                    return (n) => (0, r.jsx)(t, z({ processFiles: () => J(e) }, n));
                });
            },
            et = (0, _.l)(e),
            en =
                'en' ===
                (0, m.e7)([S.default], () => {
                    var e;
                    return null != (e = S.default.locale) ? e : '';
                })
                    .split('-')[0]
                    .toLowerCase();
        return (0, r.jsxs)('div', {
            className: B.emojiSettings,
            children: [
                0 === V
                    ? null
                    : (0, r.jsx)(b.Z, {
                          className: B.emojiUploadContainer,
                          onDrop: ee
                      }),
                (0, r.jsxs)(g.hjN, {
                    tag: g.RB0.H1,
                    title: U.intl.string(U.t.sMOuub),
                    children: [
                        (0, r.jsx)(X, {
                            guild: e,
                            staticEmojiCount: G.length,
                            animatedEmojiCount: F.length
                        }),
                        (0, r.jsxs)(g.hjN, {
                            className: B.uploader,
                            children: [
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    children: U.intl.format(U.t.TA1BR0, { count: D })
                                }),
                                et &&
                                    (0, r.jsx)(g.R94, {
                                        type: g.geA.DESCRIPTION,
                                        children: U.intl.format(U.t.uMkfTk, { onClick: () => k.Z.open(e.id, M.pNK.ROLE_SUBSCRIPTIONS, void 0, M.KsC.ROLE_SUBSCRIPTION_EMOJI) })
                                    }),
                                Y
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(g.zxk, {
                                                  onClick: K,
                                                  children: U.intl.string(U.t.DU0dy8)
                                              }),
                                              (0, r.jsx)(g.Text, {
                                                  variant: 'text-xs/normal',
                                                  title: en ? '\u201Ca really easy way to rate limit yourself lmao\u201D --woofer21' : '',
                                                  children: U.intl.string(U.t.EgNCTk)
                                              })
                                          ]
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(q, {}),
                                              (0, r.jsxs)(g.zxk, {
                                                  tabIndex: -1,
                                                  size: g.zxk.Sizes.MEDIUM,
                                                  onClick: () => {
                                                      let t = (0, u.Z)();
                                                      (l(t),
                                                          P.default.track(M.rMx.EMOJI_UPLOAD_STARTED, {
                                                              guild_id: e.id,
                                                              upload_id: t
                                                          }));
                                                  },
                                                  disabled: y || 0 === V || !a,
                                                  submitting: y,
                                                  focusProps: { within: !0 },
                                                  children: [
                                                      U.intl.string(U.t.DU0dy8),
                                                      V > 0
                                                          ? (0, r.jsx)(I.ZP, {
                                                                disabled: y || 0 === V || !a,
                                                                tabIndex: 0,
                                                                onChange: Q,
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
                        (0, r.jsx)(W, {
                            isLoading: null == p,
                            staticEmojis: G,
                            animatedEmojis: F,
                            guild: e,
                            theme: s
                        })
                    ]
                })
            ]
        });
    };
