var i,
    r = n(155718),
    a = n(792996);
let s = "True",
    l = "False";
var o = (((i = {}).BUILT_IN = "-1"), (i.FRECENCY = "-2"), i);
(Object.freeze([]),
    Object.freeze([]),
    n.d(
        t,
        {},
        {
            Ik: o,
            Ss: [
                { name: s, displayName: s, value: "true" },
                { name: l, displayName: l, value: "false" },
            ],
            tE: function (e) {
                if (null != e.choices) return a.intl.string(a.t.xi5aah);
                switch (e.type) {
                    case r.n4.BOOLEAN:
                        return a.intl.string(a.t.ATIx6O);
                    case r.n4.CHANNEL:
                        return a.intl.string(a.t.Q0z2Gx);
                    case r.n4.INTEGER:
                        return a.intl.string(a.t["d/9Rk4"]);
                    case r.n4.NUMBER:
                        return a.intl.string(a.t["FDyk/V"]);
                    case r.n4.ROLE:
                        return a.intl.string(a.t.vrRQn0);
                    case r.n4.USER:
                        return a.intl.string(a.t.i2r7j5);
                    case r.n4.MENTIONABLE:
                        return a.intl.string(a.t.I7imec);
                    default:
                        return a.intl.string(a.t.EkDo1i);
                }
            },
        },
    ));
