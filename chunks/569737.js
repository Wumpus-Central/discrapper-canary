t.d(a, { Ip: () => m, _l: () => c, gX: () => d, ng: () => s });
var r = t(468508),
    n = t(620409),
    i = t(840140),
    o = t(576463),
    l = t(594247);
function u(e) {
    let a,
        t = "object" == typeof e[0] ? e.shift() : new (0, o.FG)();
    if ("string" == typeof e[0]) a = e.shift();
    else {
        let e = t.getEras();
        a = e[e.length - 1];
    }
    return [t, a, e.shift(), e.shift(), e.shift()];
}
class s {
    #e;
    constructor(...e) {
        let [a, t, n, i, o] = u(e);
        (this.calendar = a), (this.era = t), (this.year = n), (this.month = i), (this.day = o), (0, r.AU)(this);
    }
    copy() {
        return this.era
            ? new s(this.calendar, this.era, this.year, this.month, this.day)
            : new s(this.calendar, this.year, this.month, this.day);
    }
    add(e) {
        return (0, r.WQ)(this, e);
    }
    subtract(e) {
        return (0, r.Re)(this, e);
    }
    set(e) {
        return (0, r.hZ)(this, e);
    }
    cycle(e, a, t) {
        return (0, r.xy)(this, e, a, t);
    }
    toDate(e) {
        return (0, l.ay)(this, e);
    }
    toString() {
        return (0, i.$T)(this);
    }
    compare(e) {
        return (0, n.SE)(this, e);
    }
}
class d {
    #e;
    constructor(e = 0, a = 0, t = 0, n = 0) {
        (this.hour = e), (this.minute = a), (this.second = t), (this.millisecond = n), (0, r.Rb)(this);
    }
    copy() {
        return new d(this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return (0, r.tY)(this, e);
    }
    subtract(e) {
        return (0, r.YP)(this, e);
    }
    set(e) {
        return (0, r.ib)(this, e);
    }
    cycle(e, a, t) {
        return (0, r.gt)(this, e, a, t);
    }
    toString() {
        return (0, i.ot)(this);
    }
    compare(e) {
        return (0, n.Nu)(this, e);
    }
}
class c {
    #e;
    constructor(...e) {
        let [a, t, n, i, o] = u(e);
        (this.calendar = a),
            (this.era = t),
            (this.year = n),
            (this.month = i),
            (this.day = o),
            (this.hour = e.shift() || 0),
            (this.minute = e.shift() || 0),
            (this.second = e.shift() || 0),
            (this.millisecond = e.shift() || 0),
            (0, r.AU)(this);
    }
    copy() {
        return this.era
            ? new c(
                  this.calendar,
                  this.era,
                  this.year,
                  this.month,
                  this.day,
                  this.hour,
                  this.minute,
                  this.second,
                  this.millisecond,
              )
            : new c(
                  this.calendar,
                  this.year,
                  this.month,
                  this.day,
                  this.hour,
                  this.minute,
                  this.second,
                  this.millisecond,
              );
    }
    add(e) {
        return (0, r.WQ)(this, e);
    }
    subtract(e) {
        return (0, r.Re)(this, e);
    }
    set(e) {
        return (0, r.hZ)((0, r.ib)(this, e), e);
    }
    cycle(e, a, t) {
        switch (e) {
            case "era":
            case "year":
            case "month":
            case "day":
                return (0, r.xy)(this, e, a, t);
            default:
                return (0, r.gt)(this, e, a, t);
        }
    }
    toDate(e, a) {
        return (0, l.ay)(this, e, a);
    }
    toString() {
        return (0, i.qk)(this);
    }
    compare(e) {
        let a = (0, n.SE)(this, e);
        return 0 === a ? (0, n.Nu)(this, (0, l.tR)(e)) : a;
    }
}
class m {
    #e;
    constructor(...e) {
        let [a, t, n, i, o] = u(e),
            l = e.shift(),
            s = e.shift();
        (this.calendar = a),
            (this.era = t),
            (this.year = n),
            (this.month = i),
            (this.day = o),
            (this.timeZone = l),
            (this.offset = s),
            (this.hour = e.shift() || 0),
            (this.minute = e.shift() || 0),
            (this.second = e.shift() || 0),
            (this.millisecond = e.shift() || 0),
            (0, r.AU)(this);
    }
    copy() {
        return this.era
            ? new m(
                  this.calendar,
                  this.era,
                  this.year,
                  this.month,
                  this.day,
                  this.timeZone,
                  this.offset,
                  this.hour,
                  this.minute,
                  this.second,
                  this.millisecond,
              )
            : new m(
                  this.calendar,
                  this.year,
                  this.month,
                  this.day,
                  this.timeZone,
                  this.offset,
                  this.hour,
                  this.minute,
                  this.second,
                  this.millisecond,
              );
    }
    add(e) {
        return (0, r.E0)(this, e);
    }
    subtract(e) {
        return (0, r.d_)(this, e);
    }
    set(e, a) {
        return (0, r.D8)(this, e, a);
    }
    cycle(e, a, t) {
        return (0, r.XH)(this, e, a, t);
    }
    toDate() {
        return (0, l.cd)(this);
    }
    toString() {
        return (0, i.e6)(this);
    }
    toAbsoluteString() {
        return this.toDate().toISOString();
    }
    compare(e) {
        return this.toDate().getTime() - (0, l.uB)(e, this.timeZone).toDate().getTime();
    }
}
