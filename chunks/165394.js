n.d(t, { default: () => O });
var l = n(477900),
    i = n(582128),
    s = n(435558),
    a = n.n(s),
    r = n(855986),
    o = n(189213),
    c = n(123292),
    d = n(331322),
    u = n(95477),
    m = n(404778),
    h = n(452027),
    j = n(281595),
    g = n(695366),
    x = n(834730),
    p = n(508595),
    v = n(57222),
    f = n(808728),
    C = n(317525),
    I = n(957545),
    b = n(107795),
    E = n(655943),
    k = n(265872),
    S = n(565645),
    A = n(375499),
    N = n(920134),
    y = n(503698),
    P = n.n(y),
    R = n(414079),
    T = n(747703);
function w(e) {
    let { hasSetEmoji: t, onClick: n, children: s, className: a, buttonClassName: r } = e,
        [o, c] = i.useState(!1),
        d = i.useCallback(() => {
            (n(), c(!1));
        }, [n, c]);
    return (0, l.jsxs)("div", {
        className: P()(T.k, a),
        onMouseEnter: function () {
            t ? c(!0) : c(!1);
        },
        onMouseLeave: function () {
            c(!1);
        },
        children: [s, t && o ? (0, l.jsx)(R.A, { onClick: d, className: P()(T.D, r) }) : null],
    });
}
var B = n(307731);
function M(e) {
    let { className: t, emojiClassName: n, emoji: s, setEmoji: a, channel: r } = e,
        o = i.useRef(null),
        c =
            null == s || null == s.name
                ? null
                : () => (0, l.jsx)(S.A, { className: n, animated: s.animated ?? !1, emojiId: s.id, emojiName: s.name });
    return (0, l.jsx)(w, {
        hasSetEmoji: null != s && null != s.name,
        onClick: function () {
            a(null);
        },
        children: (0, l.jsx)(k.Y, {
            targetElementRef: o,
            position: "bottom",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(N.A, {
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        null != n &&
                            (null == n.id
                                ? a({ name: n.optionallyDiverseSequence ?? "" })
                                : a({ id: n.id, name: n.originalName ?? n.name, animated: n.animated }),
                            l && t());
                    },
                    pickerIntention: B.EmojiIntention.COMMUNITY_CONTENT,
                    channel: r,
                });
            },
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, l.jsx)(A.A, { ...e, ref: o, tabIndex: 0, active: i, className: t, renderButtonContents: c });
            },
        }),
    });
}
n(539916);
var D = n(792996),
    L = n(108148);
function O(e) {
    let { transitionState: t, onClose: n, onSave: s, onDelete: g, option: x, guild: C, prompt: I, index: k } = e,
        S = (0, r.bG)([f.A], () => f.A.getDefaultChannel(C.id)),
        [A, N] = i.useState(() => x?.emoji ?? null),
        [y, P] = i.useState(() => x?.title ?? ""),
        [R, T] = i.useState(() => x?.description ?? ""),
        [w, B] = i.useState(() => new Set(x?.channelIds ?? [])),
        [O, F] = i.useState(() => new Set(x?.roleIds ?? [])),
        [G, J] = i.useState({}),
        U = i.useRef(null);
    i.useLayoutEffect(() => U.current?.focus(), []);
    let Y = i.useCallback(() => {
            var e, t, l, i;
            let r,
                o,
                c = {
                    id: x?.id ?? `${Date.now()}`,
                    title: y,
                    description: R,
                    channelIds: Array.from(w).sort(),
                    roleIds: Array.from(O).sort(),
                    emoji: null == A ? void 0 : A,
                },
                d =
                    ((e = C),
                    (t = E.A.editedOnboardingPrompts),
                    (l = I),
                    (r = {}),
                    (i = c).title.length <= 0 && (r.title = D.intl.string(D.t.p3PKzA)),
                    null != (o = (0, b.fO)(e, t, l, i)) && (r.roles = o),
                    r);
            (J(d), a().isEmpty(d) && (s(c), n()));
        }, [w, R, A, C, n, s, x?.id, I, O, y]),
        _ = i.useMemo(
            () => [
                { text: D.intl.string(D.t["ETE/oC"]), onClick: n, variant: "secondary" },
                { text: D.intl.string(D.t["R3BPH+"]), onClick: Y, variant: "primary" },
            ],
            [Y, n],
        );
    return (0, l.jsx)(o.a, {
        title: D.intl.formatToPlainString(D.t.yjS3zs, { index: k + 1 }),
        subtitle: null != I.title && I.title.length > 0 ? I.title : D.intl.string(D.t.vY91C9),
        transitionState: t,
        onClose: n,
        actions: _,
        actionBarInput: (0, l.jsx)(c.Q, {
            text: D.intl.string(D.t.N86XcP),
            onClick: function () {
                (g(), n());
            },
            variant: "critical",
        }),
        children: (0, l.jsxs)("div", {
            className: L.kL,
            children: [
                (0, l.jsxs)(d.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(u.k, {
                            label: D.intl.string(D.t.VWdcBp),
                            required: !0,
                            inputRef: U,
                            placeholder: D.intl.string(D.t.EHe6gZ),
                            value: y,
                            onChange: (e) => P(e),
                            maxLength: 50,
                            autoFocus: !0,
                            error: G.title,
                        }),
                        (0, l.jsx)(u.k, {
                            placeholder: D.intl.string(D.t.mIjgJK),
                            value: R,
                            onChange: (e) => T(e),
                            maxLength: 100,
                        }),
                    ],
                }),
                (0, l.jsx)(m.c, {}),
                (0, l.jsxs)(h.D, {
                    label: D.intl.string(D.t.TtIbPA),
                    children: [
                        (0, l.jsxs)(d.B, {
                            gap: 8,
                            children: [
                                (0, l.jsx)(p.A, {
                                    guildId: C.id,
                                    selectedChannelIds: w,
                                    placeholder: D.intl.string(D.t.vephiL),
                                    onChange: B,
                                    helperText: D.intl.string(D.t.SoT6we),
                                }),
                                (0, l.jsx)(v.A, {
                                    guildId: C.id,
                                    selectedRoleIds: O,
                                    disableEveryoneRole: !0,
                                    placeholder: D.intl.string(D.t.aFO1I6),
                                    onChange: F,
                                    helperText: D.intl.string(D.t.Mbvpv8),
                                    selectableRoleFilter: (e) => !e.managed,
                                }),
                            ],
                        }),
                        null == G.roles ? null : (0, l.jsx)(j.U, { error: G.roles }),
                        (0, l.jsx)(z, { guild: C, roleIds: O }),
                    ],
                }),
                (0, l.jsx)(m.c, {}),
                (0, l.jsx)("div", {
                    className: L.C2,
                    children: (0, l.jsx)(h.D, {
                        label: D.intl.string(D.t["4ahTBl"]),
                        description: D.intl.string(D.t.Iv9RGg),
                        children: (0, l.jsx)(M, { emoji: A, setEmoji: N, channel: S }),
                    }),
                }),
            ],
        }),
    });
}
function z(e) {
    let { guild: t, roleIds: n } = e,
        i = (0, r.bG)([C.A], () => C.A.getManyRoles(t.id, n).find(I.J));
    return null == i
        ? null
        : (0, l.jsx)("div", {
              className: L.lm,
              children: (0, l.jsxs)("div", {
                  className: L.Ux,
                  children: [
                      (0, l.jsx)(g.CircleErrorIcon, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: L.EP,
                      }),
                      (0, l.jsx)(x.E, {
                          variant: "body-sm/normal",
                          children: D.intl.format(D.t["5zPJEZ"], { permissions: (0, I.P)(t, i).join(", ") }),
                      }),
                  ],
              }),
          });
}
