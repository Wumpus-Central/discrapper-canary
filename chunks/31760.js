i.d(e, {
    J: () => C,
    q: () => N,
}),
    i(228524),
    i(896048),
    i(747238);
var n = i(627968),
    l = i(64700),
    s = i(397927),
    r = i(419954),
    u = i(933297),
    a = i(780964),
    o = i(143177),
    T = i(350017),
    A = i(819188),
    d = i(231137),
    S = i(151098),
    E = i(716005),
    _ = i(144010),
    g = i(175631),
    c = i(430443),
    I = i(997442),
    O = i(985018);

function N(t) {
    let { label: e, description: i, placeholder: r, overrideId: u, setOverride: a, fetchOverride: o } = t,
        [T, A] = l.useState(null != u ? u : ""),
        d = l.useRef(null),
        [S, E] = l.useState(0),
        _ = () => {
            null != d.current && (clearTimeout(d.current), (d.current = null));
        };
    return (
        l.useEffect(() => _, []),
        (0, n.jsx)(s.D0$, {
            layout: "horizontal-responsive",
            label: e,
            description: i,
            children: (0, n.jsx)(s.ksK, {
                placeholder: r,
                error: 2 === S ? "Failed to fetch override" : void 0,
                successMessage: 3 === S ? "Override applied" : void 0,
                value: T,
                onChange: (t) => {
                    if (!(t.length > 0) || /^[0-9]+$/.test(t)) {
                        if ((A(t), _(), 0 === t.length)) {
                            E(0), a(null);
                            return;
                        }
                        d.current = setTimeout(() => {
                            E(1),
                                o(t).then((e) => {
                                    E(null == e ? 2 : 3), null != e && a(t);
                                });
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let C = (0, r.zZ)(a.X.DEV_OVERRIDES, {
    useTitle: () => "Overrides",
    buildLayout: () => [c.U, I.l, A.B, d.q, E.g, o.Y, g.s, S.t, _.T, T.s],
    useInlineNotice: () => ({
        type: u.W.INLINE_NOTICE,
        noticeType: "info",
        useText: () =>
            O.intl.format(O.t.UeZJlg, {
                link: "https://i.dis.gd/dev-settings-changes",
            }),
    }),
});
