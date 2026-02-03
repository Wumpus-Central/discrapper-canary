n.d(t, {
    Ay: () => q,
    Bt: () => J,
    zI: () => Z,
}),
    n(896048),
    n(264879);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(735438),
    d = n.n(c),
    u = n(92674),
    g = n(835245),
    m = n(311907),
    p = n(990078),
    f = n(397927),
    h = n(157559),
    b = n(554375),
    x = n(971251),
    j = n(615751),
    _ = n(475743),
    O = n(793574),
    v = n(262295),
    y = n(936555),
    A = n(725437),
    E = n(952385),
    N = n(810877),
    S = n(945086),
    I = n(824832),
    C = n(931991),
    T = n(544028),
    P = n(954571),
    w = n(486020),
    R = n(690521),
    D = n(473145),
    G = n(427262),
    L = n(997509),
    k = n(885617),
    M = n(555337),
    U = n(288224),
    B = n(652215),
    F = n(307731),
    H = n(985018),
    V = n(602217),
    K = n(506823);

function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let W = d().throttle(b.dZ, 1e3),
    Y = (e) => {
        var t, n;
        let { guildId: l, emoji: a, onEdit: o, editingDisabled: c = !1, isNewlyAdded: d = !1 } = e,
            [g, m] = i.useState(a.name),
            j = w.Ay.getEmojiURL({
                id: a.id,
                animated: a.animated,
                size: 32,
            }),
            [_] = (0, f.zhh)(
                () => ({
                    from: {
                        scale: 2,
                    },
                    to: {
                        scale: 1,
                    },
                    config: {
                        mass: 10,
                        tension: 1500,
                        friction: 115,
                    },
                }),
                d ? "respect-motion-settings" : "animate-never",
            ),
            [O] = (0, f.zhh)(
                () => ({
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                    config: {
                        duration: 200,
                        clamp: !0,
                    },
                }),
                d ? "respect-motion-settings" : "animate-never",
            ),
            y = G.Ay.useUserTag(a.user);
        return (0, r.jsxs)("div", {
            className: s()(V.nI, K.N),
            role: "row",
            children: [
                (0, r.jsx)("div", {
                    className: V.DW,
                    children: (0, r.jsx)(p.m, {
                        text: a.available ? null : H.intl.string(H.t.KUzI73),
                        children: (0, r.jsx)(u.animated.div, {
                            className: s()(V.mp, {
                                [V.Zw]: !a.available,
                            }),
                            style:
                                ((t = z({}, d ? _ : {}, d ? O : {})),
                                (n = n =
                                    {
                                        backgroundImage: "url(".concat(j, ")"),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t),
                        }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: V.fi,
                    children: (0, r.jsx)("div", {
                        className: V.Yf,
                        children: (0, r.jsx)(x.A, {
                            className: s()({
                                [V.XH]: c,
                            }),
                            disabled: c,
                            minLen: 1,
                            maxLen: F.zj,
                            name: H.intl.string(H.t.qUpzYO),
                            autoComplete: "off",
                            value: null != g ? g : "",
                            onBlur: () => {
                                if (g === a.name) return;
                                let e = R.Ay.sanitizeEmojiName(g);
                                e !== a.name &&
                                    (0, b.Cp)({
                                        guildId: l,
                                        emojiId: a.id,
                                        name: e,
                                    }),
                                    m(e);
                            },
                            onChange: (e) => {
                                m(e.target.value);
                            },
                        }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: V.fi,
                    children: (0, r.jsx)(v.A, {
                        avatar: (0, r.jsx)(f.euF, {
                            src: a.user.getAvatarURL(l, 20),
                            "aria-label": y,
                            size: f._3J.SIZE_20,
                        }),
                        name: (0, r.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            children: y,
                        }),
                    }),
                }),
                !c &&
                    (0, r.jsxs)("div", {
                        className: V.AU,
                        children: [
                            null == o
                                ? null
                                : (0, r.jsx)(p.m, {
                                      text: H.intl.string(H.t.FOYn8U),
                                      "aria-label": H.intl.string(H.t.FOYn8U),
                                      children: (0, r.jsx)(f.K0, {
                                          size: "sm",
                                          variant: "secondary",
                                          icon: f.R2l,
                                          onClick: () => o(a, l),
                                          "aria-label": H.intl.string(H.t.FOYn8U),
                                      }),
                                  }),
                            (0, r.jsx)(p.m, {
                                text: H.intl.string(H.t["+euLPe"]),
                                "aria-label": H.intl.string(H.t["+euLPe"]),
                                children: (0, r.jsx)(f.K0, {
                                    size: "sm",
                                    variant: "critical-secondary",
                                    icon: f.ucK,
                                    onClick: () => {
                                        (0, b.ak)(l, a.id).catch((e) => {
                                            let { status: t } = e;
                                            429 === t &&
                                                h.A.show({
                                                    title: H.intl.string(H.t.iufib1),
                                                    body: H.intl.string(H.t.Whhv4w),
                                                });
                                        });
                                    },
                                    "aria-label": H.intl.string(H.t["+euLPe"]),
                                }),
                            }),
                        ],
                    }),
            ],
        });
    },
    X = (e) => {
        let {
            isLoading: t,
            staticEmoji: i,
            animatedEmoji: l,
            theme: s,
            guild: a,
            onEdit: o,
            newlyAddedEmojiIds: c,
        } = e;
        return t
            ? (0, r.jsx)(f.y$y, {
                  className: V.u1,
                  type: f.y$y.Type.SPINNING_CIRCLE,
              })
            : 0 === i.length && 0 === l.length
              ? (0, r.jsxs)(f.ppr, {
                    theme: s,
                    className: V.Ie,
                    children: [
                        (0, r.jsx)(f.G8R, {
                            darkSrc: n(223685),
                            lightSrc: n(388547),
                            width: 272,
                            height: 212,
                        }),
                        (0, r.jsx)(f.SGT, {
                            note: H.intl.string(H.t.RBbtMy),
                            children: H.intl.string(H.t.lxsmBd),
                        }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(J, {
                            title: H.intl.string(H.t.sMOuuS),
                            maxSlots: (0, D.sN)(a),
                            emojiCount: i.length,
                            children: (0, r.jsx)(Z, {
                                emojis: i,
                                guild: a,
                                onEdit: o,
                                newlyAddedEmojiIds: c,
                            }),
                        }),
                        (0, r.jsx)(J, {
                            title: H.intl.string(H.t.wWjQye),
                            maxSlots: (0, D.sN)(a),
                            emojiCount: l.length,
                            children: (0, r.jsx)(Z, {
                                emojis: l,
                                guild: a,
                                onEdit: o,
                                newlyAddedEmojiIds: c,
                            }),
                        }),
                    ],
                });
    },
    J = (e) => {
        let { title: t, maxSlots: n, emojiCount: i, children: l } = e,
            s = Math.max(n - i, 0);
        return (0, r.jsx)(f.nVY, {
            label: t,
            description: H.intl.format(H.t.sgL8sI, {
                count: s,
            }),
            children: l,
        });
    },
    Z = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: s = !1, newlyAddedEmojiIds: a } = e,
            o = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: c } = (0, C.ie)(n),
            d = (0, m.bG)([T.A], () => T.A.theme);
        return 0 === t.length
            ? (0, r.jsx)(f.ppr, {
                  theme: d,
                  children: (0, r.jsx)(f.SGT, {
                      children: H.intl.string(H.t.SpxYoT),
                  }),
              })
            : (0, r.jsxs)("div", {
                  role: "table",
                  "aria-label": H.intl.string(H.t.sMOuuS),
                  className: V.tp,
                  children: [
                      (0, r.jsxs)("div", {
                          role: "rowgroup",
                          className: V.qd,
                          children: [
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: V.DW,
                                  children: (0, r.jsx)(f.Text, {
                                      variant: "text-sm/semibold",
                                      children: H.intl.string(H.t.Z0i3Gp),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: V.Zp,
                                  children: (0, r.jsx)(f.Text, {
                                      variant: "text-sm/semibold",
                                      children: H.intl.string(H.t.giajw6),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: V.Zp,
                                  children: (0, r.jsx)(f.Text, {
                                      variant: "text-sm/semibold",
                                      children: H.intl.string(H.t.edavpq),
                                  }),
                              }),
                              !s &&
                                  (0, r.jsx)("div", {
                                      role: "none",
                                      className: V.cs,
                                  }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          role: "rowgroup",
                          className: V.bg,
                          children: o.map((e) => {
                              var t;
                              return (0, r.jsx)(
                                  Y,
                                  {
                                      guildId: n.id,
                                      emoji: e,
                                      onEdit: l,
                                      editingDisabled: s || !c(e),
                                      isNewlyAdded: null != (t = null == a ? void 0 : a.has(e.id)) && t,
                                  },
                                  e.id,
                              );
                          }),
                      }),
                  ],
              });
    },
    Q = (e) => {
        let t,
            n,
            i,
            { staticEmojiCount: l, animatedEmojiCount: s, guild: a } = e,
            o = (0, D.sN)(a),
            c = Math.min(o - l, o - s),
            d = a.premiumTier,
            u = (0, D.ax)(d);
        return null == u || d === B.TVA.TIER_3 || c > 0
            ? null
            : (c > o
                  ? ((t = H.intl.formatToPlainString(H.t.j0UH0m, {
                        level: u,
                    })),
                    (n = H.intl.formatToPlainString(H.t.VQeyK6, {
                        level: u,
                    })),
                    (i = B.ZSU.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = H.intl.string(H.t.zT9SxY)),
                    (n = H.intl.formatToPlainString(H.t.dBZ1RU, {
                        level: u,
                    })),
                    (i = B.ZSU.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(S.A, {
                  header: t,
                  text: n,
                  guild: a,
                  analyticsLocation: {
                      page: B.liQ.GUILD_SETTINGS,
                      section: B.JJy.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, D.k1)(u),
                  },
              }));
    },
    q = () => {
        let e = i.useRef(null),
            t = i.useRef(0),
            l = (0, m.bG)([M.A], () => M.A.getGuild()),
            [s, a] = i.useState("");
        o()(null != l, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
        let c = (0, m.bG)([T.A], () => T.A.theme),
            { revision: u, emojis: p } = (0, m.cf)([k.A], () => ({
                revision: k.A.getEmojiRevision(l.id),
                emojis: k.A.getEmojis(l.id),
            })),
            h = (0, _.A)(u),
            [b, x] = i.useState(!1),
            [v, S] = i.useState(!1),
            C = i.useRef(null),
            {
                maxEmojiSlots: w,
                availableEmojiSlots: R,
                staticEmoji: D,
                totalStaticEmoji: G,
                animatedEmoji: F,
                totalAnimatedEmoji: K,
            } = (0, E.v)({
                guild: l,
            }),
            [Y, J] = i.useState(null);
        i.useEffect(() => {
            b && et();
        }, [b]),
            i.useEffect(() => {
                W(l.id);
            }, [l.id]),
            i.useEffect(() => {
                null != h && h < u && W(l.id);
            }, [u, h, l.id]),
            i.useEffect(() => {
                if (null != p && null == Y) return void J(p);
            }, [p, Y]);
        let Z = i.useMemo(
                () =>
                    null == Y
                        ? new Set()
                        : new Set(
                              d()
                                  .differenceBy(p, Y, "id")
                                  .map((e) => e.id),
                          ),
                [p, Y],
            ),
            q = i.useCallback(
                function () {
                    let { emoji: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    null != e
                        ? (0, A.f)({
                              guildId: l.id,
                              emoji: e,
                              analyticsLocation: O.A.GUILD_SETTINGS_EMOJI_EDIT_BUTTON,
                          })
                        : (0, A.f)({
                              guildId: l.id,
                              analyticsLocation: {
                                  page: B.liQ.GUILD_SETTINGS,
                                  section: B.JJy.GUILD_SETTINGS_EMOJI_ADD_BUTTON,
                              },
                          });
                },
                [l],
            ),
            $ = async (e, t, n) => {
                let r = await (0, N.W)({
                    data: e,
                    file: t,
                    image: n,
                    guildId: l.id,
                    uploadId: s,
                    hideErrorModal: !0,
                    analyticsLocation: {
                        page: B.liQ.GUILD_SETTINGS,
                    },
                });
                if ("object" != typeof r || !("id" in r)) return r;
                U.X({
                    emojiId: r.id,
                    userImage: {
                        data: e,
                        file: t,
                        image: n,
                    },
                });
            },
            ee = async (e) => {
                a((0, g.A)()),
                    P.default.track(B.HAw.EMOJI_UPLOAD_STARTED, {
                        guild_id: l.id,
                        upload_id: s,
                    }),
                    await (0, I.UD)(e, $),
                    x(!0);
            },
            et = () => {
                null !== C.current && ((0, f.OoC)(C.current), (C.current = null));
            },
            en = async (e) => {
                C.current = await (0, f.mMO)(async () => {
                    let { default: t } = await n.e("17259").then(n.bind(n, 897126));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            z(
                                {
                                    processFiles: () => ee(e),
                                },
                                n,
                            ),
                        );
                });
            },
            er = i.useCallback(
                async (e, n, r) => {
                    await (0, A.f)({
                        userImage: {
                            data: e,
                            file: n,
                            image: r,
                        },
                        guildId: l.id,
                        analyticsLocation: {
                            page: B.liQ.GUILD_SETTINGS,
                        },
                    }),
                        (t.current += 1);
                },
                [l.id],
            ),
            ei = (0, y.w)(l);
        return (0, r.jsxs)("div", {
            className: V.Gi,
            children: [
                0 === R
                    ? null
                    : (0, r.jsx)(j.A, {
                          className: V.Lc,
                          onDrop: en,
                      }),
                (0, r.jsxs)(f.BJc, {
                    gap: 20,
                    children: [
                        (0, r.jsxs)(f.BJc, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(f.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: H.intl.string(H.t.sMOuuS),
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/normal",
                                    children: H.intl.format(H.t.TA1BR0, {
                                        count: w,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(Q, {
                            guild: l,
                            staticEmojiCount: G,
                            animatedEmojiCount: K,
                        }),
                        (0, r.jsxs)("div", {
                            className: V.xp,
                            children: [
                                ei &&
                                    (0, r.jsx)(f.po8, {
                                        messageType: f.YCn.INFO,
                                        children: H.intl.format(H.t.uMkfTo, {
                                            onClick: () =>
                                                L.A.open(
                                                    l.id,
                                                    B.BEX.ROLE_SUBSCRIPTIONS,
                                                    void 0,
                                                    B.nd0.ROLE_SUBSCRIPTION_EMOJI,
                                                ),
                                        }),
                                    }),
                                (0, r.jsx)(f.Button, {
                                    text: H.intl.string(H.t["DU0dy/"]),
                                    variant: "primary",
                                    onClick: () => {
                                        var t;
                                        null == (t = e.current) || t.activateUploadDialogue();
                                    },
                                    disabled: v,
                                }),
                                (0, r.jsx)("div", {
                                    className: V.Fg,
                                    children: (0, r.jsx)(
                                        I.Ay,
                                        {
                                            ref: e,
                                            onChange: er,
                                            setLoading: S,
                                            disabled: v,
                                        },
                                        t.current,
                                    ),
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    children: H.intl.string(H.t.EgNCTi),
                                }),
                            ],
                        }),
                        (0, r.jsx)(X, {
                            isLoading: null == p,
                            staticEmoji: D,
                            animatedEmoji: F,
                            guild: l,
                            theme: c,
                            onEdit: (e) =>
                                q({
                                    emoji: e,
                                }),
                            newlyAddedEmojiIds: Z,
                        }),
                    ],
                }),
            ],
        });
    };
