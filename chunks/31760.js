i.d(t, { J: () => O, q: () => N });
var n = i(627968),
    l = i(64700),
    s = i(397927),
    r = i(419954),
    a = i(933297),
    u = i(780964),
    o = i(143177),
    d = i(350017),
    _ = i(819188),
    T = i(231137),
    A = i(151098),
    S = i(716005),
    E = i(144010),
    c = i(175631),
    g = i(430443),
    I = i(997442),
    C = i(985018);
function N(e) {
    let { label: t, description: i, placeholder: r, overrideId: a, setOverride: u, fetchOverride: o } = e,
        [d, _] = l.useState(a ?? ""),
        T = l.useRef(null),
        [A, S] = l.useState(0),
        E = () => {
            null != T.current && (clearTimeout(T.current), (T.current = null));
        };
    return (
        l.useEffect(() => E, []),
        (0, n.jsx)(s.D0$, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, n.jsx)(s.ksK, {
                placeholder: r,
                error: 2 === A ? "Failed to fetch override" : void 0,
                successMessage: 3 === A ? "Override applied" : void 0,
                value: d,
                onChange: (e) => {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((_(e), E(), 0 === e.length)) {
                            S(0), u(null);
                            return;
                        }
                        T.current = setTimeout(() => {
                            S(1),
                                o(e).then((t) => {
                                    S(null == t ? 2 : 3), null != t && u(e);
                                });
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let O = (0, r.zZ)(u.X.DEV_OVERRIDES, {
    useTitle: () => "Overrides",
    buildLayout: () => [g.U, I.l, _.B, T.q, S.g, o.Y, c.s, A.t, E.T, d.s],
    useInlineNotice: () => ({
        type: a.lT.INLINE_NOTICE,
        noticeType: "info",
        useText: () => C.intl.format(C.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
    }),
});
