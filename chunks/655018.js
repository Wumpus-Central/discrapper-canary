n.d(t, { $: () => R }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(348327),
    s = n.n(o),
    c = n(392711),
    u = n(442837),
    d = n(481060),
    p = n(584973),
    h = n(314897),
    f = n(626135),
    m = n(906605),
    g = n(574176),
    b = n(106301),
    y = n(833858),
    C = n(699263),
    _ = n(54332),
    v = n(298905),
    x = n(671746),
    O = n(778169),
    j = n(17030),
    E = n(223135),
    S = n(295536),
    P = n(748855),
    I = n(505905),
    Z = n(981631),
    T = n(388032),
    N = n(787267),
    A = n(334405);
function w(e) {
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
function M(e, t) {
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
function R(e) {
    var t, n, l, o;
    let { channel: R, setIsHangStatusInputFocused: k, setPopoutRef: L } = e,
        D = i.useRef(null),
        U = (0, u.e7)([b.Z], () => b.Z.getCustomHangStatus()),
        B = (0, x.Z)(),
        H = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses()),
        { defaultStatusVariant: F, allowPermanentClear: V } = (0, g.bN)({
            guildId: R.guild_id,
            location: "HangStatusPicker",
        }),
        G = (0, y.V)(F),
        z = i.useRef(null),
        [W, q] = i.useState(null != (n = null == U ? void 0 : U.status) ? n : ""),
        [Y, K] = i.useState(null != (l = null == U ? void 0 : U.emoji) ? l : null),
        [X, J] = i.useState(!1),
        Q = (0, u.e7)([b.Z], () => b.Z.getCurrentHangStatus()),
        $ = G[Q],
        ee = H.length > 0,
        et = null == W || "" === W.trim(),
        en = (0, v.Z)(R),
        er =
            (W.trim().length > 0 && W.trim() !== (null == U || null == (t = U.status) ? void 0 : t.trim())) ||
            (null != Y && !s()(Y, null == U ? void 0 : U.emoji)),
        [ei, el] = i.useState(!1),
        ea = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses().length >= b.o),
        eo = W.length > 0 || null != Y;
    i.useEffect(() => {
        f.default.track(
            Z.rMx.HANG_STATUS_PICKER_OPENED,
            M(w({}, (0, C.Z)(R.id)), {
                num_favorites: H.length,
                num_recents: B.length,
            }),
        );
    }, []),
        i.useEffect(() => {
            W.trim().length > 0 && ei && el(!1), null == Y && ei && el(!1);
        }, [W, Y, ei]),
        i.useEffect(() => {
            var e;
            W !== (null != (e = null == U ? void 0 : U.status) ? e : "") && "" !== W.trim() ? k(!0) : k(!1);
        }, [W, null == U ? void 0 : U.status, Y, null == U ? void 0 : U.emoji, k]),
        i.useEffect(() => {
            null == L || L(null == z ? void 0 : z.current);
        }, [z, L]);
    let es = i.useCallback(
            (e) => {
                e !== Q && ((0, m.Zx)(e, !0), null != Y && K(null), "" !== W.trim() && q(""));
            },
            [Q, Y, W],
        ),
        ec = i.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == U ? void 0 : U.emoji) && n === (null == U ? void 0 : U.status)) ||
                    ((0, m._s)(e.status, e.emoji, !0), K(e.emoji), q(e.status));
            },
            [null == U ? void 0 : U.emoji, null == U ? void 0 : U.status],
        ),
        eu = i.useCallback(
            (e) => {
                var t, n;
                null == e || null == (t = e.preventDefault) || t.call(e),
                    null != Y && 0 === W.trim().length && el(!0),
                    et ||
                        (ec({
                            status: W,
                            emoji:
                                null != Y
                                    ? Y
                                    : {
                                          id: null,
                                          name: "\uD83D\uDCAD",
                                          animated: !1,
                                      },
                        }),
                        null == (n = D.current) || n.blur(),
                        J(!1));
            },
            [W, Y, ec, et],
        ),
        ed = i.useCallback(() => {
            var e, t;
            let n = null,
                r = null;
            do
                if (
                    0 === en.length ||
                    ((r =
                        (null == (n = (0, c.sample)(en)) ? void 0 : n.id) != null
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
                    1 === en.length)
                )
                    break;
            while (null == n || (null == n ? void 0 : n.name) == null || s()(Y, r));
            null != r &&
                (null == n ? void 0 : n.name) != null &&
                (K(r),
                q(n.name),
                J(!0),
                null == (e = D.current) || e.focus(),
                f.default.track(Z.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, C.Z)(R.id)));
        }, [en, Y, R.id]),
        ep = i.useCallback(
            (e, t) => {
                let n = (0, _.Z)(t);
                (!ea || e) &&
                    ((0, m.tg)(n ? t : t.status, n ? null : t.emoji),
                    f.default.track(Z.rMx.HANG_STATUS_FAVORITE_CLICKED, M(w({}, (0, C.Z)(R.id)), { favorited: !e })));
            },
            [R.id, ea],
        ),
        eh = i.useCallback(() => {
            k(!1);
        }, [k]),
        ef = i.useCallback(() => {
            var e;
            W !== (null != (e = null == U ? void 0 : U.status) ? e : "") && "" !== W.trim() ? k(!0) : k(!1);
        }, [k, W, null == U ? void 0 : U.status]),
        em = i.useCallback(
            (e, t, n) => {
                var i;
                let l = (0, _.Z)(e),
                    a = l ? G[e] : null,
                    o = b.Z.isFavorited(e),
                    s = l
                        ? (0, r.jsx)(E.Z, {
                              userId: h.default.getId(),
                              size: 20,
                              hangStatusActivity: {
                                  type: Z.IIU.HANG_STATUS,
                                  state: e,
                              },
                              fallbackVariant: F,
                              className: N.icon,
                          })
                        : null != e.emoji &&
                          (0, r.jsx)(p.Z, {
                              emoji: e.emoji,
                              hideTooltip: !0,
                              className: N.icon,
                          });
                return (0, r.jsx)(
                    P.L,
                    {
                        label: l ? (null != (i = null == a ? void 0 : a.title) ? i : "") : e.status,
                        icon: s,
                        setStatus: () => {
                            l ? es(e) : ec(e), J(!1);
                        },
                        isFavorited: o,
                        onFavoriteClick: () => ep(o, e),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [F, ec, es, G, ep],
        ),
        eg = i.useCallback(() => {
            (0, m.Sc)(!0, V), K(null), q(""), J(!1);
        }, [V]),
        eb = i.useCallback((e) => {
            J(!0), q(e.substring(0, I.s0));
        }, []);
    return (0, r.jsxs)("div", {
        ref: z,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(A.menu, N.container),
        children: [
            (0, r.jsx)("div", {
                role: "group",
                className: a()(A.groupLabel, N.inputGroup),
                children: (0, r.jsxs)("form", {
                    onSubmit: eu,
                    className: a()(A.item, N.input),
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.inputRow,
                            children: [
                                (0, r.jsx)(d.oil, {
                                    inputRef: D,
                                    value: X || eo ? W : null != (o = null == $ ? void 0 : $.title) ? o : "",
                                    onBlur: eh,
                                    onFocus: ef,
                                    onChange: eb,
                                    placeholder: T.intl.string(T.t.KPop4u),
                                    leading: {
                                        type: "emoji",
                                        button: (0, r.jsx)(j.A, {
                                            customStatusEmoji: Y,
                                            setCustomStatusEmoji: K,
                                            selectedDefaultStatus: X || eo ? null : Q,
                                            defaultStatusVariant: F,
                                        }),
                                    },
                                    trailing:
                                        (null == U && null == Q) || er
                                            ? er
                                                ? {
                                                      icon: d.d4D,
                                                      onClick: eu,
                                                      "aria-label": T.intl.string(T.t.R3BPHx),
                                                  }
                                                : void 0
                                            : {
                                                  icon: d.XHJ,
                                                  onClick: eg,
                                                  "aria-label": T.intl.string(T.t.S90Fub),
                                              },
                                }),
                                (0, r.jsx)(d.hU, {
                                    variant: "secondary",
                                    icon: O.k,
                                    onClick: ed,
                                    "aria-label": T.intl.string(T.t["5UAi5+"]),
                                }),
                            ],
                        }),
                        ei &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: N.inputHint,
                                color: "text-danger",
                                children: T.intl.string(T.t["s/oq0d"]),
                            }),
                    ],
                }),
            }),
            (0, r.jsxs)(d.Ttm, {
                fade: !0,
                role: "group",
                className: a()(A.groupLabel, N.group, N.scroller),
                children: [
                    (0, r.jsx)(S.d, { guildId: R.guild_id }),
                    ee &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)("div", {
                                    className: N.subtitle,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: T.intl.string(T.t.k8fFjo),
                                        }),
                                        (0, r.jsx)(d.r7p, { size: "xxs" }),
                                    ],
                                }),
                                H.map((e, t) => em(e, t, "favorite")),
                            ],
                        }),
                    B.length > 0 &&
                        ee &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    className: N.separator,
                                }),
                                (0, r.jsxs)("div", {
                                    className: N.subtitle,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: T.intl.string(T.t["+9QSnp"]),
                                        }),
                                        (0, r.jsx)(d.T39, { size: "xxs" }),
                                    ],
                                }),
                            ],
                        }),
                    B.map((e, t) => em(e, t, "recent")),
                ],
            }),
        ],
    });
}
