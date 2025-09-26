n.d(t, { $: () => w }), n(388685), n(781311);
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
    var t, n, l;
    let { channel: o, setIsHangStatusInputFocused: w, setPopoutRef: M } = e,
        R = i.useRef(null),
        k = (0, u.e7)([b.Z], () => b.Z.getCustomHangStatus()),
        L = (0, x.Z)(),
        D = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses()),
        { defaultStatusVariant: U, allowPermanentClear: B } = g.n.useExperiment({
            guildId: o.guild_id,
            location: "HangStatusPicker",
        }),
        F = (0, y.V)(U),
        H = i.useRef(null),
        [V, G] = i.useState(null != (n = null == k ? void 0 : k.status) ? n : ""),
        [z, W] = i.useState(null != (l = null == k ? void 0 : k.emoji) ? l : null),
        q = (0, u.e7)([b.Z], () => b.Z.getCurrentHangStatus()),
        Y = D.length > 0,
        K = null == V || "" === V.trim(),
        X = (0, v.Z)(o),
        J =
            (V.trim().length > 0 && V.trim() !== (null == k || null == (t = k.status) ? void 0 : t.trim())) ||
            (null != z && !s()(z, null == k ? void 0 : k.emoji)),
        [Q, $] = i.useState(!1),
        ee = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses().length >= b.o);
    i.useEffect(() => {
        V.trim().length > 0 && Q && $(!1), null == z && Q && $(!1);
    }, [V, z, Q]),
        i.useEffect(() => {
            if (null != z) {
                var e;
                null == (e = R.current) || e.focus();
            }
        }, [z]),
        i.useEffect(() => {
            var e;
            V !== (null != (e = null == k ? void 0 : k.status) ? e : "") && "" !== V.trim() ? w(!0) : w(!1);
        }, [V, null == k ? void 0 : k.status, z, null == k ? void 0 : k.emoji, w]),
        i.useEffect(() => {
            var e;
            (null == q || q === I.tN.CUSTOM) && (null == (e = R.current) || e.focus());
        }, [q]),
        i.useEffect(() => {
            null == M || M(null == H ? void 0 : H.current);
        }, [H, M]);
    let et = i.useCallback(
            (e) => {
                e !== q && ((0, m.Zx)(e, !0), null != z && W(null), "" !== V.trim() && G(""));
            },
            [q, z, V],
        ),
        en = i.useCallback(
            (e, t) => {
                let { emoji: n, status: r } = e;
                (s()(n, null == k ? void 0 : k.emoji) && r === (null == k ? void 0 : k.status)) ||
                    ((0, m._s)(e.status, e.emoji, !0), W(t ? null : e.emoji), G(t ? "" : e.status));
            },
            [null == k ? void 0 : k.emoji, null == k ? void 0 : k.status],
        ),
        er = i.useCallback(
            (e) => {
                var t;
                null == e || null == (t = e.preventDefault) || t.call(e),
                    null != z && 0 === V.trim().length && $(!0),
                    K ||
                        en(
                            {
                                status: V,
                                emoji:
                                    null != z
                                        ? z
                                        : {
                                              id: null,
                                              name: "\uD83D\uDCAD",
                                              animated: !1,
                                          },
                            },
                            !0,
                        );
            },
            [V, z, en, K],
        ),
        ei = i.useCallback(() => {
            let e = null,
                t = null;
            do {
                var n;
                if (
                    0 === X.length ||
                    ((t =
                        (null == (e = (0, c.sample)(X)) ? void 0 : e.id) != null
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
                    1 === X.length)
                )
                    break;
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(z, t));
            null != t &&
                (null == e ? void 0 : e.name) != null &&
                (W(t), G(e.name), f.default.track(Z.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, C.Z)(o.id)));
        }, [X, z, o.id]),
        el = i.useCallback(
            (e, t) => {
                let n = (0, _.Z)(t);
                if (!ee || e) {
                    var r, i;
                    (0, m.tg)(n ? t : t.status, n ? null : t.emoji),
                        f.default.track(
                            Z.rMx.HANG_STATUS_FAVORITE_CLICKED,
                            ((r = (function (e) {
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
                            })({}, (0, C.Z)(o.id))),
                            (i = i = { favorited: !e }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            r),
                        );
                }
            },
            [o.id, ee],
        ),
        ea = i.useCallback(() => {
            w(!1);
        }, [w]),
        eo = i.useCallback(() => {
            var e;
            V !== (null != (e = null == k ? void 0 : k.status) ? e : "") && "" !== V.trim() ? w(!0) : w(!1);
        }, [w, V, null == k ? void 0 : k.status]),
        es = i.useCallback(
            (e, t, n) => {
                var i;
                let l = (0, _.Z)(e),
                    a = l ? F[e] : null,
                    o = b.Z.isFavorited(e),
                    c = l
                        ? (0, r.jsx)(E.Z, {
                              userId: h.default.getId(),
                              size: 20,
                              hangStatusActivity: {
                                  type: Z.IIU.HANG_STATUS,
                                  state: e,
                              },
                              fallbackVariant: U,
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
                            ? q === e
                            : s()(null == k ? void 0 : k.emoji, e.emoji) &&
                              (null == k ? void 0 : k.status) === e.status,
                        label: l ? (null != (i = null == a ? void 0 : a.title) ? i : "") : e.status,
                        icon: c,
                        setStatus: () => {
                            l ? et(e) : en(e);
                        },
                        clearStatus: () => (0, m.Sc)(!0, B),
                        isFavorited: o,
                        onFavoriteClick: () => el(o, e),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [U, en, et, F, null == k ? void 0 : k.emoji, null == k ? void 0 : k.status, q, B, el],
        );
    return (0, r.jsxs)("div", {
        ref: H,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(A.menu, N.container),
        children: [
            (0, r.jsx)("div", {
                role: "group",
                className: a()(A.groupLabel, N.group),
                children: (0, r.jsxs)("form", {
                    onSubmit: er,
                    className: a()(A.item, N.input),
                    children: [
                        (0, r.jsx)(d.oil, {
                            inputRef: R,
                            value: V,
                            onBlur: ea,
                            onFocus: eo,
                            onChange: (e) => G(e.substring(0, I.s0)),
                            placeholder: T.intl.string(T.t.KPop4u),
                            leading: {
                                type: "emoji",
                                button: (0, r.jsx)(j.A, {
                                    customStatusEmoji: z,
                                    setCustomStatusEmoji: W,
                                }),
                            },
                            trailing: {
                                icon: O.k,
                                onClick: ei,
                                "aria-label": T.intl.string(T.t["5UAi5+"]),
                            },
                        }),
                        Q &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: N.inputHint,
                                color: "text-danger",
                                children: T.intl.string(T.t["s/oq0d"]),
                            }),
                        J &&
                            !Q &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: N.inputHint,
                                children: T.intl.format(T.t["VjkH/v"], { onSave: () => er() }),
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
                    Y &&
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
                                D.map((e, t) => es(e, t, "favorite")),
                            ],
                        }),
                    L.length > 0 &&
                        Y &&
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
                    L.map((e, t) => es(e, t, "recent")),
                ],
            }),
        ],
    });
}
