i.d(e, { $: () => S });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(77729),
    u = i(274372),
    a = i(399925),
    o = i(419954),
    T = i(780964),
    A = i(985018);
let S = (0, o.E2)(T.X.CLIPS_STORAGE_LOCATION, {
    useSearchTerms: () => [A.intl.string(A.t.s4773E), A.intl.string(A.t.svjwGh)],
    Component: () => {
        let t = (0, l.bG)([u.A], () => u.A.getSettings().storageLocation),
            e = async () => {
                let t = await r.A.fileManager.showOpenDialog({
                    properties: ["openDirectory", "createDirectory"],
                });
                t.length > 0 && a.HU(t[0]);
            };
        return (0, n.jsx)(s.D0$, {
            label: A.intl.string(A.t.s4773E),
            description: A.intl.string(A.t.svjwGh),
            layout: "horizontal",
            children: (0, n.jsx)(s.DUT, {
                "aria-label": A.intl.formatToPlainString(A.t.iMONTj, { storageLocation: t }),
                onClick: e,
                children: (0, n.jsx)(s.ksK, {
                    tabIndex: -1,
                    value: t,
                    editable: !1,
                    "aria-hidden": !0,
                }),
            }),
        });
    },
});
