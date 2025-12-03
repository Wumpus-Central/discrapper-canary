n.d(t, { Z: () => x });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(228392),
    o = n(404616),
    c = n(710352),
    d = n(921944),
    u = n(388032),
    m = n(816922),
    h = n(971309),
    g = n(586301),
    f = n(504764);
function x(e) {
    let { onDismiss: t } = e;
    return (0, r.jsxs)(a.P3F, {
        onClick: () => {
            open(c.V8), (0, s.GX)({ readGuideCta: !0 });
        },
        className: l()(g.container, h.container, m.mainCard),
        children: [
            (0, r.jsxs)("div", {
                className: h.inline,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.author,
                        children: [
                            (0, r.jsx)(a.gw7, {
                                size: "custom",
                                width: 28,
                                height: 28,
                                color: "currentColor",
                                className: h.discordIcon,
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/semibold",
                                color: "header-primary",
                                children: u.intl.string(u.t.uvGmCx),
                            }),
                            (0, r.jsxs)("div", {
                                className: h.notice,
                                children: [
                                    (0, r.jsx)(a.d3s, {
                                        size: "md",
                                        color: "currentColor",
                                        className: h.infoIcon,
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: u.intl.string(u.t.t2GkVR),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(a.P3F, {
                        onClick: (e) => {
                            e.stopPropagation(), t(d.L.DISMISS), (0, s.GX)({ readGuideCta: !1 });
                        },
                        children: (0, r.jsx)(a.Dio, {
                            size: "xs",
                            color: "currentColor",
                            className: h.closeIcon,
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("hr", { className: h.separator }),
            (0, r.jsxs)("div", {
                className: h.inline,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(a.Heading, {
                                className: l()(g.__invalid_channelName, h.title),
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                children: u.intl.string(u.t.JtSpD0),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: u.intl.string(u.t.Ajhp03),
                            }),
                        ],
                    }),
                    (0, r.jsx)("img", {
                        src: f,
                        alt: u.intl.string(u.t.gAlJzV),
                        width: o.TJ,
                        height: o.TJ,
                    }),
                ],
            }),
        ],
    });
}
