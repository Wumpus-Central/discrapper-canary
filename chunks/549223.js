i.d(e, { default: () => v });
var r = i(627968);
i(64700);
var o = i(406810),
    s = i(360669),
    l = i(331322),
    n = i(189213),
    c = i(978940),
    h = i(214947),
    d = i(704333),
    a = i(276293),
    C = i(834730),
    u = i(923531),
    x = i(294433),
    p = i(438732),
    j = i(121733),
    N = i(191627),
    g = i(602339),
    m = i(985018),
    w = i(974150);
let _ = {
        [N.NV.USER_INTERACTION]: (0, r.jsx)(j.A, { width: 18, height: 18 }),
        [N.NV.USER_CALLED]: (0, r.jsx)(c._, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [N.NV.USER_ADD]: (0, r.jsx)(h.$, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [N.NV.GUILD_ADD]: (0, r.jsx)(d.B, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [N.NV.GUILD_INTERACTION]: (0, r.jsx)(a.N, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [N.NV.TOTAL_VOICE_MINUTES]: (0, r.jsx)(o.O, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [N.NV.PURCHASES]: (0, r.jsx)(s.B, { size: "custom", color: "currentColor", width: 22, height: 22 }),
    },
    f = (t) => {
        let { header: e, description: i, icon: o } = t;
        return (0, r.jsxs)(l.B, {
            direction: "horizontal",
            className: w.nM,
            padding: 16,
            align: "center",
            gap: 16,
            fullWidth: !1,
            children: [
                (0, r.jsx)("div", { className: w.zc, children: o }),
                (0, r.jsxs)("div", {
                    className: w.u4,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-sm/bold", children: e }),
                        (0, r.jsx)(C.E, { variant: "text-xs/medium", children: i }),
                    ],
                }),
            ],
        });
    },
    v = (t) => {
        let { transitionState: e, onClose: i } = t,
            o = (0, x.y)(m.intl.string(g.default.q3IRal), m.intl.string(g.default.JNLpDZ)),
            s = (0, p.A)(),
            c = (0, u.Mo)();
        return (0, r.jsx)(n.Modal, {
            transitionState: e,
            onClose: i,
            actions: [],
            title: o,
            children: (0, r.jsx)(l.B, {
                gap: 8,
                fullWidth: !1,
                children: c.map((t) => {
                    let [e, i] = t;
                    return (0, r.jsx)(
                        f,
                        { icon: _[e], header: i.tooltipHeader(), description: i.tooltipDescription(s ?? void 0) },
                        e,
                    );
                }),
            }),
        });
    };
