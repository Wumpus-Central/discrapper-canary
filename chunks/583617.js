n.d(t, { default: () => O });
var l = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(189213),
    o = n(452027),
    c = n(17928),
    d = n(123292),
    u = n(331322),
    m = n(292666),
    h = n(404778),
    j = n(511274),
    x = n(695366),
    g = n(834730),
    p = n(508595),
    v = n(57222),
    C = n(808728),
    f = n(317525),
    I = n(957545),
    k = n(107795),
    E = n(655943),
    b = n(922016),
    S = n(565645),
    A = n(375499),
    N = n(267889),
    y = n(503698),
    P = n.n(y),
    _ = n(414079),
    R = n(288446);
function T(e) {
    let { hasSetEmoji: t, onClick: n, children: s, className: a, buttonClassName: r } = e,
        [o, c] = i.useState(!1),
        d = i.useCallback(() => {
            n(), c(!1);
        }, [n, c]);
    return (0, l.jsxs)("div", {
        className: P()(R.k, a),
        onMouseEnter: () => {
            t ? c(!0) : c(!1);
        },
        onMouseLeave: () => {
            c(!1);
        },
        children: [s, t && o ? (0, l.jsx)(_.A, { onClick: d, className: P()(R.D, r) }) : null],
    });
}
var M = n(307731);
function B(e) {
    let { className: t, emojiClassName: n, emoji: s, setEmoji: a, channel: r } = e,
        o = i.useRef(null),
        c =
            null == s || null == s.name
                ? null
                : () => (0, l.jsx)(S.A, { className: n, animated: s.animated ?? !1, emojiId: s.id, emojiName: s.name });
    return (0, l.jsx)(T, {
        hasSetEmoji: null != s && null != s.name,
        onClick: () => {
            a(null);
        },
        children: (0, l.jsx)(b.Y, {
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
                    pickerIntention: M.EmojiIntention.COMMUNITY_CONTENT,
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
var w = n(539916),
    D = n(985018),
    L = n(588383);
function O(e) {
    let { transitionState: t, onClose: n, onSave: s, onDelete: x, option: g, guild: f, prompt: I, index: b } = e,
        S = (0, c.bG)([C.Ay], () => C.Ay.getDefaultChannel(f.id)),
        [A, N] = i.useState(() => g?.emoji ?? null),
        [y, P] = i.useState(() => g?.title ?? ""),
        [_, R] = i.useState(() => g?.description ?? ""),
        [T, M] = i.useState(() => new Set(g?.channelIds ?? [])),
        [O, Q] = i.useState(() => new Set(g?.roleIds ?? [])),
        [U, Y] = i.useState({}),
        F = i.useRef(null);
    i.useLayoutEffect(() => F.current?.focus(), []);
    let G = i.useCallback(() => {
            var e, t, l, i;
            let r,
                o,
                c = {
                    id: g?.id ?? `${Date.now()}`,
                    title: y,
                    description: _,
                    channelIds: Array.from(T).sort(),
                    roleIds: Array.from(O).sort(),
                    emoji: null == A ? void 0 : A,
                },
                d =
                    ((e = f),
                    (t = E.A.editedOnboardingPrompts),
                    (l = I),
                    (r = {}),
                    (i = c).title.length <= 0 && (r.title = D.intl.string(D.t.p3PKzA)),
                    null != (o = (0, k.fO)(e, t, l, i)) && (r.roles = o),
                    r);
            Y(d), a().isEmpty(d) && (s(c), n());
        }, [T, _, A, f, n, s, g?.id, I, O, y]),
        J = i.useMemo(
            () => [
                { text: D.intl.string(D.t["ETE/oC"]), onClick: n, variant: "secondary" },
                { text: D.intl.string(D.t["R3BPH+"]), onClick: G, variant: "primary" },
            ],
            [G, n],
        );
    return (0, l.jsx)(r.Modal, {
        title: D.intl.formatToPlainString(D.t.yjS3zs, { index: b + 1 }),
        subtitle: null != I.title && I.title.length > 0 ? I.title : D.intl.string(D.t.vY91C9),
        transitionState: t,
        onClose: n,
        actions: J,
        actionBarInput: (0, l.jsx)(d.Q, {
            text: D.intl.string(D.t.N86XcP),
            onClick: () => {
                x(), n();
            },
            variant: "critical",
        }),
        children: (0, l.jsxs)("div", {
            className: L.kL,
            children: [
                (0, l.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(m.k, {
                            label: D.intl.string(D.t.VWdcBp),
                            required: !0,
                            inputRef: F,
                            placeholder: D.intl.string(D.t.EHe6gZ),
                            value: y,
                            onChange: (e) => P(e),
                            maxLength: w.Q_,
                            autoFocus: !0,
                            error: U.title,
                        }),
                        (0, l.jsx)(m.k, {
                            placeholder: D.intl.string(D.t.mIjgJK),
                            value: _,
                            onChange: (e) => R(e),
                            maxLength: w.QY,
                        }),
                    ],
                }),
                (0, l.jsx)(h.c, {}),
                (0, l.jsxs)(o.D, {
                    label: D.intl.string(D.t.TtIbPA),
                    children: [
                        (0, l.jsxs)(u.B, {
                            gap: 8,
                            children: [
                                (0, l.jsx)(p.A, {
                                    guildId: f.id,
                                    selectedChannelIds: T,
                                    placeholder: D.intl.string(D.t.vephiL),
                                    onChange: M,
                                    helperText: D.intl.string(D.t.SoT6we),
                                }),
                                (0, l.jsx)(v.A, {
                                    guildId: f.id,
                                    selectedRoleIds: O,
                                    disableEveryoneRole: !0,
                                    placeholder: D.intl.string(D.t.aFO1I6),
                                    onChange: Q,
                                    helperText: D.intl.string(D.t.Mbvpv8),
                                    selectableRoleFilter: (e) => !e.managed,
                                }),
                            ],
                        }),
                        null == U.roles ? null : (0, l.jsx)(j.U, { error: U.roles }),
                        (0, l.jsx)(z, { guild: f, roleIds: O }),
                    ],
                }),
                (0, l.jsx)(h.c, {}),
                (0, l.jsx)("div", {
                    className: L.C2,
                    children: (0, l.jsx)(o.D, {
                        label: D.intl.string(D.t["4ahTBl"]),
                        description: D.intl.string(D.t.Iv9RGg),
                        children: (0, l.jsx)(B, { emoji: A, setEmoji: N, channel: S }),
                    }),
                }),
            ],
        }),
    });
}
function z(e) {
    let { guild: t, roleIds: n } = e,
        i = (0, c.bG)([f.A], () => f.A.getManyRoles(t.id, n).find(I.J));
    return null == i
        ? null
        : (0, l.jsx)("div", {
              className: L.lm,
              children: (0, l.jsxs)("div", {
                  className: L.Ux,
                  children: [
                      (0, l.jsx)(x.E, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: L.EP,
                      }),
                      (0, l.jsx)(g.E, {
                          variant: "text-sm/normal",
                          children: D.intl.format(D.t["5zPJEZ"], { permissions: (0, I.P)(t, i).join(", ") }),
                      }),
                  ],
              }),
          });
}
