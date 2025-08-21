n.d(t, {
    FT: () => J,
    L3: () => q,
    ZP: () => ee,
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
    u = n(803948),
    m = n(772848),
    g = n(442837),
    p = n(755721),
    h = n(481060),
    f = n(668781),
    b = n(80932),
    x = n(225433),
    j = n(599059),
    v = n(327802),
    _ = n(110924),
    O = n(100527),
    y = n(200876),
    C = n(556019),
    N = n(748523),
    E = n(719403),
    I = n(730089),
    S = n(372444),
    T = n(372129),
    P = n(357156),
    w = n(210887),
    R = n(626135),
    Z = n(768581),
    D = n(176354),
    A = n(267642),
    L = n(51144),
    k = n(434404),
    M = n(471613),
    G = n(999382),
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
let Y = d().throttle(b.OQ, 1000),
    K = (e) => {
        let { guildId: t, emoji: n, onEdit: l, editingDisabled: s = !1, isNewlyAdded: o = !1 } = e,
            [c, d] = i.useState(n.name),
            m = Z.ZP.getEmojiURL({
                id: n.id,
                animated: n.animated,
                size: 32,
            }),
            g = (0, h.q_F)({
                from: { transform: "rotate(0)" },
                to: [
                    {
                        transform: "rotate(-15deg)",
                        duration: 125,
                    },
                    {
                        transform: "rotate(15deg)",
                        duration: 250,
                    },
                    {
                        transform: "rotate(0)",
                        duration: 125,
                    },
                ],
                loop: !0,
            }),
            p = L.ZP.useUserTag(n.user);
        return (0, r.jsxs)("div", {
            className: a()(z.emojiRow, W.card),
            children: [
                (0, r.jsx)("div", {
                    className: z.emojiColumn,
                    children: (0, r.jsx)(h.ua7, {
                        text: n.available ? null : H.intl.string(H.t["KUzI7+"]),
                        children: (e) => {
                            var t, i;
                            return (0, r.jsx)(
                                u.animated.div,
                                ((t = V({}, e)),
                                (i = i =
                                    {
                                        className: a()(z.emojiImage, { [z.emojiDisabled]: !n.available }),
                                        style: V({ backgroundImage: "url(".concat(m, ")") }, o ? g : {}),
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
                                t),
                            );
                        },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: z.column,
                    children: (0, r.jsx)("div", {
                        className: z.emojiAliasInputContainer,
                        children: (0, r.jsx)(j.Z, {
                            className: a()({ [z.emojiAliasInputDisabled]: s }),
                            disabled: s,
                            minLen: 1,
                            maxLen: F.Yc,
                            name: H.intl.string(H.t.qUpzYG),
                            autoComplete: "off",
                            value: null != c ? c : "",
                            onBlur: () => {
                                if (c !== n.name) {
                                    let e = D.ZP.sanitizeEmojiName(c);
                                    e !== n.name &&
                                        (0, b.dv)({
                                            guildId: t,
                                            emojiId: n.id,
                                            name: e,
                                        }),
                                        d(e);
                                }
                            },
                            onChange: (e) => {
                                d(e.target.value);
                            },
                        }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: z.column,
                    children: [
                        (0, r.jsx)(h.qEK, {
                            src: n.user.getAvatarURL(t, 20),
                            "aria-label": p,
                            size: h.EFr.SIZE_20,
                        }),
                        (0, r.jsx)(h.R94, {
                            className: z.emojiRowText,
                            children: p,
                        }),
                    ],
                }),
                null != l &&
                    !s &&
                    (0, r.jsx)(h.P3F, {
                        "aria-label": H.intl.string(H.t.bt75u7),
                        className: z.editEmojiRolesButton,
                        onClick: () => l(n, t),
                        children: (0, r.jsx)(h.vdY, {
                            size: "md",
                            color: "currentColor",
                            className: z.editEmojiRolesIcon,
                        }),
                    }),
                !s &&
                    (0, r.jsx)(x.Z, {
                        className: z.emojiRemove,
                        onClick: () => {
                            (0, b.RE)(t, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t &&
                                    f.Z.show({
                                        title: H.intl.string(H.t.iufib2),
                                        body: H.intl.string(H.t["Whhv4+"]),
                                    });
                            });
                        },
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
                            note: H.intl.string(H.t.RBbtMz),
                            children: H.intl.string(H.t.lxsmBQ),
                        }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(q, {
                            title: H.intl.string(H.t.sMOuub),
                            maxSlots: (0, A.y4)(s),
                            emojiCount: i.length,
                        }),
                        (0, r.jsx)(J, {
                            emojis: i,
                            guild: s,
                            onEdit: o,
                            newlyAddedEmojiIds: c,
                        }),
                        (0, r.jsx)(q, {
                            title: H.intl.string(H.t.wWjQyc),
                            maxSlots: (0, A.y4)(s),
                            emojiCount: l.length,
                        }),
                        (0, r.jsx)(J, {
                            emojis: l,
                            guild: s,
                            onEdit: o,
                            newlyAddedEmojiIds: c,
                        }),
                    ],
                });
    },
    q = (e) => {
        let { title: t, maxSlots: n, emojiCount: i } = e,
            l = Math.max(n - i, 0);
        return (0, r.jsxs)(h.vwX, {
            tag: h.RB0.H2,
            className: z.title,
            children: [
                t,
                (0, r.jsxs)("span", {
                    children: [" \u2014 ", H.intl.format(H.t.sgL8sL, { count: l })],
                }),
            ],
        });
    },
    J = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: a = !1, newlyAddedEmojiIds: s } = e,
            o = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: c } = (0, P.Gw)(n);
        return 0 === t.length
            ? (0, r.jsx)(h.R94, {
                  type: h.geA.DESCRIPTION,
                  className: z.content,
                  children: H.intl.string(H.t.SpxYoa),
              })
            : (0, r.jsxs)(h.hjN, {
                  className: z.content,
                  children: [
                      (0, r.jsxs)("div", {
                          className: z.emojiTable,
                          children: [
                              (0, r.jsx)(h.R94, {
                                  type: h.geA.DESCRIPTION,
                                  className: z.emojiColumn,
                                  children: H.intl.string(H.t.Z0i3Gh),
                              }),
                              (0, r.jsx)(h.R94, {
                                  type: h.geA.DESCRIPTION,
                                  className: z.columnLabel,
                                  children: H.intl.string(H.t.giajw8),
                              }),
                              (0, r.jsx)(h.R94, {
                                  type: h.geA.DESCRIPTION,
                                  className: z.columnLabel,
                                  children: H.intl.string(H.t.edavpq),
                              }),
                          ],
                      }),
                      o.map((e) => {
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
                  ? ((t = H.intl.formatToPlainString(H.t.j0UH0t, { level: u })),
                    (n = H.intl.formatToPlainString(H.t.VQeyKy, { level: u })),
                    (i = B.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = H.intl.string(H.t.zT9Sxc)),
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
                (0, r.jsx)(h.vwX, {
                    tag: h.RB0.H2,
                    className: z.emojiUploadUploadRequirementsHeading,
                    children: H.intl.string(H.t.jrXfy8),
                }),
                (0, r.jsxs)("ul", {
                    className: z.emojiUploadUploadRequirementsList,
                    children: [
                        (0, r.jsx)("li", {
                            children: (0, r.jsx)(h.R94, {
                                type: h.geA.DESCRIPTION,
                                children: H.intl.string(H.t.N2qTQ0),
                            }),
                        }),
                        (0, r.jsx)("li", {
                            children: (0, r.jsx)(h.R94, {
                                type: h.geA.DESCRIPTION,
                                children: H.intl.format(H.t.gfAXoa, { maxSize: F.xG }),
                            }),
                        }),
                        (0, r.jsx)("li", {
                            children: (0, r.jsx)(h.R94, {
                                type: h.geA.DESCRIPTION,
                                children: H.intl.string(H.t.rnwKPD),
                            }),
                        }),
                        (0, r.jsx)("li", {
                            children: (0, r.jsx)(h.R94, {
                                type: h.geA.DESCRIPTION,
                                children: H.intl.string(H.t["8Vr5QU"]),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    ee = () => {
        let e = i.useRef(null),
            t = (0, g.e7)([G.Z], () => G.Z.getGuild()),
            [l, a] = i.useState("");
        o()(null != t, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
        let s = (0, g.e7)([w.Z], () => w.Z.theme),
            { canCreateExpressions: c } = (0, P.XJ)(t),
            {
                revision: u,
                emojis: f,
                autoOpen: b,
            } = (0, g.cj)([M.Z], () => ({
                revision: M.Z.getEmojiRevision(t.id),
                emojis: M.Z.getEmojis(t.id),
                autoOpen: M.Z.getEmojiFileInputAutoOpen(),
            })),
            x = (0, _.Z)(u),
            [j, S] = i.useState(!1),
            [Z, D] = i.useState(!1),
            A = i.useRef(null),
            {
                maxEmojiSlots: L,
                availableEmojiSlots: F,
                staticEmoji: W,
                totalStaticEmoji: K,
                animatedEmoji: q,
                totalAnimatedEmoji: J,
            } = (0, E.t)({ guild: t }),
            ee = (0, C.qt)({
                location: "guild_settings",
                autoTrackExposure: !0,
            }),
            [et, en] = i.useState(null),
            er = Z || 0 === F || !c;
        i.useEffect(() => {
            j && eo();
        }, [j]),
            i.useEffect(() => {
                if (b) {
                    if (!er) {
                        var t;
                        null == (t = e.current) || t.activateUploadDialogue();
                    }
                    U.m({ autoOpen: !1 });
                }
            }, [b, er]),
            i.useEffect(() => {
                Y(t.id);
            }, [t.id]),
            i.useEffect(() => {
                null != x && x < u && Y(t.id);
            }, [u, x, t.id]),
            i.useEffect(() => {
                if (null != f && null == et) return void en(f);
            }, [f, et]);
        let ei = i.useMemo(
                () =>
                    ee.isV2SpeedrunExperimentEnabled && null != et
                        ? new Set(
                              d()
                                  .differenceBy(f, et, "id")
                                  .map((e) => e.id),
                          )
                        : new Set(),
                [ee.isV2SpeedrunExperimentEnabled, f, et],
            ),
            el = i.useCallback(
                function () {
                    let { emoji: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (ee.isV2SpeedrunExperimentEnabled && null != e)
                        return void (0, N.i)({
                            guildId: t.id,
                            emoji: e,
                            analyticsLocation: O.Z.GUILD_SETTINGS_EMOJI_EDIT_BUTTON,
                        });
                    (0, N.i)({
                        guildId: t.id,
                        analyticsLocation: {
                            page: B.ZY5.GUILD_SETTINGS,
                            section: B.jXE.GUILD_SETTINGS_EMOJI_ADD_BUTTON,
                        },
                    });
                },
                [ee.isV2SpeedrunExperimentEnabled, t],
            ),
            ea = (e, n, r) =>
                (0, I.G)({
                    data: e,
                    file: n,
                    image: r,
                    guildId: t.id,
                    uploadId: l,
                    hideErrorModal: !0,
                    analyticsLocation: { page: B.ZY5.GUILD_SETTINGS },
                }),
            es = async (e) => {
                a((0, m.Z)()),
                    R.default.track(B.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: t.id,
                        upload_id: l,
                    }),
                    await (0, T._j)(e, ea),
                    S(!0);
            },
            eo = () => {
                null !== A.current && ((0, h.Mr3)(A.current), (A.current = null));
            },
            ec = async (e) => {
                A.current = await (0, h.ZDy)(async () => {
                    let { default: t } = await n.e("16169").then(n.bind(n, 935333));
                    return (n) => (0, r.jsx)(t, V({ processFiles: () => es(e) }, n));
                });
            },
            ed = (0, y.l)(t),
            eu = ee.isV2SpeedrunExperimentEnabled ? (e) => el({ emoji: e }) : void 0;
        return (0, r.jsxs)("div", {
            className: z.emojiSettings,
            children: [
                0 === F
                    ? null
                    : (0, r.jsx)(v.Z, {
                          className: z.emojiUploadContainer,
                          onDrop: ec,
                      }),
                (0, r.jsxs)(h.hjN, {
                    tag: h.RB0.H1,
                    title: H.intl.string(H.t.sMOuub),
                    children: [
                        (0, r.jsx)(Q, {
                            guild: t,
                            staticEmojiCount: K,
                            animatedEmojiCount: J,
                        }),
                        (0, r.jsxs)(h.hjN, {
                            className: z.uploader,
                            children: [
                                (0, r.jsx)(h.R94, {
                                    type: h.geA.DESCRIPTION,
                                    children: H.intl.format(H.t.TA1BR0, { count: L }),
                                }),
                                ed &&
                                    (0, r.jsx)(h.R94, {
                                        type: h.geA.DESCRIPTION,
                                        children: H.intl.format(H.t.uMkfTk, {
                                            onClick: () =>
                                                k.Z.open(
                                                    t.id,
                                                    B.pNK.ROLE_SUBSCRIPTIONS,
                                                    void 0,
                                                    B.KsC.ROLE_SUBSCRIPTION_EMOJI,
                                                ),
                                        }),
                                    }),
                                ee.enabled
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(h.zxk, {
                                                  variant: "primary",
                                                  text: H.intl.string(H.t.DU0dy8),
                                                  onClick: () => el(),
                                                  disabled: 0 === F,
                                              }),
                                              (0, r.jsx)(h.Text, {
                                                  variant: "text-xs/normal",
                                                  children: H.intl.string(H.t.EgNCTk),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)($, {}),
                                              (0, r.jsxs)(p.zx, {
                                                  tabIndex: -1,
                                                  size: p.zx.Sizes.MEDIUM,
                                                  onClick: () => {
                                                      let e = (0, m.Z)();
                                                      a(e),
                                                          R.default.track(B.rMx.EMOJI_UPLOAD_STARTED, {
                                                              guild_id: t.id,
                                                              upload_id: e,
                                                          });
                                                  },
                                                  disabled: er,
                                                  submitting: Z,
                                                  focusProps: { within: !0 },
                                                  children: [
                                                      H.intl.string(H.t.DU0dy8),
                                                      F > 0
                                                          ? (0, r.jsx)(T.ZP, {
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
                            isLoading: null == f,
                            staticEmoji: W,
                            animatedEmoji: q,
                            guild: t,
                            theme: s,
                            onEdit: eu,
                            newlyAddedEmojiIds: ei,
                        }),
                    ],
                }),
            ],
        });
    };
