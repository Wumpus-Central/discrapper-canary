i.d(a, { default: () => p });
var n = i(200651),
    t = i(192379),
    o = i(477690),
    s = i(481060),
    r = i(208156),
    c = i(385499),
    l = i(264165),
    d = i(885006),
    u = i(624138),
    h = i(293979),
    _ = i(674563),
    x = i(388032),
    m = i(347860);
let I = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    N = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    M = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    v = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function p(e) {
    var a;
    let { title: i, onClose: o } = e,
        { applicationIconURL: u, applicationName: p, queryParams: A, iframeUrl: w } = (0, h.b8)(e),
        { width: f, height: E } = (0, d.Z)(),
        T = t.useMemo(() => {
            let e = Math.min(((E - v - 2 * M) * 16) / 9, N);
            return Math.max(I, Math.min(f - 2 * M, e));
        }, [f, E]);
    return (0, n.jsx)(s.Y0X, {
        ...e,
        size: s.CgR.DYNAMIC,
        className: m.root,
        children: (0, n.jsxs)('div', {
            style: { width: T },
            children: [
                (0, n.jsxs)(s.xBx, {
                    separator: !1,
                    className: m.modalHeader,
                    children: [
                        (0, n.jsx)(s.qEK, {
                            src: u,
                            size: s.EFr.SIZE_32,
                            'aria-label': p,
                            className: m.applicationIcon
                        }),
                        (0, n.jsxs)('div', {
                            className: m.flexRow,
                            children: [
                                (0, n.jsxs)('div', {
                                    children: [
                                        (0, n.jsx)(s.X6q, {
                                            variant: 'heading-sm/bold',
                                            children: p
                                        }),
                                        (0, n.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'interactive-normal',
                                            children: i
                                        })
                                    ]
                                }),
                                (0, n.jsx)(c.Z, {
                                    type: _.Hb.BOT,
                                    className: m.botTag,
                                    verified: null === (a = e.application.bot) || void 0 === a ? void 0 : a.verified
                                })
                            ]
                        }),
                        (0, n.jsx)(s.zxk, {
                            onClick: o,
                            innerClassName: m.closeButton,
                            className: m.closeButtonContainer,
                            look: s.zxk.Looks.BLANK,
                            size: s.zxk.Sizes.NONE,
                            'aria-label': x.intl.string(x.t.WAI6xs),
                            children: (0, n.jsx)(s.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: m.closeIcon
                            })
                        })
                    ]
                }),
                (0, n.jsx)(l.Z, {
                    aspectRatio: 16 / 9,
                    children: (0, n.jsx)(r.J, {
                        url: w,
                        shouldRefocus: !0,
                        className: m.iframe,
                        queryParams: A
                    })
                })
            ]
        })
    });
}
