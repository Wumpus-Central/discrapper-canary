n.d(t, {
    FT: () => $,
    L3: () => Q,
    ZP: () => en,
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
    g = n(772848),
    m = n(442837),
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
    y = n(570908),
    N = n(200876),
    E = n(556019),
    I = n(748523),
    S = n(719403),
    T = n(730089),
    P = n(372444),
    w = n(372129),
    Z = n(357156),
    R = n(210887),
    D = n(626135),
    A = n(768581),
    L = n(176354),
    k = n(267642),
    G = n(51144),
    M = n(434404),
    U = n(471613),
    B = n(999382),
    F = n(806774),
    H = n(981631),
    z = n(185923),
    W = n(388032),
    V = n(878341),
    K = n(620842);
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
let q = d().throttle(b.OQ, 1000),
    X = (e) => {
        var t, n;
        let { guildId: l, emoji: a, onEdit: o, editingDisabled: c = !1, isNewlyAdded: d = !1 } = e,
            [g, m] = i.useState(a.name),
            f = A.ZP.getEmojiURL({
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
            O = G.ZP.useUserTag(a.user);
        return (0, r.jsxs)("div", {
            className: s()(V.emojiRow, K.card),
            role: "row",
            children: [
                (0, r.jsx)("div", {
                    className: V.emojiColumn,
                    children: (0, r.jsx)(p.u, {
                        text: a.available ? null : W.intl.string(W.t["KUzI7+"]),
                        children: (0, r.jsx)(u.animated.div, {
                            className: s()(V.emojiImage, { [V.emojiDisabled]: !a.available }),
                            style:
                                ((t = Y({}, d ? v : {}, d ? C : {})),
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
                    className: V.column,
                    children: (0, r.jsx)("div", {
                        className: V.emojiAliasInputContainer,
                        children: (0, r.jsx)(_.Z, {
                            className: s()({ [V.emojiAliasInputDisabled]: c }),
                            disabled: c,
                            minLen: 1,
                            maxLen: z.Yc,
                            name: W.intl.string(W.t.qUpzYG),
                            autoComplete: "off",
                            value: null != g ? g : "",
                            onBlur: () => {
                                if (g === a.name) return;
                                let e = L.ZP.sanitizeEmojiName(g);
                                e !== a.name &&
                                    (0, b.dv)({
                                        guildId: l,
                                        emojiId: a.id,
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
                    className: V.column,
                    children: (0, r.jsx)(y.Z, {
                        avatar: (0, r.jsx)(h.qEK, {
                            src: a.user.getAvatarURL(l, 20),
                            "aria-label": O,
                            size: h.EFr.SIZE_20,
                        }),
                        name: (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            children: O,
                        }),
                    }),
                }),
                null != o &&
                    !c &&
                    (0, r.jsx)(h.P3F, {
                        "aria-label": W.intl.string(W.t.bt75u7),
                        className: V.editEmojiRolesButton,
                        onClick: () => o(a, l),
                        children: (0, r.jsx)(h.vdY, {
                            size: "md",
                            color: "currentColor",
                            className: V.editEmojiRolesIcon,
                        }),
                    }),
                !c &&
                    (0, r.jsx)(j.Z, {
                        className: V.emojiRemove,
                        onClick: () => {
                            (0, b.RE)(l, a.id).catch((e) => {
                                let { status: t } = e;
                                429 === t &&
                                    x.Z.show({
                                        title: W.intl.string(W.t.iufib2),
                                        body: W.intl.string(W.t["Whhv4+"]),
                                    });
                            });
                        },
                    }),
            ],
        });
    },
    J = (e) => {
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
                  className: V.spinner,
                  type: h.$jN.Type.SPINNING_CIRCLE,
              })
            : 0 === i.length && 0 === l.length
              ? (0, r.jsxs)(h.ubH, {
                    theme: s,
                    className: V.empty,
                    children: [
                        (0, r.jsx)(h.oxh, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212,
                        }),
                        (0, r.jsx)(h.OZU, {
                            note: W.intl.string(W.t.RBbtMz),
                            children: W.intl.string(W.t.lxsmBQ),
                        }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Q, {
                            title: W.intl.string(W.t.sMOuub),
                            maxSlots: (0, k.y4)(a),
                            emojiCount: i.length,
                            children: (0, r.jsx)($, {
                                emojis: i,
                                guild: a,
                                onEdit: o,
                                newlyAddedEmojiIds: c,
                            }),
                        }),
                        (0, r.jsx)(Q, {
                            title: W.intl.string(W.t.wWjQyc),
                            maxSlots: (0, k.y4)(a),
                            emojiCount: l.length,
                            children: (0, r.jsx)($, {
                                emojis: l,
                                guild: a,
                                onEdit: o,
                                newlyAddedEmojiIds: c,
                            }),
                        }),
                    ],
                });
    },
    Q = (e) => {
        let { title: t, maxSlots: n, emojiCount: i, children: l } = e,
            s = Math.max(n - i, 0);
        return (0, r.jsx)(h.C3N, {
            label: t,
            description: W.intl.format(W.t.sgL8sL, { count: s }),
            children: l,
        });
    },
    $ = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: s = !1, newlyAddedEmojiIds: a } = e,
            o = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: c } = (0, Z.Gw)(n),
            d = (0, m.e7)([R.Z], () => R.Z.theme);
        return 0 === t.length
            ? (0, r.jsx)(h.ubH, {
                  theme: d,
                  children: (0, r.jsx)(h.OZU, { children: W.intl.string(W.t.SpxYoa) }),
              })
            : (0, r.jsxs)("div", {
                  role: "table",
                  "aria-label": W.intl.string(W.t.sMOuub),
                  className: V.table,
                  children: [
                      (0, r.jsxs)("div", {
                          role: "rowgroup",
                          className: V.tableHeader,
                          children: [
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: V.emojiColumn,
                                  children: (0, r.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: W.intl.string(W.t.Z0i3Gh),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: V.columnLabel,
                                  children: (0, r.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: W.intl.string(W.t.giajw8),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  role: "columnheader",
                                  className: V.columnLabel,
                                  children: (0, r.jsx)(h.Text, {
                                      variant: "text-sm/semibold",
                                      children: W.intl.string(W.t.edavpq),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          role: "rowgroup",
                          className: V.tableBody,
                          children: o.map((e) => {
                              var t;
                              return (0, r.jsx)(
                                  X,
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
                      }),
                  ],
              });
    },
    ee = (e) => {
        let t,
            n,
            i,
            { staticEmojiCount: l, animatedEmojiCount: s, guild: a } = e,
            o = (0, k.y4)(a),
            c = Math.min(o - l, o - s),
            d = a.premiumTier,
            u = (0, k.FZ)(d);
        return null == u || d === H.Eu4.TIER_3 || c > 0
            ? null
            : (c > o
                  ? ((t = W.intl.formatToPlainString(W.t.j0UH0t, { level: u })),
                    (n = W.intl.formatToPlainString(W.t.VQeyKy, { level: u })),
                    (i = H.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = W.intl.string(W.t.zT9Sxc)),
                    (n = W.intl.formatToPlainString(W.t.dBZ1RU, { level: u })),
                    (i = H.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(P.Z, {
                  header: t,
                  text: n,
                  guild: a,
                  analyticsLocation: {
                      page: H.ZY5.GUILD_SETTINGS,
                      section: H.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, k.ge)(u),
                  },
              }));
    },
    et = () =>
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(h.X6q, {
                    variant: "heading-sm/semibold",
                    children: W.intl.string(W.t.jrXfy8),
                }),
                (0, r.jsxs)("ul", {
                    className: V.emojiUploadUploadRequirementsList,
                    children: [
                        (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: W.intl.string(W.t.N2qTQ0),
                        }),
                        (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: W.intl.format(W.t.gfAXoa, { maxSize: z.xG }),
                        }),
                        (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: W.intl.string(W.t.rnwKPD),
                        }),
                        (0, r.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            tag: "li",
                            children: W.intl.string(W.t["8Vr5QU"]),
                        }),
                    ],
                }),
            ],
        }),
    en = () => {
        let e = i.useRef(null),
            t = (0, m.e7)([B.Z], () => B.Z.getGuild()),
            [l, s] = i.useState("");
        o()(null != t, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
        let a = (0, m.e7)([R.Z], () => R.Z.theme),
            { canCreateExpressions: c } = (0, Z.XJ)(t),
            {
                revision: u,
                emojis: p,
                autoOpen: x,
            } = (0, m.cj)([U.Z], () => ({
                revision: U.Z.getEmojiRevision(t.id),
                emojis: U.Z.getEmojis(t.id),
                autoOpen: U.Z.getEmojiFileInputAutoOpen(),
            })),
            b = (0, C.Z)(u),
            [j, _] = i.useState(!1),
            [y, P] = i.useState(!1),
            A = i.useRef(null),
            {
                maxEmojiSlots: L,
                availableEmojiSlots: k,
                staticEmoji: G,
                totalStaticEmoji: z,
                animatedEmoji: K,
                totalAnimatedEmoji: X,
            } = (0, S.t)({ guild: t }),
            Q = (0, E.qt)({
                location: "guild_settings",
                autoTrackExposure: !0,
            }),
            [$, en] = i.useState(null),
            er = y || 0 === k || !c;
        i.useEffect(() => {
            j && eo();
        }, [j]),
            i.useEffect(() => {
                if (x) {
                    if (!er) {
                        var t;
                        null == (t = e.current) || t.activateUploadDialogue();
                    }
                    F.ml({ autoOpen: !1 });
                }
            }, [x, er]),
            i.useEffect(() => {
                q(t.id);
            }, [t.id]),
            i.useEffect(() => {
                null != b && b < u && q(t.id);
            }, [u, b, t.id]),
            i.useEffect(() => {
                if (null != p && null == $) return void en(p);
            }, [p, $]);
        let ei = i.useMemo(
                () =>
                    Q.isEmojiEditingExperimentEnabled && null != $
                        ? new Set(
                              d()
                                  .differenceBy(p, $, "id")
                                  .map((e) => e.id),
                          )
                        : new Set(),
                [Q.isEmojiEditingExperimentEnabled, p, $],
            ),
            el = i.useCallback(
                function () {
                    let { emoji: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (Q.isEmojiEditingExperimentEnabled && null != e)
                        return void (0, I.i)({
                            guildId: t.id,
                            emoji: e,
                            analyticsLocation: O.Z.GUILD_SETTINGS_EMOJI_EDIT_BUTTON,
                        });
                    (0, I.i)({
                        guildId: t.id,
                        analyticsLocation: {
                            page: H.ZY5.GUILD_SETTINGS,
                            section: H.jXE.GUILD_SETTINGS_EMOJI_ADD_BUTTON,
                        },
                    });
                },
                [Q.isEmojiEditingExperimentEnabled, t],
            ),
            es = async (e, n, r) => {
                let i = await (0, T.G)({
                    data: e,
                    file: n,
                    image: r,
                    guildId: t.id,
                    uploadId: l,
                    hideErrorModal: !0,
                    analyticsLocation: { page: H.ZY5.GUILD_SETTINGS },
                });
                if ("object" != typeof i || !("id" in i)) return i;
                F.MK({
                    emojiId: i.id,
                    userImage: {
                        data: e,
                        file: n,
                        image: r,
                    },
                });
            },
            ea = async (e) => {
                s((0, g.Z)()),
                    D.default.track(H.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: t.id,
                        upload_id: l,
                    }),
                    await (0, w._j)(e, es),
                    _(!0);
            },
            eo = () => {
                null !== A.current && ((0, h.Mr3)(A.current), (A.current = null));
            },
            ec = async (e) => {
                A.current = await (0, h.ZDy)(async () => {
                    let { default: t } = await n.e("16169").then(n.bind(n, 935333));
                    return (n) => (0, r.jsx)(t, Y({ processFiles: () => ea(e) }, n));
                });
            },
            ed = (0, N.l)(t),
            eu = Q.isEmojiEditingExperimentEnabled ? (e) => el({ emoji: e }) : void 0;
        return (0, r.jsxs)("div", {
            className: V.emojiSettings,
            children: [
                0 === k
                    ? null
                    : (0, r.jsx)(v.Z, {
                          className: V.emojiUploadContainer,
                          onDrop: ec,
                      }),
                (0, r.jsxs)(h.Kqy, {
                    gap: 20,
                    children: [
                        (0, r.jsxs)(h.Kqy, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(h.X6q, {
                                    variant: "heading-lg/semibold",
                                    children: W.intl.string(W.t.sMOuub),
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: "text-md/normal",
                                    children: W.intl.format(W.t.TA1BR0, { count: L }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(ee, {
                            guild: t,
                            staticEmojiCount: z,
                            animatedEmojiCount: X,
                        }),
                        (0, r.jsxs)("div", {
                            className: V.uploader,
                            children: [
                                ed &&
                                    (0, r.jsx)(h.Wn, {
                                        messageType: h.QYI.INFO,
                                        children: W.intl.format(W.t.uMkfTk, {
                                            onClick: () =>
                                                M.Z.open(
                                                    t.id,
                                                    H.pNK.ROLE_SUBSCRIPTIONS,
                                                    void 0,
                                                    H.KsC.ROLE_SUBSCRIPTION_EMOJI,
                                                ),
                                        }),
                                    }),
                                Q.enabled
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(h.zxk, {
                                                  variant: "primary",
                                                  text: W.intl.string(W.t.DU0dy8),
                                                  onClick: () => el(),
                                                  disabled: 0 === k,
                                              }),
                                              (0, r.jsx)(h.Text, {
                                                  variant: "text-xs/normal",
                                                  children: W.intl.string(W.t.EgNCTk),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(et, {}),
                                              (0, r.jsxs)(f.zx, {
                                                  "data-migration-pending": !0,
                                                  tabIndex: -1,
                                                  size: f.zx.Sizes.MEDIUM,
                                                  onClick: () => {
                                                      let e = (0, g.Z)();
                                                      s(e),
                                                          D.default.track(H.rMx.EMOJI_UPLOAD_STARTED, {
                                                              guild_id: t.id,
                                                              upload_id: e,
                                                          });
                                                  },
                                                  disabled: er,
                                                  submitting: y,
                                                  focusProps: { within: !0 },
                                                  children: [
                                                      W.intl.string(W.t.DU0dy8),
                                                      k > 0
                                                          ? (0, r.jsx)(w.ZP, {
                                                                ref: e,
                                                                disabled: er,
                                                                tabIndex: 0,
                                                                onChange: es,
                                                                setLoading: P,
                                                                multiple: !0,
                                                            })
                                                          : null,
                                                  ],
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                        (0, r.jsx)(J, {
                            isLoading: null == p,
                            staticEmoji: G,
                            animatedEmoji: K,
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
