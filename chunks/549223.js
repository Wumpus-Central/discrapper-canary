i.d(e, { default: () => j });
var r = i(627968);
i(64700);
var o = i(158954),
    s = i(397927),
    l = i(923531),
    c = i(294433),
    n = i(438732),
    h = i(121733),
    d = i(191627),
    a = i(842130),
    C = i(985018),
    u = i(468707);
let x = {
        [d.NV.USER_INTERACTION]: (0, r.jsx)(h.A, { width: 18, height: 18 }),
        [d.NV.USER_CALLED]: (0, r.jsx)(s._jp, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [d.NV.USER_ADD]: (0, r.jsx)(s.$yI, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [d.NV.GUILD_ADD]: (0, r.jsx)(s.Bxc, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [d.NV.GUILD_INTERACTION]: (0, r.jsx)(s.N$i, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [d.NV.TOTAL_VOICE_MINUTES]: (0, r.jsx)(o.O4, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [d.NV.PURCHASES]: (0, r.jsx)(o.BFk, { size: "custom", color: "currentColor", width: 22, height: 22 }),
    },
    p = (t) => {
        let { header: e, description: i, icon: l } = t;
        return (0, r.jsxs)(o.BJc, {
            direction: "horizontal",
            className: u.nM,
            padding: 16,
            align: "center",
            gap: 16,
            fullWidth: !1,
            children: [
                (0, r.jsx)("div", { className: u.zc, children: l }),
                (0, r.jsxs)("div", {
                    className: u.u4,
                    children: [
                        (0, r.jsx)(s.Text, { variant: "text-sm/bold", children: e }),
                        (0, r.jsx)(s.Text, { variant: "text-xs/medium", children: i }),
                    ],
                }),
            ],
        });
    },
    j = (t) => {
        let { transitionState: e, onClose: i } = t,
            s = (0, c.y)(C.intl.string(a.default.q3IRal), C.intl.string(a.default.JNLpDZ)),
            h = (0, n.A)(),
            d = (0, l.Mo)();
        return (0, r.jsx)(o.Modal, {
            transitionState: e,
            onClose: i,
            actions: [],
            title: s,
            children: (0, r.jsx)(o.BJc, {
                gap: 8,
                fullWidth: !1,
                children: d.map((t) => {
                    let [e, i] = t;
                    return (0, r.jsx)(
                        p,
                        { icon: x[e], header: i.tooltipHeader(), description: i.tooltipDescription(h ?? void 0) },
                        e,
                    );
                }),
            }),
        });
    };
