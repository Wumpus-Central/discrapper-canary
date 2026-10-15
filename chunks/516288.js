n.d(t, { k: () => a, t: () => u });
var l,
    i = n(248675),
    r = n(105292),
    a =
        (((l = {}).NO_PREVIEW = "no-preview"),
        (l.MISSING_MANAGE_SERVER = "missing-manage-server"),
        (l.MISSING_MANAGE_CHANNELS = "missing-manage-channels"),
        l);
function u(e, t) {
    switch (e) {
        case "no-preview":
            return {
                title: r.intl.string(i.default.ZNGLFE),
                body: r.intl.string(i.default.ffxKGK),
                action: r.intl.string(i.default["/omTNx"]),
            };
        case "missing-manage-server":
            return { title: r.intl.string(i.default.qpffbI), body: t ?? "", action: r.intl.string(r.t.BddRzS) };
        case "missing-manage-channels":
            return {
                title: r.intl.string(i.default.qpffbI),
                body: t ?? "",
                action: r.intl.string(i.default.dVtQRH),
                cancel: r.intl.string(r.t["ETE/oC"]),
            };
    }
}
