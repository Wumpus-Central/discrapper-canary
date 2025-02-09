n.d(t, {
    X8: () => m,
    tI: () => h,
    uj: () => a
}),
    n(653041);
var i = n(512722),
    s = n.n(i),
    l = n(981631),
    r = n(388032);
let a = () => {
        let e = Object.keys(l.gkr);
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
    c = () => [r.intl.string(r.t.wWV9Ex), r.intl.string(r.t.ujB5uL), r.intl.string(r.t.zYNt1N), r.intl.string(r.t.CQkJcn), r.intl.string(r.t.dPgrQk), r.intl.string(r.t.uS4tV1), r.intl.string(r.t.DMzlBg), r.intl.string(r.t['4A4ezc']), r.intl.string(r.t.wshlHR), r.intl.string(r.t.pxkSfn), r.intl.string(r.t['FAs+YG']), r.intl.string(r.t['dY+C+f']), r.intl.string(r.t['1DiI6+']), r.intl.string(r.t.r23dp6), r.intl.string(r.t['/cxmLy'])],
    d = () => [
        [r.intl.string(r.t.o6ELq6), r.intl.string(r.t.VVcLQk), r.intl.string(r.t['v/5qvr']), r.intl.string(r.t.dMYFq6)],
        [r.intl.string(r.t['R2dI+f']), r.intl.string(r.t.s0EqhI), r.intl.string(r.t.ex6tvr), r.intl.string(r.t.lk2Bt7)],
        [r.intl.string(r.t.NOC4TU), r.intl.string(r.t.FlDBfH), r.intl.string(r.t.MLzlRU), r.intl.string(r.t['1j46Zm'])],
        [r.intl.string(r.t.NyWJLy), r.intl.string(r.t['uF0u8/']), r.intl.string(r.t.BZuLSU), r.intl.string(r.t['27zWTk'])],
        [r.intl.string(r.t['Aq4y+v']), r.intl.string(r.t.rr72eH), r.intl.string(r.t['2v7Vv7']), r.intl.string(r.t.H5wx2d)],
        [r.intl.string(r.t.tld7IS), r.intl.string(r.t.OOfrPj), r.intl.string(r.t.QbtUj4), r.intl.string(r.t['88DsQk'])],
        [r.intl.string(r.t.wURefn), r.intl.string(r.t['6abY0d']), r.intl.string(r.t.VttdKC), r.intl.string(r.t.N9tGcH)],
        [r.intl.string(r.t['pK+hm5']), r.intl.string(r.t.fpfjDQ), r.intl.string(r.t.QDZPw8), r.intl.string(r.t.DJBGub)],
        [r.intl.string(r.t.b5ar8f), r.intl.string(r.t.SBETho), r.intl.string(r.t.WsXEqa), r.intl.string(r.t['1jEI+P'])],
        [r.intl.string(r.t['Y+ztvL']), r.intl.string(r.t.PCjFjI), r.intl.string(r.t.jjodpK), r.intl.string(r.t['5tHTjI'])],
        [r.intl.string(r.t.jD0BbW), r.intl.string(r.t.zFZP2d), r.intl.string(r.t.AQi4BA), r.intl.string(r.t.HNGDgo)],
        [r.intl.string(r.t['8PHLGh']), r.intl.string(r.t.PAWXCg), r.intl.string(r.t.pyRWsr), r.intl.string(r.t.SfbdaG)],
        [r.intl.string(r.t['VdyT7+']), r.intl.string(r.t['9tQrr6']), r.intl.string(r.t['E11H4+']), r.intl.string(r.t.TRNpXF)],
        [r.intl.string(r.t.gFpEVl), r.intl.string(r.t.oqF1lZ), r.intl.string(r.t['itk+io']), r.intl.string(r.t.WyvPFx)],
        [r.intl.string(r.t['zaKm/f']), r.intl.string(r.t.SES9Zm), r.intl.string(r.t.ebblm5), r.intl.string(r.t.csrWfH)]
    ],
    u = () => [l.gkr.HOUSE_1, l.gkr.HOUSE_2, l.gkr.HOUSE_3, l.jsM],
    h = () => {
        let e = u(),
            t = c(),
            n = d();
        return o().map((i) => {
            let l = t[i],
                r = n[i];
            return (
                s()(null != l && null != r, 'Invalid HypeSquad quiz question index'),
                {
                    prompt: l,
                    options: r.map((t, n) => {
                        let i = e[n];
                        return (
                            s()(null !== i, 'Invalid HypeSquad quiz question option index'),
                            {
                                copy: t,
                                house: i
                            }
                        );
                    })
                }
            );
        });
    },
    m = (e) =>
        ({
            [l.gkr.HOUSE_1]: r.intl.string(r.t.ORKdHR),
            [l.gkr.HOUSE_2]: r.intl.string(r.t.aKf3dn),
            [l.gkr.HOUSE_3]: r.intl.string(r.t['21LOa2'])
        })[e];
