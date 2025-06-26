n.d(t, { O: () => E });
var l = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(392711),
    o = n(481060),
    c = n(686546),
    u = n(124347),
    d = n(499376),
    f = n(937889),
    h = n(930282),
    _ = n(695346),
    g = n(318616),
    m = n(388032),
    p = n(28447);
function E(e) {
    let { message: t, forwardOptions: n, channel: i } = e,
        E = _.jU.useSetting(),
        {
            attachments: b,
            embeds: y,
            hasContent: I,
            contentMessage: S
        } = (0, g.c)({
            message: t,
            channel: i,
            forwardOptions: n
        }),
        O = r.useMemo(
            () =>
                I
                    ? (0, f.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: S
                      }).content
                    : null,
            [S, I, t]
        ),
        A = b.length,
        v = null,
        C = null,
        x = null;
    if (A > 0 || y.length > 0) {
        var P, L, T, N;
        let e = (0, s.countBy)(b, (e) => (0, d.aw)(e, !0)),
            t = null != (T = e.IMAGE) ? T : 0,
            n = null != (N = e.VIDEO) ? N : 0;
        t > 0 && n > 0
            ? ((v = m.intl.formatToPlainString(m.t.Lr0Toq, {
                  image_count: t,
                  video_count: n
              })),
              (C = o.Ka2))
            : n > 0
              ? ((v = m.intl.formatToPlainString(m.t.SJ6pPT, { count: n })), (C = o.g8d))
              : t > 0
                ? ((v = m.intl.formatToPlainString(m.t.h4pFfX, { count: t })), (C = 1 === t ? o.XBm : o.Ka2))
                : ((v = m.intl.formatToPlainString(m.t['89ihS0'], { count: A })), (C = o.Ujz)),
            n > 0 && A === n
                ? (x = (0, l.jsxs)('div', {
                      className: a()(p.attachmentPreview, p.attachmentPreviewVideo),
                      children: [
                          (0, l.jsx)(u.ZP, {
                              className: p.thumbnail,
                              src: b[0].proxy_url,
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
                : A > 0
                  ? (x = (0, l.jsx)('div', {
                        className: p.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: b[0].proxy_url,
                            width: 56,
                            height: 56
                        })
                    }))
                  : (null == (L = y[0]) || null == (P = L.thumbnail) ? void 0 : P.proxyURL) != null &&
                    (x = (0, l.jsx)('div', {
                        className: p.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: y[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56
                        })
                    }));
    }
    return (
        A > 1 &&
            null != x &&
            (x = (0, l.jsxs)('div', {
                className: p.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: x
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: p.overflowCount,
                        variant: 'text-xs/semibold',
                        color: 'text-default',
                        children: ['+', A - 1]
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
                        I &&
                            (0, l.jsx)(h.ZP, {
                                className: a()(p.forwardPreviewMessage, A > 0 && p.hasAttachments),
                                message: t,
                                content: O,
                                compact: E
                            }),
                        A > 0 &&
                            (0, l.jsxs)('div', {
                                className: p.attachmentRow,
                                children: [
                                    null != C &&
                                        (0, l.jsx)(C, {
                                            size: 'custom',
                                            width: I ? 18 : 20,
                                            color: o.TVs.colors.TEXT_LOW_CONTRAST
                                        }),
                                    null != v &&
                                        (0, l.jsx)(o.Text, {
                                            variant: I ? 'text-sm/medium' : 'text-md/medium',
                                            color: 'text-low-contrast',
                                            children: v
                                        })
                                ]
                            })
                    ]
                }),
                x
            ]
        })
    );
}
