n.d(t, { O: () => b });
var l = n(951288),
    a = n(647438),
    r = n(120356),
    i = n.n(r),
    s = n(392711),
    o = n(481060),
    u = n(686546),
    c = n(627050),
    d = n(124347),
    h = n(499376),
    m = n(937889),
    g = n(930282),
    f = n(695346),
    p = n(318616),
    v = n(388032),
    w = n(698755);
function b(e) {
    let { message: t, forwardOptions: n, channel: r } = e,
        b = f.jU.useSetting(),
        {
            attachments: x,
            embeds: y,
            hasContent: C,
            contentMessage: O,
        } = (0, p.c)({
            message: t,
            channel: r,
            forwardOptions: n,
        }),
        j = c.d.useExperiment({ location: "forward_preview" }).enabled,
        _ = a.useMemo(
            () =>
                C
                    ? (0, m.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: j,
                          hideSimpleEmbedContent: !1,
                          contentMessage: O,
                      }).content
                    : null,
            [O, C, t, j],
        ),
        S = x.length,
        T = null,
        E = null,
        P = null;
    if (S > 0 || y.length > 0) {
        var D, M, R, A;
        let e = (0, s.countBy)(x, (e) => (0, h.aw)(e, !0)),
            t = null != (R = e.IMAGE) ? R : 0,
            n = null != (A = e.VIDEO) ? A : 0;
        t > 0 && n > 0
            ? ((T = v.intl.formatToPlainString(v.t.Lr0Top, {
                  image_count: t,
                  video_count: n,
              })),
              (E = o.Ka2))
            : n > 0
              ? ((T = v.intl.formatToPlainString(v.t.SJ6pPX, { count: n })), (E = o.g8d))
              : t > 0
                ? ((T = v.intl.formatToPlainString(v.t.h4pFfU, { count: t })), (E = 1 === t ? o.XBm : o.Ka2))
                : ((T = v.intl.formatToPlainString(v.t["89ihS8"], { count: S })), (E = o.Ujz)),
            n > 0 && S === n
                ? (P = (0, l.jsxs)("div", {
                      className: i()(w.attachmentPreview, w.attachmentPreviewVideo),
                      children: [
                          (0, l.jsx)(d.ZP, {
                              className: w.thumbnail,
                              src: x[0].proxy_url,
                              width: 56,
                              height: 56,
                          }),
                          (0, l.jsx)(o.g8d, {
                              className: w.playIcon,
                              size: "md",
                              color: "white",
                          }),
                      ],
                  }))
                : S > 0
                  ? (P = (0, l.jsx)("div", {
                        className: w.attachmentPreview,
                        children: (0, l.jsx)(d.ZP, {
                            src: x[0].proxy_url,
                            width: 56,
                            height: 56,
                        }),
                    }))
                  : (null == (M = y[0]) || null == (D = M.thumbnail) ? void 0 : D.proxyURL) != null &&
                    (P = (0, l.jsx)("div", {
                        className: w.attachmentPreview,
                        children: (0, l.jsx)(d.ZP, {
                            src: y[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56,
                        }),
                    }));
    }
    return (
        S > 1 &&
            null != P &&
            (P = (0, l.jsxs)("div", {
                className: w.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(u.ZP, {
                        mask: u.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: P,
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: w.overflowCount,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", S - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: w.forwardPreview,
            children: [
                (0, l.jsxs)("div", {
                    className: w.contentWrapper,
                    children: [
                        C &&
                            (0, l.jsx)(g.ZP, {
                                className: i()(w.forwardPreviewMessage, S > 0 && w.hasAttachments),
                                message: t,
                                content: _,
                                compact: b,
                            }),
                        S > 0 &&
                            (0, l.jsxs)("div", {
                                className: w.attachmentRow,
                                children: [
                                    null != E &&
                                        (0, l.jsx)(E, {
                                            size: "custom",
                                            width: C ? 18 : 20,
                                            color: o.TVs.colors.TEXT_LOW_CONTRAST,
                                        }),
                                    null != T &&
                                        (0, l.jsx)(o.Text, {
                                            variant: C ? "text-sm/medium" : "text-md/medium",
                                            color: "text-low-contrast",
                                            children: T,
                                        }),
                                ],
                            }),
                    ],
                }),
                P,
            ],
        })
    );
}
