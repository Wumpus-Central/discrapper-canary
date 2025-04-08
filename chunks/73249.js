n.d(t, { Z: () => B }), n(388685);
var a = n(200651),
    r = n(192379),
    o = n(120356),
    i = n.n(o),
    c = n(442837),
    s = n(481060),
    l = n(607070),
    u = n(299206),
    d = n(868643),
    p = n(912332),
    m = n(378409),
    g = n(850908),
    _ = n(695346),
    f = n(572004),
    y = n(424218),
    b = n(49012),
    O = n(358085),
    h = n(998502),
    S = n(254109),
    E = n(212459),
    C = n(369171),
    v = n(312097),
    T = n(388032),
    j = n(505348);
function P() {
    return (P =
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
function M(e, t) {
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
    (0, s.Mr3)(v.Q);
}
let D = r.forwardRef(function (e, t) {
    var { onClick: n, tooltipText: r, selected: o, icon: c } = e,
        l = (function (e, t) {
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
        })(e, ['onClick', 'tooltipText', 'selected', 'icon']);
    return (0, a.jsx)(s.ua7, {
        text: r,
        position: 'bottom',
        children: (e) => {
            var r = P(
                {},
                (function (e) {
                    if (null == e) throw TypeError('Cannot destructure ' + e);
                    return e;
                })(e)
            );
            return (0, a.jsx)(
                s.zxk,
                M(
                    x(
                        M(x({}, r), {
                            buttonRef: t,
                            onClick: n,
                            look: s.iLD.BLANK,
                            size: s.PhG.ICON,
                            color: s.Ttl.TRANSPARENT,
                            className: i()(j.actionButton, { [j.selected]: o }),
                            wrapperClassName: j.actionButtonWrapper,
                            innerClassName: j.actionButtonInner,
                            grow: !1
                        }),
                        l
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
function N() {
    let { zoomed: e, setZoomed: t } = (0, E.Y)();
    return (0, a.jsx)(D, {
        onClick: () => {
            (0, S.yg)(e ? S.uG.ZOOM_OUT_BUTTON_PRESSED : S.uG.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? T.NW.string(T.t.vOFof3) : T.NW.string(T.t.Kt4gZ2),
        icon: e ? s.BlJ : s.OyE
    });
}
function A(e) {
    var t, n;
    let { item: o } = e,
        i = null == (t = o.sourceMetadata) ? void 0 : t.message,
        c = null == (n = o.sourceMetadata) ? void 0 : n.identifier,
        l = r.useCallback(() => {
            if (null != i && null != c) {
                if (((0, S.yg)(S.uG.FORWARD_PRESSED), 'embed' === c.type))
                    return void (0, p.l8)({
                        message: i,
                        source: 'media-viewer',
                        forwardOptions: { onlyEmbedIndices: [c.embedIndex] },
                        onRequestSent: I
                    });
                (0, p.l8)({
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
              tooltipText: T.NW.string(T.t.I3ltXF),
              icon: s.WZu
          })
        : null;
}
function w(e) {
    let { item: t } = e,
        [n, o] = r.useState(!1);
    if (!('VIDEO' === t.type || (O.isPlatformEmbedded && null == t.children && 'IMAGE' === t.type && (0, m.gS)(t.url)))) return null;
    let i = (0, m.s$)(t.url);
    async function c() {
        if (((0, S.yg)(S.uG.SAVE_MEDIA_PRESSED), 'VIDEO' === t.type && (0, b.q)({ href: i }), 'IMAGE' === t.type)) {
            o(!0);
            try {
                await h.ZP.saveImage(i), (0, s.showToast)((0, s.createToast)(T.NW.string(T.t.cqpdJS), s.ToastType.SUCCESS));
            } catch (e) {
                (0, s.showToast)((0, s.createToast)(T.NW.string(T.t['8Ve/S0']), s.ToastType.FAILURE));
            } finally {
                o(!1);
            }
        }
    }
    return (0, a.jsx)(D, {
        onClick: c,
        tooltipText: T.NW.string('VIDEO' === t.type ? T.t.JVuuz8 : T.t['S/xNKS']),
        submitting: n,
        icon: s._8t
    });
}
function L(e) {
    var t;
    let { item: n } = e;
    if (!(0, m.Jj)(n.url)) return null;
    let r = (0, m.s$)(null != (t = n.original) ? t : n.url);
    return (0, a.jsx)(D, {
        onClick: () => {
            (0, S.yg)(S.uG.OPEN_LINK_PRESSED), (0, b.q)({ href: r });
        },
        tooltipText: T.NW.string(T.t.q5jLJC),
        icon: s.rgF
    });
}
function R(e) {
    var t, n;
    let { item: r, canCopyImage: o, canCopyLink: i, onClose: c, onSelect: l } = e,
        d = (null == (n = r.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === 'attachment' ? r.sourceMetadata.identifier.attachmentId : null,
        p = (0, u.Z)({
            id: d,
            label: T.NW.string(T.t.nwg3lZ)
        }),
        _ = (function (e) {
            var t;
            let { alt: n, sourceMetadata: r, width: o, height: i } = e,
                c = k(T.NW.string(T.t.ILJuBg), 'name', { subtextLineClamp: 1 }),
                l = k(T.NW.string(T.t['3Nf9u7']), 'size'),
                u = k(T.NW.string(T.t.eOB2eX), 'alt', { subtextLineClamp: 2 });
            if ((null == r || null == (t = r.identifier) ? void 0 : t.type) !== 'attachment') return null;
            let d = (0, g.Z)(r.identifier),
                p = (0, y.BU)(r.identifier.size / 1000);
            return (0, a.jsxs)(
                s.sNh,
                {
                    id: 'media-viewer-details',
                    label: T.NW.string(T.t.sqBLa2),
                    children: [
                        c(d),
                        l(
                            T.NW.formatToPlainString(T.t.DTdonJ, {
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
    async function f() {
        (0, S.yg)(S.uG.COPY_IMAGE_PRESSED);
        let e = (0, m.s$)(r.url);
        try {
            await h.ZP.copyImage(e), (0, s.showToast)((0, s.createToast)(T.NW.string(T.t.bhUpvL), s.ToastType.SUCCESS));
        } catch (e) {
            (0, s.showToast)((0, s.createToast)(T.NW.string(T.t.PTPbj4), s.ToastType.FAILURE));
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
                                label: T.NW.string(T.t.tvUqWl),
                                id: 'media-viewer-copy-image',
                                icon: s.TIy,
                                action: f
                            },
                            'media-viewer-copy-image'
                        ),
                    i &&
                        (0, a.jsx)(
                            s.sNh,
                            {
                                id: 'media-viewer-copy-link',
                                label: T.NW.string(T.t.WqhZsr),
                                icon: s.xPt,
                                action: function () {
                                    var e;
                                    (0, S.yg)(S.uG.COPY_LINK_PRESSED);
                                    let t = (0, m.s$)(null != (e = r.original) ? e : r.url);
                                    O.isPlatformEmbedded ? h.ZP.copy(t) : window.navigator.clipboard.writeText(t), (0, s.showToast)((0, s.createToast)(T.NW.string(T.t['L/PwZW']), s.ToastType.SUCCESS));
                                }
                            },
                            'media-viewer-copy-link'
                        )
                ]
            }),
            _,
            p
        ]
    });
}
function k(e, t, n) {
    let o = r.useCallback((e) => {
        (0, f.JG)(e),
            (0, s.showToast)({
                message: T.NW.string(T.t.mGZ66O),
                type: s.ToastType.SUCCESS,
                id: 'media-viewer-detail-copied'
            });
    }, []);
    return (r) =>
        null != r
            ? (0, a.jsx)(
                  s.sNh,
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
function Z(e) {
    var t, n;
    let { item: o } = e,
        i = r.useRef(null),
        [c, l] = r.useState(!1),
        u = _.Sb.useSetting(),
        d = 'IMAGE' === o.type && O.isPlatformEmbedded && null == o.children && h.ZP.canCopyImage() && (0, m.Lz)(o.url),
        p = (0, m.Jj)(o.url);
    return u || d || p || (null == (n = o.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === 'attachment'
        ? (0, a.jsx)(s.yRy, {
              targetElementRef: i,
              shouldShow: c,
              align: 'left',
              position: 'top',
              spacing: 18,
              onRequestClose: () => l(!1),
              animation: s.yRy.Animation.NONE,
              renderPopout: () =>
                  (0, a.jsx)(R, {
                      item: o,
                      canCopyImage: d,
                      canCopyLink: p,
                      onClose: () => l(!1)
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, a.jsx)(D, {
                      ref: i,
                      tooltipText: T.NW.string(T.t.UKOtz8),
                      onClick: () => {
                          (0, S.yg)(S.uG.MORE_BUTTON_PRESSED), l(!c);
                      },
                      selected: c,
                      icon: s.xhG
                  });
              }
          })
        : null;
}
let B = r.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        o = (0, c.e7)([l.Z], () => l.Z.keyboardModeEnabled),
        s = r.useRef(null),
        u = r.useCallback(() => {
            var e;
            !o && (null == (e = s.current) ? void 0 : e.contains(document.activeElement)) && document.activeElement.blur();
        }, [o]);
    return (
        ('IMAGE' === t.type || !n) &&
        (0, a.jsx)(C.ZP, {
            mode: C.lx.FOCUS_SENSITIVE,
            children: (e) =>
                (0, a.jsxs)('div', {
                    ref: s,
                    className: i()(j.actionButtons, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: u,
                    children: [
                        'IMAGE' === t.type && (0, a.jsx)(N, {}),
                        !n &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(A, { item: t }), (0, a.jsx)(w, { item: t }), (0, a.jsx)(L, { item: t }), (0, a.jsx)(Z, { item: t })]
                            })
                    ]
                })
        })
    );
});
