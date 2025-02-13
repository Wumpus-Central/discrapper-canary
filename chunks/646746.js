n.d(t, { O: () => f });
var a = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    r = n(392711),
    o = n(481060),
    c = n(686546),
    d = n(124347),
    u = n(499376),
    m = n(937889),
    _ = n(930282),
    h = n(318616),
    g = n(388032),
    p = n(477530);
function f(e) {
    let { message: t, forwardOptions: n, channel: i } = e,
        {
            attachments: f,
            embeds: E,
            hasContent: I,
            contentMessage: C
        } = (0, h.c)({
            message: t,
            channel: i,
            forwardOptions: n
        }),
        x = l.useMemo(
            () =>
                I
                    ? (0, m.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: C
                      }).content
                    : null,
            [C, I, t]
        ),
        A = f.length,
        S = null,
        T = null,
        v = null;
    if (A > 0 || E.length > 0) {
        var b, L, y, N;
        let e = (0, r.countBy)(f, (e) => (0, u.aw)(e, !0)),
            t = null !== (y = e.IMAGE) && void 0 !== y ? y : 0,
            n = null !== (N = e.VIDEO) && void 0 !== N ? N : 0;
        t > 0 && n > 0
            ? ((S = g.intl.formatToPlainString(g.t.Lr0Toq, {
                  image_count: t,
                  video_count: n
              })),
              (T = o.Ka2))
            : n > 0
              ? ((S = g.intl.formatToPlainString(g.t.SJ6pPT, { count: n })), (T = o.g8d))
              : t > 0
                ? ((S = g.intl.formatToPlainString(g.t.h4pFfX, { count: t })), (T = 1 === t ? o.XBm : o.Ka2))
                : ((S = g.intl.formatToPlainString(g.t['89ihS0'], { count: A })), (T = o.Ujz)),
            n > 0 && A === n
                ? (v = (0, a.jsxs)('div', {
                      className: s()(p.attachmentPreview, p.attachmentPreviewVideo),
                      children: [
                          (0, a.jsx)(d.ZP, {
                              className: p.thumbnail,
                              src: f[0].proxy_url,
                              width: 56,
                              height: 56
                          }),
                          (0, a.jsx)(o.g8d, {
                              className: p.playIcon,
                              size: 'md',
                              color: 'white'
                          })
                      ]
                  }))
                : A > 0
                  ? (v = (0, a.jsx)('div', {
                        className: p.attachmentPreview,
                        children: (0, a.jsx)(d.ZP, {
                            src: f[0].proxy_url,
                            width: 56,
                            height: 56
                        })
                    }))
                  : (null === (L = E[0]) || void 0 === L ? void 0 : null === (b = L.thumbnail) || void 0 === b ? void 0 : b.proxyURL) != null &&
                    (v = (0, a.jsx)('div', {
                        className: p.attachmentPreview,
                        children: (0, a.jsx)(d.ZP, {
                            src: E[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56
                        })
                    }));
    }
    return (
        A > 1 &&
            null != v &&
            (v = (0, a.jsxs)('div', {
                className: p.attachmentPreviewOverflow,
                children: [
                    (0, a.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: v
                    }),
                    (0, a.jsxs)(o.Text, {
                        className: p.overflowCount,
                        variant: 'text-xs/semibold',
                        color: 'text-normal',
                        children: ['+', A - 1]
                    })
                ]
            })),
        (0, a.jsxs)('div', {
            className: p.forwardPreview,
            children: [
                (0, a.jsx)('div', { className: p.quote }),
                (0, a.jsxs)('div', {
                    className: p.contentWrapper,
                    children: [
                        I &&
                            (0, a.jsx)(_.ZP, {
                                className: s()(p.forwardPreviewMessage, A > 0 && p.hasAttachments),
                                message: t,
                                content: x
                            }),
                        A > 0 &&
                            (0, a.jsxs)('div', {
                                className: p.attachmentRow,
                                children: [
                                    null != T &&
                                        (0, a.jsx)(T, {
                                            size: 'custom',
                                            width: I ? 18 : 20,
                                            color: o.TVs.colors.TEXT_LOW_CONTRAST
                                        }),
                                    null != S &&
                                        (0, a.jsx)(o.Text, {
                                            variant: I ? 'text-sm/medium' : 'text-md/medium',
                                            color: 'text-low-contrast',
                                            children: S
                                        })
                                ]
                            })
                    ]
                }),
                v
            ]
        })
    );
}
