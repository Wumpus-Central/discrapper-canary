a.d(n, { default: () => N });
var i = a(200651),
    t = a(192379),
    o = a(477690),
    r = a(481060),
    l = a(208156),
    s = a(385499),
    c = a(264165),
    d = a(885006),
    u = a(624138),
    h = a(293979),
    _ = a(674563),
    m = a(388032),
    x = a(393283);
let f = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    v = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    I = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    M = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function N(e) {
    var n;
    let { title: a, onClose: o } = e,
        { applicationIconURL: u, applicationName: N, queryParams: A, iframeUrl: p } = (0, h.b8)(e),
        { width: w, height: g } = (0, d.Z)(),
        E = t.useMemo(() => {
            let e = Math.min(((g - M - 2 * I) * 16) / 9, v);
            return Math.max(f, Math.min(w - 2 * I, e));
        }, [w, g]);
    return (0, i.jsx)(r.Y0X, {
        ...e,
        size: r.CgR.DYNAMIC,
        className: x.root,
        children: (0, i.jsxs)('div', {
            style: { width: E },
            children: [
                (0, i.jsxs)(r.xBx, {
                    separator: !1,
                    className: x.modalHeader,
                    children: [
                        (0, i.jsx)(r.qEK, {
                            src: u,
                            size: r.EFr.SIZE_32,
                            'aria-label': N,
                            className: x.applicationIcon
                        }),
                        (0, i.jsxs)('div', {
                            className: x.flexRow,
                            children: [
                                (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(r.X6q, {
                                            variant: 'heading-sm/bold',
                                            children: N
                                        }),
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'interactive-normal',
                                            children: a
                                        })
                                    ]
                                }),
                                (0, i.jsx)(s.Z, {
                                    type: _.Hb.BOT,
                                    className: x.botTag,
                                    verified: null === (n = e.application.bot) || void 0 === n ? void 0 : n.verified
                                })
                            ]
                        }),
                        (0, i.jsx)(r.zxk, {
                            onClick: o,
                            innerClassName: x.closeButton,
                            className: x.closeButtonContainer,
                            look: r.zxk.Looks.BLANK,
                            size: r.zxk.Sizes.NONE,
                            'aria-label': m.intl.string(m.t.WAI6xs),
                            children: (0, i.jsx)(r.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: x.closeIcon
                            })
                        })
                    ]
                }),
                (0, i.jsx)(c.Z, {
                    aspectRatio: 16 / 9,
                    children: (0, i.jsx)(l.J, {
                        url: p,
                        shouldRefocus: !0,
                        className: x.iframe,
                        queryParams: A
                    })
                })
            ]
        })
    });
}
