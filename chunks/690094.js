var r = n(693037),
    i = n(780755),
    o = n(875565),
    a = n(272469),
    s = n(826476);
function l(e, t, n) {
    try {
        Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
    } catch (n) {
        i.T && a.vF.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
}
function c(e, t) {
    try {
        let n = t.prototype || {};
        ((e.prototype = t.prototype = n), l(e, "__sentry_original__", t));
    } catch (e) {}
}
function u(e) {
    if ((0, o.bJ)(e)) return { message: e.message, name: e.name, stack: e.stack, ...p(e) };
    if (!(0, o.xH)(e)) return e;
    {
        let t = { type: e.type, target: d(e.target), currentTarget: d(e.currentTarget), ...p(e) };
        return ("u" > typeof CustomEvent && (0, o.tH)(e, CustomEvent) && (t.detail = e.detail), t);
    }
}
function d(e) {
    try {
        return (0, o.vq)(e) ? (0, r.Hd)(e) : Object.prototype.toString.call(e);
    } catch (e) {
        return "<unknown>";
    }
}
function p(e) {
    if ("object" != typeof e || null === e) return {};
    {
        let t = {};
        for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
    }
}
n.d(
    t,
    {},
    {
        Ce: function (e) {
            return (function e(t, n) {
                if (
                    (function (e) {
                        if (!(0, o.Qd)(e)) return !1;
                        try {
                            let t = Object.getPrototypeOf(e).constructor.name;
                            return !t || "Object" === t;
                        } catch (e) {
                            return !0;
                        }
                    })(t)
                ) {
                    let r = n.get(t);
                    if (void 0 !== r) return r;
                    let i = {};
                    for (let r of (n.set(t, i), Object.getOwnPropertyNames(t))) void 0 !== t[r] && (i[r] = e(t[r], n));
                    return i;
                }
                if (Array.isArray(t)) {
                    let r = n.get(t);
                    if (void 0 !== r) return r;
                    let i = [];
                    return (
                        n.set(t, i),
                        t.forEach((t) => {
                            i.push(e(t, n));
                        }),
                        i
                    );
                }
                return t;
            })(e, new Map());
        },
        GS: function (e, t, n) {
            if (!(t in e)) return;
            let r = e[t],
                o = n(r);
            "function" == typeof o && c(o, r);
            try {
                e[t] = o;
            } catch (n) {
                i.T && a.vF.log(`Failed to replace method "${t}" in object`, e);
            }
        },
        HF: function (e, t = 40) {
            let n = Object.keys(u(e));
            n.sort();
            let r = n[0];
            if (!r) return "[object has no keys]";
            if (r.length >= t) return (0, s.xv)(r, t);
            for (let e = n.length; e > 0; e--) {
                let r = n.slice(0, e).join(", ");
                if (!(r.length > t)) {
                    if (e === n.length) return r;
                    return (0, s.xv)(r, t);
                }
            }
            return "";
        },
        W4: u,
        my: l,
        pO: c,
        sp: function (e) {
            return e.__sentry_original__;
        },
    },
);
