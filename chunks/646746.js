n.d(t, { O: () => b });
var l = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(392711),
    o = n(481060),
    c = n(686546),
    u = n(627050),
    d = n(124347),
    f = n(499376),
    h = n(937889),
    _ = n(930282),
    g = n(695346),
    m = n(318616),
    p = n(388032),
    E = n(698755);
function b(e) {
    let { message: t, forwardOptions: n, channel: i } = e,
        b = g.jU.useSetting(),
        {
            attachments: y,
            embeds: I,
            hasContent: S,
            contentMessage: A,
        } = (0, m.c)({
            message: t,
            channel: i,
            forwardOptions: n,
        }),
        O = u.d.useExperiment({ location: "forward_preview" }).enabled,
        v = r.useMemo(
            () =>
                S
                    ? (0, h.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: O,
                          hideSimpleEmbedContent: !1,
                          contentMessage: A,
                      }).content
                    : null,
            [A, S, t, O],
        ),
        C = y.length,
        x = null,
        P = null,
        N = null;
    if (C > 0 || I.length > 0) {
        var T, L, j, Z;
        let e = (0, s.countBy)(y, (e) => (0, f.aw)(e, !0)),
            t = null != (j = e.IMAGE) ? j : 0,
            n = null != (Z = e.VIDEO) ? Z : 0;
        t > 0 && n > 0
            ? ((x = p.intl.formatToPlainString(p.t.Lr0Toq, {
                  image_count: t,
                  video_count: n,
              })),
              (P = o.Ka2))
            : n > 0
              ? ((x = p.intl.formatToPlainString(p.t.SJ6pPT, { count: n })), (P = o.g8d))
              : t > 0
                ? ((x = p.intl.formatToPlainString(p.t.h4pFfX, { count: t })), (P = 1 === t ? o.XBm : o.Ka2))
                : ((x = p.intl.formatToPlainString(p.t["89ihS0"], { count: C })), (P = o.Ujz)),
            n > 0 && C === n
                ? (N = (0, l.jsxs)("div", {
                      className: a()(E.attachmentPreview, E.attachmentPreviewVideo),
                      children: [
                          (0, l.jsx)(d.ZP, {
                              className: E.thumbnail,
                              src: y[0].proxy_url,
                              width: 56,
                              height: 56,
                          }),
                          (0, l.jsx)(o.g8d, {
                              className: E.playIcon,
                              size: "md",
                              color: "white",
                          }),
                      ],
                  }))
                : C > 0
                  ? (N = (0, l.jsx)("div", {
                        className: E.attachmentPreview,
                        children: (0, l.jsx)(d.ZP, {
                            src: y[0].proxy_url,
                            width: 56,
                            height: 56,
                        }),
                    }))
                  : (null == (L = I[0]) || null == (T = L.thumbnail) ? void 0 : T.proxyURL) != null &&
                    (N = (0, l.jsx)("div", {
                        className: E.attachmentPreview,
                        children: (0, l.jsx)(d.ZP, {
                            src: I[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56,
                        }),
                    }));
    }
    return (
        C > 1 &&
            null != N &&
            (N = (0, l.jsxs)("div", {
                className: E.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: N,
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: E.overflowCount,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", C - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: E.forwardPreview,
            children: [
                (0, l.jsx)("div", { className: E.quote }),
                (0, l.jsxs)("div", {
                    className: E.contentWrapper,
                    children: [
                        S &&
                            (0, l.jsx)(_.ZP, {
                                className: a()(E.forwardPreviewMessage, C > 0 && E.hasAttachments),
                                message: t,
                                content: v,
                                compact: b,
                            }),
                        C > 0 &&
                            (0, l.jsxs)("div", {
                                className: E.attachmentRow,
                                children: [
                                    null != P &&
                                        (0, l.jsx)(P, {
                                            size: "custom",
                                            width: S ? 18 : 20,
                                            color: o.TVs.colors.TEXT_LOW_CONTRAST,
                                        }),
                                    null != x &&
                                        (0, l.jsx)(o.Text, {
                                            variant: S ? "text-sm/medium" : "text-md/medium",
                                            color: "text-low-contrast",
                                            children: x,
                                        }),
                                ],
                            }),
                    ],
                }),
                N,
            ],
        })
    );
}
