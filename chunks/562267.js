n.d(t, { Z: () => p }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(661824),
    l = n(913663),
    c = n(268350),
    u = n(419922),
    d = n(388032),
    _ = n(619914);
function f(e) {
    var t;
    let { channelId: n, chatInputType: f } = e,
        [p, h] = i.useState(null),
        m = (0, a.e7)([l.Z], () => l.Z.getStickerPreview(n, f.drafts.type));
    return (null == (t = f.stickers) ? void 0 : t.allowSending) && null != m && 0 !== m.length
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', {
                      className: _.stickerPreviews,
                      children: m.map((e) =>
                          (0, r.jsxs)(
                              'div',
                              {
                                  className: _.stickerPreviewContainer,
                                  children: [
                                      (0, r.jsx)(o.P3F, {
                                          onFocus: () => h(e.id),
                                          onBlur: () => h(null),
                                          className: _.closeButton,
                                          'aria-label': d.intl.formatToPlainString(d.t.BGAQRU, { name: e.name }),
                                          onClick: () => (0, c.qB)(n, f.drafts.type),
                                          children: (0, r.jsx)('div', {
                                              className: _.closeIconContainer,
                                              children: (0, r.jsx)(o.k$p, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: _.closeIcon
                                              })
                                          })
                                      }),
                                      (0, r.jsx)(u.Z, {
                                          isInteracting: p === e.id,
                                          className: _.stickerPreview,
                                          size: 48,
                                          sticker: e
                                      })
                                  ]
                              },
                              e.id
                          )
                      )
                  }),
                  (0, r.jsx)(s.Z, { className: _.stickerPreviewDivider })
              ]
          })
        : null;
}
let p = i.memo(f);
