n.d(t, {
    FT: () => J,
    L3: () => q,
    ZP: () => Q,
}),
    n(388685),
    n(583741);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(620389),
    g = n(772848),
    f = n(442837),
    m = n(28664),
    b = n(481060),
    p = n(668781),
    h = n(80932),
    x = n(599059),
    j = n(327802),
    v = n(110924),
    O = n(100527),
    y = n(570908),
    C = n(200876),
    N = n(748523),
    E = n(719403),
    I = n(730089),
    S = n(372444),
    _ = n(372129),
    T = n(357156),
    P = n(210887),
    w = n(626135),
    Z = n(768581),
    R = n(176354),
    D = n(267642),
    A = n(51144),
    L = n(434404),
    k = n(471613),
    G = n(999382),
    M = n(806774),
    U = n(981631),
    B = n(185923),
    F = n(388032),
    H = n(908771),
    W = n(579480);
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
let V = d().throttle(h.OQ, 1000),
    K = (e) => {
        var t, n;
        let { guildId: l, emoji: s, onEdit: o, editingDisabled: c = !1, isNewlyAdded: d = !1 } = e,
            [g, f] = i.useState(s.name),
            j = Z.ZP.getEmojiURL({
                id: s.id,
                animated: s.animated,
                size: 32,
            }),
            [v] = (0, b.q_F)(
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
            [O] = (0, b.q_F)(
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
            C = A.ZP.useUserTag(s.user);
        return (0, r.jsxs)("div", {
            className: a()(H.emojiRow, W.card),
            role: "row",
            children: [
                (0, r.jsx)("div", {
                    className: H.emojiColumn,
                    children: (0, r.jsx)(m.u, {
                        text: s.available ? null : F.intl.string(F.t.KUzI73),
                        children: (0, r.jsx)(u.animated.div, {
                            className: a()(H.emojiImage, { [H.emojiDisabled]: !s.available }),
                            style:
                                ((t = z({}, d ? v : {}, d ? O : {})),
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
                    className: H.column,
                    children: (0, r.jsx)("div", {
                        className: H.emojiAliasInputContainer,
                        children: (0, r.jsx)(x.Z, {
                            className: a()({ [H.emojiAliasInputDisabled]: c }),
                            disabled: c,
                            minLen: 1,
                            maxLen: B.Yc,
                            name: F.intl.string(F.t.qUpzYO),
                            autoComplete: "off",
                            value: null != g ? g : "",
                            onBlur: () => {
                                if (g === s.name) return;
                                let e = R.ZP.sanitizeEmojiName(g);
                                e !== s.name &&
                                    (0, h.dv)({
                                        guildId: l,
                                        emojiId: s.id,
                                        name: e,
                                    }),
                                    f(e);
                            },
                            onChange: (e) => {
                                f(e.target.value);
                            },
                        }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: H.column,
                    children: (0, r.jsx)(y.Z, {
                        avatar: (0, r.jsx)(b.qEK, {
                            src: s.user.getAvatarURL(l, 20),
                            "aria-label": C,
                            size: b.EFr.SIZE_20,
                        }),
                        name: (0, r.jsx)(b.Text, {
                            variant: "text-sm/normal",
                            children: C,
                        }),
                    }),
                }),
                !c &&
                    (0, r.jsxs)("div", {
                        className: H.emojiRowTools,
                        children: [
                            null == o
                                ? null
                                : (0, r.jsx)(m.u, {
                                      text: F.intl.string(F.t.FOYn8U),
                                      "aria-label": F.intl.string(F.t.FOYn8U),
                                      children: (0, r.jsx)(b.hU, {
                                          size: "sm",
                                          variant: "secondary",
                                          icon: b.vdY,
                                          onClick: () => o(s, l),
                                          "aria-label": F.intl.string(F.t.FOYn8U),
                                      }),
                                  }),
                            (0, r.jsx)(m.u, {
                                text: F.intl.string(F.t["+euLPe"]),
                                "aria-label": F.intl.string(F.t["+euLPe"]),
                                children: (0, r.jsx)(b.hU, {
                                    size: "sm",
                                    variant: "critical-secondary",
                                    icon: b.XHJ,
                                    onClick: () => {
                                        (0, h.RE)(l, s.id).catch((e) => {
                                            let { status: t } = e;
                                            429 === t &&
                                                p.Z.show({
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
    Y = (e) => {
        let {
            isLoading: t,
            staticEmoji: i,
            animatedEmoji: l,
            theme: a,
            guild: s,
            onEdit: o,
            newlyAddedEmojiIds: c,
        } = e;
        return t
            ? (0, r.jsx)(b.$jN, {
                  className: H.spinner,
                  type: b.$jN.Type.SPINNING_CIRCLE,
              })
            : 0 === i.length && 0 === l.length
              ? (0, r.jsxs)(b.ubH, {
                    theme: a,
                    className: H.empty,
                    children: [
                        (0, r.jsx)(b.oxh, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212,
                        }),
                        (0, r.jsx)(b.OZU, {
                            note: F.intl.string(F.t.RBbtMy),
                            children: F.intl.string(F.t.lxsmBd),
                        }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(q, {
                            title: F.intl.string(F.t.sMOuuS),
                            maxSlots: (0, D.y4)(s),
                            emojiCount: i.length,
                            children: (0, r.jsx)(J, {
                                emojis: i,
                                guild: s,
                                onEdit: o,
                                newlyAddedEmojiIds: c,
                            }),
                        }),
                        (0, r.jsx)(q, {
                            title: F.intl.string(F.t.wWjQye),
                            maxSlots: (0, D.y4)(s),
                            emojiCount: l.length,
                            children: (0, r.jsx)(J, {
                                emojis: l,
                                guild: s,
                                onEdit: o,
                                newlyAddedEmojiIds: c,
                            }),
                        }),
                    ],
                });
    },
    q = (e) => {
        let { title: t, maxSlots: n, emojiCount: i, children: l } = e,
            a = Math.max(n - i, 0);
        return (0, r.jsx)(b.C3N, {
            label: t,
            description: F.intl.format(F.t.sgL8sI, { count: a }),
            children: l,
        });
    },
    J = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: a = !1, newlyAddedEmojiIds: s } = e,
            o = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: c } = (0, T.Gw)(n),
            d = (0, f.e7)([P.Z], () => P.Z.theme);
        return 0 === t.length
            ? (0, r.jsx)(b.ubH, {
                  theme: d,
                  children: (0, r.jsx)(b.OZU, { children: F.intl.string(F.t.SpxYoT) }),
              })
            : (0, r.jsxs)("div", {
                  role: "table",
                  "aria-label": F.intl.string(F.t.sMOuuS),
                  className: H.table,
                  children: [
                      (0, r.jsxs)("div", {
                          role: "rowgroup",
                          className: H.tableHeader,
                          children: [
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: H.emojiColumn,
                                  children: (0, r.jsx)(b.Text, {
                                      variant: "text-sm/semibold",
                                      children: F.intl.string(F.t.Z0i3Gp),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: H.columnLabel,
                                  children: (0, r.jsx)(b.Text, {
                                      variant: "text-sm/semibold",
                                      children: F.intl.string(F.t.giajw6),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: H.columnLabel,
                                  children: (0, r.jsx)(b.Text, {
                                      variant: "text-sm/semibold",
                                      children: F.intl.string(F.t.edavpq),
                                  }),
                              }),
                              !a &&
                                  (0, r.jsx)("div", {
                                      role: "none",
                                      className: H.toolsLabel,
                                  }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          role: "rowgroup",
                          className: H.tableBody,
                          children: o.map((e) => {
                              var t;
                              return (0, r.jsx)(
                                  K,
                                  {
                                      guildId: n.id,
                                      emoji: e,
                                      onEdit: l,
                                      editingDisabled: a || !c(e),
                                      isNewlyAdded: null != (t = null == s ? void 0 : s.has(e.id)) && t,
                                  },
                                  e.id,
                              );
                          }),
                      }),
                  ],
              });
    },
    X = (e) => {
        let t,
            n,
            i,
            { staticEmojiCount: l, animatedEmojiCount: a, guild: s } = e,
            o = (0, D.y4)(s),
            c = Math.min(o - l, o - a),
            d = s.premiumTier,
            u = (0, D.FZ)(d);
        return null == u || d === U.Eu4.TIER_3 || c > 0
            ? null
            : (c > o
                  ? ((t = F.intl.formatToPlainString(F.t.j0UH0m, { level: u })),
                    (n = F.intl.formatToPlainString(F.t.VQeyK6, { level: u })),
                    (i = U.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = F.intl.string(F.t.zT9SxY)),
                    (n = F.intl.formatToPlainString(F.t.dBZ1RU, { level: u })),
                    (i = U.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(S.Z, {
                  header: t,
                  text: n,
                  guild: s,
                  analyticsLocation: {
                      page: U.ZY5.GUILD_SETTINGS,
                      section: U.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, D.ge)(u),
                  },
              }));
    },
    Q = () => {
        let e = i.useRef(null),
            t = i.useRef(0),
            l = (0, f.e7)([G.Z], () => G.Z.getGuild()),
            [a, s] = i.useState("");
        o()(null != l, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
        let c = (0, f.e7)([P.Z], () => P.Z.theme),
            { revision: u, emojis: m } = (0, f.cj)([k.Z], () => ({
                revision: k.Z.getEmojiRevision(l.id),
                emojis: k.Z.getEmojis(l.id),
            })),
            p = (0, v.Z)(u),
            [h, x] = i.useState(!1),
            [y, S] = i.useState(!1),
            T = i.useRef(null),
            {
                maxEmojiSlots: Z,
                availableEmojiSlots: R,
                staticEmoji: D,
                totalStaticEmoji: A,
                animatedEmoji: B,
                totalAnimatedEmoji: W,
            } = (0, E.t)({ guild: l }),
            [K, q] = i.useState(null);
        i.useEffect(() => {
            h && et();
        }, [h]),
            i.useEffect(() => {
                V(l.id);
            }, [l.id]),
            i.useEffect(() => {
                null != p && p < u && V(l.id);
            }, [u, p, l.id]),
            i.useEffect(() => {
                if (null != m && null == K) return void q(m);
            }, [m, K]);
        let J = i.useMemo(
                () =>
                    null == K
                        ? new Set()
                        : new Set(
                              d()
                                  .differenceBy(m, K, "id")
                                  .map((e) => e.id),
                          ),
                [m, K],
            ),
            Q = i.useCallback(
                function () {
                    let { emoji: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (null != e)
                        return void (0, N.i)({
                            guildId: l.id,
                            emoji: e,
                            analyticsLocation: O.Z.GUILD_SETTINGS_EMOJI_EDIT_BUTTON,
                        });
                    (0, N.i)({
                        guildId: l.id,
                        analyticsLocation: {
                            page: U.ZY5.GUILD_SETTINGS,
                            section: U.jXE.GUILD_SETTINGS_EMOJI_ADD_BUTTON,
                        },
                    });
                },
                [l],
            ),
            $ = async (e, t, n) => {
                let r = await (0, I.G)({
                    data: e,
                    file: t,
                    image: n,
                    guildId: l.id,
                    uploadId: a,
                    hideErrorModal: !0,
                    analyticsLocation: { page: U.ZY5.GUILD_SETTINGS },
                });
                if ("object" != typeof r || !("id" in r)) return r;
                M.M({
                    emojiId: r.id,
                    userImage: {
                        data: e,
                        file: t,
                        image: n,
                    },
                });
            },
            ee = async (e) => {
                s((0, g.Z)()),
                    w.default.track(U.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: l.id,
                        upload_id: a,
                    }),
                    await (0, _._j)(e, $),
                    x(!0);
            },
            et = () => {
                null !== T.current && ((0, b.Mr3)(T.current), (T.current = null));
            },
            en = async (e) => {
                T.current = await (0, b.ZDy)(async () => {
                    let { default: t } = await n.e("16169").then(n.bind(n, 935333));
                    return (n) => (0, r.jsx)(t, z({ processFiles: () => ee(e) }, n));
                });
            },
            er = i.useCallback(
                async (e, n, r) => {
                    await (0, N.i)({
                        userImage: {
                            data: e,
                            file: n,
                            image: r,
                        },
                        guildId: l.id,
                        analyticsLocation: { page: U.ZY5.GUILD_SETTINGS },
                    }),
                        (t.current += 1);
                },
                [l.id],
            ),
            ei = (0, C.l)(l);
        return (0, r.jsxs)("div", {
            className: H.emojiSettings,
            children: [
                0 === R
                    ? null
                    : (0, r.jsx)(j.Z, {
                          className: H.emojiUploadContainer,
                          onDrop: en,
                      }),
                (0, r.jsxs)(b.Kqy, {
                    gap: 20,
                    children: [
                        (0, r.jsxs)(b.Kqy, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(b.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: F.intl.string(F.t.sMOuuS),
                                }),
                                (0, r.jsx)(b.Text, {
                                    variant: "text-md/normal",
                                    children: F.intl.format(F.t.TA1BR0, { count: Z }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(X, {
                            guild: l,
                            staticEmojiCount: A,
                            animatedEmojiCount: W,
                        }),
                        (0, r.jsxs)("div", {
                            className: H.uploader,
                            children: [
                                ei &&
                                    (0, r.jsx)(b.Wn, {
                                        messageType: b.QYI.INFO,
                                        children: F.intl.format(F.t.uMkfTo, {
                                            onClick: () =>
                                                L.Z.open(
                                                    l.id,
                                                    U.pNK.ROLE_SUBSCRIPTIONS,
                                                    void 0,
                                                    U.KsC.ROLE_SUBSCRIPTION_EMOJI,
                                                ),
                                        }),
                                    }),
                                (0, r.jsx)(b.Button, {
                                    text: F.intl.string(F.t["DU0dy/"]),
                                    variant: "primary",
                                    onClick: () => {
                                        var t;
                                        null == (t = e.current) || t.activateUploadDialogue();
                                    },
                                    disabled: y,
                                }),
                                (0, r.jsx)("div", {
                                    className: H.fileInput,
                                    children: (0, r.jsx)(
                                        _.ZP,
                                        {
                                            ref: e,
                                            onChange: er,
                                            setLoading: S,
                                            disabled: y,
                                        },
                                        t.current,
                                    ),
                                }),
                                (0, r.jsx)(b.Text, {
                                    variant: "text-xs/normal",
                                    children: F.intl.string(F.t.EgNCTi),
                                }),
                            ],
                        }),
                        (0, r.jsx)(Y, {
                            isLoading: null == m,
                            staticEmoji: D,
                            animatedEmoji: B,
                            guild: l,
                            theme: c,
                            onEdit: (e) => Q({ emoji: e }),
                            newlyAddedEmojiIds: J,
                        }),
                    ],
                }),
            ],
        });
    };
