n.d(t, { default: () => _ });
var r = n(54381),
    a = n(473749),
    o = n(477690),
    i = n(755721),
    c = n(481060),
    s = n(208156),
    l = n(385499),
    u = n(264165),
    d = n(885006),
    p = n(624138),
    f = n(293979),
    b = n(674563),
    O = n(388032),
    h = n(499330);
let m = (0, p.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    g = (0, p.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    j = (0, p.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    w = (0, p.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function _(e) {
    var t, n, o;
    let { title: p, onClose: _ } = e,
        { applicationIconURL: v, applicationName: y, queryParams: x, iframeUrl: I } = (0, f.b8)(e),
        { width: M, height: N } = (0, d.Z)(),
        A = a.useMemo(() => {
            let e = Math.min(((N - w - 2 * j) * 16) / 9, g);
            return Math.max(m, Math.min(M - 2 * j, e));
        }, [M, N]);
    return (0, r.jsx)(
        c.Y0X,
        ((n = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, e)),
        (o = o =
            {
                size: c.CgR.DYNAMIC,
                className: h.root,
                parentComponent: "InteractionIframeModal",
                "data-migration-pending": !0,
                children: (0, r.jsxs)("div", {
                    style: { width: A },
                    children: [
                        (0, r.jsxs)(c.xBx, {
                            separator: !1,
                            className: h.modalHeader,
                            "data-migration-pending": !0,
                            children: [
                                (0, r.jsx)(c.qEK, {
                                    src: v,
                                    size: c.EFr.SIZE_32,
                                    "aria-label": y,
                                    className: h.applicationIcon,
                                }),
                                (0, r.jsxs)("div", {
                                    className: h.flexRow,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsx)(c.Heading, {
                                                    variant: "heading-sm/bold",
                                                    children: y,
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "interactive-normal",
                                                    children: p,
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(l.Z, {
                                            type: b.Hb.BOT,
                                            className: h.botTag,
                                            verified: null == (t = e.application.bot) ? void 0 : t.verified,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(i.zx, {
                                    onClick: _,
                                    innerClassName: h.closeButton,
                                    className: h.closeButtonContainer,
                                    look: i.zx.Looks.BLANK,
                                    size: i.zx.Sizes.NONE,
                                    "aria-label": O.intl.string(O.t.WAI6xu),
                                    "data-migration-pending": !0,
                                    children: (0, r.jsx)(c.Dio, {
                                        size: "md",
                                        color: "currentColor",
                                        className: h.closeIcon,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(u.Z, {
                            aspectRatio: 16 / 9,
                            children: (0, r.jsx)(s.J, {
                                url: I,
                                shouldRefocus: !0,
                                className: h.iframe,
                                queryParams: x,
                            }),
                        }),
                    ],
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(o)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
              }),
        n),
    );
}
