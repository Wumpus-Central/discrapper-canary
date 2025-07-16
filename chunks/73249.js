(n.d(t, { Z: () => Z }), n(388685));
var a = n(255367),
    r = n(73800),
    i = n(120356),
    o = n.n(i),
    c = n(442837),
    l = n(481060),
    s = n(607070),
    u = n(299206),
    d = n(868643),
    p = n(912332),
    m = n(296182),
    g = n(850908),
    y = n(695346),
    f = n(572004),
    b = n(424218),
    O = n(49012),
    _ = n(358085),
    h = n(998502),
    S = n(254109),
    v = n(212459),
    j = n(369171),
    C = n(312097),
    T = n(388032),
    E = n(505348);
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
function P(e) {
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
function M() {
    (0, l.Mr3)(C.Q);
}
let w = r.forwardRef(function (e, t) {
    var { tooltipText: n } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++) ((n = i[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['tooltipText']);
    return (0, a.jsx)(l.ua7, {
        text: n,
        position: 'bottom',
        children: (e) => {
            var i,
                o,
                c = x(
                    {},
                    (function (e) {
                        if (null == e) throw TypeError('Cannot destructure ' + e);
                        return e;
                    })(e)
                );
            return (0, a.jsx)(
                l.hU,
                P(
                    ((i = P({}, c)),
                    (o = o =
                        {
                            buttonRef: t,
                            variant: 'icon-only',
                            'aria-label': n,
                            size: 'sm'
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var a = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, a);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    i),
                    r
                )
            );
        }
    });
});
function D() {
    let { zoomed: e, setZoomed: t } = (0, v.Y)();
    return (0, a.jsx)(w, {
        onClick: () => {
            ((0, S.yg)(e ? S.uG.ZOOM_OUT_BUTTON_PRESSED : S.uG.ZOOM_IN_BUTTON_PRESSED), t(!e));
        },
        tooltipText: e ? T.intl.string(T.t.vOFof3) : T.intl.string(T.t.Kt4gZ2),
        icon: e ? l.BlJ : l.OyE
    });
}
function I(e) {
    var t, n;
    let { item: i } = e,
        o = null == (t = i.sourceMetadata) ? void 0 : t.message,
        c = null == (n = i.sourceMetadata) ? void 0 : n.identifier,
        s = r.useCallback(() => {
            if (null != o && null != c) {
                if (((0, S.yg)(S.uG.FORWARD_PRESSED), 'embed' === c.type))
                    return void (0, p.l8)({
                        message: o,
                        source: 'media-viewer',
                        forwardOptions: { onlyEmbedIndices: [c.embedIndex] },
                        onRequestSent: M
                    });
                (0, p.l8)({
                    message: o,
                    source: 'media-viewer',
                    forwardOptions: { onlyAttachmentIds: [c.attachmentId] },
                    onRequestSent: M
                });
            }
        }, [o, c]);
    return null != o && null != c && (0, d.h)(o)
        ? (0, a.jsx)(w, {
              onClick: s,
              tooltipText: T.intl.string(T.t.I3ltXF),
              icon: l.WZu
          })
        : null;
}
function A(e) {
    let { item: t } = e,
        [n, i] = r.useState(!1);
    if (!('VIDEO' === t.type || (_.isPlatformEmbedded && null == t.children && 'IMAGE' === t.type && (0, m.gS)(t.url, t.contentType)))) return null;
    let o = (0, m.s$)(t.url, t.contentType, m.wV);
    async function c() {
        if (((0, S.yg)(S.uG.SAVE_MEDIA_PRESSED), 'VIDEO' === t.type && (0, O.q)({ href: o }), 'IMAGE' === t.type)) {
            i(!0);
            try {
                (await h.ZP.saveImage(o, t.contentType, m.wV), (0, l.showToast)((0, l.createToast)(T.intl.string(T.t.cqpdJS), l.ToastType.SUCCESS)));
            } catch (e) {
                (0, l.showToast)((0, l.createToast)(T.intl.string(T.t['8Ve/S0']), l.ToastType.FAILURE));
            } finally {
                i(!1);
            }
        }
    }
    return (0, a.jsx)(w, {
        onClick: c,
        tooltipText: T.intl.string('VIDEO' === t.type ? T.t.JVuuz8 : T.t['S/xNKS']),
        loading: n,
        icon: l._8t
    });
}
function L(e) {
    var t;
    let { item: n } = e;
    if (!(0, m.Jj)(n.url)) return null;
    let r = (0, m.s$)(null != (t = n.original) ? t : n.url, n.contentType);
    return (0, a.jsx)(w, {
        onClick: () => {
            ((0, S.yg)(S.uG.OPEN_LINK_PRESSED), (0, O.q)({ href: r }));
        },
        tooltipText: T.intl.string(T.t.q5jLJC),
        icon: l.rgF
    });
}
function N(e) {
    var t, n;
    let { item: r, canCopyImage: i, canCopyLink: o, onClose: c, onSelect: s } = e,
        d = (null == (n = r.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === 'attachment' ? r.sourceMetadata.identifier.attachmentId : null,
        p = (0, u.Z)({
            id: d,
            label: T.intl.string(T.t.nwg3lZ)
        }),
        y = (function (e) {
            var t;
            let { alt: n, sourceMetadata: r, width: i, height: o } = e,
                c = R(T.intl.string(T.t.ILJuBg), 'name', { subtextLineClamp: 1 }),
                s = R(T.intl.string(T.t['3Nf9u7']), 'size'),
                u = R(T.intl.string(T.t.eOB2eX), 'alt', { subtextLineClamp: 2 });
            if ((null == r || null == (t = r.identifier) ? void 0 : t.type) !== 'attachment') return null;
            let d = (0, g.Z)(r.identifier),
                p = (0, b.BU)(r.identifier.size / 1000);
            return (0, a.jsxs)(
                l.sNh,
                {
                    id: 'media-viewer-details',
                    label: T.intl.string(T.t.sqBLa2),
                    children: [
                        c(d),
                        s(
                            T.intl.formatToPlainString(T.t.DTdonJ, {
                                width: i,
                                height: o,
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
        (0, S.yg)(S.uG.COPY_IMAGE_PRESSED);
        let e = (0, m.s$)(r.url, r.contentType, m.wV);
        try {
            (await h.ZP.copyImage(e, r.contentType), (0, l.showToast)((0, l.createToast)(T.intl.string(T.t.bhUpvL), l.ToastType.SUCCESS)));
        } catch (e) {
            (0, l.showToast)((0, l.createToast)(T.intl.string(T.t.PTPbj4), l.ToastType.FAILURE));
        }
    }
    return (0, a.jsxs)(l.v2r, {
        navId: 'image-menu',
        'aria-label': 'placeholder',
        onClose: c,
        onSelect: s,
        children: [
            (0, a.jsxs)(l.kSQ, {
                children: [
                    i &&
                        (0, a.jsx)(
                            l.sNh,
                            {
                                label: T.intl.string(T.t.tvUqWl),
                                id: 'media-viewer-copy-image',
                                icon: l.TIy,
                                action: O
                            },
                            'media-viewer-copy-image'
                        ),
                    o &&
                        (0, a.jsx)(
                            l.sNh,
                            {
                                id: 'media-viewer-copy-link',
                                label: T.intl.string(T.t.WqhZsr),
                                icon: l.xPt,
                                action: function () {
                                    var e;
                                    (0, S.yg)(S.uG.COPY_LINK_PRESSED);
                                    let t = (0, m.s$)(null != (e = r.original) ? e : r.url, r.contentType);
                                    (0, f.JG)(t, () => (0, l.showToast)((0, l.createToast)(T.intl.string(T.t['L/PwZW']), l.ToastType.SUCCESS)));
                                }
                            },
                            'media-viewer-copy-link'
                        )
                ]
            }),
            y,
            p
        ]
    });
}
function R(e, t, n) {
    let i = r.useCallback((e) => {
        (0, f.JG)(e, () =>
            (0, l.showToast)({
                message: T.intl.string(T.t.mGZ66O),
                type: l.ToastType.SUCCESS,
                id: 'media-viewer-detail-copied'
            })
        );
    }, []);
    return (r) =>
        null != r
            ? (0, a.jsx)(
                  l.sNh,
                  P(
                      {
                          action: () => i(r),
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
    let { item: i } = e,
        o = r.useRef(null),
        [c, s] = r.useState(!1),
        u = y.Sb.useSetting(),
        d = 'IMAGE' === i.type && null == i.children && !i.animated && (0, m.Lz)(i.url, i.contentType),
        p = (0, m.Jj)(i.url);
    return u || d || p || (null == (n = i.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === 'attachment'
        ? (0, a.jsx)(l.yRy, {
              targetElementRef: o,
              shouldShow: c,
              align: 'left',
              position: 'top',
              spacing: 18,
              onRequestClose: () => s(!1),
              animation: l.yRy.Animation.NONE,
              renderPopout: () =>
                  (0, a.jsx)(N, {
                      item: i,
                      canCopyImage: d,
                      canCopyLink: p,
                      onClose: () => s(!1)
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, a.jsx)(w, {
                      ref: o,
                      tooltipText: T.intl.string(T.t.UKOtz8),
                      onClick: () => {
                          ((0, S.yg)(S.uG.MORE_BUTTON_PRESSED), s(!c));
                      },
                      icon: l.xhG
                  });
              }
          })
        : null;
}
let Z = r.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        i = (0, c.e7)([s.Z], () => s.Z.keyboardModeEnabled),
        l = r.useRef(null),
        u = r.useCallback(() => {
            var e;
            !i && (null == (e = l.current) ? void 0 : e.contains(document.activeElement)) && document.activeElement.blur();
        }, [i]);
    return (
        ('IMAGE' === t.type || !n) &&
        (0, a.jsx)(j.ZP, {
            mode: j.lx.FOCUS_SENSITIVE,
            children: (e) =>
                (0, a.jsxs)('div', {
                    ref: l,
                    className: o()(E.actionButtons, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: u,
                    children: [
                        'IMAGE' === t.type && (0, a.jsx)(D, {}),
                        !n &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(I, { item: t }), (0, a.jsx)(A, { item: t }), (0, a.jsx)(L, { item: t }), (0, a.jsx)(k, { item: t })]
                            })
                    ]
                })
        })
    );
});
