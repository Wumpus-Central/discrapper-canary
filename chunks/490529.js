n.d(t, {
    X8: () => h,
    tI: () => p,
    uj: () => c,
}),
    n(539854);
var r = n(512722),
    i = n.n(r),
    a = n(981631),
    o = n(388032);
let s = 5,
    l = 15,
    c = () => {
        let e = Object.keys(a.gkr);
        return e[Math.floor(Math.random() * e.length)];
    },
    u = () => {
        let e = [];
        for (; e.length < s; ) {
            let t = Math.floor(Math.random() * l);
            e.includes(t) || e.push(t);
        }
        return e;
    },
    d = () => [
        o.intl.string(o.t.wWV9Ex),
        o.intl.string(o.t.ujB5uL),
        o.intl.string(o.t.zYNt1N),
        o.intl.string(o.t.CQkJcn),
        o.intl.string(o.t.dPgrQk),
        o.intl.string(o.t.uS4tV1),
        o.intl.string(o.t.DMzlBg),
        o.intl.string(o.t["4A4ezc"]),
        o.intl.string(o.t.wshlHR),
        o.intl.string(o.t.pxkSfn),
        o.intl.string(o.t["FAs+YG"]),
        o.intl.string(o.t["dY+C+f"]),
        o.intl.string(o.t["1DiI6+"]),
        o.intl.string(o.t.r23dp6),
        o.intl.string(o.t["/cxmLy"]),
    ],
    f = () => [
        [o.intl.string(o.t.o6ELq6), o.intl.string(o.t.VVcLQk), o.intl.string(o.t["v/5qvr"]), o.intl.string(o.t.dMYFq6)],
        [o.intl.string(o.t["R2dI+f"]), o.intl.string(o.t.s0EqhI), o.intl.string(o.t.ex6tvr), o.intl.string(o.t.lk2Bt7)],
        [o.intl.string(o.t.NOC4TU), o.intl.string(o.t.FlDBfH), o.intl.string(o.t.MLzlRU), o.intl.string(o.t["1j46Zm"])],
        [
            o.intl.string(o.t.NyWJLy),
            o.intl.string(o.t["uF0u8/"]),
            o.intl.string(o.t.BZuLSU),
            o.intl.string(o.t["27zWTk"]),
        ],
        [
            o.intl.string(o.t["Aq4y+v"]),
            o.intl.string(o.t.rr72eH),
            o.intl.string(o.t["2v7Vv7"]),
            o.intl.string(o.t.H5wx2d),
        ],
        [o.intl.string(o.t.tld7IS), o.intl.string(o.t.OOfrPj), o.intl.string(o.t.QbtUj4), o.intl.string(o.t["88DsQk"])],
        [o.intl.string(o.t.wURefn), o.intl.string(o.t["6abY0d"]), o.intl.string(o.t.VttdKC), o.intl.string(o.t.N9tGcH)],
        [o.intl.string(o.t["pK+hm5"]), o.intl.string(o.t.fpfjDQ), o.intl.string(o.t.QDZPw8), o.intl.string(o.t.DJBGub)],
        [o.intl.string(o.t.b5ar8f), o.intl.string(o.t.SBETho), o.intl.string(o.t.WsXEqa), o.intl.string(o.t["1jEI+P"])],
        [
            o.intl.string(o.t["Y+ztvL"]),
            o.intl.string(o.t.PCjFjI),
            o.intl.string(o.t.jjodpK),
            o.intl.string(o.t["5tHTjI"]),
        ],
        [o.intl.string(o.t.jD0BbW), o.intl.string(o.t.zFZP2d), o.intl.string(o.t.AQi4BA), o.intl.string(o.t.HNGDgo)],
        [o.intl.string(o.t["8PHLGh"]), o.intl.string(o.t.PAWXCg), o.intl.string(o.t.pyRWsr), o.intl.string(o.t.SfbdaG)],
        [
            o.intl.string(o.t["VdyT7+"]),
            o.intl.string(o.t["9tQrr6"]),
            o.intl.string(o.t["E11H4+"]),
            o.intl.string(o.t.TRNpXF),
        ],
        [o.intl.string(o.t.gFpEVl), o.intl.string(o.t.oqF1lZ), o.intl.string(o.t["itk+io"]), o.intl.string(o.t.WyvPFx)],
        [o.intl.string(o.t["zaKm/f"]), o.intl.string(o.t.SES9Zm), o.intl.string(o.t.ebblm5), o.intl.string(o.t.csrWfH)],
    ],
    _ = () => [a.gkr.HOUSE_1, a.gkr.HOUSE_2, a.gkr.HOUSE_3, a.jsM],
    p = () => {
        let e = _(),
            t = d(),
            n = f();
        return u().map((r) => {
            let a = t[r],
                o = n[r];
            return (
                i()(null != a && null != o, "Invalid HypeSquad quiz question index"),
                {
                    prompt: a,
                    options: o.map((t, n) => {
                        let r = e[n];
                        return (
                            i()(null !== r, "Invalid HypeSquad quiz question option index"),
                            {
                                copy: t,
                                house: r,
                            }
                        );
                    }),
                }
            );
        });
    },
    h = (e) =>
        ({
            [a.gkr.HOUSE_1]: o.intl.string(o.t.ORKdHR),
            [a.gkr.HOUSE_2]: o.intl.string(o.t.aKf3dn),
            [a.gkr.HOUSE_3]: o.intl.string(o.t["21LOa2"]),
        })[e];
