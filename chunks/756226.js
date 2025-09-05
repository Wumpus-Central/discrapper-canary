r.d(t, { default: () => w }), r(953529), r(388685);
var o = r(951288);
r(647438);
var n = r(435935),
    i = r(82659),
    c = r(481060),
    s = r(546791),
    l = r(277537),
    a = r(259756),
    u = r(785681),
    h = r(880257),
    d = r(863552),
    p = r(292352),
    f = r(412297),
    C = r(388032),
    O = r(80103);
let j = {
        [p.MY.USER_INTERACTION]: (0, o.jsx)(d.Z, {
            width: 18,
            height: 18,
        }),
        [p.MY.USER_CALLED]: (0, o.jsx)(c.Csw, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [p.MY.USER_ADD]: (0, o.jsx)(c.iFz, {
            size: "custom",
            color: "currentColor",
            className: O.personWavingIcon,
            width: 22,
            height: 22,
        }),
        [p.MY.GUILD_ADD]: (0, o.jsx)(c.dRF, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [p.MY.GUILD_INTERACTION]: (0, o.jsx)(c.VL1, {
            size: "custom",
            color: "currentColor",
            className: O.threadIcon,
            width: 22,
            height: 22,
        }),
        [p.MY.TOTAL_VOICE_MINUTES]: (0, o.jsx)(c.Csw, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [p.MY.PURCHASES]: (0, o.jsx)(c.EOn, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
    },
    b = (e) => {
        let { header: t, description: r, icon: i } = e;
        return (0, o.jsxs)(n.k, {
            className: O.row,
            grow: 0,
            children: [
                (0, o.jsx)("div", {
                    className: O.iconContainer,
                    children: i,
                }),
                (0, o.jsxs)("div", {
                    className: O.rowContent,
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
    w = (e) => {
        let { transitionState: t, onClose: r } = e,
            n = (0, l.PO)("family_center_activity_card"),
            c = (0, u.o)(C.intl.string(f.default.q3IRam), C.intl.string(f.default.JNLpDQ)),
            d = (0, h.Z)(),
            p = (0, s._p)(n),
            O = (0, a.Xi)({ location: "family_center_tooltip_modal_web" });
        return (0, o.jsx)(i.Modal, {
            transitionState: t,
            onClose: r,
            actions: [],
            title: c,
            children: p.map((e) => {
                let [t, r] = e;
                return (0, o.jsx)(
                    b,
                    {
                        icon: j[t],
                        header: r.tooltipHeader(),
                        description: r.tooltipDescription(null != d ? d : void 0, O),
                    },
                    t,
                );
            }),
        });
    };
