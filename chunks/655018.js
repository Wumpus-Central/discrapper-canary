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
    var t, n, l;
    let { channel: o, setIsHangStatusInputFocused: R, setPopoutRef: k } = e,
        L = i.useRef(null),
        D = (0, u.e7)([b.Z], () => b.Z.getCustomHangStatus()),
        U = (0, x.Z)(),
        B = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses()),
        { defaultStatusVariant: F, allowPermanentClear: H } = g.n.useExperiment({
            guildId: o.guild_id,
            location: "HangStatusPicker",
        }),
        V = (0, y.V)(F),
        G = i.useRef(null),
        [z, W] = i.useState(null != (n = null == D ? void 0 : D.status) ? n : ""),
        [q, Y] = i.useState(null != (l = null == D ? void 0 : D.emoji) ? l : null),
        K = (0, u.e7)([b.Z], () => b.Z.getCurrentHangStatus()),
        X = B.length > 0,
        J = null == z || "" === z.trim(),
        Q = (0, v.Z)(o),
        $ =
            (z.trim().length > 0 && z.trim() !== (null == D || null == (t = D.status) ? void 0 : t.trim())) ||
            (null != q && !s()(q, null == D ? void 0 : D.emoji)),
        [ee, et] = i.useState(!1),
        en = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses().length >= b.o);
    i.useEffect(() => {
        f.default.track(
            Z.rMx.HANG_STATUS_PICKER_OPENED,
            M(w({}, (0, C.Z)(o.id)), {
                num_favorites: B.length,
                num_recents: U.length,
            }),
        );
    }, []),
        i.useEffect(() => {
            z.trim().length > 0 && ee && et(!1), null == q && ee && et(!1);
        }, [z, q, ee]),
        i.useEffect(() => {
            var e;
            z !== (null != (e = null == D ? void 0 : D.status) ? e : "") && "" !== z.trim() ? R(!0) : R(!1);
        }, [z, null == D ? void 0 : D.status, q, null == D ? void 0 : D.emoji, R]),
        i.useEffect(() => {
            null == k || k(null == G ? void 0 : G.current);
        }, [G, k]);
    let er = i.useCallback(
            (e) => {
                e !== K && ((0, m.Zx)(e, !0), null != q && Y(null), "" !== z.trim() && W(""));
            },
            [K, q, z],
        ),
        ei = i.useCallback(
            (e, t) => {
                let { emoji: n, status: r } = e;
                (s()(n, null == D ? void 0 : D.emoji) && r === (null == D ? void 0 : D.status)) ||
                    ((0, m._s)(e.status, e.emoji, !0), Y(t ? null : e.emoji), W(t ? "" : e.status));
            },
            [null == D ? void 0 : D.emoji, null == D ? void 0 : D.status],
        ),
        el = i.useCallback(
            (e) => {
                var t, n;
                null == e || null == (t = e.preventDefault) || t.call(e),
                    null != q && 0 === z.trim().length && et(!0),
                    J ||
                        (ei(
                            {
                                status: z,
                                emoji:
                                    null != q
                                        ? q
                                        : {
                                              id: null,
                                              name: "\uD83D\uDCAD",
                                              animated: !1,
                                          },
                            },
                            !0,
                        ),
                        null == (n = L.current) || n.blur());
            },
            [z, q, ei, J],
        ),
        ea = i.useCallback(() => {
            let e = null,
                t = null;
            do {
                var n;
                if (
                    0 === Q.length ||
                    ((t =
                        (null == (e = (0, c.sample)(Q)) ? void 0 : e.id) != null
                            ? {
                                  id: e.id,
                                  name: e.name,
                                  animated: e.animated,
                              }
                            : {
                                  id: null,
                                  name: null != (n = null == e ? void 0 : e.optionallyDiverseSequence) ? n : "",
                                  animated: !1,
                              }),
                    1 === Q.length)
                )
                    break;
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(q, t));
            null != t &&
                (null == e ? void 0 : e.name) != null &&
                (Y(t), W(e.name), f.default.track(Z.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, C.Z)(o.id)));
        }, [Q, q, o.id]),
        eo = i.useCallback(
            (e, t) => {
                let n = (0, _.Z)(t);
                (!en || e) &&
                    ((0, m.tg)(n ? t : t.status, n ? null : t.emoji),
                    f.default.track(Z.rMx.HANG_STATUS_FAVORITE_CLICKED, M(w({}, (0, C.Z)(o.id)), { favorited: !e })));
            },
            [o.id, en],
        ),
        es = i.useCallback(() => {
            R(!1);
        }, [R]),
        ec = i.useCallback(() => {
            var e;
            z !== (null != (e = null == D ? void 0 : D.status) ? e : "") && "" !== z.trim() ? R(!0) : R(!1);
        }, [R, z, null == D ? void 0 : D.status]),
        eu = i.useCallback(
            (e, t, n) => {
                var i;
                let l = (0, _.Z)(e),
                    a = l ? V[e] : null,
                    o = b.Z.isFavorited(e),
                    c = l
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
                        isSelected: l
                            ? K === e
                            : s()(null == D ? void 0 : D.emoji, e.emoji) &&
                              (null == D ? void 0 : D.status) === e.status,
                        label: l ? (null != (i = null == a ? void 0 : a.title) ? i : "") : e.status,
                        icon: c,
                        setStatus: () => {
                            l ? er(e) : ei(e);
                        },
                        clearStatus: () => (0, m.Sc)(!0, H),
                        isFavorited: o,
                        onFavoriteClick: () => eo(o, e),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [F, ei, er, V, null == D ? void 0 : D.emoji, null == D ? void 0 : D.status, K, H, eo],
        );
    return (0, r.jsxs)("div", {
        ref: G,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(A.menu, N.container),
        children: [
            (0, r.jsx)("div", {
                role: "group",
                className: a()(A.groupLabel, N.group),
                children: (0, r.jsxs)("form", {
                    onSubmit: el,
                    className: a()(A.item, N.input),
                    children: [
                        (0, r.jsx)(d.oil, {
                            inputRef: L,
                            value: z,
                            onBlur: es,
                            onFocus: ec,
                            onChange: (e) => W(e.substring(0, I.s0)),
                            placeholder: T.intl.string(T.t.KPop4u),
                            leading: {
                                type: "emoji",
                                button: (0, r.jsx)(j.A, {
                                    customStatusEmoji: q,
                                    setCustomStatusEmoji: Y,
                                }),
                            },
                            trailing: {
                                icon: O.k,
                                onClick: ea,
                                "aria-label": T.intl.string(T.t["5UAi5+"]),
                            },
                        }),
                        ee &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: N.inputHint,
                                color: "text-danger",
                                children: T.intl.string(T.t["s/oq0d"]),
                            }),
                        $ &&
                            !ee &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: N.inputHint,
                                children: T.intl.format(T.t["VjkH/v"], { onSave: () => el() }),
                            }),
                    ],
                }),
            }),
            (0, r.jsxs)(d.Ttm, {
                fade: !0,
                role: "group",
                className: a()(A.groupLabel, N.group, N.scroller),
                children: [
                    (0, r.jsx)(S.d, { guildId: o.guild_id }),
                    X &&
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
                                B.map((e, t) => eu(e, t, "favorite")),
                            ],
                        }),
                    U.length > 0 &&
                        X &&
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
                    U.map((e, t) => eu(e, t, "recent")),
                ],
            }),
        ],
    });
}
