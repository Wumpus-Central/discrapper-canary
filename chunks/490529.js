n.d(t, {
    X8: () => p,
    tI: () => m,
    uj: () => a
}),
    n(539854);
var i = n(512722),
    r = n.n(i),
    s = n(981631),
    l = n(388032);
let a = () => {
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
    c = () => [l.intl.string(l.t.wWV9Ex), l.intl.string(l.t.ujB5uL), l.intl.string(l.t.zYNt1N), l.intl.string(l.t.CQkJcn), l.intl.string(l.t.dPgrQk), l.intl.string(l.t.uS4tV1), l.intl.string(l.t.DMzlBg), l.intl.string(l.t['4A4ezc']), l.intl.string(l.t.wshlHR), l.intl.string(l.t.pxkSfn), l.intl.string(l.t['FAs+YG']), l.intl.string(l.t['dY+C+f']), l.intl.string(l.t['1DiI6+']), l.intl.string(l.t.r23dp6), l.intl.string(l.t['/cxmLy'])],
    d = () => [
        [l.intl.string(l.t.o6ELq6), l.intl.string(l.t.VVcLQk), l.intl.string(l.t['v/5qvr']), l.intl.string(l.t.dMYFq6)],
        [l.intl.string(l.t['R2dI+f']), l.intl.string(l.t.s0EqhI), l.intl.string(l.t.ex6tvr), l.intl.string(l.t.lk2Bt7)],
        [l.intl.string(l.t.NOC4TU), l.intl.string(l.t.FlDBfH), l.intl.string(l.t.MLzlRU), l.intl.string(l.t['1j46Zm'])],
        [l.intl.string(l.t.NyWJLy), l.intl.string(l.t['uF0u8/']), l.intl.string(l.t.BZuLSU), l.intl.string(l.t['27zWTk'])],
        [l.intl.string(l.t['Aq4y+v']), l.intl.string(l.t.rr72eH), l.intl.string(l.t['2v7Vv7']), l.intl.string(l.t.H5wx2d)],
        [l.intl.string(l.t.tld7IS), l.intl.string(l.t.OOfrPj), l.intl.string(l.t.QbtUj4), l.intl.string(l.t['88DsQk'])],
        [l.intl.string(l.t.wURefn), l.intl.string(l.t['6abY0d']), l.intl.string(l.t.VttdKC), l.intl.string(l.t.N9tGcH)],
        [l.intl.string(l.t['pK+hm5']), l.intl.string(l.t.fpfjDQ), l.intl.string(l.t.QDZPw8), l.intl.string(l.t.DJBGub)],
        [l.intl.string(l.t.b5ar8f), l.intl.string(l.t.SBETho), l.intl.string(l.t.WsXEqa), l.intl.string(l.t['1jEI+P'])],
        [l.intl.string(l.t['Y+ztvL']), l.intl.string(l.t.PCjFjI), l.intl.string(l.t.jjodpK), l.intl.string(l.t['5tHTjI'])],
        [l.intl.string(l.t.jD0BbW), l.intl.string(l.t.zFZP2d), l.intl.string(l.t.AQi4BA), l.intl.string(l.t.HNGDgo)],
        [l.intl.string(l.t['8PHLGh']), l.intl.string(l.t.PAWXCg), l.intl.string(l.t.pyRWsr), l.intl.string(l.t.SfbdaG)],
        [l.intl.string(l.t['VdyT7+']), l.intl.string(l.t['9tQrr6']), l.intl.string(l.t['E11H4+']), l.intl.string(l.t.TRNpXF)],
        [l.intl.string(l.t.gFpEVl), l.intl.string(l.t.oqF1lZ), l.intl.string(l.t['itk+io']), l.intl.string(l.t.WyvPFx)],
        [l.intl.string(l.t['zaKm/f']), l.intl.string(l.t.SES9Zm), l.intl.string(l.t.ebblm5), l.intl.string(l.t.csrWfH)]
    ],
    u = () => [s.gkr.HOUSE_1, s.gkr.HOUSE_2, s.gkr.HOUSE_3, s.jsM],
    m = () => {
        let e = u(),
            t = c(),
            n = d();
        return o().map((i) => {
            let s = t[i],
                l = n[i];
            return (
                r()(null != s && null != l, 'Invalid HypeSquad quiz question index'),
                {
                    prompt: s,
                    options: l.map((t, n) => {
                        let i = e[n];
                        return (
                            r()(null !== i, 'Invalid HypeSquad quiz question option index'),
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
    p = (e) =>
        ({
            [s.gkr.HOUSE_1]: l.intl.string(l.t.ORKdHR),
            [s.gkr.HOUSE_2]: l.intl.string(l.t.aKf3dn),
            [s.gkr.HOUSE_3]: l.intl.string(l.t['21LOa2'])
        })[e];
