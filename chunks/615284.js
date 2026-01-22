n.d(t, {
    X: () => v,
    x: () => O,
}),
    n(896048);
var r,
    i = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(73153),
    u = n(927057),
    d = n(734057),
    f = n(696451),
    p = n(309010),
    _ = n(287809),
    h = n(985018),
    m = n(785263);

function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let E = new Set();
class b extends (r = o.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(d.A, f.Ay, p.A, _.default), null != e && (E = new Set(e));
    }
    hasId(e) {
        return E.has(e);
    }
    getState() {
        return [...E];
    }
}
g(b, "displayName", "PTOStore"), g(b, "persistKey", "PTOStore");
let y = new b(c.h, {}),
    O = (e) =>
        (0, o.bG)([f.Ay, _.default, y], () => {
            let t = _.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = _.default.getUser(e.getRecipientId());
            if (!(null == n ? void 0 : n.isStaff())) return !1;
            let r = f.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
            return r ? !y.hasId(n.id) && r : (E.delete(n.id) && y.emitChange(), !1);
        }),
    A = () => {
        let e = p.A.getChannelId();
        if (null == e) return;
        let t = d.A.getChannel(e);
        null != t && t.isPrivate() && (E.has(t.getRecipientId()) || (E.add(t.getRecipientId()), y.emitChange()));
    },
    v = () =>
        (0, i.jsxs)("div", {
            className: m.eU,
            children: [
                (0, i.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    className: s()(m.Qq, m.Fn),
                    children: h.intl.string(h.t["2UvR1E"]),
                }),
                (0, i.jsx)("div", {
                    className: m.o1,
                    children: (0, i.jsx)(u.x, {
                        onClick: A,
                    }),
                }),
            ],
        });
