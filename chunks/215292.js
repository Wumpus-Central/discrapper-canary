e.d(n, {
    F: () => L,
    Z: () => x,
}),
    e(388685);
var i = e(54381),
    l = e(473749),
    a = e(442837),
    s = e(755721),
    r = e(481060),
    d = e(493683),
    c = e(881052),
    o = e(600164),
    C = e(313201),
    m = e(565138),
    p = e(984933),
    u = e(430824),
    g = e(388032),
    _ = e(308250);
function L(t) {
    let { createdGuildId: n, hasFooter: e = !0, onClose: L, onChannelPromptCompleted: x, isSlideReady: T } = t,
        [E, h] = l.useState(""),
        [G, I] = l.useState(null),
        [D, y] = l.useState(!1),
        U = (0, C.Dt)(),
        z = (0, a.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        f = l.useRef(null);
    l.useEffect(() => {
        var t;
        T && (null == (t = f.current) || t.focus());
    }, [T]);
    let N = l.useCallback(
            async (t) => {
                if ((t.preventDefault(), null == z)) return;
                y(!0), I(null);
                let n = p.ZP.getDefaultChannel(z.id);
                try {
                    let t = g.intl.formatToPlainString(g.t.V4lepJ, { topic: E });
                    await d.Z.createTextChannel(z.id, E, null == n ? void 0 : n.parent_id, t), x();
                } catch (t) {
                    I(new c.yZ(t));
                }
                y(!1);
            },
            [z, E, x],
        ),
        v = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.Button, {
                    variant: "primary",
                    text: g.intl.string(g.t.i4jeWR),
                    onClick: N,
                    disabled: 0 === E.length,
                    loading: D,
                }),
                (0, i.jsx)(s.zx, {
                    className: _.skipButton,
                    look: s.zx.Looks.BLANK,
                    size: s.zx.Sizes.MIN,
                    onClick: x,
                    children: g.intl.string(g.t["5Wxrcd"]),
                }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(r.xBx, {
                    className: _.header,
                    direction: o.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != z && (0, i.jsx)(m.Z, { guild: z }),
                        (0, i.jsx)(r.Text, {
                            className: _.guildName,
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            children: null == z ? void 0 : z.name,
                        }),
                        (0, i.jsx)(r.Heading, {
                            className: _.title,
                            variant: "heading-sm/semibold",
                            children: g.intl.string(g.t["8VRa7d"]),
                        }),
                        (0, i.jsx)(r.Text, {
                            className: _.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: g.intl.string(g.t["+855Pm"]),
                        }),
                        null != L &&
                            (0, i.jsx)(r.olH, {
                                className: _.closeButton,
                                onClick: L,
                            }),
                    ],
                }),
                (0, i.jsxs)(r.hzk, {
                    className: _.channelPrompt,
                    children: [
                        (0, i.jsx)("form", {
                            onSubmit: N,
                            children: (0, i.jsx)(r.oil, {
                                label: g.intl.string(g.t.bY20tU),
                                error: null == G ? void 0 : G.getFieldMessage("name"),
                                type: "text",
                                value: E,
                                id: U,
                                onChange: h,
                                placeholder: g.intl.string(g.t.xGOYA8),
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
                e && (0, i.jsx)(r.mzw, { children: v }),
            ],
        }),
        footer: v,
    };
}
function x(t) {
    let { content: n } = L(t);
    return n;
}
