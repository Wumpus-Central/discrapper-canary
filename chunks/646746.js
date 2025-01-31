n.d(t, { O: () => E });
var l = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    r = n(392711),
    o = n(481060),
    c = n(686546),
    u = n(124347),
    d = n(499376),
    _ = n(937889),
    h = n(930282),
    f = n(318616),
    g = n(388032),
    m = n(178837);
function E(e) {
    let { message: t, forwardOptions: n, channel: a } = e,
        {
            attachments: E,
            embeds: p,
            hasContent: I,
            contentMessage: A
        } = (0, f.c)({
            message: t,
            channel: a,
            forwardOptions: n
        }),
        S = i.useMemo(
            () =>
                I
                    ? (0, _.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: A
                      }).content
                    : null,
            [A, I, t]
        ),
        C = E.length,
        x = null,
        b = null,
        L = null;
    if (C > 0 || p.length > 0) {
        var v, N, T, y;
        let e = (0, r.countBy)(E, (e) => (0, d.aw)(e, !0)),
            t = null !== (T = e.IMAGE) && void 0 !== T ? T : 0,
            n = null !== (y = e.VIDEO) && void 0 !== y ? y : 0;
        t > 0 && n > 0
            ? ((x = g.intl.formatToPlainString(g.t.Lr0Toq, {
                  image_count: t,
                  video_count: n
              })),
              (b = o.Ka2))
            : n > 0
              ? ((x = g.intl.formatToPlainString(g.t.SJ6pPT, { count: n })), (b = o.g8d))
              : t > 0
                ? ((x = g.intl.formatToPlainString(g.t.h4pFfX, { count: t })), (b = 1 === t ? o.XBm : o.Ka2))
                : ((x = g.intl.formatToPlainString(g.t['89ihS0'], { count: C })), (b = o.Ujz)),
            n > 0 && C === n
                ? (L = (0, l.jsxs)('div', {
                      className: s()(m.attachmentPreview, m.attachmentPreviewVideo),
                      children: [
                          (0, l.jsx)(u.ZP, {
                              className: m.thumbnail,
                              src: E[0].proxy_url,
                              width: 56,
                              height: 56
                          }),
                          (0, l.jsx)(o.g8d, {
                              className: m.playIcon,
                              size: 'md',
                              color: 'white'
                          })
                      ]
                  }))
                : C > 0
                  ? (L = (0, l.jsx)('div', {
                        className: m.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: E[0].proxy_url,
                            width: 56,
                            height: 56
                        })
                    }))
                  : (null === (N = p[0]) || void 0 === N ? void 0 : null === (v = N.thumbnail) || void 0 === v ? void 0 : v.proxyURL) != null &&
                    (L = (0, l.jsx)('div', {
                        className: m.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: p[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56
                        })
                    }));
    }
    return (
        C > 1 &&
            null != L &&
            (L = (0, l.jsxs)('div', {
                className: m.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: L
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: m.overflowCount,
                        variant: 'text-xs/semibold',
                        color: 'text-normal',
                        children: ['+', C - 1]
                    })
                ]
            })),
        (0, l.jsxs)('div', {
            className: m.forwardPreview,
            children: [
                (0, l.jsx)('div', { className: m.quote }),
                (0, l.jsxs)('div', {
                    className: m.contentWrapper,
                    children: [
                        I &&
                            (0, l.jsx)(h.ZP, {
                                className: s()(m.forwardPreviewMessage, C > 0 && m.hasAttachments),
                                message: t,
                                content: S
                            }),
                        C > 0 &&
                            (0, l.jsxs)('div', {
                                className: m.attachmentRow,
                                children: [
                                    null != b &&
                                        (0, l.jsx)(b, {
                                            size: 'custom',
                                            width: I ? 18 : 20,
                                            color: o.TVs.colors.TEXT_LOW_CONTRAST
                                        }),
                                    null != x &&
                                        (0, l.jsx)(o.Text, {
                                            variant: I ? 'text-sm/medium' : 'text-md/medium',
                                            color: 'text-low-contrast',
                                            children: x
                                        })
                                ]
                            })
                    ]
                }),
                L
            ]
        })
    );
}
