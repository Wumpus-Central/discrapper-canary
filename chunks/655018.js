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
        { defaultStatusVariant: L } = m.n.useExperiment({
            guildId: o.guild_id,
            location: "HangStatusPicker",
        }),
        D = (0, b.V)(L),
        U = i.useRef(null),
        [B, H] = i.useState(null != (n = null == M ? void 0 : M.status) ? n : ""),
        [V, F] = i.useState(null != (l = null == M ? void 0 : M.emoji) ? l : null),
        G = (0, u.e7)([g.Z], () => g.Z.getCurrentHangStatus()),
        z = k.length > 0,
        W = null == B || "" === B.trim(),
        q = (0, _.Z)(o),
        Y =
            (B.trim().length > 0 && B.trim() !== (null == M || null == (t = M.status) ? void 0 : t.trim())) ||
            (null != V && !s()(V, null == M ? void 0 : M.emoji)),
        [K, X] = i.useState(!1);
    i.useEffect(() => {
        B.trim().length > 0 && K && X(!1), null == V && K && X(!1);
    }, [B, V, K]),
        i.useEffect(() => {
            if (null != V) {
                var e;
                null == (e = w.current) || e.focus();
            }
        }, [V]),
        i.useEffect(() => {
            var e;
            B !== (null != (e = null == M ? void 0 : M.status) ? e : "") && "" !== B.trim() ? N(!0) : N(!1);
        }, [B, null == M ? void 0 : M.status, V, null == M ? void 0 : M.emoji, N]),
        i.useEffect(() => {
            var e;
            (null == G || G === S.tN.CUSTOM) && (null == (e = w.current) || e.focus());
        }, [G]),
        i.useEffect(() => {
            null == A || A(null == U ? void 0 : U.current);
        }, [U, A]);
    let J = i.useCallback(
            (e) => {
                e !== G && ((0, f.Zx)(e, !0), null != V && F(null), "" !== B.trim() && H(""));
            },
            [G, V, B],
        ),
        Q = i.useCallback(
            (e, t) => {
                let { emoji: n, status: r } = e;
                (s()(n, null == M ? void 0 : M.emoji) && r === (null == M ? void 0 : M.status)) ||
                    ((0, f._s)(e.status, e.emoji, !0), F(t ? null : e.emoji), H(t ? "" : e.status));
            },
            [null == M ? void 0 : M.emoji, null == M ? void 0 : M.status],
        ),
        $ = i.useCallback(
            (e) => {
                var t;
                null == e || null == (t = e.preventDefault) || t.call(e),
                    null != V && 0 === B.trim().length && X(!0),
                    W ||
                        Q(
                            {
                                status: B,
                                emoji:
                                    null != V
                                        ? V
                                        : {
                                              id: null,
                                              name: "\uD83D\uDCAD",
                                              animated: !1,
                                          },
                            },
                            !0,
                        );
            },
            [B, V, Q, W],
        ),
        ee = i.useCallback(() => {
            let e = null,
                t = null;
            do {
                var n;
                if (
                    0 === q.length ||
                    ((t =
                        (null == (e = (0, c.sample)(q)) ? void 0 : e.id) != null
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
                    1 === q.length)
                )
                    break;
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(V, t));
            null != t &&
                (null == e ? void 0 : e.name) != null &&
                (F(t), H(e.name), h.default.track(P.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, y.Z)(o.id)));
        }, [q, V, o.id]),
        et = i.useCallback(() => {
            N(!1);
        }, [N]),
        en = i.useCallback(() => {
            var e;
            B !== (null != (e = null == M ? void 0 : M.status) ? e : "") && "" !== B.trim() ? N(!0) : N(!1);
        }, [N, B, null == M ? void 0 : M.status]),
        er = i.useCallback(
            (e, t, n) => {
                var i;
                let l = (0, C.Z)(e),
                    a = l ? D[e] : null,
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
                            ? G === e
                            : s()(null == M ? void 0 : M.emoji, e.emoji) &&
                              (null == M ? void 0 : M.status) === e.status,
                        label: l ? (null != (i = null == a ? void 0 : a.title) ? i : "") : e.status,
                        icon: c,
                        setStatus: () => {
                            l ? J(e) : Q(e);
                        },
                        clearStatus: () => (0, f.Sc)(!0),
                        isFavorited: o,
                        onFavoriteClick: () => (0, f.tg)(l ? e : e.status, l ? null : e.emoji),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [L, Q, J, D, null == M ? void 0 : M.emoji, null == M ? void 0 : M.status, G, k],
        );
    return (0, r.jsxs)("div", {
        ref: U,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(T.menu, Z.container),
        children: [
            (0, r.jsx)("div", {
                role: "group",
                className: a()(T.groupLabel, Z.group),
                children: (0, r.jsxs)("form", {
                    onSubmit: $,
                    className: a()(T.item, Z.input),
                    children: [
                        (0, r.jsx)(d.oil, {
                            inputRef: w,
                            value: B,
                            onBlur: et,
                            onFocus: en,
                            onChange: (e) => H(e.substring(0, S.s0)),
                            placeholder: I.intl.string(I.t.KPop4u),
                            leading: {
                                type: "emoji",
                                button: (0, r.jsx)(x.A, {
                                    customStatusEmoji: V,
                                    setCustomStatusEmoji: F,
                                }),
                            },
                            trailing: {
                                icon: v.k,
                                onClick: ee,
                                "aria-label": I.intl.string(I.t["5UAi5+"]),
                            },
                        }),
                        K &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: Z.inputHint,
                                color: "text-danger",
                                children: I.intl.string(I.t["s/oq0d"]),
                            }),
                        Y &&
                            !K &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: Z.inputHint,
                                children: I.intl.format(I.t["VjkH/v"], { onSave: () => $() }),
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
                    z &&
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
                                k.map((e, t) => er(e, t, "favorite")),
                            ],
                        }),
                    R.length > 0 &&
                        z &&
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
                    R.map((e, t) => er(e, t, "recent")),
                ],
            }),
        ],
    });
}
