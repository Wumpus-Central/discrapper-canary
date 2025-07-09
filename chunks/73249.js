(n.d(t, { Z: () => G }), n(388685));
var a = n(255367),
    r = n(73800),
    o = n(120356),
    i = n.n(o),
    c = n(442837),
    l = n(755721),
    s = n(481060),
    u = n(607070),
    p = n(299206),
    d = n(868643),
    m = n(912332),
    g = n(296182),
    f = n(850908),
    y = n(695346),
    b = n(572004),
    O = n(424218),
    _ = n(49012),
    h = n(358085),
    S = n(998502),
    v = n(254109),
    j = n(212459),
    C = n(369171),
    T = n(312097),
    E = n(388032),
    P = n(505348);
function x() {
    return (x =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
        }).apply(this, arguments);
}
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                ((a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a));
            }));
    }
    return e;
}
function w(e, t) {
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
    (0, s.Mr3)(T.Q);
}
let D = r.forwardRef(function (e, t) {
    var { onClick: n, tooltipText: r, selected: o, icon: c } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        o = Object.keys(e);
                    for (a = 0; a < o.length; a++) ((n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (a = 0; a < o.length; a++) ((n = o[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['onClick', 'tooltipText', 'selected', 'icon']);
    return (0, a.jsx)(s.ua7, {
        text: r,
        position: 'bottom',
        children: (e) => {
            var r = x(
                {},
                (function (e) {
                    if (null == e) throw TypeError('Cannot destructure ' + e);
                    return e;
                })(e)
            );
            return (0, a.jsx)(
                l.zx,
                w(
                    M(
                        w(M({}, r), {
                            buttonRef: t,
                            onClick: n,
                            look: l.iL.BLANK,
                            size: l.Ph.ICON,
                            color: l.Tt.TRANSPARENT,
                            className: i()(P.actionButton, { [P.selected]: o }),
                            wrapperClassName: P.actionButtonWrapper,
                            innerClassName: P.actionButtonInner,
                            grow: !1
                        }),
                        u
                    ),
                    {
                        children: c({
                            color: 'currentColor',
                            size: 'sm'
                        })
                    }
                )
            );
        }
    });
});
function A() {
    let { zoomed: e, setZoomed: t } = (0, j.Y)();
    return (0, a.jsx)(D, {
        onClick: () => {
            ((0, v.yg)(e ? v.uG.ZOOM_OUT_BUTTON_PRESSED : v.uG.ZOOM_IN_BUTTON_PRESSED), t(!e));
        },
        tooltipText: e ? E.intl.string(E.t.vOFof3) : E.intl.string(E.t.Kt4gZ2),
        icon: e ? s.BlJ : s.OyE
    });
}
function L(e) {
    var t, n;
    let { item: o } = e,
        i = null == (t = o.sourceMetadata) ? void 0 : t.message,
        c = null == (n = o.sourceMetadata) ? void 0 : n.identifier,
        l = r.useCallback(() => {
            if (null != i && null != c) {
                if (((0, v.yg)(v.uG.FORWARD_PRESSED), 'embed' === c.type))
                    return void (0, m.l8)({
                        message: i,
                        source: 'media-viewer',
                        forwardOptions: { onlyEmbedIndices: [c.embedIndex] },
                        onRequestSent: I
                    });
                (0, m.l8)({
                    message: i,
                    source: 'media-viewer',
                    forwardOptions: { onlyAttachmentIds: [c.attachmentId] },
                    onRequestSent: I
                });
            }
        }, [i, c]);
    return null != i && null != c && (0, d.h)(i)
        ? (0, a.jsx)(D, {
              onClick: l,
              tooltipText: E.intl.string(E.t.I3ltXF),
              icon: s.WZu
          })
        : null;
}
function N(e) {
    let { item: t } = e,
        [n, o] = r.useState(!1);
    if (!('VIDEO' === t.type || (h.isPlatformEmbedded && null == t.children && 'IMAGE' === t.type && (0, g.gS)(t.url, t.contentType)))) return null;
    let i = (0, g.s$)(t.url, t.contentType, g.wV);
    async function c() {
        if (((0, v.yg)(v.uG.SAVE_MEDIA_PRESSED), 'VIDEO' === t.type && (0, _.q)({ href: i }), 'IMAGE' === t.type)) {
            o(!0);
            try {
                (await S.ZP.saveImage(i, t.contentType, g.wV), (0, s.showToast)((0, s.createToast)(E.intl.string(E.t.cqpdJS), s.ToastType.SUCCESS)));
            } catch (e) {
                (0, s.showToast)((0, s.createToast)(E.intl.string(E.t['8Ve/S0']), s.ToastType.FAILURE));
            } finally {
                o(!1);
            }
        }
    }
    return (0, a.jsx)(D, {
        onClick: c,
        tooltipText: E.intl.string('VIDEO' === t.type ? E.t.JVuuz8 : E.t['S/xNKS']),
        submitting: n,
        icon: s._8t
    });
}
function R(e) {
    var t;
    let { item: n } = e;
    if (!(0, g.Jj)(n.url)) return null;
    let r = (0, g.s$)(null != (t = n.original) ? t : n.url, n.contentType);
    return (0, a.jsx)(D, {
        onClick: () => {
            ((0, v.yg)(v.uG.OPEN_LINK_PRESSED), (0, _.q)({ href: r }));
        },
        tooltipText: E.intl.string(E.t.q5jLJC),
        icon: s.rgF
    });
}
function k(e) {
    var t, n;
    let { item: r, canCopyImage: o, canCopyLink: i, onClose: c, onSelect: l } = e,
        u = (null == (n = r.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === 'attachment' ? r.sourceMetadata.identifier.attachmentId : null,
        d = (0, p.Z)({
            id: u,
            label: E.intl.string(E.t.nwg3lZ)
        }),
        m = (function (e) {
            var t;
            let { alt: n, sourceMetadata: r, width: o, height: i } = e,
                c = Z(E.intl.string(E.t.ILJuBg), 'name', { subtextLineClamp: 1 }),
                l = Z(E.intl.string(E.t['3Nf9u7']), 'size'),
                u = Z(E.intl.string(E.t.eOB2eX), 'alt', { subtextLineClamp: 2 });
            if ((null == r || null == (t = r.identifier) ? void 0 : t.type) !== 'attachment') return null;
            let p = (0, f.Z)(r.identifier),
                d = (0, O.BU)(r.identifier.size / 1000);
            return (0, a.jsxs)(
                s.sNh,
                {
                    id: 'media-viewer-details',
                    label: E.intl.string(E.t.sqBLa2),
                    children: [
                        c(p),
                        l(
                            E.intl.formatToPlainString(E.t.DTdonJ, {
                                width: o,
                                height: i,
                                fileSize: d
                            })
                        ),
                        u(n)
                    ]
                },
                'media-viewer-details'
            );
        })(r);
    async function y() {
        (0, v.yg)(v.uG.COPY_IMAGE_PRESSED);
        let e = (0, g.s$)(r.url, r.contentType, g.wV);
        try {
            (await S.ZP.copyImage(e, r.contentType), (0, s.showToast)((0, s.createToast)(E.intl.string(E.t.bhUpvL), s.ToastType.SUCCESS)));
        } catch (e) {
            (0, s.showToast)((0, s.createToast)(E.intl.string(E.t.PTPbj4), s.ToastType.FAILURE));
        }
    }
    return (0, a.jsxs)(s.v2r, {
        navId: 'image-menu',
        'aria-label': 'placeholder',
        onClose: c,
        onSelect: l,
        children: [
            (0, a.jsxs)(s.kSQ, {
                children: [
                    o &&
                        (0, a.jsx)(
                            s.sNh,
                            {
                                label: E.intl.string(E.t.tvUqWl),
                                id: 'media-viewer-copy-image',
                                icon: s.TIy,
                                action: y
                            },
                            'media-viewer-copy-image'
                        ),
                    i &&
                        (0, a.jsx)(
                            s.sNh,
                            {
                                id: 'media-viewer-copy-link',
                                label: E.intl.string(E.t.WqhZsr),
                                icon: s.xPt,
                                action: function () {
                                    var e;
                                    (0, v.yg)(v.uG.COPY_LINK_PRESSED);
                                    let t = (0, g.s$)(null != (e = r.original) ? e : r.url, r.contentType);
                                    (0, b.JG)(t, () => (0, s.showToast)((0, s.createToast)(E.intl.string(E.t['L/PwZW']), s.ToastType.SUCCESS)));
                                }
                            },
                            'media-viewer-copy-link'
                        )
                ]
            }),
            m,
            d
        ]
    });
}
function Z(e, t, n) {
    let o = r.useCallback((e) => {
        (0, b.JG)(e, () =>
            (0, s.showToast)({
                message: E.intl.string(E.t.mGZ66O),
                type: s.ToastType.SUCCESS,
                id: 'media-viewer-detail-copied'
            })
        );
    }, []);
    return (r) =>
        null != r
            ? (0, a.jsx)(
                  s.sNh,
                  M(
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
function B(e) {
    var t, n;
    let { item: o } = e,
        i = r.useRef(null),
        [c, l] = r.useState(!1),
        u = y.Sb.useSetting(),
        p = 'IMAGE' === o.type && null == o.children && !o.animated && (0, g.Lz)(o.url, o.contentType),
        d = (0, g.Jj)(o.url);
    return u || p || d || (null == (n = o.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === 'attachment'
        ? (0, a.jsx)(s.yRy, {
              targetElementRef: i,
              shouldShow: c,
              align: 'left',
              position: 'top',
              spacing: 18,
              onRequestClose: () => l(!1),
              animation: s.yRy.Animation.NONE,
              renderPopout: () =>
                  (0, a.jsx)(k, {
                      item: o,
                      canCopyImage: p,
                      canCopyLink: d,
                      onClose: () => l(!1)
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, a.jsx)(D, {
                      ref: i,
                      tooltipText: E.intl.string(E.t.UKOtz8),
                      onClick: () => {
                          ((0, v.yg)(v.uG.MORE_BUTTON_PRESSED), l(!c));
                      },
                      selected: c,
                      icon: s.xhG
                  });
              }
          })
        : null;
}
let G = r.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        o = (0, c.e7)([u.Z], () => u.Z.keyboardModeEnabled),
        l = r.useRef(null),
        s = r.useCallback(() => {
            var e;
            !o && (null == (e = l.current) ? void 0 : e.contains(document.activeElement)) && document.activeElement.blur();
        }, [o]);
    return (
        ('IMAGE' === t.type || !n) &&
        (0, a.jsx)(C.ZP, {
            mode: C.lx.FOCUS_SENSITIVE,
            children: (e) =>
                (0, a.jsxs)('div', {
                    ref: l,
                    className: i()(P.actionButtons, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: s,
                    children: [
                        'IMAGE' === t.type && (0, a.jsx)(A, {}),
                        !n &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(L, { item: t }), (0, a.jsx)(N, { item: t }), (0, a.jsx)(R, { item: t }), (0, a.jsx)(B, { item: t })]
                            })
                    ]
                })
        })
    );
});
