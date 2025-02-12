a.d(t, { Z: () => k }), a(47120);
var n = a(200651),
    i = a(192379),
    s = a(120356),
    o = a.n(s),
    l = a(481060),
    r = a(299206),
    c = a(346610),
    d = a(868643),
    u = a(912332),
    m = a(378409),
    _ = a(850908),
    p = a(695346),
    g = a(572004),
    h = a(424218),
    C = a(49012),
    S = a(358085),
    E = a(998502),
    T = a(254109),
    y = a(212459),
    v = a(369171),
    x = a(701865),
    f = a(388032),
    I = a(501082);
function M() {
    (0, l.Mr3)(x.U);
}
function O(e) {
    let { onClick: t, tooltipText: a, children: i, selected: s, ...r } = e;
    return (0, n.jsx)(l.ua7, {
        text: a,
        children: (e) => {
            let { ...a } = e;
            return (0, n.jsx)(l.zxk, {
                ...a,
                onClick: t,
                look: l.iLD.BLANK,
                size: l.PhG.ICON,
                color: l.Ttl.CUSTOM,
                className: o()(I.actionButton, { [I.selected]: s }),
                wrapperClassName: I.actionButtonWrapper,
                innerClassName: I.actionButtonInner,
                grow: !1,
                ...r,
                children: i
            });
        }
    });
}
function A() {
    let { zoomed: e, setZoomed: t } = (0, y.Y)();
    return (0, n.jsx)(O, {
        onClick: () => {
            (0, T.yg)(e ? T.uG.ZOOM_OUT_BUTTON_PRESSED : T.uG.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? f.intl.string(f.t.vOFof3) : f.intl.string(f.t.Kt4gZ2),
        children: e ? (0, n.jsx)(l.BlJ, {}) : (0, n.jsx)(l.OyE, {})
    });
}
function b(e) {
    var t, a;
    let { item: s } = e,
        o = null === (t = s.sourceMetadata) || void 0 === t ? void 0 : t.message,
        r = null === (a = s.sourceMetadata) || void 0 === a ? void 0 : a.identifier,
        m = i.useCallback(() => {
            if (null != o && null != r) {
                if (((0, T.yg)(T.uG.FORWARD_PRESSED), 'embed' === r.type)) {
                    (0, u.l8)({
                        message: o,
                        source: 'media-viewer',
                        forwardOptions: { onlyEmbedIndices: [r.embedIndex] },
                        onRequestSent: M
                    });
                    return;
                }
                (0, u.l8)({
                    message: o,
                    source: 'media-viewer',
                    forwardOptions: { onlyAttachmentIds: [r.attachmentId] },
                    onRequestSent: M
                });
            }
        }, [o, r]),
        { canForwardMessages: _ } = (0, c.yk)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return null != o && _ && (0, d.h)(o)
        ? (0, n.jsx)(O, {
              onClick: m,
              tooltipText: f.intl.string(f.t.I3ltXF),
              children: (0, n.jsx)(l.WZu, {})
          })
        : null;
}
function D(e) {
    let { item: t } = e,
        [a, s] = i.useState(!1);
    if (!('VIDEO' === t.type || (S.isPlatformEmbedded && null == t.children && 'IMAGE' === t.type && (0, m.gS)(t.url)))) return null;
    let o = (0, m.s$)(t.url);
    async function r() {
        if (((0, T.yg)(T.uG.SAVE_MEDIA_PRESSED), 'VIDEO' === t.type && (0, C.q)({ href: o }), 'IMAGE' === t.type)) {
            s(!0);
            try {
                await E.ZP.saveImage(o), (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.cqpdJS), l.ToastType.SUCCESS));
            } catch (e) {
                (0, l.showToast)((0, l.createToast)(f.intl.string(f.t['8Ve/S0']), l.ToastType.FAILURE));
            } finally {
                s(!1);
            }
        }
    }
    return (0, n.jsx)(O, {
        onClick: r,
        tooltipText: f.intl.string('VIDEO' === t.type ? f.t.JVuuz8 : f.t['S/xNKS']),
        submitting: a,
        children: (0, n.jsx)(l._8t, {})
    });
}
function L(e) {
    var t;
    let { item: a } = e;
    if (!(0, m.Jj)(a.url)) return null;
    let i = (0, m.s$)(null !== (t = a.original) && void 0 !== t ? t : a.url);
    return (0, n.jsx)(O, {
        onClick: () => {
            (0, T.yg)(T.uG.OPEN_LINK_PRESSED), (0, C.q)({ href: i });
        },
        tooltipText: f.intl.string(f.t.q5jLJC),
        children: (0, n.jsx)(l.rgF, {})
    });
}
function R(e) {
    var t, a;
    let { item: i, canCopyImage: s, canCopyLink: o, onClose: c, onSelect: d } = e,
        u = (null === (a = i.sourceMetadata) || void 0 === a ? void 0 : null === (t = a.identifier) || void 0 === t ? void 0 : t.type) === 'attachment' ? i.sourceMetadata.identifier.attachmentId : null,
        p = (0, r.Z)({
            id: u,
            label: f.intl.string(f.t.nwg3lZ)
        }),
        g = (function (e) {
            var t;
            let { alt: a, sourceMetadata: i, width: s, height: o } = e,
                r = N(f.intl.string(f.t.ILJuBg), 'name', { subtextLineClamp: 1 }),
                c = N(f.intl.string(f.t.sPO3io), 'size'),
                d = N(f.intl.string(f.t.eOB2eX), 'alt', { subtextLineClamp: 2 });
            if ((null == i ? void 0 : null === (t = i.identifier) || void 0 === t ? void 0 : t.type) !== 'attachment') return null;
            let u = (0, _.Z)(i.identifier),
                m = (0, h.BU)(i.identifier.size / 1000);
            return (0, n.jsxs)(
                l.sNh,
                {
                    id: 'media-viewer-details',
                    label: f.intl.string(f.t.GoCQxc),
                    children: [
                        r(u),
                        c(
                            f.intl.formatToPlainString(f.t.DTdonJ, {
                                width: s,
                                height: o,
                                fileSize: m
                            })
                        ),
                        d(a)
                    ]
                },
                'media-viewer-details'
            );
        })(i);
    async function C() {
        (0, T.yg)(T.uG.COPY_IMAGE_PRESSED);
        let e = (0, m.s$)(i.url);
        try {
            await E.ZP.copyImage(e), (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.bhUpvL), l.ToastType.SUCCESS));
        } catch (e) {
            (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.PTPbj4), l.ToastType.FAILURE));
        }
    }
    return (0, n.jsxs)(l.v2r, {
        navId: 'image-menu',
        'aria-label': 'placeholder',
        onClose: c,
        onSelect: d,
        children: [
            g,
            p,
            (0, n.jsxs)(l.kSQ, {
                children: [
                    s &&
                        (0, n.jsx)(
                            l.sNh,
                            {
                                label: f.intl.string(f.t.tvUqWl),
                                id: 'media-viewer-copy-image',
                                icon: l.TIy,
                                action: C
                            },
                            'media-viewer-copy-image'
                        ),
                    o &&
                        (0, n.jsx)(
                            l.sNh,
                            {
                                id: 'media-viewer-copy-link',
                                label: f.intl.string(f.t.WqhZsr),
                                icon: l.xPt,
                                action: function () {
                                    var e;
                                    (0, T.yg)(T.uG.COPY_LINK_PRESSED);
                                    let t = (0, m.s$)(null !== (e = i.original) && void 0 !== e ? e : i.url);
                                    S.isPlatformEmbedded ? E.ZP.copy(t) : window.navigator.clipboard.writeText(t), (0, l.showToast)((0, l.createToast)(f.intl.string(f.t['L/PwZW']), l.ToastType.SUCCESS));
                                }
                            },
                            'media-viewer-copy-link'
                        )
                ]
            })
        ]
    });
}
function N(e, t, a) {
    let s = i.useCallback((e) => {
        (0, g.JG)(e),
            (0, l.showToast)({
                message: f.intl.string(f.t.mGZ66O),
                type: l.ToastType.SUCCESS,
                id: 'media-viewer-detail-copied'
            });
    }, []);
    return (i) =>
        null != i
            ? (0, n.jsx)(
                  l.sNh,
                  {
                      action: () => s(i),
                      label: e,
                      subtext: i,
                      id: t,
                      ...a
                  },
                  t
              )
            : null;
}
function P(e) {
    var t, a;
    let { item: s } = e,
        [o, r] = i.useState(!1),
        c = p.Sb.useSetting(),
        d = 'IMAGE' === s.type && S.isPlatformEmbedded && null == s.children && E.ZP.canCopyImage() && (0, m.Lz)(s.url),
        u = (0, m.Jj)(s.url);
    return c || d || u || (null === (a = s.sourceMetadata) || void 0 === a ? void 0 : null === (t = a.identifier) || void 0 === t ? void 0 : t.type) === 'attachment'
        ? (0, n.jsx)(l.yRy, {
              shouldShow: o,
              align: 'left',
              position: 'top',
              spacing: 18,
              onRequestClose: () => r(!1),
              animation: l.yRy.Animation.NONE,
              renderPopout: () =>
                  (0, n.jsx)(R, {
                      item: s,
                      canCopyImage: d,
                      canCopyLink: u,
                      onClose: () => r(!1)
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, n.jsx)(O, {
                      tooltipText: f.intl.string(f.t.UKOtz8),
                      onClick: () => {
                          (0, T.yg)(T.uG.MORE_BUTTON_PRESSED), r(!o);
                      },
                      selected: o,
                      children: (0, n.jsx)(l.xhG, {})
                  });
              }
          })
        : null;
}
let k = i.memo(function (e) {
    let { item: t, hideMediaOptions: a } = e;
    return (
        ('IMAGE' === t.type || !a) &&
        (0, n.jsx)(v.ZP, {
            children: (e) =>
                (0, n.jsxs)('div', {
                    className: o()(I.actionButtons, e),
                    onMouseDown: (e) => e.stopPropagation(),
                    children: [
                        'IMAGE' === t.type && (0, n.jsx)(A, {}),
                        !a &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(b, { item: t }), (0, n.jsx)(D, { item: t }), (0, n.jsx)(L, { item: t }), (0, n.jsx)(P, { item: t })]
                            })
                    ]
                })
        })
    );
});
