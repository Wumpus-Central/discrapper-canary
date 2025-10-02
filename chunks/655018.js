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
    h = n(481060),
    f = n(584973),
    m = n(243778),
    g = n(314897),
    b = n(626135),
    y = n(906605),
    C = n(574176),
    _ = n(106301),
    v = n(833858),
    x = n(699263),
    O = n(54332),
    j = n(298905),
    E = n(671746),
    S = n(778169),
    P = n(17030),
    I = n(223135),
    Z = n(295536),
    N = n(748855),
    T = n(505905),
    A = n(981631),
    w = n(921944),
    M = n(388032),
    R = n(787267),
    k = n(334405),
    D = n(977007);
function L(e) {
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
    let { channel: B, setIsHangStatusInputFocused: H, setPopoutRef: V } = e,
        F = i.useRef(null),
        G = (0, u.e7)([_.Z], () => _.Z.getCustomHangStatus()),
        z = (0, E.Z)(),
        W = (0, u.e7)([_.Z], () => _.Z.getFavoritedStatuses()),
        { defaultStatusVariant: q, allowPermanentClear: Y } = (0, C.bN)({
            guildId: B.guild_id,
            location: "HangStatusPicker",
        }),
        K = (0, v.V)(q),
        X = i.useRef(null),
        [J, Q] = i.useState(null != (n = null == G ? void 0 : G.status) ? n : ""),
        [$, ee] = i.useState(null != (l = null == G ? void 0 : G.emoji) ? l : null),
        [et, en] = i.useState(!1),
        er = (0, u.e7)([_.Z], () => _.Z.getCurrentHangStatus()),
        ei = K[er],
        el = W.length > 0,
        ea = null == J || "" === J.trim(),
        eo = (0, j.Z)(B),
        es =
            (J.trim().length > 0 && J.trim() !== (null == G || null == (t = G.status) ? void 0 : t.trim())) ||
            (null != $ && !s()($, null == G ? void 0 : G.emoji)),
        [ec, eu] = i.useState(!1),
        ed = (0, u.e7)([_.Z], () => _.Z.getFavoritedStatuses().length >= _.o),
        ep = J.length > 0 || null != $,
        [eh, ef] = (0, m.US)([d.z.HANG_STATUS_POPOVER_NUX]);
    i.useEffect(() => {
        b.default.track(
            A.rMx.HANG_STATUS_PICKER_OPENED,
            U(L({}, (0, x.Z)(B.id)), {
                num_favorites: W.length,
                num_recents: z.length,
            }),
        );
    }, []),
        i.useEffect(() => {
            J.trim().length > 0 && ec && eu(!1), null == $ && ec && eu(!1);
        }, [J, $, ec]),
        i.useEffect(() => {
            var e;
            J !== (null != (e = null == G ? void 0 : G.status) ? e : "") && "" !== J.trim() ? H(!0) : H(!1);
        }, [J, null == G ? void 0 : G.status, $, null == G ? void 0 : G.emoji, H]),
        i.useEffect(() => {
            null == V || V(null == X ? void 0 : X.current);
        }, [X, V]);
    let em = i.useCallback(
            (e) => {
                e !== er && ((0, y.Zx)(e, !0), null != $ && ee(null), "" !== J.trim() && Q(""));
            },
            [er, $, J],
        ),
        eg = i.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == G ? void 0 : G.emoji) && n === (null == G ? void 0 : G.status)) ||
                    ((0, y._s)(e.status, e.emoji, !0), ee(e.emoji), Q(e.status));
            },
            [null == G ? void 0 : G.emoji, null == G ? void 0 : G.status],
        ),
        eb = i.useCallback(
            (e) => {
                var t, n;
                null == e || null == (t = e.preventDefault) || t.call(e),
                    null != $ && 0 === J.trim().length && eu(!0),
                    ea ||
                        (eg({
                            status: J,
                            emoji:
                                null != $
                                    ? $
                                    : {
                                          id: null,
                                          name: "\uD83D\uDCAD",
                                          animated: !1,
                                      },
                        }),
                        null == (n = F.current) || n.blur(),
                        en(!1));
            },
            [J, $, eg, ea],
        ),
        ey = i.useCallback(() => {
            var e, t;
            let n = null,
                r = null;
            do
                if (
                    0 === eo.length ||
                    ((r =
                        (null == (n = (0, c.sample)(eo)) ? void 0 : n.id) != null
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
                    1 === eo.length)
                )
                    break;
            while (null == n || (null == n ? void 0 : n.name) == null || s()($, r));
            null != r &&
                (null == n ? void 0 : n.name) != null &&
                (ee(r),
                Q(n.name),
                en(!0),
                null == (e = F.current) || e.focus(),
                b.default.track(A.rMx.HANG_STATUS_RANDOMIZER_CLICKED, (0, x.Z)(B.id)));
        }, [eo, $, B.id]),
        eC = i.useCallback(
            (e, t) => {
                let n = (0, O.Z)(t);
                (!ed || e) &&
                    ((0, y.tg)(n ? t : t.status, n ? null : t.emoji),
                    b.default.track(A.rMx.HANG_STATUS_FAVORITE_CLICKED, U(L({}, (0, x.Z)(B.id)), { favorited: !e })));
            },
            [B.id, ed],
        ),
        e_ = i.useCallback(() => {
            H(!1);
        }, [H]),
        ev = i.useCallback(() => {
            var e;
            J !== (null != (e = null == G ? void 0 : G.status) ? e : "") && "" !== J.trim() ? H(!0) : H(!1);
        }, [H, J, null == G ? void 0 : G.status]),
        ex = i.useCallback(
            (e, t, n) => {
                var i;
                let l = (0, O.Z)(e),
                    a = l ? K[e] : null,
                    o = _.Z.isFavorited(e),
                    s = l
                        ? (0, r.jsx)(I.Z, {
                              userId: g.default.getId(),
                              size: 20,
                              hangStatusActivity: {
                                  type: A.IIU.HANG_STATUS,
                                  state: e,
                              },
                              fallbackVariant: q,
                              className: R.icon,
                          })
                        : null != e.emoji &&
                          (0, r.jsx)(f.Z, {
                              emoji: e.emoji,
                              hideTooltip: !0,
                              className: R.icon,
                          });
                return (0, r.jsx)(
                    N.L,
                    {
                        label: l ? (null != (i = null == a ? void 0 : a.title) ? i : "") : e.status,
                        icon: s,
                        setStatus: () => {
                            l ? em(e) : eg(e), en(!1);
                        },
                        isFavorited: o,
                        onFavoriteClick: () => eC(o, e),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [q, eg, em, K, eC],
        ),
        eO = i.useCallback(() => {
            (0, y.Sc)(!0, Y), ee(null), Q(""), en(!1);
        }, [Y]),
        ej = i.useCallback((e) => {
            en(!0), Q(e.substring(0, T.s0));
        }, []);
    return (0, r.jsxs)("div", {
        ref: X,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(k.menu, R.container),
        children: [
            (0, r.jsx)(p.J2, {
                title: M.intl.string(M.t.waaIiI),
                body: M.intl.string(M.t.qDoPam),
                badge: "new",
                shouldShow: eh === d.z.HANG_STATUS_POPOVER_NUX,
                graphic: {
                    type: "image",
                    src: D.Z,
                },
                targetElementRef: X,
                onRequestClose: () => ef(w.L.DISMISS),
            }),
            (0, r.jsx)("div", {
                role: "group",
                className: a()(k.groupLabel, R.inputGroup),
                children: (0, r.jsxs)("form", {
                    onSubmit: eb,
                    className: a()(k.item, R.input),
                    children: [
                        (0, r.jsxs)("div", {
                            className: R.inputRow,
                            children: [
                                (0, r.jsx)(h.oil, {
                                    inputRef: F,
                                    value: et || ep ? J : null != (o = null == ei ? void 0 : ei.title) ? o : "",
                                    onBlur: e_,
                                    onFocus: ev,
                                    onChange: ej,
                                    placeholder: M.intl.string(M.t.KPop4u),
                                    leading: {
                                        type: "emoji",
                                        button: (0, r.jsx)(P.A, {
                                            customStatusEmoji: $,
                                            setCustomStatusEmoji: ee,
                                            selectedDefaultStatus: et || ep ? null : er,
                                            defaultStatusVariant: q,
                                        }),
                                    },
                                    trailing:
                                        (null == G && null == er) || es
                                            ? es
                                                ? {
                                                      icon: h.d4D,
                                                      onClick: eb,
                                                      "aria-label": M.intl.string(M.t.R3BPHx),
                                                      disabled: 0 === J.length,
                                                  }
                                                : void 0
                                            : {
                                                  icon: h.XHJ,
                                                  onClick: eO,
                                                  "aria-label": M.intl.string(M.t.S90Fub),
                                              },
                                }),
                                (0, r.jsx)(h.hU, {
                                    variant: "secondary",
                                    icon: S.k,
                                    onClick: ey,
                                    "aria-label": M.intl.string(M.t["5UAi5+"]),
                                }),
                            ],
                        }),
                        ec &&
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                className: R.inputHint,
                                color: "text-danger",
                                children: M.intl.string(M.t["s/oq0d"]),
                            }),
                    ],
                }),
            }),
            (0, r.jsxs)(h.Ttm, {
                fade: !0,
                role: "group",
                className: a()(k.groupLabel, R.group, R.scroller),
                children: [
                    (0, r.jsx)(Z.d, { guildId: B.guild_id }),
                    el &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)("div", {
                                    className: R.subtitle,
                                    children: [
                                        (0, r.jsx)(h.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: M.intl.string(M.t.k8fFjo),
                                        }),
                                        (0, r.jsx)(h.r7p, { size: "xxs" }),
                                    ],
                                }),
                                W.map((e, t) => ex(e, t, "favorite")),
                            ],
                        }),
                    z.length > 0 &&
                        el &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    className: R.separator,
                                }),
                                (0, r.jsxs)("div", {
                                    className: R.subtitle,
                                    children: [
                                        (0, r.jsx)(h.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: M.intl.string(M.t["+9QSnp"]),
                                        }),
                                        (0, r.jsx)(h.T39, { size: "xxs" }),
                                    ],
                                }),
                            ],
                        }),
                    z.map((e, t) => ex(e, t, "recent")),
                ],
            }),
        ],
    });
}
