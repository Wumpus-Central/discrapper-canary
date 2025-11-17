r.d(e, { default: () => O }), r(953529), r(388685);
var o = r(54381);
r(473749);
var n = r(793030),
    i = r(481060),
    c = r(546791),
    l = r(277537),
    s = r(785681),
    a = r(880257),
    u = r(863552),
    h = r(292352),
    d = r(597754),
    p = r(388032),
    f = r(441076);
let C = {
        [h.MY.USER_INTERACTION]: (0, o.jsx)(u.Z, {
            width: 18,
            height: 18,
        }),
        [h.MY.USER_CALLED]: (0, o.jsx)(i.Csw, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [h.MY.USER_ADD]: (0, o.jsx)(i.iFz, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [h.MY.GUILD_ADD]: (0, o.jsx)(i.dRF, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [h.MY.GUILD_INTERACTION]: (0, o.jsx)(i.VL1, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [h.MY.TOTAL_VOICE_MINUTES]: (0, o.jsx)(n.T39, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
        [h.MY.PURCHASES]: (0, o.jsx)(n.ciH, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
        }),
    },
    j = (t) => {
        let { header: e, description: r, icon: c } = t;
        return (0, o.jsxs)(n.Kqy, {
            direction: "horizontal",
            className: f.row,
            padding: 16,
            align: "center",
            gap: 16,
            fullWidth: !1,
            children: [
                (0, o.jsx)("div", {
                    className: f.iconContainer,
                    children: c,
                }),
                (0, o.jsxs)("div", {
                    className: f.rowContent,
                    children: [
                        (0, o.jsx)(i.Text, {
                            variant: "text-sm/bold",
                            children: e,
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
    O = (t) => {
        let { transitionState: e, onClose: r } = t,
            i = (0, l.PO)("family_center_activity_card"),
            u = (0, s.o)(p.intl.string(d.default.q3IRal), p.intl.string(d.default.JNLpDZ)),
            h = (0, a.Z)(),
            f = (0, c._p)(i);
        return (0, o.jsx)(n.Modal, {
            transitionState: e,
            onClose: r,
            actions: [],
            title: u,
            children: (0, o.jsx)(n.Kqy, {
                gap: 8,
                fullWidth: !1,
                children: f.map((t) => {
                    let [e, r] = t;
                    return (0, o.jsx)(
                        j,
                        {
                            icon: C[e],
                            header: r.tooltipHeader(),
                            description: r.tooltipDescription(null != h ? h : void 0),
                        },
                        e,
                    );
                }),
            }),
        });
    };
