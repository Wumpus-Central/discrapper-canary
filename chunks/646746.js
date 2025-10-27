n.d(t, { O: () => b });
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
    _ = n(318616),
    w = n(388032),
    p = n(698755);
function b(e) {
    let { message: t, forwardOptions: n, channel: r } = e,
        b = f.jU.useSetting(),
        {
            attachments: v,
            embeds: x,
            hasContent: y,
            contentMessage: C,
        } = (0, _.c)({
            message: t,
            channel: r,
            forwardOptions: n,
        }),
        O = u.d.useExperiment({ location: "forward_preview" }).enabled,
        P = l.useMemo(
            () =>
                y
                    ? (0, m.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: O,
                          hideSimpleEmbedContent: !1,
                          contentMessage: C,
                      }).content
                    : null,
            [C, y, t, O],
        ),
        S = v.length,
        j = null,
        E = null,
        T = null;
    if (S > 0 || x.length > 0) {
        var I, M, D, R;
        let e = (0, s.countBy)(v, (e) => (0, h.aw)(e, !0)),
            t = null != (D = e.IMAGE) ? D : 0,
            n = null != (R = e.VIDEO) ? R : 0;
        t > 0 && n > 0
            ? ((j = w.intl.formatToPlainString(w.t.Lr0Top, {
                  image_count: t,
                  video_count: n,
              })),
              (E = o.Ka2))
            : n > 0
              ? ((j = w.intl.formatToPlainString(w.t.SJ6pPX, { count: n })), (E = o.g8d))
              : t > 0
                ? ((j = w.intl.formatToPlainString(w.t.h4pFfU, { count: t })), (E = 1 === t ? o.XBm : o.Ka2))
                : ((j = w.intl.formatToPlainString(w.t["89ihS8"], { count: S })), (E = o.Ujz)),
            n > 0 && S === n
                ? (T = (0, a.jsxs)("div", {
                      className: i()(p.attachmentPreview, p.attachmentPreviewVideo),
                      children: [
                          (0, a.jsx)(d.ZP, {
                              className: p.thumbnail,
                              src: v[0].proxy_url,
                              width: 56,
                              height: 56,
                          }),
                          (0, a.jsx)(o.g8d, {
                              className: p.playIcon,
                              size: "md",
                              color: "white",
                          }),
                      ],
                  }))
                : S > 0
                  ? (T = (0, a.jsx)("div", {
                        className: p.attachmentPreview,
                        children: (0, a.jsx)(d.ZP, {
                            src: v[0].proxy_url,
                            width: 56,
                            height: 56,
                        }),
                    }))
                  : (null == (M = x[0]) || null == (I = M.thumbnail) ? void 0 : I.proxyURL) != null &&
                    (T = (0, a.jsx)("div", {
                        className: p.attachmentPreview,
                        children: (0, a.jsx)(d.ZP, {
                            src: x[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56,
                        }),
                    }));
    }
    return (
        S > 1 &&
            null != T &&
            (T = (0, a.jsxs)("div", {
                className: p.attachmentPreviewOverflow,
                children: [
                    (0, a.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: T,
                    }),
                    (0, a.jsxs)(o.Text, {
                        className: p.overflowCount,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", S - 1],
                    }),
                ],
            })),
        (0, a.jsxs)("div", {
            className: p.forwardPreview,
            children: [
                (0, a.jsxs)("div", {
                    className: p.contentWrapper,
                    children: [
                        y &&
                            (0, a.jsx)(g.ZP, {
                                className: i()(p.forwardPreviewMessage, S > 0 && p.hasAttachments),
                                message: t,
                                content: P,
                                compact: b,
                            }),
                        S > 0 &&
                            (0, a.jsxs)("div", {
                                className: p.attachmentRow,
                                children: [
                                    null != E &&
                                        (0, a.jsx)(E, {
                                            size: "custom",
                                            width: y ? 18 : 20,
                                            color: o.TVs.colors.TEXT_LOW_CONTRAST,
                                        }),
                                    null != j &&
                                        (0, a.jsx)(o.Text, {
                                            variant: y ? "text-sm/medium" : "text-md/medium",
                                            color: "text-low-contrast",
                                            children: j,
                                        }),
                                ],
                            }),
                    ],
                }),
                T,
            ],
        })
    );
}
