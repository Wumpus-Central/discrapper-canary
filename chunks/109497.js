n(539854);
var r,
    i = n(442837),
    l = n(570140),
    a = n(695346),
    s = n(885110),
    o = n(70956),
    c = n(981631);
function u(e, t, n) {
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
let d = [],
    p = !1;
function f() {
    return d.length >= 4 && d.some((e) => e < Date.now() - 3 * o.Z.Millis.DAY);
}
class g extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), null != e && Array.isArray(e.sessionStartsWithDND) && (d = e.sessionStartsWithDND);
    }
    showNagBar() {
        return p;
    }
    getState() {
        return { sessionStartsWithDND: d };
    }
    getTemp() {
        return { x: a.Cr.getSetting() };
    }
}
u(g, "displayName", "HabitualDNDStore"),
    u(g, "persistKey", "habitualDND"),
    new g(l.Z, {
        POST_CONNECTION_OPEN: function () {
            s.Z.getStatus() === c.Skl.DND && "0" === a.Cr.getSetting()
                ? (d.push(Date.now()),
                  (d = d.filter((e) => e > Date.now() - 5 * o.Z.Millis.DAY)),
                  f() &&
                      setTimeout(() => {
                          l.Z.dispatch({ type: "HABITUAL_DND_CLEAR" });
                      }, 15 * o.Z.Millis.SECOND))
                : (d = []);
        },
        HABITUAL_DND_CLEAR: function () {
            (p = !!f()), (d = []);
        },
    });
