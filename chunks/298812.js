n.d(t, { Z: () => M }), n(388685);
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
    v = n(471445),
    p = n(592125),
    j = n(324067),
    N = n(699516),
    S = n(9156),
    f = n(594174),
    b = n(823379),
    O = n(621600),
    E = n(423589),
    C = n(221259),
    Z = n(113449),
    _ = n(686660),
    L = n(569658),
    y = n(981631),
    T = n(388032),
    P = n(960359);
let M = s.forwardRef(function (e, t) {
    let { guildId: n } = e,
        [l, r] = s.useState(null),
        o = (0, a.Wu)([p.Z, S.ZP], () =>
            (0, E.OD)(S.ZP.getChannelOverrides(n), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            })
                .map((e) => p.Z.getChannel(e))
                .filter(b.lm),
        ),
        d = (0, a.e7)([j.Z], () => j.Z.getCategories(n)),
        u = o.map((e, t) =>
            (0, i.jsxs)(
                "div",
                {
                    className: P.channelRow,
                    children: [
                        (0, i.jsx)(
                            w,
                            {
                                channel: e,
                                categories: d,
                                autoFocus: l === e.id,
                            },
                            e.id,
                        ),
                        t < o.length - 1 && (0, i.jsx)("div", { className: P.separator }),
                    ],
                },
                e.id,
            ),
        );
    return (0, i.jsxs)("div", {
        ref: t,
        children: [
            (0, i.jsx)(L.Z, {
                guildId: n,
                onSelected: (e) => {
                    if (null != o.find((t) => t.id === e)) return;
                    let t = p.Z.getChannel(e);
                    null != t &&
                        (h.Z.updateChannelOverrideSettings(
                            n,
                            e,
                            {
                                muted: !1,
                                message_notifications: S.ZP.resolvedMessageNotifications(t),
                                flags: (0, Z.pq)(
                                    S.ZP.getChannelIdFlags(t.guild_id, t.id),
                                    S.ZP.resolveUnreadSetting(t),
                                ),
                            },
                            O.ZB.OverrideCreated,
                        ),
                        r(e));
                },
            }),
            u.length > 0 &&
                (0, i.jsxs)("div", {
                    className: P.table,
                    children: [
                        (0, i.jsxs)("div", {
                            className: P.row,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: P.rowName,
                                    children: T.intl.string(T.t.uShwWl),
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: P.rowOption,
                                    children: T.intl.string(T.t.hZrr6u),
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: P.rowOption,
                                    children: T.intl.string(T.t.y59NJi),
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: P.rowOption,
                                    children: T.intl.string(T.t["pGn/bG"]),
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: P.rowOption,
                                    children: T.intl.string(T.t["32yow8"]),
                                }),
                            ],
                        }),
                        u.length > 0 &&
                            (0, i.jsx)("div", {
                                className: P.channels,
                                children: u,
                            }),
                    ],
                }),
        ],
    });
});
function w(e) {
    let { channel: t, categories: n, autoFocus: l } = e,
        h = (0, c.dQu)(o.Z.unsafe_rawColors.GREEN_360).hex(),
        j = (0, a.e7)([p.Z], () => p.Z.getChannel(null == t ? void 0 : t.parent_id)),
        S = (0, C.ZA)(t),
        b = s.useRef(null),
        [O, E] = s.useState(!1);
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
    let Z = T.intl.string(T.t.uIzfCA),
        L = (0, v.KS)(t);
    t.type === y.d4z.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id
        ? (Z = T.intl.formatToPlainString(T.t["2KzH8/"], { num: null != n[t.id] ? n[t.id].length : 0 }))
        : null != j && (Z = T.intl.formatToPlainString(T.t.L1zJgY, { categoryName: (0, m.F6)(j, f.default, N.Z) }));
    let M = O ? _.s8.CUSTOM : S.preset;
    return (0, i.jsx)("div", {
        ref: b,
        children: (0, i.jsxs)("div", {
            className: r()(P.row, P.channel),
            children: [
                (0, i.jsxs)("div", {
                    className: r()(P.rowName, P.modColor),
                    children: [
                        null != L
                            ? (0, i.jsx)(L, {
                                  size: "custom",
                                  color: "currentColor",
                                  height: 20,
                                  width: 20,
                                  className: P.icon,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: "text-md/semibold",
                                    className: P.modColor,
                                    children: (0, m.F6)(t, f.default, N.Z),
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/medium",
                                    className: P.modColor,
                                    children: Z,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: P.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.$q, {
                            color: h,
                            shape: d.zV.ROUND,
                            type: d.M0.INVERTED,
                            value: M === _.s8.ALL_MESSAGES,
                            onChange: () => ((0, C._m)(t.guild_id, t.id, _.s8.ALL_MESSAGES), E(!1)),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: P.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.$q, {
                            color: h,
                            shape: d.zV.ROUND,
                            type: d.M0.INVERTED,
                            value: M === _.s8.MENTIONS,
                            onChange: () => ((0, C._m)(t.guild_id, t.id, _.s8.MENTIONS), E(!1)),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: P.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.$q, {
                            color: h,
                            shape: d.zV.ROUND,
                            type: d.M0.INVERTED,
                            value: M === _.s8.NOTHING,
                            onChange: () => ((0, C._m)(t.guild_id, t.id, _.s8.NOTHING), E(!1)),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: P.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.$q, {
                            onClick: (e) => {
                                (0, u.vq)(e, () =>
                                    (0, i.jsx)(c.v2r, {
                                        navId: "ChannelNotificationCustomSettingsItems",
                                        "aria-label": T.intl.string(T.t.kMdneX),
                                        onClose: () => {},
                                        onSelect: () => {},
                                        children: (0, x.T5)(t, () => E(!1)),
                                    }),
                                );
                            },
                            color: h,
                            shape: d.zV.ROUND,
                            type: d.M0.INVERTED,
                            value: M === _.s8.CUSTOM,
                            onChange: () => E(!0),
                        }),
                    }),
                }),
                (0, i.jsx)(g.Z, {
                    onClick: () => (0, C.JK)(t.guild_id, t.id),
                    className: P.removeButton,
                }),
            ],
        }),
    });
}
