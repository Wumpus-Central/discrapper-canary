n.d(t, {
    X8: () => g,
    tI: () => m,
    uj: () => l
}),
    n(653041);
var r = n(512722),
    i = n.n(r),
    s = n(981631),
    a = n(388032);
let l = () => {
        let e = Object.keys(s.gkr);
        return e[Math.floor(Math.random() * e.length)];
    },
    o = () => {
        let e = [];
        for (; e.length < 5; ) {
            let t = Math.floor(15 * Math.random());
            e.includes(t) || e.push(t);
        }
        return e;
    },
    c = () => [a.NW.string(a.t.wWV9Ex), a.NW.string(a.t.ujB5uL), a.NW.string(a.t.zYNt1N), a.NW.string(a.t.CQkJcn), a.NW.string(a.t.dPgrQk), a.NW.string(a.t.uS4tV1), a.NW.string(a.t.DMzlBg), a.NW.string(a.t['4A4ezc']), a.NW.string(a.t.wshlHR), a.NW.string(a.t.pxkSfn), a.NW.string(a.t['FAs+YG']), a.NW.string(a.t['dY+C+f']), a.NW.string(a.t['1DiI6+']), a.NW.string(a.t.r23dp6), a.NW.string(a.t['/cxmLy'])],
    d = () => [
        [a.NW.string(a.t.o6ELq6), a.NW.string(a.t.VVcLQk), a.NW.string(a.t['v/5qvr']), a.NW.string(a.t.dMYFq6)],
        [a.NW.string(a.t['R2dI+f']), a.NW.string(a.t.s0EqhI), a.NW.string(a.t.ex6tvr), a.NW.string(a.t.lk2Bt7)],
        [a.NW.string(a.t.NOC4TU), a.NW.string(a.t.FlDBfH), a.NW.string(a.t.MLzlRU), a.NW.string(a.t['1j46Zm'])],
        [a.NW.string(a.t.NyWJLy), a.NW.string(a.t['uF0u8/']), a.NW.string(a.t.BZuLSU), a.NW.string(a.t['27zWTk'])],
        [a.NW.string(a.t['Aq4y+v']), a.NW.string(a.t.rr72eH), a.NW.string(a.t['2v7Vv7']), a.NW.string(a.t.H5wx2d)],
        [a.NW.string(a.t.tld7IS), a.NW.string(a.t.OOfrPj), a.NW.string(a.t.QbtUj4), a.NW.string(a.t['88DsQk'])],
        [a.NW.string(a.t.wURefn), a.NW.string(a.t['6abY0d']), a.NW.string(a.t.VttdKC), a.NW.string(a.t.N9tGcH)],
        [a.NW.string(a.t['pK+hm5']), a.NW.string(a.t.fpfjDQ), a.NW.string(a.t.QDZPw8), a.NW.string(a.t.DJBGub)],
        [a.NW.string(a.t.b5ar8f), a.NW.string(a.t.SBETho), a.NW.string(a.t.WsXEqa), a.NW.string(a.t['1jEI+P'])],
        [a.NW.string(a.t['Y+ztvL']), a.NW.string(a.t.PCjFjI), a.NW.string(a.t.jjodpK), a.NW.string(a.t['5tHTjI'])],
        [a.NW.string(a.t.jD0BbW), a.NW.string(a.t.zFZP2d), a.NW.string(a.t.AQi4BA), a.NW.string(a.t.HNGDgo)],
        [a.NW.string(a.t['8PHLGh']), a.NW.string(a.t.PAWXCg), a.NW.string(a.t.pyRWsr), a.NW.string(a.t.SfbdaG)],
        [a.NW.string(a.t['VdyT7+']), a.NW.string(a.t['9tQrr6']), a.NW.string(a.t['E11H4+']), a.NW.string(a.t.TRNpXF)],
        [a.NW.string(a.t.gFpEVl), a.NW.string(a.t.oqF1lZ), a.NW.string(a.t['itk+io']), a.NW.string(a.t.WyvPFx)],
        [a.NW.string(a.t['zaKm/f']), a.NW.string(a.t.SES9Zm), a.NW.string(a.t.ebblm5), a.NW.string(a.t.csrWfH)]
    ],
    u = () => [s.gkr.HOUSE_1, s.gkr.HOUSE_2, s.gkr.HOUSE_3, s.jsM],
    m = () => {
        let e = u(),
            t = c(),
            n = d();
        return o().map((r) => {
            let s = t[r],
                a = n[r];
            return (
                i()(null != s && null != a, 'Invalid HypeSquad quiz question index'),
                {
                    prompt: s,
                    options: a.map((t, n) => {
                        let r = e[n];
                        return (
                            i()(null !== r, 'Invalid HypeSquad quiz question option index'),
                            {
                                copy: t,
                                house: r
                            }
                        );
                    })
                }
            );
        });
    },
    g = (e) =>
        ({
            [s.gkr.HOUSE_1]: a.NW.string(a.t.ORKdHR),
            [s.gkr.HOUSE_2]: a.NW.string(a.t.aKf3dn),
            [s.gkr.HOUSE_3]: a.NW.string(a.t['21LOa2'])
        })[e];
