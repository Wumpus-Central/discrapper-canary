i.d(e, { J: () => O, q: () => C });
var n = i(627968),
    l = i(64700),
    s = i(397927),
    r = i(419954),
    a = i(933297),
    u = i(780964),
    o = i(143177),
    d = i(350017),
    T = i(819188),
    A = i(231137),
    S = i(151098),
    E = i(716005),
    g = i(144010),
    _ = i(175631),
    c = i(430443),
    I = i(997442),
    N = i(985018);
function C(t) {
    let { label: e, description: i, placeholder: r, overrideId: a, setOverride: u, fetchOverride: o } = t,
        [d, T] = l.useState(a ?? ""),
        A = l.useRef(null),
        [S, E] = l.useState(0),
        g = () => {
            null != A.current && (clearTimeout(A.current), (A.current = null));
        };
    return (
        l.useEffect(() => g, []),
        (0, n.jsx)(s.D0$, {
            layout: "horizontal-responsive",
            label: e,
            description: i,
            children: (0, n.jsx)(s.ksK, {
                placeholder: r,
                error: 2 === S ? "Failed to fetch override" : void 0,
                successMessage: 3 === S ? "Override applied" : void 0,
                value: d,
                onChange: (t) => {
                    if (!(t.length > 0) || /^[0-9]+$/.test(t)) {
                        if ((T(t), g(), 0 === t.length)) {
                            E(0), u(null);
                            return;
                        }
                        A.current = setTimeout(() => {
                            E(1),
                                o(t).then((e) => {
                                    E(null == e ? 2 : 3), null != e && u(t);
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
    buildLayout: () => [c.U, I.l, T.B, A.q, E.g, o.Y, _.s, S.t, g.T, d.s],
    useInlineNotice: () => ({
        type: a.W.INLINE_NOTICE,
        noticeType: "info",
        useText: () => N.intl.format(N.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
    }),
});
