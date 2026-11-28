var l = i(477900);
i(582128);
var n = i(855986),
    s = i(165862),
    r = i(477782),
    a = i(442433),
    o = i(780964),
    c = i(766075),
    p = i(419490),
    u = i(489496),
    d = i(226640),
    g = i(753070),
    h = i(636107),
    b = i(792996);
i.d(
    e,
    {},
    {
        default: function (t) {
            let { onSelect: e } = t,
                i = (0, n.bG)([p.Ay], () => p.Ay.getSettings().clipsQuality),
                x = (0, n.bG)([p.Ay], () => p.Ay.getSettings().clipsLength),
                f = (0, d.Qu)(),
                m = (0, d.gF)(),
                S = (0, d.Fz)();
            return (0, l.jsxs)(s.W, {
                "data-menu-migrated": !0,
                navId: "clips-context",
                "aria-label": b.intl.string(b.t.J1hsY2),
                onClose: a.Z_,
                onSelect: e,
                children: [
                    (0, l.jsx)(r.Dr, {
                        id: "clips-length",
                        label: b.intl.string(b.t.OgfUio),
                        subtext: b.intl.formatToPlainString(b.t["bTFv/3"], { count: x / 1e3 }),
                        children: f.map((t) => {
                            let { id: e, value: i, label: n } = t;
                            return (0, l.jsx)(
                                r.iD,
                                {
                                    id: e,
                                    group: "clips-length-options",
                                    label: n,
                                    checked: i === x,
                                    action: () => (0, u.h$)(i),
                                },
                                e,
                            );
                        }),
                    }),
                    (0, l.jsx)(r.Dr, {
                        id: "clips-resolution",
                        subtext: (0, g.zr)(i.resolution),
                        label: b.intl.string(b.t.aFudZJ),
                        children: m.map((t) => {
                            let { id: e, value: n, label: s } = t;
                            return (0, l.jsx)(
                                r.iD,
                                {
                                    id: e,
                                    group: "clips-resolution-options",
                                    label: s,
                                    checked: n === i.resolution,
                                    action: () => {
                                        let { clipsQuality: t } = p.Ay.getSettings();
                                        (0, u.GS)({ ...t, resolution: n });
                                    },
                                },
                                e,
                            );
                        }),
                    }),
                    (0, l.jsx)(r.Dr, {
                        id: "clips-framerate",
                        subtext: b.intl.formatToPlainString(h.default.eztvbI, { fps: i.frameRate }),
                        label: b.intl.string(b.t["2wScL1"]),
                        children: S.map((t) => {
                            let { id: e, value: n, label: s } = t;
                            return (0, l.jsx)(
                                r.iD,
                                {
                                    id: e,
                                    group: "clips-framerate-options",
                                    label: s,
                                    checked: n === i.frameRate,
                                    action: () => {
                                        let { clipsQuality: t } = p.Ay.getSettings();
                                        (0, u.GS)({ ...t, frameRate: n });
                                    },
                                },
                                e,
                            );
                        }),
                    }),
                    (0, l.jsx)(r.rX, {
                        children: (0, l.jsx)(r.Dr, {
                            id: "clips-settings",
                            label: b.intl.string(b.t.J1hsY2),
                            action: () => (0, c.openUserSettings)(o.X.CLIPS_PANEL),
                        }),
                    }),
                ],
            });
        },
    },
);
