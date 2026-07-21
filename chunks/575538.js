i.d(e, { default: () => x });
var l = i(627968);
i(64700);
var s = i(17928),
    n = i(980707),
    r = i(477782),
    a = i(442433),
    c = i(780964),
    o = i(766075),
    p = i(650338),
    u = i(915725),
    d = i(430795),
    g = i(226640),
    h = i(753070),
    b = i(375708);
function x(t) {
    let { onSelect: e } = t,
        i = (0, s.bG)([u.Ay], () => u.Ay.getSettings().clipsQuality),
        x = (0, s.bG)([u.Ay], () => u.Ay.getSettings().clipsLength),
        m = (0, g.Qu)(),
        S = (0, g.gF)(),
        f = (0, g.Fz)();
    return (0, l.jsxs)(n.W, {
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
                children: m.map((t) => {
                    let { id: e, value: i, label: s } = t;
                    return (0, l.jsx)(
                        r.iD,
                        {
                            id: e,
                            group: "clips-length-options",
                            label: s,
                            checked: i === x,
                            action: () => (0, d.h$)(i),
                        },
                        e,
                    );
                }),
            }),
            (0, l.jsx)(r.Dr, {
                id: "clips-resolution",
                subtext: (0, h.zr)(i.resolution),
                label: b.intl.string(b.t.aFudZJ),
                children: S.map((t) => {
                    let { id: e, value: s, label: n } = t;
                    return (0, l.jsx)(
                        r.iD,
                        {
                            id: e,
                            group: "clips-resolution-options",
                            label: n,
                            checked: s === i.resolution,
                            action: () => {
                                let { clipsQuality: t } = u.Ay.getSettings();
                                (0, d.GS)({ ...t, resolution: s });
                            },
                        },
                        e,
                    );
                }),
            }),
            (0, l.jsx)(r.Dr, {
                id: "clips-framerate",
                subtext: (0, p.Bs)(i.frameRate),
                label: b.intl.string(b.t["2wScL1"]),
                children: f.map((t) => {
                    let { id: e, value: s, label: n } = t;
                    return (0, l.jsx)(
                        r.iD,
                        {
                            id: e,
                            group: "clips-framerate-options",
                            label: n,
                            checked: s === i.frameRate,
                            action: () => {
                                let { clipsQuality: t } = u.Ay.getSettings();
                                (0, d.GS)({ ...t, frameRate: s });
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
                    action: () => (0, o.openUserSettings)(c.X.CLIPS_PANEL),
                }),
            }),
        ],
    });
}
