n.d(t, { $: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(77729),
    o = n(274372),
    d = n(399925),
    c = n(419954),
    u = n(780964),
    m = n(985018);
let g = (0, c.E2)(u.X.CLIPS_STORAGE_LOCATION, {
    useSearchTerms: () => [m.intl.string(m.t.s4773E), m.intl.string(m.t.svjwGh)],
    Component: () => {
        let e = (0, l.bG)([o.A], () => o.A.getSettings().storageLocation),
            t = s.useRef(!1),
            n = async () => {
                if (!t.current) {
                    t.current = !0;
                    try {
                        let e = await r.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && d.HU(e[0]);
                    } finally {
                        t.current = !1;
                    }
                }
            };
        return (0, i.jsx)(a.D0$, {
            label: m.intl.string(m.t.s4773E),
            description: m.intl.string(m.t.svjwGh),
            layout: "horizontal",
            children: (0, i.jsx)(a.DUT, {
                "aria-label": m.intl.formatToPlainString(m.t.iMONTj, { storageLocation: e }),
                onClick: n,
                children: (0, i.jsx)(a.ksK, { tabIndex: -1, value: e, editable: !1, "aria-hidden": !0 }),
            }),
        });
    },
});
