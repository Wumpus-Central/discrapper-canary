n.d(t, { f: () => f }), n(411104);
var r = n(200651);
n(192379);
var i = n(608787),
    o = n(765250),
    a = n(615287),
    s = n(788983),
    l = n(355863),
    c = n(145597),
    u = n(32300),
    d = n(501787);
async function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.R5.UNSET,
        t = {
            outOfProcessOverlay: !0,
            focusable: !1
        },
        f = (0, u.Rb)('openOverlayPopout').overlayV3UI,
        _ = (0, u.b4)('openOverlayPopout');
    if (!(f || _) && e === a.R5.UNSET) return;
    let p = e === a.R5.OUT_OF_PROCESS_V3 || e === a.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        h = e === a.R5.OUT_OF_PROCESS_V2,
        m = (e) => null;
    if ((f && !h) || p) {
        let e = (0, i.Un)({
            createPromise: () => Promise.all([n.e('50506'), n.e('35535'), n.e('25292'), n.e('90508'), n.e('13351'), n.e('88936'), n.e('88712'), n.e('70205'), n.e('12416'), n.e('7755'), n.e('92922'), n.e('50751'), n.e('1093'), n.e('13368')]).then(n.bind(n, 989373)),
            webpackId: 989373,
            name: 'AppOverlay'
        });
        (m = (t) =>
            (0, r.jsx)(e, {
                withTitleBar: !1,
                windowKey: t
            })),
            (0, o.te)(d.OVERLAY_V3_LAYOUT_ID, l.Z.getDefaultLayout(d.OVERLAY_V3_LAYOUT_ID, 1), 1);
    } else if (_ || h) {
        let e = (0, i.Un)({
            createPromise: () => Promise.all([n.e('50506'), n.e('68880'), n.e('48835'), n.e('99152'), n.e('35535'), n.e('25292'), n.e('22878'), n.e('90508'), n.e('13351'), n.e('95477'), n.e('11212'), n.e('66711'), n.e('97349'), n.e('50963'), n.e('53937'), n.e('6380'), n.e('46097'), n.e('84335'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('18895'), n.e('88936'), n.e('30243'), n.e('99393'), n.e('68241'), n.e('80284'), n.e('85574'), n.e('76030'), n.e('30806'), n.e('88712'), n.e('60691'), n.e('38902'), n.e('42743'), n.e('49049'), n.e('45847'), n.e('70205'), n.e('40247'), n.e('26593'), n.e('7590'), n.e('95786'), n.e('64679'), n.e('69057'), n.e('78447'), n.e('98254'), n.e('22356'), n.e('20777'), n.e('35755'), n.e('14093'), n.e('12416'), n.e('94989'), n.e('37220'), n.e('17024'), n.e('82158'), n.e('91315'), n.e('72593'), n.e('7755'), n.e('92922'), n.e('53494'), n.e('50751'), n.e('1093'), n.e('45260'), n.e('76977'), n.e('54030')]).then(n.bind(n, 969383)),
            webpackId: 969383,
            name: 'AppOverlayV2Tech'
        });
        (m = (t) =>
            (0, r.jsx)(e, {
                withTitleBar: !1,
                windowKey: t
            })),
            (0, o.te)(c.OVERLAY_LAYOUT_ID, l.Z.getDefaultLayout(c.OVERLAY_LAYOUT_ID, 0), 0);
    } else throw Error('OverlayV3Utils: No overlay rendering mode found');
    await s.bA(d.$J, m, t);
}
