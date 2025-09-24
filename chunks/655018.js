n.d(t, { $: () => A }), n(388685), n(781311);
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
    x = n(778169),
    O = n(17030),
    j = n(223135),
    E = n(295536),
    S = n(748855),
    P = n(505905),
    I = n(981631),
    Z = n(388032),
    T = n(787267),
    N = n(334405);
function A(e) {
    var t, n, l;
    let { channel: o, setIsHangStatusInputFocused: A, setPopoutRef: w } = e,
        M = i.useRef(null),
        R = (0, u.e7)([b.Z], () => b.Z.getCustomHangStatus()),
        k = (0, u.e7)([b.Z], () => b.Z.getRecentStatuses()),
        L = (0, u.e7)([b.Z], () => b.Z.getFavoritedStatuses()),
        { defaultStatusVariant: D, allowPermanentClear: U } = g.n.useExperiment({
            guildId: o.guild_id,
            location: "HangStatusPicker",
        }),
        B = (0, y.V)(D),
        H = i.useRef(null),
        [V, F] = i.useState(null != (n = null == R ? void 0 : R.status) ? n : ""),
        [G, z] = i.useState(null != (l = null == R ? void 0 : R.emoji) ? l : null),
        W = (0, u.e7)([b.Z], () => b.Z.getCurrentHangStatus()),
        q = L.length > 0,
        Y = null == V || "" === V.trim(),
        K = (0, v.Z)(o),
        X =
            (V.trim().length > 0 && V.trim() !== (null == R || null == (t = R.status) ? void 0 : t.trim())) ||
            (null != G && !s()(G, null == R ? void 0 : R.emoji)),
        [J, Q] = i.useState(!1);
    i.useEffect(() => {
        V.trim().length > 0 && J && Q(!1), null == G && J && Q(!1);
    }, [V, G, J]),
        i.useEffect(() => {
            if (null != G) {
                var e;
                null == (e = M.current) || e.focus();
            }
        }, [G]),
        i.useEffect(() => {
            var e;
            V !== (null != (e = null == R ? void 0 : R.status) ? e : "") && "" !== V.trim() ? A(!0) : A(!1);
        }, [V, null == R ? void 0 : R.status, G, null == R ? void 0 : R.emoji, A]),
        i.useEffect(() => {
            var e;
            (null == W || W === P.tN.CUSTOM) && (null == (e = M.current) || e.focus());
        }, [W]),
        i.useEffect(() => {
            null == w || w(null == H ? void 0 : H.current);
        }, [H, w]);
    let $ = i.useCallback(
            (e) => {
                e !== W && ((0, m.Zx)(e, !0), null != G && z(null), "" !== V.trim() && F(""));
            },
            [W, G, V],
        ),
        ee = i.useCallback(
            (e, t) => {
                let { emoji: n, status: r } = e;
                (s()(n, null == R ? void 0 : R.emoji) && r === (null == R ? void 0 : R.status)) ||
                    ((0, m._s)(e.status, e.emoji, !0), z(t ? null : e.emoji), F(t ? "" : e.status));
            },
            [null == R ? void 0 : R.emoji, null == R ? void 0 : R.status],
        ),
        et = i.useCallback(
            (e) => {
                var t;
                null == e || null == (t = e.preventDefault) || t.call(e),
                    null != G && 0 === V.trim().length && Q(!0),
                    Y ||
                        ee(
                            {
                                status: V,
                                emoji:
                                    null != G
                                        ? G
                                        : {
                                              id: null,
                                              name: "\uD83D\uDCAD",
                                              animated: !1,
                                          },
                            },
                            !0,
                        );
            },
            [V, G, ee, Y],
        ),
        en = i.useCallback(() => {
            let e = null,
                t = null;
            do {
                var n;
                if (
                    0 === K.length ||
                    ((t =
                        (null == (e = (0, c.sample)(K)) ? void 0 : e.id) != null
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
                    1 === K.length)
                )
                    break;
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(G, t));
            null != t &&
                (null == e ? void 0 : e.name) != null &&
                (z(t), F(e.name), f.default.track(I.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, C.Z)(o.id)));
        }, [K, G, o.id]),
        er = i.useCallback(() => {
            A(!1);
        }, [A]),
        ei = i.useCallback(() => {
            var e;
            V !== (null != (e = null == R ? void 0 : R.status) ? e : "") && "" !== V.trim() ? A(!0) : A(!1);
        }, [A, V, null == R ? void 0 : R.status]),
        el = i.useCallback(
            (e, t, n) => {
                var i;
                let l = (0, _.Z)(e),
                    a = l ? B[e] : null,
                    o = L.some(
                        (t) =>
                            ((0, _.Z)(t) && l && e === t) ||
                            (!(0, _.Z)(t) && !l && t.status === e.status && s()(t.emoji, e.emoji)),
                    ),
                    c = l
                        ? (0, r.jsx)(j.Z, {
                              userId: h.default.getId(),
                              size: 20,
                              hangStatusActivity: {
                                  type: I.IIU.HANG_STATUS,
                                  state: e,
                              },
                              fallbackVariant: D,
                              className: T.icon,
                          })
                        : null != e.emoji &&
                          (0, r.jsx)(p.Z, {
                              emoji: e.emoji,
                              hideTooltip: !0,
                              className: T.icon,
                          });
                return (0, r.jsx)(
                    S.L,
                    {
                        isSelected: l
                            ? W === e
                            : s()(null == R ? void 0 : R.emoji, e.emoji) &&
                              (null == R ? void 0 : R.status) === e.status,
                        label: l ? (null != (i = null == a ? void 0 : a.title) ? i : "") : e.status,
                        icon: c,
                        setStatus: () => {
                            l ? $(e) : ee(e);
                        },
                        clearStatus: () => (0, m.Sc)(!0, U),
                        isFavorited: o,
                        onFavoriteClick: () => (0, m.tg)(l ? e : e.status, l ? null : e.emoji),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [D, ee, $, B, null == R ? void 0 : R.emoji, null == R ? void 0 : R.status, W, L, U],
        );
    return (0, r.jsxs)("div", {
        ref: H,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(N.menu, T.container),
        children: [
            (0, r.jsx)("div", {
                role: "group",
                className: a()(N.groupLabel, T.group),
                children: (0, r.jsxs)("form", {
                    onSubmit: et,
                    className: a()(N.item, T.input),
                    children: [
                        (0, r.jsx)(d.oil, {
                            inputRef: M,
                            value: V,
                            onBlur: er,
                            onFocus: ei,
                            onChange: (e) => F(e.substring(0, P.s0)),
                            placeholder: Z.intl.string(Z.t.KPop4u),
                            leading: {
                                type: "emoji",
                                button: (0, r.jsx)(O.A, {
                                    customStatusEmoji: G,
                                    setCustomStatusEmoji: z,
                                }),
                            },
                            trailing: {
                                icon: x.k,
                                onClick: en,
                                "aria-label": Z.intl.string(Z.t["5UAi5+"]),
                            },
                        }),
                        J &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: T.inputHint,
                                color: "text-danger",
                                children: Z.intl.string(Z.t["s/oq0d"]),
                            }),
                        X &&
                            !J &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: T.inputHint,
                                children: Z.intl.format(Z.t["VjkH/v"], { onSave: () => et() }),
                            }),
                    ],
                }),
            }),
            (0, r.jsxs)(d.Ttm, {
                fade: !0,
                role: "group",
                className: a()(N.groupLabel, T.group, T.scroller),
                children: [
                    (0, r.jsx)(E.d, { guildId: o.guild_id }),
                    q &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)("div", {
                                    className: T.subtitle,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: Z.intl.string(Z.t.k8fFjo),
                                        }),
                                        (0, r.jsx)(d.r7p, { size: "xxs" }),
                                    ],
                                }),
                                L.map((e, t) => el(e, t, "favorite")),
                            ],
                        }),
                    k.length > 0 &&
                        q &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    className: T.separator,
                                }),
                                (0, r.jsxs)("div", {
                                    className: T.subtitle,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: Z.intl.string(Z.t["+9QSnp"]),
                                        }),
                                        (0, r.jsx)(d.T39, { size: "xxs" }),
                                    ],
                                }),
                            ],
                        }),
                    k.map((e, t) => el(e, t, "recent")),
                ],
            }),
        ],
    });
}
