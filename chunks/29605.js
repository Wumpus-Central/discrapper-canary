n.d(t, {
    FT: () => H,
    L3: () => z,
    ZP: () => Y
}),
    n(47120),
    n(978209);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(392711),
    d = n.n(c),
    u = n(772848),
    m = n(442837),
    g = n(481060),
    p = n(668781),
    h = n(80932),
    f = n(225433),
    b = n(599059),
    x = n(327802),
    j = n(110924),
    N = n(200876),
    _ = n(730089),
    v = n(372444),
    C = n(889564),
    O = n(372129),
    y = n(357156),
    I = n(210887),
    E = n(626135),
    S = n(768581),
    T = n(176354),
    P = n(267642),
    w = n(51144),
    R = n(434404),
    Z = n(471613),
    D = n(999382),
    A = n(981631),
    k = n(185923),
    W = n(388032),
    L = n(808574),
    M = n(588866);
function G(e) {
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
let U = d().throttle(h.OQ, 1000),
    B = (e) => {
        let { guildId: t, emoji: n, onEdit: s, editingDisabled: l = !1 } = e,
            [o, c] = i.useState(n.name),
            d = S.ZP.getEmojiURL({
                id: n.id,
                animated: n.animated,
                size: 32
            }),
            u = w.ZP.useUserTag(n.user);
        return (0, r.jsxs)('div', {
            className: a()(L.emojiRow, M.card),
            children: [
                (0, r.jsx)('div', {
                    className: L.emojiColumn,
                    children: (0, r.jsx)(g.ua7, {
                        text: n.available ? null : W.NW.string(W.t['KUzI7+']),
                        children: (e) => {
                            var t, i;
                            return (0, r.jsx)(
                                'div',
                                ((t = G({}, e)),
                                (i = i =
                                    {
                                        className: a()(L.emojiImage, { [L.emojiDisabled]: !n.available }),
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
                    className: L.column,
                    children: (0, r.jsx)('div', {
                        className: L.emojiAliasInputContainer,
                        children: (0, r.jsx)(b.Z, {
                            className: a()({ [L.emojiAliasInputDisabled]: l }),
                            disabled: l,
                            minLen: 1,
                            maxLen: k.Yc,
                            name: W.NW.string(W.t.qUpzYG),
                            autoComplete: 'off',
                            value: null != o ? o : '',
                            onBlur: () => {
                                if (o !== n.name) {
                                    let e = T.ZP.sanitizeEmojiName(o);
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
                    className: L.column,
                    children: [
                        (0, r.jsx)(g.qEK, {
                            src: n.user.getAvatarURL(t, 20),
                            'aria-label': u,
                            size: g.EFr.SIZE_20
                        }),
                        (0, r.jsx)(g.R94, {
                            className: L.emojiRowText,
                            children: u
                        })
                    ]
                }),
                null != s &&
                    !l &&
                    (0, r.jsx)(g.P3F, {
                        'aria-label': W.NW.string(W.t.bt75u7),
                        className: L.editEmojiRolesButton,
                        onClick: () => s(n, t),
                        children: (0, r.jsx)(g.vdY, {
                            size: 'md',
                            color: 'currentColor',
                            className: L.editEmojiRolesIcon
                        })
                    }),
                !l &&
                    (0, r.jsx)(f.Z, {
                        className: L.emojiRemove,
                        onClick: () => {
                            (0, h.RE)(t, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t &&
                                    p.Z.show({
                                        title: W.NW.string(W.t.iufib2),
                                        body: W.NW.string(W.t['Whhv4+'])
                                    });
                            });
                        }
                    })
            ]
        });
    },
    F = (e) => {
        let { isLoading: t, staticEmojis: i, animatedEmojis: s, theme: a, guild: l } = e;
        return t
            ? (0, r.jsx)(g.$jN, {
                  className: L.spinner,
                  type: g.$jN.Type.SPINNING_CIRCLE
              })
            : 0 === i.length && 0 === s.length
              ? (0, r.jsxs)(g.ubH, {
                    theme: a,
                    className: L.empty,
                    children: [
                        (0, r.jsx)(g.oxh, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212
                        }),
                        (0, r.jsx)(g.OZU, {
                            note: W.NW.string(W.t.RBbtMz),
                            children: W.NW.string(W.t.lxsmBQ)
                        })
                    ]
                })
              : (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(z, {
                            title: W.NW.string(W.t.sMOuub),
                            maxSlots: (0, P.y4)(l),
                            emojiCount: i.length
                        }),
                        (0, r.jsx)(H, {
                            emojis: i,
                            guild: l
                        }),
                        (0, r.jsx)(z, {
                            title: W.NW.string(W.t.wWjQyc),
                            maxSlots: (0, P.y4)(l),
                            emojiCount: s.length
                        }),
                        (0, r.jsx)(H, {
                            emojis: s,
                            guild: l
                        })
                    ]
                });
    },
    z = (e) => {
        let { title: t, maxSlots: n, emojiCount: i } = e;
        return (0, r.jsxs)(g.vwX, {
            tag: g.RB0.H2,
            className: L.title,
            children: [
                t,
                (0, r.jsxs)('span', {
                    children: [' \u2014 ', W.NW.format(W.t.sgL8sL, { count: n - i })]
                })
            ]
        });
    },
    H = (e) => {
        let { emojis: t, guild: n, onEdit: s, editingDisabled: a = !1 } = e,
            l = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: o } = (0, y.Gw)(n);
        return 0 === t.length
            ? (0, r.jsx)(g.R94, {
                  type: g.geA.DESCRIPTION,
                  className: L.content,
                  children: W.NW.string(W.t.SpxYoa)
              })
            : (0, r.jsxs)(g.hjN, {
                  className: L.content,
                  children: [
                      (0, r.jsxs)('div', {
                          className: L.emojiTable,
                          children: [
                              (0, r.jsx)(g.R94, {
                                  type: g.geA.DESCRIPTION,
                                  className: L.emojiColumn,
                                  children: W.NW.string(W.t.Z0i3Gh)
                              }),
                              (0, r.jsx)(g.R94, {
                                  type: g.geA.DESCRIPTION,
                                  className: L.columnLabel,
                                  children: W.NW.string(W.t.giajw8)
                              }),
                              (0, r.jsx)(g.R94, {
                                  type: g.geA.DESCRIPTION,
                                  className: L.columnLabel,
                                  children: W.NW.string(W.t.edavpq)
                              })
                          ]
                      }),
                      l.map((e) =>
                          (0, r.jsx)(
                              B,
                              {
                                  guildId: n.id,
                                  emoji: e,
                                  onEdit: s,
                                  editingDisabled: a || !o(e)
                              },
                              e.id
                          )
                      )
                  ]
              });
    },
    V = (e) => {
        let t,
            n,
            i,
            { staticEmojiCount: s, animatedEmojiCount: a, guild: l } = e,
            o = (0, P.y4)(l),
            c = Math.min(o - s, o - a),
            d = l.premiumTier,
            u = (0, P.FZ)(d);
        return null == u || d === A.Eu4.TIER_3 || c > 0
            ? null
            : (c > o ? ((t = W.NW.formatToPlainString(W.t.j0UH0t, { level: u })), (n = W.NW.formatToPlainString(W.t.VQeyKy, { level: u })), (i = A.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL)) : ((t = W.NW.string(W.t.zT9Sxc)), (n = W.NW.formatToPlainString(W.t.dBZ1RU, { level: u })), (i = A.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(v.Z, {
                  header: t,
                  text: n,
                  guild: l,
                  analyticsLocation: {
                      page: A.ZY5.GUILD_SETTINGS,
                      section: A.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, P.ge)(u)
                  }
              }));
    },
    Y = () => {
        let e = (0, m.e7)([D.Z], () => D.Z.getGuild()),
            [t, s] = i.useState('');
        o()(null != e, 'ConnectedGuildSettingsEmoji must be rendered within a guild context');
        let a = (0, m.e7)([I.Z], () => I.Z.theme),
            { canCreateExpressions: l } = (0, y.XJ)(e),
            { revision: c, emojis: p } = (0, m.cj)([Z.Z], () => ({
                revision: Z.Z.getEmojiRevision(e.id),
                emojis: Z.Z.getEmojis(e.id)
            })),
            h = (0, j.Z)(c),
            [f, b] = i.useState(!1),
            [v, S] = i.useState(!1),
            T = i.useRef(null);
        i.useEffect(() => {
            f && K();
        }, [f]),
            i.useEffect(() => {
                U(e.id);
            }, [e.id]),
            i.useEffect(() => {
                null != h && h < c && U(e.id);
            }, [c, h, e.id]);
        let [w, M] = i.useMemo(() => {
                let t = null == p ? void 0 : p.filter((t) => !(0, C.Kt)(t, e.id)),
                    [n, r] = d().partition(t, (e) => !e.animated);
                return [n, r];
            }, [p, e.id]),
            B = (0, P.y4)(e),
            z = Math.max(B - w.length, B - M.length),
            H = (n, r, i) =>
                (0, _.G)({
                    data: n,
                    file: r,
                    image: i,
                    guildId: e.id,
                    uploadId: t,
                    hideErrorModal: !0
                }),
            Y = async (n) => {
                s((0, u.Z)()),
                    E.default.track(A.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: e.id,
                        upload_id: t
                    }),
                    await (0, O._)(n, H),
                    b(!0);
            },
            K = () => {
                null !== T.current && ((0, g.Mr3)(T.current), (T.current = null));
            },
            q = async (e) => {
                T.current = await (0, g.ZDy)(async () => {
                    let { default: t } = await n.e('16169').then(n.bind(n, 935333));
                    return (n) => (0, r.jsx)(t, G({ processFiles: () => Y(e) }, n));
                });
            },
            X = (0, N.l)(e);
        return (0, r.jsxs)('div', {
            className: L.emojiSettings,
            children: [
                0 === z
                    ? null
                    : (0, r.jsx)(x.Z, {
                          className: L.emojiUploadContainer,
                          onDrop: q
                      }),
                (0, r.jsxs)(g.hjN, {
                    tag: g.RB0.H1,
                    title: W.NW.string(W.t.sMOuub),
                    children: [
                        (0, r.jsx)(V, {
                            guild: e,
                            staticEmojiCount: w.length,
                            animatedEmojiCount: M.length
                        }),
                        (0, r.jsxs)(g.hjN, {
                            className: L.uploader,
                            children: [
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    children: W.NW.format(W.t.TA1BR0, { count: B })
                                }),
                                X &&
                                    (0, r.jsx)(g.R94, {
                                        type: g.geA.DESCRIPTION,
                                        children: W.NW.format(W.t.uMkfTk, { onClick: () => R.Z.open(e.id, A.pNK.ROLE_SUBSCRIPTIONS, void 0, A.KsC.ROLE_SUBSCRIPTION_EMOJI) })
                                    }),
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(g.vwX, {
                                            tag: g.RB0.H2,
                                            className: L.emojiUploadUploadRequirementsHeading,
                                            children: W.NW.string(W.t.jrXfy8)
                                        }),
                                        (0, r.jsxs)('ul', {
                                            className: L.emojiUploadUploadRequirementsList,
                                            children: [
                                                (0, r.jsx)('li', {
                                                    children: (0, r.jsx)(g.R94, {
                                                        type: g.geA.DESCRIPTION,
                                                        children: W.NW.string(W.t.N2qTQ0)
                                                    })
                                                }),
                                                (0, r.jsx)('li', {
                                                    children: (0, r.jsx)(g.R94, {
                                                        type: g.geA.DESCRIPTION,
                                                        children: W.NW.format(W.t.gfAXoa, { maxSize: k.xG })
                                                    })
                                                }),
                                                (0, r.jsx)('li', {
                                                    children: (0, r.jsx)(g.R94, {
                                                        type: g.geA.DESCRIPTION,
                                                        children: W.NW.string(W.t.rnwKPD)
                                                    })
                                                }),
                                                (0, r.jsx)('li', {
                                                    children: (0, r.jsx)(g.R94, {
                                                        type: g.geA.DESCRIPTION,
                                                        children: W.NW.string(W.t['8Vr5QU'])
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(g.zxk, {
                                    tabIndex: -1,
                                    size: g.zxk.Sizes.MEDIUM,
                                    onClick: () => {
                                        let t = (0, u.Z)();
                                        s(t),
                                            E.default.track(A.rMx.EMOJI_UPLOAD_STARTED, {
                                                guild_id: e.id,
                                                upload_id: t
                                            });
                                    },
                                    disabled: v || 0 === z || !l,
                                    submitting: v,
                                    focusProps: { within: !0 },
                                    children: [
                                        W.NW.string(W.t.DU0dy8),
                                        z > 0
                                            ? (0, r.jsx)(O.Z, {
                                                  disabled: v || 0 === z || !l,
                                                  tabIndex: 0,
                                                  onChange: H,
                                                  setLoading: S,
                                                  multiple: !0
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)(F, {
                            isLoading: null == p,
                            staticEmojis: w,
                            animatedEmojis: M,
                            guild: e,
                            theme: a
                        })
                    ]
                })
            ]
        });
    };
