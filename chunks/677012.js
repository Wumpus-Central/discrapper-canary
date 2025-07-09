n.d(t, { default: () => w });
var r = n(255367),
    o = n(73800),
    a = n(477690),
    i = n(755721),
    c = n(481060),
    l = n(208156),
    s = n(385499),
    u = n(264165),
    d = n(885006),
    f = n(624138),
    p = n(293979),
    b = n(674563),
    O = n(388032),
    h = n(243114);
let m = (0, f.Mg)(a.Z.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    v = (0, f.Mg)(a.Z.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    g = (0, f.Mg)(a.Z.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    j = (0, f.Mg)(a.Z.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function w(e) {
    var t, n, a;
    let { title: f, onClose: w } = e,
        { applicationIconURL: _, applicationName: y, queryParams: x, iframeUrl: I } = (0, p.b8)(e),
        { width: M, height: N } = (0, d.Z)(),
        A = o.useMemo(() => {
            let e = Math.min(((N - j - 2 * g) * 16) / 9, v);
            return Math.max(m, Math.min(M - 2 * g, e));
        }, [M, N]);
    return (0, r.jsx)(
        c.Y0X,
        ((n = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })({}, e)),
        (a = a =
            {
                size: c.CgR.DYNAMIC,
                className: h.root,
                parentComponent: 'InteractionIframeModal',
                children: (0, r.jsxs)('div', {
                    style: { width: A },
                    children: [
                        (0, r.jsxs)(c.xBx, {
                            separator: !1,
                            className: h.modalHeader,
                            children: [
                                (0, r.jsx)(c.qEK, {
                                    src: _,
                                    size: c.EFr.SIZE_32,
                                    'aria-label': y,
                                    className: h.applicationIcon
                                }),
                                (0, r.jsxs)('div', {
                                    className: h.flexRow,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            children: [
                                                (0, r.jsx)(c.X6q, {
                                                    variant: 'heading-sm/bold',
                                                    children: y
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'interactive-normal',
                                                    children: f
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(s.Z, {
                                            type: b.Hb.BOT,
                                            className: h.botTag,
                                            verified: null == (t = e.application.bot) ? void 0 : t.verified
                                        })
                                    ]
                                }),
                                (0, r.jsx)(i.zx, {
                                    onClick: w,
                                    innerClassName: h.closeButton,
                                    className: h.closeButtonContainer,
                                    look: i.zx.Looks.BLANK,
                                    size: i.zx.Sizes.NONE,
                                    'aria-label': O.intl.string(O.t.WAI6xs),
                                    children: (0, r.jsx)(c.Dio, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: h.closeIcon
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(u.Z, {
                            aspectRatio: 16 / 9,
                            children: (0, r.jsx)(l.J, {
                                url: I,
                                shouldRefocus: !0,
                                className: h.iframe,
                                queryParams: x
                            })
                        })
                    ]
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(a)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
              }),
        n)
    );
}
