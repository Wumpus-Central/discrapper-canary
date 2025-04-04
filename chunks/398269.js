n.d(t, { f: () => _ }), n(411104);
var r = n(200651);
n(192379);
var i = n(608787),
    o = n(765250),
    a = n(615287),
    s = n(788983),
    l = n(355863),
    c = n(145597),
    u = n(32300),
    d = n(757744),
    f = n(501787);
async function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.R5.UNSET,
        t = {
            outOfProcessOverlay: !0,
            focusable: !1
        },
        _ = (0, u.Rb)('openOverlayPopout').overlayV3UI,
        p = (0, u.b4)('openOverlayPopout');
    if (!(_ || p) && e === a.R5.UNSET) return;
    let h = e === a.R5.OUT_OF_PROCESS_V3 || e === a.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        m = e === a.R5.OUT_OF_PROCESS_V2,
        g = (e) => null;
    if ((_ && !m) || h) {
        let e = (0, i.Un)({
            createPromise: () => Promise.all([n.e('50506'), n.e('35535'), n.e('25292'), n.e('90508'), n.e('13351'), n.e('20875'), n.e('93602'), n.e('88712'), n.e('70205'), n.e('3589'), n.e('75862'), n.e('38542'), n.e('28543'), n.e('89298'), n.e('29709'), n.e('55196'), n.e('13368')]).then(n.bind(n, 989373)),
            webpackId: 989373,
            name: 'AppOverlay'
        });
        (g = (t) =>
            (0, r.jsx)(e, {
                withTitleBar: !1,
                windowKey: t
            })),
            (0, o.te)(d.$, l.Z.getDefaultLayout(d.$, d.H), d.H);
    } else if (p || m) {
        let e = (0, i.Un)({
            createPromise: () => Promise.all([n.e('50506'), n.e('68880'), n.e('48835'), n.e('99152'), n.e('35535'), n.e('25292'), n.e('95477'), n.e('90508'), n.e('11212'), n.e('22878'), n.e('13351'), n.e('86328'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('18895'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('6208'), n.e('80284'), n.e('20875'), n.e('85574'), n.e('22253'), n.e('93602'), n.e('24967'), n.e('62117'), n.e('22646'), n.e('60691'), n.e('64838'), n.e('49751'), n.e('69606'), n.e('88712'), n.e('42743'), n.e('32'), n.e('70205'), n.e('49049'), n.e('19948'), n.e('87185'), n.e('7590'), n.e('3589'), n.e('93375'), n.e('64679'), n.e('78447'), n.e('98254'), n.e('22356'), n.e('15327'), n.e('35755'), n.e('94458'), n.e('94989'), n.e('75862'), n.e('37220'), n.e('82158'), n.e('91315'), n.e('84181'), n.e('41150'), n.e('89107'), n.e('38542'), n.e('24920'), n.e('28543'), n.e('8039'), n.e('89298'), n.e('29709'), n.e('55196'), n.e('74976'), n.e('45585'), n.e('54030')]).then(n.bind(n, 969383)),
            webpackId: 969383,
            name: 'AppOverlayV2Tech'
        });
        (g = (t) =>
            (0, r.jsx)(e, {
                withTitleBar: !1,
                windowKey: t
            })),
            (0, o.te)(c.OVERLAY_LAYOUT_ID, l.Z.getDefaultLayout(c.OVERLAY_LAYOUT_ID, 0), 0);
    } else throw Error('OverlayV3Utils: No overlay rendering mode found');
    await s.bA(f.$J, g, t);
}
