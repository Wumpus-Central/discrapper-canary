n.d(t, {
    $: () => O,
    s: () => x
}),
    n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(470167),
    s = n(481060),
    c = n(572691),
    d = n(313201),
    u = n(70097),
    p = n(406432),
    m = n(584656),
    f = n(247206),
    h = n(719548),
    g = n(388032),
    _ = n(859379);
let b = (e) => {
        let { attachment: t } = e,
            { url: n, description: i } = t;
        return null == n
            ? null
            : (0, r.jsx)(y, {
                  url: n,
                  description: i
              });
    },
    v = (e) => {
        var t, n, i;
        let { embed: a } = e;
        if (!h.n2.has(a.type)) return null;
        let o = void 0 !== a.video && a.type !== l.h.GIFV ? a.video.url : null !== (i = null === (t = a.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== i ? i : null === (n = a.image) || void 0 === n ? void 0 : n.url;
        return null == o ? null : (0, r.jsx)(y, { url: o });
    },
    y = (e) => {
        let { url: t, description: n } = e,
            i = (0, p.cb)(t);
        return (0, r.jsx)('div', {
            className: _.mediaContainer,
            children: i
                ? (0, r.jsx)(u.Z, {
                      className: o()(_.video, _.media),
                      controls: !0,
                      src: t
                  })
                : (0, r.jsx)('img', {
                      className: o()(_.image, _.media),
                      src: t,
                      alt: n
                  })
        });
    };
function x(e) {
    c.Z.pop(),
        (0, m.t)({
            id: 'explicit-media-false-positive-modal',
            text: g.NW.string(g.t.gFsTKi)
        }),
        e();
}
function O(e) {
    let { channelId: t, messageId: n, isReportFalsePositiveLoading: a, analyticsContext: o, attachmentPreview: l, embedPreview: c, onConfirmPress: u, transitionState: p, onClose: m } = e,
        h = (0, d.Dt)(),
        y = i.useCallback(() => {
            (0, f.aP)({
                action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: o
            }),
                m();
        }, [t, n, o, m]),
        x = i.useCallback(() => {
            null == u || u(),
                (0, f.aP)({
                    action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: o
                });
        }, [t, n, o, u]);
    return (
        i.useEffect(() => {
            (0, f.aP)({
                action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                channelId: t,
                messageId: n,
                context: o
            });
        }, [t, n, o]),
        (0, r.jsxs)(s.Y0X, {
            transitionState: p,
            'aria-labelledby': h,
            size: s.CgR.SMALL,
            children: [
                (0, r.jsxs)(s.hzk, {
                    children: [
                        (0, r.jsx)(s.olH, {
                            onClick: y,
                            className: _.closeButton
                        }),
                        (0, r.jsx)(s.X6q, {
                            id: h,
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            className: _.header,
                            children: g.NW.string(g.t.TPpVkJ)
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: _.subheader,
                            children: g.NW.string(g.t.gg5Dp6)
                        }),
                        null != l && (0, r.jsx)(b, { attachment: l }),
                        null != c && (0, r.jsx)(v, { embed: c })
                    ]
                }),
                (0, r.jsxs)(s.mzw, {
                    children: [
                        (0, r.jsx)(s.zxk, {
                            className: _.button,
                            disabled: a,
                            submitting: a,
                            size: s.zxk.Sizes.MEDIUM,
                            color: s.zxk.Colors.BRAND,
                            onClick: x,
                            children: g.NW.string(g.t['cY+Ooa'])
                        }),
                        (0, r.jsx)(s.zxk, {
                            className: _.button,
                            disabled: a,
                            color: s.zxk.Colors.TRANSPARENT,
                            size: s.zxk.Sizes.MEDIUM,
                            onClick: y,
                            children: g.NW.string(g.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
