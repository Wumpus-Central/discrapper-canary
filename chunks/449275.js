(n.d(t, { Av: () => c, I: () => d, hs: () => o, QO: () => u }), n(321073));
var i = n(989324),
    r = n(882035),
    a = n(855522),
    s = n(792996);
let l = n(873382).Q,
    o = (0, r.h)((e, t) => ({
        isLoading: !1,
        inProgressLocale: void 0,
        error: void 0,
        localeData: l,
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
    let r = [];
    (s.intl.setLocale(e),
        r.push(),
        r.push(
            (async () => {
                (await (async function () {
                    return Promise.all([
                        Promise.resolve().then(n.bind(n, 792996)),
                        n.e(343168).then(n.bind(n, 461571)),
                        Promise.resolve().then(n.bind(n, 730372)),
                        n.e(222890).then(n.bind(n, 804913)),
                        n.e(327836).then(n.bind(n, 613783)),
                        n.e(511954).then(n.bind(n, 669609)),
                        n.e(586168).then(n.bind(n, 736683)),
                        n.e(886601).then(n.bind(n, 78512)),
                        n.e(422915).then(n.bind(n, 911630)),
                        n.e(474160).then(n.bind(n, 628595)),
                        n.e(913433).then(n.bind(n, 991104)),
                        Promise.resolve().then(n.bind(n, 60498)),
                        n.e(615878).then(n.bind(n, 778853)),
                        n.e(633983).then(n.bind(n, 227906)),
                        n.e(135514).then(n.bind(n, 993)),
                        n.e(303968).then(n.bind(n, 419619)),
                        n.e(898261).then(n.bind(n, 722676)),
                        n.e(439571).then(n.bind(n, 336606)),
                        n.e(54219).then(n.bind(n, 572614)),
                        n.e(235426).then(n.bind(n, 427833)),
                        Promise.resolve().then(n.bind(n, 636107)),
                        n.e(602737).then(n.bind(n, 291848)),
                        n.e(540085).then(n.bind(n, 652180)),
                        n.e(531072).then(n.bind(n, 560067)),
                        Promise.resolve().then(n.bind(n, 467160)),
                        Promise.resolve().then(n.bind(n, 925440)),
                        n.e(226475).then(n.bind(n, 484134)),
                        n.e(613831).then(n.bind(n, 955066)),
                        n.e(248648).then(n.bind(n, 418555)),
                        Promise.resolve().then(n.bind(n, 564382)),
                        n.e(374003).then(n.bind(n, 912510)),
                        Promise.resolve().then(n.bind(n, 67640)),
                        n.e(129721).then(n.bind(n, 705440)),
                        n.e(878729).then(n.bind(n, 223088)),
                        n.e(346394).then(n.bind(n, 140961)),
                        n.e(8679).then(n.bind(n, 76378)),
                        n.e(919577).then(n.bind(n, 130496)),
                        Promise.resolve().then(n.bind(n, 964079)),
                        n.e(712468).then(n.bind(n, 313855)),
                        n.e(801771).then(n.bind(n, 478566)),
                        n.e(89200).then(n.bind(n, 27379)),
                        Promise.resolve().then(n.bind(n, 40694)),
                        n.e(42994).then(n.bind(n, 87945)),
                        n.e(12841).then(n.bind(n, 713040)),
                        n.e(853658).then(n.bind(n, 275425)),
                        n.e(943909).then(n.bind(n, 406788)),
                        n.e(829666).then(n.bind(n, 874745)),
                        Promise.resolve().then(n.bind(n, 873909)),
                        n.e(578858).then(n.bind(n, 731761)),
                        n.e(943657).then(n.bind(n, 53776)),
                        n.e(913376).then(n.bind(n, 902435)),
                        n.e(613510).then(n.bind(n, 177189)),
                        Promise.resolve().then(n.bind(n, 298533)),
                        Promise.resolve().then(n.bind(n, 547507)),
                        n.e(724185).then(n.bind(n, 718912)),
                        Promise.resolve().then(n.bind(n, 46742)),
                        Promise.resolve().then(n.bind(n, 581694)),
                        n.e(740524).then(n.bind(n, 685415)),
                        n.e(787813).then(n.bind(n, 508420)),
                        n.e(785330).then(n.bind(n, 810505)),
                        n.e(255895).then(n.bind(n, 313866)),
                        Promise.resolve().then(n.bind(n, 707328)),
                        n.e(168482).then(n.bind(n, 483769)),
                        n.e(804786).then(n.bind(n, 124105)),
                        n.e(301082).then(n.bind(n, 978337)),
                        n.e(774203).then(n.bind(n, 777462)),
                        n.e(399133).then(n.bind(n, 735980)),
                        n.e(775163).then(n.bind(n, 753270)),
                        n.e(180389).then(n.bind(n, 224324)),
                        n.e(363709).then(n.bind(n, 714572)),
                        n.e(339381).then(n.bind(n, 464660)),
                        n.e(63989).then(n.bind(n, 107540)),
                        n.e(214933).then(n.bind(n, 653684)),
                        n.e(309627).then(n.bind(n, 30838)),
                        n.e(464967).then(n.bind(n, 336506)),
                        n.e(540126).then(n.bind(n, 246317)),
                        n.e(146733).then(n.bind(n, 230972)),
                        Promise.resolve().then(n.bind(n, 56485)),
                        Promise.resolve().then(n.bind(n, 804280)),
                        n.e(367724).then(n.bind(n, 45607)),
                        n.e(552709).then(n.bind(n, 160100)),
                        n.e(28456).then(n.bind(n, 657371)),
                        n.e(166626).then(n.bind(n, 104185)),
                        Promise.resolve().then(n.bind(n, 258576)),
                        n.e(96274).then(n.bind(n, 887017)),
                        n.e(199281).then(n.bind(n, 440200)),
                        n.e(30888).then(n.bind(n, 229595)),
                        n.e(949486).then(n.bind(n, 532413)),
                        n.e(613510).then(n.bind(n, 177189)),
                        n.e(304110).then(n.bind(n, 769469)),
                        n.e(925509).then(n.bind(n, 196644)),
                        n.e(143819).then(n.bind(n, 538118)),
                        n.e(85475).then(n.bind(n, 857902)),
                        n.e(413875).then(n.bind(n, 997758)),
                        n.e(278291).then(n.bind(n, 68446)),
                        n.e(553286).then(n.bind(n, 582501)),
                        n.e(439463).then(n.bind(n, 269210)),
                        n.e(105403).then(n.bind(n, 667510)),
                        n.e(793510).then(n.bind(n, 952645)),
                        Promise.resolve().then(n.bind(n, 464066)),
                        n.e(173031).then(n.bind(n, 975194)),
                        n.e(298820).then(n.bind(n, 887855)),
                        n.e(660041).then(n.bind(n, 473840)),
                        n.e(837811).then(n.bind(n, 522174)),
                    ]);
                })(),
                    await (0, i.loadAllMessagesInLocale)(e));
            })(),
        ),
        a.A.setLocale(e),
        r.push(a.A.loadPromise),
        r.push(
            (async function (e) {
                {
                    let t = o.getState(),
                        i = n(873382).v[e];
                    if (null == i) return void t.setLocaleData(l);
                    let r = await i(),
                        { registerLocale: a } = n(7467);
                    (a(e, r), t.setLocaleData(r));
                }
            })(e),
        ),
        r.push((async function () {})()),
        r.push(
            (async function (e) {
                let t = n(608998).W[e];
                null != t && (await t());
                let i = [],
                    r = ("no" === e ? "nb" : e).split("-");
                for (; r.length > 0;) (i.push(r.join("-")), r.pop());
                (i.push("en-US"), n(536637).locale(i));
            })(e),
        ),
        r.push(
            (function (e) {
                let { setTags: t } = n(856383).A;
                return (t({ locale: e }), Promise.resolve());
            })(e),
        ),
        await Promise.all(r).catch((n) => t.setLoadingFailed(n, e)),
        t.setLoadingSucceeded(e));
}
function u() {
    return o((e) => e.localeData) ?? l;
}
