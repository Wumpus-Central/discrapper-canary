n.d(t, {
    FT: () => Y,
    L3: () => V,
    ZP: () => q
}),
    n(388685),
    n(583741);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    u = n.n(c),
    d = n(772848),
    m = n(442837),
    g = n(481060),
    p = n(668781),
    h = n(80932),
    f = n(225433),
    x = n(599059),
    b = n(327802),
    j = n(110924),
    _ = n(200876),
    v = n(556019),
    O = n(59769),
    C = n(730089),
    y = n(372444),
    N = n(889564),
    I = n(372129),
    E = n(357156),
    S = n(210887),
    T = n(626135),
    P = n(768581),
    w = n(176354),
    R = n(267642),
    Z = n(51144),
    D = n(434404),
    k = n(471613),
    A = n(999382),
    L = n(981631),
    M = n(185923),
    G = n(388032),
    U = n(808574),
    B = n(588866);
function F(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let z = u().throttle(h.OQ, 1000),
    H = (e) => {
        let { guildId: t, emoji: n, onEdit: l, editingDisabled: a = !1 } = e,
            [o, c] = i.useState(n.name),
            u = P.ZP.getEmojiURL({
                id: n.id,
                animated: n.animated,
                size: 32
            }),
            d = Z.ZP.useUserTag(n.user);
        return (0, r.jsxs)('div', {
            className: s()(U.emojiRow, B.card),
            children: [
                (0, r.jsx)('div', {
                    className: U.emojiColumn,
                    children: (0, r.jsx)(g.ua7, {
                        text: n.available ? null : G.intl.string(G.t['KUzI7+']),
                        children: (e) => {
                            var t, i;
                            return (0, r.jsx)(
                                'div',
                                ((t = F({}, e)),
                                (i = i =
                                    {
                                        className: s()(U.emojiImage, { [U.emojiDisabled]: !n.available }),
                                        style: { backgroundImage: 'url('.concat(u, ')') }
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
                    className: U.column,
                    children: (0, r.jsx)('div', {
                        className: U.emojiAliasInputContainer,
                        children: (0, r.jsx)(x.Z, {
                            className: s()({ [U.emojiAliasInputDisabled]: a }),
                            disabled: a,
                            minLen: 1,
                            maxLen: M.Yc,
                            name: G.intl.string(G.t.qUpzYG),
                            autoComplete: 'off',
                            value: null != o ? o : '',
                            onBlur: () => {
                                if (o !== n.name) {
                                    let e = w.ZP.sanitizeEmojiName(o);
                                    e !== n.name &&
                                        (0, h.dv)({
                                            guildId: t,
                                            emojiId: n.id,
                                            name: e
                                        }),
                                        c(e);
                                }
                            },
                            onChange: (e) => {
                                c(e.target.value);
                            }
                        })
                    })
                }),
                (0, r.jsxs)('div', {
                    className: U.column,
                    children: [
                        (0, r.jsx)(g.qEK, {
                            src: n.user.getAvatarURL(t, 20),
                            'aria-label': d,
                            size: g.EFr.SIZE_20
                        }),
                        (0, r.jsx)(g.R94, {
                            className: U.emojiRowText,
                            children: d
                        })
                    ]
                }),
                null != l &&
                    !a &&
                    (0, r.jsx)(g.P3F, {
                        'aria-label': G.intl.string(G.t.bt75u7),
                        className: U.editEmojiRolesButton,
                        onClick: () => l(n, t),
                        children: (0, r.jsx)(g.vdY, {
                            size: 'md',
                            color: 'currentColor',
                            className: U.editEmojiRolesIcon
                        })
                    }),
                !a &&
                    (0, r.jsx)(f.Z, {
                        className: U.emojiRemove,
                        onClick: () => {
                            (0, h.RE)(t, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t &&
                                    p.Z.show({
                                        title: G.intl.string(G.t.iufib2),
                                        body: G.intl.string(G.t['Whhv4+'])
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
                  className: U.spinner,
                  type: g.$jN.Type.SPINNING_CIRCLE
              })
            : 0 === i.length && 0 === l.length
              ? (0, r.jsxs)(g.ubH, {
                    theme: s,
                    className: U.empty,
                    children: [
                        (0, r.jsx)(g.oxh, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212
                        }),
                        (0, r.jsx)(g.OZU, {
                            note: G.intl.string(G.t.RBbtMz),
                            children: G.intl.string(G.t.lxsmBQ)
                        })
                    ]
                })
              : (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(V, {
                            title: G.intl.string(G.t.sMOuub),
                            maxSlots: (0, R.y4)(a),
                            emojiCount: i.length
                        }),
                        (0, r.jsx)(Y, {
                            emojis: i,
                            guild: a
                        }),
                        (0, r.jsx)(V, {
                            title: G.intl.string(G.t.wWjQyc),
                            maxSlots: (0, R.y4)(a),
                            emojiCount: l.length
                        }),
                        (0, r.jsx)(Y, {
                            emojis: l,
                            guild: a
                        })
                    ]
                });
    },
    V = (e) => {
        let { title: t, maxSlots: n, emojiCount: i } = e;
        return (0, r.jsxs)(g.vwX, {
            tag: g.RB0.H2,
            className: U.title,
            children: [
                t,
                (0, r.jsxs)('span', {
                    children: [' \u2014 ', G.intl.format(G.t.sgL8sL, { count: n - i })]
                })
            ]
        });
    },
    Y = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: s = !1 } = e,
            a = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: o } = (0, E.Gw)(n);
        return 0 === t.length
            ? (0, r.jsx)(g.R94, {
                  type: g.geA.DESCRIPTION,
                  className: U.content,
                  children: G.intl.string(G.t.SpxYoa)
              })
            : (0, r.jsxs)(g.hjN, {
                  className: U.content,
                  children: [
                      (0, r.jsxs)('div', {
                          className: U.emojiTable,
                          children: [
                              (0, r.jsx)(g.R94, {
                                  type: g.geA.DESCRIPTION,
                                  className: U.emojiColumn,
                                  children: G.intl.string(G.t.Z0i3Gh)
                              }),
                              (0, r.jsx)(g.R94, {
                                  type: g.geA.DESCRIPTION,
                                  className: U.columnLabel,
                                  children: G.intl.string(G.t.giajw8)
                              }),
                              (0, r.jsx)(g.R94, {
                                  type: g.geA.DESCRIPTION,
                                  className: U.columnLabel,
                                  children: G.intl.string(G.t.edavpq)
                              })
                          ]
                      }),
                      a.map((e) =>
                          (0, r.jsx)(
                              H,
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
    K = (e) => {
        let t,
            n,
            i,
            { staticEmojiCount: l, animatedEmojiCount: s, guild: a } = e,
            o = (0, R.y4)(a),
            c = Math.min(o - l, o - s),
            u = a.premiumTier,
            d = (0, R.FZ)(u);
        return null == d || u === L.Eu4.TIER_3 || c > 0
            ? null
            : (c > o ? ((t = G.intl.formatToPlainString(G.t.j0UH0t, { level: d })), (n = G.intl.formatToPlainString(G.t.VQeyKy, { level: d })), (i = L.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL)) : ((t = G.intl.string(G.t.zT9Sxc)), (n = G.intl.formatToPlainString(G.t.dBZ1RU, { level: d })), (i = L.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(y.Z, {
                  header: t,
                  text: n,
                  guild: a,
                  analyticsLocation: {
                      page: L.ZY5.GUILD_SETTINGS,
                      section: L.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, R.ge)(d)
                  }
              }));
    },
    X = () =>
        (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(g.vwX, {
                    tag: g.RB0.H2,
                    className: U.emojiUploadUploadRequirementsHeading,
                    children: G.intl.string(G.t.jrXfy8)
                }),
                (0, r.jsxs)('ul', {
                    className: U.emojiUploadUploadRequirementsList,
                    children: [
                        (0, r.jsx)('li', {
                            children: (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                children: G.intl.string(G.t.N2qTQ0)
                            })
                        }),
                        (0, r.jsx)('li', {
                            children: (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                children: G.intl.format(G.t.gfAXoa, { maxSize: M.xG })
                            })
                        }),
                        (0, r.jsx)('li', {
                            children: (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                children: G.intl.string(G.t.rnwKPD)
                            })
                        }),
                        (0, r.jsx)('li', {
                            children: (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                children: G.intl.string(G.t['8Vr5QU'])
                            })
                        })
                    ]
                })
            ]
        }),
    q = () => {
        let e = (0, m.e7)([A.Z], () => A.Z.getGuild()),
            [t, l] = i.useState('');
        o()(null != e, 'ConnectedGuildSettingsEmoji must be rendered within a guild context');
        let s = (0, m.e7)([S.Z], () => S.Z.theme),
            { canCreateExpressions: a } = (0, E.XJ)(e),
            { revision: c, emojis: p } = (0, m.cj)([k.Z], () => ({
                revision: k.Z.getEmojiRevision(e.id),
                emojis: k.Z.getEmojis(e.id)
            })),
            h = (0, j.Z)(c),
            [f, x] = i.useState(!1),
            [y, P] = i.useState(!1),
            w = i.useRef(null);
        i.useEffect(() => {
            f && q();
        }, [f]),
            i.useEffect(() => {
                z(e.id);
            }, [e.id]),
            i.useEffect(() => {
                null != h && h < c && z(e.id);
            }, [c, h, e.id]);
        let [Z, M] = i.useMemo(() => {
                let t = null == p ? void 0 : p.filter((t) => !(0, N.Kt)(t, e.id)),
                    [n, r] = u().partition(t, (e) => !e.animated);
                return [n, r];
            }, [p, e.id]),
            B = (0, R.y4)(e),
            H = Math.max(B - Z.length, B - M.length),
            V = (n, r, i) =>
                (0, C.G)({
                    data: n,
                    file: r,
                    image: i,
                    guildId: e.id,
                    uploadId: t,
                    hideErrorModal: !0
                }),
            Y = async (n) => {
                l((0, d.Z)()),
                    T.default.track(L.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: e.id,
                        upload_id: t
                    }),
                    await (0, I._)(n, V),
                    x(!0);
            },
            q = () => {
                null !== w.current && ((0, g.Mr3)(w.current), (w.current = null));
            },
            Q = async (e) => {
                w.current = await (0, g.ZDy)(async () => {
                    let { default: t } = await n.e('16169').then(n.bind(n, 935333));
                    return (n) => (0, r.jsx)(t, F({ processFiles: () => Y(e) }, n));
                });
            },
            J = (0, _.l)(e),
            $ =
                (0, v.h)({
                    location: 'guild_settings',
                    autoTrackExposure: !0
                }) && H > 0;
        return (0, r.jsxs)('div', {
            className: U.emojiSettings,
            children: [
                0 === H
                    ? null
                    : (0, r.jsx)(b.Z, {
                          className: U.emojiUploadContainer,
                          onDrop: Q
                      }),
                (0, r.jsxs)(g.hjN, {
                    tag: g.RB0.H1,
                    title: G.intl.string(G.t.sMOuub),
                    children: [
                        (0, r.jsx)(K, {
                            guild: e,
                            staticEmojiCount: Z.length,
                            animatedEmojiCount: M.length
                        }),
                        (0, r.jsxs)(g.hjN, {
                            className: U.uploader,
                            children: [
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    children: G.intl.format(G.t.TA1BR0, { count: B })
                                }),
                                J &&
                                    (0, r.jsx)(g.R94, {
                                        type: g.geA.DESCRIPTION,
                                        children: G.intl.format(G.t.uMkfTk, { onClick: () => D.Z.open(e.id, L.pNK.ROLE_SUBSCRIPTIONS, void 0, L.KsC.ROLE_SUBSCRIPTION_EMOJI) })
                                    }),
                                $
                                    ? (0, r.jsx)(O.b, {})
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(X, {}),
                                              (0, r.jsxs)(g.zxk, {
                                                  tabIndex: -1,
                                                  size: g.zxk.Sizes.MEDIUM,
                                                  onClick: () => {
                                                      let t = (0, d.Z)();
                                                      l(t),
                                                          T.default.track(L.rMx.EMOJI_UPLOAD_STARTED, {
                                                              guild_id: e.id,
                                                              upload_id: t
                                                          });
                                                  },
                                                  disabled: y || 0 === H || !a,
                                                  submitting: y,
                                                  focusProps: { within: !0 },
                                                  children: [
                                                      G.intl.string(G.t.DU0dy8),
                                                      H > 0
                                                          ? (0, r.jsx)(I.Z, {
                                                                disabled: y || 0 === H || !a,
                                                                tabIndex: 0,
                                                                onChange: V,
                                                                setLoading: P,
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
                            staticEmojis: Z,
                            animatedEmojis: M,
                            guild: e,
                            theme: s
                        })
                    ]
                })
            ]
        });
    };
