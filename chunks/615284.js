"use strict";
n.d(t, { X: () => E, x: () => A });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(311907),
    a = n(834730),
    o = n(73153),
    c = n(927057),
    u = n(734057),
    d = n(696451),
    h = n(309010),
    m = n(287809),
    p = n(985018),
    f = n(1468);
let g = new Set();
class _ extends r.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        this.waitFor(u.A, d.Ay, h.A, m.default), null != e && (g = new Set(e));
    }
    hasId(e) {
        return g.has(e);
    }
    getState() {
        return [...g];
    }
}
let x = new _(o.h, {}),
    A = (e) =>
        (0, r.bG)([d.Ay, m.default, x], () => {
            let t = m.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = m.default.getUser(e.getRecipientId());
            if (!n?.isStaff()) return !1;
            let i = d.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
            return i ? !x.hasId(n.id) && i : (g.delete(n.id) && x.emitChange(), !1);
        }),
    C = () => {
        let e = h.A.getChannelId();
        if (null == e) return;
        let t = u.A.getChannel(e);
        null != t && t.isPrivate() && (g.has(t.getRecipientId()) || (g.add(t.getRecipientId()), x.emitChange()));
    },
    E = () =>
        (0, i.jsxs)("div", {
            className: f.eU,
            children: [
                (0, i.jsx)(a.E, {
                    variant: "text-sm/medium",
                    className: s()(f.Qq, f.Fn),
                    children: p.intl.string(p.t["2UvR1E"]),
                }),
                (0, i.jsx)("div", { className: f.o1, children: (0, i.jsx)(c.x, { onClick: C }) }),
            ],
        });
