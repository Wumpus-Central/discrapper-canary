e(47120);
var i = e(200651),
    o = e(192379),
    l = e(120356),
    a = e.n(l),
    s = e(481060),
    r = e(299206),
    u = e(346610),
    c = e(868643),
    d = e(912332),
    f = e(378409),
    _ = e(850908),
    E = e(695346),
    m = e(572004),
    S = e(424218),
    h = e(49012),
    p = e(358085),
    g = e(998502),
    C = e(254109),
    I = e(212459),
    M = e(369171),
    O = e(701865),
    T = e(388032),
    y = e(197736);
function x() {
    (0, s.closeModal)(O.U);
}
function L(n) {
    let { onClick: t, tooltipText: e, children: o, selected: l, ...r } = n;
    return (0, i.jsx)(s.Tooltip, {
        text: e,
        children: (n) => {
            let { ...e } = n;
            return (0, i.jsx)(s.Button, {
                ...e,
                onClick: t,
                look: s.ButtonLooks.BLANK,
                size: s.ButtonSizes.ICON,
                color: s.ButtonColors.CUSTOM,
                className: a()(y.actionButton, { [y.selected]: l }),
                wrapperClassName: y.actionButtonWrapper,
                innerClassName: y.actionButtonInner,
                grow: !1,
                ...r,
                children: o
            });
        }
    });
}
function v() {
    let { zoomed: n, setZoomed: t } = (0, I.Y)();
    return (0, i.jsx)(L, {
        onClick: () => {
            (0, C.yg)(n ? C.uG.ZOOM_OUT_BUTTON_PRESSED : C.uG.ZOOM_IN_BUTTON_PRESSED), t(!n);
        },
        tooltipText: n ? T.intl.string(T.t.vOFof3) : T.intl.string(T.t.Kt4gZ2),
        children: n ? (0, i.jsx)(s.MagnifyingGlassMinusIcon, {}) : (0, i.jsx)(s.MagnifyingGlassPlusIcon, {})
    });
}
function A(n) {
    var t, e;
    let { item: l } = n,
        a = null === (t = l.sourceMetadata) || void 0 === t ? void 0 : t.message,
        r = null === (e = l.sourceMetadata) || void 0 === e ? void 0 : e.identifier,
        f = o.useCallback(() => {
            if (null != a && null != r) {
                if (((0, C.yg)(C.uG.FORWARD_PRESSED), 'embed' === r.type)) {
                    (0, d.l8)({
                        message: a,
                        source: 'media-viewer',
                        forwardOptions: { onlyEmbedIndices: [r.embedIndex] },
                        onRequestSent: x
                    });
                    return;
                }
                (0, d.l8)({
                    message: a,
                    source: 'media-viewer',
                    forwardOptions: { onlyAttachmentIds: [r.attachmentId] },
                    onRequestSent: x
                });
            }
        }, [a, r]),
        { canForwardMessages: _ } = (0, u.yk)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return null != a && _ && (0, c.h)(a)
        ? (0, i.jsx)(L, {
              onClick: f,
              tooltipText: T.intl.string(T.t.I3ltXF),
              children: (0, i.jsx)(s.ArrowAngleRightUpIcon, {})
          })
        : null;
}
function D(n) {
    let { item: t } = n,
        [e, l] = o.useState(!1);
    if (!('VIDEO' === t.type || (p.isPlatformEmbedded && null == t.children && 'IMAGE' === t.type && (0, f.gS)(t.url)))) return null;
    let a = (0, f.s$)(t.url);
    async function r() {
        if (((0, C.yg)(C.uG.SAVE_MEDIA_PRESSED), 'VIDEO' === t.type && (0, h.q)({ href: a }), 'IMAGE' === t.type)) {
            l(!0);
            try {
                await g.ZP.saveImage(a), (0, s.showToast)((0, s.createToast)(T.intl.string(T.t.cqpdJS), s.ToastType.SUCCESS));
            } catch (n) {
                (0, s.showToast)((0, s.createToast)(T.intl.string(T.t['8Ve/S0']), s.ToastType.FAILURE));
            } finally {
                l(!1);
            }
        }
    }
    return (0, i.jsx)(L, {
        onClick: r,
        tooltipText: T.intl.string('VIDEO' === t.type ? T.t.JVuuz8 : T.t['S/xNKS']),
        submitting: e,
        children: (0, i.jsx)(s.DownloadIcon, {})
    });
}
function b(n) {
    var t;
    let { item: e } = n;
    if (!(0, f.Jj)(e.url)) return null;
    let o = (0, f.s$)(null !== (t = e.original) && void 0 !== t ? t : e.url);
    return (0, i.jsx)(L, {
        onClick: () => {
            (0, C.yg)(C.uG.OPEN_LINK_PRESSED), (0, h.q)({ href: o });
        },
        tooltipText: T.intl.string(T.t.q5jLJC),
        children: (0, i.jsx)(s.WindowLaunchIcon, {})
    });
}
function R(n) {
    var t, e;
    let { item: o, canCopyImage: l, canCopyLink: a, onClose: u, onSelect: c } = n,
        d = (null === (e = o.sourceMetadata) || void 0 === e ? void 0 : null === (t = e.identifier) || void 0 === t ? void 0 : t.type) === 'attachment' ? o.sourceMetadata.identifier.attachmentId : null,
        E = (0, r.Z)({
            id: d,
            label: T.intl.string(T.t.nwg3lZ)
        }),
        m = (function (n) {
            var t;
            let { alt: e, sourceMetadata: o, width: l, height: a } = n,
                r = N(T.intl.string(T.t.ILJuBg), 'name', { subtextLineClamp: 1 }),
                u = N(T.intl.string(T.t.sPO3io), 'size'),
                c = N(T.intl.string(T.t.eOB2eX), 'alt', { subtextLineClamp: 2 });
            if ((null == o ? void 0 : null === (t = o.identifier) || void 0 === t ? void 0 : t.type) !== 'attachment') return null;
            let d = (0, _.Z)(o.identifier),
                f = (0, S.BU)(o.identifier.size / 1000);
            return (0, i.jsxs)(
                s.MenuItem,
                {
                    id: 'media-viewer-details',
                    label: T.intl.string(T.t.GoCQxc),
                    children: [
                        r(d),
                        u(
                            T.intl.formatToPlainString(T.t.DTdonJ, {
                                width: l,
                                height: a,
                                fileSize: f
                            })
                        ),
                        c(e)
                    ]
                },
                'media-viewer-details'
            );
        })(o);
    async function h() {
        (0, C.yg)(C.uG.COPY_IMAGE_PRESSED);
        let n = (0, f.s$)(o.url);
        try {
            await g.ZP.copyImage(n), (0, s.showToast)((0, s.createToast)(T.intl.string(T.t.bhUpvL), s.ToastType.SUCCESS));
        } catch (n) {
            (0, s.showToast)((0, s.createToast)(T.intl.string(T.t.PTPbj4), s.ToastType.FAILURE));
        }
    }
    return (0, i.jsxs)(s.Menu, {
        navId: 'image-menu',
        'aria-label': 'placeholder',
        onClose: u,
        onSelect: c,
        children: [
            m,
            E,
            (0, i.jsxs)(s.MenuGroup, {
                children: [
                    l &&
                        (0, i.jsx)(
                            s.MenuItem,
                            {
                                label: T.intl.string(T.t.tvUqWl),
                                id: 'media-viewer-copy-image',
                                icon: s.CopyIcon,
                                action: h
                            },
                            'media-viewer-copy-image'
                        ),
                    a &&
                        (0, i.jsx)(
                            s.MenuItem,
                            {
                                id: 'media-viewer-copy-link',
                                label: T.intl.string(T.t.WqhZsr),
                                icon: s.LinkIcon,
                                action: function () {
                                    var n;
                                    (0, C.yg)(C.uG.COPY_LINK_PRESSED);
                                    let t = (0, f.s$)(null !== (n = o.original) && void 0 !== n ? n : o.url);
                                    p.isPlatformEmbedded ? g.ZP.copy(t) : window.navigator.clipboard.writeText(t), (0, s.showToast)((0, s.createToast)(T.intl.string(T.t['L/PwZW']), s.ToastType.SUCCESS));
                                }
                            },
                            'media-viewer-copy-link'
                        )
                ]
            })
        ]
    });
}
function N(n, t, e) {
    let l = o.useCallback((n) => {
        (0, m.JG)(n),
            (0, s.showToast)({
                message: T.intl.string(T.t.mGZ66O),
                type: s.ToastType.SUCCESS,
                id: 'media-viewer-detail-copied'
            });
    }, []);
    return (o) =>
        null != o
            ? (0, i.jsx)(
                  s.MenuItem,
                  {
                      action: () => l(o),
                      label: n,
                      subtext: o,
                      id: t,
                      ...e
                  },
                  t
              )
            : null;
}
function j(n) {
    var t, e;
    let { item: l } = n,
        [a, r] = o.useState(!1),
        u = E.Sb.useSetting(),
        c = 'IMAGE' === l.type && p.isPlatformEmbedded && null == l.children && g.ZP.canCopyImage() && (0, f.Lz)(l.url),
        d = (0, f.Jj)(l.url);
    return u || c || d || (null === (e = l.sourceMetadata) || void 0 === e ? void 0 : null === (t = e.identifier) || void 0 === t ? void 0 : t.type) === 'attachment'
        ? (0, i.jsx)(s.Popout, {
              shouldShow: a,
              align: 'left',
              position: 'top',
              spacing: 18,
              onRequestClose: () => r(!1),
              animation: s.Popout.Animation.NONE,
              renderPopout: () =>
                  (0, i.jsx)(R, {
                      item: l,
                      canCopyImage: c,
                      canCopyLink: d,
                      onClose: () => r(!1)
                  }),
              children: (n) => {
                  let { onClick: t } = n;
                  return (0, i.jsx)(L, {
                      tooltipText: T.intl.string(T.t.UKOtz8),
                      onClick: () => {
                          (0, C.yg)(C.uG.MORE_BUTTON_PRESSED), r(!a);
                      },
                      selected: a,
                      children: (0, i.jsx)(s.MoreHorizontalIcon, {})
                  });
              }
          })
        : null;
}
t.Z = o.memo(function (n) {
    let { item: t, hideMediaOptions: e } = n;
    return (
        ('IMAGE' === t.type || !e) &&
        (0, i.jsx)(M.ZP, {
            children: (n) =>
                (0, i.jsxs)('div', {
                    className: a()(y.actionButtons, n),
                    onMouseDown: (n) => n.stopPropagation(),
                    children: [
                        'IMAGE' === t.type && (0, i.jsx)(v, {}),
                        !e &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(A, { item: t }), (0, i.jsx)(D, { item: t }), (0, i.jsx)(b, { item: t }), (0, i.jsx)(j, { item: t })]
                            })
                    ]
                })
        })
    );
});
