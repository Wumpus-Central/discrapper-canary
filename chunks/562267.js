n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(661824),
    l = n(913663),
    u = n(268350),
    c = n(419922),
    d = n(388032),
    f = n(24631);
function _(e) {
    var t;
    let { channelId: n, chatInputType: _ } = e,
        [p, h] = r.useState(null),
        m = (0, a.e7)([l.Z], () => l.Z.getStickerPreview(n, _.drafts.type));
    return (null === (t = _.stickers) || void 0 === t ? void 0 : t.allowSending) && null != m && 0 !== m.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)('div', {
                      className: f.stickerPreviews,
                      children: m.map((e) =>
                          (0, i.jsxs)(
                              'div',
                              {
                                  className: f.stickerPreviewContainer,
                                  children: [
                                      (0, i.jsx)(s.P3F, {
                                          onFocus: () => h(e.id),
                                          onBlur: () => h(null),
                                          className: f.closeButton,
                                          'aria-label': d.intl.formatToPlainString(d.t.BGAQRU, { name: e.name }),
                                          onClick: () => (0, u.qB)(n, _.drafts.type),
                                          children: (0, i.jsx)('div', {
                                              className: f.closeIconContainer,
                                              children: (0, i.jsx)(s.k$p, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: f.closeIcon
                                              })
                                          })
                                      }),
                                      (0, i.jsx)(c.ZP, {
                                          isInteracting: p === e.id,
                                          className: f.stickerPreview,
                                          size: 48,
                                          sticker: e
                                      })
                                  ]
                              },
                              e.id
                          )
                      )
                  }),
                  (0, i.jsx)(o.Z, { className: f.stickerPreviewDivider })
              ]
          })
        : null;
}
let p = r.memo(_);
