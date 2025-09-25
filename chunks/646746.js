n.d(t, { O: () => w });
var a = n(951288),
    l = n(647438),
    r = n(120356),
    i = n.n(r),
    s = n(392711),
    o = n(481060),
    c = n(686546),
    u = n(627050),
    d = n(124347),
    h = n(499376),
    m = n(937889),
    g = n(930282),
    f = n(695346),
    _ = n(764871),
    p = n(388032),
    b = n(151576);
function w(e) {
    let { message: t, forwardOptions: n, channel: r } = e,
        w = f.jU.useSetting(),
        {
            attachments: v,
            embeds: x,
            hasContent: y,
            contentMessage: P,
        } = (0, _.c)({
            message: t,
            channel: r,
            forwardOptions: n,
        }),
        C = u.d.useExperiment({ location: "forward_preview" }).enabled,
        j = l.useMemo(
            () =>
                y
                    ? (0, m.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: C,
                          hideSimpleEmbedContent: !1,
                          contentMessage: P,
                      }).content
                    : null,
            [P, y, t, C],
        ),
        O = v.length,
        I = null,
        S = null,
        Z = null;
    if (O > 0 || x.length > 0) {
        var R, T, k, D;
        let e = (0, s.countBy)(v, (e) => (0, h.aw)(e, !0)),
            t = null != (k = e.IMAGE) ? k : 0,
            n = null != (D = e.VIDEO) ? D : 0;
        t > 0 && n > 0
            ? ((I = p.intl.formatToPlainString(p.t.Lr0Toq, {
                  image_count: t,
                  video_count: n,
              })),
              (S = o.Ka2))
            : n > 0
              ? ((I = p.intl.formatToPlainString(p.t.SJ6pPT, { count: n })), (S = o.g8d))
              : t > 0
                ? ((I = p.intl.formatToPlainString(p.t.h4pFfX, { count: t })), (S = 1 === t ? o.XBm : o.Ka2))
                : ((I = p.intl.formatToPlainString(p.t["89ihS0"], { count: O })), (S = o.Ujz)),
            n > 0 && O === n
                ? (Z = (0, a.jsxs)("div", {
                      className: i()(b.attachmentPreview, b.attachmentPreviewVideo),
                      children: [
                          (0, a.jsx)(d.ZP, {
                              className: b.thumbnail,
                              src: v[0].proxy_url,
                              width: 56,
                              height: 56,
                          }),
                          (0, a.jsx)(o.g8d, {
                              className: b.playIcon,
                              size: "md",
                              color: "white",
                          }),
                      ],
                  }))
                : O > 0
                  ? (Z = (0, a.jsx)("div", {
                        className: b.attachmentPreview,
                        children: (0, a.jsx)(d.ZP, {
                            src: v[0].proxy_url,
                            width: 56,
                            height: 56,
                        }),
                    }))
                  : (null == (T = x[0]) || null == (R = T.thumbnail) ? void 0 : R.proxyURL) != null &&
                    (Z = (0, a.jsx)("div", {
                        className: b.attachmentPreview,
                        children: (0, a.jsx)(d.ZP, {
                            src: x[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56,
                        }),
                    }));
    }
    return (
        O > 1 &&
            null != Z &&
            (Z = (0, a.jsxs)("div", {
                className: b.attachmentPreviewOverflow,
                children: [
                    (0, a.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: Z,
                    }),
                    (0, a.jsxs)(o.Text, {
                        className: b.overflowCount,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", O - 1],
                    }),
                ],
            })),
        (0, a.jsxs)("div", {
            className: b.forwardPreview,
            children: [
                (0, a.jsxs)("div", {
                    className: b.contentWrapper,
                    children: [
                        y &&
                            (0, a.jsx)(g.ZP, {
                                className: i()(b.forwardPreviewMessage, O > 0 && b.hasAttachments),
                                message: t,
                                content: j,
                                compact: w,
                            }),
                        O > 0 &&
                            (0, a.jsxs)("div", {
                                className: b.attachmentRow,
                                children: [
                                    null != S &&
                                        (0, a.jsx)(S, {
                                            size: "custom",
                                            width: y ? 18 : 20,
                                            color: o.TVs.colors.TEXT_LOW_CONTRAST,
                                        }),
                                    null != I &&
                                        (0, a.jsx)(o.Text, {
                                            variant: y ? "text-sm/medium" : "text-md/medium",
                                            color: "text-low-contrast",
                                            children: I,
                                        }),
                                ],
                            }),
                    ],
                }),
                Z,
            ],
        })
    );
}
