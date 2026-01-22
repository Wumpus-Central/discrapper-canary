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
    c = n.n(a),
    o = n(735438),
    d = n.n(o),
    u = n(432022),
    f = n(835245),
    g = n(311907),
    b = n(990078),
    m = n(397927),
    p = n(157559),
    x = n(554375),
    h = n(971251),
    j = n(615751),
    O = n(475743),
    y = n(793574),
    v = n(262295),
    A = n(936555),
    E = n(725437),
    N = n(952385),
    _ = n(810877),
    S = n(945086),
    T = n(824832),
    I = n(931991),
    C = n(544028),
    P = n(954571),
    w = n(486020),
    R = n(690521),
    D = n(473145),
    G = n(427262),
    L = n(997509),
    k = n(885617),
    M = n(555337),
    U = n(288224),
    F = n(652215),
    B = n(307731),
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
let Y = d().throttle(x.dZ, 1000),
    W = (e) => {
        var t, n;
        let { guildId: l, emoji: a, onEdit: c, editingDisabled: o = !1, isNewlyAdded: d = !1 } = e,
            [f, g] = i.useState(a.name),
            j = w.Ay.getEmojiURL({
                id: a.id,
                animated: a.animated,
                size: 32,
            }),
            [O] = (0, m.zhh)(
                () => ({
                    from: { scale: 2 },
                    to: { scale: 1 },
                    config: {
                        mass: 10,
                        tension: 1500,
                        friction: 115,
                    },
                }),
                d ? "respect-motion-settings" : "animate-never",
            ),
            [y] = (0, m.zhh)(
                () => ({
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                    config: {
                        duration: 200,
                        clamp: !0,
                    },
                }),
                d ? "respect-motion-settings" : "animate-never",
            ),
            A = G.Ay.useUserTag(a.user);
        return (0, r.jsxs)("div", {
            className: s()(V.nI, K.N),
            role: "row",
            children: [
                (0, r.jsx)("div", {
                    className: V.DW,
                    children: (0, r.jsx)(b.m, {
                        text: a.available ? null : H.intl.string(H.t.KUzI73),
                        children: (0, r.jsx)(u.animated.div, {
                            className: s()(V.mp, { [V.Zw]: !a.available }),
                            style:
                                ((t = z({}, d ? O : {}, d ? y : {})),
                                (n = n = { backgroundImage: "url(".concat(j, ")") }),
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
                        children: (0, r.jsx)(h.A, {
                            className: s()({ [V.XH]: o }),
                            disabled: o,
                            minLen: 1,
                            maxLen: B.zj,
                            name: H.intl.string(H.t.qUpzYO),
                            autoComplete: "off",
                            value: null != f ? f : "",
                            onBlur: () => {
                                if (f === a.name) return;
                                let e = R.Ay.sanitizeEmojiName(f);
                                e !== a.name &&
                                    (0, x.Cp)({
                                        guildId: l,
                                        emojiId: a.id,
                                        name: e,
                                    }),
                                    g(e);
                            },
                            onChange: (e) => {
                                g(e.target.value);
                            },
                        }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: V.fi,
                    children: (0, r.jsx)(v.A, {
                        avatar: (0, r.jsx)(m.euF, {
                            src: a.user.getAvatarURL(l, 20),
                            "aria-label": A,
                            size: m._3J.SIZE_20,
                        }),
                        name: (0, r.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            children: A,
                        }),
                    }),
                }),
                !o &&
                    (0, r.jsxs)("div", {
                        className: V.AU,
                        children: [
                            null == c
                                ? null
                                : (0, r.jsx)(b.m, {
                                      text: H.intl.string(H.t.FOYn8U),
                                      "aria-label": H.intl.string(H.t.FOYn8U),
                                      children: (0, r.jsx)(m.K0, {
                                          size: "sm",
                                          variant: "secondary",
                                          icon: m.R2l,
                                          onClick: () => c(a, l),
                                          "aria-label": H.intl.string(H.t.FOYn8U),
                                      }),
                                  }),
                            (0, r.jsx)(b.m, {
                                text: H.intl.string(H.t["+euLPe"]),
                                "aria-label": H.intl.string(H.t["+euLPe"]),
                                children: (0, r.jsx)(m.K0, {
                                    size: "sm",
                                    variant: "critical-secondary",
                                    icon: m.ucK,
                                    onClick: () => {
                                        (0, x.ak)(l, a.id).catch((e) => {
                                            let { status: t } = e;
                                            429 === t &&
                                                p.A.show({
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
            onEdit: c,
            newlyAddedEmojiIds: o,
        } = e;
        return t
            ? (0, r.jsx)(m.y$y, {
                  className: V.u1,
                  type: m.y$y.Type.SPINNING_CIRCLE,
              })
            : 0 === i.length && 0 === l.length
              ? (0, r.jsxs)(m.ppr, {
                    theme: s,
                    className: V.Ie,
                    children: [
                        (0, r.jsx)(m.G8R, {
                            darkSrc: n(223685),
                            lightSrc: n(388547),
                            width: 272,
                            height: 212,
                        }),
                        (0, r.jsx)(m.SGT, {
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
                                onEdit: c,
                                newlyAddedEmojiIds: o,
                            }),
                        }),
                        (0, r.jsx)(J, {
                            title: H.intl.string(H.t.wWjQye),
                            maxSlots: (0, D.sN)(a),
                            emojiCount: l.length,
                            children: (0, r.jsx)(Z, {
                                emojis: l,
                                guild: a,
                                onEdit: c,
                                newlyAddedEmojiIds: o,
                            }),
                        }),
                    ],
                });
    },
    J = (e) => {
        let { title: t, maxSlots: n, emojiCount: i, children: l } = e,
            s = Math.max(n - i, 0);
        return (0, r.jsx)(m.nVY, {
            label: t,
            description: H.intl.format(H.t.sgL8sI, { count: s }),
            children: l,
        });
    },
    Z = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: s = !1, newlyAddedEmojiIds: a } = e,
            c = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: o } = (0, I.ie)(n),
            d = (0, g.bG)([C.A], () => C.A.theme);
        return 0 === t.length
            ? (0, r.jsx)(m.ppr, {
                  theme: d,
                  children: (0, r.jsx)(m.SGT, { children: H.intl.string(H.t.SpxYoT) }),
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
                                  children: (0, r.jsx)(m.Text, {
                                      variant: "text-sm/semibold",
                                      children: H.intl.string(H.t.Z0i3Gp),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: V.Zp,
                                  children: (0, r.jsx)(m.Text, {
                                      variant: "text-sm/semibold",
                                      children: H.intl.string(H.t.giajw6),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: V.Zp,
                                  children: (0, r.jsx)(m.Text, {
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
                          children: c.map((e) => {
                              var t;
                              return (0, r.jsx)(
                                  W,
                                  {
                                      guildId: n.id,
                                      emoji: e,
                                      onEdit: l,
                                      editingDisabled: s || !o(e),
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
            c = (0, D.sN)(a),
            o = Math.min(c - l, c - s),
            d = a.premiumTier,
            u = (0, D.ax)(d);
        return null == u || d === F.TVA.TIER_3 || o > 0
            ? null
            : (o > c
                  ? ((t = H.intl.formatToPlainString(H.t.j0UH0m, { level: u })),
                    (n = H.intl.formatToPlainString(H.t.VQeyK6, { level: u })),
                    (i = F.ZSU.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = H.intl.string(H.t.zT9SxY)),
                    (n = H.intl.formatToPlainString(H.t.dBZ1RU, { level: u })),
                    (i = F.ZSU.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(S.A, {
                  header: t,
                  text: n,
                  guild: a,
                  analyticsLocation: {
                      page: F.liQ.GUILD_SETTINGS,
                      section: F.JJy.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, D.k1)(u),
                  },
              }));
    },
    q = () => {
        let e = i.useRef(null),
            t = i.useRef(0),
            l = (0, g.bG)([M.A], () => M.A.getGuild()),
            [s, a] = i.useState("");
        c()(null != l, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
        let o = (0, g.bG)([C.A], () => C.A.theme),
            { revision: u, emojis: b } = (0, g.cf)([k.A], () => ({
                revision: k.A.getEmojiRevision(l.id),
                emojis: k.A.getEmojis(l.id),
            })),
            p = (0, O.A)(u),
            [x, h] = i.useState(!1),
            [v, S] = i.useState(!1),
            I = i.useRef(null),
            {
                maxEmojiSlots: w,
                availableEmojiSlots: R,
                staticEmoji: D,
                totalStaticEmoji: G,
                animatedEmoji: B,
                totalAnimatedEmoji: K,
            } = (0, N.v)({ guild: l }),
            [W, J] = i.useState(null);
        i.useEffect(() => {
            x && et();
        }, [x]),
            i.useEffect(() => {
                Y(l.id);
            }, [l.id]),
            i.useEffect(() => {
                null != p && p < u && Y(l.id);
            }, [u, p, l.id]),
            i.useEffect(() => {
                if (null != b && null == W) return void J(b);
            }, [b, W]);
        let Z = i.useMemo(
                () =>
                    null == W
                        ? new Set()
                        : new Set(
                              d()
                                  .differenceBy(b, W, "id")
                                  .map((e) => e.id),
                          ),
                [b, W],
            ),
            q = i.useCallback(
                function () {
                    let { emoji: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    null != e
                        ? (0, E.f)({
                              guildId: l.id,
                              emoji: e,
                              analyticsLocation: y.A.GUILD_SETTINGS_EMOJI_EDIT_BUTTON,
                          })
                        : (0, E.f)({
                              guildId: l.id,
                              analyticsLocation: {
                                  page: F.liQ.GUILD_SETTINGS,
                                  section: F.JJy.GUILD_SETTINGS_EMOJI_ADD_BUTTON,
                              },
                          });
                },
                [l],
            ),
            $ = async (e, t, n) => {
                let r = await (0, _.W)({
                    data: e,
                    file: t,
                    image: n,
                    guildId: l.id,
                    uploadId: s,
                    hideErrorModal: !0,
                    analyticsLocation: { page: F.liQ.GUILD_SETTINGS },
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
                a((0, f.A)()),
                    P.default.track(F.HAw.EMOJI_UPLOAD_STARTED, {
                        guild_id: l.id,
                        upload_id: s,
                    }),
                    await (0, T.UD)(e, $),
                    h(!0);
            },
            et = () => {
                null !== I.current && ((0, m.OoC)(I.current), (I.current = null));
            },
            en = async (e) => {
                I.current = await (0, m.mMO)(async () => {
                    let { default: t } = await n.e("17259").then(n.bind(n, 897126));
                    return (n) => (0, r.jsx)(t, z({ processFiles: () => ee(e) }, n));
                });
            },
            er = i.useCallback(
                async (e, n, r) => {
                    await (0, E.f)({
                        userImage: {
                            data: e,
                            file: n,
                            image: r,
                        },
                        guildId: l.id,
                        analyticsLocation: { page: F.liQ.GUILD_SETTINGS },
                    }),
                        (t.current += 1);
                },
                [l.id],
            ),
            ei = (0, A.w)(l);
        return (0, r.jsxs)("div", {
            className: V.Gi,
            children: [
                0 === R
                    ? null
                    : (0, r.jsx)(j.A, {
                          className: V.Lc,
                          onDrop: en,
                      }),
                (0, r.jsxs)(m.BJc, {
                    gap: 20,
                    children: [
                        (0, r.jsxs)(m.BJc, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(m.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: H.intl.string(H.t.sMOuuS),
                                }),
                                (0, r.jsx)(m.Text, {
                                    variant: "text-md/normal",
                                    children: H.intl.format(H.t.TA1BR0, { count: w }),
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
                                    (0, r.jsx)(m.po8, {
                                        messageType: m.YCn.INFO,
                                        children: H.intl.format(H.t.uMkfTo, {
                                            onClick: () =>
                                                L.A.open(
                                                    l.id,
                                                    F.BEX.ROLE_SUBSCRIPTIONS,
                                                    void 0,
                                                    F.nd0.ROLE_SUBSCRIPTION_EMOJI,
                                                ),
                                        }),
                                    }),
                                (0, r.jsx)(m.Button, {
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
                                        T.Ay,
                                        {
                                            ref: e,
                                            onChange: er,
                                            setLoading: S,
                                            disabled: v,
                                        },
                                        t.current,
                                    ),
                                }),
                                (0, r.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    children: H.intl.string(H.t.EgNCTi),
                                }),
                            ],
                        }),
                        (0, r.jsx)(X, {
                            isLoading: null == b,
                            staticEmoji: D,
                            animatedEmoji: B,
                            guild: l,
                            theme: o,
                            onEdit: (e) => q({ emoji: e }),
                            newlyAddedEmojiIds: Z,
                        }),
                    ],
                }),
            ],
        });
    };
