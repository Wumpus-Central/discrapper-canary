n.d(t, {
    $: () => v,
    s: () => E
}),
    n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(470167),
    s = n(481060),
    c = n(572691),
    u = n(313201),
    d = n(70097),
    p = n(406432),
    m = n(584656),
    f = n(247206),
    h = n(719548),
    g = n(388032),
    _ = n(580297);
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
    x = (e) => {
        var t, n, i;
        let { embed: l } = e;
        if (!h.n2.has(l.type)) return null;
        let a = void 0 !== l.video && l.type !== o.h.GIFV ? l.video.url : null != (i = null == (t = l.thumbnail) ? void 0 : t.url) ? i : null == (n = l.image) ? void 0 : n.url;
        return null == a ? null : (0, r.jsx)(y, { url: a });
    },
    y = (e) => {
        let { url: t, description: n } = e,
            i = (0, p.cb)(t);
        return (0, r.jsx)('div', {
            className: _.mediaContainer,
            children: i
                ? (0, r.jsx)(d.Z, {
                      className: a()(_.video, _.media),
                      controls: !0,
                      src: t
                  })
                : (0, r.jsx)('img', {
                      className: a()(_.image, _.media),
                      src: t,
                      alt: n
                  })
        });
    };
function E(e) {
    c.Z.pop(),
        (0, m.t)({
            id: 'explicit-media-false-positive-modal',
            text: g.NW.string(g.t.gFsTKi)
        }),
        e();
}
function v(e) {
    let { channelId: t, messageId: n, isReportFalsePositiveLoading: l, analyticsContext: a, attachmentPreview: o, embedPreview: c, onConfirmPress: d, transitionState: p, onClose: m } = e,
        h = (0, u.Dt)(),
        y = i.useCallback(() => {
            (0, f.aP)({
                action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: a
            }),
                m();
        }, [t, n, a, m]),
        E = i.useCallback(() => {
            null == d || d(),
                (0, f.aP)({
                    action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: a
                });
        }, [t, n, a, d]);
    return (
        i.useEffect(() => {
            (0, f.aP)({
                action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                channelId: t,
                messageId: n,
                context: a
            });
        }, [t, n, a]),
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
                        null != o && (0, r.jsx)(b, { attachment: o }),
                        null != c && (0, r.jsx)(x, { embed: c })
                    ]
                }),
                (0, r.jsxs)(s.mzw, {
                    children: [
                        (0, r.jsx)(s.zxk, {
                            className: _.button,
                            disabled: l,
                            submitting: l,
                            size: s.zxk.Sizes.MEDIUM,
                            color: s.zxk.Colors.BRAND,
                            onClick: E,
                            children: g.NW.string(g.t['cY+Ooa'])
                        }),
                        (0, r.jsx)(s.zxk, {
                            className: _.button,
                            disabled: l,
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
