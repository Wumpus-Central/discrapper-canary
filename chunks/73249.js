t(47120);
var i = t(200651),
    r = t(192379),
    l = t(120356),
    a = t.n(l),
    o = t(481060),
    s = t(346610),
    u = t(868643),
    c = t(912332),
    d = t(378409),
    h = t(49012),
    m = t(358085),
    f = t(998502),
    p = t(254109),
    _ = t(212459),
    E = t(369171),
    g = t(701865),
    S = t(388032),
    x = t(197736);
function C() {
    (0, o.closeModal)(g.U);
}
function I(e) {
    let { onClick: n, tooltipText: t, children: r, selected: l, ...s } = e;
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
                className: a()(x.actionButton, { [x.selected]: l }),
                innerClassName: x.actionButtonInner,
                ...s,
                children: r
            });
        }
    });
}
function y() {
    let { zoomed: e, setZoomed: n } = (0, _.Y)();
    return (0, i.jsx)(I, {
        onClick: () => {
            (0, p.yg)(e ? p.uG.ZOOM_OUT_BUTTON_PRESSED : p.uG.ZOOM_IN_BUTTON_PRESSED), n(!e);
        },
        tooltipText: e ? S.intl.string(S.t.vOFof3) : S.intl.string(S.t.Kt4gZ2),
        children: e ? (0, i.jsx)(o.MagnifyingGlassMinusIcon, {}) : (0, i.jsx)(o.MagnifyingGlassPlusIcon, {})
    });
}
function v(e) {
    var n, t;
    let { item: l } = e,
        a = null === (n = l.sourceMetadata) || void 0 === n ? void 0 : n.message,
        d = null === (t = l.sourceMetadata) || void 0 === t ? void 0 : t.identifier,
        h = r.useCallback(() => {
            if (null != a && null != d) {
                if (((0, p.yg)(p.uG.FORWARD_PRESSED), 'embed' === d.type)) {
                    (0, c.l8)({
                        messageId: a.id,
                        channelId: a.channel_id,
                        message: a,
                        source: 'media-viewer',
                        forwardOptions: { onlyEmbedIndices: [d.embedIndex] },
                        onRequestSent: C
                    });
                    return;
                }
                (0, c.l8)({
                    messageId: a.id,
                    channelId: a.channel_id,
                    message: a,
                    source: 'media-viewer',
                    forwardOptions: { onlyAttachmentIds: [d.attachmentId] },
                    onRequestSent: C
                });
            }
        }, [a, d]),
        { canForwardMessages: m } = (0, s.yk)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return null != a && m && (0, u.h)(a)
        ? (0, i.jsx)(I, {
              onClick: h,
              tooltipText: S.intl.string(S.t.I3ltXF),
              children: (0, i.jsx)(o.ArrowAngleRightUpIcon, {})
          })
        : null;
}
function O(e) {
    let { item: n } = e,
        [t, l] = r.useState(!1);
    if (!('VIDEO' === n.type || (m.isPlatformEmbedded && null == n.children && 'IMAGE' === n.type && (0, d.gS)(n.url)))) return null;
    let a = (0, d.s$)(n.url);
    async function s() {
        if (((0, p.yg)(p.uG.SAVE_MEDIA_PRESSED), 'VIDEO' === n.type && (0, h.q)({ href: a }), 'IMAGE' === n.type)) {
            l(!0);
            try {
                await f.ZP.saveImage(a), (0, o.showToast)((0, o.createToast)(S.intl.string(S.t.cqpdJS), o.ToastType.SUCCESS));
            } catch (e) {
                (0, o.showToast)((0, o.createToast)(S.intl.string(S.t['8Ve/S0']), o.ToastType.FAILURE));
            } finally {
                l(!1);
            }
        }
    }
    return (0, i.jsx)(I, {
        onClick: s,
        tooltipText: S.intl.string('VIDEO' === n.type ? S.t.JVuuz8 : S.t['S/xNKS']),
        submitting: t,
        children: (0, i.jsx)(o.DownloadIcon, {})
    });
}
function b(e) {
    var n;
    let { item: t } = e;
    if (!(0, d.Jj)(t.url)) return null;
    let r = (0, d.s$)(null !== (n = t.original) && void 0 !== n ? n : t.url);
    return (0, i.jsx)(I, {
        onClick: () => {
            (0, p.yg)(p.uG.OPEN_LINK_PRESSED), (0, h.q)({ href: r });
        },
        tooltipText: S.intl.string(S.t.q5jLJC),
        children: (0, i.jsx)(o.WindowLaunchIcon, {})
    });
}
function M(e) {
    let { item: n, canCopyImage: t, canCopyLink: r, onClose: l, onSelect: a } = e;
    async function s() {
        (0, p.yg)(p.uG.COPY_IMAGE_PRESSED);
        let e = (0, d.s$)(n.url);
        try {
            await f.ZP.copyImage(e), (0, o.showToast)((0, o.createToast)(S.intl.string(S.t.bhUpvL), o.ToastType.SUCCESS));
        } catch (e) {
            (0, o.showToast)((0, o.createToast)(S.intl.string(S.t.PTPbj4), o.ToastType.FAILURE));
        }
    }
    return (0, i.jsx)(o.Menu, {
        navId: 'image-menu',
        'aria-label': 'placeholder',
        onClose: l,
        onSelect: a,
        children: (0, i.jsxs)(o.MenuGroup, {
            children: [
                t &&
                    (0, i.jsx)(
                        o.MenuItem,
                        {
                            label: S.intl.string(S.t.tvUqWl),
                            id: 'media-viewer-copy-image',
                            action: s
                        },
                        'media-viewer-copy-image'
                    ),
                r &&
                    (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'media-viewer-copy-link',
                            label: S.intl.string(S.t.WqhZsr),
                            action: function () {
                                var e;
                                (0, p.yg)(p.uG.COPY_LINK_PRESSED);
                                let t = (0, d.s$)(null !== (e = n.original) && void 0 !== e ? e : n.url);
                                m.isPlatformEmbedded ? f.ZP.copy(t) : window.navigator.clipboard.writeText(t), (0, o.showToast)((0, o.createToast)(S.intl.string(S.t['L/PwZW']), o.ToastType.SUCCESS));
                            }
                        },
                        'media-viewer-copy-link'
                    )
            ]
        })
    });
}
function L(e) {
    let { item: n } = e,
        [t, l] = r.useState(!1),
        a = 'IMAGE' === n.type && m.isPlatformEmbedded && null == n.children && f.ZP.canCopyImage() && (0, d.Lz)(n.url),
        s = (0, d.Jj)(n.url);
    return a || s
        ? (0, i.jsx)(o.Popout, {
              shouldShow: t,
              align: 'left',
              position: 'top',
              spacing: 18,
              onRequestClose: () => l(!1),
              renderPopout: () =>
                  (0, i.jsx)(M, {
                      item: n,
                      canCopyImage: a,
                      canCopyLink: s,
                      onClose: () => l(!1)
                  }),
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, i.jsx)(I, {
                      tooltipText: S.intl.string(S.t.UKOtz8),
                      onClick: () => {
                          (0, p.yg)(p.uG.MORE_BUTTON_PRESSED), l(!t);
                      },
                      selected: t,
                      children: (0, i.jsx)(o.MoreHorizontalIcon, {})
                  });
              }
          })
        : null;
}
n.Z = r.memo(function (e) {
    let { item: n, hideMediaOptions: t } = e;
    return (
        ('IMAGE' === n.type || !t) &&
        (0, i.jsx)(E.ZP, {
            children: (e) =>
                (0, i.jsxs)('div', {
                    className: a()(x.actionButtons, e),
                    onClick: (e) => e.stopPropagation(),
                    children: [
                        'IMAGE' === n.type && (0, i.jsx)(y, {}),
                        !t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(v, { item: n }), (0, i.jsx)(O, { item: n }), (0, i.jsx)(b, { item: n }), (0, i.jsx)(L, { item: n })]
                            })
                    ]
                })
        })
    );
});
