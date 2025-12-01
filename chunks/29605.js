n.d(t, {
    FT: () => Q,
    L3: () => J,
    ZP: () => et,
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
    u = n(666917),
    g = n(772848),
    m = n(442837),
    p = n(28664),
    f = n(755721),
    h = n(481060),
    b = n(668781),
    x = n(80932),
    j = n(599059),
    _ = n(327802),
    v = n(110924),
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
    W = n(388032),
    z = n(878341),
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
            [_] = (0, h.q_F)(
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
            [v] = (0, h.q_F)(
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
            className: a()(z.emojiRow, V.card),
            role: "row",
            children: [
                (0, r.jsx)("div", {
                    className: z.emojiColumn,
                    children: (0, r.jsx)(p.u, {
                        text: s.available ? null : W.intl.string(W.t.KUzI73),
                        children: (0, r.jsx)(u.animated.div, {
                            className: a()(z.emojiImage, { [z.emojiDisabled]: !s.available }),
                            style:
                                ((t = K({}, d ? _ : {}, d ? v : {})),
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
                    className: z.column,
                    children: (0, r.jsx)("div", {
                        className: z.emojiAliasInputContainer,
                        children: (0, r.jsx)(j.Z, {
                            className: a()({ [z.emojiAliasInputDisabled]: c }),
                            disabled: c,
                            minLen: 1,
                            maxLen: H.Yc,
                            name: W.intl.string(W.t.qUpzYO),
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
                    className: z.column,
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
                        className: z.emojiRowTools,
                        children: [
                            null == o
                                ? null
                                : (0, r.jsx)(p.u, {
                                      text: W.intl.string(W.t.FOYn8U),
                                      "aria-label": W.intl.string(W.t.FOYn8U),
                                      children: (0, r.jsx)(h.hU, {
                                          size: "sm",
                                          variant: "secondary",
                                          icon: h.vdY,
                                          onClick: () => o(s, l),
                                          "aria-label": W.intl.string(W.t.FOYn8U),
                                      }),
                                  }),
                            (0, r.jsx)(p.u, {
                                text: W.intl.string(W.t["+euLPe"]),
                                "aria-label": W.intl.string(W.t["+euLPe"]),
                                children: (0, r.jsx)(h.hU, {
                                    size: "sm",
                                    variant: "critical-secondary",
                                    icon: h.XHJ,
                                    onClick: () => {
                                        (0, x.RE)(l, s.id).catch((e) => {
                                            let { status: t } = e;
                                            429 === t &&
                                                b.Z.show({
                                                    title: W.intl.string(W.t.iufib1),
                                                    body: W.intl.string(W.t.Whhv4w),
                                                });
                                        });
                                    },
                                    "aria-label": W.intl.string(W.t["+euLPe"]),
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
                  className: z.spinner,
                  type: h.$jN.Type.SPINNING_CIRCLE,
              })
            : 0 === i.length && 0 === l.length
              ? (0, r.jsxs)(h.ubH, {
                    theme: a,
                    className: z.empty,
                    children: [
                        (0, r.jsx)(h.oxh, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212,
                        }),
                        (0, r.jsx)(h.OZU, {
                            note: W.intl.string(W.t.RBbtMy),
                            children: W.intl.string(W.t.lxsmBd),
                        }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(J, {
                            title: W.intl.string(W.t.sMOuuS),
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
                            title: W.intl.string(W.t.wWjQye),
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
            description: W.intl.format(W.t.sgL8sI, { count: a }),
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
                  children: (0, r.jsx)(h.OZU, { children: W.intl.string(W.t.SpxYoT) }),
              })
            : (0, r.jsxs)("div", {
                  role: "table",
                  "aria-label": W.intl.string(W.t.sMOuuS),
                  className: z.table,
                  children: [
                      (0, r.jsxs)("div", {
                          role: "rowgroup",
                          className: z.tableHeader,
                          children: [
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: z.emojiColumn,
                                  children: (0, r.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: W.intl.string(W.t.Z0i3Gp),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: z.columnLabel,
                                  children: (0, r.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: W.intl.string(W.t.giajw6),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: z.columnLabel,
                                  children: (0, r.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: W.intl.string(W.t.edavpq),
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
                  ? ((t = W.intl.formatToPlainString(W.t.j0UH0m, { level: u })),
                    (n = W.intl.formatToPlainString(W.t.VQeyK6, { level: u })),
                    (i = F.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = W.intl.string(W.t.zT9SxY)),
                    (n = W.intl.formatToPlainString(W.t.dBZ1RU, { level: u })),
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
                    children: W.intl.string(W.t.jrXfyw),
                }),
                (0, r.jsxs)("ul", {
                    className: z.emojiUploadUploadRequirementsList,
                    children: [
                        (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: W.intl.string(W.t.N2qTQ3),
                        }),
                        (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: W.intl.format(W.t.gfAXoR, { maxSize: H.xG }),
                        }),
                        (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: W.intl.string(W.t.rnwKPH),
                        }),
                        (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: W.intl.string(W.t["8Vr5Qd"]),
                        }),
                    ],
                }),
            ],
        }),
    et = () => {
        let e = i.useRef(null),
            t = i.useRef(0),
            l = (0, m.e7)([U.Z], () => U.Z.getGuild()),
            [a, s] = i.useState("");
        o()(null != l, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
        let c = (0, m.e7)([Z.Z], () => Z.Z.theme),
            { canCreateExpressions: u } = (0, w.XJ)(l),
            { revision: p, emojis: b } = (0, m.cj)([M.Z], () => ({
                revision: M.Z.getEmojiRevision(l.id),
                emojis: M.Z.getEmojis(l.id),
            })),
            x = (0, v.Z)(p),
            [j, C] = i.useState(!1),
            [T, D] = i.useState(!1),
            A = i.useRef(null),
            {
                maxEmojiSlots: L,
                availableEmojiSlots: k,
                staticEmoji: H,
                totalStaticEmoji: V,
                animatedEmoji: q,
                totalAnimatedEmoji: J,
            } = (0, I.t)({ guild: l }),
            Q = (0, N.qt)({
                location: "guild_settings",
                autoTrackExposure: !0,
            }),
            [et, en] = i.useState(null),
            er = T || 0 === k || !u;
        i.useEffect(() => {
            j && eo();
        }, [j]),
            i.useEffect(() => {
                Y(l.id);
            }, [l.id]),
            i.useEffect(() => {
                null != x && x < p && Y(l.id);
            }, [p, x, l.id]),
            i.useEffect(() => {
                if (null != b && null == et) return void en(b);
            }, [b, et]);
        let ei = i.useMemo(
                () =>
                    Q.enabled && null != et
                        ? new Set(
                              d()
                                  .differenceBy(b, et, "id")
                                  .map((e) => e.id),
                          )
                        : new Set(),
                [Q.enabled, b, et],
            ),
            el = i.useCallback(
                function () {
                    let { emoji: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (Q.enabled && null != e)
                        return void (0, E.i)({
                            guildId: l.id,
                            emoji: e,
                            analyticsLocation: O.Z.GUILD_SETTINGS_EMOJI_EDIT_BUTTON,
                        });
                    (0, E.i)({
                        guildId: l.id,
                        analyticsLocation: {
                            page: F.ZY5.GUILD_SETTINGS,
                            section: F.jXE.GUILD_SETTINGS_EMOJI_ADD_BUTTON,
                        },
                    });
                },
                [Q.enabled, l],
            ),
            ea = async (e, t, n) => {
                let r = await (0, S.G)({
                    data: e,
                    file: t,
                    image: n,
                    guildId: l.id,
                    uploadId: a,
                    hideErrorModal: !0,
                    analyticsLocation: { page: F.ZY5.GUILD_SETTINGS },
                });
                if ("object" != typeof r || !("id" in r)) return r;
                B.M({
                    emojiId: r.id,
                    userImage: {
                        data: e,
                        file: t,
                        image: n,
                    },
                });
            },
            es = async (e) => {
                s((0, g.Z)()),
                    R.default.track(F.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: l.id,
                        upload_id: a,
                    }),
                    await (0, P._j)(e, ea),
                    C(!0);
            },
            eo = () => {
                null !== A.current && ((0, h.Mr3)(A.current), (A.current = null));
            },
            ec = async (e) => {
                A.current = await (0, h.ZDy)(async () => {
                    let { default: t } = await n.e("16169").then(n.bind(n, 935333));
                    return (n) => (0, r.jsx)(t, K({ processFiles: () => es(e) }, n));
                });
            },
            ed = i.useCallback(
                async (e, n, r) => {
                    await (0, E.i)({
                        userImage: {
                            data: e,
                            file: n,
                            image: r,
                        },
                        guildId: l.id,
                        analyticsLocation: { page: F.ZY5.GUILD_SETTINGS },
                    }),
                        (t.current += 1);
                },
                [l.id],
            ),
            eu = (0, y.l)(l),
            eg = Q.enabled ? (e) => el({ emoji: e }) : void 0;
        return (0, r.jsxs)("div", {
            className: z.emojiSettings,
            children: [
                0 === k
                    ? null
                    : (0, r.jsx)(_.Z, {
                          className: z.emojiUploadContainer,
                          onDrop: ec,
                      }),
                (0, r.jsxs)(h.Kqy, {
                    gap: 20,
                    children: [
                        (0, r.jsxs)(h.Kqy, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(h.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: W.intl.string(W.t.sMOuuS),
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: "text-md/normal",
                                    children: W.intl.format(W.t.TA1BR0, { count: L }),
                                }),
                            ],
                        }),
                        (0, r.jsx)($, {
                            guild: l,
                            staticEmojiCount: V,
                            animatedEmojiCount: J,
                        }),
                        (0, r.jsxs)("div", {
                            className: z.uploader,
                            children: [
                                eu &&
                                    (0, r.jsx)(h.Wn, {
                                        messageType: h.QYI.INFO,
                                        children: W.intl.format(W.t.uMkfTo, {
                                            onClick: () =>
                                                G.Z.open(
                                                    l.id,
                                                    F.pNK.ROLE_SUBSCRIPTIONS,
                                                    void 0,
                                                    F.KsC.ROLE_SUBSCRIPTION_EMOJI,
                                                ),
                                        }),
                                    }),
                                Q.enabled
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(h.Button, {
                                                  text: W.intl.string(W.t["DU0dy/"]),
                                                  variant: "primary",
                                                  onClick: () => {
                                                      var t;
                                                      null == (t = e.current) || t.activateUploadDialogue();
                                                  },
                                                  disabled: T,
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: z.fileInput,
                                                  children: (0, r.jsx)(
                                                      P.ZP,
                                                      {
                                                          ref: e,
                                                          onChange: ed,
                                                          setLoading: D,
                                                          disabled: T,
                                                      },
                                                      t.current,
                                                  ),
                                              }),
                                              (0, r.jsx)(h.Text, {
                                                  variant: "text-xs/normal",
                                                  children: W.intl.string(W.t.EgNCTi),
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
                                                      s(e),
                                                          R.default.track(F.rMx.EMOJI_UPLOAD_STARTED, {
                                                              guild_id: l.id,
                                                              upload_id: e,
                                                          });
                                                  },
                                                  disabled: er,
                                                  submitting: T,
                                                  focusProps: { within: !0 },
                                                  children: [
                                                      W.intl.string(W.t["DU0dy/"]),
                                                      k > 0
                                                          ? (0, r.jsx)(P.ZP, {
                                                                ref: e,
                                                                disabled: er,
                                                                tabIndex: 0,
                                                                onChange: ea,
                                                                setLoading: D,
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
                            isLoading: null == b,
                            staticEmoji: H,
                            animatedEmoji: q,
                            guild: l,
                            theme: c,
                            onEdit: eg,
                            newlyAddedEmojiIds: ei,
                        }),
                    ],
                }),
            ],
        });
    };
