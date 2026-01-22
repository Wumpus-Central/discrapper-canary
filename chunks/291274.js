n(321073);
var r,
    i = n(311907),
    l = n(73153),
    a = n(253932),
    s = n(461213),
    o = n(927813),
    c = n(652215);

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
    return d.length >= 4 && d.some((e) => e < Date.now() - 3 * o.A.Millis.DAY);
}
class h extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(s.A), null != e && Array.isArray(e.sessionStartsWithDND) && (d = e.sessionStartsWithDND);
    }
    showNagBar() {
        return p;
    }
    getState() {
        return {
            sessionStartsWithDND: d,
        };
    }
    getTemp() {
        return {
            x: a.CY.getSetting(),
        };
    }
}
u(h, "displayName", "HabitualDNDStore"),
    u(h, "persistKey", "habitualDND"),
    new h(l.h, {
        POST_CONNECTION_OPEN: function () {
            s.A.getStatus() === c.clD.DND && "0" === a.CY.getSetting()
                ? (d.push(Date.now()),
                  (d = d.filter((e) => e > Date.now() - 5 * o.A.Millis.DAY)),
                  f() &&
                      setTimeout(() => {
                          l.h.dispatch({
                              type: "HABITUAL_DND_CLEAR",
                          });
                      }, 15 * o.A.Millis.SECOND))
                : (d = []);
        },
        HABITUAL_DND_CLEAR: function () {
            (p = !!f()), (d = []);
        },
    });
