n.d(t, { A: () => M }), n(896048);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    d = n(397927),
    o = n(442433),
    c = n(832712),
    u = n(414079),
    g = n(47167),
    h = n(661504),
    m = n(713654),
    x = n(734057),
    j = n(769765),
    p = n(994500),
    b = n(543465),
    N = n(287809),
    A = n(403362),
    v = n(477427),
    f = n(769591),
    S = n(887560),
    O = n(393432),
    _ = n(24873),
    E = n(416850),
    y = n(652215),
    G = n(985018),
    C = n(11448);
let M = l.forwardRef(function (e, t) {
    let { guildId: n } = e,
        [s, r] = l.useState(null),
        o = (0, a.yK)([x.A, b.Ay], () =>
            (0, f.ct)(b.Ay.getChannelOverrides(n), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            })
                .map((e) => x.A.getChannel(e))
                .filter(A.Vq),
        ),
        u = (0, a.bG)([j.A], () => j.A.getCategories(n)),
        g = o.map((e, t) =>
            (0, i.jsxs)(
                "div",
                {
                    className: C.WG,
                    children: [
                        (0, i.jsx)(
                            L,
                            {
                                channel: e,
                                categories: u,
                                autoFocus: s === e.id,
                            },
                            e.id,
                        ),
                        t < o.length - 1 && (0, i.jsx)("div", { className: C.me }),
                    ],
                },
                e.id,
            ),
        );
    return (0, i.jsxs)("div", {
        ref: t,
        children: [
            (0, i.jsx)(E.A, {
                guildId: n,
                onSelected: (e) => {
                    if (null != o.find((t) => t.id === e)) return;
                    let t = x.A.getChannel(e);
                    null != t &&
                        (c.A.updateChannelOverrideSettings(
                            n,
                            e,
                            {
                                muted: !1,
                                message_notifications: b.Ay.resolvedMessageNotifications(t),
                                flags: (0, O.mD)(
                                    b.Ay.getChannelIdFlags(t.guild_id, t.id),
                                    b.Ay.resolveUnreadSetting(t),
                                ),
                            },
                            v.fd.OverrideCreated,
                        ),
                        r(e));
                },
            }),
            g.length > 0 &&
                (0, i.jsxs)("div", {
                    className: C.tp,
                    children: [
                        (0, i.jsxs)("div", {
                            className: C.nM,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: C._k,
                                    children: G.intl.string(G.t.uShwWv),
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: C.km,
                                    children: G.intl.string(G.t.hZrr6k),
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: C.km,
                                    children: G.intl.string(G.t.y59NJm),
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: C.km,
                                    children: G.intl.string(G.t["pGn/bJ"]),
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: C.km,
                                    children: G.intl.string(G.t["32yow9"]),
                                }),
                            ],
                        }),
                        g.length > 0 &&
                            (0, i.jsx)("div", {
                                className: C.BM,
                                children: g,
                            }),
                    ],
                }),
        ],
    });
});
function L(e) {
    let { channel: t, categories: n, autoFocus: s } = e,
        c = (0, a.bG)([x.A], () => x.A.getChannel(null == t ? void 0 : t.parent_id)),
        j = (0, S.bH)(t),
        b = l.useRef(null),
        A = l.useRef(null),
        [v, f] = l.useState(!1);
    if (
        (l.useEffect(() => {
            if (s) {
                var e;
                null == (e = b.current) || e.scrollIntoView({ behavior: "smooth" });
            }
        }, []),
        null == t)
    )
        return null;
    let O = G.intl.string(G.t.uIzfCE),
        E = (0, m.gU)(t);
    t.type === y.rbe.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id
        ? (O = G.intl.formatToPlainString(G.t["2KzH89"], { num: null != n[t.id] ? n[t.id].length : 0 }))
        : null != c && (O = G.intl.formatToPlainString(G.t.L1zJgb, { categoryName: (0, g.m1)(c, N.default, p.A) }));
    let M = v ? _.N9.CUSTOM : j.preset;
    return (0, i.jsx)("div", {
        ref: b,
        children: (0, i.jsxs)("div", {
            className: r()(C.nM, C.Ix),
            children: [
                (0, i.jsxs)("div", {
                    className: r()(C._k, C.cU),
                    children: [
                        null != E
                            ? (0, i.jsx)(E, {
                                  size: "custom",
                                  color: "currentColor",
                                  height: 20,
                                  width: 20,
                                  className: C.Kk,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    className: C.cU,
                                    children: (0, g.m1)(t, N.default, p.A),
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/medium",
                                    className: C.cU,
                                    children: O,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: C.km,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.Checkbox, {
                            checked: M === _.N9.ALL_MESSAGES,
                            label: "",
                            onChange: () => {
                                (0, S.gN)(t.guild_id, t.id, _.N9.ALL_MESSAGES), f(!1);
                            },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: C.km,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.Checkbox, {
                            checked: M === _.N9.MENTIONS,
                            label: "",
                            onChange: () => {
                                (0, S.gN)(t.guild_id, t.id, _.N9.MENTIONS), f(!1);
                            },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: C.km,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.Checkbox, {
                            checked: M === _.N9.NOTHING,
                            label: "",
                            onChange: () => {
                                (0, S.gN)(t.guild_id, t.id, _.N9.NOTHING), f(!1);
                            },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: C.km,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)("span", {
                            ref: A,
                            style: { display: "inline-flex" },
                            children: (0, i.jsx)(d.Checkbox, {
                                checked: M === _.N9.CUSTOM,
                                label: "",
                                onChange: () => {
                                    f(!0);
                                    let e = A.current;
                                    null != e &&
                                        (0, o.jA)(
                                            {
                                                stopPropagation: () => {},
                                                preventDefault: () => {},
                                                currentTarget: e,
                                                target: e,
                                            },
                                            () =>
                                                (0, i.jsx)(d.W1t, {
                                                    navId: "ChannelNotificationCustomSettingsItems",
                                                    "aria-label": G.intl.string(G.t.kMdneQ),
                                                    onClose: () => {},
                                                    onSelect: () => {},
                                                    children: (0, h.d_)(t, () => f(!1)),
                                                }),
                                        );
                                },
                            }),
                        }),
                    }),
                }),
                (0, i.jsx)(u.A, {
                    onClick: () => (0, S.Au)(t.guild_id, t.id),
                    className: C.DT,
                }),
            ],
        }),
    });
}
