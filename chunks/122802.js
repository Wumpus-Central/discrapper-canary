n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    d = n(834730),
    o = n(150934),
    c = n(861672),
    u = n(442433),
    h = n(832712),
    g = n(414079),
    m = n(47167),
    x = n(661504),
    A = n(713654),
    N = n(734057),
    j = n(769765),
    S = n(994500),
    p = n(543465),
    v = n(287809),
    b = n(403362),
    E = n(477427),
    f = n(769591),
    _ = n(887560),
    C = n(393432),
    G = n(24873),
    M = n(416850),
    y = n(652215),
    L = n(985018),
    O = n(682545);
let I = s.forwardRef(function (e, t) {
    let { guildId: n } = e,
        [l, a] = s.useState(null),
        o = (0, r.yK)([N.A, p.Ay], () =>
            (0, f.ct)(p.Ay.getChannelOverrides(n), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            })
                .map((e) => N.A.getChannel(e))
                .filter(b.Vq),
        ),
        c = (0, r.bG)([j.A], () => j.A.getCategories(n)),
        u = o.map((e, t) =>
            (0, i.jsxs)(
                "div",
                {
                    className: O.WG,
                    children: [
                        (0, i.jsx)(T, { channel: e, categories: c, autoFocus: l === e.id }, e.id),
                        t < o.length - 1 && (0, i.jsx)("div", { className: O.me }),
                    ],
                },
                e.id,
            ),
        );
    return (0, i.jsxs)("div", {
        ref: t,
        children: [
            (0, i.jsx)(M.A, {
                guildId: n,
                onSelected: (e) => {
                    if (null != o.find((t) => t.id === e)) return;
                    let t = N.A.getChannel(e);
                    null != t &&
                        (h.A.updateChannelOverrideSettings(
                            n,
                            e,
                            {
                                muted: !1,
                                message_notifications: p.Ay.resolvedMessageNotifications(t),
                                flags: (0, C.mD)(
                                    p.Ay.getChannelIdFlags(t.guild_id, t.id),
                                    p.Ay.resolveUnreadSetting(t),
                                ),
                            },
                            E.fd.OverrideCreated,
                        ),
                        a(e));
                },
            }),
            u.length > 0 &&
                (0, i.jsxs)("div", {
                    className: O.tp,
                    children: [
                        (0, i.jsxs)("div", {
                            className: O.nM,
                            children: [
                                (0, i.jsx)(d.E, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: O._k,
                                    children: L.intl.string(L.t.uShwWv),
                                }),
                                (0, i.jsx)(d.E, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: O.km,
                                    children: L.intl.string(L.t.hZrr6k),
                                }),
                                (0, i.jsx)(d.E, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: O.km,
                                    children: L.intl.string(L.t.y59NJm),
                                }),
                                (0, i.jsx)(d.E, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: O.km,
                                    children: L.intl.string(L.t["pGn/bJ"]),
                                }),
                                (0, i.jsx)(d.E, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: O.km,
                                    children: L.intl.string(L.t["32yow9"]),
                                }),
                            ],
                        }),
                        u.length > 0 && (0, i.jsx)("div", { className: O.BM, children: u }),
                    ],
                }),
        ],
    });
});
function T(e) {
    let { channel: t, categories: n, autoFocus: l } = e,
        h = (0, r.bG)([N.A], () => N.A.getChannel(t?.parent_id)),
        j = (0, _.bH)(t),
        p = s.useRef(null),
        b = s.useRef(null),
        [E, f] = s.useState(!1);
    if (
        (s.useEffect(() => {
            l && p.current?.scrollIntoView({ behavior: "smooth" });
        }, []),
        null == t)
    )
        return null;
    let C = L.intl.string(L.t.uIzfCE),
        M = (0, A.gU)(t);
    t.type === y.rbe.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id
        ? (C = L.intl.formatToPlainString(L.t["2KzH89"], { num: null != n[t.id] ? n[t.id].length : 0 }))
        : null != h && (C = L.intl.formatToPlainString(L.t.L1zJgb, { categoryName: (0, m.m1)(h, v.default, S.A) }));
    let I = E ? G.N9.CUSTOM : j.preset;
    return (0, i.jsx)("div", {
        ref: p,
        children: (0, i.jsxs)("div", {
            className: a()(O.nM, O.Ix),
            children: [
                (0, i.jsxs)("div", {
                    className: a()(O._k, O.cU),
                    children: [
                        null != M
                            ? (0, i.jsx)(M, {
                                  size: "custom",
                                  color: "currentColor",
                                  height: 20,
                                  width: 20,
                                  className: O.Kk,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(d.E, {
                                    variant: "text-md/semibold",
                                    className: O.cU,
                                    children: (0, m.m1)(t, v.default, S.A),
                                }),
                                (0, i.jsx)(d.E, { variant: "text-xs/medium", className: O.cU, children: C }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: O.km,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(o.S, {
                            checked: I === G.N9.ALL_MESSAGES,
                            label: "",
                            onChange: () => {
                                (0, _.gN)(t.guild_id, t.id, G.N9.ALL_MESSAGES), f(!1);
                            },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: O.km,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(o.S, {
                            checked: I === G.N9.MENTIONS,
                            label: "",
                            onChange: () => {
                                (0, _.gN)(t.guild_id, t.id, G.N9.MENTIONS), f(!1);
                            },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: O.km,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(o.S, {
                            checked: I === G.N9.NOTHING,
                            label: "",
                            onChange: () => {
                                (0, _.gN)(t.guild_id, t.id, G.N9.NOTHING), f(!1);
                            },
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: O.km,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)("span", {
                            ref: b,
                            style: { display: "inline-flex" },
                            children: (0, i.jsx)(o.S, {
                                checked: I === G.N9.CUSTOM,
                                label: "",
                                onChange: () => {
                                    f(!0);
                                    let e = b.current;
                                    null != e &&
                                        (0, u.jA)(
                                            {
                                                stopPropagation: () => {},
                                                preventDefault: () => {},
                                                currentTarget: e,
                                                target: e,
                                            },
                                            () =>
                                                (0, i.jsx)(c.W, {
                                                    "data-menu-migrated-auto": !0,
                                                    navId: "ChannelNotificationCustomSettingsItems",
                                                    "aria-label": L.intl.string(L.t.kMdneQ),
                                                    onClose: () => {},
                                                    onSelect: () => {},
                                                    children: (0, x.d_)(t, () => f(!1)),
                                                }),
                                        );
                                },
                            }),
                        }),
                    }),
                }),
                (0, i.jsx)(g.A, { onClick: () => (0, _.Au)(t.guild_id, t.id), className: O.DT }),
            ],
        }),
    });
}
