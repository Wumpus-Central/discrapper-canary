n.d(t, { default: () => z });
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
    g = n(695366),
    x = n(834730),
    p = n(508595),
    v = n(57222),
    f = n(808728),
    C = n(317525),
    I = n(957545),
    b = n(107795),
    E = n(655943),
    k = n(922016),
    S = n(565645),
    A = n(375499),
    N = n(267889),
    y = n(503698),
    P = n.n(y),
    R = n(414079),
    T = n(288446);
function M(e) {
    let { hasSetEmoji: t, onClick: n, children: s, className: a, buttonClassName: r } = e,
        [o, c] = i.useState(!1),
        d = i.useCallback(() => {
            n(), c(!1);
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
var w = n(307731);
function B(e) {
    let { className: t, emojiClassName: n, emoji: s, setEmoji: a, channel: r } = e,
        o = i.useRef(null),
        c =
            null == s || null == s.name
                ? null
                : () => (0, l.jsx)(S.A, { className: n, animated: s.animated ?? !1, emojiId: s.id, emojiName: s.name });
    return (0, l.jsx)(M, {
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
                    pickerIntention: w.EmojiIntention.COMMUNITY_CONTENT,
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
var D = n(539916),
    L = n(375708),
    O = n(588383);
function z(e) {
    let { transitionState: t, onClose: n, onSave: s, onDelete: g, option: x, guild: C, prompt: I, index: k } = e,
        S = (0, c.bG)([f.Ay], () => f.Ay.getDefaultChannel(C.id)),
        [A, N] = i.useState(() => x?.emoji ?? null),
        [y, P] = i.useState(() => x?.title ?? ""),
        [R, T] = i.useState(() => x?.description ?? ""),
        [M, w] = i.useState(() => new Set(x?.channelIds ?? [])),
        [z, _] = i.useState(() => new Set(x?.roleIds ?? [])),
        [F, G] = i.useState({}),
        J = i.useRef(null);
    i.useLayoutEffect(() => J.current?.focus(), []);
    let Q = i.useCallback(() => {
            var e, t, l, i;
            let r,
                o,
                c = {
                    id: x?.id ?? `${Date.now()}`,
                    title: y,
                    description: R,
                    channelIds: Array.from(M).sort(),
                    roleIds: Array.from(z).sort(),
                    emoji: null == A ? void 0 : A,
                },
                d =
                    ((e = C),
                    (t = E.A.editedOnboardingPrompts),
                    (l = I),
                    (r = {}),
                    (i = c).title.length <= 0 && (r.title = L.intl.string(L.t.p3PKzA)),
                    null != (o = (0, b.fO)(e, t, l, i)) && (r.roles = o),
                    r);
            G(d), a().isEmpty(d) && (s(c), n());
        }, [M, R, A, C, n, s, x?.id, I, z, y]),
        U = i.useMemo(
            () => [
                { text: L.intl.string(L.t["ETE/oC"]), onClick: n, variant: "secondary" },
                { text: L.intl.string(L.t["R3BPH+"]), onClick: Q, variant: "primary" },
            ],
            [Q, n],
        );
    return (0, l.jsx)(r.Modal, {
        title: L.intl.formatToPlainString(L.t.yjS3zs, { index: k + 1 }),
        subtitle: null != I.title && I.title.length > 0 ? I.title : L.intl.string(L.t.vY91C9),
        transitionState: t,
        onClose: n,
        actions: U,
        actionBarInput: (0, l.jsx)(d.Q, {
            text: L.intl.string(L.t.N86XcP),
            onClick: function () {
                g(), n();
            },
            variant: "critical",
        }),
        children: (0, l.jsxs)("div", {
            className: O.kL,
            children: [
                (0, l.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(m.k, {
                            label: L.intl.string(L.t.VWdcBp),
                            required: !0,
                            inputRef: J,
                            placeholder: L.intl.string(L.t.EHe6gZ),
                            value: y,
                            onChange: (e) => P(e),
                            maxLength: D.Q_,
                            autoFocus: !0,
                            error: F.title,
                        }),
                        (0, l.jsx)(m.k, {
                            placeholder: L.intl.string(L.t.mIjgJK),
                            value: R,
                            onChange: (e) => T(e),
                            maxLength: D.QY,
                        }),
                    ],
                }),
                (0, l.jsx)(h.c, {}),
                (0, l.jsxs)(o.D, {
                    label: L.intl.string(L.t.TtIbPA),
                    children: [
                        (0, l.jsxs)(u.B, {
                            gap: 8,
                            children: [
                                (0, l.jsx)(p.A, {
                                    guildId: C.id,
                                    selectedChannelIds: M,
                                    placeholder: L.intl.string(L.t.vephiL),
                                    onChange: w,
                                    helperText: L.intl.string(L.t.SoT6we),
                                }),
                                (0, l.jsx)(v.A, {
                                    guildId: C.id,
                                    selectedRoleIds: z,
                                    disableEveryoneRole: !0,
                                    placeholder: L.intl.string(L.t.aFO1I6),
                                    onChange: _,
                                    helperText: L.intl.string(L.t.Mbvpv8),
                                    selectableRoleFilter: (e) => !e.managed,
                                }),
                            ],
                        }),
                        null == F.roles ? null : (0, l.jsx)(j.U, { error: F.roles }),
                        (0, l.jsx)(Y, { guild: C, roleIds: z }),
                    ],
                }),
                (0, l.jsx)(h.c, {}),
                (0, l.jsx)("div", {
                    className: O.C2,
                    children: (0, l.jsx)(o.D, {
                        label: L.intl.string(L.t["4ahTBl"]),
                        description: L.intl.string(L.t.Iv9RGg),
                        children: (0, l.jsx)(B, { emoji: A, setEmoji: N, channel: S }),
                    }),
                }),
            ],
        }),
    });
}
function Y(e) {
    let { guild: t, roleIds: n } = e,
        i = (0, c.bG)([C.A], () => C.A.getManyRoles(t.id, n).find(I.J));
    return null == i
        ? null
        : (0, l.jsx)("div", {
              className: O.lm,
              children: (0, l.jsxs)("div", {
                  className: O.Ux,
                  children: [
                      (0, l.jsx)(g.E, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: O.EP,
                      }),
                      (0, l.jsx)(x.E, {
                          variant: "text-sm/normal",
                          children: L.intl.format(L.t["5zPJEZ"], { permissions: (0, I.P)(t, i).join(", ") }),
                      }),
                  ],
              }),
          });
}
