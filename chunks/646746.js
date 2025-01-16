n.d(t, {
    O: function () {
        return E;
    }
});
var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n(481060),
    c = n(686546),
    u = n(124347),
    d = n(499376),
    h = n(937889),
    f = n(930282),
    _ = n(318616),
    g = n(388032),
    m = n(178837);
function E(e) {
    let { message: t, forwardOptions: n, channel: a } = e,
        {
            attachments: E,
            embeds: I,
            hasContent: p,
            contentMessage: S
        } = (0, _.c)({
            message: t,
            channel: a,
            forwardOptions: n
        }),
        A = i.useMemo(
            () =>
                p
                    ? (0, h.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: S
                      }).content
                    : null,
            [S, p, t]
        ),
        C = E.length,
        v = null,
        L = null,
        T = null;
    if (C > 0 || I.length > 0) {
        var b, N, x, P;
        let e = (0, s.countBy)(E, (e) => (0, d.aw)(e, !0)),
            t = null !== (x = e.IMAGE) && void 0 !== x ? x : 0,
            n = null !== (P = e.VIDEO) && void 0 !== P ? P : 0;
        t > 0 && n > 0
            ? ((v = g.intl.formatToPlainString(g.t.Lr0Toq, {
                  image_count: t,
                  video_count: n
              })),
              (L = o.ImagesIcon))
            : n > 0
              ? ((v = g.intl.formatToPlainString(g.t.SJ6pPT, { count: n })), (L = o.CirclePlayIcon))
              : t > 0
                ? ((v = g.intl.formatToPlainString(g.t.h4pFfX, { count: t })), (L = 1 === t ? o.ImageIcon : o.ImagesIcon))
                : ((v = g.intl.formatToPlainString(g.t['89ihS0'], { count: C })), (L = o.AttachmentIcon)),
            n > 0 && C === n
                ? (T = (0, l.jsxs)('div', {
                      className: r()(m.attachmentPreview, m.attachmentPreviewVideo),
                      children: [
                          (0, l.jsx)(u.ZP, {
                              className: m.thumbnail,
                              src: E[0].proxy_url,
                              width: 56,
                              height: 56
                          }),
                          (0, l.jsx)(o.CirclePlayIcon, {
                              className: m.playIcon,
                              size: 'md',
                              color: 'white'
                          })
                      ]
                  }))
                : C > 0
                  ? (T = (0, l.jsx)('div', {
                        className: m.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: E[0].proxy_url,
                            width: 56,
                            height: 56
                        })
                    }))
                  : (null === (N = I[0]) || void 0 === N ? void 0 : null === (b = N.thumbnail) || void 0 === b ? void 0 : b.proxyURL) != null &&
                    (T = (0, l.jsx)('div', {
                        className: m.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: I[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56
                        })
                    }));
    }
    return (
        C > 1 &&
            null != T &&
            (T = (0, l.jsxs)('div', {
                className: m.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: T
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
                        p &&
                            (0, l.jsx)(f.ZP, {
                                className: r()(m.forwardPreviewMessage, C > 0 && m.hasAttachments),
                                message: t,
                                content: A
                            }),
                        C > 0 &&
                            (0, l.jsxs)('div', {
                                className: m.attachmentRow,
                                children: [
                                    null != L &&
                                        (0, l.jsx)(L, {
                                            size: 'custom',
                                            width: p ? 18 : 20,
                                            color: o.tokens.colors.TEXT_LOW_CONTRAST
                                        }),
                                    null != v &&
                                        (0, l.jsx)(o.Text, {
                                            variant: p ? 'text-sm/medium' : 'text-md/medium',
                                            color: 'text-low-contrast',
                                            children: v
                                        })
                                ]
                            })
                    ]
                }),
                T
            ]
        })
    );
}
