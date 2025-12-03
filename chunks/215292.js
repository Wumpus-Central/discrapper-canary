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
    C = e(984933),
    g = e(430824),
    u = e(388032),
    _ = e(308250);
function L(t) {
    let { createdGuildId: n, hasFooter: e = !0, onClose: L, onChannelPromptCompleted: x, isSlideReady: T } = t,
        [E, G] = a.useState(""),
        [I, h] = a.useState(null),
        [D, U] = a.useState(!1),
        y = (0, m.Dt)(),
        f = (0, l.e7)([g.Z], () => g.Z.getGuild(n), [n]),
        z = a.useRef(null);
    a.useEffect(() => {
        var t;
        T && (null == (t = z.current) || t.focus());
    }, [T]);
    let N = a.useCallback(
            async (t) => {
                if ((t.preventDefault(), null == f)) return;
                U(!0), h(null);
                let n = C.ZP.getDefaultChannel(f.id);
                try {
                    let t = u.intl.formatToPlainString(u.t.V4lepJ, { topic: E });
                    await d.Z.createTextChannel(f.id, E, null == n ? void 0 : n.parent_id, t), x();
                } catch (t) {
                    h(new o.yZ(t));
                }
                U(!1);
            },
            [f, E, x],
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
                        null != f && (0, i.jsx)(p.Z, { guild: f }),
                        (0, i.jsx)(r.Text, {
                            className: _.guildName,
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            children: null == f ? void 0 : f.name,
                        }),
                        (0, i.jsx)(r.Heading, {
                            className: _.title,
                            variant: "heading-sm/semibold",
                            children: u.intl.string(u.t["8VRa7d"]),
                        }),
                        (0, i.jsx)(r.Text, {
                            className: _.subtitle,
                            color: "text-default",
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
                                error: null == I ? void 0 : I.getFieldMessage("name"),
                                type: "text",
                                value: E,
                                id: y,
                                onChange: G,
                                placeholder: u.intl.string(u.t.xGOYA8),
                                inputRef: z,
                            }),
                        }),
                        null != I &&
                            0 === Object.keys(I.fields).length &&
                            (0, i.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                children: I.message,
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
