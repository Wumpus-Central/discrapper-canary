var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(481060),
    u = r(661824),
    c = r(913663),
    d = r(268350),
    f = r(419922),
    _ = r(388032),
    h = r(573101);
function p(e) {
    var n;
    let { channelId: r, chatInputType: i } = e,
        [p, m] = s.useState(null),
        g = (0, o.e7)([c.Z], () => c.Z.getStickerPreview(r, i.drafts.type));
    return (null === (n = i.stickers) || void 0 === n ? void 0 : n.allowSending) && null != g && 0 !== g.length
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)('div', {
                      className: h.stickerPreviews,
                      children: g.map((e) =>
                          (0, a.jsxs)(
                              'div',
                              {
                                  className: h.stickerPreviewContainer,
                                  children: [
                                      (0, a.jsx)(l.Clickable, {
                                          onFocus: () => m(e.id),
                                          onBlur: () => m(null),
                                          className: h.closeButton,
                                          'aria-label': _.intl.formatToPlainString(_.t.BGAQRU, { name: e.name }),
                                          onClick: () => (0, d.qB)(r, i.drafts.type),
                                          children: (0, a.jsx)('div', {
                                              className: h.closeIconContainer,
                                              children: (0, a.jsx)(l.CircleXIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: h.closeIcon
                                              })
                                          })
                                      }),
                                      (0, a.jsx)(f.ZP, {
                                          isInteracting: p === e.id,
                                          className: h.stickerPreview,
                                          size: 48,
                                          sticker: e
                                      })
                                  ]
                              },
                              e.id
                          )
                      )
                  }),
                  (0, a.jsx)(u.Z, { className: h.stickerPreviewDivider })
              ]
          })
        : null;
}
n.Z = s.memo(p);
