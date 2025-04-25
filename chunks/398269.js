n.d(t, { f: () => f }), n(415506);
var r = n(200651);
n(192379);
var i = n(608787),
    a = n(765250),
    o = n(615287),
    s = n(788983),
    l = n(355863),
    c = n(32300),
    u = n(757744),
    d = n(501787);
async function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.R5.UNSET,
        t = {
            outOfProcessOverlay: !0,
            focusable: !1
        },
        f = (0, c.Rb)('openOverlayPopout').overlayV3UI;
    if (!f && e === o.R5.UNSET) return;
    let _ = e === o.R5.OUT_OF_PROCESS_V3 || e === o.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        p = (e) => null;
    if (f || _) {
        let e = (0, i.Un)({
            createPromise: () => Promise.all([n.e('94342'), n.e('35535'), n.e('25292'), n.e('13351'), n.e('90564'), n.e('83166'), n.e('93602'), n.e('72283'), n.e('3589'), n.e('81489'), n.e('77937'), n.e('92922'), n.e('89298'), n.e('32220'), n.e('55196'), n.e('13368')]).then(n.bind(n, 989373)),
            webpackId: 989373,
            name: 'AppOverlay'
        });
        (p = (t) =>
            (0, r.jsx)(e, {
                withTitleBar: !1,
                windowKey: t
            })),
            (0, a.te)(u.$, l.Z.getDefaultLayout(u.$, u.H), u.H);
    } else throw Error('OverlayV3Utils: No overlay rendering mode found');
    await s.bA(d.$J, p, t);
}
