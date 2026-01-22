r.d(t, { default: () => g });
var n = r(627968),
    i = r(64700),
    a = r(319060),
    c = r(421380),
    o = r(397927),
    s = r(398866),
    l = r(709066),
    d = r(681827),
    u = r(981355),
    f = r(240248),
    b = r(969508),
    p = r(705751),
    O = r(985018),
    h = r(505712);
let m = (0, f.xI)(a.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    A = (0, f.xI)(a.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    j = (0, f.xI)(a.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    v = (0, f.xI)(a.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function g(e) {
    var t, r, a;
    let { title: f, onClose: g } = e,
        { applicationIconURL: w, applicationName: y, queryParams: _, iframeUrl: I } = (0, b.aV)(e),
        { width: x, height: N } = (0, u.A)(),
        M = i.useMemo(() => {
            let e = Math.min(((N - v - 2 * j) * 16) / 9, A);
            return Math.max(m, Math.min(x - 2 * j, e));
        }, [x, N]);
    return (0, n.jsx)(
        o.EOs,
        ((r = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, e)),
        (a = a =
            {
                size: o.rIJ.DYNAMIC,
                className: h.zr,
                parentComponent: "InteractionIframeModal",
                "data-migration-pending": !0,
                children: (0, n.jsxs)("div", {
                    style: { width: M },
                    children: [
                        (0, n.jsxs)(o.rQ0, {
                            separator: !1,
                            className: h.Hc,
                            "data-migration-pending": !0,
                            children: [
                                (0, n.jsx)(o.euF, {
                                    src: w,
                                    size: o._3J.SIZE_32,
                                    "aria-label": y,
                                    className: h.In,
                                }),
                                (0, n.jsxs)("div", {
                                    className: h.Wh,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            children: [
                                                (0, n.jsx)(o.Heading, {
                                                    variant: "heading-sm/bold",
                                                    children: y,
                                                }),
                                                (0, n.jsx)(o.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "interactive-text-default",
                                                    children: f,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(l.A, {
                                            type: p.nu.BOT,
                                            className: h.AO,
                                            verified: null == (t = e.application.bot) ? void 0 : t.verified,
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(c.$n, {
                                    onClick: g,
                                    innerClassName: h.b,
                                    className: h.cG,
                                    look: c.$n.Looks.BLANK,
                                    size: c.$n.Sizes.NONE,
                                    "aria-label": O.intl.string(O.t.WAI6xu),
                                    "data-migration-pending": !0,
                                    children: (0, n.jsx)(o.PGe, {
                                        size: "md",
                                        color: "currentColor",
                                        className: h.ut,
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(d.A, {
                            aspectRatio: 16 / 9,
                            children: (0, n.jsx)(s.o, {
                                url: I,
                                shouldRefocus: !0,
                                className: h.pU,
                                queryParams: _,
                            }),
                        }),
                    ],
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(a)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
              }),
        r),
    );
}
