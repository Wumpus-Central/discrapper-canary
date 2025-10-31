n.d(t, { $: () => B }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(348327),
    s = n.n(o),
    c = n(392711),
    u = n(442837),
    d = n(704215),
    p = n(907862),
    f = n(481060),
    h = n(584973),
    m = n(243778),
    g = n(314897),
    b = n(626135),
    _ = n(906605),
    y = n(574176),
    C = n(106301),
    v = n(833858),
    O = n(699263),
    x = n(54332),
    E = n(298905),
    j = n(671746),
    S = n(778169),
    P = n(17030),
    I = n(223135),
    Z = n(295536),
    T = n(748855),
    N = n(505905),
    A = n(981631),
    w = n(921944),
    M = n(388032),
    R = n(787267),
    D = n(334405),
    L = n(977007);
function k(e) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e) {
    var t, n, l, o;
    let { channel: B, setIsHangStatusInputFocused: F, setIsEmojiPickerOpen: V, setPopoutRef: H } = e,
        G = i.useRef(null),
        W = (0, u.e7)([C.Z], () => C.Z.getCustomHangStatus()),
        z = (0, j.Z)(),
        q = (0, u.e7)([C.Z], () => C.Z.getFavoritedStatuses()),
        { defaultStatusVariant: Y, allowPermanentClear: K } = (0, y.bN)({
            guildId: B.guild_id,
            location: "HangStatusPicker",
        }),
        X = (0, v.V)(Y),
        J = i.useRef(null),
        [Q, $] = i.useState(null != (n = null == W ? void 0 : W.status) ? n : ""),
        [ee, et] = i.useState(null != (l = null == W ? void 0 : W.emoji) ? l : null),
        [en, er] = i.useState(!1),
        ei = (0, u.e7)([C.Z], () => C.Z.getCurrentHangStatus()),
        el = X[ei],
        ea = q.length > 0,
        eo = null == Q || "" === Q.trim(),
        es = (0, E.Z)(B),
        ec =
            (Q.trim().length > 0 && Q.trim() !== (null == W || null == (t = W.status) ? void 0 : t.trim())) ||
            (null != ee && !s()(ee, null == W ? void 0 : W.emoji)),
        [eu, ed] = i.useState(!1),
        ep = (0, u.e7)([C.Z], () => C.Z.getFavoritedStatuses().length >= C.o),
        ef = Q.length > 0 || null != ee,
        [eh, em] = (0, m.US)([d.z.HANG_STATUS_POPOVER_NUX]);
    i.useEffect(() => {
        b.default.track(
            A.rMx.HANG_STATUS_PICKER_OPENED,
            U(k({}, (0, O.Z)(B.id)), {
                num_favorites: q.length,
                num_recents: z.length,
            }),
        );
    }, []),
        i.useEffect(() => {
            Q.trim().length > 0 && eu && ed(!1), null == ee && eu && ed(!1);
        }, [Q, ee, eu]),
        i.useEffect(() => {
            var e;
            en || (Q !== (null != (e = null == W ? void 0 : W.status) ? e : "") && "" !== Q.trim()) ? F(!0) : F(!1);
        }, [Q, null == W ? void 0 : W.status, ee, null == W ? void 0 : W.emoji, F, en]),
        i.useEffect(() => {
            null == H || H(null == J ? void 0 : J.current);
        }, [J, H]);
    let eg = i.useCallback(
            (e) => {
                e !== ei && ((0, _.Zx)(e, !0), null != ee && et(null), "" !== Q.trim() && $(""));
            },
            [ei, ee, Q],
        ),
        eb = i.useCallback(() => {
            et(null), $(""), er(!1);
        }, []),
        e_ = i.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == W ? void 0 : W.emoji) && n === (null == W ? void 0 : W.status)) ||
                    ((0, _._s)(e.status, e.emoji, !0), et(e.emoji), $(e.status));
            },
            [null == W ? void 0 : W.emoji, null == W ? void 0 : W.status],
        ),
        ey = i.useCallback(
            (e) => {
                var t, n;
                null == e || null == (t = e.preventDefault) || t.call(e),
                    null != ee && 0 === Q.trim().length && ed(!0),
                    eo ||
                        (e_({
                            status: Q,
                            emoji:
                                null != ee
                                    ? ee
                                    : {
                                          id: null,
                                          name: "\uD83D\uDCAD",
                                          animated: !1,
                                      },
                        }),
                        null == (n = G.current) || n.blur(),
                        er(!1));
            },
            [Q, ee, e_, eo],
        ),
        eC = i.useCallback(() => {
            var e, t;
            let n = null,
                r = null;
            do
                if (
                    0 === es.length ||
                    ((r =
                        (null == (n = (0, c.sample)(es)) ? void 0 : n.id) != null
                            ? {
                                  id: n.id,
                                  name: n.name,
                                  animated: n.animated,
                              }
                            : {
                                  id: null,
                                  name: null != (t = null == n ? void 0 : n.optionallyDiverseSequence) ? t : "",
                                  animated: !1,
                              }),
                    1 === es.length)
                )
                    break;
            while (null == n || (null == n ? void 0 : n.name) == null || s()(ee, r));
            null != r &&
                (null == n ? void 0 : n.name) != null &&
                (et(r),
                $(n.name),
                er(!0),
                null == (e = G.current) || e.focus(),
                b.default.track(A.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, O.Z)(B.id)));
        }, [es, ee, B.id]),
        ev = i.useCallback(
            (e, t) => {
                let n = (0, x.Z)(t);
                (!ep || e) &&
                    ((0, _.tg)(n ? t : t.status, n ? null : t.emoji),
                    b.default.track(A.rMx.HANG_STATUS_FAVORITE_CLICKED, U(k({}, (0, O.Z)(B.id)), { favorited: !e })));
            },
            [B.id, ep],
        ),
        eO = i.useCallback(() => {
            F(!1);
        }, [F]),
        ex = i.useCallback(() => {
            F(!0);
        }, [F]),
        eE = i.useCallback(
            (e, t, n) => {
                var i;
                let l = (0, x.Z)(e),
                    a = l ? X[e] : null,
                    o = C.Z.isFavorited(e),
                    s = l
                        ? (0, r.jsx)(I.Z, {
                              userId: g.default.getId(),
                              size: 20,
                              hangStatusActivity: {
                                  type: A.IIU.HANG_STATUS,
                                  state: e,
                              },
                              fallbackVariant: Y,
                              className: R.icon,
                          })
                        : null != e.emoji &&
                          (0, r.jsx)(h.Z, {
                              emoji: e.emoji,
                              hideTooltip: !0,
                              className: R.icon,
                          });
                return (0, r.jsx)(
                    T.L,
                    {
                        label: l ? (null != (i = null == a ? void 0 : a.title) ? i : "") : e.status,
                        icon: s,
                        setStatus: () => {
                            l ? eg(e) : e_(e), er(!1);
                        },
                        isFavorited: o,
                        onFavoriteClick: () => ev(o, e),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [Y, e_, eg, X, ev],
        ),
        ej = i.useCallback(() => {
            (0, _.Sc)(!0, K), et(null), $(""), er(!1);
        }, [K]),
        eS = i.useCallback((e) => {
            er(!0), $(e.substring(0, N.s0));
        }, []);
    return (0, r.jsxs)("div", {
        ref: J,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(D.menu, R.container),
        children: [
            (0, r.jsx)(p.J2, {
                title: M.intl.string(M.t.waaIiO),
                body: M.intl.string(M.t.qDoPah),
                badge: "new",
                shouldShow: eh === d.z.HANG_STATUS_POPOVER_NUX,
                graphic: {
                    type: "image",
                    src: L.Z,
                },
                targetElementRef: J,
                onRequestClose: () => em(w.L.DISMISS),
            }),
            (0, r.jsx)("div", {
                role: "group",
                className: a()(D.groupLabel, R.inputGroup),
                children: (0, r.jsxs)("form", {
                    onSubmit: ey,
                    className: a()(D.item, R.input),
                    children: [
                        (0, r.jsxs)("div", {
                            className: R.inputRow,
                            children: [
                                (0, r.jsx)(f.oil, {
                                    inputRef: G,
                                    value: en || ef ? Q : null != (o = null == el ? void 0 : el.title) ? o : "",
                                    onBlur: eO,
                                    onFocus: ex,
                                    onChange: eS,
                                    placeholder: M.intl.string(M.t.KPop4s),
                                    leading: {
                                        type: "emoji",
                                        button: (0, r.jsx)(P.A, {
                                            customStatusEmoji: ee,
                                            setCustomStatusEmoji: et,
                                            selectedDefaultStatus: en || ef ? null : ei,
                                            defaultStatusVariant: Y,
                                            setIsEmojiPickerOpen: V,
                                        }),
                                    },
                                    trailing:
                                        (null == W && null == ei) || ec
                                            ? ec
                                                ? {
                                                      icon: f.d4D,
                                                      onClick: ey,
                                                      "aria-label": M.intl.string(M.t["R3BPH+"]),
                                                      disabled: 0 === Q.length,
                                                  }
                                                : void 0
                                            : {
                                                  icon: f.XHJ,
                                                  onClick: ej,
                                                  "aria-label": M.intl.string(M.t.S90FuQ),
                                              },
                                }),
                                (0, r.jsx)(f.hU, {
                                    variant: "secondary",
                                    icon: S.k,
                                    onClick: eC,
                                    "aria-label": M.intl.string(M.t["5UAi59"]),
                                }),
                            ],
                        }),
                        eu &&
                            (0, r.jsx)(f.Text, {
                                variant: "text-xs/normal",
                                className: R.inputHint,
                                color: "text-danger",
                                children: M.intl.string(M.t["s/oq0f"]),
                            }),
                    ],
                }),
            }),
            (0, r.jsxs)(f.Ttm, {
                fade: !0,
                role: "group",
                className: a()(D.groupLabel, R.group, R.scroller),
                children: [
                    (0, r.jsx)(Z.d, {
                        guildId: B.guild_id,
                        onSetActivityStatus: eb,
                    }),
                    ea &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)("div", {
                                    className: R.subtitle,
                                    children: [
                                        (0, r.jsx)(f.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: M.intl.string(M.t.k8fFjp),
                                        }),
                                        (0, r.jsx)(f.r7p, { size: "xxs" }),
                                    ],
                                }),
                                q.map((e, t) => eE(e, t, "favorite")),
                            ],
                        }),
                    z.length > 0 &&
                        ea &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    className: R.separator,
                                }),
                                (0, r.jsxs)("div", {
                                    className: R.subtitle,
                                    children: [
                                        (0, r.jsx)(f.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: M.intl.string(M.t["+9QSnj"]),
                                        }),
                                        (0, r.jsx)(f.T39, { size: "xxs" }),
                                    ],
                                }),
                            ],
                        }),
                    z.map((e, t) => eE(e, t, "recent")),
                ],
            }),
        ],
    });
}
