i.d(e, { default: () => m });
var l = i(627968);
i(64700);
var s = i(17928),
    n = i(980707),
    r = i(477782),
    a = i(442433),
    o = i(780964),
    c = i(766075),
    u = i(650338),
    p = i(915725),
    d = i(430795),
    g = i(226640),
    h = i(753070),
    b = i(375708);
function m(t) {
    let { onSelect: e } = t,
        i = (0, s.bG)([p.Ay], () => p.Ay.getSettings().clipsQuality),
        m = (0, s.bG)([p.Ay], () => p.Ay.getSettings().clipsLength),
        x = (0, g.Qu)(),
        f = (0, g.gF)(),
        S = (0, g.Fz)();
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
                subtext: b.intl.formatToPlainString(b.t["bTFv/3"], { count: m / 1e3 }),
                children: x.map((t) => {
                    let { id: e, value: i, label: s } = t;
                    return (0, l.jsx)(
                        r.iD,
                        {
                            id: e,
                            group: "clips-length-options",
                            label: s,
                            checked: i === m,
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
                children: f.map((t) => {
                    let { id: e, value: s, label: n } = t;
                    return (0, l.jsx)(
                        r.iD,
                        {
                            id: e,
                            group: "clips-resolution-options",
                            label: n,
                            checked: s === i.resolution,
                            action: () => {
                                let { clipsQuality: t } = p.Ay.getSettings();
                                (0, d.GS)({ resolution: s, frameRate: t.frameRate });
                            },
                        },
                        e,
                    );
                }),
            }),
            (0, l.jsx)(r.Dr, {
                id: "clips-framerate",
                subtext: (0, u.Bs)(i.frameRate),
                label: b.intl.string(b.t["2wScL1"]),
                children: S.map((t) => {
                    let { id: e, value: s, label: n } = t;
                    return (0, l.jsx)(
                        r.iD,
                        {
                            id: e,
                            group: "clips-framerate-options",
                            label: n,
                            checked: s === i.frameRate,
                            action: () => {
                                let { clipsQuality: t } = p.Ay.getSettings();
                                (0, d.GS)({ resolution: t.resolution, frameRate: s });
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
}
