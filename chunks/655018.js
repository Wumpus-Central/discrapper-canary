n.d(t, { $: () => P }), n(388685), n(781311);
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
    h = n(906605),
    f = n(574176),
    m = n(106301),
    g = n(833858),
    b = n(54332),
    y = n(298905),
    _ = n(17030),
    C = n(223135),
    v = n(295536),
    x = n(748855),
    O = n(505905),
    j = n(981631),
    E = n(388032),
    S = n(787267),
    I = n(334405);
function P(e) {
    var t, n;
    let { channel: l, setIsHangStatusInputFocused: o, setPopoutRef: P } = e,
        Z = i.useRef(null),
        T = (0, u.e7)([m.Z], () => m.Z.getCustomHangStatus()),
        N = (0, u.e7)([m.Z], () => m.Z.getRecentStatuses()),
        A = (0, u.e7)([m.Z], () => m.Z.getFavoritedStatuses()),
        { defaultStatusVariant: w } = f.n.useExperiment({
            guildId: l.guild_id,
            location: "HangStatusPicker",
        }),
        R = (0, g.V)(w),
        M = i.useRef(null),
        [D, k] = i.useState(null != (t = null == T ? void 0 : T.status) ? t : ""),
        [L, U] = i.useState(null != (n = null == T ? void 0 : T.emoji) ? n : null),
        B = (0, u.e7)([m.Z], () => m.Z.getCurrentHangStatus()),
        G = A.length > 0,
        H = null == D || "" === D.trim(),
        F = (0, y.Z)(l);
    i.useEffect(() => {
        if (null != L) {
            var e;
            null == (e = Z.current) || e.focus();
        }
    }, [L]),
        i.useEffect(() => {
            var e;
            D !== (null != (e = null == T ? void 0 : T.status) ? e : "") && "" !== D.trim() ? o(!0) : o(!1);
        }, [D, null == T ? void 0 : T.status, L, null == T ? void 0 : T.emoji, o]),
        i.useEffect(() => {
            var e;
            (null == B || B === O.tN.CUSTOM) && (null == (e = Z.current) || e.focus());
        }, [B]),
        i.useEffect(() => {
            null == P || P(null == M ? void 0 : M.current);
        }, [M, P]),
        i.useEffect(() => {
            (null == T ? void 0 : T.emoji) != null && null != T.status ? (k(T.status), U(T.emoji)) : (k(""), U(null));
        }, [T]);
    let V = i.useCallback(
            (e) => {
                e !== B && (0, h.Zx)(e, !0);
            },
            [B],
        ),
        z = i.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == T ? void 0 : T.emoji) && n === (null == T ? void 0 : T.status)) ||
                    (0, h._s)(e.status, e.emoji, !0);
            },
            [null == T ? void 0 : T.emoji, null == T ? void 0 : T.status],
        ),
        W = i.useCallback(
            (e) => {
                var t;
                null == (t = e.preventDefault) || t.call(e),
                    H ||
                        z({
                            status: D,
                            emoji:
                                null != L
                                    ? L
                                    : {
                                          id: null,
                                          name: "\uD83D\uDCAD",
                                          animated: !1,
                                      },
                        });
            },
            [D, L, z, H],
        ),
        q = i.useCallback(() => {
            let e = null,
                t = null;
            do {
                var n;
                if (
                    0 === F.length ||
                    ((t =
                        (null == (e = (0, c.sample)(F)) ? void 0 : e.id) != null
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
                    1 === F.length)
                )
                    break;
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(L, t));
            null != t && (null == e ? void 0 : e.name) != null && (U(t), k(e.name));
        }, [F, L]),
        Y = i.useCallback(() => {
            o(!1);
        }, [o]),
        K = i.useCallback(() => {
            var e;
            D !== (null != (e = null == T ? void 0 : T.status) ? e : "") && "" !== D.trim() ? o(!0) : o(!1);
        }, [o, D, null == T ? void 0 : T.status]),
        X = i.useCallback(
            (e, t, n) => {
                var i;
                let l = (0, b.Z)(e),
                    a = l ? R[e] : null,
                    o = A.some(
                        (t) =>
                            ((0, b.Z)(t) && l && e === t) ||
                            (!(0, b.Z)(t) && !l && t.status === e.status && s()(t.emoji, e.emoji)),
                    ),
                    c = l
                        ? (0, r.jsx)(C.Z, {
                              size: 20,
                              hangStatusActivity: {
                                  type: j.IIU.HANG_STATUS,
                                  state: e,
                              },
                              fallbackVariant: w,
                              className: S.icon,
                          })
                        : null != e.emoji &&
                          (0, r.jsx)(p.Z, {
                              emoji: e.emoji,
                              hideTooltip: !0,
                              className: S.icon,
                          });
                return (0, r.jsx)(
                    x.L,
                    {
                        isSelected: l
                            ? B === e
                            : s()(null == T ? void 0 : T.emoji, e.emoji) &&
                              (null == T ? void 0 : T.status) === e.status,
                        label: l ? (null != (i = null == a ? void 0 : a.title) ? i : "") : e.status,
                        icon: c,
                        setStatus: () => {
                            l ? V(e) : z(e);
                        },
                        clearStatus: () => (0, h.Sc)(!1),
                        isFavorited: o,
                        onFavoriteClick: () => (0, h.tg)(l ? e : e.status, l ? null : e.emoji),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [w, z, V, R, null == T ? void 0 : T.emoji, null == T ? void 0 : T.status, B, A],
        );
    return (0, r.jsxs)("div", {
        ref: M,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(I.menu, S.container),
        children: [
            (0, r.jsxs)("div", {
                role: "group",
                className: a()(I.groupLabel, S.group),
                children: [
                    (0, r.jsxs)("form", {
                        onSubmit: W,
                        className: a()(I.item, S.input),
                        children: [
                            (0, r.jsx)(d.oil, {
                                inputRef: Z,
                                value: D,
                                onBlur: Y,
                                onFocus: K,
                                onChange: (e) => k(e.substring(0, O.s0)),
                                placeholder: E.intl.string(E.t.KPop4u),
                                leading: {
                                    type: "emoji",
                                    button: (0, r.jsx)(_.A, {
                                        customStatusEmoji: L,
                                        setCustomStatusEmoji: U,
                                    }),
                                },
                                trailing: {
                                    icon: d.$2U,
                                    onClick: q,
                                    "aria-label": E.intl.string(E.t["5UAi5+"]),
                                },
                            }),
                            D.trim().length > 0 &&
                                (0, r.jsx)(d.hU, {
                                    onClick: W,
                                    disabled: H,
                                    icon: d.dz2,
                                    "aria-label": E.intl.string(E.t.UDg0qK),
                                }),
                        ],
                    }),
                    G &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)("div", {
                                    className: S.subtitle,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: E.intl.string(E.t.k8fFjo),
                                        }),
                                        (0, r.jsx)(d.r7p, { size: "xxs" }),
                                    ],
                                }),
                                A.map((e, t) => X(e, t, "favorite")),
                            ],
                        }),
                    N.length > 0 &&
                        G &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    className: S.separator,
                                }),
                                (0, r.jsxs)("div", {
                                    className: S.subtitle,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: E.intl.string(E.t["+9QSnp"]),
                                        }),
                                        (0, r.jsx)(d.T39, { size: "xxs" }),
                                    ],
                                }),
                            ],
                        }),
                    N.map((e, t) => X(e, t, "recent")),
                ],
            }),
            (0, r.jsx)(v.d, { guildId: l.guild_id }),
        ],
    });
}
