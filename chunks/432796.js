n.d(e, { Z: () => O });
var i = n(951288);
n(647438);
var l = n(442837),
    r = n(481060),
    u = n(579806),
    s = n(924557),
    a = n(435064),
    o = n(39604),
    c = n(509613),
    d = n(313789),
    E = n(388032);
let O = (0, c.ON)(d.n.CLIPS_STORAGE_LOCATION, {
    useSearchTerms: () => [E.intl.string(E.t.s4773E), E.intl.string(E.t.svjwGh)],
    usePredicate: s.Go,
    render: () => {
        let t = (0, l.e7)([a.Z], () => a.Z.getSettings().storageLocation),
            e = async () => {
                let t = await u.Z.fileManager.showOpenDialog({
                    properties: ["openDirectory", "createDirectory"],
                });
                t.length > 0 && o.T1(t[0]);
            };
        return (0, i.jsx)(r.gNt, {
            label: E.intl.string(E.t.s4773E),
            description: E.intl.string(E.t.svjwGh),
            layout: "horizontal",
            children: (0, i.jsx)(r.P3F, {
                "aria-label": E.intl.formatToPlainString(E.t.iMONTj, { storageLocation: t }),
                onClick: e,
                children: (0, i.jsx)(r.oil, {
                    tabIndex: -1,
                    value: t,
                    editable: !1,
                    "aria-hidden": !0,
                }),
            }),
        });
    },
});
