n.d(t, { s: () => h });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(481060),
    s = n(868643),
    c = n(912332),
    u = n(701865),
    d = n(388032),
    f = n(919399);
function p() {
    (0, l.Mr3)(u.U);
}
function _(e) {
    let { className: t, message: n, target: o, onClick: s } = e,
        u = i.useCallback(() => {
            if ((null == s || s(), 'embed' === o.type))
                return void (0, c.l8)({
                    message: n,
                    source: 'media-viewer',
                    forwardOptions: { onlyEmbedIndices: [o.embedIndex] },
                    onRequestSent: p
                });
            (0, c.l8)({
                message: n,
                source: 'media-viewer',
                forwardOptions: { onlyAttachmentIds: [o.attachmentId] },
                onRequestSent: p
            });
        }, [n, o, s]);
    return (0, r.jsx)(l.P3F, {
        className: a()(f.container, t),
        onClick: u,
        children: (0, r.jsx)(l.Text, {
            className: f.text,
            variant: 'text-sm/medium',
            color: 'always-white',
            children: d.NW.string(d.t.I3ltXF)
        })
    });
}
function h(e, t, n) {
    return (0, s.h)(e)
        ? (i) => {
              let { className: o } = i;
              return (0, r.jsx)(_, {
                  className: o,
                  message: e,
                  target: t,
                  onClick: n
              });
          }
        : () => null;
}
