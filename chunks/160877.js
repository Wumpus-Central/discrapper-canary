(n.d(t, {
    $: () => v,
    s: () => x
}),
    n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(470167),
    s = n(82659),
    c = n(572691),
    u = n(70097),
    d = n(406432),
    p = n(584656),
    m = n(247206),
    f = n(470734),
    g = n(719548),
    _ = n(388032),
    h = n(580297);
let b = (e) => {
        let { attachment: t } = e,
            { url: n, description: i } = t;
        return null == n
            ? null
            : (0, r.jsx)(C, {
                  url: n,
                  description: i
              });
    },
    E = (e) => {
        var t, n, i;
        let { embed: l } = e;
        if (!g.n2.has(l.type)) return null;
        let a = void 0 !== l.video && l.type !== o.h.GIFV ? l.video.url : null != (i = null == (t = l.thumbnail) ? void 0 : t.url) ? i : null == (n = l.image) ? void 0 : n.url;
        return null == a ? null : (0, r.jsx)(C, { url: a });
    },
    C = (e) => {
        let { url: t, description: n } = e,
            i = (0, d.cb)(t);
        return (0, r.jsx)('div', {
            className: h.mediaContainer,
            children: i
                ? (0, r.jsx)(u.Z, {
                      className: a()(h.video, h.media),
                      controls: !0,
                      src: t
                  })
                : (0, r.jsx)('img', {
                      className: a()(h.image, h.media),
                      src: t,
                      alt: n
                  })
        });
    };
function x(e) {
    (c.Z.pop(),
        (0, p.t)({
            id: 'explicit-media-false-positive-modal',
            text: _.intl.string(_.t.gFsTKi)
        }),
        e());
}
function v(e) {
    let { channelId: t, messageId: n, isReportFalsePositiveLoading: l, analyticsContext: a, attachmentPreview: o, embedPreview: c, onConfirmPress: u, transitionState: d, onClose: p } = e,
        g = (0, f.pn)('ExplicitMediaFalsePositiveModal'),
        h = i.useCallback(() => {
            ((0, m.aP)({
                action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: a
            }),
                p());
        }, [t, n, a, p]),
        C = i.useCallback(() => {
            (null == u || u(),
                (0, m.aP)({
                    action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: a
                }));
        }, [t, n, a, u]);
    i.useEffect(() => {
        (0, m.aP)({
            action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
            channelId: t,
            messageId: n,
            context: a
        });
    }, [t, n, a]);
    let x = i.useMemo(() => (g ? _.intl.string(_.t['z4du/P']) : _.intl.string(_.t.gg5Dp6)), [g]);
    return (0, r.jsxs)(s.Modal, {
        transitionState: d,
        onClose: p,
        title: _.intl.string(_.t.TPpVkJ),
        subtitle: x,
        actions: [
            {
                text: _.intl.string(_.t['ETE/oK']),
                onClick: h,
                variant: 'secondary',
                disabled: l
            },
            {
                text: _.intl.string(_.t['cY+Ooa']),
                onClick: C,
                loading: l,
                disabled: l
            }
        ],
        children: [null != o && (0, r.jsx)(b, { attachment: o }), null != c && (0, r.jsx)(E, { embed: c })]
    });
}
