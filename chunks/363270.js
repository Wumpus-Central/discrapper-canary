var i = n(824120),
    r = n.n(i);
function a(e) {
    return Math.floor(Number(e) / 4194304) + 14200704e5;
}
function s(e) {
    let t = e - 14200704e5;
    return t <= 0 ? "0" : r()(t).shiftLeft(22).toString();
}
let l = r()(1).shiftLeft(22).minus(1);
n.d(
    t,
    {},
    {
        Iw: function (e, t) {
            return r()(e).and(l.not()).or(r()(t).and(l)).toString();
        },
        KW: function (e) {
            return Date.now() - a(e);
        },
        M0: function (e, t) {
            let n = e - 14200704e5;
            return r()(n <= 0 ? 0 : n)
                .shiftLeft(22)
                .add(t.next())
                .toString();
        },
        Nl: function (e) {
            if (null == e || !/^\d{17,19}$/.test(e)) return !1;
            try {
                return a(e) >= 14200704e5;
            } catch {
                return !1;
            }
        },
        QQ: function (e) {
            return s(a(e) - 1);
        },
        SL: function (e) {
            return r()(e).and(l).toJSNumber();
        },
        UD: function (e, t) {
            return e === t
                ? 0
                : null == t
                  ? 1
                  : null == e
                    ? -1
                    : e.length > t.length
                      ? 1
                      : e.length < t.length
                        ? -1
                        : e > t
                          ? 1
                          : -1;
        },
        Uk: function (e) {
            return s(a(e) + 1);
        },
        ZY: 14200704e5,
        gg: class {
            seq;
            constructor() {
                this.seq = 0;
            }
            next() {
                if (this.seq > 4095) throw Error(`Snowflake sequence number overflow: ${this.seq}`);
                return this.seq++;
            }
            willOverflowNext() {
                return this.seq > 4095;
            }
            reset() {
                this.seq = 0;
            }
        },
        uL: a,
        z: s,
    },
);
