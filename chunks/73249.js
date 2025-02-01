n.d(t, { Z: () => P }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    r = n(299206),
    u = n(346610),
    c = n(868643),
    d = n(912332),
    _ = n(378409),
    E = n(850908),
    m = n(695346),
    S = n(572004),
    h = n(424218),
    f = n(49012),
    p = n(358085),
    C = n(998502),
    g = n(254109),
    O = n(212459),
    y = n(369171),
    x = n(701865),
    T = n(388032),
    v = n(197736);
function D() {
    (0, o.Mr3)(x.U);
}
function I(e) {
    let { onClick: t, tooltipText: n, children: l, selected: a, ...r } = e;
    return (0, i.jsx)(o.ua7, {
        text: n,
        children: (e) => {
            let { ...n } = e;
            return (0, i.jsx)(o.zxk, {
                ...n,
                onClick: t,
                look: o.iLD.BLANK,
                size: o.PhG.ICON,
                color: o.Ttl.CUSTOM,
                className: s()(v.actionButton, { [v.selected]: a }),
                wrapperClassName: v.actionButtonWrapper,
                innerClassName: v.actionButtonInner,
                grow: !1,
                ...r,
                children: l
            });
        }
    });
}
function L() {
    let { zoomed: e, setZoomed: t } = (0, O.Y)();
    return (0, i.jsx)(I, {
        onClick: () => {
            (0, g.yg)(e ? g.uG.ZOOM_OUT_BUTTON_PRESSED : g.uG.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? T.intl.string(T.t.vOFof3) : T.intl.string(T.t.Kt4gZ2),
        children: e ? (0, i.jsx)(o.BlJ, {}) : (0, i.jsx)(o.OyE, {})
    });
}
function M(e) {
    var t, n;
    let { item: a } = e,
        s = null === (t = a.sourceMetadata) || void 0 === t ? void 0 : t.message,
        r = null === (n = a.sourceMetadata) || void 0 === n ? void 0 : n.identifier,
        _ = l.useCallback(() => {
            if (null != s && null != r) {
                if (((0, g.yg)(g.uG.FORWARD_PRESSED), 'embed' === r.type)) {
                    (0, d.l8)({
                        message: s,
                        source: 'media-viewer',
                        forwardOptions: { onlyEmbedIndices: [r.embedIndex] },
                        onRequestSent: D
                    });
                    return;
                }
                (0, d.l8)({
                    message: s,
                    source: 'media-viewer',
                    forwardOptions: { onlyAttachmentIds: [r.attachmentId] },
                    onRequestSent: D
                });
            }
        }, [s, r]),
        { canForwardMessages: E } = (0, u.yk)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return null != s && E && (0, c.h)(s)
        ? (0, i.jsx)(I, {
              onClick: _,
              tooltipText: T.intl.string(T.t.I3ltXF),
              children: (0, i.jsx)(o.WZu, {})
          })
        : null;
}
function A(e) {
    let { item: t } = e,
        [n, a] = l.useState(!1);
    if (!('VIDEO' === t.type || (p.isPlatformEmbedded && null == t.children && 'IMAGE' === t.type && (0, _.gS)(t.url)))) return null;
    let s = (0, _.s$)(t.url);
    async function r() {
        if (((0, g.yg)(g.uG.SAVE_MEDIA_PRESSED), 'VIDEO' === t.type && (0, f.q)({ href: s }), 'IMAGE' === t.type)) {
            a(!0);
            try {
                await C.ZP.saveImage(s), (0, o.showToast)((0, o.createToast)(T.intl.string(T.t.cqpdJS), o.ToastType.SUCCESS));
            } catch (e) {
                (0, o.showToast)((0, o.createToast)(T.intl.string(T.t['8Ve/S0']), o.ToastType.FAILURE));
            } finally {
                a(!1);
            }
        }
    }
    return (0, i.jsx)(I, {
        onClick: r,
        tooltipText: T.intl.string('VIDEO' === t.type ? T.t.JVuuz8 : T.t['S/xNKS']),
        submitting: n,
        children: (0, i.jsx)(o._8t, {})
    });
}
function R(e) {
    var t;
    let { item: n } = e;
    if (!(0, _.Jj)(n.url)) return null;
    let l = (0, _.s$)(null !== (t = n.original) && void 0 !== t ? t : n.url);
    return (0, i.jsx)(I, {
        onClick: () => {
            (0, g.yg)(g.uG.OPEN_LINK_PRESSED), (0, f.q)({ href: l });
        },
        tooltipText: T.intl.string(T.t.q5jLJC),
        children: (0, i.jsx)(o.rgF, {})
    });
}
function N(e) {
    var t, n;
    let { item: l, canCopyImage: a, canCopyLink: s, onClose: u, onSelect: c } = e,
        d = (null === (n = l.sourceMetadata) || void 0 === n ? void 0 : null === (t = n.identifier) || void 0 === t ? void 0 : t.type) === 'attachment' ? l.sourceMetadata.identifier.attachmentId : null,
        m = (0, r.Z)({
            id: d,
            label: T.intl.string(T.t.nwg3lZ)
        }),
        S = (function (e) {
            var t;
            let { alt: n, sourceMetadata: l, width: a, height: s } = e,
                r = b(T.intl.string(T.t.ILJuBg), 'name', { subtextLineClamp: 1 }),
                u = b(T.intl.string(T.t.sPO3io), 'size'),
                c = b(T.intl.string(T.t.eOB2eX), 'alt', { subtextLineClamp: 2 });
            if ((null == l ? void 0 : null === (t = l.identifier) || void 0 === t ? void 0 : t.type) !== 'attachment') return null;
            let d = (0, E.Z)(l.identifier),
                _ = (0, h.BU)(l.identifier.size / 1000);
            return (0, i.jsxs)(
                o.sNh,
                {
                    id: 'media-viewer-details',
                    label: T.intl.string(T.t.GoCQxc),
                    children: [
                        r(d),
                        u(
                            T.intl.formatToPlainString(T.t.DTdonJ, {
                                width: a,
                                height: s,
                                fileSize: _
                            })
                        ),
                        c(n)
                    ]
                },
                'media-viewer-details'
            );
        })(l);
    async function f() {
        (0, g.yg)(g.uG.COPY_IMAGE_PRESSED);
        let e = (0, _.s$)(l.url);
        try {
            await C.ZP.copyImage(e), (0, o.showToast)((0, o.createToast)(T.intl.string(T.t.bhUpvL), o.ToastType.SUCCESS));
        } catch (e) {
            (0, o.showToast)((0, o.createToast)(T.intl.string(T.t.PTPbj4), o.ToastType.FAILURE));
        }
    }
    return (0, i.jsxs)(o.v2r, {
        navId: 'image-menu',
        'aria-label': 'placeholder',
        onClose: u,
        onSelect: c,
        children: [
            S,
            m,
            (0, i.jsxs)(o.kSQ, {
                children: [
                    a &&
                        (0, i.jsx)(
                            o.sNh,
                            {
                                label: T.intl.string(T.t.tvUqWl),
                                id: 'media-viewer-copy-image',
                                icon: o.TIy,
                                action: f
                            },
                            'media-viewer-copy-image'
                        ),
                    s &&
                        (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'media-viewer-copy-link',
                                label: T.intl.string(T.t.WqhZsr),
                                icon: o.xPt,
                                action: function () {
                                    var e;
                                    (0, g.yg)(g.uG.COPY_LINK_PRESSED);
                                    let t = (0, _.s$)(null !== (e = l.original) && void 0 !== e ? e : l.url);
                                    p.isPlatformEmbedded ? C.ZP.copy(t) : window.navigator.clipboard.writeText(t), (0, o.showToast)((0, o.createToast)(T.intl.string(T.t['L/PwZW']), o.ToastType.SUCCESS));
                                }
                            },
                            'media-viewer-copy-link'
                        )
                ]
            })
        ]
    });
}
function b(e, t, n) {
    let a = l.useCallback((e) => {
        (0, S.JG)(e),
            (0, o.showToast)({
                message: T.intl.string(T.t.mGZ66O),
                type: o.ToastType.SUCCESS,
                id: 'media-viewer-detail-copied'
            });
    }, []);
    return (l) =>
        null != l
            ? (0, i.jsx)(
                  o.sNh,
                  {
                      action: () => a(l),
                      label: e,
                      subtext: l,
                      id: t,
                      ...n
                  },
                  t
              )
            : null;
}
function j(e) {
    var t, n;
    let { item: a } = e,
        [s, r] = l.useState(!1),
        u = m.Sb.useSetting(),
        c = 'IMAGE' === a.type && p.isPlatformEmbedded && null == a.children && C.ZP.canCopyImage() && (0, _.Lz)(a.url),
        d = (0, _.Jj)(a.url);
    return u || c || d || (null === (n = a.sourceMetadata) || void 0 === n ? void 0 : null === (t = n.identifier) || void 0 === t ? void 0 : t.type) === 'attachment'
        ? (0, i.jsx)(o.yRy, {
              shouldShow: s,
              align: 'left',
              position: 'top',
              spacing: 18,
              onRequestClose: () => r(!1),
              animation: o.yRy.Animation.NONE,
              renderPopout: () =>
                  (0, i.jsx)(N, {
                      item: a,
                      canCopyImage: c,
                      canCopyLink: d,
                      onClose: () => r(!1)
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(I, {
                      tooltipText: T.intl.string(T.t.UKOtz8),
                      onClick: () => {
                          (0, g.yg)(g.uG.MORE_BUTTON_PRESSED), r(!s);
                      },
                      selected: s,
                      children: (0, i.jsx)(o.xhG, {})
                  });
              }
          })
        : null;
}
let P = l.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e;
    return (
        ('IMAGE' === t.type || !n) &&
        (0, i.jsx)(y.ZP, {
            children: (e) =>
                (0, i.jsxs)('div', {
                    className: s()(v.actionButtons, e),
                    onMouseDown: (e) => e.stopPropagation(),
                    children: [
                        'IMAGE' === t.type && (0, i.jsx)(L, {}),
                        !n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(M, { item: t }), (0, i.jsx)(A, { item: t }), (0, i.jsx)(R, { item: t }), (0, i.jsx)(j, { item: t })]
                            })
                    ]
                })
        })
    );
});
