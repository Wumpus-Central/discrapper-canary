n.d(t, {
    $: () => O,
    s: () => v
}),
    n(953529);
var r = n(255367),
    i = n(73800),
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
    h = n(470734),
    g = n(719548),
    _ = n(388032),
    b = n(580297);
let E = (e) => {
        let { attachment: t } = e,
            { url: n, description: i } = t;
        return null == n
            ? null
            : (0, r.jsx)(x, {
                  url: n,
                  description: i
              });
    },
    y = (e) => {
        var t, n, i;
        let { embed: l } = e;
        if (!g.n2.has(l.type)) return null;
        let a = void 0 !== l.video && l.type !== o.h.GIFV ? l.video.url : null != (i = null == (t = l.thumbnail) ? void 0 : t.url) ? i : null == (n = l.image) ? void 0 : n.url;
        return null == a ? null : (0, r.jsx)(x, { url: a });
    },
    x = (e) => {
        let { url: t, description: n } = e,
            i = (0, p.cb)(t);
        return (0, r.jsx)('div', {
            className: b.mediaContainer,
            children: i
                ? (0, r.jsx)(d.Z, {
                      className: a()(b.video, b.media),
                      controls: !0,
                      src: t
                  })
                : (0, r.jsx)('img', {
                      className: a()(b.image, b.media),
                      src: t,
                      alt: n
                  })
        });
    };
function v(e) {
    c.Z.pop(),
        (0, m.t)({
            id: 'explicit-media-false-positive-modal',
            text: _.intl.string(_.t.gFsTKi)
        }),
        e();
}
function O(e) {
    let { channelId: t, messageId: n, isReportFalsePositiveLoading: l, analyticsContext: a, attachmentPreview: o, embedPreview: c, onConfirmPress: d, transitionState: p, onClose: m } = e,
        g = (0, u.Dt)(),
        x = (0, h.pn)('ExplicitMediaFalsePositiveModal'),
        v = i.useCallback(() => {
            (0, f.aP)({
                action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: a
            }),
                m();
        }, [t, n, a, m]),
        O = i.useCallback(() => {
            null == d || d(),
                (0, f.aP)({
                    action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: a
                });
        }, [t, n, a, d]);
    i.useEffect(() => {
        (0, f.aP)({
            action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
            channelId: t,
            messageId: n,
            context: a
        });
    }, [t, n, a]);
    let C = i.useMemo(() => (x ? _.intl.string(_.t['z4du/P']) : _.intl.string(_.t.gg5Dp6)), [x]);
    return (0, r.jsxs)(s.Y0X, {
        transitionState: p,
        'aria-labelledby': g,
        size: s.CgR.SMALL,
        parentComponent: 'ExplicitMediaFalsePositiveModal',
        children: [
            (0, r.jsxs)(s.hzk, {
                children: [
                    (0, r.jsx)(s.olH, {
                        onClick: v,
                        className: b.closeButton
                    }),
                    (0, r.jsx)(s.X6q, {
                        id: g,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        className: b.header,
                        children: _.intl.string(_.t.TPpVkJ)
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: b.subheader,
                        children: C
                    }),
                    null != o && (0, r.jsx)(E, { attachment: o }),
                    null != c && (0, r.jsx)(y, { embed: c })
                ]
            }),
            (0, r.jsxs)(s.mzw, {
                children: [
                    (0, r.jsx)(s.zxk, {
                        className: b.button,
                        disabled: l,
                        submitting: l,
                        size: s.zxk.Sizes.MEDIUM,
                        color: s.zxk.Colors.BRAND,
                        onClick: O,
                        children: _.intl.string(_.t['cY+Ooa'])
                    }),
                    (0, r.jsx)(s.zxk, {
                        className: b.button,
                        disabled: l,
                        color: s.zxk.Colors.TRANSPARENT,
                        size: s.zxk.Sizes.MEDIUM,
                        onClick: v,
                        children: _.intl.string(_.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
