n.d(t, {
    X8: function () {
        return g;
    },
    tI: function () {
        return m;
    },
    uj: function () {
        return l;
    }
}),
    n(653041);
var i = n(512722),
    r = n.n(i),
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
            !e.includes(t) && e.push(t);
        }
        return e;
    },
    c = () => [a.intl.string(a.t.wWV9Ex), a.intl.string(a.t.ujB5uL), a.intl.string(a.t.zYNt1N), a.intl.string(a.t.CQkJcn), a.intl.string(a.t.dPgrQk), a.intl.string(a.t.uS4tV1), a.intl.string(a.t.DMzlBg), a.intl.string(a.t['4A4ezc']), a.intl.string(a.t.wshlHR), a.intl.string(a.t.pxkSfn), a.intl.string(a.t['FAs+YG']), a.intl.string(a.t['dY+C+f']), a.intl.string(a.t['1DiI6+']), a.intl.string(a.t.r23dp6), a.intl.string(a.t['/cxmLy'])],
    d = () => [
        [a.intl.string(a.t.o6ELq6), a.intl.string(a.t.VVcLQk), a.intl.string(a.t['v/5qvr']), a.intl.string(a.t.dMYFq6)],
        [a.intl.string(a.t['R2dI+f']), a.intl.string(a.t.s0EqhI), a.intl.string(a.t.ex6tvr), a.intl.string(a.t.lk2Bt7)],
        [a.intl.string(a.t.NOC4TU), a.intl.string(a.t.FlDBfH), a.intl.string(a.t.MLzlRU), a.intl.string(a.t['1j46Zm'])],
        [a.intl.string(a.t.NyWJLy), a.intl.string(a.t['uF0u8/']), a.intl.string(a.t.BZuLSU), a.intl.string(a.t['27zWTk'])],
        [a.intl.string(a.t['Aq4y+v']), a.intl.string(a.t.rr72eH), a.intl.string(a.t['2v7Vv7']), a.intl.string(a.t.H5wx2d)],
        [a.intl.string(a.t.tld7IS), a.intl.string(a.t.OOfrPj), a.intl.string(a.t.QbtUj4), a.intl.string(a.t['88DsQk'])],
        [a.intl.string(a.t.wURefn), a.intl.string(a.t['6abY0d']), a.intl.string(a.t.VttdKC), a.intl.string(a.t.N9tGcH)],
        [a.intl.string(a.t['pK+hm5']), a.intl.string(a.t.fpfjDQ), a.intl.string(a.t.QDZPw8), a.intl.string(a.t.DJBGub)],
        [a.intl.string(a.t.b5ar8f), a.intl.string(a.t.SBETho), a.intl.string(a.t.WsXEqa), a.intl.string(a.t['1jEI+P'])],
        [a.intl.string(a.t['Y+ztvL']), a.intl.string(a.t.PCjFjI), a.intl.string(a.t.jjodpK), a.intl.string(a.t['5tHTjI'])],
        [a.intl.string(a.t.jD0BbW), a.intl.string(a.t.zFZP2d), a.intl.string(a.t.AQi4BA), a.intl.string(a.t.HNGDgo)],
        [a.intl.string(a.t['8PHLGh']), a.intl.string(a.t.PAWXCg), a.intl.string(a.t.pyRWsr), a.intl.string(a.t.SfbdaG)],
        [a.intl.string(a.t['VdyT7+']), a.intl.string(a.t['9tQrr6']), a.intl.string(a.t['E11H4+']), a.intl.string(a.t.TRNpXF)],
        [a.intl.string(a.t.gFpEVl), a.intl.string(a.t.oqF1lZ), a.intl.string(a.t['itk+io']), a.intl.string(a.t.WyvPFx)],
        [a.intl.string(a.t['zaKm/f']), a.intl.string(a.t.SES9Zm), a.intl.string(a.t.ebblm5), a.intl.string(a.t.csrWfH)]
    ],
    u = () => [s.gkr.HOUSE_1, s.gkr.HOUSE_2, s.gkr.HOUSE_3, s.jsM],
    m = () => {
        let e = u(),
            t = c(),
            n = d();
        return o().map((i) => {
            let s = t[i],
                a = n[i];
            return (
                r()(null != s && null != a, 'Invalid HypeSquad quiz question index'),
                {
                    prompt: s,
                    options: a.map((t, n) => {
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
    g = (e) =>
        ({
            [s.gkr.HOUSE_1]: a.intl.string(a.t.ORKdHR),
            [s.gkr.HOUSE_2]: a.intl.string(a.t.aKf3dn),
            [s.gkr.HOUSE_3]: a.intl.string(a.t['21LOa2'])
        })[e];
