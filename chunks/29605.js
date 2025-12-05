n.d(t, {
    FT: () => J,
    L3: () => X,
    ZP: () => ee,
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
    u = n(205120),
    g = n(772848),
    m = n(442837),
    p = n(28664),
    f = n(481060),
    h = n(668781),
    b = n(80932),
    x = n(599059),
    j = n(327802),
    _ = n(110924),
    v = n(100527),
    O = n(570908),
    C = n(200876),
    y = n(556019),
    N = n(748523),
    E = n(719403),
    I = n(730089),
    S = n(372444),
    T = n(372129),
    P = n(357156),
    w = n(210887),
    Z = n(626135),
    R = n(768581),
    D = n(176354),
    A = n(267642),
    L = n(51144),
    k = n(434404),
    G = n(471613),
    M = n(999382),
    U = n(806774),
    B = n(981631),
    F = n(185923),
    H = n(388032),
    z = n(878341),
    W = n(620842);
function V(e) {
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
let K = d().throttle(b.OQ, 1000),
    Y = (e) => {
        var t, n;
        let { guildId: l, emoji: s, onEdit: o, editingDisabled: c = !1, isNewlyAdded: d = !1 } = e,
            [g, m] = i.useState(s.name),
            j = R.ZP.getEmojiURL({
                id: s.id,
                animated: s.animated,
                size: 32,
            }),
            [_] = (0, f.q_F)(
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
            [v] = (0, f.q_F)(
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
            C = L.ZP.useUserTag(s.user);
        return (0, r.jsxs)("div", {
            className: a()(z.emojiRow, W.card),
            role: "row",
            children: [
                (0, r.jsx)("div", {
                    className: z.emojiColumn,
                    children: (0, r.jsx)(p.u, {
                        text: s.available ? null : H.intl.string(H.t.KUzI73),
                        children: (0, r.jsx)(u.animated.div, {
                            className: a()(z.emojiImage, { [z.emojiDisabled]: !s.available }),
                            style:
                                ((t = V({}, d ? _ : {}, d ? v : {})),
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
                    className: z.column,
                    children: (0, r.jsx)("div", {
                        className: z.emojiAliasInputContainer,
                        children: (0, r.jsx)(x.Z, {
                            className: a()({ [z.emojiAliasInputDisabled]: c }),
                            disabled: c,
                            minLen: 1,
                            maxLen: F.Yc,
                            name: H.intl.string(H.t.qUpzYO),
                            autoComplete: "off",
                            value: null != g ? g : "",
                            onBlur: () => {
                                if (g === s.name) return;
                                let e = D.ZP.sanitizeEmojiName(g);
                                e !== s.name &&
                                    (0, b.dv)({
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
                    className: z.column,
                    children: (0, r.jsx)(O.Z, {
                        avatar: (0, r.jsx)(f.qEK, {
                            src: s.user.getAvatarURL(l, 20),
                            "aria-label": C,
                            size: f.EFr.SIZE_20,
                        }),
                        name: (0, r.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            children: C,
                        }),
                    }),
                }),
                !c &&
                    (0, r.jsxs)("div", {
                        className: z.emojiRowTools,
                        children: [
                            null == o
                                ? null
                                : (0, r.jsx)(p.u, {
                                      text: H.intl.string(H.t.FOYn8U),
                                      "aria-label": H.intl.string(H.t.FOYn8U),
                                      children: (0, r.jsx)(f.hU, {
                                          size: "sm",
                                          variant: "secondary",
                                          icon: f.vdY,
                                          onClick: () => o(s, l),
                                          "aria-label": H.intl.string(H.t.FOYn8U),
                                      }),
                                  }),
                            (0, r.jsx)(p.u, {
                                text: H.intl.string(H.t["+euLPe"]),
                                "aria-label": H.intl.string(H.t["+euLPe"]),
                                children: (0, r.jsx)(f.hU, {
                                    size: "sm",
                                    variant: "critical-secondary",
                                    icon: f.XHJ,
                                    onClick: () => {
                                        (0, b.RE)(l, s.id).catch((e) => {
                                            let { status: t } = e;
                                            429 === t &&
                                                h.Z.show({
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
    q = (e) => {
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
            ? (0, r.jsx)(f.$jN, {
                  className: z.spinner,
                  type: f.$jN.Type.SPINNING_CIRCLE,
              })
            : 0 === i.length && 0 === l.length
              ? (0, r.jsxs)(f.ubH, {
                    theme: a,
                    className: z.empty,
                    children: [
                        (0, r.jsx)(f.oxh, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212,
                        }),
                        (0, r.jsx)(f.OZU, {
                            note: H.intl.string(H.t.RBbtMy),
                            children: H.intl.string(H.t.lxsmBd),
                        }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(X, {
                            title: H.intl.string(H.t.sMOuuS),
                            maxSlots: (0, A.y4)(s),
                            emojiCount: i.length,
                            children: (0, r.jsx)(J, {
                                emojis: i,
                                guild: s,
                                onEdit: o,
                                newlyAddedEmojiIds: c,
                            }),
                        }),
                        (0, r.jsx)(X, {
                            title: H.intl.string(H.t.wWjQye),
                            maxSlots: (0, A.y4)(s),
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
    X = (e) => {
        let { title: t, maxSlots: n, emojiCount: i, children: l } = e,
            a = Math.max(n - i, 0);
        return (0, r.jsx)(f.C3N, {
            label: t,
            description: H.intl.format(H.t.sgL8sI, { count: a }),
            children: l,
        });
    },
    J = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: a = !1, newlyAddedEmojiIds: s } = e,
            o = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: c } = (0, P.Gw)(n),
            d = (0, m.e7)([w.Z], () => w.Z.theme);
        return 0 === t.length
            ? (0, r.jsx)(f.ubH, {
                  theme: d,
                  children: (0, r.jsx)(f.OZU, { children: H.intl.string(H.t.SpxYoT) }),
              })
            : (0, r.jsxs)("div", {
                  role: "table",
                  "aria-label": H.intl.string(H.t.sMOuuS),
                  className: z.table,
                  children: [
                      (0, r.jsxs)("div", {
                          role: "rowgroup",
                          className: z.tableHeader,
                          children: [
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: z.emojiColumn,
                                  children: (0, r.jsx)(f.Text, {
                                      variant: "text-sm/semibold",
                                      children: H.intl.string(H.t.Z0i3Gp),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: z.columnLabel,
                                  children: (0, r.jsx)(f.Text, {
                                      variant: "text-sm/semibold",
                                      children: H.intl.string(H.t.giajw6),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: z.columnLabel,
                                  children: (0, r.jsx)(f.Text, {
                                      variant: "text-sm/semibold",
                                      children: H.intl.string(H.t.edavpq),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          role: "rowgroup",
                          className: z.tableBody,
                          children: o.map((e) => {
                              var t;
                              return (0, r.jsx)(
                                  Y,
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
    Q = (e) => {
        let t,
            n,
            i,
            { staticEmojiCount: l, animatedEmojiCount: a, guild: s } = e,
            o = (0, A.y4)(s),
            c = Math.min(o - l, o - a),
            d = s.premiumTier,
            u = (0, A.FZ)(d);
        return null == u || d === B.Eu4.TIER_3 || c > 0
            ? null
            : (c > o
                  ? ((t = H.intl.formatToPlainString(H.t.j0UH0m, { level: u })),
                    (n = H.intl.formatToPlainString(H.t.VQeyK6, { level: u })),
                    (i = B.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = H.intl.string(H.t.zT9SxY)),
                    (n = H.intl.formatToPlainString(H.t.dBZ1RU, { level: u })),
                    (i = B.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(S.Z, {
                  header: t,
                  text: n,
                  guild: s,
                  analyticsLocation: {
                      page: B.ZY5.GUILD_SETTINGS,
                      section: B.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, A.ge)(u),
                  },
              }));
    },
    $ = () =>
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(f.Heading, {
                    variant: "heading-sm/semibold",
                    children: H.intl.string(H.t.jrXfyw),
                }),
                (0, r.jsxs)("ul", {
                    className: z.emojiUploadUploadRequirementsList,
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: H.intl.string(H.t.N2qTQ3),
                        }),
                        (0, r.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: H.intl.format(H.t.gfAXoR, { maxSize: F.xG }),
                        }),
                        (0, r.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: H.intl.string(H.t.rnwKPH),
                        }),
                        (0, r.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: H.intl.string(H.t["8Vr5Qd"]),
                        }),
                    ],
                }),
            ],
        }),
    ee = () => {
        let e = i.useRef(null),
            t = i.useRef(0),
            l = (0, m.e7)([M.Z], () => M.Z.getGuild()),
            [a, s] = i.useState("");
        o()(null != l, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
        let c = (0, m.e7)([w.Z], () => w.Z.theme),
            { canCreateExpressions: u } = (0, P.XJ)(l),
            { revision: p, emojis: h } = (0, m.cj)([G.Z], () => ({
                revision: G.Z.getEmojiRevision(l.id),
                emojis: G.Z.getEmojis(l.id),
            })),
            b = (0, _.Z)(p),
            [x, O] = i.useState(!1),
            [S, R] = i.useState(!1),
            D = i.useRef(null),
            {
                maxEmojiSlots: A,
                availableEmojiSlots: L,
                staticEmoji: F,
                totalStaticEmoji: W,
                animatedEmoji: Y,
                totalAnimatedEmoji: X,
            } = (0, E.t)({ guild: l }),
            J = (0, y.qt)({
                location: "guild_settings",
                autoTrackExposure: !0,
            }),
            [ee, et] = i.useState(null),
            en = S || 0 === L || !u;
        i.useEffect(() => {
            x && es();
        }, [x]),
            i.useEffect(() => {
                K(l.id);
            }, [l.id]),
            i.useEffect(() => {
                null != b && b < p && K(l.id);
            }, [p, b, l.id]),
            i.useEffect(() => {
                if (null != h && null == ee) return void et(h);
            }, [h, ee]);
        let er = i.useMemo(
                () =>
                    J.enabled && null != ee
                        ? new Set(
                              d()
                                  .differenceBy(h, ee, "id")
                                  .map((e) => e.id),
                          )
                        : new Set(),
                [J.enabled, h, ee],
            ),
            ei = i.useCallback(
                function () {
                    let { emoji: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (J.enabled && null != e)
                        return void (0, N.i)({
                            guildId: l.id,
                            emoji: e,
                            analyticsLocation: v.Z.GUILD_SETTINGS_EMOJI_EDIT_BUTTON,
                        });
                    (0, N.i)({
                        guildId: l.id,
                        analyticsLocation: {
                            page: B.ZY5.GUILD_SETTINGS,
                            section: B.jXE.GUILD_SETTINGS_EMOJI_ADD_BUTTON,
                        },
                    });
                },
                [J.enabled, l],
            ),
            el = async (e, t, n) => {
                let r = await (0, I.G)({
                    data: e,
                    file: t,
                    image: n,
                    guildId: l.id,
                    uploadId: a,
                    hideErrorModal: !0,
                    analyticsLocation: { page: B.ZY5.GUILD_SETTINGS },
                });
                if ("object" != typeof r || !("id" in r)) return r;
                U.M({
                    emojiId: r.id,
                    userImage: {
                        data: e,
                        file: t,
                        image: n,
                    },
                });
            },
            ea = async (e) => {
                s((0, g.Z)()),
                    Z.default.track(B.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: l.id,
                        upload_id: a,
                    }),
                    await (0, T._j)(e, el),
                    O(!0);
            },
            es = () => {
                null !== D.current && ((0, f.Mr3)(D.current), (D.current = null));
            },
            eo = async (e) => {
                D.current = await (0, f.ZDy)(async () => {
                    let { default: t } = await n.e("16169").then(n.bind(n, 935333));
                    return (n) => (0, r.jsx)(t, V({ processFiles: () => ea(e) }, n));
                });
            },
            ec = i.useCallback(
                async (e, n, r) => {
                    await (0, N.i)({
                        userImage: {
                            data: e,
                            file: n,
                            image: r,
                        },
                        guildId: l.id,
                        analyticsLocation: { page: B.ZY5.GUILD_SETTINGS },
                    }),
                        (t.current += 1);
                },
                [l.id],
            ),
            ed = (0, C.l)(l),
            eu = J.enabled ? (e) => ei({ emoji: e }) : void 0;
        return (0, r.jsxs)("div", {
            className: z.emojiSettings,
            children: [
                0 === L
                    ? null
                    : (0, r.jsx)(j.Z, {
                          className: z.emojiUploadContainer,
                          onDrop: eo,
                      }),
                (0, r.jsxs)(f.Kqy, {
                    gap: 20,
                    children: [
                        (0, r.jsxs)(f.Kqy, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(f.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: H.intl.string(H.t.sMOuuS),
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/normal",
                                    children: H.intl.format(H.t.TA1BR0, { count: A }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(Q, {
                            guild: l,
                            staticEmojiCount: W,
                            animatedEmojiCount: X,
                        }),
                        (0, r.jsxs)("div", {
                            className: z.uploader,
                            children: [
                                ed &&
                                    (0, r.jsx)(f.Wn, {
                                        messageType: f.QYI.INFO,
                                        children: H.intl.format(H.t.uMkfTo, {
                                            onClick: () =>
                                                k.Z.open(
                                                    l.id,
                                                    B.pNK.ROLE_SUBSCRIPTIONS,
                                                    void 0,
                                                    B.KsC.ROLE_SUBSCRIPTION_EMOJI,
                                                ),
                                        }),
                                    }),
                                J.enabled
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(f.Button, {
                                                  text: H.intl.string(H.t["DU0dy/"]),
                                                  variant: "primary",
                                                  onClick: () => {
                                                      var t;
                                                      null == (t = e.current) || t.activateUploadDialogue();
                                                  },
                                                  disabled: S,
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: z.fileInput,
                                                  children: (0, r.jsx)(
                                                      T.ZP,
                                                      {
                                                          ref: e,
                                                          onChange: ec,
                                                          setLoading: R,
                                                          disabled: S,
                                                      },
                                                      t.current,
                                                  ),
                                              }),
                                              (0, r.jsx)(f.Text, {
                                                  variant: "text-xs/normal",
                                                  children: H.intl.string(H.t.EgNCTi),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)($, {}),
                                              (0, r.jsx)(f.Button, {
                                                  text: H.intl.string(H.t["DU0dy/"]),
                                                  variant: "primary",
                                                  onClick: () => {
                                                      var t;
                                                      let n = (0, g.Z)();
                                                      s(n),
                                                          Z.default.track(B.rMx.EMOJI_UPLOAD_STARTED, {
                                                              guild_id: l.id,
                                                              upload_id: n,
                                                          }),
                                                          null == (t = e.current) || t.activateUploadDialogue();
                                                  },
                                                  disabled: en,
                                                  loading: S,
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: z.fileInput,
                                                  children: (0, r.jsx)(T.ZP, {
                                                      ref: e,
                                                      disabled: en,
                                                      onChange: el,
                                                      setLoading: R,
                                                      multiple: !0,
                                                  }),
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                        (0, r.jsx)(q, {
                            isLoading: null == h,
                            staticEmoji: F,
                            animatedEmoji: Y,
                            guild: l,
                            theme: c,
                            onEdit: eu,
                            newlyAddedEmojiIds: er,
                        }),
                    ],
                }),
            ],
        });
    };
