a.d(t, { A: () => r, b: () => s });
var n,
    l = a(627968),
    i = a(691885),
    s =
        (((n = {})[(n.UNENROLLED = 0)] = "UNENROLLED"),
        (n[(n.ENROLLED = 1)] = "ENROLLED"),
        (n[(n.COMPLETED_25 = 2)] = "COMPLETED_25"),
        (n[(n.COMPLETED_50 = 3)] = "COMPLETED_50"),
        (n[(n.COMPLETED_75 = 4)] = "COMPLETED_75"),
        (n[(n.COMPLETED_100 = 5)] = "COMPLETED_100"),
        (n[(n.CLAIMED = 6)] = "CLAIMED"),
        n);
let r = function (e) {
    let { onChange: t, value: a } = e;
    return (0, l.jsx)(i.l, {
        label: "User State",
        options: [
            { id: "unenrolled", label: "Unenrolled", value: 0 },
            { id: "enrolled", label: "Enrolled", value: 1 },
            { id: "25%", label: "25% Complete", value: 2 },
            { id: "50%", label: "50% Complete", value: 3 },
            { id: "75%", label: "75% Complete", value: 4 },
            { id: "100%", label: "100% Complete", value: 5 },
            { id: "claimed", label: "Claimed", value: 6 },
        ],
        value: a,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
