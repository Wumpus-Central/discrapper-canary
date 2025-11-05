n.d(t, {
    FT: () => Q,
    L3: () => J,
    ZP: () => et,
}),
    n(388685),
    n(583741);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(426322),
    g = n(772848),
    m = n(442837),
    p = n(28664),
    f = n(755721),
    h = n(481060),
    b = n(668781),
    x = n(80932),
    j = n(599059),
    v = n(327802),
    _ = n(110924),
    O = n(100527),
    C = n(570908),
    y = n(200876),
    N = n(556019),
    E = n(748523),
    I = n(719403),
    S = n(730089),
    T = n(372444),
    P = n(372129),
    w = n(357156),
    Z = n(210887),
    R = n(626135),
    D = n(768581),
    A = n(176354),
    L = n(267642),
    k = n(51144),
    G = n(434404),
    M = n(471613),
    U = n(999382),
    B = n(806774),
    F = n(981631),
    H = n(185923),
    z = n(388032),
    W = n(878341),
    V = n(620842);
function K(e) {
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
let Y = d().throttle(x.OQ, 1000),
    q = (e) => {
        var t, n;
        let { guildId: l, emoji: s, onEdit: o, editingDisabled: c = !1, isNewlyAdded: d = !1 } = e,
            [g, m] = i.useState(s.name),
            f = D.ZP.getEmojiURL({
                id: s.id,
                animated: s.animated,
                size: 32,
            }),
            [v] = (0, h.q_F)(
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
            [_] = (0, h.q_F)(
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
            O = k.ZP.useUserTag(s.user);
        return (0, r.jsxs)("div", {
            className: a()(W.emojiRow, V.card),
            role: "row",
            children: [
                (0, r.jsx)("div", {
                    className: W.emojiColumn,
                    children: (0, r.jsx)(p.u, {
                        text: s.available ? null : z.intl.string(z.t.KUzI73),
                        children: (0, r.jsx)(u.animated.div, {
                            className: a()(W.emojiImage, { [W.emojiDisabled]: !s.available }),
                            style:
                                ((t = K({}, d ? v : {}, d ? _ : {})),
                                (n = n = { backgroundImage: "url(".concat(f, ")") }),
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
                    className: W.column,
                    children: (0, r.jsx)("div", {
                        className: W.emojiAliasInputContainer,
                        children: (0, r.jsx)(j.Z, {
                            className: a()({ [W.emojiAliasInputDisabled]: c }),
                            disabled: c,
                            minLen: 1,
                            maxLen: H.Yc,
                            name: z.intl.string(z.t.qUpzYO),
                            autoComplete: "off",
                            value: null != g ? g : "",
                            onBlur: () => {
                                if (g === s.name) return;
                                let e = A.ZP.sanitizeEmojiName(g);
                                e !== s.name &&
                                    (0, x.dv)({
                                        guildId: l,
                                        emojiId: s.id,
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
                    className: W.column,
                    children: (0, r.jsx)(C.Z, {
                        avatar: (0, r.jsx)(h.qEK, {
                            src: s.user.getAvatarURL(l, 20),
                            "aria-label": O,
                            size: h.EFr.SIZE_20,
                        }),
                        name: (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            children: O,
                        }),
                    }),
                }),
                !c &&
                    (0, r.jsxs)("div", {
                        className: W.emojiRowTools,
                        children: [
                            null == o
                                ? null
                                : (0, r.jsx)(p.u, {
                                      text: z.intl.string(z.t.FOYn8U),
                                      "aria-label": z.intl.string(z.t.FOYn8U),
                                      children: (0, r.jsx)(h.hU, {
                                          size: "sm",
                                          variant: "secondary",
                                          icon: h.vdY,
                                          onClick: () => o(s, l),
                                          "aria-label": z.intl.string(z.t.FOYn8U),
                                      }),
                                  }),
                            (0, r.jsx)(p.u, {
                                text: z.intl.string(z.t["+euLPe"]),
                                "aria-label": z.intl.string(z.t["+euLPe"]),
                                children: (0, r.jsx)(h.hU, {
                                    size: "sm",
                                    variant: "critical-secondary",
                                    icon: h.XHJ,
                                    onClick: () => {
                                        (0, x.RE)(l, s.id).catch((e) => {
                                            let { status: t } = e;
                                            429 === t &&
                                                b.Z.show({
                                                    title: z.intl.string(z.t.iufib1),
                                                    body: z.intl.string(z.t.Whhv4w),
                                                });
                                        });
                                    },
                                    "aria-label": z.intl.string(z.t["+euLPe"]),
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
            theme: a,
            guild: s,
            onEdit: o,
            newlyAddedEmojiIds: c,
        } = e;
        return t
            ? (0, r.jsx)(h.$jN, {
                  className: W.spinner,
                  type: h.$jN.Type.SPINNING_CIRCLE,
              })
            : 0 === i.length && 0 === l.length
              ? (0, r.jsxs)(h.ubH, {
                    theme: a,
                    className: W.empty,
                    children: [
                        (0, r.jsx)(h.oxh, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212,
                        }),
                        (0, r.jsx)(h.OZU, {
                            note: z.intl.string(z.t.RBbtMy),
                            children: z.intl.string(z.t.lxsmBd),
                        }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(J, {
                            title: z.intl.string(z.t.sMOuuS),
                            maxSlots: (0, L.y4)(s),
                            emojiCount: i.length,
                            children: (0, r.jsx)(Q, {
                                emojis: i,
                                guild: s,
                                onEdit: o,
                                newlyAddedEmojiIds: c,
                            }),
                        }),
                        (0, r.jsx)(J, {
                            title: z.intl.string(z.t.wWjQye),
                            maxSlots: (0, L.y4)(s),
                            emojiCount: l.length,
                            children: (0, r.jsx)(Q, {
                                emojis: l,
                                guild: s,
                                onEdit: o,
                                newlyAddedEmojiIds: c,
                            }),
                        }),
                    ],
                });
    },
    J = (e) => {
        let { title: t, maxSlots: n, emojiCount: i, children: l } = e,
            a = Math.max(n - i, 0);
        return (0, r.jsx)(h.C3N, {
            label: t,
            description: z.intl.format(z.t.sgL8sI, { count: a }),
            children: l,
        });
    },
    Q = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: a = !1, newlyAddedEmojiIds: s } = e,
            o = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: c } = (0, w.Gw)(n),
            d = (0, m.e7)([Z.Z], () => Z.Z.theme);
        return 0 === t.length
            ? (0, r.jsx)(h.ubH, {
                  theme: d,
                  children: (0, r.jsx)(h.OZU, { children: z.intl.string(z.t.SpxYoT) }),
              })
            : (0, r.jsxs)("div", {
                  role: "table",
                  "aria-label": z.intl.string(z.t.sMOuuS),
                  className: W.table,
                  children: [
                      (0, r.jsxs)("div", {
                          role: "rowgroup",
                          className: W.tableHeader,
                          children: [
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: W.emojiColumn,
                                  children: (0, r.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: z.intl.string(z.t.Z0i3Gp),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: W.columnLabel,
                                  children: (0, r.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: z.intl.string(z.t.giajw6),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: W.columnLabel,
                                  children: (0, r.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: z.intl.string(z.t.edavpq),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          role: "rowgroup",
                          className: W.tableBody,
                          children: o.map((e) => {
                              var t;
                              return (0, r.jsx)(
                                  q,
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
    $ = (e) => {
        let t,
            n,
            i,
            { staticEmojiCount: l, animatedEmojiCount: a, guild: s } = e,
            o = (0, L.y4)(s),
            c = Math.min(o - l, o - a),
            d = s.premiumTier,
            u = (0, L.FZ)(d);
        return null == u || d === F.Eu4.TIER_3 || c > 0
            ? null
            : (c > o
                  ? ((t = z.intl.formatToPlainString(z.t.j0UH0m, { level: u })),
                    (n = z.intl.formatToPlainString(z.t.VQeyK6, { level: u })),
                    (i = F.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = z.intl.string(z.t.zT9SxY)),
                    (n = z.intl.formatToPlainString(z.t.dBZ1RU, { level: u })),
                    (i = F.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(T.Z, {
                  header: t,
                  text: n,
                  guild: s,
                  analyticsLocation: {
                      page: F.ZY5.GUILD_SETTINGS,
                      section: F.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, L.ge)(u),
                  },
              }));
    },
    ee = () =>
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(h.Heading, {
                    variant: "heading-sm/semibold",
                    children: z.intl.string(z.t.jrXfyw),
                }),
                (0, r.jsxs)("ul", {
                    className: W.emojiUploadUploadRequirementsList,
                    children: [
                        (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: z.intl.string(z.t.N2qTQ3),
                        }),
                        (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: z.intl.format(z.t.gfAXoR, { maxSize: H.xG }),
                        }),
                        (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: z.intl.string(z.t.rnwKPH),
                        }),
                        (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: z.intl.string(z.t["8Vr5Qd"]),
                        }),
                    ],
                }),
            ],
        }),
    et = () => {
        let e = i.useRef(null),
            t = (0, m.e7)([U.Z], () => U.Z.getGuild()),
            [l, a] = i.useState("");
        o()(null != t, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
        let s = (0, m.e7)([Z.Z], () => Z.Z.theme),
            { canCreateExpressions: c } = (0, w.XJ)(t),
            { revision: u, emojis: p } = (0, m.cj)([M.Z], () => ({
                revision: M.Z.getEmojiRevision(t.id),
                emojis: M.Z.getEmojis(t.id),
            })),
            b = (0, _.Z)(u),
            [x, j] = i.useState(!1),
            [C, T] = i.useState(!1),
            D = i.useRef(null),
            {
                maxEmojiSlots: A,
                availableEmojiSlots: L,
                staticEmoji: k,
                totalStaticEmoji: H,
                animatedEmoji: V,
                totalAnimatedEmoji: q,
            } = (0, I.t)({ guild: t }),
            J = (0, N.qt)({
                location: "guild_settings",
                autoTrackExposure: !0,
            }),
            [Q, et] = i.useState(null),
            en = C || 0 === L || !c;
        i.useEffect(() => {
            x && es();
        }, [x]),
            i.useEffect(() => {
                Y(t.id);
            }, [t.id]),
            i.useEffect(() => {
                null != b && b < u && Y(t.id);
            }, [u, b, t.id]),
            i.useEffect(() => {
                if (null != p && null == Q) return void et(p);
            }, [p, Q]);
        let er = i.useMemo(
                () =>
                    J.enabled && null != Q
                        ? new Set(
                              d()
                                  .differenceBy(p, Q, "id")
                                  .map((e) => e.id),
                          )
                        : new Set(),
                [J.enabled, p, Q],
            ),
            ei = i.useCallback(
                function () {
                    let { emoji: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (J.enabled && null != e)
                        return void (0, E.i)({
                            guildId: t.id,
                            emoji: e,
                            analyticsLocation: O.Z.GUILD_SETTINGS_EMOJI_EDIT_BUTTON,
                        });
                    (0, E.i)({
                        guildId: t.id,
                        analyticsLocation: {
                            page: F.ZY5.GUILD_SETTINGS,
                            section: F.jXE.GUILD_SETTINGS_EMOJI_ADD_BUTTON,
                        },
                    });
                },
                [J.enabled, t],
            ),
            el = async (e, n, r) => {
                let i = await (0, S.G)({
                    data: e,
                    file: n,
                    image: r,
                    guildId: t.id,
                    uploadId: l,
                    hideErrorModal: !0,
                    analyticsLocation: { page: F.ZY5.GUILD_SETTINGS },
                });
                if ("object" != typeof i || !("id" in i)) return i;
                B.M({
                    emojiId: i.id,
                    userImage: {
                        data: e,
                        file: n,
                        image: r,
                    },
                });
            },
            ea = async (e) => {
                a((0, g.Z)()),
                    R.default.track(F.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: t.id,
                        upload_id: l,
                    }),
                    await (0, P._j)(e, el),
                    j(!0);
            },
            es = () => {
                null !== D.current && ((0, h.Mr3)(D.current), (D.current = null));
            },
            eo = async (e) => {
                D.current = await (0, h.ZDy)(async () => {
                    let { default: t } = await n.e("16169").then(n.bind(n, 935333));
                    return (n) => (0, r.jsx)(t, K({ processFiles: () => ea(e) }, n));
                });
            },
            ec = (0, y.l)(t),
            ed = J.enabled ? (e) => ei({ emoji: e }) : void 0;
        return (0, r.jsxs)("div", {
            className: W.emojiSettings,
            children: [
                0 === L
                    ? null
                    : (0, r.jsx)(v.Z, {
                          className: W.emojiUploadContainer,
                          onDrop: eo,
                      }),
                (0, r.jsxs)(h.Kqy, {
                    gap: 20,
                    children: [
                        (0, r.jsxs)(h.Kqy, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(h.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: z.intl.string(z.t.sMOuuS),
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: "text-md/normal",
                                    children: z.intl.format(z.t.TA1BR0, { count: A }),
                                }),
                            ],
                        }),
                        (0, r.jsx)($, {
                            guild: t,
                            staticEmojiCount: H,
                            animatedEmojiCount: q,
                        }),
                        (0, r.jsxs)("div", {
                            className: W.uploader,
                            children: [
                                ec &&
                                    (0, r.jsx)(h.Wn, {
                                        messageType: h.QYI.INFO,
                                        children: z.intl.format(z.t.uMkfTo, {
                                            onClick: () =>
                                                G.Z.open(
                                                    t.id,
                                                    F.pNK.ROLE_SUBSCRIPTIONS,
                                                    void 0,
                                                    F.KsC.ROLE_SUBSCRIPTION_EMOJI,
                                                ),
                                        }),
                                    }),
                                J.enabled
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(h.Button, {
                                                  variant: "primary",
                                                  text: z.intl.string(z.t["DU0dy/"]),
                                                  onClick: () => ei(),
                                                  disabled: 0 === L,
                                              }),
                                              (0, r.jsx)(h.Text, {
                                                  variant: "text-xs/normal",
                                                  children: z.intl.string(z.t.EgNCTi),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(ee, {}),
                                              (0, r.jsxs)(f.zx, {
                                                  "data-migration-pending": !0,
                                                  tabIndex: -1,
                                                  size: f.zx.Sizes.MEDIUM,
                                                  onClick: () => {
                                                      let e = (0, g.Z)();
                                                      a(e),
                                                          R.default.track(F.rMx.EMOJI_UPLOAD_STARTED, {
                                                              guild_id: t.id,
                                                              upload_id: e,
                                                          });
                                                  },
                                                  disabled: en,
                                                  submitting: C,
                                                  focusProps: { within: !0 },
                                                  children: [
                                                      z.intl.string(z.t["DU0dy/"]),
                                                      L > 0
                                                          ? (0, r.jsx)(P.ZP, {
                                                                ref: e,
                                                                disabled: en,
                                                                tabIndex: 0,
                                                                onChange: el,
                                                                setLoading: T,
                                                                multiple: !0,
                                                            })
                                                          : null,
                                                  ],
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                        (0, r.jsx)(X, {
                            isLoading: null == p,
                            staticEmoji: k,
                            animatedEmoji: V,
                            guild: t,
                            theme: s,
                            onEdit: ed,
                            newlyAddedEmojiIds: er,
                        }),
                    ],
                }),
            ],
        });
    };
