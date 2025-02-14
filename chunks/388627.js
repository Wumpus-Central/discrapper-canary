n.d(t, {
    E6: () => b,
    HP: () => T,
    II: () => A,
    fK: () => y,
    pL: () => S
}),
    n(411104),
    n(47120);
var i = n(200651);
n(192379);
var r = n(608787),
    a = n(442837),
    s = n(902704),
    o = n(765250),
    l = n(615287),
    u = n(214629),
    c = n(317381),
    d = n(812206);
n(358221);
var f = n(594190);
n(569545), n(522474);
var _ = n(788983);
n(199902), n(314897);
var p = n(355863),
    h = n(293273);
n(944486), n(808506);
var m = n(145597),
    g = n(32300),
    E = n(371651);
n(340101);
var v = n(501787);
async function y() {
    let e = {
            outOfProcessOverlay: !0,
            focusable: !1
        },
        t = (0, g.Rb)('openOverlayPopout').overlayV3UI,
        a = E.default.getForcedRenderMode(),
        s = (0, g.b4)('openOverlayPopout');
    if (!(t || s) && a === l.R5.UNSET) return;
    let u = a === l.R5.OUT_OF_PROCESS_V3 || a === l.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        c = a === l.R5.OUT_OF_PROCESS_V2,
        d = (e) => null;
    if ((t && !c) || u) {
        let e = (0, r.Un)({
            createPromise: () => Promise.all([n.e('50506'), n.e('35535'), n.e('25292'), n.e('90508'), n.e('13351'), n.e('78447'), n.e('83366'), n.e('83595'), n.e('41070'), n.e('70205'), n.e('93382'), n.e('82734'), n.e('48710'), n.e('92922'), n.e('69838'), n.e('70151'), n.e('2059'), n.e('13368')]).then(n.bind(n, 989373)),
            webpackId: 989373,
            name: 'AppOverlay'
        });
        (d = (t) =>
            (0, i.jsx)(e, {
                withTitleBar: !1,
                windowKey: t
            })),
            (0, o.te)(v.OVERLAY_V3_LAYOUT_ID, p.Z.getDefaultLayout(v.OVERLAY_V3_LAYOUT_ID, 1), 1);
    } else if (s || c) {
        let e = (0, r.Un)({
            createPromise: () => Promise.all([n.e('50506'), n.e('68880'), n.e('48835'), n.e('99152'), n.e('35535'), n.e('26893'), n.e('25292'), n.e('51269'), n.e('22878'), n.e('90508'), n.e('13351'), n.e('95477'), n.e('11212'), n.e('66711'), n.e('78447'), n.e('40190'), n.e('53937'), n.e('83366'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('58059'), n.e('86282'), n.e('18543'), n.e('28467'), n.e('22173'), n.e('83595'), n.e('30243'), n.e('99393'), n.e('68241'), n.e('33862'), n.e('80284'), n.e('78844'), n.e('9371'), n.e('41070'), n.e('60691'), n.e('38902'), n.e('8515'), n.e('70205'), n.e('84466'), n.e('71864'), n.e('7590'), n.e('93382'), n.e('93375'), n.e('64679'), n.e('69057'), n.e('75878'), n.e('60707'), n.e('23919'), n.e('82734'), n.e('94458'), n.e('94989'), n.e('95910'), n.e('37220'), n.e('82158'), n.e('91315'), n.e('81951'), n.e('48710'), n.e('92922'), n.e('78553'), n.e('93513'), n.e('69838'), n.e('70151'), n.e('74976'), n.e('45585'), n.e('2059'), n.e('54030')]).then(n.bind(n, 969383)),
            webpackId: 969383,
            name: 'AppOverlayV2Tech'
        });
        (d = (t) =>
            (0, i.jsx)(e, {
                withTitleBar: !1,
                windowKey: t
            })),
            (0, o.te)(m.qU, p.Z.getDefaultLayout(m.qU, 0), 0);
    } else throw Error('OverlayV3Utils: No overlay rendering mode found');
    await _.bA(v.$J, d, e);
}
function I() {
    let [e = PopoutWindowStore] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [PopoutWindowStore];
    return e.getWindowVisible(OVERLAY_V3_KEY);
}
function T(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].widget !== t[n].widget) return !1;
    return !0;
}
function b(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked) return !1;
    return !0;
}
function S() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.ZP,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Z,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.ZP,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.Z,
        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, u.e1)(),
        o = r.getCurrentEmbeddedActivity(),
        l = null == o ? void 0 : o.applicationId,
        _ = null == l ? void 0 : a.getApplication(l);
    if (null != o && null != _ && s)
        return {
            id: o.applicationId,
            altId: void 0,
            name: _.name
        };
    let p = (0, m.QF)(),
        g = n.getGameForPID(p),
        E = i.getActivityForPID(p);
    return (null == g || null == g.id || null == g.name) && (null == E || null == E.application_id)
        ? void 0
        : {
              id: null !== (e = null == g ? void 0 : g.id) && void 0 !== e ? e : null == E ? void 0 : E.application_id,
              altId: null == E ? void 0 : E.application_id,
              name: null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : null == E ? void 0 : E.name
          };
}
function A() {
    let e = (0, u.PR)();
    return (0, a.e7)([f.ZP, h.Z, c.ZP, d.Z], () => S(f.ZP, h.Z, c.ZP, d.Z, e), [e], s.Z);
}
