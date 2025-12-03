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
    h = n(481060),
    f = n(584973),
    m = n(243778),
    g = n(314897),
    b = n(626135),
    C = n(906605),
    y = n(574176),
    v = n(106301),
    _ = n(833858),
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
    L = n(334405),
    k = n(977007);
function D(e) {
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
    let { channel: V, setIsHangStatusInputFocused: F, setIsEmojiPickerOpen: H, setPopoutRef: B } = e,
        G = r.useRef(null),
        z = (0, u.e7)([v.Z], () => v.Z.getCustomHangStatus()),
        W = (0, j.Z)(),
        q = (0, u.e7)([v.Z], () => v.Z.getFavoritedStatuses()),
        { defaultStatusVariant: K, allowPermanentClear: Y } = (0, y.bN)({
            guildId: V.guild_id,
            location: "HangStatusPicker",
        }),
        X = (0, _.V)(K),
        J = r.useRef(null),
        [Q, $] = r.useState(null != (n = null == z ? void 0 : z.status) ? n : ""),
        [ee, et] = r.useState(null != (l = null == z ? void 0 : z.emoji) ? l : null),
        [en, ei] = r.useState(!1),
        er = (0, u.e7)([v.Z], () => v.Z.getCurrentHangStatus()),
        el = X[er],
        ea = q.length > 0,
        eo = null == Q || "" === Q.trim(),
        es = (0, E.Z)(V),
        ec =
            (Q.trim().length > 0 && Q.trim() !== (null == z || null == (t = z.status) ? void 0 : t.trim())) ||
            (null != ee && !s()(ee, null == z ? void 0 : z.emoji)),
        [eu, ed] = r.useState(!1),
        ep = (0, u.e7)([v.Z], () => v.Z.getFavoritedStatuses().length >= v.o),
        eh = Q.length > 0 || null != ee,
        [ef, em] = (0, m.US)([d.z.HANG_STATUS_POPOVER_NUX]);
    r.useEffect(() => {
        b.default.track(
            A.rMx.HANG_STATUS_PICKER_OPENED,
            U(D({}, (0, O.Z)(V.id)), {
                num_favorites: q.length,
                num_recents: W.length,
            }),
        );
    }, []),
        r.useEffect(() => {
            Q.trim().length > 0 && eu && ed(!1), null == ee && eu && ed(!1);
        }, [Q, ee, eu]),
        r.useEffect(() => {
            var e;
            en || (Q !== (null != (e = null == z ? void 0 : z.status) ? e : "") && "" !== Q.trim()) ? F(!0) : F(!1);
        }, [Q, null == z ? void 0 : z.status, ee, null == z ? void 0 : z.emoji, F, en]),
        r.useEffect(() => {
            null == B || B(null == J ? void 0 : J.current);
        }, [J, B]);
    let eg = r.useCallback(
            (e) => {
                e !== er && ((0, C.Zx)(e, !0), null != ee && et(null), "" !== Q.trim() && $(""));
            },
            [er, ee, Q],
        ),
        eb = r.useCallback(() => {
            et(null), $(""), ei(!1);
        }, []),
        eC = r.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == z ? void 0 : z.emoji) && n === (null == z ? void 0 : z.status)) ||
                    ((0, C._s)(e.status, e.emoji, !0), et(e.emoji), $(e.status));
            },
            [null == z ? void 0 : z.emoji, null == z ? void 0 : z.status],
        ),
        ey = r.useCallback(
            (e) => {
                var t, n;
                null == e || null == (t = e.preventDefault) || t.call(e),
                    null != ee && 0 === Q.trim().length && ed(!0),
                    eo ||
                        (eC({
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
            [Q, ee, eC, eo],
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
        e_ = r.useCallback(
            (e, t) => {
                let n = (0, x.Z)(t);
                (!ep || e) &&
                    ((0, C.tg)(n ? t : t.status, n ? null : t.emoji),
                    b.default.track(A.rMx.HANG_STATUS_FAVORITE_CLICKED, U(D({}, (0, O.Z)(V.id)), { favorited: !e })));
            },
            [V.id, ep],
        ),
        eO = r.useCallback(() => {
            F(!1);
        }, [F]),
        ex = r.useCallback(() => {
            F(!0);
        }, [F]),
        eE = r.useCallback(
            (e, t, n) => {
                var r;
                let l = (0, x.Z)(e),
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
                          (0, i.jsx)(f.Z, {
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
                            l ? eg(e) : eC(e), ei(!1);
                        },
                        isFavorited: o,
                        onFavoriteClick: () => e_(o, e),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [K, eC, eg, X, e_],
        ),
        ej = r.useCallback(() => {
            (0, C.Sc)(!0, Y), et(null), $(""), ei(!1);
        }, [Y]),
        eS = r.useCallback((e) => {
            ei(!0), $(e.substring(0, N.s0));
        }, []);
    return (0, i.jsxs)("div", {
        ref: J,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(L.menu, R.container),
        children: [
            (0, i.jsx)(p.J2, {
                title: M.intl.string(M.t.waaIiO),
                body: M.intl.string(M.t.qDoPah),
                badge: "new",
                shouldShow: ef === d.z.HANG_STATUS_POPOVER_NUX,
                graphic: {
                    type: "image",
                    src: k.Z,
                },
                targetElementRef: J,
                onRequestClose: () => em(w.L.DISMISS),
            }),
            (0, i.jsx)("div", {
                role: "group",
                className: a()(L.groupLabel, R.inputGroup),
                children: (0, i.jsxs)("form", {
                    onSubmit: ey,
                    className: a()(L.item, R.input),
                    children: [
                        (0, i.jsxs)("div", {
                            className: R.inputRow,
                            children: [
                                (0, i.jsx)(h.oil, {
                                    inputRef: G,
                                    value: en || eh ? Q : null != (o = null == el ? void 0 : el.title) ? o : "",
                                    onBlur: eO,
                                    onFocus: ex,
                                    onChange: eS,
                                    placeholder: M.intl.string(M.t.KPop4s),
                                    leading: {
                                        type: "emoji",
                                        button: (0, i.jsx)(P.A, {
                                            customStatusEmoji: ee,
                                            setCustomStatusEmoji: et,
                                            selectedDefaultStatus: en || eh ? null : er,
                                            defaultStatusVariant: K,
                                            setIsEmojiPickerOpen: H,
                                        }),
                                    },
                                    trailing:
                                        (null == z && null == er) || ec
                                            ? ec
                                                ? {
                                                      icon: h.d4D,
                                                      onClick: ey,
                                                      "aria-label": M.intl.string(M.t["R3BPH+"]),
                                                      disabled: 0 === Q.length,
                                                  }
                                                : void 0
                                            : {
                                                  icon: h.XHJ,
                                                  onClick: ej,
                                                  "aria-label": M.intl.string(M.t.S90FuQ),
                                              },
                                }),
                                (0, i.jsx)(h.hU, {
                                    variant: "secondary",
                                    icon: S.k,
                                    onClick: ev,
                                    "aria-label": M.intl.string(M.t["5UAi59"]),
                                }),
                            ],
                        }),
                        eu &&
                            (0, i.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                className: R.inputHint,
                                color: "text-feedback-critical",
                                children: M.intl.string(M.t["s/oq0f"]),
                            }),
                    ],
                }),
            }),
            (0, i.jsxs)(h.Ttm, {
                fade: !0,
                role: "group",
                className: a()(L.groupLabel, R.group, R.scroller),
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
                                        (0, i.jsx)(h.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: M.intl.string(M.t.k8fFjp),
                                        }),
                                        (0, i.jsx)(h.r7p, { size: "xxs" }),
                                    ],
                                }),
                                q.map((e, t) => eE(e, t, "favorite")),
                            ],
                        }),
                    W.length > 0 &&
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
                                        (0, i.jsx)(h.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: M.intl.string(M.t["+9QSnj"]),
                                        }),
                                        (0, i.jsx)(h.T39, { size: "xxs" }),
                                    ],
                                }),
                            ],
                        }),
                    W.map((e, t) => eE(e, t, "recent")),
                ],
            }),
        ],
    });
}
