i.d(e, { $: () => A });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(77729),
    a = i(274372),
    u = i(399925),
    o = i(419954),
    d = i(780964),
    T = i(985018);
let A = (0, o.E2)(d.X.CLIPS_STORAGE_LOCATION, {
    useSearchTerms: () => [T.intl.string(T.t.s4773E), T.intl.string(T.t.svjwGh)],
    Component: () => {
        let t = (0, l.bG)([a.A], () => a.A.getSettings().storageLocation),
            e = async () => {
                let t = await r.A.fileManager.showOpenDialog({ properties: ["openDirectory", "createDirectory"] });
                t.length > 0 && u.HU(t[0]);
            };
        return (0, n.jsx)(s.D0$, {
            label: T.intl.string(T.t.s4773E),
            description: T.intl.string(T.t.svjwGh),
            layout: "horizontal",
            children: (0, n.jsx)(s.DUT, {
                "aria-label": T.intl.formatToPlainString(T.t.iMONTj, { storageLocation: t }),
                onClick: e,
                children: (0, n.jsx)(s.ksK, { tabIndex: -1, value: t, editable: !1, "aria-hidden": !0 }),
            }),
        });
    },
});
