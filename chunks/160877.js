(n.d(t, {
    $: () => O,
    s: () => v
}),
    n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(470167),
    s = n(755721),
    c = n(481060),
    u = n(572691),
    d = n(313201),
    p = n(70097),
    m = n(406432),
    f = n(584656),
    _ = n(247206),
    g = n(470734),
    h = n(719548),
    b = n(388032),
    E = n(580297);
let y = (e) => {
        let { attachment: t } = e,
            { url: n, description: i } = t;
        return null == n
            ? null
            : (0, r.jsx)(x, {
                  url: n,
                  description: i
              });
    },
    C = (e) => {
        var t, n, i;
        let { embed: l } = e;
        if (!h.n2.has(l.type)) return null;
        let a = void 0 !== l.video && l.type !== o.h.GIFV ? l.video.url : null != (i = null == (t = l.thumbnail) ? void 0 : t.url) ? i : null == (n = l.image) ? void 0 : n.url;
        return null == a ? null : (0, r.jsx)(x, { url: a });
    },
    x = (e) => {
        let { url: t, description: n } = e,
            i = (0, m.cb)(t);
        return (0, r.jsx)('div', {
            className: E.mediaContainer,
            children: i
                ? (0, r.jsx)(p.Z, {
                      className: a()(E.video, E.media),
                      controls: !0,
                      src: t
                  })
                : (0, r.jsx)('img', {
                      className: a()(E.image, E.media),
                      src: t,
                      alt: n
                  })
        });
    };
function v(e) {
    (u.Z.pop(),
        (0, f.t)({
            id: 'explicit-media-false-positive-modal',
            text: b.intl.string(b.t.gFsTKi)
        }),
        e());
}
function O(e) {
    let { channelId: t, messageId: n, isReportFalsePositiveLoading: l, analyticsContext: a, attachmentPreview: o, embedPreview: u, onConfirmPress: p, transitionState: m, onClose: f } = e,
        h = (0, d.Dt)(),
        x = (0, g.pn)('ExplicitMediaFalsePositiveModal'),
        v = i.useCallback(() => {
            ((0, _.aP)({
                action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: a
            }),
                f());
        }, [t, n, a, f]),
        O = i.useCallback(() => {
            (null == p || p(),
                (0, _.aP)({
                    action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: a
                }));
        }, [t, n, a, p]);
    i.useEffect(() => {
        (0, _.aP)({
            action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
            channelId: t,
            messageId: n,
            context: a
        });
    }, [t, n, a]);
    let j = i.useMemo(() => (x ? b.intl.string(b.t['z4du/P']) : b.intl.string(b.t.gg5Dp6)), [x]);
    return (0, r.jsxs)(c.Y0X, {
        transitionState: m,
        'aria-labelledby': h,
        size: c.CgR.SMALL,
        parentComponent: 'ExplicitMediaFalsePositiveModal',
        children: [
            (0, r.jsxs)(c.hzk, {
                children: [
                    (0, r.jsx)(c.olH, {
                        onClick: v,
                        className: E.closeButton
                    }),
                    (0, r.jsx)(c.X6q, {
                        id: h,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        className: E.header,
                        children: b.intl.string(b.t.TPpVkJ)
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: E.subheader,
                        children: j
                    }),
                    null != o && (0, r.jsx)(y, { attachment: o }),
                    null != u && (0, r.jsx)(C, { embed: u })
                ]
            }),
            (0, r.jsxs)(c.mzw, {
                children: [
                    (0, r.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: E.button,
                        children: (0, r.jsx)(c.zxk, {
                            variant: 'primary',
                            text: b.intl.string(b.t['cY+Ooa']),
                            disabled: l,
                            loading: l,
                            onClick: O
                        })
                    }),
                    (0, r.jsx)(s.zx, {
                        className: E.button,
                        disabled: l,
                        color: s.zx.Colors.TRANSPARENT,
                        size: s.zx.Sizes.MEDIUM,
                        onClick: v,
                        children: b.intl.string(b.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
