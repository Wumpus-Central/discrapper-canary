n.d(t, { Z: () => B }), n(47120);
var a = n(200651),
    r = n(192379),
    o = n(120356),
    i = n.n(o),
    c = n(481060),
    s = n(299206),
    l = n(346610),
    u = n(868643),
    d = n(912332),
    p = n(378409),
    m = n(850908),
    g = n(695346),
    _ = n(572004),
    y = n(424218),
    O = n(49012),
    f = n(358085),
    b = n(998502),
    h = n(254109),
    S = n(212459),
    C = n(369171),
    v = n(701865),
    E = n(388032),
    T = n(427955);
function j() {
    return (j =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
        }).apply(this, arguments);
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I() {
    (0, c.Mr3)(v.U);
}
function D(e) {
    var { onClick: t, tooltipText: n, children: r, selected: o } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        o = Object.keys(e);
                    for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (a = 0; a < o.length; a++) (n = o[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['onClick', 'tooltipText', 'children', 'selected']);
    return (0, a.jsx)(c.ua7, {
        text: n,
        children: (e) => {
            var n = j(
                {},
                (function (e) {
                    if (null == e) throw TypeError('Cannot destructure ' + e);
                    return e;
                })(e)
            );
            return (0, a.jsx)(
                c.zxk,
                P(
                    x(
                        P(x({}, n), {
                            onClick: t,
                            look: c.iLD.BLANK,
                            size: c.PhG.ICON,
                            color: c.Ttl.CUSTOM,
                            className: i()(T.actionButton, { [T.selected]: o }),
                            wrapperClassName: T.actionButtonWrapper,
                            innerClassName: T.actionButtonInner,
                            grow: !1
                        }),
                        s
                    ),
                    { children: r }
                )
            );
        }
    });
}
function M() {
    let { zoomed: e, setZoomed: t } = (0, S.Y)();
    return (0, a.jsx)(D, {
        onClick: () => {
            (0, h.yg)(e ? h.uG.ZOOM_OUT_BUTTON_PRESSED : h.uG.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? E.NW.string(E.t.vOFof3) : E.NW.string(E.t.Kt4gZ2),
        children: e ? (0, a.jsx)(c.BlJ, {}) : (0, a.jsx)(c.OyE, {})
    });
}
function A(e) {
    var t, n;
    let { item: o } = e,
        i = null === (t = o.sourceMetadata) || void 0 === t ? void 0 : t.message,
        s = null === (n = o.sourceMetadata) || void 0 === n ? void 0 : n.identifier,
        p = r.useCallback(() => {
            if (null != i && null != s) {
                if (((0, h.yg)(h.uG.FORWARD_PRESSED), 'embed' === s.type)) {
                    (0, d.l8)({
                        message: i,
                        source: 'media-viewer',
                        forwardOptions: { onlyEmbedIndices: [s.embedIndex] },
                        onRequestSent: I
                    });
                    return;
                }
                (0, d.l8)({
                    message: i,
                    source: 'media-viewer',
                    forwardOptions: { onlyAttachmentIds: [s.attachmentId] },
                    onRequestSent: I
                });
            }
        }, [i, s]),
        { canForwardMessages: m } = (0, l.yk)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return null != i && m && (0, u.h)(i)
        ? (0, a.jsx)(D, {
              onClick: p,
              tooltipText: E.NW.string(E.t.I3ltXF),
              children: (0, a.jsx)(c.WZu, {})
          })
        : null;
}
function w(e) {
    let { item: t } = e,
        [n, o] = r.useState(!1);
    if (!('VIDEO' === t.type || (f.isPlatformEmbedded && null == t.children && 'IMAGE' === t.type && (0, p.gS)(t.url)))) return null;
    let i = (0, p.s$)(t.url);
    async function s() {
        if (((0, h.yg)(h.uG.SAVE_MEDIA_PRESSED), 'VIDEO' === t.type && (0, O.q)({ href: i }), 'IMAGE' === t.type)) {
            o(!0);
            try {
                await b.ZP.saveImage(i), (0, c.showToast)((0, c.createToast)(E.NW.string(E.t.cqpdJS), c.ToastType.SUCCESS));
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(E.NW.string(E.t['8Ve/S0']), c.ToastType.FAILURE));
            } finally {
                o(!1);
            }
        }
    }
    return (0, a.jsx)(D, {
        onClick: s,
        tooltipText: E.NW.string('VIDEO' === t.type ? E.t.JVuuz8 : E.t['S/xNKS']),
        submitting: n,
        children: (0, a.jsx)(c._8t, {})
    });
}
function N(e) {
    var t;
    let { item: n } = e;
    if (!(0, p.Jj)(n.url)) return null;
    let r = (0, p.s$)(null !== (t = n.original) && void 0 !== t ? t : n.url);
    return (0, a.jsx)(D, {
        onClick: () => {
            (0, h.yg)(h.uG.OPEN_LINK_PRESSED), (0, O.q)({ href: r });
        },
        tooltipText: E.NW.string(E.t.q5jLJC),
        children: (0, a.jsx)(c.rgF, {})
    });
}
function L(e) {
    var t, n;
    let { item: r, canCopyImage: o, canCopyLink: i, onClose: l, onSelect: u } = e,
        d = (null === (n = r.sourceMetadata) || void 0 === n ? void 0 : null === (t = n.identifier) || void 0 === t ? void 0 : t.type) === 'attachment' ? r.sourceMetadata.identifier.attachmentId : null,
        g = (0, s.Z)({
            id: d,
            label: E.NW.string(E.t.nwg3lZ)
        }),
        _ = (function (e) {
            var t;
            let { alt: n, sourceMetadata: r, width: o, height: i } = e,
                s = R(E.NW.string(E.t.ILJuBg), 'name', { subtextLineClamp: 1 }),
                l = R(E.NW.string(E.t.sPO3io), 'size'),
                u = R(E.NW.string(E.t.eOB2eX), 'alt', { subtextLineClamp: 2 });
            if ((null == r ? void 0 : null === (t = r.identifier) || void 0 === t ? void 0 : t.type) !== 'attachment') return null;
            let d = (0, m.Z)(r.identifier),
                p = (0, y.BU)(r.identifier.size / 1000);
            return (0, a.jsxs)(
                c.sNh,
                {
                    id: 'media-viewer-details',
                    label: E.NW.string(E.t.GoCQxc),
                    children: [
                        s(d),
                        l(
                            E.NW.formatToPlainString(E.t.DTdonJ, {
                                width: o,
                                height: i,
                                fileSize: p
                            })
                        ),
                        u(n)
                    ]
                },
                'media-viewer-details'
            );
        })(r);
    async function O() {
        (0, h.yg)(h.uG.COPY_IMAGE_PRESSED);
        let e = (0, p.s$)(r.url);
        try {
            await b.ZP.copyImage(e), (0, c.showToast)((0, c.createToast)(E.NW.string(E.t.bhUpvL), c.ToastType.SUCCESS));
        } catch (e) {
            (0, c.showToast)((0, c.createToast)(E.NW.string(E.t.PTPbj4), c.ToastType.FAILURE));
        }
    }
    return (0, a.jsxs)(c.v2r, {
        navId: 'image-menu',
        'aria-label': 'placeholder',
        onClose: l,
        onSelect: u,
        children: [
            _,
            g,
            (0, a.jsxs)(c.kSQ, {
                children: [
                    o &&
                        (0, a.jsx)(
                            c.sNh,
                            {
                                label: E.NW.string(E.t.tvUqWl),
                                id: 'media-viewer-copy-image',
                                icon: c.TIy,
                                action: O
                            },
                            'media-viewer-copy-image'
                        ),
                    i &&
                        (0, a.jsx)(
                            c.sNh,
                            {
                                id: 'media-viewer-copy-link',
                                label: E.NW.string(E.t.WqhZsr),
                                icon: c.xPt,
                                action: function () {
                                    var e;
                                    (0, h.yg)(h.uG.COPY_LINK_PRESSED);
                                    let t = (0, p.s$)(null !== (e = r.original) && void 0 !== e ? e : r.url);
                                    f.isPlatformEmbedded ? b.ZP.copy(t) : window.navigator.clipboard.writeText(t), (0, c.showToast)((0, c.createToast)(E.NW.string(E.t['L/PwZW']), c.ToastType.SUCCESS));
                                }
                            },
                            'media-viewer-copy-link'
                        )
                ]
            })
        ]
    });
}
function R(e, t, n) {
    let o = r.useCallback((e) => {
        (0, _.JG)(e),
            (0, c.showToast)({
                message: E.NW.string(E.t.mGZ66O),
                type: c.ToastType.SUCCESS,
                id: 'media-viewer-detail-copied'
            });
    }, []);
    return (r) =>
        null != r
            ? (0, a.jsx)(
                  c.sNh,
                  x(
                      {
                          action: () => o(r),
                          label: e,
                          subtext: r,
                          id: t
                      },
                      n
                  ),
                  t
              )
            : null;
}
function k(e) {
    var t, n;
    let { item: o } = e,
        [i, s] = r.useState(!1),
        l = g.Sb.useSetting(),
        u = 'IMAGE' === o.type && f.isPlatformEmbedded && null == o.children && b.ZP.canCopyImage() && (0, p.Lz)(o.url),
        d = (0, p.Jj)(o.url);
    return l || u || d || (null === (n = o.sourceMetadata) || void 0 === n ? void 0 : null === (t = n.identifier) || void 0 === t ? void 0 : t.type) === 'attachment'
        ? (0, a.jsx)(c.yRy, {
              shouldShow: i,
              align: 'left',
              position: 'top',
              spacing: 18,
              onRequestClose: () => s(!1),
              animation: c.yRy.Animation.NONE,
              renderPopout: () =>
                  (0, a.jsx)(L, {
                      item: o,
                      canCopyImage: u,
                      canCopyLink: d,
                      onClose: () => s(!1)
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, a.jsx)(D, {
                      tooltipText: E.NW.string(E.t.UKOtz8),
                      onClick: () => {
                          (0, h.yg)(h.uG.MORE_BUTTON_PRESSED), s(!i);
                      },
                      selected: i,
                      children: (0, a.jsx)(c.xhG, {})
                  });
              }
          })
        : null;
}
let B = r.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e;
    return (
        ('IMAGE' === t.type || !n) &&
        (0, a.jsx)(C.ZP, {
            children: (e) =>
                (0, a.jsxs)('div', {
                    className: i()(T.actionButtons, e),
                    onMouseDown: (e) => e.stopPropagation(),
                    children: [
                        'IMAGE' === t.type && (0, a.jsx)(M, {}),
                        !n &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(A, { item: t }), (0, a.jsx)(w, { item: t }), (0, a.jsx)(N, { item: t }), (0, a.jsx)(k, { item: t })]
                            })
                    ]
                })
        })
    );
});
