var e = l(242779),
    a = l(258576),
    i = l(792996);
let r = [a.default["AX+5lk"], a.default.VAU6A7, a.default["1emysd"], a.default.EXHX3L, a.default.ChslmX];
function u(t) {
    return t === i.intl.string(a.default.xCdlEF) || t === i.intl.string(a.default.Rhx0rn);
}
function d(t) {
    let {
            activity: n,
            compacting: l = !1,
            saving: e = !1,
            restoring: i = !1,
            remixing: u = !1,
            recalling: d = !1,
            controlling: f = !1,
            publishPending: c = !1,
            publishing: s = !1,
        } = t,
        o = null != n && "end" !== n.phase;
    return f
        ? a.default["1jqaAc"]
        : c
          ? a.default.xCdlEF
          : s
            ? a.default.Rhx0rn
            : i
              ? a.default.M4KI5F
              : u
                ? a.default.j8tmjK
                : d
                  ? r[0]
                  : e
                    ? a.default.mKK6wB
                    : l
                      ? a.default.xnCAaP
                      : o
                        ? a.default.izrt52
                        : a.default.L9EDub;
}
l.d(
    n,
    {},
    {
        Db: function (t) {
            switch (t) {
                case "connecting":
                    return i.intl.string(a.default["ECl+Dx"]);
                case "closed":
                    return i.intl.string(a.default.mQZSp1);
                case "failed":
                    return i.intl.string(a.default.xzJSZ6);
            }
        },
        Dy: function (t) {
            return i.intl.string(d(t));
        },
        E4: function (t, n) {
            return u(t) !== u(n);
        },
        E8: function (t) {
            return r.some((n) => i.intl.string(n) === t);
        },
        Ov: function (t) {
            return i.intl.string(r[t % r.length]);
        },
        kx: r,
        uc: function (t) {
            let n = (0, e.a7)(t.cost_usd);
            return {
                text: i.intl.formatToPlainString(a.default.gMuw5d, { runes: n.toLocaleString() }),
                aria: i.intl.formatToPlainString(a.default.Z4LvGa, { runes: n, turns: t.turns }),
            };
        },
        xu: d,
    },
);
