n.d(t, { Z: () => P }), n(388685);
var i = n(951288),
    s = n(647438),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(692547),
    d = n(755721),
    c = n(481060),
    u = n(239091),
    h = n(87051),
    g = n(225433),
    m = n(933557),
    x = n(775666),
    p = n(471445),
    v = n(592125),
    j = n(324067),
    f = n(699516),
    N = n(9156),
    S = n(594174),
    b = n(823379),
    E = n(621600),
    O = n(423589),
    Z = n(221259),
    C = n(113449),
    L = n(686660),
    _ = n(569658),
    y = n(981631),
    M = n(388032),
    w = n(960359);
let P = s.forwardRef(function (e, t) {
    let { guildId: n } = e,
        [l, r] = s.useState(null),
        o = (0, a.Wu)([v.Z, N.ZP], () =>
            (0, O.OD)(N.ZP.getChannelOverrides(n), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            })
                .map((e) => v.Z.getChannel(e))
                .filter(b.lm),
        ),
        d = (0, a.e7)([j.Z], () => j.Z.getCategories(n)),
        u = o.map((e, t) =>
            (0, i.jsxs)(
                "div",
                {
                    className: w.channelRow,
                    children: [
                        (0, i.jsx)(
                            A,
                            {
                                channel: e,
                                categories: d,
                                autoFocus: l === e.id,
                            },
                            e.id,
                        ),
                        t < o.length - 1 && (0, i.jsx)("div", { className: w.separator }),
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
                    let t = v.Z.getChannel(e);
                    null != t &&
                        (h.Z.updateChannelOverrideSettings(
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
                            E.ZB.OverrideCreated,
                        ),
                        r(e));
                },
            }),
            u.length > 0 &&
                (0, i.jsxs)("div", {
                    className: w.table,
                    children: [
                        (0, i.jsxs)("div", {
                            className: w.row,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: w.rowName,
                                    children: M.intl.string(M.t.uShwWl),
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: w.rowOption,
                                    children: M.intl.string(M.t.hZrr6u),
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: w.rowOption,
                                    children: M.intl.string(M.t.y59NJi),
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: w.rowOption,
                                    children: M.intl.string(M.t["pGn/bG"]),
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: w.rowOption,
                                    children: M.intl.string(M.t["32yow8"]),
                                }),
                            ],
                        }),
                        u.length > 0 &&
                            (0, i.jsx)("div", {
                                className: w.channels,
                                children: u,
                            }),
                    ],
                }),
        ],
    });
});
function A(e) {
    let { channel: t, categories: n, autoFocus: l } = e,
        h = (0, c.dQu)(o.Z.unsafe_rawColors.GREEN_360).hex(),
        j = (0, a.e7)([v.Z], () => v.Z.getChannel(null == t ? void 0 : t.parent_id)),
        N = (0, Z.ZA)(t),
        b = s.useRef(null),
        [E, O] = s.useState(!1);
    if (
        (s.useEffect(() => {
            if (l) {
                var e;
                null == (e = b.current) || e.scrollIntoView({ behavior: "smooth" });
            }
        }, []),
        null == t)
    )
        return null;
    let C = M.intl.string(M.t.uIzfCA),
        _ = (0, p.KS)(t);
    t.type === y.d4z.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id
        ? (C = M.intl.formatToPlainString(M.t["2KzH8/"], { num: null != n[t.id] ? n[t.id].length : 0 }))
        : null != j && (C = M.intl.formatToPlainString(M.t.L1zJgY, { categoryName: (0, m.F6)(j, S.default, f.Z) }));
    let P = E ? L.s8.CUSTOM : N.preset;
    return (0, i.jsx)("div", {
        ref: b,
        children: (0, i.jsxs)("div", {
            className: r()(w.row, w.channel),
            children: [
                (0, i.jsxs)("div", {
                    className: r()(w.rowName, w.modColor),
                    children: [
                        null != _
                            ? (0, i.jsx)(_, {
                                  size: "custom",
                                  color: "currentColor",
                                  height: 20,
                                  width: 20,
                                  className: w.icon,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: "text-md/semibold",
                                    className: w.modColor,
                                    children: (0, m.F6)(t, S.default, f.Z),
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/medium",
                                    className: w.modColor,
                                    children: C,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: w.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.$q, {
                            color: h,
                            shape: d.zV.ROUND,
                            type: d.M0.INVERTED,
                            value: P === L.s8.ALL_MESSAGES,
                            onChange: () => ((0, Z._m)(t.guild_id, t.id, L.s8.ALL_MESSAGES), O(!1)),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: w.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.$q, {
                            color: h,
                            shape: d.zV.ROUND,
                            type: d.M0.INVERTED,
                            value: P === L.s8.MENTIONS,
                            onChange: () => ((0, Z._m)(t.guild_id, t.id, L.s8.MENTIONS), O(!1)),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: w.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.$q, {
                            color: h,
                            shape: d.zV.ROUND,
                            type: d.M0.INVERTED,
                            value: P === L.s8.NOTHING,
                            onChange: () => ((0, Z._m)(t.guild_id, t.id, L.s8.NOTHING), O(!1)),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: w.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.$q, {
                            onClick: (e) => {
                                (0, u.vq)(e, () =>
                                    (0, i.jsx)(c.v2r, {
                                        navId: "ChannelNotificationCustomSettingsItems",
                                        "aria-label": M.intl.string(M.t.kMdneX),
                                        onClose: () => {},
                                        onSelect: () => {},
                                        children: (0, x.T5)(t, () => O(!1)),
                                    }),
                                );
                            },
                            color: h,
                            shape: d.zV.ROUND,
                            type: d.M0.INVERTED,
                            value: P === L.s8.CUSTOM,
                            onChange: () => O(!0),
                        }),
                    }),
                }),
                (0, i.jsx)(g.Z, {
                    onClick: () => (0, Z.JK)(t.guild_id, t.id),
                    className: w.removeButton,
                }),
            ],
        }),
    });
}
