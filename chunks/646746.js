n.d(t, { O: () => f });
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(392711),
    o = n(481060),
    c = n(686546),
    u = n(124347),
    d = n(499376),
    m = n(937889),
    p = n(930282),
    h = n(318616),
    g = n(388032),
    _ = n(930042);
function f(e) {
    let { message: t, forwardOptions: n, channel: l } = e,
        {
            attachments: f,
            embeds: b,
            hasContent: y,
            contentMessage: E
        } = (0, h.c)({
            message: t,
            channel: l,
            forwardOptions: n
        }),
        I = r.useMemo(
            () =>
                y
                    ? (0, m.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: E
                      }).content
                    : null,
            [E, y, t]
        ),
        v = f.length,
        S = null,
        C = null,
        O = null;
    if (v > 0 || b.length > 0) {
        var x, A, N, T;
        let e = (0, s.countBy)(f, (e) => (0, d.aw)(e, !0)),
            t = null !== (N = e.IMAGE) && void 0 !== N ? N : 0,
            n = null !== (T = e.VIDEO) && void 0 !== T ? T : 0;
        t > 0 && n > 0
            ? ((S = g.NW.formatToPlainString(g.t.Lr0Toq, {
                  image_count: t,
                  video_count: n
              })),
              (C = o.Ka2))
            : n > 0
              ? ((S = g.NW.formatToPlainString(g.t.SJ6pPT, { count: n })), (C = o.g8d))
              : t > 0
                ? ((S = g.NW.formatToPlainString(g.t.h4pFfX, { count: t })), (C = 1 === t ? o.XBm : o.Ka2))
                : ((S = g.NW.formatToPlainString(g.t['89ihS0'], { count: v })), (C = o.Ujz)),
            n > 0 && v === n
                ? (O = (0, a.jsxs)('div', {
                      className: i()(_.attachmentPreview, _.attachmentPreviewVideo),
                      children: [
                          (0, a.jsx)(u.ZP, {
                              className: _.thumbnail,
                              src: f[0].proxy_url,
                              width: 56,
                              height: 56
                          }),
                          (0, a.jsx)(o.g8d, {
                              className: _.playIcon,
                              size: 'md',
                              color: 'white'
                          })
                      ]
                  }))
                : v > 0
                  ? (O = (0, a.jsx)('div', {
                        className: _.attachmentPreview,
                        children: (0, a.jsx)(u.ZP, {
                            src: f[0].proxy_url,
                            width: 56,
                            height: 56
                        })
                    }))
                  : (null === (A = b[0]) || void 0 === A ? void 0 : null === (x = A.thumbnail) || void 0 === x ? void 0 : x.proxyURL) != null &&
                    (O = (0, a.jsx)('div', {
                        className: _.attachmentPreview,
                        children: (0, a.jsx)(u.ZP, {
                            src: b[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56
                        })
                    }));
    }
    return (
        v > 1 &&
            null != O &&
            (O = (0, a.jsxs)('div', {
                className: _.attachmentPreviewOverflow,
                children: [
                    (0, a.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: O
                    }),
                    (0, a.jsxs)(o.Text, {
                        className: _.overflowCount,
                        variant: 'text-xs/semibold',
                        color: 'text-normal',
                        children: ['+', v - 1]
                    })
                ]
            })),
        (0, a.jsxs)('div', {
            className: _.forwardPreview,
            children: [
                (0, a.jsx)('div', { className: _.quote }),
                (0, a.jsxs)('div', {
                    className: _.contentWrapper,
                    children: [
                        y &&
                            (0, a.jsx)(p.ZP, {
                                className: i()(_.forwardPreviewMessage, v > 0 && _.hasAttachments),
                                message: t,
                                content: I
                            }),
                        v > 0 &&
                            (0, a.jsxs)('div', {
                                className: _.attachmentRow,
                                children: [
                                    null != C &&
                                        (0, a.jsx)(C, {
                                            size: 'custom',
                                            width: y ? 18 : 20,
                                            color: o.TVs.colors.TEXT_LOW_CONTRAST
                                        }),
                                    null != S &&
                                        (0, a.jsx)(o.Text, {
                                            variant: y ? 'text-sm/medium' : 'text-md/medium',
                                            color: 'text-low-contrast',
                                            children: S
                                        })
                                ]
                            })
                    ]
                }),
                O
            ]
        })
    );
}
