n.d(t, { Z: () => x });
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    l = n(481060),
    s = n(228392),
    o = n(404616),
    c = n(710352),
    d = n(921944),
    u = n(388032),
    m = n(707545),
    f = n(584999),
    h = n(112021),
    g = n(504764);
function x(e) {
    let { onDismiss: t } = e;
    return (0, a.jsxs)(l.P3F, {
        onClick: () => {
            open(c.V8), (0, s.GX)({ readGuideCta: !0 });
        },
        className: i()(h.container, f.container, m.mainCard),
        children: [
            (0, a.jsxs)("div", {
                className: f.inline,
                children: [
                    (0, a.jsxs)("div", {
                        className: f.author,
                        children: [
                            (0, a.jsx)(l.gw7, {
                                size: "custom",
                                width: 28,
                                height: 28,
                                color: "currentColor",
                                className: f.discordIcon,
                            }),
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                children: u.intl.string(u.t.uvGmCx),
                            }),
                            (0, a.jsxs)("div", {
                                className: f.notice,
                                children: [
                                    (0, a.jsx)(l.d3s, {
                                        size: "md",
                                        color: "currentColor",
                                        className: f.infoIcon,
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: u.intl.string(u.t.t2GkVR),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(l.P3F, {
                        onClick: (e) => {
                            e.stopPropagation(), t(d.L.DISMISS), (0, s.GX)({ readGuideCta: !1 });
                        },
                        children: (0, a.jsx)(l.Dio, {
                            size: "xs",
                            color: "currentColor",
                            className: f.closeIcon,
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("hr", { className: f.separator }),
            (0, a.jsxs)("div", {
                className: f.inline,
                children: [
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(l.Heading, {
                                className: i()(h.__invalid_channelName, f.title),
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: u.intl.string(u.t.JtSpD0),
                            }),
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: u.intl.string(u.t.Ajhp03),
                            }),
                        ],
                    }),
                    (0, a.jsx)("img", {
                        src: g,
                        alt: u.intl.string(u.t.gAlJzV),
                        width: o.TJ,
                        height: o.TJ,
                    }),
                ],
            }),
        ],
    });
}
