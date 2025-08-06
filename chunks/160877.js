(n.d(t, {
    $: () => O,
    s: () => y
}),
    n(953529));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(470167),
    l = n(82659),
    c = n(572691),
    u = n(70097),
    d = n(406432),
    f = n(584656),
    _ = n(247206),
    p = n(719548),
    h = n(388032),
    m = n(580297);
let g = (e) => {
        let { attachment: t } = e,
            { url: n, description: i } = t;
        return null == n
            ? null
            : (0, r.jsx)(b, {
                  url: n,
                  description: i
              });
    },
    E = (e) => {
        var t, n, i;
        let { embed: o } = e;
        if (!p.n2.has(o.type)) return null;
        let a = void 0 !== o.video && o.type !== s.h.GIFV ? o.video.url : null != (i = null == (t = o.thumbnail) ? void 0 : t.url) ? i : null == (n = o.image) ? void 0 : n.url;
        return null == a ? null : (0, r.jsx)(b, { url: a });
    },
    b = (e) => {
        let { url: t, description: n } = e,
            i = (0, d.cb)(t);
        return (0, r.jsx)('div', {
            className: m.mediaContainer,
            children: i
                ? (0, r.jsx)(u.Z, {
                      className: a()(m.video, m.media),
                      controls: !0,
                      src: t
                  })
                : (0, r.jsx)('img', {
                      className: a()(m.image, m.media),
                      src: t,
                      alt: n
                  })
        });
    };
function y(e) {
    (c.Z.pop(),
        (0, f.t)({
            id: 'explicit-media-false-positive-modal',
            text: h.intl.string(h.t.gFsTKi)
        }),
        e());
}
function O(e) {
    let { channelId: t, messageId: n, isReportFalsePositiveLoading: o, analyticsContext: a, attachmentPreview: s, embedPreview: c, onConfirmPress: u, transitionState: d, onClose: f } = e,
        p = i.useCallback(() => {
            ((0, _.aP)({
                action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: a
            }),
                f());
        }, [t, n, a, f]),
        m = i.useCallback(() => {
            (null == u || u(),
                (0, _.aP)({
                    action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: a
                }));
        }, [t, n, a, u]);
    return (
        i.useEffect(() => {
            (0, _.aP)({
                action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                channelId: t,
                messageId: n,
                context: a
            });
        }, [t, n, a]),
        (0, r.jsxs)(l.Modal, {
            transitionState: d,
            onClose: f,
            title: h.intl.string(h.t.TPpVkJ),
            subtitle: h.intl.string(h.t['z4du/P']),
            actions: [
                {
                    text: h.intl.string(h.t['ETE/oK']),
                    onClick: p,
                    variant: 'secondary',
                    disabled: o
                },
                {
                    text: h.intl.string(h.t['cY+Ooa']),
                    onClick: m,
                    loading: o,
                    disabled: o
                }
            ],
            children: [null != s && (0, r.jsx)(g, { attachment: s }), null != c && (0, r.jsx)(E, { embed: c })]
        })
    );
}
