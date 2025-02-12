n.d(t, {
    $: () => I,
    s: () => E
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(470167),
    o = n(481060),
    c = n(572691),
    d = n(313201),
    u = n(70097),
    m = n(406432),
    _ = n(584656),
    h = n(247206),
    p = n(719548),
    g = n(388032),
    f = n(68092);
let x = (e) => {
        let { attachment: t } = e,
            { url: n, description: l } = t;
        return null == n
            ? null
            : (0, i.jsx)(v, {
                  url: n,
                  description: l
              });
    },
    C = (e) => {
        var t, n, l;
        let { embed: a } = e;
        if (!p.n2.has(a.type)) return null;
        let r = void 0 !== a.video && a.type !== s.h.GIFV ? a.video.url : null !== (l = null === (t = a.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== l ? l : null === (n = a.image) || void 0 === n ? void 0 : n.url;
        return null == r ? null : (0, i.jsx)(v, { url: r });
    },
    v = (e) => {
        let { url: t, description: n } = e,
            l = (0, m.cb)(t);
        return (0, i.jsx)('div', {
            className: f.mediaContainer,
            children: l
                ? (0, i.jsx)(u.Z, {
                      className: r()(f.video, f.media),
                      controls: !0,
                      src: t
                  })
                : (0, i.jsx)('img', {
                      className: r()(f.image, f.media),
                      src: t,
                      alt: n
                  })
        });
    };
function E(e) {
    c.Z.pop(),
        (0, _.t)({
            id: 'explicit-media-false-positive-modal',
            text: g.intl.string(g.t.gFsTKi)
        }),
        e();
}
function I(e) {
    let { channelId: t, messageId: n, isReportFalsePositiveLoading: a, analyticsContext: r, attachmentPreview: s, embedPreview: c, onConfirmPress: u, transitionState: m, onClose: _ } = e,
        p = (0, d.Dt)(),
        v = l.useCallback(() => {
            (0, h.aP)({
                action: h.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: r
            }),
                _();
        }, [t, n, r, _]),
        E = l.useCallback(() => {
            null == u || u(),
                (0, h.aP)({
                    action: h.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: r
                });
        }, [t, n, r, u]);
    return (
        l.useEffect(() => {
            (0, h.aP)({
                action: h.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                channelId: t,
                messageId: n,
                context: r
            });
        }, [t, n, r]),
        (0, i.jsxs)(o.Y0X, {
            transitionState: m,
            'aria-labelledby': p,
            size: o.CgR.SMALL,
            children: [
                (0, i.jsxs)(o.hzk, {
                    children: [
                        (0, i.jsx)(o.olH, {
                            onClick: v,
                            className: f.closeButton
                        }),
                        (0, i.jsx)(o.X6q, {
                            id: p,
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            className: f.header,
                            children: g.intl.string(g.t.TPpVkJ)
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: f.subheader,
                            children: g.intl.string(g.t.gg5Dp6)
                        }),
                        null != s && (0, i.jsx)(x, { attachment: s }),
                        null != c && (0, i.jsx)(C, { embed: c })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    children: [
                        (0, i.jsx)(o.zxk, {
                            className: f.button,
                            disabled: a,
                            submitting: a,
                            size: o.zxk.Sizes.MEDIUM,
                            color: o.zxk.Colors.BRAND,
                            onClick: E,
                            children: g.intl.string(g.t['cY+Ooa'])
                        }),
                        (0, i.jsx)(o.zxk, {
                            className: f.button,
                            disabled: a,
                            color: o.zxk.Colors.TRANSPARENT,
                            size: o.zxk.Sizes.MEDIUM,
                            onClick: v,
                            children: g.intl.string(g.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
