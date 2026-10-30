n.d(i, { k: () => r, t: () => l });
var e,
    a = n(809526),
    s = n(105292),
    r =
        (((e = {}).PUBLISH_APPROVAL_REQUIRED = "publish-approval-required"),
        (e.NO_PREVIEW = "no-preview"),
        (e.MISSING_MANAGE_SERVER = "missing-manage-server"),
        (e.MISSING_MANAGE_CHANNELS = "missing-manage-channels"),
        e);
function l(t, i) {
    switch (t) {
        case "publish-approval-required":
            return {
                title: s.intl.string(a.default["5qiUbF"]),
                body: s.intl.string(a.default["8kdvyn"]),
                action: s.intl.string(a.default.z25acw),
                cancel: s.intl.string(s.t["ETE/oC"]),
            };
        case "no-preview":
            return {
                title: s.intl.string(a.default.ZNGLFE),
                body: s.intl.string(a.default.ffxKGK),
                action: s.intl.string(a.default["/omTNx"]),
            };
        case "missing-manage-server":
            return { title: s.intl.string(a.default.qpffbI), body: i ?? "", action: s.intl.string(s.t.BddRzS) };
        case "missing-manage-channels":
            return {
                title: s.intl.string(a.default.qpffbI),
                body: i ?? "",
                action: s.intl.string(a.default.dVtQRH),
                cancel: s.intl.string(s.t["ETE/oC"]),
            };
    }
}
