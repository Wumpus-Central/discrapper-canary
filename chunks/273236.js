n.d(t, { Z: () => x }), n(388685);
var i = n(951288),
    s = n(647438),
    r = n(120356),
    a = n.n(r),
    l = n(603113),
    c = n(481060),
    d = n(388032),
    o = n(814125),
    m = n(920178);
let x = s.forwardRef(function (e, t) {
    let {} = e,
        [r, a] = s.useState("before"),
        [x, j] = s.useState(!1),
        g = s.useRef(!1);
    s.useImperativeHandle(t, () => ({ maybeChangeToAfterTab: () => (g.current || _("after"), g.current) }));
    let _ = s.useCallback((e) => {
        j(!0),
            setTimeout(() => {
                l.unstable_batchedUpdates(() => {
                    "after" === e && (g.current = !0), j(!1), a(e);
                });
            }, 400);
    }, []);
    return (0, i.jsxs)(c.Ttm, {
        className: m.content,
        children: [
            (0, i.jsxs)("div", {
                className: m.header,
                children: [
                    (0, i.jsx)(c.Dkj, {
                        size: "custom",
                        color: "currentColor",
                        width: 40,
                        height: 40,
                    }),
                    (0, i.jsx)(c.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: d.intl.string(d.t.c0Fhpa),
                    }),
                    (0, i.jsx)(c.Text, {
                        className: m.__invalid_subtitle,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: d.intl.string(d.t.dKPfBQ),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: o.container,
                children: [
                    (0, i.jsxs)("div", {
                        className: o.tabs,
                        children: [
                            (0, i.jsx)("div", {
                                className: o.tabBackground,
                                style: { left: "before" === r ? 0 : "50%" },
                            }),
                            (0, i.jsx)(c.P3F, {
                                className: o.tab,
                                onClick: () => _("before"),
                                children: (0, i.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    color: "before" === r ? "header-primary" : "text-muted",
                                    children: d.intl.string(d.t.sLv7LC),
                                }),
                            }),
                            (0, i.jsx)(c.P3F, {
                                className: o.tab,
                                onClick: () => _("after"),
                                children: (0, i.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    color: "after" === r ? "header-primary" : "text-muted",
                                    children: d.intl.string(d.t.R8eSY2),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: o.previewContainer,
                        children: [
                            (0, i.jsxs)("div", {
                                className: o.guilds,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: o.unreadGuild,
                                        children: (0, i.jsx)("img", {
                                            src: n(180681),
                                            width: 36,
                                            height: 36,
                                            alt: "Example Guild Icon",
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: "after" === r ? o.guild : o.unreadGuild,
                                        children: (0, i.jsx)("img", {
                                            src: n(390115),
                                            width: 36,
                                            height: 36,
                                            alt: "Example Guild Icon",
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: "after" === r ? o.guild : o.unreadGuild,
                                        children: (0, i.jsx)("img", {
                                            src: n(536411),
                                            width: 36,
                                            height: 36,
                                            alt: "Example Guild Icon",
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: o.channels,
                                children: [
                                    (0, i.jsx)(u, {
                                        mention: !0,
                                        name: d.intl.string(d.t.WFejRk),
                                    }),
                                    (0, i.jsx)(u, { name: d.intl.string(d.t.jqWm9f) }),
                                    (0, i.jsx)(u, {
                                        grey: "after" === r,
                                        name: d.intl.string(d.t.p9z9Iy),
                                    }),
                                    (0, i.jsx)(u, {
                                        grey: "after" === r,
                                        name: d.intl.string(d.t["2bdWDw"]),
                                    }),
                                    (0, i.jsx)(u, { name: d.intl.string(d.t["Ci+Our"]) }),
                                    (0, i.jsx)(u, {
                                        grey: "after" === r,
                                        name: d.intl.string(d.t["/7TEdn"]),
                                    }),
                                    (0, i.jsx)(u, {
                                        grey: "after" === r,
                                        name: d.intl.string(d.t["Ime/t7"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(h, {
                        hidden: x || "after" === r,
                        className: o.tipBefore1,
                        text: d.intl.string(d.t.WrPMOD),
                    }),
                    (0, i.jsx)(h, {
                        hidden: x || "after" === r,
                        className: o.tipBefore2,
                        text: d.intl.string(d.t["pApL7+"]),
                    }),
                    (0, i.jsx)(h, {
                        hidden: x || "before" === r,
                        className: o.tipAfter1,
                        text: d.intl.string(d.t.eZb3iY),
                    }),
                    (0, i.jsx)(h, {
                        hidden: x || "before" === r,
                        className: o.tipAfter2,
                        text: d.intl.string(d.t.M3KrJS),
                    }),
                ],
            }),
        ],
    });
});
function h(e) {
    let { text: t, className: n, hidden: s } = e;
    return (0, i.jsxs)("div", {
        className: a()(n, o.tip, { [o.hidden]: s }),
        children: [
            (0, i.jsx)(c.Text, {
                className: o.__invalid_tipText,
                variant: "text-sm/normal",
                color: "text-secondary",
                children: t,
            }),
            (0, i.jsx)("div", { className: o.tipLine }),
        ],
    });
}
function u(e) {
    let { grey: t, mention: n, name: s } = e;
    return (0, i.jsxs)("div", {
        className: a()(o.channel, {
            [o.grey]: t,
            [o.mention]: n,
        }),
        children: [
            (0, i.jsx)(c.VL1, {
                size: "xs",
                color: "currentColor",
                className: o.channelIcon,
            }),
            (0, i.jsx)(c.Text, {
                variant: "text-md/medium",
                className: o.channelName,
                children: s,
            }),
        ],
    });
}
