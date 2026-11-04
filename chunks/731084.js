var e = l(242779),
    i = l(191850),
    r = l(792996);
let a = [i.default["AX+5lk"], i.default.VAU6A7, i.default["1emysd"], i.default.EXHX3L, i.default.ChslmX];
function u(t) {
    return t === r.intl.string(i.default.xCdlEF) || t === r.intl.string(i.default.Rhx0rn);
}
function f(t) {
    let {
            activity: n,
            compacting: l = !1,
            saving: e = !1,
            restoring: r = !1,
            remixing: u = !1,
            recalling: f = !1,
            controlling: c = !1,
            publishPending: d = !1,
            publishing: s = !1,
        } = t,
        o = null != n && "end" !== n.phase;
    return c
        ? i.default["1jqaAc"]
        : d
          ? i.default.xCdlEF
          : s
            ? i.default.Rhx0rn
            : r
              ? i.default.M4KI5F
              : u
                ? i.default.j8tmjK
                : f
                  ? a[0]
                  : e
                    ? i.default.mKK6wB
                    : l
                      ? i.default.xnCAaP
                      : o
                        ? i.default.izrt52
                        : i.default.L9EDub;
}
l.d(
    n,
    {},
    {
        Db: function (t) {
            switch (t) {
                case "connecting":
                    return r.intl.string(i.default["ECl+Dx"]);
                case "closed":
                    return r.intl.string(i.default.mQZSp1);
                case "failed":
                    return r.intl.string(i.default.xzJSZ6);
            }
        },
        Dy: function (t) {
            return r.intl.string(f(t));
        },
        E4: function (t, n) {
            return u(t) !== u(n);
        },
        E8: function (t) {
            return a.some((n) => r.intl.string(n) === t);
        },
        Ov: function (t) {
            return r.intl.string(a[t % a.length]);
        },
        kx: a,
        uc: function (t) {
            let n = (0, e.a7)(t.cost_usd);
            return {
                text: r.intl.formatToPlainString(i.default.gMuw5d, { runes: n.toLocaleString() }),
                aria: r.intl.formatToPlainString(i.default.Z4LvGa, { runes: n, turns: t.turns }),
            };
        },
        xu: f,
    },
);
