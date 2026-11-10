(n.d(t, { Av: () => c, I: () => d, hs: () => o, QO: () => u }), n(321073));
var i = n(95498),
    r = n(427710),
    a = n(882035),
    s = n(855522),
    l = n(792996);
let o = (0, a.h)((e, t) => ({
    isLoading: !1,
    inProgressLocale: void 0,
    error: void 0,
    localeData: r.default,
    setLoadingStarted: (t) => e({ isLoading: !0, inProgressLocale: t }),
    setLoadingSucceeded: (n) => {
        let { inProgressLocale: i } = t();
        i === n && e({ isLoading: !1, inProgressLocale: void 0, error: void 0 });
    },
    setLoadingFailed: (n, i) => {
        let { inProgressLocale: r } = t();
        r === i && e({ isLoading: !1, inProgressLocale: void 0, error: n });
    },
    setLocaleData: (t) => {
        e({ localeData: t });
    },
}));
function d(e) {
    return o.subscribe((t, n) => {
        null == n.inProgressLocale || null != t.inProgressLocale || (null == t.error && e(n.inProgressLocale));
    });
}
async function c(e) {
    let t = o.getState();
    t.setLoadingStarted(e);
    let a = [];
    (l.intl.setLocale(e),
        a.push(),
        a.push(
            (async () => {
                (await (async function () {
                    return Promise.all([
                        Promise.resolve().then(n.bind(n, 792996)),
                        Promise.resolve().then(n.bind(n, 738098)),
                        n.e(515818).then(n.bind(n, 609649)),
                        n.e(483876).then(n.bind(n, 749519)),
                        n.e(773315).then(n.bind(n, 564430)),
                        n.e(951509).then(n.bind(n, 54964)),
                        n.e(888126).then(n.bind(n, 312653)),
                        Promise.resolve().then(n.bind(n, 379912)),
                        n.e(528).then(n.bind(n, 967123)),
                        n.e(177641).then(n.bind(n, 140624)),
                        n.e(850572).then(n.bind(n, 321671)),
                        n.e(263878).then(n.bind(n, 143461)),
                        n.e(864043).then(n.bind(n, 223974)),
                        n.e(420053).then(n.bind(n, 161396)),
                        n.e(758913).then(n.bind(n, 884440)),
                        n.e(114792).then(n.bind(n, 290203)),
                        Promise.resolve().then(n.bind(n, 683825)),
                        n.e(142867).then(n.bind(n, 752222)),
                        n.e(114751).then(n.bind(n, 213570)),
                        n.e(602639).then(n.bind(n, 108690)),
                        Promise.resolve().then(n.bind(n, 687782)),
                        Promise.resolve().then(n.bind(n, 135294)),
                        n.e(213653).then(n.bind(n, 242868)),
                        n.e(850298).then(n.bind(n, 557441)),
                        Promise.resolve().then(n.bind(n, 665956)),
                        n.e(35757).then(n.bind(n, 586428)),
                        Promise.resolve().then(n.bind(n, 50302)),
                        n.e(474055).then(n.bind(n, 339514)),
                        n.e(950491).then(n.bind(n, 553750)),
                        n.e(579416).then(n.bind(n, 574731)),
                        n.e(864137).then(n.bind(n, 621488)),
                        Promise.resolve().then(n.bind(n, 307805)),
                        n.e(462010).then(n.bind(n, 361729)),
                        n.e(354565).then(n.bind(n, 966756)),
                        n.e(239734).then(n.bind(n, 870549)),
                        Promise.resolve().then(n.bind(n, 958904)),
                        n.e(139032).then(n.bind(n, 672779)),
                        n.e(512835).then(n.bind(n, 742350)),
                        n.e(370460).then(n.bind(n, 377751)),
                        n.e(33631).then(n.bind(n, 642466)),
                        Promise.resolve().then(n.bind(n, 842671)),
                        n.e(80764).then(n.bind(n, 902903)),
                        n.e(21219).then(n.bind(n, 105518)),
                        n.e(108634).then(n.bind(n, 861089)),
                        n.e(482360).then(n.bind(n, 228779)),
                        Promise.resolve().then(n.bind(n, 350363)),
                        Promise.resolve().then(n.bind(n, 852717)),
                        n.e(151907).then(n.bind(n, 96494)),
                        Promise.resolve().then(n.bind(n, 664188)),
                        Promise.resolve().then(n.bind(n, 124616)),
                        n.e(590814).then(n.bind(n, 137005)),
                        n.e(585503).then(n.bind(n, 221858)),
                        n.e(141004).then(n.bind(n, 705799)),
                        n.e(246969).then(n.bind(n, 84512)),
                        Promise.resolve().then(n.bind(n, 107198)),
                        n.e(320272).then(n.bind(n, 891027)),
                        n.e(557940).then(n.bind(n, 86495)),
                        n.e(87272).then(n.bind(n, 920155)),
                        n.e(690901).then(n.bind(n, 17268)),
                        n.e(157917).then(n.bind(n, 335916)),
                        n.e(103659).then(n.bind(n, 796262)),
                        n.e(382563).then(n.bind(n, 708526)),
                        n.e(520791).then(n.bind(n, 749962)),
                        n.e(287239).then(n.bind(n, 691450)),
                        n.e(841959).then(n.bind(n, 524698)),
                        n.e(582153).then(n.bind(n, 647024)),
                        n.e(83577).then(n.bind(n, 662240)),
                        n.e(517469).then(n.bind(n, 116716)),
                        n.e(88321).then(n.bind(n, 831768)),
                        n.e(649408).then(n.bind(n, 337091)),
                        n.e(491279).then(n.bind(n, 302034)),
                        Promise.resolve().then(n.bind(n, 25082)),
                        n.e(992478).then(n.bind(n, 423661)),
                        n.e(823879).then(n.bind(n, 610234)),
                        n.e(526778).then(n.bind(n, 354817)),
                        n.e(720072).then(n.bind(n, 987899)),
                        Promise.resolve().then(n.bind(n, 191850)),
                        n.e(911064).then(n.bind(n, 11339)),
                        n.e(121039).then(n.bind(n, 327890)),
                        n.e(144962).then(n.bind(n, 820249)),
                        n.e(83888).then(n.bind(n, 786739)),
                        n.e(482360).then(n.bind(n, 228779)),
                        n.e(105064).then(n.bind(n, 383899)),
                        n.e(645671).then(n.bind(n, 571674)),
                        n.e(235221).then(n.bind(n, 89460)),
                        n.e(501569).then(n.bind(n, 869720)),
                        n.e(54953).then(n.bind(n, 236432)),
                        n.e(180909).then(n.bind(n, 326524)),
                        n.e(105996).then(n.bind(n, 160071)),
                        n.e(708737).then(n.bind(n, 855e3)),
                        n.e(583917).then(n.bind(n, 770300)),
                        Promise.resolve().then(n.bind(n, 701256)),
                        n.e(727073).then(n.bind(n, 492728)),
                    ]);
                })(),
                    await (0, i.loadAllMessagesInLocale)(e));
            })(),
        ),
        s.A.setLocale(e),
        a.push(s.A.loadPromise),
        a.push(
            (async function (e) {
                let t = o.getState(),
                    i = n(873382).v[e];
                if (null == i) return void t.setLocaleData(r.default);
                let a = await i();
                {
                    let { registerLocale: t } = n(7467);
                    t(e, a);
                }
                t.setLocaleData(a);
            })(e),
        ),
        a.push((async function () {})()),
        a.push(
            (async function (e) {
                let t = n(608998).W[e];
                null != t && (await t());
                let i = [],
                    r = ("no" === e ? "nb" : e).split("-");
                for (; r.length > 0;) (i.push(r.join("-")), r.pop());
                (i.push("en-US"), n(536637).locale(i));
            })(e),
        ),
        a.push(
            (function (e) {
                let { setTags: t } = n(856383).A;
                return (t({ locale: e }), Promise.resolve());
            })(e),
        ),
        await Promise.all(a).catch((n) => t.setLoadingFailed(n, e)),
        t.setLoadingSucceeded(e));
}
function u() {
    return o((e) => e.localeData) ?? r.default;
}
