n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    a = n(473749),
    s = n(481060),
    o = n(790359),
    l = n(203377),
    i = n(44542),
    c = n(388032),
    d = n(617186);
function u() {
    let [e, t] = a.useState("");
    return (0, r.jsxs)("div", {
        className: d.container,
        children: [
            (0, r.jsxs)("div", {
                className: d.demo,
                children: [
                    (0, r.jsxs)("div", {
                        className: d.previewCard,
                        children: [
                            (0, r.jsx)("div", {
                                className: d.avatar,
                                children: (0, r.jsx)(s.gw7, {
                                    size: "custom",
                                    width: 24,
                                    height: 24,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: d.previewCardMessage,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: d.messageHeaderSkeleton,
                                        children: [
                                            (0, r.jsx)("div", { className: d.usernameSkeleton }),
                                            (0, r.jsx)("div", { className: d.timestampSkeleton }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: d.previewCardUrl,
                                        children: [
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-muted",
                                                className: d.baseUrl,
                                                children: "".concat(l.mf, "/"),
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-link",
                                                className: d.vanityCode,
                                                children: e,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: d.messageEmbed,
                                        children: [
                                            (0, r.jsx)("div", { className: d.messageEmbedHeaderSkeleton }),
                                            (0, r.jsxs)("div", {
                                                className: d.messageEmbedContent,
                                                children: [
                                                    (0, r.jsx)("div", { className: d.messageEmbedContentIconSkeleton }),
                                                    (0, r.jsxs)("div", {
                                                        className: d.messageEmbedContentLines,
                                                        children: [
                                                            (0, r.jsx)("div", {
                                                                className: d.messageEmbedContenPrimaryLineSkeleton,
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                className: d.messageEmbedContentSecondaryLineSkeleton,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: d.messageEmbedContentActionSkeleton,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.Z, {
                        autoFocus: !0,
                        value: e,
                        onChange: t,
                    }),
                ],
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: d.disclaimer,
                children: c.intl.string(i.default.u5iNbz),
            }),
        ],
    });
}
