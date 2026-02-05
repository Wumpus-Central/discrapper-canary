"use strict";
n.d(t, { X: () => T, x: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(73153),
    u = n(927057),
    c = n(734057),
    d = n(696451),
    _ = n(309010),
    f = n(287809),
    p = n(985018),
    h = n(785263);
let m = new Set();
class g extends s.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        this.waitFor(c.A, d.Ay, _.A, f.default), null != e && (m = new Set(e));
    }
    hasId(e) {
        return m.has(e);
    }
    getState() {
        return [...m];
    }
}
let E = new g(l.h, {}),
    A = (e) =>
        (0, s.bG)([d.Ay, f.default, E], () => {
            let t = f.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = f.default.getUser(e.getRecipientId());
            if (!n?.isStaff()) return !1;
            let r = d.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
            return r ? !E.hasId(n.id) && r : (m.delete(n.id) && E.emitChange(), !1);
        }),
    I = () => {
        let e = _.A.getChannelId();
        if (null == e) return;
        let t = c.A.getChannel(e);
        null != t && t.isPrivate() && (m.has(t.getRecipientId()) || (m.add(t.getRecipientId()), E.emitChange()));
    },
    T = () =>
        (0, r.jsxs)("div", {
            className: h.eU,
            children: [
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    className: a()(h.Qq, h.Fn),
                    children: p.intl.string(p.t["2UvR1E"]),
                }),
                (0, r.jsx)("div", { className: h.o1, children: (0, r.jsx)(u.x, { onClick: I }) }),
            ],
        });
