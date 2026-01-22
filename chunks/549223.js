r.d(t, { default: () => j }), r(228524), r(896048);
var o = r(627968);
r(64700);
var n = r(158954),
    i = r(397927),
    c = r(923531),
    l = r(294433),
    s = r(945276),
    a = r(121733),
    u = r(191627),
    d = r(842130),
    p = r(985018),
    h = r(468707);
let f = {
        [u.NV.USER_INTERACTION]: (0, o.jsx)(a.A, {
            width: 18,
            height: 18,
        }),
        [u.NV.USER_CALLED]: (0, o.jsx)(i._jp, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [u.NV.USER_ADD]: (0, o.jsx)(i.$yI, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [u.NV.GUILD_ADD]: (0, o.jsx)(i.Bxc, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [u.NV.GUILD_INTERACTION]: (0, o.jsx)(i.N$i, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [u.NV.TOTAL_VOICE_MINUTES]: (0, o.jsx)(n.O4, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [u.NV.PURCHASES]: (0, o.jsx)(n.BFk, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
    },
    b = (e) => {
        let { header: t, description: r, icon: c } = e;
        return (0, o.jsxs)(n.BJc, {
            direction: "horizontal",
            className: h.nM,
            padding: 16,
            align: "center",
            gap: 16,
            fullWidth: !1,
            children: [
                (0, o.jsx)("div", {
                    className: h.zc,
                    children: c,
                }),
                (0, o.jsxs)("div", {
                    className: h.u4,
                    children: [
                        (0, o.jsx)(i.Text, {
                            variant: "text-sm/bold",
                            children: t,
                        }),
                        (0, o.jsx)(i.Text, {
                            variant: "text-xs/medium",
                            children: r,
                        }),
                    ],
                }),
            ],
        });
    },
    j = (e) => {
        let { transitionState: t, onClose: r } = e,
            i = (0, l.y)(p.intl.string(d.default.q3IRal), p.intl.string(d.default.JNLpDZ)),
            a = (0, s.A)(),
            u = (0, c.Mo)();
        return (0, o.jsx)(n.Modal, {
            transitionState: t,
            onClose: r,
            actions: [],
            title: i,
            children: (0, o.jsx)(n.BJc, {
                gap: 8,
                fullWidth: !1,
                children: u.map((e) => {
                    let [t, r] = e;
                    return (0, o.jsx)(
                        b,
                        {
                            icon: f[t],
                            header: r.tooltipHeader(),
                            description: r.tooltipDescription(null != a ? a : void 0),
                        },
                        t,
                    );
                }),
            }),
        });
    };
