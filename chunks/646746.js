n.d(t, { O: () => _ });
var l = n(951288),
    a = n(647438),
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
    w = n(318616),
    p = n(388032),
    b = n(698755);
function _(e) {
    let { message: t, forwardOptions: n, channel: r } = e,
        _ = f.jU.useSetting(),
        {
            attachments: v,
            embeds: x,
            hasContent: y,
            contentMessage: P,
        } = (0, w.c)({
            message: t,
            channel: r,
            forwardOptions: n,
        }),
        C = u.d.useExperiment({ location: "forward_preview" }).enabled,
        O = a.useMemo(
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
        j = v.length,
        S = null,
        Z = null,
        I = null;
    if (j > 0 || x.length > 0) {
        var R, k, T, M;
        let e = (0, s.countBy)(v, (e) => (0, h.aw)(e, !0)),
            t = null != (T = e.IMAGE) ? T : 0,
            n = null != (M = e.VIDEO) ? M : 0;
        t > 0 && n > 0
            ? ((S = p.intl.formatToPlainString(p.t.Lr0Toq, {
                  image_count: t,
                  video_count: n,
              })),
              (Z = o.Ka2))
            : n > 0
              ? ((S = p.intl.formatToPlainString(p.t.SJ6pPT, { count: n })), (Z = o.g8d))
              : t > 0
                ? ((S = p.intl.formatToPlainString(p.t.h4pFfX, { count: t })), (Z = 1 === t ? o.XBm : o.Ka2))
                : ((S = p.intl.formatToPlainString(p.t["89ihS0"], { count: j })), (Z = o.Ujz)),
            n > 0 && j === n
                ? (I = (0, l.jsxs)("div", {
                      className: i()(b.attachmentPreview, b.attachmentPreviewVideo),
                      children: [
                          (0, l.jsx)(d.ZP, {
                              className: b.thumbnail,
                              src: v[0].proxy_url,
                              width: 56,
                              height: 56,
                          }),
                          (0, l.jsx)(o.g8d, {
                              className: b.playIcon,
                              size: "md",
                              color: "white",
                          }),
                      ],
                  }))
                : j > 0
                  ? (I = (0, l.jsx)("div", {
                        className: b.attachmentPreview,
                        children: (0, l.jsx)(d.ZP, {
                            src: v[0].proxy_url,
                            width: 56,
                            height: 56,
                        }),
                    }))
                  : (null == (k = x[0]) || null == (R = k.thumbnail) ? void 0 : R.proxyURL) != null &&
                    (I = (0, l.jsx)("div", {
                        className: b.attachmentPreview,
                        children: (0, l.jsx)(d.ZP, {
                            src: x[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56,
                        }),
                    }));
    }
    return (
        j > 1 &&
            null != I &&
            (I = (0, l.jsxs)("div", {
                className: b.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: I,
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: b.overflowCount,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", j - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: b.forwardPreview,
            children: [
                (0, l.jsxs)("div", {
                    className: b.contentWrapper,
                    children: [
                        y &&
                            (0, l.jsx)(g.ZP, {
                                className: i()(b.forwardPreviewMessage, j > 0 && b.hasAttachments),
                                message: t,
                                content: O,
                                compact: _,
                            }),
                        j > 0 &&
                            (0, l.jsxs)("div", {
                                className: b.attachmentRow,
                                children: [
                                    null != Z &&
                                        (0, l.jsx)(Z, {
                                            size: "custom",
                                            width: y ? 18 : 20,
                                            color: o.TVs.colors.TEXT_LOW_CONTRAST,
                                        }),
                                    null != S &&
                                        (0, l.jsx)(o.Text, {
                                            variant: y ? "text-sm/medium" : "text-md/medium",
                                            color: "text-low-contrast",
                                            children: S,
                                        }),
                                ],
                            }),
                    ],
                }),
                I,
            ],
        })
    );
}
