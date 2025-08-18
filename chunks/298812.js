n.d(t, { Z: () => P }), n(388685);
var i = n(951288),
    s = n(647438),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(692547),
    d = n(481060),
    c = n(239091),
    u = n(87051),
    h = n(225433),
    g = n(933557),
    m = n(775666),
    x = n(471445),
    p = n(592125),
    v = n(324067),
    j = n(699516),
    N = n(9156),
    S = n(594174),
    f = n(823379),
    b = n(621600),
    O = n(423589),
    E = n(221259),
    C = n(113449),
    Z = n(686660),
    _ = n(569658),
    y = n(981631),
    L = n(388032),
    T = n(960359);
let P = s.forwardRef(function (e, t) {
    let { guildId: n } = e,
        [l, r] = s.useState(null),
        o = (0, a.Wu)([p.Z, N.ZP], () =>
            (0, O.OD)(N.ZP.getChannelOverrides(n), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            })
                .map((e) => p.Z.getChannel(e))
                .filter(f.lm),
        ),
        c = (0, a.e7)([v.Z], () => v.Z.getCategories(n)),
        h = o.map((e, t) =>
            (0, i.jsxs)(
                "div",
                {
                    className: T.channelRow,
                    children: [
                        (0, i.jsx)(
                            M,
                            {
                                channel: e,
                                categories: c,
                                autoFocus: l === e.id,
                            },
                            e.id,
                        ),
                        t < o.length - 1 && (0, i.jsx)("div", { className: T.separator }),
                    ],
                },
                e.id,
            ),
        );
    return (0, i.jsxs)("div", {
        ref: t,
        children: [
            (0, i.jsx)(_.Z, {
                guildId: n,
                onSelected: (e) => {
                    if (null != o.find((t) => t.id === e)) return;
                    let t = p.Z.getChannel(e);
                    null != t &&
                        (u.Z.updateChannelOverrideSettings(
                            n,
                            e,
                            {
                                muted: !1,
                                message_notifications: N.ZP.resolvedMessageNotifications(t),
                                flags: (0, C.pq)(
                                    N.ZP.getChannelIdFlags(t.guild_id, t.id),
                                    N.ZP.resolveUnreadSetting(t),
                                ),
                            },
                            b.ZB.OverrideCreated,
                        ),
                        r(e));
                },
            }),
            h.length > 0 &&
                (0, i.jsxs)("div", {
                    className: T.table,
                    children: [
                        (0, i.jsxs)("div", {
                            className: T.row,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: T.rowName,
                                    children: L.intl.string(L.t.uShwWl),
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: T.rowOption,
                                    children: L.intl.string(L.t.hZrr6u),
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: T.rowOption,
                                    children: L.intl.string(L.t.y59NJi),
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: T.rowOption,
                                    children: L.intl.string(L.t["pGn/bG"]),
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: T.rowOption,
                                    children: L.intl.string(L.t["32yow8"]),
                                }),
                            ],
                        }),
                        h.length > 0 &&
                            (0, i.jsx)("div", {
                                className: T.channels,
                                children: h,
                            }),
                    ],
                }),
        ],
    });
});
function M(e) {
    let { channel: t, categories: n, autoFocus: l } = e,
        u = (0, d.dQu)(o.Z.unsafe_rawColors.GREEN_360).hex(),
        v = (0, a.e7)([p.Z], () => p.Z.getChannel(null == t ? void 0 : t.parent_id)),
        N = (0, E.ZA)(t),
        f = s.useRef(null),
        [b, O] = s.useState(!1);
    if (
        (s.useEffect(() => {
            if (l) {
                var e;
                null == (e = f.current) || e.scrollIntoView({ behavior: "smooth" });
            }
        }, []),
        null == t)
    )
        return null;
    let C = L.intl.string(L.t.uIzfCA),
        _ = (0, x.KS)(t);
    t.type === y.d4z.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id
        ? (C = L.intl.formatToPlainString(L.t["2KzH8/"], { num: null != n[t.id] ? n[t.id].length : 0 }))
        : null != v && (C = L.intl.formatToPlainString(L.t.L1zJgY, { categoryName: (0, g.F6)(v, S.default, j.Z) }));
    let P = b ? Z.s8.CUSTOM : N.preset;
    return (0, i.jsx)("div", {
        ref: f,
        children: (0, i.jsxs)("div", {
            className: r()(T.row, T.channel),
            children: [
                (0, i.jsxs)("div", {
                    className: r()(T.rowName, T.modColor),
                    children: [
                        null != _
                            ? (0, i.jsx)(_, {
                                  size: "custom",
                                  color: "currentColor",
                                  height: 20,
                                  width: 20,
                                  className: T.icon,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    className: T.modColor,
                                    children: (0, g.F6)(t, S.default, j.Z),
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/medium",
                                    className: T.modColor,
                                    children: C,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: T.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.XZJ, {
                            color: u,
                            shape: d.XZJ.Shapes.ROUND,
                            type: d.XZJ.Types.INVERTED,
                            value: P === Z.s8.ALL_MESSAGES,
                            onChange: () => ((0, E._m)(t.guild_id, t.id, Z.s8.ALL_MESSAGES), O(!1)),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: T.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.XZJ, {
                            color: u,
                            shape: d.XZJ.Shapes.ROUND,
                            type: d.XZJ.Types.INVERTED,
                            value: P === Z.s8.MENTIONS,
                            onChange: () => ((0, E._m)(t.guild_id, t.id, Z.s8.MENTIONS), O(!1)),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: T.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.XZJ, {
                            color: u,
                            shape: d.XZJ.Shapes.ROUND,
                            type: d.XZJ.Types.INVERTED,
                            value: P === Z.s8.NOTHING,
                            onChange: () => ((0, E._m)(t.guild_id, t.id, Z.s8.NOTHING), O(!1)),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: T.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.XZJ, {
                            onClick: (e) => {
                                (0, c.vq)(e, () =>
                                    (0, i.jsx)(d.v2r, {
                                        navId: "ChannelNotificationCustomSettingsItems",
                                        "aria-label": L.intl.string(L.t.kMdneX),
                                        onClose: () => {},
                                        onSelect: () => {},
                                        children: (0, m.T5)(t, () => O(!1)),
                                    }),
                                );
                            },
                            color: u,
                            shape: d.XZJ.Shapes.ROUND,
                            type: d.XZJ.Types.INVERTED,
                            value: P === Z.s8.CUSTOM,
                            onChange: () => O(!0),
                        }),
                    }),
                }),
                (0, i.jsx)(h.Z, {
                    onClick: () => (0, E.JK)(t.guild_id, t.id),
                    className: T.removeButton,
                }),
            ],
        }),
    });
}
