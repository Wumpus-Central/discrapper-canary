t.d(n, {
    s: function () {
        return m;
    }
});
var a = t(200651),
    r = t(192379),
    i = t(120356),
    l = t.n(i),
    o = t(481060),
    s = t(346610),
    u = t(868643),
    c = t(912332),
    d = t(701865),
    f = t(388032),
    _ = t(923007);
function h() {
    (0, o.closeModal)(d.U);
}
function p(e) {
    let { className: n, message: t, target: i, onClick: s } = e,
        u = r.useCallback(() => {
            if ((null == s || s(), 'embed' === i.type)) {
                (0, c.l8)({
                    message: t,
                    source: 'media-viewer',
                    forwardOptions: { onlyEmbedIndices: [i.embedIndex] },
                    onRequestSent: h
                });
                return;
            }
            (0, c.l8)({
                message: t,
                source: 'media-viewer',
                forwardOptions: { onlyAttachmentIds: [i.attachmentId] },
                onRequestSent: h
            });
        }, [t, i, s]);
    return (0, a.jsx)(o.Clickable, {
        className: l()(_.container, n),
        onClick: u,
        children: (0, a.jsx)(o.Text, {
            className: _.text,
            variant: 'text-sm/medium',
            color: 'always-white',
            children: f.intl.string(f.t.I3ltXF)
        })
    });
}
function m(e, n, t) {
    let { canForwardMessages: r } = (0, s.WT)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return r && (0, u.h)(e)
        ? (r) => {
              let { className: i } = r;
              return (0, a.jsx)(p, {
                  className: i,
                  message: e,
                  target: n,
                  onClick: t
              });
          }
        : () => null;
}
