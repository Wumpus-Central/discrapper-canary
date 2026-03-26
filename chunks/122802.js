i.d(t, { A: () => y });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(311907),
    d = i(397927),
    o = i(442433),
    c = i(832712),
    u = i(414079),
    g = i(47167),
    h = i(661504),
    x = i(713654),
    m = i(734057),
    A = i(769765),
    N = i(994500),
    j = i(543465),
    S = i(287809),
    p = i(403362),
    v = i(477427),
    b = i(769591),
    f = i(887560),
    _ = i(393432),
    G = i(24873),
    E = i(416850),
    C = i(652215),
    O = i(985018),
    M = i(934721);
let y = s.forwardRef(function (e, t) {
    let { guildId: i } = e,
        [l, a] = s.useState(null),
        o = (0, r.yK)([m.A, j.Ay], () =>
            (0, b.ct)(j.Ay.getChannelOverrides(i), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            })
                .map((e) => m.A.getChannel(e))
                .filter(p.Vq),
        ),
        u = (0, r.bG)([A.A], () => A.A.getCategories(i)),
        g = o.map((e, t) =>
            (0, n.jsxs)(
                "div",
                {
                    className: M.WG,
                    children: [
                        (0, n.jsx)(L, { channel: e, categories: u, autoFocus: l === e.id }, e.id),
                        t < o.length - 1 && (0, n.jsx)("div", { className: M.me }),
                    ],
                },
                e.id,
            ),
        );
    return (0, n.jsxs)("div", {
        ref: t,
        children: [
            (0, n.jsx)(E.A, {
                guildId: i,
                onSelected: (e) => {
                    if (null != o.find((t) => t.id === e)) return;
                    let t = m.A.getChannel(e);
                    null != t &&
                        (c.A.updateChannelOverrideSettings(
                            i,
                            e,
                            {
                                muted: !1,
                                message_notifications: j.Ay.resolvedMessageNotifications(t),
                                flags: (0, _.mD)(
                                    j.Ay.getChannelIdFlags(t.guild_id, t.id),
                                    j.Ay.resolveUnreadSetting(t),
                                ),
                            },
                            v.fd.OverrideCreated,
                        ),
                        a(e));
                },
            }),
            g.length > 0 &&
                (0, n.jsxs)("div", {
                    className: M.tp,
                    children: [
                        (0, n.jsxs)("div", {
                            className: M.nM,
                            children: [
                                (0, n.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: M._k,
                                    children: O.intl.string(O.t.uShwWv),
                                }),
                                (0, n.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: M.km,
                                    children: O.intl.string(O.t.hZrr6k),
                                }),
                                (0, n.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: M.km,
                                    children: O.intl.string(O.t.y59NJm),
                                }),
                                (0, n.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: M.km,
                                    children: O.intl.string(O.t["pGn/bJ"]),
                                }),
                                (0, n.jsx)(d.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: M.km,
                                    children: O.intl.string(O.t["32yow9"]),
                                }),
                            ],
                        }),
                        g.length > 0 && (0, n.jsx)("div", { className: M.BM, children: g }),
                    ],
                }),
        ],
    });
});
function L(e) {
    let { channel: t, categories: i, autoFocus: l } = e,
        c = (0, r.bG)([m.A], () => m.A.getChannel(t?.parent_id)),
        A = (0, f.bH)(t),
        j = s.useRef(null),
        p = s.useRef(null),
        [v, b] = s.useState(!1);
    if (
        (s.useEffect(() => {
            l && j.current?.scrollIntoView({ behavior: "smooth" });
        }, []),
        null == t)
    )
        return null;
    let _ = O.intl.string(O.t.uIzfCE),
        E = (0, x.gU)(t);
    t.type === C.rbe.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id
        ? (_ = O.intl.formatToPlainString(O.t["2KzH89"], { num: null != i[t.id] ? i[t.id].length : 0 }))
        : null != c && (_ = O.intl.formatToPlainString(O.t.L1zJgb, { categoryName: (0, g.m1)(c, S.default, N.A) }));
    let y = v ? G.N9.CUSTOM : A.preset;
    return (0, n.jsx)("div", {
        ref: j,
        children: (0, n.jsxs)("div", {
            className: a()(M.nM, M.Ix),
            children: [
                (0, n.jsxs)("div", {
                    className: a()(M._k, M.cU),
                    children: [
                        null != E
                            ? (0, n.jsx)(E, {
                                  size: "custom",
                                  color: "currentColor",
                                  height: 20,
                                  width: 20,
                                  className: M.Kk,
                              })
                            : null,
                        (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    className: M.cU,
                                    children: (0, g.m1)(t, S.default, N.A),
                                }),
                                (0, n.jsx)(d.Text, { variant: "text-xs/medium", className: M.cU, children: _ }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: M.km,
                    children: (0, n.jsx)("div", {
                        children: (0, n.jsx)(d.Checkbox, {
                            checked: y === G.N9.ALL_MESSAGES,
                            label: "",
                            onChange: () => {
                                (0, f.gN)(t.guild_id, t.id, G.N9.ALL_MESSAGES), b(!1);
                            },
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: M.km,
                    children: (0, n.jsx)("div", {
                        children: (0, n.jsx)(d.Checkbox, {
                            checked: y === G.N9.MENTIONS,
                            label: "",
                            onChange: () => {
                                (0, f.gN)(t.guild_id, t.id, G.N9.MENTIONS), b(!1);
                            },
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: M.km,
                    children: (0, n.jsx)("div", {
                        children: (0, n.jsx)(d.Checkbox, {
                            checked: y === G.N9.NOTHING,
                            label: "",
                            onChange: () => {
                                (0, f.gN)(t.guild_id, t.id, G.N9.NOTHING), b(!1);
                            },
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: M.km,
                    children: (0, n.jsx)("div", {
                        children: (0, n.jsx)("span", {
                            ref: p,
                            style: { display: "inline-flex" },
                            children: (0, n.jsx)(d.Checkbox, {
                                checked: y === G.N9.CUSTOM,
                                label: "",
                                onChange: () => {
                                    b(!0);
                                    let e = p.current;
                                    null != e &&
                                        (0, o.jA)(
                                            {
                                                stopPropagation: () => {},
                                                preventDefault: () => {},
                                                currentTarget: e,
                                                target: e,
                                            },
                                            () =>
                                                (0, n.jsx)(d.W1t, {
                                                    "data-menu-migrated-auto": !0,
                                                    navId: "ChannelNotificationCustomSettingsItems",
                                                    "aria-label": O.intl.string(O.t.kMdneQ),
                                                    onClose: () => {},
                                                    onSelect: () => {},
                                                    children: (0, h.d_)(t, () => b(!1)),
                                                }),
                                        );
                                },
                            }),
                        }),
                    }),
                }),
                (0, n.jsx)(u.A, { onClick: () => (0, f.Au)(t.guild_id, t.id), className: M.DT }),
            ],
        }),
    });
}
