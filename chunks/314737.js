"use strict";
n.d(t, { Ay: () => Z, Bt: () => Y, zI: () => X });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    d = n(735438),
    c = n.n(d),
    u = n(687498),
    m = n(835245),
    g = n(311907),
    x = n(990078),
    h = n(397927),
    _ = n(157559),
    p = n(554375),
    A = n(971251),
    f = n(838132),
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
    B = n(652215);
n(307731);
var F = n(985018),
    H = n(997728),
    V = n(8350);
let z = c().throttle(p.dZ, 1e3),
    W = (e) => {
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
            className: r()(H.nI, V.N),
            role: "row",
            children: [
                (0, i.jsx)("div", {
                    className: H.DW,
                    children: (0, i.jsx)(x.m, {
                        text: n.available ? null : F.intl.string(F.t.KUzI73),
                        children: (0, i.jsx)(u.animated.div, {
                            className: r()(H.mp, { [H.Zw]: !n.available }),
                            style: { ...(o ? g : {}), ...(o ? f : {}), backgroundImage: `url(${m})` },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: H.fi,
                    children: (0, i.jsx)("div", {
                        className: H.Yf,
                        children: (0, i.jsx)(A.A, {
                            className: r()({ [H.XH]: a }),
                            disabled: a,
                            minLen: 1,
                            maxLen: 32,
                            name: F.intl.string(F.t.qUpzYO),
                            autoComplete: "off",
                            value: d ?? "",
                            onBlur: () => {
                                if (d === n.name) return;
                                let e = L.Ay.sanitizeEmojiName(d);
                                e !== n.name && (0, p.Cp)({ guildId: t, emojiId: n.id, name: e }), c(e);
                            },
                            onChange: (e) => {
                                c(e.target.value);
                            },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: H.fi,
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
                        className: H.AU,
                        children: [
                            null == l
                                ? null
                                : (0, i.jsx)(x.m, {
                                      text: F.intl.string(F.t.FOYn8U),
                                      "aria-label": F.intl.string(F.t.FOYn8U),
                                      children: (0, i.jsx)(h.K0, {
                                          size: "sm",
                                          variant: "secondary",
                                          icon: h.R2l,
                                          onClick: () => l(n, t),
                                          "aria-label": F.intl.string(F.t.FOYn8U),
                                      }),
                                  }),
                            (0, i.jsx)(x.m, {
                                text: F.intl.string(F.t["+euLPe"]),
                                "aria-label": F.intl.string(F.t["+euLPe"]),
                                children: (0, i.jsx)(h.K0, {
                                    size: "sm",
                                    variant: "critical-secondary",
                                    icon: h.ucK,
                                    onClick: () => {
                                        (0, p.ak)(t, n.id).catch((e) => {
                                            let { status: t } = e;
                                            429 === t &&
                                                _.A.show({
                                                    title: F.intl.string(F.t.iufib1),
                                                    body: F.intl.string(F.t.Whhv4w),
                                                });
                                        });
                                    },
                                    "aria-label": F.intl.string(F.t["+euLPe"]),
                                }),
                            }),
                        ],
                    }),
            ],
        });
    },
    K = (e) => {
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
            ? (0, i.jsx)(h.y$y, { className: H.u1, type: h.y$y.Type.SPINNING_CIRCLE })
            : 0 === s.length && 0 === l.length
              ? (0, i.jsxs)(h.ppr, {
                    theme: r,
                    className: H.Ie,
                    children: [
                        (0, i.jsx)(h.G8R, { darkSrc: n(223685), lightSrc: n(388547), width: 272, height: 212 }),
                        (0, i.jsx)(h.SGT, { note: F.intl.string(F.t.RBbtMy), children: F.intl.string(F.t.lxsmBd) }),
                    ],
                })
              : (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(Y, {
                            title: F.intl.string(F.t.sMOuuS),
                            maxSlots: (0, D.sN)(a),
                            emojiCount: s.length,
                            children: (0, i.jsx)(X, { emojis: s, guild: a, onEdit: o, newlyAddedEmojiIds: d }),
                        }),
                        (0, i.jsx)(Y, {
                            title: F.intl.string(F.t.wWjQye),
                            maxSlots: (0, D.sN)(a),
                            emojiCount: l.length,
                            children: (0, i.jsx)(X, { emojis: l, guild: a, onEdit: o, newlyAddedEmojiIds: d }),
                        }),
                    ],
                });
    },
    Y = (e) => {
        let { title: t, maxSlots: n, emojiCount: s, children: l } = e,
            r = Math.max(n - s, 0);
        return (0, i.jsx)(h.nVY, { label: t, description: F.intl.format(F.t.sgL8sI, { count: r }), children: l });
    },
    X = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: r = !1, newlyAddedEmojiIds: a } = e,
            o = s.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: d } = (0, y.ie)(n),
            c = (0, g.bG)([R.A], () => R.A.theme);
        return 0 === t.length
            ? (0, i.jsx)(h.ppr, { theme: c, children: (0, i.jsx)(h.SGT, { children: F.intl.string(F.t.SpxYoT) }) })
            : (0, i.jsxs)("div", {
                  role: "table",
                  "aria-label": F.intl.string(F.t.sMOuuS),
                  className: H.tp,
                  children: [
                      (0, i.jsxs)("div", {
                          role: "rowgroup",
                          className: H.qd,
                          children: [
                              (0, i.jsx)("div", {
                                  role: "columnheader",
                                  className: H.DW,
                                  children: (0, i.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: F.intl.string(F.t.Z0i3Gp),
                                  }),
                              }),
                              (0, i.jsx)("div", {
                                  role: "columnheader",
                                  className: H.Zp,
                                  children: (0, i.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: F.intl.string(F.t.giajw6),
                                  }),
                              }),
                              (0, i.jsx)("div", {
                                  role: "columnheader",
                                  className: H.Zp,
                                  children: (0, i.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: F.intl.string(F.t.edavpq),
                                  }),
                              }),
                              !r && (0, i.jsx)("div", { role: "none", className: H.cs }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          role: "rowgroup",
                          className: H.bg,
                          children: o.map((e) =>
                              (0, i.jsx)(
                                  W,
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
    J = (e) => {
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
                  ? ((t = F.intl.formatToPlainString(F.t.j0UH0m, { level: u })),
                    (n = F.intl.formatToPlainString(F.t.VQeyK6, { level: u })),
                    (s = B.ZSU.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = F.intl.string(F.t.zT9SxY)),
                    (n = F.intl.formatToPlainString(F.t.dBZ1RU, { level: u })),
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
    Z = () => {
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
            [p, A] = s.useState(!1),
            [E, v] = s.useState(!1),
            y = s.useRef(null),
            {
                maxEmojiSlots: G,
                availableEmojiSlots: L,
                staticEmoji: D,
                totalStaticEmoji: M,
                animatedEmoji: V,
                totalAnimatedEmoji: W,
            } = (0, I.v)({ guild: l }),
            [Y, X] = s.useState(null);
        s.useEffect(() => {
            p && ee();
        }, [p]),
            s.useEffect(() => {
                z(l.id);
            }, [l.id]),
            s.useEffect(() => {
                null != _ && _ < u && z(l.id);
            }, [u, _, l.id]),
            s.useEffect(() => {
                if (null != x && null == Y) return void X(x);
            }, [x, Y]);
        let Z = s.useMemo(
                () =>
                    null == Y
                        ? new Set()
                        : new Set(
                              c()
                                  .differenceBy(x, Y, "id")
                                  .map((e) => e.id),
                          ),
                [x, Y],
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
                    A(!0);
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
            className: H.Gi,
            children: [
                0 === L ? null : (0, i.jsx)(f.A, { className: H.Lc, onDrop: et }),
                (0, i.jsxs)(h.BJc, {
                    gap: 20,
                    children: [
                        (0, i.jsxs)(h.BJc, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(h.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: F.intl.string(F.t.sMOuuS),
                                }),
                                (0, i.jsx)(h.Text, {
                                    variant: "text-md/normal",
                                    children: F.intl.format(F.t.TA1BR0, { count: G }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(J, { guild: l, staticEmojiCount: M, animatedEmojiCount: W }),
                        (0, i.jsxs)("div", {
                            className: H.xp,
                            children: [
                                ei &&
                                    (0, i.jsx)(h.po8, {
                                        messageType: h.YCn.INFO,
                                        children: F.intl.format(F.t.uMkfTo, {
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
                                    text: F.intl.string(F.t["DU0dy/"]),
                                    variant: "primary",
                                    onClick: () => {
                                        e.current?.activateUploadDialogue();
                                    },
                                    disabled: E,
                                }),
                                (0, i.jsx)("div", {
                                    className: H.Fg,
                                    children: (0, i.jsx)(
                                        S.Ay,
                                        { ref: e, onChange: en, setLoading: v, disabled: E },
                                        t.current,
                                    ),
                                }),
                                (0, i.jsx)(h.Text, { variant: "text-xs/normal", children: F.intl.string(F.t.EgNCTi) }),
                            ],
                        }),
                        (0, i.jsx)(K, {
                            isLoading: null == x,
                            staticEmoji: D,
                            animatedEmoji: V,
                            guild: l,
                            theme: d,
                            onEdit: (e) => q({ emoji: e }),
                            newlyAddedEmojiIds: Z,
                        }),
                    ],
                }),
            ],
        });
    };
