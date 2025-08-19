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
    u = n(815061),
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
    I = n(719403),
    E = n(730089),
    S = n(372444),
    T = n(372129),
    P = n(357156),
    w = n(210887),
    R = n(819758),
    Z = n(626135),
    D = n(768581),
    A = n(176354),
    L = n(267642),
    k = n(51144),
    M = n(434404),
    G = n(471613),
    U = n(999382),
    B = n(806774),
    F = n(981631),
    H = n(185923),
    z = n(388032),
    W = n(878341),
    V = n(620842);
function Y(e) {
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
    X = (e) => {
        let { guildId: t, emoji: n, onEdit: l, editingDisabled: s = !1, isNewlyAdded: o = !1 } = e,
            [c, d] = i.useState(n.name),
            m = D.ZP.getEmojiURL({
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
                loop: { times: 8 },
            }),
            p = k.ZP.useUserTag(n.user),
            v = (0, r.jsx)(h.ua7, {
                text: n.available ? null : z.intl.string(z.t["KUzI7+"]),
                children: (e) => {
                    var t, i;
                    return (0, r.jsx)(
                        u.animated.div,
                        ((t = Y({}, e)),
                        (i = i =
                            {
                                className: a()(W.emojiImage, { [W.emojiDisabled]: !n.available }),
                                style: Y({ backgroundImage: "url(".concat(m, ")") }, o ? g : {}),
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
            });
        return (0, r.jsxs)("div", {
            className: a()(W.emojiRow, V.card),
            children: [
                (0, r.jsx)("div", {
                    className: W.emojiColumn,
                    children: o
                        ? (0, r.jsxs)("div", {
                              className: W.newlyAddedHighlightContainer,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: W.newlyAddedHighlight,
                                      children: v,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: W.newlyAddedBadge,
                                      children: [
                                          (0, r.jsx)(R.Z, { foreground: W.newlyAddedBadgeStar }),
                                          (0, r.jsx)(h.Text, {
                                              variant: "text-xs/semibold",
                                              color: "always-white",
                                              children: z.intl.string(z.t.y2b7CA),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : v,
                }),
                (0, r.jsx)("div", {
                    className: W.column,
                    children: (0, r.jsx)("div", {
                        className: W.emojiAliasInputContainer,
                        children: (0, r.jsx)(j.Z, {
                            className: a()({ [W.emojiAliasInputDisabled]: s }),
                            disabled: s,
                            minLen: 1,
                            maxLen: H.Yc,
                            name: z.intl.string(z.t.qUpzYG),
                            autoComplete: "off",
                            value: null != c ? c : "",
                            onBlur: () => {
                                if (c !== n.name) {
                                    let e = A.ZP.sanitizeEmojiName(c);
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
                    className: W.column,
                    children: [
                        (0, r.jsx)(h.qEK, {
                            src: n.user.getAvatarURL(t, 20),
                            "aria-label": p,
                            size: h.EFr.SIZE_20,
                        }),
                        (0, r.jsx)(h.R94, {
                            className: W.emojiRowText,
                            children: p,
                        }),
                    ],
                }),
                null != l &&
                    !s &&
                    (0, r.jsx)(h.P3F, {
                        "aria-label": z.intl.string(z.t.bt75u7),
                        className: W.editEmojiRolesButton,
                        onClick: () => l(n, t),
                        children: (0, r.jsx)(h.vdY, {
                            size: "md",
                            color: "currentColor",
                            className: W.editEmojiRolesIcon,
                        }),
                    }),
                !s &&
                    (0, r.jsx)(x.Z, {
                        className: W.emojiRemove,
                        onClick: () => {
                            (0, b.RE)(t, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t &&
                                    f.Z.show({
                                        title: z.intl.string(z.t.iufib2),
                                        body: z.intl.string(z.t["Whhv4+"]),
                                    });
                            });
                        },
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
                            note: z.intl.string(z.t.RBbtMz),
                            children: z.intl.string(z.t.lxsmBQ),
                        }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(J, {
                            title: z.intl.string(z.t.sMOuub),
                            maxSlots: (0, L.y4)(s),
                            emojiCount: i.length,
                        }),
                        (0, r.jsx)(Q, {
                            emojis: i,
                            guild: s,
                            onEdit: o,
                            newlyAddedEmojiIds: c,
                        }),
                        (0, r.jsx)(J, {
                            title: z.intl.string(z.t.wWjQyc),
                            maxSlots: (0, L.y4)(s),
                            emojiCount: l.length,
                        }),
                        (0, r.jsx)(Q, {
                            emojis: l,
                            guild: s,
                            onEdit: o,
                            newlyAddedEmojiIds: c,
                        }),
                    ],
                });
    },
    J = (e) => {
        let { title: t, maxSlots: n, emojiCount: i } = e,
            l = Math.max(n - i, 0);
        return (0, r.jsxs)(h.vwX, {
            tag: h.RB0.H2,
            className: W.title,
            children: [
                t,
                (0, r.jsxs)("span", {
                    children: [" \u2014 ", z.intl.format(z.t.sgL8sL, { count: l })],
                }),
            ],
        });
    },
    Q = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: a = !1, newlyAddedEmojiIds: s } = e,
            o = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: c } = (0, P.Gw)(n);
        return 0 === t.length
            ? (0, r.jsx)(h.R94, {
                  type: h.geA.DESCRIPTION,
                  className: W.content,
                  children: z.intl.string(z.t.SpxYoa),
              })
            : (0, r.jsxs)(h.hjN, {
                  className: W.content,
                  children: [
                      (0, r.jsxs)("div", {
                          className: W.emojiTable,
                          children: [
                              (0, r.jsx)(h.R94, {
                                  type: h.geA.DESCRIPTION,
                                  className: W.emojiColumn,
                                  children: z.intl.string(z.t.Z0i3Gh),
                              }),
                              (0, r.jsx)(h.R94, {
                                  type: h.geA.DESCRIPTION,
                                  className: W.columnLabel,
                                  children: z.intl.string(z.t.giajw8),
                              }),
                              (0, r.jsx)(h.R94, {
                                  type: h.geA.DESCRIPTION,
                                  className: W.columnLabel,
                                  children: z.intl.string(z.t.edavpq),
                              }),
                          ],
                      }),
                      o.map((e) => {
                          var t;
                          return (0, r.jsx)(
                              X,
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
                  ? ((t = z.intl.formatToPlainString(z.t.j0UH0t, { level: u })),
                    (n = z.intl.formatToPlainString(z.t.VQeyKy, { level: u })),
                    (i = F.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = z.intl.string(z.t.zT9Sxc)),
                    (n = z.intl.formatToPlainString(z.t.dBZ1RU, { level: u })),
                    (i = F.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(S.Z, {
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
                (0, r.jsx)(h.vwX, {
                    tag: h.RB0.H2,
                    className: W.emojiUploadUploadRequirementsHeading,
                    children: z.intl.string(z.t.jrXfy8),
                }),
                (0, r.jsxs)("ul", {
                    className: W.emojiUploadUploadRequirementsList,
                    children: [
                        (0, r.jsx)("li", {
                            children: (0, r.jsx)(h.R94, {
                                type: h.geA.DESCRIPTION,
                                children: z.intl.string(z.t.N2qTQ0),
                            }),
                        }),
                        (0, r.jsx)("li", {
                            children: (0, r.jsx)(h.R94, {
                                type: h.geA.DESCRIPTION,
                                children: z.intl.format(z.t.gfAXoa, { maxSize: H.xG }),
                            }),
                        }),
                        (0, r.jsx)("li", {
                            children: (0, r.jsx)(h.R94, {
                                type: h.geA.DESCRIPTION,
                                children: z.intl.string(z.t.rnwKPD),
                            }),
                        }),
                        (0, r.jsx)("li", {
                            children: (0, r.jsx)(h.R94, {
                                type: h.geA.DESCRIPTION,
                                children: z.intl.string(z.t["8Vr5QU"]),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    et = () => {
        let e = i.useRef(null),
            t = (0, g.e7)([U.Z], () => U.Z.getGuild()),
            [l, a] = i.useState("");
        o()(null != t, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
        let s = (0, g.e7)([w.Z], () => w.Z.theme),
            { canCreateExpressions: c } = (0, P.XJ)(t),
            {
                revision: u,
                emojis: f,
                autoOpen: b,
            } = (0, g.cj)([G.Z], () => ({
                revision: G.Z.getEmojiRevision(t.id),
                emojis: G.Z.getEmojis(t.id),
                autoOpen: G.Z.getEmojiFileInputAutoOpen(),
            })),
            x = (0, _.Z)(u),
            [j, S] = i.useState(!1),
            [R, D] = i.useState(!1),
            A = i.useRef(null),
            {
                maxEmojiSlots: L,
                availableEmojiSlots: k,
                staticEmoji: H,
                totalStaticEmoji: V,
                animatedEmoji: X,
                totalAnimatedEmoji: J,
            } = (0, I.t)({ guild: t }),
            Q = (0, C.qt)({
                location: "guild_settings",
                autoTrackExposure: !0,
            }),
            [et, en] = i.useState(null),
            er = R || 0 === k || !c;
        i.useEffect(() => {
            j && eo();
        }, [j]),
            i.useEffect(() => {
                if (b) {
                    if (!er) {
                        var t;
                        null == (t = e.current) || t.activateUploadDialogue();
                    }
                    B.m({ autoOpen: !1 });
                }
            }, [b, er]),
            i.useEffect(() => {
                K(t.id);
            }, [t.id]),
            i.useEffect(() => {
                null != x && x < u && K(t.id);
            }, [u, x, t.id]),
            i.useEffect(() => {
                if (null != f && null == et) return void en(f);
            }, [f, et]);
        let ei = i.useMemo(
                () =>
                    Q.isV2SpeedrunExperimentEnabled && null != et
                        ? new Set(
                              d()
                                  .differenceBy(f, et, "id")
                                  .map((e) => e.id),
                          )
                        : new Set(),
                [Q.isV2SpeedrunExperimentEnabled, f, et],
            ),
            el = i.useCallback(
                function () {
                    let { emoji: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (Q.isV2SpeedrunExperimentEnabled && null != e)
                        return void (0, N.i)({
                            guildId: t.id,
                            emoji: e,
                            analyticsLocation: O.Z.GUILD_SETTINGS_EMOJI_EDIT_BUTTON,
                        });
                    (0, N.i)({
                        guildId: t.id,
                        analyticsLocation: {
                            page: F.ZY5.GUILD_SETTINGS,
                            section: F.jXE.GUILD_SETTINGS_EMOJI_ADD_BUTTON,
                        },
                    });
                },
                [Q.isV2SpeedrunExperimentEnabled, t],
            ),
            ea = (e, n, r) =>
                (0, E.G)({
                    data: e,
                    file: n,
                    image: r,
                    guildId: t.id,
                    uploadId: l,
                    hideErrorModal: !0,
                    analyticsLocation: { page: F.ZY5.GUILD_SETTINGS },
                }),
            es = async (e) => {
                a((0, m.Z)()),
                    Z.default.track(F.rMx.EMOJI_UPLOAD_STARTED, {
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
                    return (n) => (0, r.jsx)(t, Y({ processFiles: () => es(e) }, n));
                });
            },
            ed = (0, y.l)(t),
            eu = Q.isV2SpeedrunExperimentEnabled ? (e) => el({ emoji: e }) : void 0;
        return (0, r.jsxs)("div", {
            className: W.emojiSettings,
            children: [
                0 === k
                    ? null
                    : (0, r.jsx)(v.Z, {
                          className: W.emojiUploadContainer,
                          onDrop: ec,
                      }),
                (0, r.jsxs)(h.hjN, {
                    tag: h.RB0.H1,
                    title: z.intl.string(z.t.sMOuub),
                    children: [
                        (0, r.jsx)($, {
                            guild: t,
                            staticEmojiCount: V,
                            animatedEmojiCount: J,
                        }),
                        (0, r.jsxs)(h.hjN, {
                            className: W.uploader,
                            children: [
                                (0, r.jsx)(h.R94, {
                                    type: h.geA.DESCRIPTION,
                                    children: z.intl.format(z.t.TA1BR0, { count: L }),
                                }),
                                ed &&
                                    (0, r.jsx)(h.R94, {
                                        type: h.geA.DESCRIPTION,
                                        children: z.intl.format(z.t.uMkfTk, {
                                            onClick: () =>
                                                M.Z.open(
                                                    t.id,
                                                    F.pNK.ROLE_SUBSCRIPTIONS,
                                                    void 0,
                                                    F.KsC.ROLE_SUBSCRIPTION_EMOJI,
                                                ),
                                        }),
                                    }),
                                Q.enabled
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(h.zxk, {
                                                  variant: "primary",
                                                  text: z.intl.string(z.t.DU0dy8),
                                                  onClick: () => el(),
                                                  disabled: 0 === k,
                                              }),
                                              (0, r.jsx)(h.Text, {
                                                  variant: "text-xs/normal",
                                                  children: z.intl.string(z.t.EgNCTk),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(ee, {}),
                                              (0, r.jsxs)(p.zx, {
                                                  tabIndex: -1,
                                                  size: p.zx.Sizes.MEDIUM,
                                                  onClick: () => {
                                                      let e = (0, m.Z)();
                                                      a(e),
                                                          Z.default.track(F.rMx.EMOJI_UPLOAD_STARTED, {
                                                              guild_id: t.id,
                                                              upload_id: e,
                                                          });
                                                  },
                                                  disabled: er,
                                                  submitting: R,
                                                  focusProps: { within: !0 },
                                                  children: [
                                                      z.intl.string(z.t.DU0dy8),
                                                      k > 0
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
                        (0, r.jsx)(q, {
                            isLoading: null == f,
                            staticEmoji: H,
                            animatedEmoji: X,
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
