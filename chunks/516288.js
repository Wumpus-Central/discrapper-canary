n.d(t, { k: () => r, t: () => s });
var l,
    i = n(248675),
    a = n(660183),
    r =
        (((l = {}).NO_PREVIEW = "no-preview"),
        (l.MISSING_MANAGE_SERVER = "missing-manage-server"),
        (l.MISSING_MANAGE_CHANNELS = "missing-manage-channels"),
        l);
function s(e, t) {
    switch (e) {
        case "no-preview":
            return {
                title: a.intl.string(i.default.ZNGLFE),
                body: a.intl.string(i.default.ffxKGK),
                action: a.intl.string(i.default["/omTNx"]),
            };
        case "missing-manage-server":
            return { title: a.intl.string(i.default.qpffbI), body: t ?? "", action: a.intl.string(a.t.BddRzS) };
        case "missing-manage-channels":
            return {
                title: a.intl.string(i.default.qpffbI),
                body: t ?? "",
                action: a.intl.string(i.default.dVtQRH),
                cancel: a.intl.string(a.t["ETE/oC"]),
            };
    }
}
