n.d(t, {
    E6: () => T,
    HP: () => I,
    II: () => S,
    fK: () => v,
    pL: () => b
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(902704),
    s = n(765250),
    o = n(615287),
    l = n(214629),
    u = n(317381),
    c = n(812206);
n(358221);
var d = n(594190);
n(569545), n(522474);
var f = n(788983);
n(199902), n(314897);
var _ = n(355863),
    p = n(293273);
n(944486), n(808506);
var h = n(145597),
    m = n(32300),
    g = n(371651);
n(340101);
var E = n(501787);
async function v() {
    let e = { outOfProcessOverlay: !0 },
        t = (0, m.Rb)('openOverlayPopout'),
        r = g.Z.getForcedRenderMode(),
        a = (0, m.b4)('openOverlayPopout');
    if (!(t || a) && r === o.R5.UNSET) return;
    let l = (e) => null;
    if (a || r === o.R5.OUT_OF_PROCESS_V2) {
        let { default: e } = await Promise.all([n.e('50506'), n.e('68880'), n.e('48835'), n.e('99152'), n.e('35535'), n.e('51269'), n.e('22878'), n.e('90508'), n.e('13351'), n.e('66711'), n.e('53937'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('58059'), n.e('86282'), n.e('18543'), n.e('18895'), n.e('30243'), n.e('99393'), n.e('68241'), n.e('80284'), n.e('18533'), n.e('73448'), n.e('33862'), n.e('60691'), n.e('38902'), n.e('70298'), n.e('84466'), n.e('86133'), n.e('7590'), n.e('70205'), n.e('78447'), n.e('93375'), n.e('64679'), n.e('86778'), n.e('69057'), n.e('77564'), n.e('93597'), n.e('86715'), n.e('23919'), n.e('84804'), n.e('29452'), n.e('37220'), n.e('82158'), n.e('91315'), n.e('46283'), n.e('92982'), n.e('82755'), n.e('33914'), n.e('19582'), n.e('70151'), n.e('74976'), n.e('45585'), n.e('63421')]).then(n.bind(n, 969383));
        (l = (t) =>
            (0, i.jsx)(e, {
                withTitleBar: !1,
                windowKey: t
            })),
            (0, s.te)(h.qU, _.Z.getDefaultLayout(h.qU, 0), 0);
    } else {
        if (!t && r !== o.R5.OUT_OF_PROCESS_V3) return;
        let { default: e } = await Promise.all([n.e('50506'), n.e('35535'), n.e('90508'), n.e('13351'), n.e('93382'), n.e('70205'), n.e('78447'), n.e('86778'), n.e('93597'), n.e('92982'), n.e('19582'), n.e('70151'), n.e('92922'), n.e('70336'), n.e('35116')]).then(n.bind(n, 989373));
        (l = (t) =>
            (0, i.jsx)(e, {
                withTitleBar: !1,
                windowKey: t
            })),
            (0, s.te)(E.OVERLAY_V3_LAYOUT_ID, _.Z.getDefaultLayout(E.OVERLAY_V3_LAYOUT_ID, 1), 1);
    }
    await f.bA(E.$J, l, e);
}
function y() {
    let [e = PopoutWindowStore] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [PopoutWindowStore];
    return e.getWindowVisible(OVERLAY_V3_KEY);
}
function I(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].widget !== t[n].widget) return !1;
    return !0;
}
function T(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked) return !1;
    return !0;
}
function b() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.ZP,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Z,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.ZP,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.Z,
        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, l.e1)(),
        o = r.getCurrentEmbeddedActivity(),
        f = null == o ? void 0 : o.applicationId,
        _ = null == f ? void 0 : a.getApplication(f);
    if (null != o && null != _ && s)
        return {
            id: o.applicationId,
            altId: void 0,
            name: _.name
        };
    let m = (0, h.QF)(),
        g = n.getGameForPID(m),
        E = i.getActivityForPID(m);
    return (null == g || null == g.id || null == g.name) && (null == E || null == E.application_id)
        ? void 0
        : {
              id: null !== (e = null == g ? void 0 : g.id) && void 0 !== e ? e : null == E ? void 0 : E.application_id,
              altId: null == E ? void 0 : E.application_id,
              name: null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : null == E ? void 0 : E.name
          };
}
function S() {
    let e = (0, l.PR)();
    return (0, r.e7)([d.ZP, p.Z, u.ZP, c.Z], () => b(d.ZP, p.Z, u.ZP, c.Z, e), [e], a.Z);
}
