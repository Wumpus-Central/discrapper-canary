r.d(n, {
    E6: function () {
        return b;
    },
    HP: function () {
        return T;
    },
    II: function () {
        return S;
    },
    fK: function () {
        return I;
    },
    pL: function () {
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
    _ = r(788983),
    h = r(355863),
    p = r(293273),
    m = r(145597),
    g = r(32300),
    E = r(371651),
    v = r(501787);
async function I() {
    let e = { outOfProcessOverlay: !0 },
        n = (0, g.Rb)('openOverlayPopout'),
        a = E.Z.getForcedRenderMode(),
        s = (e) => null,
        u = v.OVERLAY_V3_LAYOUT_ID,
        c = 1;
    if (n && a !== l.R5.OUT_OF_PROCESS_V2) {
        let { default: e } = await Promise.all([r.e('50506'), r.e('35535'), r.e('90508'), r.e('13351'), r.e('39701'), r.e('93382'), r.e('70205'), r.e('78447'), r.e('86778'), r.e('67762'), r.e('79507'), r.e('19578'), r.e('72884'), r.e('58928')]).then(r.bind(r, 989373));
        s = (n) =>
            (0, i.jsx)(e, {
                withTitleBar: !1,
                windowKey: n
            });
    } else {
        let { default: e } = await Promise.all([r.e('77298'), r.e('23357'), r.e('50506'), r.e('96211'), r.e('48835'), r.e('99152'), r.e('35535'), r.e('12013'), r.e('73503'), r.e('52249'), r.e('68956'), r.e('6380'), r.e('72181'), r.e('26182'), r.e('56630'), r.e('18543'), r.e('95900'), r.e('51269'), r.e('32776'), r.e('66711'), r.e('90508'), r.e('13351'), r.e('86282'), r.e('65840'), r.e('21628'), r.e('95393'), r.e('33862'), r.e('38902'), r.e('87624'), r.e('74421'), r.e('24207'), r.e('25788'), r.e('46097'), r.e('8739'), r.e('58059'), r.e('18895'), r.e('24391'), r.e('57674'), r.e('99393'), r.e('99008'), r.e('7590'), r.e('39701'), r.e('80284'), r.e('34935'), r.e('20561'), r.e('70205'), r.e('1187'), r.e('69174'), r.e('78447'), r.e('86778'), r.e('93375'), r.e('64679'), r.e('69057'), r.e('77564'), r.e('73330'), r.e('67762'), r.e('90225'), r.e('84804'), r.e('37220'), r.e('61447'), r.e('82158'), r.e('91315'), r.e('64222'), r.e('79507'), r.e('40126'), r.e('19578'), r.e('55251'), r.e('61883')]).then(r.bind(r, 969383));
        (s = (n) =>
            (0, i.jsx)(e, {
                withTitleBar: !1,
                windowKey: n
            })),
            (u = m.qU),
            (c = 0);
    }
    (0, o.te)(u, h.Z.getDefaultLayout(u, c), c), await _.bA(v.OVERLAY_V3_KEY, s, e);
}
function T(e, n) {
    if (e === n) return !0;
    if (e.length !== n.length) return !1;
    for (let r = 0; r < e.length; r++) if (e[r].widget !== n[r].widget) return !1;
    return !0;
}
function b(e, n) {
    if (e === n) return !0;
    if (e.length !== n.length) return !1;
    for (let r = 0; r < e.length; r++) if (e[r].index !== n[r].index || e[r].notification !== n[r].notification || e[r].locked !== n[r].locked) return !1;
    return !0;
}
function y() {
    var e, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.ZP,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Z,
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
    let g = (0, m.QF)(),
        E = r.getGameForPID(g),
        v = i.getActivityForPID(g);
    return (null == E || null == E.id || null == E.name) && (null == v || null == v.application_id)
        ? void 0
        : {
              id: null !== (e = null == E ? void 0 : E.id) && void 0 !== e ? e : null == v ? void 0 : v.application_id,
              altId: null == v ? void 0 : v.application_id,
              name: null !== (n = null == E ? void 0 : E.name) && void 0 !== n ? n : null == v ? void 0 : v.name
          };
}
function S() {
    let e = (0, u.PR)();
    return (0, a.e7)([f.ZP, p.Z, c.ZP, d.Z], () => y(f.ZP, p.Z, c.ZP, d.Z, e), [e], s.Z);
}
