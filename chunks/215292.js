e.d(n, {
    F: () => L,
    Z: () => x,
}),
    e(388685);
var i = e(54381),
    a = e(473749),
    l = e(442837),
    s = e(755721),
    r = e(481060),
    d = e(493683),
    o = e(881052),
    c = e(600164),
    m = e(313201),
    p = e(565138),
    g = e(984933),
    C = e(430824),
    u = e(388032),
    _ = e(308250);
function L(t) {
    let { createdGuildId: n, hasFooter: e = !0, onClose: L, onChannelPromptCompleted: x, isSlideReady: T } = t,
        [E, h] = a.useState(""),
        [G, I] = a.useState(null),
        [D, y] = a.useState(!1),
        U = (0, m.Dt)(),
        z = (0, l.e7)([C.Z], () => C.Z.getGuild(n), [n]),
        f = a.useRef(null);
    a.useEffect(() => {
        var t;
        T && (null == (t = f.current) || t.focus());
    }, [T]);
    let N = a.useCallback(
            async (t) => {
                if ((t.preventDefault(), null == z)) return;
                y(!0), I(null);
                let n = g.ZP.getDefaultChannel(z.id);
                try {
                    let t = u.intl.formatToPlainString(u.t.V4lepJ, { topic: E });
                    await d.Z.createTextChannel(z.id, E, null == n ? void 0 : n.parent_id, t), x();
                } catch (t) {
                    I(new o.yZ(t));
                }
                y(!1);
            },
            [z, E, x],
        ),
        v = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.Button, {
                    variant: "primary",
                    text: u.intl.string(u.t.i4jeWR),
                    onClick: N,
                    disabled: 0 === E.length,
                    loading: D,
                }),
                (0, i.jsx)(s.zx, {
                    "data-migration-pending": !0,
                    className: _.skipButton,
                    look: s.zx.Looks.BLANK,
                    size: s.zx.Sizes.MIN,
                    onClick: x,
                    children: u.intl.string(u.t["5Wxrcd"]),
                }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(r.xBx, {
                    "data-migration-pending": !0,
                    className: _.header,
                    direction: c.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != z && (0, i.jsx)(p.Z, { guild: z }),
                        (0, i.jsx)(r.Text, {
                            className: _.guildName,
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            children: null == z ? void 0 : z.name,
                        }),
                        (0, i.jsx)(r.Heading, {
                            className: _.title,
                            variant: "heading-sm/semibold",
                            children: u.intl.string(u.t["8VRa7d"]),
                        }),
                        (0, i.jsx)(r.Text, {
                            className: _.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: u.intl.string(u.t["+855Pm"]),
                        }),
                        null != L &&
                            (0, i.jsx)(r.olH, {
                                "data-migration-pending": !0,
                                className: _.closeButton,
                                onClick: L,
                            }),
                    ],
                }),
                (0, i.jsxs)(r.hzk, {
                    "data-migration-pending": !0,
                    className: _.channelPrompt,
                    children: [
                        (0, i.jsx)("form", {
                            onSubmit: N,
                            children: (0, i.jsx)(r.oil, {
                                label: u.intl.string(u.t.bY20tU),
                                error: null == G ? void 0 : G.getFieldMessage("name"),
                                type: "text",
                                value: E,
                                id: U,
                                onChange: h,
                                placeholder: u.intl.string(u.t.xGOYA8),
                                inputRef: f,
                            }),
                        }),
                        null != G &&
                            0 === Object.keys(G.fields).length &&
                            (0, i.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "text-danger",
                                children: G.message,
                            }),
                    ],
                }),
                e &&
                    (0, i.jsx)(r.mzw, {
                        "data-migration-pending": !0,
                        children: v,
                    }),
            ],
        }),
        footer: v,
    };
}
function x(t) {
    let { content: n } = L(t);
    return n;
}
