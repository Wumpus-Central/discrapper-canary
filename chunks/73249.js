t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(481060),
    s = t(299206),
    u = t(346610),
    c = t(868643),
    d = t(912332),
    f = t(378409),
    m = t(850908),
    h = t(695346),
    p = t(572004),
    g = t(424218),
    _ = t(49012),
    E = t(358085),
    S = t(998502),
    x = t(254109),
    C = t(212459),
    v = t(369171),
    y = t(701865),
    I = t(388032),
    b = t(197736);
function M() {
    (0, o.closeModal)(y.U);
}
function O(e) {
    let { onClick: n, tooltipText: t, children: l, selected: r, ...s } = e;
    return (0, i.jsx)(o.Tooltip, {
        text: t,
        children: (e) => {
            let { ...t } = e;
            return (0, i.jsx)(o.Button, {
                ...t,
                onClick: n,
                look: o.ButtonLooks.BLANK,
                size: o.ButtonSizes.ICON,
                color: o.ButtonColors.CUSTOM,
                className: a()(b.actionButton, { [b.selected]: r }),
                wrapperClassName: b.actionButtonWrapper,
                innerClassName: b.actionButtonInner,
                grow: !1,
                ...s,
                children: l
            });
        }
    });
}
function L() {
    let { zoomed: e, setZoomed: n } = (0, C.Y)();
    return (0, i.jsx)(O, {
        onClick: () => {
            (0, x.yg)(e ? x.uG.ZOOM_OUT_BUTTON_PRESSED : x.uG.ZOOM_IN_BUTTON_PRESSED), n(!e);
        },
        tooltipText: e ? I.intl.string(I.t.vOFof3) : I.intl.string(I.t.Kt4gZ2),
        children: e ? (0, i.jsx)(o.MagnifyingGlassMinusIcon, {}) : (0, i.jsx)(o.MagnifyingGlassPlusIcon, {})
    });
}
function T(e) {
    var n, t;
    let { item: r } = e,
        a = null === (n = r.sourceMetadata) || void 0 === n ? void 0 : n.message,
        s = null === (t = r.sourceMetadata) || void 0 === t ? void 0 : t.identifier,
        f = l.useCallback(() => {
            if (null != a && null != s) {
                if (((0, x.yg)(x.uG.FORWARD_PRESSED), 'embed' === s.type)) {
                    (0, d.l8)({
                        message: a,
                        source: 'media-viewer',
                        forwardOptions: { onlyEmbedIndices: [s.embedIndex] },
                        onRequestSent: M
                    });
                    return;
                }
                (0, d.l8)({
                    message: a,
                    source: 'media-viewer',
                    forwardOptions: { onlyAttachmentIds: [s.attachmentId] },
                    onRequestSent: M
                });
            }
        }, [a, s]),
        { canForwardMessages: m } = (0, u.yk)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return null != a && m && (0, c.h)(a)
        ? (0, i.jsx)(O, {
              onClick: f,
              tooltipText: I.intl.string(I.t.I3ltXF),
              children: (0, i.jsx)(o.ArrowAngleRightUpIcon, {})
          })
        : null;
}
function A(e) {
    let { item: n } = e,
        [t, r] = l.useState(!1);
    if (!('VIDEO' === n.type || (E.isPlatformEmbedded && null == n.children && 'IMAGE' === n.type && (0, f.gS)(n.url)))) return null;
    let a = (0, f.s$)(n.url);
    async function s() {
        if (((0, x.yg)(x.uG.SAVE_MEDIA_PRESSED), 'VIDEO' === n.type && (0, _.q)({ href: a }), 'IMAGE' === n.type)) {
            r(!0);
            try {
                await S.ZP.saveImage(a), (0, o.showToast)((0, o.createToast)(I.intl.string(I.t.cqpdJS), o.ToastType.SUCCESS));
            } catch (e) {
                (0, o.showToast)((0, o.createToast)(I.intl.string(I.t['8Ve/S0']), o.ToastType.FAILURE));
            } finally {
                r(!1);
            }
        }
    }
    return (0, i.jsx)(O, {
        onClick: s,
        tooltipText: I.intl.string('VIDEO' === n.type ? I.t.JVuuz8 : I.t['S/xNKS']),
        submitting: t,
        children: (0, i.jsx)(o.DownloadIcon, {})
    });
}
function R(e) {
    var n;
    let { item: t } = e;
    if (!(0, f.Jj)(t.url)) return null;
    let l = (0, f.s$)(null !== (n = t.original) && void 0 !== n ? n : t.url);
    return (0, i.jsx)(O, {
        onClick: () => {
            (0, x.yg)(x.uG.OPEN_LINK_PRESSED), (0, _.q)({ href: l });
        },
        tooltipText: I.intl.string(I.t.q5jLJC),
        children: (0, i.jsx)(o.WindowLaunchIcon, {})
    });
}
function D(e) {
    var n, t;
    let { item: l, canCopyImage: r, canCopyLink: a, onClose: u, onSelect: c } = e,
        d = (null === (t = l.sourceMetadata) || void 0 === t ? void 0 : null === (n = t.identifier) || void 0 === n ? void 0 : n.type) === 'attachment' ? l.sourceMetadata.identifier.attachmentId : null,
        h = (0, s.Z)({
            id: d,
            label: I.intl.string(I.t.nwg3lZ)
        }),
        p = (function (e) {
            var n;
            let { alt: t, sourceMetadata: l, width: r, height: a } = e,
                s = j(I.intl.string(I.t.ILJuBg), 'name', { subtextLineClamp: 1 }),
                u = j(I.intl.string(I.t.sPO3io), 'size'),
                c = j(I.intl.string(I.t.eOB2eX), 'alt', { subtextLineClamp: 2 });
            if ((null == l ? void 0 : null === (n = l.identifier) || void 0 === n ? void 0 : n.type) !== 'attachment') return null;
            let d = (0, m.Z)(l.identifier),
                f = (0, g.BU)(l.identifier.size / 1000);
            return (0, i.jsxs)(
                o.MenuItem,
                {
                    id: 'media-viewer-details',
                    label: I.intl.string(I.t.GoCQxc),
                    children: [
                        s(d),
                        u(
                            I.intl.formatToPlainString(I.t.DTdonJ, {
                                width: r,
                                height: a,
                                fileSize: f
                            })
                        ),
                        c(t)
                    ]
                },
                'media-viewer-details'
            );
        })(l);
    async function _() {
        (0, x.yg)(x.uG.COPY_IMAGE_PRESSED);
        let e = (0, f.s$)(l.url);
        try {
            await S.ZP.copyImage(e), (0, o.showToast)((0, o.createToast)(I.intl.string(I.t.bhUpvL), o.ToastType.SUCCESS));
        } catch (e) {
            (0, o.showToast)((0, o.createToast)(I.intl.string(I.t.PTPbj4), o.ToastType.FAILURE));
        }
    }
    return (0, i.jsxs)(o.Menu, {
        navId: 'image-menu',
        'aria-label': 'placeholder',
        onClose: u,
        onSelect: c,
        children: [
            p,
            h,
            (0, i.jsxs)(o.MenuGroup, {
                children: [
                    r &&
                        (0, i.jsx)(
                            o.MenuItem,
                            {
                                label: I.intl.string(I.t.tvUqWl),
                                id: 'media-viewer-copy-image',
                                icon: o.CopyIcon,
                                action: _
                            },
                            'media-viewer-copy-image'
                        ),
                    a &&
                        (0, i.jsx)(
                            o.MenuItem,
                            {
                                id: 'media-viewer-copy-link',
                                label: I.intl.string(I.t.WqhZsr),
                                icon: o.LinkIcon,
                                action: function () {
                                    var e;
                                    (0, x.yg)(x.uG.COPY_LINK_PRESSED);
                                    let n = (0, f.s$)(null !== (e = l.original) && void 0 !== e ? e : l.url);
                                    E.isPlatformEmbedded ? S.ZP.copy(n) : window.navigator.clipboard.writeText(n), (0, o.showToast)((0, o.createToast)(I.intl.string(I.t['L/PwZW']), o.ToastType.SUCCESS));
                                }
                            },
                            'media-viewer-copy-link'
                        )
                ]
            })
        ]
    });
}
function j(e, n, t) {
    let r = l.useCallback((e) => {
        (0, p.JG)(e),
            (0, o.showToast)({
                message: I.intl.string(I.t.mGZ66O),
                type: o.ToastType.SUCCESS,
                id: 'media-viewer-detail-copied'
            });
    }, []);
    return (l) =>
        null != l
            ? (0, i.jsx)(
                  o.MenuItem,
                  {
                      action: () => r(l),
                      label: e,
                      subtext: l,
                      id: n,
                      ...t
                  },
                  n
              )
            : null;
}
function N(e) {
    var n, t;
    let { item: r } = e,
        [a, s] = l.useState(!1),
        u = h.Sb.useSetting(),
        c = 'IMAGE' === r.type && E.isPlatformEmbedded && null == r.children && S.ZP.canCopyImage() && (0, f.Lz)(r.url),
        d = (0, f.Jj)(r.url);
    return u || c || d || (null === (t = r.sourceMetadata) || void 0 === t ? void 0 : null === (n = t.identifier) || void 0 === n ? void 0 : n.type) === 'attachment'
        ? (0, i.jsx)(o.Popout, {
              shouldShow: a,
              align: 'left',
              position: 'top',
              spacing: 18,
              onRequestClose: () => s(!1),
              animation: o.Popout.Animation.NONE,
              renderPopout: () =>
                  (0, i.jsx)(D, {
                      item: r,
                      canCopyImage: c,
                      canCopyLink: d,
                      onClose: () => s(!1)
                  }),
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, i.jsx)(O, {
                      tooltipText: I.intl.string(I.t.UKOtz8),
                      onClick: () => {
                          (0, x.yg)(x.uG.MORE_BUTTON_PRESSED), s(!a);
                      },
                      selected: a,
                      children: (0, i.jsx)(o.MoreHorizontalIcon, {})
                  });
              }
          })
        : null;
}
n.Z = l.memo(function (e) {
    let { item: n, hideMediaOptions: t } = e;
    return (
        ('IMAGE' === n.type || !t) &&
        (0, i.jsx)(v.ZP, {
            children: (e) =>
                (0, i.jsxs)('div', {
                    className: a()(b.actionButtons, e),
                    onMouseDown: (e) => e.stopPropagation(),
                    children: [
                        'IMAGE' === n.type && (0, i.jsx)(L, {}),
                        !t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(T, { item: n }), (0, i.jsx)(A, { item: n }), (0, i.jsx)(R, { item: n }), (0, i.jsx)(N, { item: n })]
                            })
                    ]
                })
        })
    );
});
