n.d(t, { $: () => N }), n(388685), n(781311);
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
    h = n(626135),
    f = n(906605),
    m = n(574176),
    g = n(106301),
    b = n(833858),
    y = n(699263),
    C = n(54332),
    _ = n(298905),
    v = n(778169),
    x = n(17030),
    O = n(223135),
    j = n(295536),
    E = n(748855),
    S = n(505905),
    P = n(981631),
    I = n(388032),
    Z = n(787267),
    T = n(334405);
function N(e) {
    var t, n, l;
    let { channel: o, setIsHangStatusInputFocused: N, setPopoutRef: A } = e,
        w = i.useRef(null),
        M = (0, u.e7)([g.Z], () => g.Z.getCustomHangStatus()),
        R = (0, u.e7)([g.Z], () => g.Z.getRecentStatuses()),
        k = (0, u.e7)([g.Z], () => g.Z.getFavoritedStatuses()),
        { defaultStatusVariant: L, allowPermanentClear: D } = m.n.useExperiment({
            guildId: o.guild_id,
            location: "HangStatusPicker",
        }),
        U = (0, b.V)(L),
        B = i.useRef(null),
        [H, V] = i.useState(null != (n = null == M ? void 0 : M.status) ? n : ""),
        [F, G] = i.useState(null != (l = null == M ? void 0 : M.emoji) ? l : null),
        z = (0, u.e7)([g.Z], () => g.Z.getCurrentHangStatus()),
        W = k.length > 0,
        q = null == H || "" === H.trim(),
        Y = (0, _.Z)(o),
        K =
            (H.trim().length > 0 && H.trim() !== (null == M || null == (t = M.status) ? void 0 : t.trim())) ||
            (null != F && !s()(F, null == M ? void 0 : M.emoji)),
        [X, J] = i.useState(!1);
    i.useEffect(() => {
        H.trim().length > 0 && X && J(!1), null == F && X && J(!1);
    }, [H, F, X]),
        i.useEffect(() => {
            if (null != F) {
                var e;
                null == (e = w.current) || e.focus();
            }
        }, [F]),
        i.useEffect(() => {
            var e;
            H !== (null != (e = null == M ? void 0 : M.status) ? e : "") && "" !== H.trim() ? N(!0) : N(!1);
        }, [H, null == M ? void 0 : M.status, F, null == M ? void 0 : M.emoji, N]),
        i.useEffect(() => {
            var e;
            (null == z || z === S.tN.CUSTOM) && (null == (e = w.current) || e.focus());
        }, [z]),
        i.useEffect(() => {
            null == A || A(null == B ? void 0 : B.current);
        }, [B, A]);
    let Q = i.useCallback(
            (e) => {
                e !== z && ((0, f.Zx)(e, !0), null != F && G(null), "" !== H.trim() && V(""));
            },
            [z, F, H],
        ),
        $ = i.useCallback(
            (e, t) => {
                let { emoji: n, status: r } = e;
                (s()(n, null == M ? void 0 : M.emoji) && r === (null == M ? void 0 : M.status)) ||
                    ((0, f._s)(e.status, e.emoji, !0), G(t ? null : e.emoji), V(t ? "" : e.status));
            },
            [null == M ? void 0 : M.emoji, null == M ? void 0 : M.status],
        ),
        ee = i.useCallback(
            (e) => {
                var t;
                null == e || null == (t = e.preventDefault) || t.call(e),
                    null != F && 0 === H.trim().length && J(!0),
                    q ||
                        $(
                            {
                                status: H,
                                emoji:
                                    null != F
                                        ? F
                                        : {
                                              id: null,
                                              name: "\uD83D\uDCAD",
                                              animated: !1,
                                          },
                            },
                            !0,
                        );
            },
            [H, F, $, q],
        ),
        et = i.useCallback(() => {
            let e = null,
                t = null;
            do {
                var n;
                if (
                    0 === Y.length ||
                    ((t =
                        (null == (e = (0, c.sample)(Y)) ? void 0 : e.id) != null
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
                    1 === Y.length)
                )
                    break;
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(F, t));
            null != t &&
                (null == e ? void 0 : e.name) != null &&
                (G(t), V(e.name), h.default.track(P.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, y.Z)(o.id)));
        }, [Y, F, o.id]),
        en = i.useCallback(() => {
            N(!1);
        }, [N]),
        er = i.useCallback(() => {
            var e;
            H !== (null != (e = null == M ? void 0 : M.status) ? e : "") && "" !== H.trim() ? N(!0) : N(!1);
        }, [N, H, null == M ? void 0 : M.status]),
        ei = i.useCallback(
            (e, t, n) => {
                var i;
                let l = (0, C.Z)(e),
                    a = l ? U[e] : null,
                    o = k.some(
                        (t) =>
                            ((0, C.Z)(t) && l && e === t) ||
                            (!(0, C.Z)(t) && !l && t.status === e.status && s()(t.emoji, e.emoji)),
                    ),
                    c = l
                        ? (0, r.jsx)(O.Z, {
                              size: 20,
                              hangStatusActivity: {
                                  type: P.IIU.HANG_STATUS,
                                  state: e,
                              },
                              fallbackVariant: L,
                              className: Z.icon,
                          })
                        : null != e.emoji &&
                          (0, r.jsx)(p.Z, {
                              emoji: e.emoji,
                              hideTooltip: !0,
                              className: Z.icon,
                          });
                return (0, r.jsx)(
                    E.L,
                    {
                        isSelected: l
                            ? z === e
                            : s()(null == M ? void 0 : M.emoji, e.emoji) &&
                              (null == M ? void 0 : M.status) === e.status,
                        label: l ? (null != (i = null == a ? void 0 : a.title) ? i : "") : e.status,
                        icon: c,
                        setStatus: () => {
                            l ? Q(e) : $(e);
                        },
                        clearStatus: () => (0, f.Sc)(!0, D),
                        isFavorited: o,
                        onFavoriteClick: () => (0, f.tg)(l ? e : e.status, l ? null : e.emoji),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [L, $, Q, U, null == M ? void 0 : M.emoji, null == M ? void 0 : M.status, z, k, D],
        );
    return (0, r.jsxs)("div", {
        ref: B,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(T.menu, Z.container),
        children: [
            (0, r.jsx)("div", {
                role: "group",
                className: a()(T.groupLabel, Z.group),
                children: (0, r.jsxs)("form", {
                    onSubmit: ee,
                    className: a()(T.item, Z.input),
                    children: [
                        (0, r.jsx)(d.oil, {
                            inputRef: w,
                            value: H,
                            onBlur: en,
                            onFocus: er,
                            onChange: (e) => V(e.substring(0, S.s0)),
                            placeholder: I.intl.string(I.t.KPop4u),
                            leading: {
                                type: "emoji",
                                button: (0, r.jsx)(x.A, {
                                    customStatusEmoji: F,
                                    setCustomStatusEmoji: G,
                                }),
                            },
                            trailing: {
                                icon: v.k,
                                onClick: et,
                                "aria-label": I.intl.string(I.t["5UAi5+"]),
                            },
                        }),
                        X &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: Z.inputHint,
                                color: "text-danger",
                                children: I.intl.string(I.t["s/oq0d"]),
                            }),
                        K &&
                            !X &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: Z.inputHint,
                                children: I.intl.format(I.t["VjkH/v"], { onSave: () => ee() }),
                            }),
                    ],
                }),
            }),
            (0, r.jsxs)(d.Ttm, {
                fade: !0,
                role: "group",
                className: a()(T.groupLabel, Z.group, Z.scroller),
                children: [
                    (0, r.jsx)(j.d, { guildId: o.guild_id }),
                    W &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)("div", {
                                    className: Z.subtitle,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: I.intl.string(I.t.k8fFjo),
                                        }),
                                        (0, r.jsx)(d.r7p, { size: "xxs" }),
                                    ],
                                }),
                                k.map((e, t) => ei(e, t, "favorite")),
                            ],
                        }),
                    R.length > 0 &&
                        W &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    className: Z.separator,
                                }),
                                (0, r.jsxs)("div", {
                                    className: Z.subtitle,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: I.intl.string(I.t["+9QSnp"]),
                                        }),
                                        (0, r.jsx)(d.T39, { size: "xxs" }),
                                    ],
                                }),
                            ],
                        }),
                    R.map((e, t) => ei(e, t, "recent")),
                ],
            }),
        ],
    });
}
