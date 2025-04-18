n.d(t, {
    FT: () => Y,
    L3: () => V,
    ZP: () => X
}),
    n(388685),
    n(583741);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(772848),
    m = n(442837),
    g = n(481060),
    p = n(668781),
    h = n(80932),
    f = n(225433),
    x = n(599059),
    b = n(327802),
    j = n(110924),
    N = n(200876),
    _ = n(556019),
    v = n(375727),
    O = n(730089),
    C = n(372444),
    y = n(889564),
    I = n(372129),
    E = n(357156),
    S = n(210887),
    T = n(626135),
    P = n(768581),
    w = n(176354),
    R = n(267642),
    Z = n(51144),
    D = n(434404),
    A = n(471613),
    k = n(999382),
    W = n(981631),
    L = n(185923),
    M = n(388032),
    G = n(754811),
    U = n(72272);
function B(e) {
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
let F = d().throttle(h.OQ, 1000),
    z = (e) => {
        let { guildId: t, emoji: n, onEdit: s, editingDisabled: a = !1 } = e,
            [o, c] = i.useState(n.name),
            d = P.ZP.getEmojiURL({
                id: n.id,
                animated: n.animated,
                size: 32
            }),
            u = Z.ZP.useUserTag(n.user);
        return (0, r.jsxs)('div', {
            className: l()(G.emojiRow, U.card),
            children: [
                (0, r.jsx)('div', {
                    className: G.emojiColumn,
                    children: (0, r.jsx)(g.ua7, {
                        text: n.available ? null : M.NW.string(M.t['KUzI7+']),
                        children: (e) => {
                            var t, i;
                            return (0, r.jsx)(
                                'div',
                                ((t = B({}, e)),
                                (i = i =
                                    {
                                        className: l()(G.emojiImage, { [G.emojiDisabled]: !n.available }),
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
                    className: G.column,
                    children: (0, r.jsx)('div', {
                        className: G.emojiAliasInputContainer,
                        children: (0, r.jsx)(x.Z, {
                            className: l()({ [G.emojiAliasInputDisabled]: a }),
                            disabled: a,
                            minLen: 1,
                            maxLen: L.Yc,
                            name: M.NW.string(M.t.qUpzYG),
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
                    className: G.column,
                    children: [
                        (0, r.jsx)(g.qEK, {
                            src: n.user.getAvatarURL(t, 20),
                            'aria-label': u,
                            size: g.EFr.SIZE_20
                        }),
                        (0, r.jsx)(g.R94, {
                            className: G.emojiRowText,
                            children: u
                        })
                    ]
                }),
                null != s &&
                    !a &&
                    (0, r.jsx)(g.P3F, {
                        'aria-label': M.NW.string(M.t.bt75u7),
                        className: G.editEmojiRolesButton,
                        onClick: () => s(n, t),
                        children: (0, r.jsx)(g.vdY, {
                            size: 'md',
                            color: 'currentColor',
                            className: G.editEmojiRolesIcon
                        })
                    }),
                !a &&
                    (0, r.jsx)(f.Z, {
                        className: G.emojiRemove,
                        onClick: () => {
                            (0, h.RE)(t, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t &&
                                    p.Z.show({
                                        title: M.NW.string(M.t.iufib2),
                                        body: M.NW.string(M.t['Whhv4+'])
                                    });
                            });
                        }
                    })
            ]
        });
    },
    H = (e) => {
        let { isLoading: t, staticEmojis: i, animatedEmojis: s, theme: l, guild: a } = e;
        return t
            ? (0, r.jsx)(g.$jN, {
                  className: G.spinner,
                  type: g.$jN.Type.SPINNING_CIRCLE
              })
            : 0 === i.length && 0 === s.length
              ? (0, r.jsxs)(g.ubH, {
                    theme: l,
                    className: G.empty,
                    children: [
                        (0, r.jsx)(g.oxh, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212
                        }),
                        (0, r.jsx)(g.OZU, {
                            note: M.NW.string(M.t.RBbtMz),
                            children: M.NW.string(M.t.lxsmBQ)
                        })
                    ]
                })
              : (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(V, {
                            title: M.NW.string(M.t.sMOuub),
                            maxSlots: (0, R.y4)(a),
                            emojiCount: i.length
                        }),
                        (0, r.jsx)(Y, {
                            emojis: i,
                            guild: a
                        }),
                        (0, r.jsx)(V, {
                            title: M.NW.string(M.t.wWjQyc),
                            maxSlots: (0, R.y4)(a),
                            emojiCount: s.length
                        }),
                        (0, r.jsx)(Y, {
                            emojis: s,
                            guild: a
                        })
                    ]
                });
    },
    V = (e) => {
        let { title: t, maxSlots: n, emojiCount: i } = e;
        return (0, r.jsxs)(g.vwX, {
            tag: g.RB0.H2,
            className: G.title,
            children: [
                t,
                (0, r.jsxs)('span', {
                    children: [' \u2014 ', M.NW.format(M.t.sgL8sL, { count: n - i })]
                })
            ]
        });
    },
    Y = (e) => {
        let { emojis: t, guild: n, onEdit: s, editingDisabled: l = !1 } = e,
            a = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: o } = (0, E.Gw)(n);
        return 0 === t.length
            ? (0, r.jsx)(g.R94, {
                  type: g.geA.DESCRIPTION,
                  className: G.content,
                  children: M.NW.string(M.t.SpxYoa)
              })
            : (0, r.jsxs)(g.hjN, {
                  className: G.content,
                  children: [
                      (0, r.jsxs)('div', {
                          className: G.emojiTable,
                          children: [
                              (0, r.jsx)(g.R94, {
                                  type: g.geA.DESCRIPTION,
                                  className: G.emojiColumn,
                                  children: M.NW.string(M.t.Z0i3Gh)
                              }),
                              (0, r.jsx)(g.R94, {
                                  type: g.geA.DESCRIPTION,
                                  className: G.columnLabel,
                                  children: M.NW.string(M.t.giajw8)
                              }),
                              (0, r.jsx)(g.R94, {
                                  type: g.geA.DESCRIPTION,
                                  className: G.columnLabel,
                                  children: M.NW.string(M.t.edavpq)
                              })
                          ]
                      }),
                      a.map((e) =>
                          (0, r.jsx)(
                              z,
                              {
                                  guildId: n.id,
                                  emoji: e,
                                  onEdit: s,
                                  editingDisabled: l || !o(e)
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
            { staticEmojiCount: s, animatedEmojiCount: l, guild: a } = e,
            o = (0, R.y4)(a),
            c = Math.min(o - s, o - l),
            d = a.premiumTier,
            u = (0, R.FZ)(d);
        return null == u || d === W.Eu4.TIER_3 || c > 0
            ? null
            : (c > o ? ((t = M.NW.formatToPlainString(M.t.j0UH0t, { level: u })), (n = M.NW.formatToPlainString(M.t.VQeyKy, { level: u })), (i = W.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL)) : ((t = M.NW.string(M.t.zT9Sxc)), (n = M.NW.formatToPlainString(M.t.dBZ1RU, { level: u })), (i = W.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(C.Z, {
                  header: t,
                  text: n,
                  guild: a,
                  analyticsLocation: {
                      page: W.ZY5.GUILD_SETTINGS,
                      section: W.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, R.ge)(u)
                  }
              }));
    },
    X = () => {
        let e = (0, m.e7)([k.Z], () => k.Z.getGuild()),
            [t, s] = i.useState('');
        o()(null != e, 'ConnectedGuildSettingsEmoji must be rendered within a guild context');
        let l = (0, m.e7)([S.Z], () => S.Z.theme),
            { canCreateExpressions: a } = (0, E.XJ)(e),
            { revision: c, emojis: p } = (0, m.cj)([A.Z], () => ({
                revision: A.Z.getEmojiRevision(e.id),
                emojis: A.Z.getEmojis(e.id)
            })),
            h = (0, j.Z)(c),
            [f, x] = i.useState(!1),
            [C, P] = i.useState(!1),
            w = i.useRef(null);
        i.useEffect(() => {
            f && q();
        }, [f]),
            i.useEffect(() => {
                F(e.id);
            }, [e.id]),
            i.useEffect(() => {
                null != h && h < c && F(e.id);
            }, [c, h, e.id]);
        let [Z, U] = i.useMemo(() => {
                let t = null == p ? void 0 : p.filter((t) => !(0, y.Kt)(t, e.id)),
                    [n, r] = d().partition(t, (e) => !e.animated);
                return [n, r];
            }, [p, e.id]),
            z = (0, R.y4)(e),
            V = Math.max(z - Z.length, z - U.length),
            Y = (n, r, i) =>
                (0, O.G)({
                    data: n,
                    file: r,
                    image: i,
                    guildId: e.id,
                    uploadId: t,
                    hideErrorModal: !0
                }),
            X = async (n) => {
                s((0, u.Z)()),
                    T.default.track(W.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: e.id,
                        upload_id: t
                    }),
                    await (0, I._)(n, Y),
                    x(!0);
            },
            q = () => {
                null !== w.current && ((0, g.Mr3)(w.current), (w.current = null));
            },
            J = async (e) => {
                w.current = await (0, g.ZDy)(async () => {
                    let { default: t } = await n.e('16169').then(n.bind(n, 935333));
                    return (n) => (0, r.jsx)(t, B({ processFiles: () => X(e) }, n));
                });
            },
            Q = (0, N.l)(e),
            $ =
                (0, _.h)({
                    location: 'guild_settings',
                    autoTrackExposure: !0
                }) && V > 0;
        return (0, r.jsxs)('div', {
            className: G.emojiSettings,
            children: [
                0 === V
                    ? null
                    : (0, r.jsx)(b.Z, {
                          className: G.emojiUploadContainer,
                          onDrop: J
                      }),
                (0, r.jsxs)(g.hjN, {
                    tag: g.RB0.H1,
                    title: M.NW.string(M.t.sMOuub),
                    children: [
                        (0, r.jsx)(K, {
                            guild: e,
                            staticEmojiCount: Z.length,
                            animatedEmojiCount: U.length
                        }),
                        (0, r.jsxs)(g.hjN, {
                            className: G.uploader,
                            children: [
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    children: M.NW.format(M.t.TA1BR0, { count: z })
                                }),
                                Q &&
                                    (0, r.jsx)(g.R94, {
                                        type: g.geA.DESCRIPTION,
                                        children: M.NW.format(M.t.uMkfTk, { onClick: () => D.Z.open(e.id, W.pNK.ROLE_SUBSCRIPTIONS, void 0, W.KsC.ROLE_SUBSCRIPTION_EMOJI) })
                                    }),
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(g.vwX, {
                                            tag: g.RB0.H2,
                                            className: G.emojiUploadUploadRequirementsHeading,
                                            children: M.NW.string(M.t.jrXfy8)
                                        }),
                                        (0, r.jsxs)('ul', {
                                            className: G.emojiUploadUploadRequirementsList,
                                            children: [
                                                (0, r.jsx)('li', {
                                                    children: (0, r.jsx)(g.R94, {
                                                        type: g.geA.DESCRIPTION,
                                                        children: M.NW.string(M.t.N2qTQ0)
                                                    })
                                                }),
                                                (0, r.jsx)('li', {
                                                    children: (0, r.jsx)(g.R94, {
                                                        type: g.geA.DESCRIPTION,
                                                        children: M.NW.format(M.t.gfAXoa, { maxSize: L.xG })
                                                    })
                                                }),
                                                (0, r.jsx)('li', {
                                                    children: (0, r.jsx)(g.R94, {
                                                        type: g.geA.DESCRIPTION,
                                                        children: M.NW.string(M.t.rnwKPD)
                                                    })
                                                }),
                                                (0, r.jsx)('li', {
                                                    children: (0, r.jsx)(g.R94, {
                                                        type: g.geA.DESCRIPTION,
                                                        children: M.NW.string(M.t['8Vr5QU'])
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                $
                                    ? (0, r.jsx)(g.zxk, {
                                          onClick: v.i,
                                          size: g.zxk.Sizes.MEDIUM,
                                          children: M.NW.string(M.t.DU0dy8)
                                      })
                                    : (0, r.jsxs)(g.zxk, {
                                          tabIndex: -1,
                                          size: g.zxk.Sizes.MEDIUM,
                                          onClick: () => {
                                              let t = (0, u.Z)();
                                              s(t),
                                                  T.default.track(W.rMx.EMOJI_UPLOAD_STARTED, {
                                                      guild_id: e.id,
                                                      upload_id: t
                                                  });
                                          },
                                          disabled: C || 0 === V || !a,
                                          submitting: C,
                                          focusProps: { within: !0 },
                                          children: [
                                              M.NW.string(M.t.DU0dy8),
                                              V > 0
                                                  ? (0, r.jsx)(I.Z, {
                                                        disabled: C || 0 === V || !a,
                                                        tabIndex: 0,
                                                        onChange: Y,
                                                        setLoading: P,
                                                        multiple: !0
                                                    })
                                                  : null
                                          ]
                                      })
                            ]
                        }),
                        (0, r.jsx)(H, {
                            isLoading: null == p,
                            staticEmojis: Z,
                            animatedEmojis: U,
                            guild: e,
                            theme: l
                        })
                    ]
                })
            ]
        });
    };
