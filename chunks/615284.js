"use strict";
n.d(t, { X: () => T, x: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(834730),
    l = n(73153),
    u = n(927057),
    c = n(734057),
    d = n(696451),
    _ = n(309010),
    f = n(287809),
    p = n(985018),
    h = n(1468);
let E = new Set();
class m extends a.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        this.waitFor(c.A, d.Ay, _.A, f.default), null != e && (E = new Set(e));
    }
    hasId(e) {
        return E.has(e);
    }
    getState() {
        return [...E];
    }
}
let g = new m(l.h, {}),
    A = (e) =>
        (0, a.bG)([d.Ay, f.default, g], () => {
            let t = f.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = f.default.getUser(e.getRecipientId());
            if (!n?.isStaff()) return !1;
            let r = d.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
            return r ? !g.hasId(n.id) && r : (E.delete(n.id) && g.emitChange(), !1);
        }),
    I = () => {
        let e = _.A.getChannelId();
        if (null == e) return;
        let t = c.A.getChannel(e);
        null != t && t.isPrivate() && (E.has(t.getRecipientId()) || (E.add(t.getRecipientId()), g.emitChange()));
    },
    T = () =>
        (0, r.jsxs)("div", {
            className: h.eU,
            children: [
                (0, r.jsx)(o.E, {
                    variant: "text-sm/medium",
                    className: s()(h.Qq, h.Fn),
                    children: p.intl.string(p.t["2UvR1E"]),
                }),
                (0, r.jsx)("div", {
                    className: h.o1,
                    children: (0, r.jsx)(u.x, { onClick: I, "aria-label": p.intl.string(p.t.cpT0Cq) }),
                }),
            ],
        });
