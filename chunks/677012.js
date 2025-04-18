n.d(t, { default: () => j });
var r = n(200651),
    o = n(192379),
    a = n(477690),
    i = n(481060),
    c = n(208156),
    l = n(385499),
    s = n(264165),
    u = n(885006),
    d = n(624138),
    f = n(293979),
    b = n(674563),
    p = n(388032),
    O = n(243114);
let h = (0, d.Mg)(a.Z.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    m = (0, d.Mg)(a.Z.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    v = (0, d.Mg)(a.Z.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    g = (0, d.Mg)(a.Z.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function j(e) {
    var t, n, a;
    let { title: d, onClose: j } = e,
        { applicationIconURL: w, applicationName: _, queryParams: y, iframeUrl: x } = (0, f.b8)(e),
        { width: I, height: N } = (0, u.Z)(),
        M = o.useMemo(() => {
            let e = Math.min(((N - g - 2 * v) * 16) / 9, m);
            return Math.max(h, Math.min(I - 2 * v, e));
        }, [I, N]);
    return (0, r.jsx)(
        i.Y0X,
        ((n = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, e)),
        (a = a =
            {
                size: i.CgR.DYNAMIC,
                className: O.root,
                children: (0, r.jsxs)('div', {
                    style: { width: M },
                    children: [
                        (0, r.jsxs)(i.xBx, {
                            separator: !1,
                            className: O.modalHeader,
                            children: [
                                (0, r.jsx)(i.qEK, {
                                    src: w,
                                    size: i.EFr.SIZE_32,
                                    'aria-label': _,
                                    className: O.applicationIcon
                                }),
                                (0, r.jsxs)('div', {
                                    className: O.flexRow,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            children: [
                                                (0, r.jsx)(i.X6q, {
                                                    variant: 'heading-sm/bold',
                                                    children: _
                                                }),
                                                (0, r.jsx)(i.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'interactive-normal',
                                                    children: d
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(l.Z, {
                                            type: b.Hb.BOT,
                                            className: O.botTag,
                                            verified: null == (t = e.application.bot) ? void 0 : t.verified
                                        })
                                    ]
                                }),
                                (0, r.jsx)(i.zxk, {
                                    onClick: j,
                                    innerClassName: O.closeButton,
                                    className: O.closeButtonContainer,
                                    look: i.zxk.Looks.BLANK,
                                    size: i.zxk.Sizes.NONE,
                                    'aria-label': p.NW.string(p.t.WAI6xs),
                                    children: (0, r.jsx)(i.Dio, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: O.closeIcon
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(s.Z, {
                            aspectRatio: 16 / 9,
                            children: (0, r.jsx)(c.J, {
                                url: x,
                                shouldRefocus: !0,
                                className: O.iframe,
                                queryParams: y
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
