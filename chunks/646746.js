n.d(t, { O: () => b });
var l = n(255367),
    r = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(392711),
    o = n(481060),
    c = n(686546),
    u = n(124347),
    d = n(499376),
    h = n(937889),
    f = n(930282),
    m = n(695346),
    g = n(318616),
    _ = n(388032),
    p = n(28447);
function b(e) {
    let { message: t, forwardOptions: n, channel: a } = e,
        b = m.jU.useSetting(),
        {
            attachments: y,
            embeds: v,
            hasContent: x,
            contentMessage: E
        } = (0, g.c)({
            message: t,
            channel: a,
            forwardOptions: n
        }),
        C = r.useMemo(
            () =>
                x
                    ? (0, h.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: E
                      }).content
                    : null,
            [E, x, t]
        ),
        S = y.length,
        O = null,
        P = null,
        w = null;
    if (S > 0 || v.length > 0) {
        var Z, j, N, I;
        let e = (0, s.countBy)(y, (e) => (0, d.aw)(e, !0)),
            t = null != (N = e.IMAGE) ? N : 0,
            n = null != (I = e.VIDEO) ? I : 0;
        (t > 0 && n > 0
            ? ((O = _.intl.formatToPlainString(_.t.Lr0Toq, {
                  image_count: t,
                  video_count: n
              })),
              (P = o.Ka2))
            : n > 0
              ? ((O = _.intl.formatToPlainString(_.t.SJ6pPT, { count: n })), (P = o.g8d))
              : t > 0
                ? ((O = _.intl.formatToPlainString(_.t.h4pFfX, { count: t })), (P = 1 === t ? o.XBm : o.Ka2))
                : ((O = _.intl.formatToPlainString(_.t['89ihS0'], { count: S })), (P = o.Ujz)),
            n > 0 && S === n
                ? (w = (0, l.jsxs)('div', {
                      className: i()(p.attachmentPreview, p.attachmentPreviewVideo),
                      children: [
                          (0, l.jsx)(u.ZP, {
                              className: p.thumbnail,
                              src: y[0].proxy_url,
                              width: 56,
                              height: 56
                          }),
                          (0, l.jsx)(o.g8d, {
                              className: p.playIcon,
                              size: 'md',
                              color: 'white'
                          })
                      ]
                  }))
                : S > 0
                  ? (w = (0, l.jsx)('div', {
                        className: p.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: y[0].proxy_url,
                            width: 56,
                            height: 56
                        })
                    }))
                  : (null == (j = v[0]) || null == (Z = j.thumbnail) ? void 0 : Z.proxyURL) != null &&
                    (w = (0, l.jsx)('div', {
                        className: p.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: v[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56
                        })
                    })));
    }
    return (
        S > 1 &&
            null != w &&
            (w = (0, l.jsxs)('div', {
                className: p.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: w
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: p.overflowCount,
                        variant: 'text-xs/semibold',
                        color: 'text-default',
                        children: ['+', S - 1]
                    })
                ]
            })),
        (0, l.jsxs)('div', {
            className: p.forwardPreview,
            children: [
                (0, l.jsx)('div', { className: p.quote }),
                (0, l.jsxs)('div', {
                    className: p.contentWrapper,
                    children: [
                        x &&
                            (0, l.jsx)(f.ZP, {
                                className: i()(p.forwardPreviewMessage, S > 0 && p.hasAttachments),
                                message: t,
                                content: C,
                                compact: b
                            }),
                        S > 0 &&
                            (0, l.jsxs)('div', {
                                className: p.attachmentRow,
                                children: [
                                    null != P &&
                                        (0, l.jsx)(P, {
                                            size: 'custom',
                                            width: x ? 18 : 20,
                                            color: o.TVs.colors.TEXT_LOW_CONTRAST
                                        }),
                                    null != O &&
                                        (0, l.jsx)(o.Text, {
                                            variant: x ? 'text-sm/medium' : 'text-md/medium',
                                            color: 'text-low-contrast',
                                            children: O
                                        })
                                ]
                            })
                    ]
                }),
                w
            ]
        })
    );
}
