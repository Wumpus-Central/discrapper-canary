n.d(t, { O: () => v });
var l = n(951288),
    r = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(392711),
    o = n(481060),
    u = n(686546),
    c = n(627050),
    d = n(124347),
    h = n(499376),
    f = n(937889),
    m = n(930282),
    g = n(695346),
    p = n(318616),
    b = n(388032),
    _ = n(698755);
function v(e) {
    let { message: t, forwardOptions: n, channel: a } = e,
        v = g.jU.useSetting(),
        {
            attachments: x,
            embeds: y,
            hasContent: w,
            contentMessage: j,
        } = (0, p.c)({
            message: t,
            channel: a,
            forwardOptions: n,
        }),
        O = c.d.useExperiment({ location: "forward_preview" }).enabled,
        P = r.useMemo(
            () =>
                w
                    ? (0, f.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: O,
                          hideSimpleEmbedContent: !1,
                          contentMessage: j,
                      }).content
                    : null,
            [j, w, t, O],
        ),
        S = x.length,
        E = null,
        C = null,
        Z = null;
    if (S > 0 || y.length > 0) {
        var N, L, M, T;
        let e = (0, i.countBy)(x, (e) => (0, h.aw)(e, !0)),
            t = null != (M = e.IMAGE) ? M : 0,
            n = null != (T = e.VIDEO) ? T : 0;
        t > 0 && n > 0
            ? ((E = b.intl.formatToPlainString(b.t.Lr0Toq, {
                  image_count: t,
                  video_count: n,
              })),
              (C = o.Ka2))
            : n > 0
              ? ((E = b.intl.formatToPlainString(b.t.SJ6pPT, { count: n })), (C = o.g8d))
              : t > 0
                ? ((E = b.intl.formatToPlainString(b.t.h4pFfX, { count: t })), (C = 1 === t ? o.XBm : o.Ka2))
                : ((E = b.intl.formatToPlainString(b.t["89ihS0"], { count: S })), (C = o.Ujz)),
            n > 0 && S === n
                ? (Z = (0, l.jsxs)("div", {
                      className: s()(_.attachmentPreview, _.attachmentPreviewVideo),
                      children: [
                          (0, l.jsx)(d.ZP, {
                              className: _.thumbnail,
                              src: x[0].proxy_url,
                              width: 56,
                              height: 56,
                          }),
                          (0, l.jsx)(o.g8d, {
                              className: _.playIcon,
                              size: "md",
                              color: "white",
                          }),
                      ],
                  }))
                : S > 0
                  ? (Z = (0, l.jsx)("div", {
                        className: _.attachmentPreview,
                        children: (0, l.jsx)(d.ZP, {
                            src: x[0].proxy_url,
                            width: 56,
                            height: 56,
                        }),
                    }))
                  : (null == (L = y[0]) || null == (N = L.thumbnail) ? void 0 : N.proxyURL) != null &&
                    (Z = (0, l.jsx)("div", {
                        className: _.attachmentPreview,
                        children: (0, l.jsx)(d.ZP, {
                            src: y[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56,
                        }),
                    }));
    }
    return (
        S > 1 &&
            null != Z &&
            (Z = (0, l.jsxs)("div", {
                className: _.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(u.ZP, {
                        mask: u.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: Z,
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: _.overflowCount,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", S - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: _.forwardPreview,
            children: [
                (0, l.jsx)("div", { className: _.quote }),
                (0, l.jsxs)("div", {
                    className: _.contentWrapper,
                    children: [
                        w &&
                            (0, l.jsx)(m.ZP, {
                                className: s()(_.forwardPreviewMessage, S > 0 && _.hasAttachments),
                                message: t,
                                content: P,
                                compact: v,
                            }),
                        S > 0 &&
                            (0, l.jsxs)("div", {
                                className: _.attachmentRow,
                                children: [
                                    null != C &&
                                        (0, l.jsx)(C, {
                                            size: "custom",
                                            width: w ? 18 : 20,
                                            color: o.TVs.colors.TEXT_LOW_CONTRAST,
                                        }),
                                    null != E &&
                                        (0, l.jsx)(o.Text, {
                                            variant: w ? "text-sm/medium" : "text-md/medium",
                                            color: "text-low-contrast",
                                            children: E,
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
