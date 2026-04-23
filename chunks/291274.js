n(321073);
var i = n(311907),
    r = n(73153),
    a = n(253932),
    l = n(461213),
    s = n(927813),
    o = n(652215);
let d = [],
    u = !1;
function c() {
    return d.length >= 4 && d.some((e) => e < Date.now() - 3 * s.A.Millis.DAY);
}
class A extends i.Ay.PersistedStore {
    static displayName = "HabitualDNDStore";
    static persistKey = "habitualDND";
    initialize(e) {
        this.waitFor(l.A), null != e && Array.isArray(e.sessionStartsWithDND) && (d = e.sessionStartsWithDND);
    }
    showNagBar() {
        return u;
    }
    getState() {
        return { sessionStartsWithDND: d };
    }
    getTemp() {
        return { x: a.CY.getSetting() };
    }
}
new A(r.h, {
    POST_CONNECTION_OPEN: function () {
        l.A.getStatus() === o.clD.DND && "0" === a.CY.getSetting()
            ? (d.push(Date.now()),
              (d = d.filter((e) => e > Date.now() - 5 * s.A.Millis.DAY)),
              c() &&
                  setTimeout(() => {
                      r.h.dispatch({ type: "HABITUAL_DND_CLEAR" });
                  }, 15 * s.A.Millis.SECOND))
            : (d = []);
    },
    HABITUAL_DND_CLEAR: function () {
        (u = !!c()), (d = []);
    },
});
