n.d(t, { $: () => A });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(452027),
    r = n(939249),
    o = n(292666),
    d = n(77729),
    u = n(274372),
    c = n(399925),
    g = n(419954),
    m = n(780964),
    _ = n(985018);
let A = (0, g.E2)(m.X.CLIPS_STORAGE_LOCATION, {
    useSearchTerms: () => [_.intl.string(_.t.s4773E), _.intl.string(_.t.svjwGh)],
    Component: () => {
        let e = (0, l.bG)([u.A], () => u.A.getSettings().storageLocation),
            t = s.useRef(!1),
            n = async () => {
                if (!t.current) {
                    t.current = !0;
                    try {
                        let e = await d.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && c.HU(e[0]);
                    } finally {
                        t.current = !1;
                    }
                }
            };
        return (0, i.jsx)(a.D, {
            label: _.intl.string(_.t.s4773E),
            description: _.intl.string(_.t.svjwGh),
            layout: "horizontal",
            children: (0, i.jsx)(r.D, {
                "aria-label": _.intl.formatToPlainString(_.t.iMONTj, { storageLocation: e }),
                onClick: n,
                children: (0, i.jsx)(o.k, { tabIndex: -1, value: e, editable: !1, "aria-hidden": !0 }),
            }),
        });
    },
});
