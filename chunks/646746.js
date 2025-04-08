n.d(t, { O: () => p });
var l = n(200651),
    r = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(392711),
    o = n(481060),
    c = n(686546),
    u = n(124347),
    d = n(499376),
    f = n(937889),
    h = n(930282),
    _ = n(318616),
    g = n(388032),
    m = n(28447);
function p(e) {
    let { message: t, forwardOptions: n, channel: a } = e,
        {
            attachments: p,
            embeds: b,
            hasContent: E,
            contentMessage: y
        } = (0, _.c)({
            message: t,
            channel: a,
            forwardOptions: n
        }),
        I = r.useMemo(
            () =>
                E
                    ? (0, f.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: y
                      }).content
                    : null,
            [y, E, t]
        ),
        S = p.length,
        A = null,
        O = null,
        N = null;
    if (S > 0 || b.length > 0) {
        var v, x, C, P;
        let e = (0, s.countBy)(p, (e) => (0, d.aw)(e, !0)),
            t = null != (C = e.IMAGE) ? C : 0,
            n = null != (P = e.VIDEO) ? P : 0;
        t > 0 && n > 0
            ? ((A = g.NW.formatToPlainString(g.t.Lr0Toq, {
                  image_count: t,
                  video_count: n
              })),
              (O = o.Ka2))
            : n > 0
              ? ((A = g.NW.formatToPlainString(g.t.SJ6pPT, { count: n })), (O = o.g8d))
              : t > 0
                ? ((A = g.NW.formatToPlainString(g.t.h4pFfX, { count: t })), (O = 1 === t ? o.XBm : o.Ka2))
                : ((A = g.NW.formatToPlainString(g.t['89ihS0'], { count: S })), (O = o.Ujz)),
            n > 0 && S === n
                ? (N = (0, l.jsxs)('div', {
                      className: i()(m.attachmentPreview, m.attachmentPreviewVideo),
                      children: [
                          (0, l.jsx)(u.ZP, {
                              className: m.thumbnail,
                              src: p[0].proxy_url,
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
                : S > 0
                  ? (N = (0, l.jsx)('div', {
                        className: m.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: p[0].proxy_url,
                            width: 56,
                            height: 56
                        })
                    }))
                  : (null == (x = b[0]) || null == (v = x.thumbnail) ? void 0 : v.proxyURL) != null &&
                    (N = (0, l.jsx)('div', {
                        className: m.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: b[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56
                        })
                    }));
    }
    return (
        S > 1 &&
            null != N &&
            (N = (0, l.jsxs)('div', {
                className: m.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: N
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: m.overflowCount,
                        variant: 'text-xs/semibold',
                        color: 'text-normal',
                        children: ['+', S - 1]
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
                        E &&
                            (0, l.jsx)(h.ZP, {
                                className: i()(m.forwardPreviewMessage, S > 0 && m.hasAttachments),
                                message: t,
                                content: I
                            }),
                        S > 0 &&
                            (0, l.jsxs)('div', {
                                className: m.attachmentRow,
                                children: [
                                    null != O &&
                                        (0, l.jsx)(O, {
                                            size: 'custom',
                                            width: E ? 18 : 20,
                                            color: o.TVs.colors.TEXT_LOW_CONTRAST
                                        }),
                                    null != A &&
                                        (0, l.jsx)(o.Text, {
                                            variant: E ? 'text-sm/medium' : 'text-md/medium',
                                            color: 'text-low-contrast',
                                            children: A
                                        })
                                ]
                            })
                    ]
                }),
                N
            ]
        })
    );
}
