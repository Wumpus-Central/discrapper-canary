n.d(t, { Ay: () => eu, Bt: () => eo, zI: () => ed });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    d = n(735438),
    c = n.n(d),
    u = n(419354),
    m = n(835245),
    g = n(311907),
    h = n(990078),
    x = n(717421),
    _ = n(97808),
    p = n(778712),
    A = n(834730),
    E = n(408278),
    f = n(22231),
    j = n(241326),
    N = n(289873),
    I = n(396478),
    C = n(270003),
    b = n(192308),
    v = n(331322),
    S = n(534514),
    T = n(512950),
    y = n(821609),
    R = n(157559),
    L = n(554375),
    D = n(971251),
    O = n(615751),
    G = n(475743),
    M = n(793574),
    k = n(262295),
    U = n(936555),
    w = n(725437),
    P = n(952385),
    B = n(810877),
    F = n(945086),
    H = n(824832),
    V = n(931991),
    z = n(544028),
    W = n(954571),
    Y = n(486020),
    K = n(690521),
    X = n(473145),
    Z = n(427262),
    J = n(997509),
    q = n(885617),
    Q = n(555337),
    $ = n(288224),
    ee = n(652215),
    et = n(307731),
    en = n(985018),
    ei = n(462e3),
    el = n(274446);
let es = c().throttle(L.dZ, 1e3),
    er = (e) => {
        let { guildId: t, emoji: n, onEdit: s, editingDisabled: a = !1, isNewlyAdded: o = !1 } = e,
            [d, c] = l.useState(n.name),
            m = Y.Ay.getEmojiURL({ id: n.id, animated: n.animated, size: 32 }),
            [g] = (0, x.z)(
                () => ({ from: { scale: 2 }, to: { scale: 1 }, config: { mass: 10, tension: 1500, friction: 115 } }),
                o ? "respect-motion-settings" : "animate-never",
            ),
            [N] = (0, x.z)(
                () => ({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 200, clamp: !0 } }),
                o ? "respect-motion-settings" : "animate-never",
            ),
            I = Z.Ay.useUserTag(n.user);
        return (0, i.jsxs)("div", {
            className: r()(ei.nI, el.N),
            role: "row",
            children: [
                (0, i.jsx)("div", {
                    className: ei.DW,
                    children: (0, i.jsx)(h.m, {
                        text: n.available ? null : en.intl.string(en.t.KUzI73),
                        children: (0, i.jsx)(u.animated.div, {
                            className: r()(ei.mp, { [ei.Zw]: !n.available }),
                            style: { ...(o ? g : {}), ...(o ? N : {}), backgroundImage: `url(${m})` },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: ei.fi,
                    children: (0, i.jsx)("div", {
                        className: ei.Yf,
                        children: (0, i.jsx)(D.A, {
                            className: r()({ [ei.XH]: a }),
                            disabled: a,
                            minLen: 1,
                            maxLen: et.EMOJI_MAX_LENGTH,
                            name: en.intl.string(en.t.qUpzYO),
                            autoComplete: "off",
                            value: d ?? "",
                            onBlur: () => {
                                if (d === n.name) return;
                                let e = K.Ay.sanitizeEmojiName(d);
                                e !== n.name && (0, L.Cp)({ guildId: t, emojiId: n.id, name: e }), c(e);
                            },
                            onChange: (e) => {
                                c(e.target.value);
                            },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: ei.fi,
                    children: (0, i.jsx)(k.A, {
                        avatar: (0, i.jsx)(_.eu, {
                            src: n.user.getAvatarURL(t, 20),
                            "aria-label": I,
                            size: p._3.SIZE_20,
                        }),
                        name: (0, i.jsx)(A.E, { variant: "text-sm/normal", children: I }),
                    }),
                }),
                !a &&
                    (0, i.jsxs)("div", {
                        className: ei.AU,
                        children: [
                            null == s
                                ? null
                                : (0, i.jsx)(h.m, {
                                      text: en.intl.string(en.t.FOYn8U),
                                      "aria-label": en.intl.string(en.t.FOYn8U),
                                      children: (0, i.jsx)(E.K, {
                                          size: "sm",
                                          variant: "secondary",
                                          icon: f.R,
                                          onClick: () => s(n, t),
                                          "aria-label": en.intl.string(en.t.FOYn8U),
                                      }),
                                  }),
                            (0, i.jsx)(h.m, {
                                text: en.intl.string(en.t["+euLPe"]),
                                "aria-label": en.intl.string(en.t["+euLPe"]),
                                children: (0, i.jsx)(E.K, {
                                    size: "sm",
                                    variant: "critical-secondary",
                                    icon: j.u,
                                    onClick: () => {
                                        (0, L.ak)(t, n.id).catch((e) => {
                                            let { status: t } = e;
                                            429 === t &&
                                                R.A.show({
                                                    title: en.intl.string(en.t.iufib1),
                                                    body: en.intl.string(en.t.Whhv4w),
                                                });
                                        });
                                    },
                                    "aria-label": en.intl.string(en.t["+euLPe"]),
                                }),
                            }),
                        ],
                    }),
            ],
        });
    },
    ea = (e) => {
        let {
            isLoading: t,
            staticEmoji: l,
            animatedEmoji: s,
            theme: r,
            guild: a,
            onEdit: o,
            newlyAddedEmojiIds: d,
        } = e;
        return t
            ? (0, i.jsx)(N.y, { className: ei.u1, type: N.y.Type.SPINNING_CIRCLE })
            : 0 === l.length && 0 === s.length
              ? (0, i.jsxs)(I.pp, {
                    theme: r,
                    className: ei.Ie,
                    children: [
                        (0, i.jsx)(I.G8, { darkSrc: n(223685), lightSrc: n(388547), width: 272, height: 212 }),
                        (0, i.jsx)(I.SG, { note: en.intl.string(en.t.RBbtMy), children: en.intl.string(en.t.lxsmBd) }),
                    ],
                })
              : (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(eo, {
                            title: en.intl.string(en.t.sMOuuS),
                            maxSlots: (0, X.sN)(a),
                            emojiCount: l.length,
                            children: (0, i.jsx)(ed, { emojis: l, guild: a, onEdit: o, newlyAddedEmojiIds: d }),
                        }),
                        (0, i.jsx)(eo, {
                            title: en.intl.string(en.t.wWjQye),
                            maxSlots: (0, X.sN)(a),
                            emojiCount: s.length,
                            children: (0, i.jsx)(ed, { emojis: s, guild: a, onEdit: o, newlyAddedEmojiIds: d }),
                        }),
                    ],
                });
    },
    eo = (e) => {
        let { title: t, maxSlots: n, emojiCount: l, children: s } = e,
            r = Math.max(n - l, 0);
        return (0, i.jsx)(C.n, { label: t, description: en.intl.format(en.t.sgL8sI, { count: r }), children: s });
    },
    ed = (e) => {
        let { emojis: t, guild: n, onEdit: s, editingDisabled: r = !1, newlyAddedEmojiIds: a } = e,
            o = l.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: d } = (0, V.ie)(n),
            c = (0, g.bG)([z.A], () => z.A.theme);
        return 0 === t.length
            ? (0, i.jsx)(I.pp, { theme: c, children: (0, i.jsx)(I.SG, { children: en.intl.string(en.t.SpxYoT) }) })
            : (0, i.jsxs)("div", {
                  role: "table",
                  "aria-label": en.intl.string(en.t.sMOuuS),
                  className: ei.tp,
                  children: [
                      (0, i.jsxs)("div", {
                          role: "rowgroup",
                          className: ei.qd,
                          children: [
                              (0, i.jsx)("div", {
                                  role: "columnheader",
                                  className: ei.DW,
                                  children: (0, i.jsx)(A.E, {
                                      variant: "text-sm/semibold",
                                      children: en.intl.string(en.t.Z0i3Gp),
                                  }),
                              }),
                              (0, i.jsx)("div", {
                                  role: "columnheader",
                                  className: ei.Zp,
                                  children: (0, i.jsx)(A.E, {
                                      variant: "text-sm/semibold",
                                      children: en.intl.string(en.t.giajw6),
                                  }),
                              }),
                              (0, i.jsx)("div", {
                                  role: "columnheader",
                                  className: ei.Zp,
                                  children: (0, i.jsx)(A.E, {
                                      variant: "text-sm/semibold",
                                      children: en.intl.string(en.t.edavpq),
                                  }),
                              }),
                              !r && (0, i.jsx)("div", { role: "none", className: ei.cs }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          role: "rowgroup",
                          className: ei.bg,
                          children: o.map((e) =>
                              (0, i.jsx)(
                                  er,
                                  {
                                      guildId: n.id,
                                      emoji: e,
                                      onEdit: s,
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
    ec = (e) => {
        let t,
            n,
            l,
            { staticEmojiCount: s, animatedEmojiCount: r, guild: a } = e,
            o = (0, X.sN)(a),
            d = Math.min(o - s, o - r),
            c = a.premiumTier,
            u = (0, X.ax)(c);
        return null == u || c === ee.TVA.TIER_3 || d > 0
            ? null
            : (d > o
                  ? ((t = en.intl.formatToPlainString(en.t.j0UH0m, { level: u })),
                    (n = en.intl.formatToPlainString(en.t.VQeyK6, { level: u })),
                    (l = ee.ZSU.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = en.intl.string(en.t.zT9SxY)),
                    (n = en.intl.formatToPlainString(en.t.dBZ1RU, { level: u })),
                    (l = ee.ZSU.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, i.jsx)(F.A, {
                  header: t,
                  text: n,
                  guild: a,
                  analyticsLocation: {
                      page: ee.liQ.GUILD_SETTINGS,
                      section: ee.JJy.GUILD_SETTINGS_STICKERS,
                      object: l,
                      objectType: (0, X.k1)(u),
                  },
              }));
    },
    eu = () => {
        let e = l.useRef(null),
            t = l.useRef(0),
            s = (0, g.bG)([Q.A], () => Q.A.getGuild()),
            [r, a] = l.useState("");
        o()(null != s, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
        let d = (0, g.bG)([z.A], () => z.A.theme),
            { revision: u, emojis: h } = (0, g.cf)([q.A], () => ({
                revision: q.A.getEmojiRevision(s.id),
                emojis: q.A.getEmojis(s.id),
            })),
            x = (0, G.A)(u),
            [_, p] = l.useState(!1),
            [E, f] = l.useState(!1),
            j = l.useRef(null),
            {
                maxEmojiSlots: N,
                availableEmojiSlots: I,
                staticEmoji: C,
                totalStaticEmoji: R,
                animatedEmoji: L,
                totalAnimatedEmoji: D,
            } = (0, P.v)({ guild: s }),
            [k, F] = l.useState(null);
        l.useEffect(() => {
            _ && Z();
        }, [_]),
            l.useEffect(() => {
                es(s.id);
            }, [s.id]),
            l.useEffect(() => {
                null != x && x < u && es(s.id);
            }, [u, x, s.id]),
            l.useEffect(() => {
                if (null != h && null == k) return void F(h);
            }, [h, k]);
        let V = l.useMemo(
                () =>
                    null == k
                        ? new Set()
                        : new Set(
                              c()
                                  .differenceBy(h, k, "id")
                                  .map((e) => e.id),
                          ),
                [h, k],
            ),
            Y = l.useCallback(
                function () {
                    let { emoji: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    null != e
                        ? (0, w.f)({ guildId: s.id, emoji: e, analyticsLocation: M.A.GUILD_SETTINGS_EMOJI_EDIT_BUTTON })
                        : (0, w.f)({
                              guildId: s.id,
                              analyticsLocation: {
                                  page: ee.liQ.GUILD_SETTINGS,
                                  section: ee.JJy.GUILD_SETTINGS_EMOJI_ADD_BUTTON,
                              },
                          });
                },
                [s],
            ),
            K = async (e, t, n) => {
                let i = await (0, B.W)({
                    data: e,
                    file: t,
                    image: n,
                    guildId: s.id,
                    uploadId: r,
                    hideErrorModal: !0,
                    analyticsLocation: { page: ee.liQ.GUILD_SETTINGS },
                });
                if ("object" != typeof i || !("id" in i)) return i;
                $.X({ emojiId: i.id, userImage: { data: e, file: t, image: n } });
            },
            X = async (e) => {
                a((0, m.A)()),
                    W.default.track(ee.HAw.EMOJI_UPLOAD_STARTED, { guild_id: s.id, upload_id: r }),
                    await (0, H.UD)(e, K),
                    p(!0);
            },
            Z = () => {
                null !== j.current && ((0, b.closeModal)(j.current), (j.current = null));
            },
            et = async (e) => {
                j.current = await (0, b.openModalLazy)(async () => {
                    let { default: t } = await n.e("17259").then(n.bind(n, 897126));
                    return (n) => (0, i.jsx)(t, { processFiles: () => X(e), ...n });
                });
            },
            el = l.useCallback(
                async (e, n, i) => {
                    await (0, w.f)({
                        userImage: { data: e, file: n, image: i },
                        guildId: s.id,
                        analyticsLocation: { page: ee.liQ.GUILD_SETTINGS },
                    }),
                        (t.current += 1);
                },
                [s.id],
            ),
            er = (0, U.w)(s);
        return (0, i.jsxs)("div", {
            className: ei.Gi,
            children: [
                0 === I ? null : (0, i.jsx)(O.A, { className: ei.Lc, onDrop: et }),
                (0, i.jsxs)(v.B, {
                    gap: 20,
                    children: [
                        (0, i.jsxs)(v.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(S.D, {
                                    variant: "heading-lg/semibold",
                                    children: en.intl.string(en.t.sMOuuS),
                                }),
                                (0, i.jsx)(A.E, {
                                    variant: "text-md/normal",
                                    children: en.intl.format(en.t.TA1BR0, { count: N }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(ec, { guild: s, staticEmojiCount: R, animatedEmojiCount: D }),
                        (0, i.jsxs)("div", {
                            className: ei.xp,
                            children: [
                                er &&
                                    (0, i.jsx)(T.p, {
                                        messageType: T.Y.INFO,
                                        children: en.intl.format(en.t.uMkfTo, {
                                            onClick: () =>
                                                J.A.open(
                                                    s.id,
                                                    ee.BEX.ROLE_SUBSCRIPTIONS,
                                                    void 0,
                                                    ee.nd0.ROLE_SUBSCRIPTION_EMOJI,
                                                ),
                                        }),
                                    }),
                                (0, i.jsx)(y.$, {
                                    text: en.intl.string(en.t["DU0dy/"]),
                                    variant: "primary",
                                    onClick: () => {
                                        e.current?.activateUploadDialogue();
                                    },
                                    disabled: E,
                                }),
                                (0, i.jsx)("div", {
                                    className: ei.Fg,
                                    children: (0, i.jsx)(
                                        H.Ay,
                                        { ref: e, onChange: el, setLoading: f, disabled: E },
                                        t.current,
                                    ),
                                }),
                                (0, i.jsx)(A.E, { variant: "text-xs/normal", children: en.intl.string(en.t.EgNCTi) }),
                            ],
                        }),
                        (0, i.jsx)(ea, {
                            isLoading: null == h,
                            staticEmoji: C,
                            animatedEmoji: L,
                            guild: s,
                            theme: d,
                            onEdit: (e) => Y({ emoji: e }),
                            newlyAddedEmojiIds: V,
                        }),
                    ],
                }),
            ],
        });
    };
