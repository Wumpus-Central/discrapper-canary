r.d(t, { default: () => b }), r(953529), r(388685);
var o = r(951288);
r(647438);
var n = r(435935),
    i = r(793030),
    c = r(481060),
    s = r(546791),
    l = r(277537),
    a = r(785681),
    u = r(880257),
    h = r(863552),
    d = r(292352),
    p = r(345909),
    f = r(388032),
    C = r(441076);
let O = {
        [d.MY.USER_INTERACTION]: (0, o.jsx)(h.Z, {
            width: 18,
            height: 18,
        }),
        [d.MY.USER_CALLED]: (0, o.jsx)(c.Csw, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [d.MY.USER_ADD]: (0, o.jsx)(c.iFz, {
            size: "custom",
            color: "currentColor",
            className: C.personWavingIcon,
            width: 22,
            height: 22,
        }),
        [d.MY.GUILD_ADD]: (0, o.jsx)(c.dRF, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [d.MY.GUILD_INTERACTION]: (0, o.jsx)(c.VL1, {
            size: "custom",
            color: "currentColor",
            className: C.threadIcon,
            width: 22,
            height: 22,
        }),
        [d.MY.TOTAL_VOICE_MINUTES]: (0, o.jsx)(c.Csw, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [d.MY.PURCHASES]: (0, o.jsx)(c.EOn, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
    },
    j = (e) => {
        let { header: t, description: r, icon: i } = e;
        return (0, o.jsxs)(n.k, {
            className: C.row,
            grow: 0,
            children: [
                (0, o.jsx)("div", {
                    className: C.iconContainer,
                    children: i,
                }),
                (0, o.jsxs)("div", {
                    className: C.rowContent,
                    children: [
                        (0, o.jsx)(c.Text, {
                            variant: "text-sm/bold",
                            children: t,
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            children: r,
                        }),
                    ],
                }),
            ],
        });
    },
    b = (e) => {
        let { transitionState: t, onClose: r } = e,
            n = (0, l.PO)("family_center_activity_card"),
            c = (0, a.o)(f.intl.string(p.default.q3IRam), f.intl.string(p.default.JNLpDQ)),
            h = (0, u.Z)(),
            d = (0, s._p)(n);
        return (0, o.jsx)(i.Modal, {
            transitionState: t,
            onClose: r,
            actions: [],
            title: c,
            children: d.map((e) => {
                let [t, r] = e;
                return (0, o.jsx)(
                    j,
                    {
                        icon: O[t],
                        header: r.tooltipHeader(),
                        description: r.tooltipDescription(null != h ? h : void 0),
                    },
                    t,
                );
            }),
        });
    };
