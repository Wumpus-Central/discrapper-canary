n.d(e, { Z: () => T });
var i = n(54381);
n(473749);
var l = n(442837),
    u = n(481060),
    r = n(579806),
    s = n(924557),
    a = n(435064),
    o = n(39604),
    c = n(509613),
    E = n(313789),
    S = n(388032);
let T = (0, c.ON)(E.n.CLIPS_STORAGE_LOCATION, {
    useSearchTerms: () => [S.intl.string(S.t.s4773E), S.intl.string(S.t.svjwGh)],
    usePredicate: s.w9,
    render: () => {
        let t = (0, l.e7)([a.Z], () => a.Z.getSettings().storageLocation),
            e = async () => {
                let t = await r.Z.fileManager.showOpenDialog({
                    properties: ["openDirectory", "createDirectory"],
                });
                t.length > 0 && o.T1(t[0]);
            };
        return (0, i.jsx)(u.gNt, {
            label: S.intl.string(S.t.s4773E),
            description: S.intl.string(S.t.svjwGh),
            layout: "horizontal",
            children: (0, i.jsx)(u.P3F, {
                "aria-label": S.intl.formatToPlainString(S.t.iMONTj, { storageLocation: t }),
                onClick: e,
                children: (0, i.jsx)(u.oil, {
                    tabIndex: -1,
                    value: t,
                    editable: !1,
                    "aria-hidden": !0,
                }),
            }),
        });
    },
});
