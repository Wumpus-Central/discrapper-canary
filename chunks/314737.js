"use strict";
n.d(t, { Ay: () => q, Bt: () => X, zI: () => J });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    d = n(735438),
    c = n.n(d),
    u = n(407045),
    m = n(835245),
    g = n(311907),
    x = n(990078),
    h = n(397927),
    _ = n(157559),
    A = n(554375),
    p = n(971251),
    f = n(615751),
    j = n(475743),
    N = n(793574),
    E = n(262295),
    C = n(936555),
    T = n(725437),
    I = n(952385),
    b = n(810877),
    v = n(945086),
    S = n(824832),
    y = n(931991),
    R = n(544028),
    O = n(954571),
    G = n(486020),
    L = n(690521),
    D = n(473145),
    M = n(427262),
    k = n(997509),
    U = n(885617),
    P = n(555337),
    w = n(288224),
    B = n(652215),
    F = n(307731),
    H = n(985018),
    V = n(462e3),
    z = n(274446);
let W = c().throttle(A.dZ, 1e3),
    K = (e) => {
        let { guildId: t, emoji: n, onEdit: l, editingDisabled: a = !1, isNewlyAdded: o = !1 } = e,
            [d, c] = s.useState(n.name),
            m = G.Ay.getEmojiURL({ id: n.id, animated: n.animated, size: 32 }),
            [g] = (0, h.zhh)(
                () => ({ from: { scale: 2 }, to: { scale: 1 }, config: { mass: 10, tension: 1500, friction: 115 } }),
                o ? "respect-motion-settings" : "animate-never",
            ),
            [f] = (0, h.zhh)(
                () => ({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 200, clamp: !0 } }),
                o ? "respect-motion-settings" : "animate-never",
            ),
            j = M.Ay.useUserTag(n.user);
        return (0, i.jsxs)("div", {
            className: r()(V.nI, z.N),
            role: "row",
            children: [
                (0, i.jsx)("div", {
                    className: V.DW,
                    children: (0, i.jsx)(x.m, {
                        text: n.available ? null : H.intl.string(H.t.KUzI73),
                        children: (0, i.jsx)(u.animated.div, {
                            className: r()(V.mp, { [V.Zw]: !n.available }),
                            style: { ...(o ? g : {}), ...(o ? f : {}), backgroundImage: `url(${m})` },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: V.fi,
                    children: (0, i.jsx)("div", {
                        className: V.Yf,
                        children: (0, i.jsx)(p.A, {
                            className: r()({ [V.XH]: a }),
                            disabled: a,
                            minLen: 1,
                            maxLen: F.EMOJI_MAX_LENGTH,
                            name: H.intl.string(H.t.qUpzYO),
                            autoComplete: "off",
                            value: d ?? "",
                            onBlur: () => {
                                if (d === n.name) return;
                                let e = L.Ay.sanitizeEmojiName(d);
                                e !== n.name && (0, A.Cp)({ guildId: t, emojiId: n.id, name: e }), c(e);
                            },
                            onChange: (e) => {
                                c(e.target.value);
                            },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: V.fi,
                    children: (0, i.jsx)(E.A, {
                        avatar: (0, i.jsx)(h.euF, {
                            src: n.user.getAvatarURL(t, 20),
                            "aria-label": j,
                            size: h._3J.SIZE_20,
                        }),
                        name: (0, i.jsx)(h.Text, { variant: "text-sm/normal", children: j }),
                    }),
                }),
                !a &&
                    (0, i.jsxs)("div", {
                        className: V.AU,
                        children: [
                            null == l
                                ? null
                                : (0, i.jsx)(x.m, {
                                      text: H.intl.string(H.t.FOYn8U),
                                      "aria-label": H.intl.string(H.t.FOYn8U),
                                      children: (0, i.jsx)(h.K0, {
                                          size: "sm",
                                          variant: "secondary",
                                          icon: h.R2l,
                                          onClick: () => l(n, t),
                                          "aria-label": H.intl.string(H.t.FOYn8U),
                                      }),
                                  }),
                            (0, i.jsx)(x.m, {
                                text: H.intl.string(H.t["+euLPe"]),
                                "aria-label": H.intl.string(H.t["+euLPe"]),
                                children: (0, i.jsx)(h.K0, {
                                    size: "sm",
                                    variant: "critical-secondary",
                                    icon: h.ucK,
                                    onClick: () => {
                                        (0, A.ak)(t, n.id).catch((e) => {
                                            let { status: t } = e;
                                            429 === t &&
                                                _.A.show({
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
    Y = (e) => {
        let {
            isLoading: t,
            staticEmoji: s,
            animatedEmoji: l,
            theme: r,
            guild: a,
            onEdit: o,
            newlyAddedEmojiIds: d,
        } = e;
        return t
            ? (0, i.jsx)(h.y$y, { className: V.u1, type: h.y$y.Type.SPINNING_CIRCLE })
            : 0 === s.length && 0 === l.length
              ? (0, i.jsxs)(h.ppr, {
                    theme: r,
                    className: V.Ie,
                    children: [
                        (0, i.jsx)(h.G8R, { darkSrc: n(223685), lightSrc: n(388547), width: 272, height: 212 }),
                        (0, i.jsx)(h.SGT, { note: H.intl.string(H.t.RBbtMy), children: H.intl.string(H.t.lxsmBd) }),
                    ],
                })
              : (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(X, {
                            title: H.intl.string(H.t.sMOuuS),
                            maxSlots: (0, D.sN)(a),
                            emojiCount: s.length,
                            children: (0, i.jsx)(J, { emojis: s, guild: a, onEdit: o, newlyAddedEmojiIds: d }),
                        }),
                        (0, i.jsx)(X, {
                            title: H.intl.string(H.t.wWjQye),
                            maxSlots: (0, D.sN)(a),
                            emojiCount: l.length,
                            children: (0, i.jsx)(J, { emojis: l, guild: a, onEdit: o, newlyAddedEmojiIds: d }),
                        }),
                    ],
                });
    },
    X = (e) => {
        let { title: t, maxSlots: n, emojiCount: s, children: l } = e,
            r = Math.max(n - s, 0);
        return (0, i.jsx)(h.nVY, { label: t, description: H.intl.format(H.t.sgL8sI, { count: r }), children: l });
    },
    J = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: r = !1, newlyAddedEmojiIds: a } = e,
            o = s.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: d } = (0, y.ie)(n),
            c = (0, g.bG)([R.A], () => R.A.theme);
        return 0 === t.length
            ? (0, i.jsx)(h.ppr, { theme: c, children: (0, i.jsx)(h.SGT, { children: H.intl.string(H.t.SpxYoT) }) })
            : (0, i.jsxs)("div", {
                  role: "table",
                  "aria-label": H.intl.string(H.t.sMOuuS),
                  className: V.tp,
                  children: [
                      (0, i.jsxs)("div", {
                          role: "rowgroup",
                          className: V.qd,
                          children: [
                              (0, i.jsx)("div", {
                                  role: "columnheader",
                                  className: V.DW,
                                  children: (0, i.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: H.intl.string(H.t.Z0i3Gp),
                                  }),
                              }),
                              (0, i.jsx)("div", {
                                  role: "columnheader",
                                  className: V.Zp,
                                  children: (0, i.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: H.intl.string(H.t.giajw6),
                                  }),
                              }),
                              (0, i.jsx)("div", {
                                  role: "columnheader",
                                  className: V.Zp,
                                  children: (0, i.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: H.intl.string(H.t.edavpq),
                                  }),
                              }),
                              !r && (0, i.jsx)("div", { role: "none", className: V.cs }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          role: "rowgroup",
                          className: V.bg,
                          children: o.map((e) =>
                              (0, i.jsx)(
                                  K,
                                  {
                                      guildId: n.id,
                                      emoji: e,
                                      onEdit: l,
                                      editingDisabled: r || !d(e),
                                      isNewlyAdded: a?.has(e.id) ?? !1,
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  ],
              });
    },
    Z = (e) => {
        let t,
            n,
            s,
            { staticEmojiCount: l, animatedEmojiCount: r, guild: a } = e,
            o = (0, D.sN)(a),
            d = Math.min(o - l, o - r),
            c = a.premiumTier,
            u = (0, D.ax)(c);
        return null == u || c === B.TVA.TIER_3 || d > 0
            ? null
            : (d > o
                  ? ((t = H.intl.formatToPlainString(H.t.j0UH0m, { level: u })),
                    (n = H.intl.formatToPlainString(H.t.VQeyK6, { level: u })),
                    (s = B.ZSU.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = H.intl.string(H.t.zT9SxY)),
                    (n = H.intl.formatToPlainString(H.t.dBZ1RU, { level: u })),
                    (s = B.ZSU.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, i.jsx)(v.A, {
                  header: t,
                  text: n,
                  guild: a,
                  analyticsLocation: {
                      page: B.liQ.GUILD_SETTINGS,
                      section: B.JJy.GUILD_SETTINGS_STICKERS,
                      object: s,
                      objectType: (0, D.k1)(u),
                  },
              }));
    },
    q = () => {
        let e = s.useRef(null),
            t = s.useRef(0),
            l = (0, g.bG)([P.A], () => P.A.getGuild()),
            [r, a] = s.useState("");
        o()(null != l, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
        let d = (0, g.bG)([R.A], () => R.A.theme),
            { revision: u, emojis: x } = (0, g.cf)([U.A], () => ({
                revision: U.A.getEmojiRevision(l.id),
                emojis: U.A.getEmojis(l.id),
            })),
            _ = (0, j.A)(u),
            [A, p] = s.useState(!1),
            [E, v] = s.useState(!1),
            y = s.useRef(null),
            {
                maxEmojiSlots: G,
                availableEmojiSlots: L,
                staticEmoji: D,
                totalStaticEmoji: M,
                animatedEmoji: F,
                totalAnimatedEmoji: z,
            } = (0, I.v)({ guild: l }),
            [K, X] = s.useState(null);
        s.useEffect(() => {
            A && ee();
        }, [A]),
            s.useEffect(() => {
                W(l.id);
            }, [l.id]),
            s.useEffect(() => {
                null != _ && _ < u && W(l.id);
            }, [u, _, l.id]),
            s.useEffect(() => {
                if (null != x && null == K) return void X(x);
            }, [x, K]);
        let J = s.useMemo(
                () =>
                    null == K
                        ? new Set()
                        : new Set(
                              c()
                                  .differenceBy(x, K, "id")
                                  .map((e) => e.id),
                          ),
                [x, K],
            ),
            q = s.useCallback(
                function () {
                    let { emoji: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    null != e
                        ? (0, T.f)({ guildId: l.id, emoji: e, analyticsLocation: N.A.GUILD_SETTINGS_EMOJI_EDIT_BUTTON })
                        : (0, T.f)({
                              guildId: l.id,
                              analyticsLocation: {
                                  page: B.liQ.GUILD_SETTINGS,
                                  section: B.JJy.GUILD_SETTINGS_EMOJI_ADD_BUTTON,
                              },
                          });
                },
                [l],
            ),
            Q = async (e, t, n) => {
                let i = await (0, b.W)({
                    data: e,
                    file: t,
                    image: n,
                    guildId: l.id,
                    uploadId: r,
                    hideErrorModal: !0,
                    analyticsLocation: { page: B.liQ.GUILD_SETTINGS },
                });
                if ("object" != typeof i || !("id" in i)) return i;
                w.X({ emojiId: i.id, userImage: { data: e, file: t, image: n } });
            },
            $ = async (e) => {
                a((0, m.A)()),
                    O.default.track(B.HAw.EMOJI_UPLOAD_STARTED, { guild_id: l.id, upload_id: r }),
                    await (0, S.UD)(e, Q),
                    p(!0);
            },
            ee = () => {
                null !== y.current && ((0, h.OoC)(y.current), (y.current = null));
            },
            et = async (e) => {
                y.current = await (0, h.mMO)(async () => {
                    let { default: t } = await n.e("17259").then(n.bind(n, 897126));
                    return (n) => (0, i.jsx)(t, { processFiles: () => $(e), ...n });
                });
            },
            en = s.useCallback(
                async (e, n, i) => {
                    await (0, T.f)({
                        userImage: { data: e, file: n, image: i },
                        guildId: l.id,
                        analyticsLocation: { page: B.liQ.GUILD_SETTINGS },
                    }),
                        (t.current += 1);
                },
                [l.id],
            ),
            ei = (0, C.w)(l);
        return (0, i.jsxs)("div", {
            className: V.Gi,
            children: [
                0 === L ? null : (0, i.jsx)(f.A, { className: V.Lc, onDrop: et }),
                (0, i.jsxs)(h.BJc, {
                    gap: 20,
                    children: [
                        (0, i.jsxs)(h.BJc, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(h.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: H.intl.string(H.t.sMOuuS),
                                }),
                                (0, i.jsx)(h.Text, {
                                    variant: "text-md/normal",
                                    children: H.intl.format(H.t.TA1BR0, { count: G }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(Z, { guild: l, staticEmojiCount: M, animatedEmojiCount: z }),
                        (0, i.jsxs)("div", {
                            className: V.xp,
                            children: [
                                ei &&
                                    (0, i.jsx)(h.po8, {
                                        messageType: h.YCn.INFO,
                                        children: H.intl.format(H.t.uMkfTo, {
                                            onClick: () =>
                                                k.A.open(
                                                    l.id,
                                                    B.BEX.ROLE_SUBSCRIPTIONS,
                                                    void 0,
                                                    B.nd0.ROLE_SUBSCRIPTION_EMOJI,
                                                ),
                                        }),
                                    }),
                                (0, i.jsx)(h.Button, {
                                    text: H.intl.string(H.t["DU0dy/"]),
                                    variant: "primary",
                                    onClick: () => {
                                        e.current?.activateUploadDialogue();
                                    },
                                    disabled: E,
                                }),
                                (0, i.jsx)("div", {
                                    className: V.Fg,
                                    children: (0, i.jsx)(
                                        S.Ay,
                                        { ref: e, onChange: en, setLoading: v, disabled: E },
                                        t.current,
                                    ),
                                }),
                                (0, i.jsx)(h.Text, { variant: "text-xs/normal", children: H.intl.string(H.t.EgNCTi) }),
                            ],
                        }),
                        (0, i.jsx)(Y, {
                            isLoading: null == x,
                            staticEmoji: D,
                            animatedEmoji: F,
                            guild: l,
                            theme: d,
                            onEdit: (e) => q({ emoji: e }),
                            newlyAddedEmojiIds: J,
                        }),
                    ],
                }),
            ],
        });
    };
