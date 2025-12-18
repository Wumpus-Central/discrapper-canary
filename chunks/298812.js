n.d(t, { Z: () => A }), n(388685);
var i = n(54381),
    s = n(473749),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    d = n(239091),
    c = n(87051),
    u = n(225433),
    h = n(933557),
    g = n(775666),
    m = n(471445),
    x = n(592125),
    p = n(324067),
    j = n(699516),
    f = n(9156),
    v = n(594174),
    b = n(823379),
    N = n(621600),
    S = n(423589),
    E = n(221259),
    C = n(113449),
    O = n(686660),
    Z = n(569658),
    L = n(981631),
    _ = n(388032),
    y = n(986955);
let A = s.forwardRef(function (e, t) {
    let { guildId: n } = e,
        [l, r] = s.useState(null),
        d = (0, a.Wu)([x.Z, f.ZP], () =>
            (0, S.OD)(f.ZP.getChannelOverrides(n), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            })
                .map((e) => x.Z.getChannel(e))
                .filter(b.lm),
        ),
        u = (0, a.e7)([p.Z], () => p.Z.getCategories(n)),
        h = d.map((e, t) =>
            (0, i.jsxs)(
                "div",
                {
                    className: y.channelRow,
                    children: [
                        (0, i.jsx)(
                            P,
                            {
                                channel: e,
                                categories: u,
                                autoFocus: l === e.id,
                            },
                            e.id,
                        ),
                        t < d.length - 1 && (0, i.jsx)("div", { className: y.separator }),
                    ],
                },
                e.id,
            ),
        );
    return (0, i.jsxs)("div", {
        ref: t,
        children: [
            (0, i.jsx)(Z.Z, {
                guildId: n,
                onSelected: (e) => {
                    if (null != d.find((t) => t.id === e)) return;
                    let t = x.Z.getChannel(e);
                    null != t &&
                        (c.Z.updateChannelOverrideSettings(
                            n,
                            e,
                            {
                                muted: !1,
                                message_notifications: f.ZP.resolvedMessageNotifications(t),
                                flags: (0, C.pq)(
                                    f.ZP.getChannelIdFlags(t.guild_id, t.id),
                                    f.ZP.resolveUnreadSetting(t),
                                ),
                            },
                            N.ZB.OverrideCreated,
                        ),
                        r(e));
                },
            }),
            h.length > 0 &&
                (0, i.jsxs)("div", {
                    className: y.table,
                    children: [
                        (0, i.jsxs)("div", {
                            className: y.row,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: y.rowName,
                                    children: _.intl.string(_.t.uShwWv),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: y.rowOption,
                                    children: _.intl.string(_.t.hZrr6k),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: y.rowOption,
                                    children: _.intl.string(_.t.y59NJm),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: y.rowOption,
                                    children: _.intl.string(_.t["pGn/bJ"]),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: y.rowOption,
                                    children: _.intl.string(_.t["32yow9"]),
                                }),
                            ],
                        }),
                        h.length > 0 &&
                            (0, i.jsx)("div", {
                                className: y.channels,
                                children: h,
                            }),
                    ],
                }),
        ],
    });
});
function P(e) {
    let { channel: t, categories: n, autoFocus: l } = e,
        c = (0, a.e7)([x.Z], () => x.Z.getChannel(null == t ? void 0 : t.parent_id)),
        p = (0, E.ZA)(t),
        f = s.useRef(null),
        b = s.useRef(null),
        [N, S] = s.useState(!1);
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
    let C = _.intl.string(_.t.uIzfCE),
        Z = (0, m.KS)(t);
    t.type === L.d4z.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id
        ? (C = _.intl.formatToPlainString(_.t["2KzH89"], { num: null != n[t.id] ? n[t.id].length : 0 }))
        : null != c && (C = _.intl.formatToPlainString(_.t.L1zJgb, { categoryName: (0, h.F6)(c, v.default, j.Z) }));
    let A = N ? O.s8.CUSTOM : p.preset;
    return (0, i.jsx)("div", {
        ref: f,
        children: (0, i.jsxs)("div", {
            className: r()(y.row, y.channel),
            children: [
                (0, i.jsxs)("div", {
                    className: r()(y.rowName, y.modColor),
                    children: [
                        null != Z
                            ? (0, i.jsx)(Z, {
                                  size: "custom",
                                  color: "currentColor",
                                  height: 20,
                                  width: 20,
                                  className: y.icon,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    className: y.modColor,
                                    children: (0, h.F6)(t, v.default, j.Z),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    className: y.modColor,
                                    children: C,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: y.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(o.Checkbox, {
                            checked: A === O.s8.ALL_MESSAGES,
                            label: "",
                            onChange: () => {
                                (0, E._m)(t.guild_id, t.id, O.s8.ALL_MESSAGES), S(!1);
                            },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: y.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(o.Checkbox, {
                            checked: A === O.s8.MENTIONS,
                            label: "",
                            onChange: () => {
                                (0, E._m)(t.guild_id, t.id, O.s8.MENTIONS), S(!1);
                            },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: y.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(o.Checkbox, {
                            checked: A === O.s8.NOTHING,
                            label: "",
                            onChange: () => {
                                (0, E._m)(t.guild_id, t.id, O.s8.NOTHING), S(!1);
                            },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: y.rowOption,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)("span", {
                            ref: b,
                            style: { display: "inline-flex" },
                            children: (0, i.jsx)(o.Checkbox, {
                                checked: A === O.s8.CUSTOM,
                                label: "",
                                onChange: () => {
                                    S(!0);
                                    let e = b.current;
                                    null != e &&
                                        (0, d.vq)(
                                            {
                                                stopPropagation: () => {},
                                                preventDefault: () => {},
                                                currentTarget: e,
                                                target: e,
                                            },
                                            () =>
                                                (0, i.jsx)(o.v2r, {
                                                    navId: "ChannelNotificationCustomSettingsItems",
                                                    "aria-label": _.intl.string(_.t.kMdneQ),
                                                    onClose: () => {},
                                                    onSelect: () => {},
                                                    children: (0, g.T5)(t, () => S(!1)),
                                                }),
                                        );
                                },
                            }),
                        }),
                    }),
                }),
                (0, i.jsx)(u.Z, {
                    onClick: () => (0, E.JK)(t.guild_id, t.id),
                    className: y.removeButton,
                }),
            ],
        }),
    });
}
