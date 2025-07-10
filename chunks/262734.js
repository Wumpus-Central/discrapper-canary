(n.d(t, { Z: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(350810),
    c = n(988980),
    u = n(835473),
    d = n(871499),
    p = n(510839),
    h = n(214143),
    f = n(610278),
    g = n(408491),
    m = n(981631),
    b = n(918559),
    _ = n(388032),
    E = n(574682);
let O = {
    [b.MI.NO_CHAT]: E.noChat,
    [b.MI.RESIZABLE]: E.resizable
};
function y(e) {
    let { frame: t } = e,
        n = (0, u.q)(t.applicationId),
        l = (0, s.Z)(),
        y = i.useRef(null),
        I = i.useRef(null),
        [v, C] = i.useState({
            width: 0,
            height: 0
        }),
        S = i.useCallback(() => {
            (0, p.eU)({
                applicationId: t.applicationId,
                layoutMode: g.U.PIP
            });
        }, [t.applicationId]),
        N = i.useCallback(() => {
            (0, p.xT)({ applicationId: t.applicationId });
        }, [t.applicationId]);
    (i.useLayoutEffect(() => {
        if (null == I.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            C({
                width: null != (n = null == (e = I.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = I.current) ? void 0 : t.clientHeight) ? r : 0
            });
        });
        return (e.observe(I.current), () => e.disconnect());
    }, []),
        i.useEffect(() => {
            let e = (e) => {
                null == y.current ||
                    y.current.contains(e.target) ||
                    l ||
                    (0, p.eU)({
                        applicationId: t.applicationId,
                        layoutMode: g.U.PIP
                    });
            };
            return (
                document.addEventListener('mousedown', e),
                () => {
                    document.removeEventListener('mousedown', e);
                }
            );
        }, [t.applicationId, l]));
    let T = v.width / Math.max(v.height, 1) < b.I0,
        P = 0,
        j = 0,
        A = (0, c.Z)(null == n ? void 0 : n.id);
    if (!A) {
        let e = v.width,
            t = v.height;
        T ? ((t = v.width / b.I0) > v.height && (e = (t = v.height) * b.I0), (j = (v.height - t) / 2)) : ((e = Math.min(v.height * b.I0)) > v.width && (t = (e = v.width) / b.I0), (P = (v.width - e) / 2));
    }
    let Z = b.MI.NO_CHAT;
    if (null == n) return null;
    let x = (0, f.ro)(t);
    return (0, r.jsx)(o.f6W, {
        theme: m.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: a()(E.wrapper, O[Z], e),
                ref: y,
                style: {},
                children: [
                    (0, r.jsx)('div', {
                        className: E.contextlessHeader,
                        children: (0, r.jsxs)('div', {
                            className: E.buttonSection,
                            children: [
                                (0, r.jsx)(d.d, {
                                    isTrayButton: !0,
                                    label: _.intl.string(_.t.brPQ5e),
                                    onClick: S,
                                    iconComponent: o.dOc,
                                    themeable: !0
                                }),
                                (0, r.jsx)(d.d, {
                                    isTrayButton: !0,
                                    label: _.intl.string(_.t.cpT0Cg),
                                    onClick: N,
                                    iconComponent: o.Dio,
                                    themeable: !0
                                })
                            ]
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: E.activityPanelContainer,
                        children: (0, r.jsx)('div', {
                            className: a()(E.activityContainer, { [E.activityContainerNoMargin]: A }),
                            style: {
                                paddingLeft: P,
                                paddingRight: P,
                                paddingTop: j,
                                paddingBottom: j
                            },
                            ref: I,
                            children: (0, r.jsx)(h.Z, {
                                className: E.iframe,
                                embedId: x
                            })
                        })
                    })
                ]
            })
    });
}
