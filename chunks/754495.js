"use strict";
n.d(t, { W: () => c, s: () => d });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(20805),
    o = n(287809),
    l = n(301736),
    u = n(985018);
function c(e) {
    return (0, s.zD)(e)
        ? u.intl.string(u.t["4f8iut"])
        : (0, s.Lf)(e)
          ? u.intl.string(u.t.yX2hNy)
          : (0, s.fe)(e)
            ? u.intl.string(u.t.oSs8eg)
            : u.intl.string(u.t.bK9GT1);
}
function d(e) {
    let { user: t, entry: u, display: d, onAction: _ } = e,
        f = (0, l.A)(),
        p = (0, i.bG)([o.default], () => o.default.getCurrentUser());
    if (t.id !== p?.id || "recent" !== d || !(0, s.$R)(u)) return null;
    let h = () => {
        (0, a.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("10117"), n.e("36946")]).then(n.bind(n, 839785));
            return (n) => (0, r.jsx)(e, { entry: u, user: t, onAction: _, onOpenGameSettings: f, ...n });
        });
    };
    return (0, r.jsx)(a.Drp, {
        id: "delete-entry-history",
        label: c(u),
        action: () => {
            _?.({ action: "PRESS_DELETE_HISTORY_MENU_ITEM" }), h();
        },
        color: "danger",
    });
}
