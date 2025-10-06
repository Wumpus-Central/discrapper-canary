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
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(137317),
    m = n(772848),
    g = n(442837),
    p = n(28664),
    f = n(755721),
    h = n(481060),
    x = n(668781),
    b = n(80932),
    j = n(225433),
    _ = n(599059),
    v = n(327802),
    C = n(110924),
    O = n(100527),
    y = n(200876),
    N = n(556019),
    E = n(748523),
    I = n(719403),
    S = n(730089),
    T = n(372444),
    P = n(372129),
    w = n(357156),
    R = n(210887),
    Z = n(626135),
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
let Y = d().throttle(b.OQ, 1000),
    q = (e) => {
        var t, n;
        let { guildId: l, emoji: a, onEdit: o, editingDisabled: c = !1, isNewlyAdded: d = !1 } = e,
            [m, g] = i.useState(a.name),
            f = D.ZP.getEmojiURL({
                id: a.id,
                animated: a.animated,
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
            [C] = (0, h.q_F)(
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
            O = k.ZP.useUserTag(a.user);
        return (0, r.jsxs)("div", {
            className: s()(W.emojiRow, V.card),
            children: [
                (0, r.jsx)("div", {
                    className: W.emojiColumn,
                    children: (0, r.jsxs)(p.u, {
                        text: a.available ? null : z.intl.string(z.t["KUzI7+"]),
                        children: [
                            (0, r.jsx)(u.animated.div, {
                                className: s()(W.emojiImage, { [W.emojiDisabled]: !a.available }),
                                style:
                                    ((t = K({}, d ? v : {}, d ? C : {})),
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
                            ")",
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: W.column,
                    children: (0, r.jsx)("div", {
                        className: W.emojiAliasInputContainer,
                        children: (0, r.jsx)(_.Z, {
                            className: s()({ [W.emojiAliasInputDisabled]: c }),
                            disabled: c,
                            minLen: 1,
                            maxLen: H.Yc,
                            name: z.intl.string(z.t.qUpzYG),
                            autoComplete: "off",
                            value: null != m ? m : "",
                            onBlur: () => {
                                if (m === a.name) return;
                                let e = A.ZP.sanitizeEmojiName(m);
                                e !== a.name &&
                                    (0, b.dv)({
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
                (0, r.jsxs)("div", {
                    className: W.column,
                    children: [
                        (0, r.jsx)(h.qEK, {
                            src: a.user.getAvatarURL(l, 20),
                            "aria-label": O,
                            size: h.EFr.SIZE_20,
                        }),
                        (0, r.jsx)(h.R94, {
                            className: W.emojiRowText,
                            children: O,
                        }),
                    ],
                }),
                null != o &&
                    !c &&
                    (0, r.jsx)(h.P3F, {
                        "aria-label": z.intl.string(z.t.bt75u7),
                        className: W.editEmojiRolesButton,
                        onClick: () => o(a, l),
                        children: (0, r.jsx)(h.vdY, {
                            size: "md",
                            color: "currentColor",
                            className: W.editEmojiRolesIcon,
                        }),
                    }),
                !c &&
                    (0, r.jsx)(j.Z, {
                        className: W.emojiRemove,
                        onClick: () => {
                            (0, b.RE)(l, a.id).catch((e) => {
                                let { status: t } = e;
                                429 === t &&
                                    x.Z.show({
                                        title: z.intl.string(z.t.iufib2),
                                        body: z.intl.string(z.t["Whhv4+"]),
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
            theme: s,
            guild: a,
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
                    theme: s,
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
                            maxSlots: (0, L.y4)(a),
                            emojiCount: i.length,
                        }),
                        (0, r.jsx)(Q, {
                            emojis: i,
                            guild: a,
                            onEdit: o,
                            newlyAddedEmojiIds: c,
                        }),
                        (0, r.jsx)(J, {
                            title: z.intl.string(z.t.wWjQyc),
                            maxSlots: (0, L.y4)(a),
                            emojiCount: l.length,
                        }),
                        (0, r.jsx)(Q, {
                            emojis: l,
                            guild: a,
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
        let { emojis: t, guild: n, onEdit: l, editingDisabled: s = !1, newlyAddedEmojiIds: a } = e,
            o = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: c } = (0, w.Gw)(n);
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
                              q,
                              {
                                  guildId: n.id,
                                  emoji: e,
                                  onEdit: l,
                                  editingDisabled: s || !c(e),
                                  isNewlyAdded: null != (t = null == a ? void 0 : a.has(e.id)) && t,
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
            { staticEmojiCount: l, animatedEmojiCount: s, guild: a } = e,
            o = (0, L.y4)(a),
            c = Math.min(o - l, o - s),
            d = a.premiumTier,
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
              (0, r.jsx)(T.Z, {
                  header: t,
                  text: n,
                  guild: a,
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
            [l, s] = i.useState("");
        o()(null != t, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
        let a = (0, g.e7)([R.Z], () => R.Z.theme),
            { canCreateExpressions: c } = (0, w.XJ)(t),
            {
                revision: u,
                emojis: p,
                autoOpen: x,
            } = (0, g.cj)([M.Z], () => ({
                revision: M.Z.getEmojiRevision(t.id),
                emojis: M.Z.getEmojis(t.id),
                autoOpen: M.Z.getEmojiFileInputAutoOpen(),
            })),
            b = (0, C.Z)(u),
            [j, _] = i.useState(!1),
            [T, D] = i.useState(!1),
            A = i.useRef(null),
            {
                maxEmojiSlots: L,
                availableEmojiSlots: k,
                staticEmoji: H,
                totalStaticEmoji: V,
                animatedEmoji: q,
                totalAnimatedEmoji: J,
            } = (0, I.t)({ guild: t }),
            Q = (0, N.qt)({
                location: "guild_settings",
                autoTrackExposure: !0,
            }),
            [et, en] = i.useState(null),
            er = T || 0 === k || !c;
        i.useEffect(() => {
            j && eo();
        }, [j]),
            i.useEffect(() => {
                if (x) {
                    if (!er) {
                        var t;
                        null == (t = e.current) || t.activateUploadDialogue();
                    }
                    B.ml({ autoOpen: !1 });
                }
            }, [x, er]),
            i.useEffect(() => {
                Y(t.id);
            }, [t.id]),
            i.useEffect(() => {
                null != b && b < u && Y(t.id);
            }, [u, b, t.id]),
            i.useEffect(() => {
                if (null != p && null == et) return void en(p);
            }, [p, et]);
        let ei = i.useMemo(
                () =>
                    Q.isEmojiEditingExperimentEnabled && null != et
                        ? new Set(
                              d()
                                  .differenceBy(p, et, "id")
                                  .map((e) => e.id),
                          )
                        : new Set(),
                [Q.isEmojiEditingExperimentEnabled, p, et],
            ),
            el = i.useCallback(
                function () {
                    let { emoji: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (Q.isEmojiEditingExperimentEnabled && null != e)
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
                [Q.isEmojiEditingExperimentEnabled, t],
            ),
            es = async (e, n, r) => {
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
                B.MK({
                    emojiId: i.id,
                    userImage: {
                        data: e,
                        file: n,
                        image: r,
                    },
                });
            },
            ea = async (e) => {
                s((0, m.Z)()),
                    Z.default.track(F.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: t.id,
                        upload_id: l,
                    }),
                    await (0, P._j)(e, es),
                    _(!0);
            },
            eo = () => {
                null !== A.current && ((0, h.Mr3)(A.current), (A.current = null));
            },
            ec = async (e) => {
                A.current = await (0, h.ZDy)(async () => {
                    let { default: t } = await n.e("16169").then(n.bind(n, 935333));
                    return (n) => (0, r.jsx)(t, K({ processFiles: () => ea(e) }, n));
                });
            },
            ed = (0, y.l)(t),
            eu = Q.isEmojiEditingExperimentEnabled ? (e) => el({ emoji: e }) : void 0;
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
                                                G.Z.open(
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
                                              (0, r.jsxs)(f.zx, {
                                                  "data-migration-pending": !0,
                                                  tabIndex: -1,
                                                  size: f.zx.Sizes.MEDIUM,
                                                  onClick: () => {
                                                      let e = (0, m.Z)();
                                                      s(e),
                                                          Z.default.track(F.rMx.EMOJI_UPLOAD_STARTED, {
                                                              guild_id: t.id,
                                                              upload_id: e,
                                                          });
                                                  },
                                                  disabled: er,
                                                  submitting: T,
                                                  focusProps: { within: !0 },
                                                  children: [
                                                      z.intl.string(z.t.DU0dy8),
                                                      k > 0
                                                          ? (0, r.jsx)(P.ZP, {
                                                                ref: e,
                                                                disabled: er,
                                                                tabIndex: 0,
                                                                onChange: es,
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
                            isLoading: null == p,
                            staticEmoji: H,
                            animatedEmoji: q,
                            guild: t,
                            theme: a,
                            onEdit: eu,
                            newlyAddedEmojiIds: ei,
                        }),
                    ],
                }),
            ],
        });
    };
