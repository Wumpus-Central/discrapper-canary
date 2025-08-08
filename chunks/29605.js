n.d(t, {
    FT: () => q,
    L3: () => K,
    ZP: () => J,
}),
    n(388685),
    n(583741);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(772848),
    m = n(442837),
    g = n(755721),
    p = n(481060),
    h = n(668781),
    f = n(80932),
    b = n(225433),
    x = n(599059),
    j = n(327802),
    v = n(110924),
    _ = n(200876),
    O = n(556019),
    y = n(748523),
    C = n(719403),
    N = n(730089),
    I = n(372444),
    E = n(372129),
    S = n(357156),
    T = n(210887),
    P = n(626135),
    w = n(768581),
    R = n(176354),
    Z = n(267642),
    D = n(51144),
    A = n(434404),
    k = n(471613),
    L = n(999382),
    M = n(806774),
    G = n(981631),
    U = n(185923),
    B = n(388032),
    F = n(808574),
    H = n(588866);
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
let W = d().throttle(f.OQ, 1000),
    V = (e) => {
        let { guildId: t, emoji: n, onEdit: l, editingDisabled: s = !1 } = e,
            [o, c] = i.useState(n.name),
            d = w.ZP.getEmojiURL({
                id: n.id,
                animated: n.animated,
                size: 32,
            }),
            u = D.ZP.useUserTag(n.user);
        return (0, r.jsxs)("div", {
            className: a()(F.emojiRow, H.card),
            children: [
                (0, r.jsx)("div", {
                    className: F.emojiColumn,
                    children: (0, r.jsx)(p.ua7, {
                        text: n.available ? null : B.intl.string(B.t["KUzI7+"]),
                        children: (e) => {
                            var t, i;
                            return (0, r.jsx)(
                                "div",
                                ((t = z({}, e)),
                                (i = i =
                                    {
                                        className: a()(F.emojiImage, { [F.emojiDisabled]: !n.available }),
                                        style: { backgroundImage: "url(".concat(d, ")") },
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
                    className: F.column,
                    children: (0, r.jsx)("div", {
                        className: F.emojiAliasInputContainer,
                        children: (0, r.jsx)(x.Z, {
                            className: a()({ [F.emojiAliasInputDisabled]: s }),
                            disabled: s,
                            minLen: 1,
                            maxLen: U.Yc,
                            name: B.intl.string(B.t.qUpzYG),
                            autoComplete: "off",
                            value: null != o ? o : "",
                            onBlur: () => {
                                if (o !== n.name) {
                                    let e = R.ZP.sanitizeEmojiName(o);
                                    e !== n.name &&
                                        (0, f.dv)({
                                            guildId: t,
                                            emojiId: n.id,
                                            name: e,
                                        }),
                                        c(e);
                                }
                            },
                            onChange: (e) => {
                                c(e.target.value);
                            },
                        }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: F.column,
                    children: [
                        (0, r.jsx)(p.qEK, {
                            src: n.user.getAvatarURL(t, 20),
                            "aria-label": u,
                            size: p.EFr.SIZE_20,
                        }),
                        (0, r.jsx)(p.R94, {
                            className: F.emojiRowText,
                            children: u,
                        }),
                    ],
                }),
                null != l &&
                    !s &&
                    (0, r.jsx)(p.P3F, {
                        "aria-label": B.intl.string(B.t.bt75u7),
                        className: F.editEmojiRolesButton,
                        onClick: () => l(n, t),
                        children: (0, r.jsx)(p.vdY, {
                            size: "md",
                            color: "currentColor",
                            className: F.editEmojiRolesIcon,
                        }),
                    }),
                !s &&
                    (0, r.jsx)(b.Z, {
                        className: F.emojiRemove,
                        onClick: () => {
                            (0, f.RE)(t, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t &&
                                    h.Z.show({
                                        title: B.intl.string(B.t.iufib2),
                                        body: B.intl.string(B.t["Whhv4+"]),
                                    });
                            });
                        },
                    }),
            ],
        });
    },
    Y = (e) => {
        let { isLoading: t, staticEmoji: i, animatedEmoji: l, theme: a, guild: s } = e;
        return t
            ? (0, r.jsx)(p.$jN, {
                  className: F.spinner,
                  type: p.$jN.Type.SPINNING_CIRCLE,
              })
            : 0 === i.length && 0 === l.length
              ? (0, r.jsxs)(p.ubH, {
                    theme: a,
                    className: F.empty,
                    children: [
                        (0, r.jsx)(p.oxh, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212,
                        }),
                        (0, r.jsx)(p.OZU, {
                            note: B.intl.string(B.t.RBbtMz),
                            children: B.intl.string(B.t.lxsmBQ),
                        }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(K, {
                            title: B.intl.string(B.t.sMOuub),
                            maxSlots: (0, Z.y4)(s),
                            emojiCount: i.length,
                        }),
                        (0, r.jsx)(q, {
                            emojis: i,
                            guild: s,
                        }),
                        (0, r.jsx)(K, {
                            title: B.intl.string(B.t.wWjQyc),
                            maxSlots: (0, Z.y4)(s),
                            emojiCount: l.length,
                        }),
                        (0, r.jsx)(q, {
                            emojis: l,
                            guild: s,
                        }),
                    ],
                });
    },
    K = (e) => {
        let { title: t, maxSlots: n, emojiCount: i } = e,
            l = Math.max(n - i, 0);
        return (0, r.jsxs)(p.vwX, {
            tag: p.RB0.H2,
            className: F.title,
            children: [
                t,
                (0, r.jsxs)("span", {
                    children: [" \u2014 ", B.intl.format(B.t.sgL8sL, { count: l })],
                }),
            ],
        });
    },
    q = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: a = !1 } = e,
            s = i.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: o } = (0, S.Gw)(n);
        return 0 === t.length
            ? (0, r.jsx)(p.R94, {
                  type: p.geA.DESCRIPTION,
                  className: F.content,
                  children: B.intl.string(B.t.SpxYoa),
              })
            : (0, r.jsxs)(p.hjN, {
                  className: F.content,
                  children: [
                      (0, r.jsxs)("div", {
                          className: F.emojiTable,
                          children: [
                              (0, r.jsx)(p.R94, {
                                  type: p.geA.DESCRIPTION,
                                  className: F.emojiColumn,
                                  children: B.intl.string(B.t.Z0i3Gh),
                              }),
                              (0, r.jsx)(p.R94, {
                                  type: p.geA.DESCRIPTION,
                                  className: F.columnLabel,
                                  children: B.intl.string(B.t.giajw8),
                              }),
                              (0, r.jsx)(p.R94, {
                                  type: p.geA.DESCRIPTION,
                                  className: F.columnLabel,
                                  children: B.intl.string(B.t.edavpq),
                              }),
                          ],
                      }),
                      s.map((e) =>
                          (0, r.jsx)(
                              V,
                              {
                                  guildId: n.id,
                                  emoji: e,
                                  onEdit: l,
                                  editingDisabled: a || !o(e),
                              },
                              e.id,
                          ),
                      ),
                  ],
              });
    },
    X = (e) => {
        let t,
            n,
            i,
            { staticEmojiCount: l, animatedEmojiCount: a, guild: s } = e,
            o = (0, Z.y4)(s),
            c = Math.min(o - l, o - a),
            d = s.premiumTier,
            u = (0, Z.FZ)(d);
        return null == u || d === G.Eu4.TIER_3 || c > 0
            ? null
            : (c > o
                  ? ((t = B.intl.formatToPlainString(B.t.j0UH0t, { level: u })),
                    (n = B.intl.formatToPlainString(B.t.VQeyKy, { level: u })),
                    (i = G.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = B.intl.string(B.t.zT9Sxc)),
                    (n = B.intl.formatToPlainString(B.t.dBZ1RU, { level: u })),
                    (i = G.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(I.Z, {
                  header: t,
                  text: n,
                  guild: s,
                  analyticsLocation: {
                      page: G.ZY5.GUILD_SETTINGS,
                      section: G.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, Z.ge)(u),
                  },
              }));
    },
    Q = () =>
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(p.vwX, {
                    tag: p.RB0.H2,
                    className: F.emojiUploadUploadRequirementsHeading,
                    children: B.intl.string(B.t.jrXfy8),
                }),
                (0, r.jsxs)("ul", {
                    className: F.emojiUploadUploadRequirementsList,
                    children: [
                        (0, r.jsx)("li", {
                            children: (0, r.jsx)(p.R94, {
                                type: p.geA.DESCRIPTION,
                                children: B.intl.string(B.t.N2qTQ0),
                            }),
                        }),
                        (0, r.jsx)("li", {
                            children: (0, r.jsx)(p.R94, {
                                type: p.geA.DESCRIPTION,
                                children: B.intl.format(B.t.gfAXoa, { maxSize: U.xG }),
                            }),
                        }),
                        (0, r.jsx)("li", {
                            children: (0, r.jsx)(p.R94, {
                                type: p.geA.DESCRIPTION,
                                children: B.intl.string(B.t.rnwKPD),
                            }),
                        }),
                        (0, r.jsx)("li", {
                            children: (0, r.jsx)(p.R94, {
                                type: p.geA.DESCRIPTION,
                                children: B.intl.string(B.t["8Vr5QU"]),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    J = () => {
        let e = i.useRef(null),
            t = (0, m.e7)([L.Z], () => L.Z.getGuild()),
            [l, a] = i.useState("");
        o()(null != t, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
        let s = (0, m.e7)([T.Z], () => T.Z.theme),
            { canCreateExpressions: c } = (0, S.XJ)(t),
            {
                revision: d,
                emojis: h,
                autoOpen: f,
            } = (0, m.cj)([k.Z], () => ({
                revision: k.Z.getEmojiRevision(t.id),
                emojis: k.Z.getEmojis(t.id),
                autoOpen: k.Z.getEmojiFileInputAutoOpen(),
            })),
            b = (0, v.Z)(d),
            [x, I] = i.useState(!1),
            [w, R] = i.useState(!1),
            Z = i.useRef(null),
            {
                maxEmojiSlots: D,
                availableEmojiSlots: U,
                staticEmoji: H,
                totalStaticEmoji: V,
                animatedEmoji: K,
                totalAnimatedEmoji: q,
            } = (0, C.t)({ guild: t }),
            J = (0, O.qt)({
                location: "guild_settings",
                autoTrackExposure: !0,
            }),
            $ = w || 0 === U || !c;
        i.useEffect(() => {
            x && er();
        }, [x]),
            i.useEffect(() => {
                if (f) {
                    if (!$) {
                        var t;
                        null == (t = e.current) || t.activateUploadDialogue();
                    }
                    M.m({ autoOpen: !1 });
                }
            }, [f, $]),
            i.useEffect(() => {
                W(t.id);
            }, [t.id]),
            i.useEffect(() => {
                null != b && b < d && W(t.id);
            }, [d, b, t.id]);
        let ee = i.useCallback(
                () =>
                    (0, y.i)({
                        analyticsLocation: {
                            page: G.ZY5.GUILD_SETTINGS,
                            section: G.jXE.GUILD_SETTINGS_EMOJI_ADD_BUTTON,
                        },
                    }),
                [],
            ),
            et = (e, n, r) =>
                (0, N.G)({
                    data: e,
                    file: n,
                    image: r,
                    guildId: t.id,
                    uploadId: l,
                    hideErrorModal: !0,
                    analyticsLocation: { page: G.ZY5.GUILD_SETTINGS },
                }),
            en = async (e) => {
                a((0, u.Z)()),
                    P.default.track(G.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: t.id,
                        upload_id: l,
                    }),
                    await (0, E._j)(e, et),
                    I(!0);
            },
            er = () => {
                null !== Z.current && ((0, p.Mr3)(Z.current), (Z.current = null));
            },
            ei = async (e) => {
                Z.current = await (0, p.ZDy)(async () => {
                    let { default: t } = await n.e("16169").then(n.bind(n, 935333));
                    return (n) => (0, r.jsx)(t, z({ processFiles: () => en(e) }, n));
                });
            },
            el = (0, _.l)(t);
        return (0, r.jsxs)("div", {
            className: F.emojiSettings,
            children: [
                0 === U
                    ? null
                    : (0, r.jsx)(j.Z, {
                          className: F.emojiUploadContainer,
                          onDrop: ei,
                      }),
                (0, r.jsxs)(p.hjN, {
                    tag: p.RB0.H1,
                    title: B.intl.string(B.t.sMOuub),
                    children: [
                        (0, r.jsx)(X, {
                            guild: t,
                            staticEmojiCount: V,
                            animatedEmojiCount: q,
                        }),
                        (0, r.jsxs)(p.hjN, {
                            className: F.uploader,
                            children: [
                                (0, r.jsx)(p.R94, {
                                    type: p.geA.DESCRIPTION,
                                    children: B.intl.format(B.t.TA1BR0, { count: D }),
                                }),
                                el &&
                                    (0, r.jsx)(p.R94, {
                                        type: p.geA.DESCRIPTION,
                                        children: B.intl.format(B.t.uMkfTk, {
                                            onClick: () =>
                                                A.Z.open(
                                                    t.id,
                                                    G.pNK.ROLE_SUBSCRIPTIONS,
                                                    void 0,
                                                    G.KsC.ROLE_SUBSCRIPTION_EMOJI,
                                                ),
                                        }),
                                    }),
                                J.enabled
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(p.zxk, {
                                                  variant: "primary",
                                                  text: B.intl.string(B.t.DU0dy8),
                                                  onClick: ee,
                                                  disabled: 0 === U,
                                              }),
                                              (0, r.jsx)(p.Text, {
                                                  variant: "text-xs/normal",
                                                  children: B.intl.string(B.t.EgNCTk),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(Q, {}),
                                              (0, r.jsxs)(g.zx, {
                                                  tabIndex: -1,
                                                  size: g.zx.Sizes.MEDIUM,
                                                  onClick: () => {
                                                      let e = (0, u.Z)();
                                                      a(e),
                                                          P.default.track(G.rMx.EMOJI_UPLOAD_STARTED, {
                                                              guild_id: t.id,
                                                              upload_id: e,
                                                          });
                                                  },
                                                  disabled: $,
                                                  submitting: w,
                                                  focusProps: { within: !0 },
                                                  children: [
                                                      B.intl.string(B.t.DU0dy8),
                                                      U > 0
                                                          ? (0, r.jsx)(E.ZP, {
                                                                ref: e,
                                                                disabled: $,
                                                                tabIndex: 0,
                                                                onChange: et,
                                                                setLoading: R,
                                                                multiple: !0,
                                                            })
                                                          : null,
                                                  ],
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                        (0, r.jsx)(Y, {
                            isLoading: null == h,
                            staticEmoji: H,
                            animatedEmoji: K,
                            guild: t,
                            theme: s,
                        }),
                    ],
                }),
            ],
        });
    };
