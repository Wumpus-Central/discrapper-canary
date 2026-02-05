"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(658575),
    o = n(123791),
    l = n(622543),
    u = n(993401),
    c = n(985018);
function d(e) {
    let { user: t, onClick: n, ...i } = e;
    return (
        (0, o.C)(t.id),
        (0, r.jsx)(u.FD, {
            action: "PRESS_APP_STOREFRONT",
            icon: a.U1X,
            text: c.intl.string(c.t.V7j5aZ),
            onClick: n,
            variant: "primary",
            ...i,
        })
    );
}
function _(e) {
    let { user: t, guildId: o, ...u } = e,
        c = (0, i.bG)([l.A], () => l.A.getUserProfile(t.id)?.application),
        _ = (0, s.G)(c?.id ?? "");
    if (null == c || !_) return null;
    let f = () => {
        (0, a.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("13088"), n.e("33563"), n.e("92201")]).then(n.bind(n, 719847));
            return (t) => (0, r.jsx)(e, { appId: c.id, guildId: o, ...t });
        });
    };
    return (0, r.jsx)(d, { user: t, guildId: o, onClick: f, ...u });
}
