r.d(t, { default: () => j }), r(953529), r(388685);
var o = r(54381);
r(473749);
var n = r(793030),
    i = r(481060),
    c = r(546791),
    l = r(785681),
    s = r(880257),
    a = r(863552),
    u = r(292352),
    h = r(517319),
    d = r(388032),
    p = r(956206);
let f = {
        [u.MY.USER_INTERACTION]: (0, o.jsx)(a.Z, {
            width: 18,
            height: 18,
        }),
        [u.MY.USER_CALLED]: (0, o.jsx)(i.Csw, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [u.MY.USER_ADD]: (0, o.jsx)(i.iFz, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [u.MY.GUILD_ADD]: (0, o.jsx)(i.dRF, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [u.MY.GUILD_INTERACTION]: (0, o.jsx)(i.VL1, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [u.MY.TOTAL_VOICE_MINUTES]: (0, o.jsx)(n.T39, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [u.MY.PURCHASES]: (0, o.jsx)(n.ciH, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
    },
    C = (e) => {
        let { header: t, description: r, icon: c } = e;
        return (0, o.jsxs)(n.Kqy, {
            direction: "horizontal",
            className: p.row,
            padding: 16,
            align: "center",
            gap: 16,
            fullWidth: !1,
            children: [
                (0, o.jsx)("div", {
                    className: p.iconContainer,
                    children: c,
                }),
                (0, o.jsxs)("div", {
                    className: p.rowContent,
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
            i = (0, l.o)(d.intl.string(h.default.q3IRal), d.intl.string(h.default.JNLpDZ)),
            a = (0, s.Z)(),
            u = (0, c._p)();
        return (0, o.jsx)(n.Modal, {
            transitionState: t,
            onClose: r,
            actions: [],
            title: i,
            children: (0, o.jsx)(n.Kqy, {
                gap: 8,
                fullWidth: !1,
                children: u.map((e) => {
                    let [t, r] = e;
                    return (0, o.jsx)(
                        C,
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
