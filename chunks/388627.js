r.d(n, {
    E6: function () {
        return A;
    },
    HP: function () {
        return S;
    },
    II: function () {
        return C;
    },
    _v: function () {
        return b;
    },
    fK: function () {
        return T;
    },
    pL: function () {
        return N;
    },
    x0: function () {
        return y;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(902704),
    o = r(765250),
    l = r(615287),
    u = r(214629),
    c = r(317381),
    d = r(812206),
    f = r(594190),
    _ = r(522474),
    h = r(788983),
    p = r(355863),
    m = r(293273),
    g = r(145597),
    E = r(32300),
    v = r(371651),
    I = r(501787);
async function T() {
    let e = { outOfProcessOverlay: !0 },
        n = (0, E.Rb)('openOverlayPopout'),
        a = v.Z.getForcedRenderMode(),
        s = (0, E.b4)('openOverlayPopout');
    if (!(n || s) && a === l.R5.UNSET) return;
    let u = (e) => null;
    if (s || a === l.R5.OUT_OF_PROCESS_V2) {
        let { default: e } = await Promise.all([r.e('77298'), r.e('23357'), r.e('50506'), r.e('96211'), r.e('48835'), r.e('99152'), r.e('35535'), r.e('12013'), r.e('73503'), r.e('52249'), r.e('68956'), r.e('6380'), r.e('72181'), r.e('26182'), r.e('56630'), r.e('95900'), r.e('51269'), r.e('32776'), r.e('66711'), r.e('90508'), r.e('13351'), r.e('86282'), r.e('65840'), r.e('21628'), r.e('18543'), r.e('87624'), r.e('74421'), r.e('24207'), r.e('46097'), r.e('8739'), r.e('58059'), r.e('18895'), r.e('24391'), r.e('57674'), r.e('99393'), r.e('99008'), r.e('95393'), r.e('57661'), r.e('33862'), r.e('80284'), r.e('38902'), r.e('27289'), r.e('20561'), r.e('69174'), r.e('7590'), r.e('70205'), r.e('78447'), r.e('1187'), r.e('86778'), r.e('93375'), r.e('64679'), r.e('69057'), r.e('77564'), r.e('73330'), r.e('94785'), r.e('90225'), r.e('84804'), r.e('37220'), r.e('61447'), r.e('82158'), r.e('91315'), r.e('61999'), r.e('20115'), r.e('84656'), r.e('19578'), r.e('21429'), r.e('22564')]).then(r.bind(r, 969383));
        (u = (n) =>
            (0, i.jsx)(e, {
                withTitleBar: !1,
                windowKey: n
            })),
            (0, o.te)(g.qU, p.Z.getDefaultLayout(g.qU, 0), 0);
    } else {
        if (!n && a !== l.R5.OUT_OF_PROCESS_V3) return;
        let { default: e } = await Promise.all([r.e('50506'), r.e('35535'), r.e('90508'), r.e('13351'), r.e('57661'), r.e('93382'), r.e('70205'), r.e('78447'), r.e('86778'), r.e('94785'), r.e('20115'), r.e('19578'), r.e('72884'), r.e('60971')]).then(r.bind(r, 989373));
        (u = (n) =>
            (0, i.jsx)(e, {
                withTitleBar: !1,
                windowKey: n
            })),
            (0, o.te)(I.OVERLAY_V3_LAYOUT_ID, p.Z.getDefaultLayout(I.OVERLAY_V3_LAYOUT_ID, 1), 1);
    }
    await h.bA(I.OVERLAY_V3_KEY, u, e);
}
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.Z;
    return e.getWindowVisible(I.OVERLAY_V3_KEY);
}
function y() {
    return (0, a.e7)([_.Z], () => _.Z.getWindowVisible(I.OVERLAY_V3_KEY), []);
}
function S(e, n) {
    if (e === n) return !0;
    if (e.length !== n.length) return !1;
    for (let r = 0; r < e.length; r++) if (e[r].widget !== n[r].widget) return !1;
    return !0;
}
function A(e, n) {
    if (e === n) return !0;
    if (e.length !== n.length) return !1;
    for (let r = 0; r < e.length; r++) if (e[r].index !== n[r].index || e[r].notification !== n[r].notification || e[r].locked !== n[r].locked) return !1;
    return !0;
}
function N() {
    var e, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.ZP,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Z,
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.ZP,
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.Z,
        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, u.e1)(),
        l = a.getCurrentEmbeddedActivity(),
        _ = null == l ? void 0 : l.applicationId,
        h = null == _ ? void 0 : s.getApplication(_);
    if (null != l && null != h && o)
        return {
            id: l.applicationId,
            altId: void 0,
            name: h.name
        };
    let p = (0, g.QF)(),
        E = r.getGameForPID(p),
        v = i.getActivityForPID(p);
    return (null == E || null == E.id || null == E.name) && (null == v || null == v.application_id)
        ? void 0
        : {
              id: null !== (e = null == E ? void 0 : E.id) && void 0 !== e ? e : null == v ? void 0 : v.application_id,
              altId: null == v ? void 0 : v.application_id,
              name: null !== (n = null == E ? void 0 : E.name) && void 0 !== n ? n : null == v ? void 0 : v.name
          };
}
function C() {
    let e = (0, u.PR)();
    return (0, a.e7)([f.ZP, m.Z, c.ZP, d.Z], () => N(f.ZP, m.Z, c.ZP, d.Z, e), [e], s.Z);
}
