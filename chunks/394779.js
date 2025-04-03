n.d(t, { s: () => O });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(481060),
    s = n(346610),
    c = n(868643),
    u = n(912332),
    d = n(701865),
    f = n(388032),
    p = n(919399);
function _() {
    (0, l.Mr3)(d.U);
}
function h(e) {
    let { className: t, message: n, target: o, onClick: s } = e,
        c = i.useCallback(() => {
            if ((null == s || s(), 'embed' === o.type))
                return void (0, u.l8)({
                    message: n,
                    source: 'media-viewer',
                    forwardOptions: { onlyEmbedIndices: [o.embedIndex] },
                    onRequestSent: _
                });
            (0, u.l8)({
                message: n,
                source: 'media-viewer',
                forwardOptions: { onlyAttachmentIds: [o.attachmentId] },
                onRequestSent: _
            });
        }, [n, o, s]);
    return (0, r.jsx)(l.P3F, {
        className: a()(p.container, t),
        onClick: c,
        children: (0, r.jsx)(l.Text, {
            className: p.text,
            variant: 'text-sm/medium',
            color: 'always-white',
            children: f.NW.string(f.t.I3ltXF)
        })
    });
}
function O(e, t, n) {
    let { canForwardMessages: i } = (0, s.WT)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return i && (0, c.h)(e)
        ? (i) => {
              let { className: o } = i;
              return (0, r.jsx)(h, {
                  className: o,
                  message: e,
                  target: t,
                  onClick: n
              });
          }
        : () => null;
}
