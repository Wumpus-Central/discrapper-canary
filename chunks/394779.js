t.d(n, { s: () => C });
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(481060),
    s = t(346610),
    c = t(868643),
    u = t(912332),
    d = t(701865),
    _ = t(388032),
    h = t(923007);
function f() {
    (0, o.Mr3)(d.U);
}
function p(e) {
    let { className: n, message: t, target: r, onClick: s } = e,
        c = i.useCallback(() => {
            if ((null == s || s(), 'embed' === r.type)) {
                (0, u.l8)({
                    message: t,
                    source: 'media-viewer',
                    forwardOptions: { onlyEmbedIndices: [r.embedIndex] },
                    onRequestSent: f
                });
                return;
            }
            (0, u.l8)({
                message: t,
                source: 'media-viewer',
                forwardOptions: { onlyAttachmentIds: [r.attachmentId] },
                onRequestSent: f
            });
        }, [t, r, s]);
    return (0, a.jsx)(o.P3F, {
        className: l()(h.container, n),
        onClick: c,
        children: (0, a.jsx)(o.Text, {
            className: h.text,
            variant: 'text-sm/medium',
            color: 'always-white',
            children: _.intl.string(_.t.I3ltXF)
        })
    });
}
function C(e, n, t) {
    let { canForwardMessages: i } = (0, s.WT)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return i && (0, c.h)(e)
        ? (i) => {
              let { className: r } = i;
              return (0, a.jsx)(p, {
                  className: r,
                  message: e,
                  target: n,
                  onClick: t
              });
          }
        : () => null;
}
