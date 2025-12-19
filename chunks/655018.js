n.d(t, { $: () => V }), n(388685), n(781311);
var i = n(54381),
    r = n(473749),
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
    y = n(906605),
    C = n(574176),
    v = n(106301),
    x = n(833858),
    O = n(699263),
    E = n(54332),
    j = n(298905),
    S = n(671746),
    _ = n(778169),
    P = n(17030),
    I = n(223135),
    Z = n(295536),
    T = n(748855),
    N = n(505905),
    A = n(981631),
    w = n(921944),
    M = n(388032),
    R = n(876376),
    D = n(564546),
    k = n(314040);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function V(e) {
    var t, n, l, o;
    let { channel: V, setIsHangStatusInputFocused: H, setIsEmojiPickerOpen: F, setPopoutRef: B } = e,
        G = r.useRef(null),
        W = (0, u.e7)([v.Z], () => v.Z.getCustomHangStatus()),
        z = (0, S.Z)(),
        q = (0, u.e7)([v.Z], () => v.Z.getFavoritedStatuses()),
        { defaultStatusVariant: K, allowPermanentClear: Y } = (0, C.bN)({
            guildId: V.guild_id,
            location: "HangStatusPicker",
        }),
        X = (0, x.V)(K),
        J = r.useRef(null),
        [Q, $] = r.useState(null != (n = null == W ? void 0 : W.status) ? n : ""),
        [ee, et] = r.useState(null != (l = null == W ? void 0 : W.emoji) ? l : null),
        [en, ei] = r.useState(!1),
        er = (0, u.e7)([v.Z], () => v.Z.getCurrentHangStatus()),
        el = X[er],
        ea = q.length > 0,
        eo = null == Q || "" === Q.trim(),
        es = (0, j.Z)(V),
        ec =
            (Q.trim().length > 0 && Q.trim() !== (null == W || null == (t = W.status) ? void 0 : t.trim())) ||
            (null != ee && !s()(ee, null == W ? void 0 : W.emoji)),
        [eu, ed] = r.useState(!1),
        ep = (0, u.e7)([v.Z], () => v.Z.getFavoritedStatuses().length >= v.o),
        ef = Q.length > 0 || null != ee,
        [eh, em] = (0, m.US)([d.z.HANG_STATUS_POPOVER_NUX]);
    r.useEffect(() => {
        b.default.track(
            A.rMx.HANG_STATUS_PICKER_OPENED,
            U(L({}, (0, O.Z)(V.id)), {
                num_favorites: q.length,
                num_recents: z.length,
            }),
        );
    }, []),
        r.useEffect(() => {
            Q.trim().length > 0 && eu && ed(!1), null == ee && eu && ed(!1);
        }, [Q, ee, eu]),
        r.useEffect(() => {
            var e;
            en || (Q !== (null != (e = null == W ? void 0 : W.status) ? e : "") && "" !== Q.trim()) ? H(!0) : H(!1);
        }, [Q, null == W ? void 0 : W.status, ee, null == W ? void 0 : W.emoji, H, en]),
        r.useEffect(() => {
            null == B || B(null == J ? void 0 : J.current);
        }, [J, B]);
    let eg = r.useCallback(
            (e) => {
                e !== er && ((0, y.Zx)(e, !0), null != ee && et(null), "" !== Q.trim() && $(""));
            },
            [er, ee, Q],
        ),
        eb = r.useCallback(() => {
            et(null), $(""), ei(!1);
        }, []),
        ey = r.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == W ? void 0 : W.emoji) && n === (null == W ? void 0 : W.status)) ||
                    ((0, y._s)(e.status, e.emoji, !0), et(e.emoji), $(e.status));
            },
            [null == W ? void 0 : W.emoji, null == W ? void 0 : W.status],
        ),
        eC = r.useCallback(
            (e) => {
                var t, n;
                null == e || null == (t = e.preventDefault) || t.call(e),
                    null != ee && 0 === Q.trim().length && ed(!0),
                    eo ||
                        (ey({
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
                        ei(!1));
            },
            [Q, ee, ey, eo],
        ),
        ev = r.useCallback(() => {
            var e, t;
            let n = null,
                i = null;
            do
                if (
                    0 === es.length ||
                    ((i =
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
            while (null == n || (null == n ? void 0 : n.name) == null || s()(ee, i));
            null != i &&
                (null == n ? void 0 : n.name) != null &&
                (et(i),
                $(n.name),
                ei(!0),
                null == (e = G.current) || e.focus(),
                b.default.track(A.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, O.Z)(V.id)));
        }, [es, ee, V.id]),
        ex = r.useCallback(
            (e, t) => {
                let n = (0, E.Z)(t);
                (!ep || e) &&
                    ((0, y.tg)(n ? t : t.status, n ? null : t.emoji),
                    b.default.track(A.rMx.HANG_STATUS_FAVORITE_CLICKED, U(L({}, (0, O.Z)(V.id)), { favorited: !e })));
            },
            [V.id, ep],
        ),
        eO = r.useCallback(() => {
            H(!1);
        }, [H]),
        eE = r.useCallback(() => {
            H(!0);
        }, [H]),
        ej = r.useCallback(
            (e, t, n) => {
                var r;
                let l = (0, E.Z)(e),
                    a = l ? X[e] : null,
                    o = v.Z.isFavorited(e),
                    s = l
                        ? (0, i.jsx)(I.Z, {
                              userId: g.default.getId(),
                              size: 20,
                              hangStatusActivity: {
                                  type: A.IIU.HANG_STATUS,
                                  state: e,
                              },
                              fallbackVariant: K,
                              className: R.icon,
                          })
                        : null != e.emoji &&
                          (0, i.jsx)(h.Z, {
                              emoji: e.emoji,
                              hideTooltip: !0,
                              className: R.icon,
                          });
                return (0, i.jsx)(
                    T.L,
                    {
                        label: l ? (null != (r = null == a ? void 0 : a.title) ? r : "") : e.status,
                        icon: s,
                        setStatus: () => {
                            l ? eg(e) : ey(e), ei(!1);
                        },
                        isFavorited: o,
                        onFavoriteClick: () => ex(o, e),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [K, ey, eg, X, ex],
        ),
        eS = r.useCallback(() => {
            (0, y.Sc)(!0, Y), et(null), $(""), ei(!1);
        }, [Y]),
        e_ = r.useCallback((e) => {
            ei(!0), $(e.substring(0, N.s0));
        }, []);
    return (0, i.jsxs)("div", {
        ref: J,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(D.menu, R.container),
        children: [
            (0, i.jsx)(p.J2, {
                title: M.intl.string(M.t.waaIiO),
                body: M.intl.string(M.t.qDoPah),
                badge: "new",
                shouldShow: eh === d.z.HANG_STATUS_POPOVER_NUX,
                graphic: {
                    type: "image",
                    src: k.Z,
                },
                targetElementRef: J,
                onRequestClose: () => em(w.L.DISMISS),
            }),
            (0, i.jsx)("div", {
                role: "group",
                className: a()(D.groupLabel, R.inputGroup),
                children: (0, i.jsxs)("form", {
                    onSubmit: eC,
                    className: a()(D.item, R.input),
                    children: [
                        (0, i.jsxs)("div", {
                            className: R.inputRow,
                            children: [
                                (0, i.jsx)(f.oil, {
                                    inputRef: G,
                                    value: en || ef ? Q : null != (o = null == el ? void 0 : el.title) ? o : "",
                                    onBlur: eO,
                                    onFocus: eE,
                                    onChange: e_,
                                    placeholder: M.intl.string(M.t.KPop4s),
                                    leading: {
                                        type: "emoji",
                                        button: (0, i.jsx)(P.A, {
                                            customStatusEmoji: ee,
                                            setCustomStatusEmoji: et,
                                            selectedDefaultStatus: en || ef ? null : er,
                                            defaultStatusVariant: K,
                                            setIsEmojiPickerOpen: F,
                                        }),
                                    },
                                    trailing:
                                        (null == W && null == er) || ec
                                            ? ec
                                                ? {
                                                      icon: f.d4D,
                                                      onClick: eC,
                                                      "aria-label": M.intl.string(M.t["R3BPH+"]),
                                                      disabled: 0 === Q.length,
                                                  }
                                                : void 0
                                            : {
                                                  icon: f.XHJ,
                                                  onClick: eS,
                                                  "aria-label": M.intl.string(M.t.S90FuQ),
                                              },
                                }),
                                (0, i.jsx)(f.hU, {
                                    variant: "secondary",
                                    icon: _.k,
                                    onClick: ev,
                                    "aria-label": M.intl.string(M.t["5UAi59"]),
                                }),
                            ],
                        }),
                        eu &&
                            (0, i.jsx)(f.Text, {
                                variant: "text-xs/normal",
                                className: R.inputHint,
                                color: "text-feedback-critical",
                                children: M.intl.string(M.t["s/oq0f"]),
                            }),
                    ],
                }),
            }),
            (0, i.jsxs)(f.Ttm, {
                fade: !0,
                role: "group",
                className: a()(D.groupLabel, R.group, R.scroller),
                children: [
                    (0, i.jsx)(Z.d, {
                        guildId: V.guild_id,
                        onSetActivityStatus: eb,
                    }),
                    ea &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: R.subtitle,
                                    children: [
                                        (0, i.jsx)(f.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: M.intl.string(M.t.k8fFjp),
                                        }),
                                        (0, i.jsx)(f.r7p, { size: "xxs" }),
                                    ],
                                }),
                                q.map((e, t) => ej(e, t, "favorite")),
                            ],
                        }),
                    z.length > 0 &&
                        ea &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", {
                                    role: "separator",
                                    className: R.separator,
                                }),
                                (0, i.jsxs)("div", {
                                    className: R.subtitle,
                                    children: [
                                        (0, i.jsx)(f.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: M.intl.string(M.t["+9QSnj"]),
                                        }),
                                        (0, i.jsx)(f.T39, { size: "xxs" }),
                                    ],
                                }),
                            ],
                        }),
                    z.map((e, t) => ej(e, t, "recent")),
                ],
            }),
        ],
    });
}
