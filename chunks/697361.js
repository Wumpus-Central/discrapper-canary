function l(e, t) {
    return String(e).padStart(t, "0");
}
n.d(
    t,
    {},
    {
        R: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
            if (e.length > 64) return null;
            let n = Date.parse(e);
            if (Number.isNaN(n)) return null;
            let r = new Date(n),
                i = `${l(r.getHours(), 2)}:${l(r.getMinutes(), 2)}:${l(r.getSeconds(), 2)}`;
            return "millis" === t ? `${i}.${l(r.getMilliseconds(), 3)}` : i;
        },
    },
);
