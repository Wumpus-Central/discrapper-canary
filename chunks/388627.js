r.d(n, {
    E6: function () {
        return P;
    },
    HP: function () {
        return w;
    },
    II: function () {
        return k;
    },
    Rv: function () {
        return L;
    },
    fK: function () {
        return O;
    },
    pL: function () {
        return M;
    },
    uO: function () {
        return x;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var s = r(442837),
    o = r(902704),
    l = r(765250),
    u = r(615287),
    c = r(214629),
    d = r(317381),
    f = r(812206),
    _ = r(358221),
    h = r(594190),
    p = r(569545),
    m = r(522474),
    g = r(788983),
    E = r(199902),
    v = r(314897),
    I = r(355863),
    T = r(293273),
    b = r(944486),
    y = r(808506),
    S = r(145597),
    A = r(32300),
    N = r(371651),
    C = r(340101),
    R = r(501787);
async function O() {
    let e = { outOfProcessOverlay: !0 },
        n = (0, A.Rb)('openOverlayPopout'),
        i = N.Z.getForcedRenderMode(),
        s = (0, A.b4)('openOverlayPopout');
    if (!(n || s) && i === u.R5.UNSET) return;
    let o = (e) => null;
    if (s || i === u.R5.OUT_OF_PROCESS_V2) {
        let { default: e } = await Promise.all([r.e('77298'), r.e('23357'), r.e('50506'), r.e('96211'), r.e('48835'), r.e('99152'), r.e('35535'), r.e('12013'), r.e('73503'), r.e('52249'), r.e('68956'), r.e('6380'), r.e('72181'), r.e('56630'), r.e('26182'), r.e('95900'), r.e('51269'), r.e('32776'), r.e('66711'), r.e('90508'), r.e('13351'), r.e('86282'), r.e('65840'), r.e('21628'), r.e('18543'), r.e('87624'), r.e('74421'), r.e('24207'), r.e('46097'), r.e('8739'), r.e('58059'), r.e('18895'), r.e('24391'), r.e('57674'), r.e('99393'), r.e('99008'), r.e('95393'), r.e('33862'), r.e('57661'), r.e('80284'), r.e('38902'), r.e('27289'), r.e('20561'), r.e('69174'), r.e('7590'), r.e('70205'), r.e('78447'), r.e('86778'), r.e('93375'), r.e('64679'), r.e('69057'), r.e('77564'), r.e('91803'), r.e('92421'), r.e('90225'), r.e('84804'), r.e('37220'), r.e('61447'), r.e('82158'), r.e('91315'), r.e('13305'), r.e('20115'), r.e('84656'), r.e('19578'), r.e('21429'), r.e('22564')]).then(r.bind(r, 969383));
        (o = (n) =>
            (0, a.jsx)(e, {
                withTitleBar: !1,
                windowKey: n
            })),
            (0, l.te)(S.qU, I.Z.getDefaultLayout(S.qU, 0), 0);
    } else {
        if (!n && i !== u.R5.OUT_OF_PROCESS_V3) return;
        let { default: e } = await Promise.all([r.e('50506'), r.e('35535'), r.e('90508'), r.e('13351'), r.e('57661'), r.e('93382'), r.e('70205'), r.e('78447'), r.e('86778'), r.e('92421'), r.e('20115'), r.e('19578'), r.e('72884'), r.e('58928')]).then(r.bind(r, 989373));
        (o = (n) =>
            (0, a.jsx)(e, {
                withTitleBar: !1,
                windowKey: n
            })),
            (0, l.te)(R.OVERLAY_V3_LAYOUT_ID, I.Z.getDefaultLayout(R.OVERLAY_V3_LAYOUT_ID, 1), 1);
    }
    await g.bA(R.OVERLAY_V3_KEY, o, e);
}
function D() {
    let [e = m.Z] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [m.Z];
    return e.getWindowVisible(R.OVERLAY_V3_KEY);
}
function L() {
    let [e = m.Z, n = b.Z, r = E.Z, i = _.Z, a = v.default, s = I.Z, o = y.Z] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [m.Z, b.Z, E.Z, _.Z, v.default, I.Z, y.Z];
    if (!D([e]) || !(null != o.getFocusedPID())) return !1;
    let l = n.getVoiceChannelId();
    if (null == l) return !1;
    let u = s.getWidgetsForLayout(R.OVERLAY_V3_LAYOUT_ID).find((e) => (0, C.ZL)(e));
    if (null == u || !u.pinned) return !1;
    let c = a.getId(),
        d = new Set(r.getAllActiveStreamsForChannel(l).map((e) => (0, p.V9)(e)));
    return i.getStreamParticipants(l).filter((e) => e.user.id !== c && d.has((0, p.V9)(e.stream))).length > 0;
}
function x() {
    return (0, s.e7)([m.Z, b.Z, E.Z, _.Z, v.default, I.Z, y.Z], () => L([m.Z, b.Z, E.Z, _.Z, v.default, I.Z, y.Z]));
}
function w(e, n) {
    if (e === n) return !0;
    if (e.length !== n.length) return !1;
    for (let r = 0; r < e.length; r++) if (e[r].widget !== n[r].widget) return !1;
    return !0;
}
function P(e, n) {
    if (e === n) return !0;
    if (e.length !== n.length) return !1;
    for (let r = 0; r < e.length; r++) if (e[r].index !== n[r].index || e[r].notification !== n[r].notification || e[r].locked !== n[r].locked) return !1;
    return !0;
}
function M() {
    var e, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.ZP,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.Z,
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.ZP,
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.Z,
        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, c.e1)(),
        l = a.getCurrentEmbeddedActivity(),
        u = null == l ? void 0 : l.applicationId,
        _ = null == u ? void 0 : s.getApplication(u);
    if (null != l && null != _ && o)
        return {
            id: l.applicationId,
            altId: void 0,
            name: _.name
        };
    let p = (0, S.QF)(),
        m = r.getGameForPID(p),
        g = i.getActivityForPID(p);
    return (null == m || null == m.id || null == m.name) && (null == g || null == g.application_id)
        ? void 0
        : {
              id: null !== (e = null == m ? void 0 : m.id) && void 0 !== e ? e : null == g ? void 0 : g.application_id,
              altId: null == g ? void 0 : g.application_id,
              name: null !== (n = null == m ? void 0 : m.name) && void 0 !== n ? n : null == g ? void 0 : g.name
          };
}
function k() {
    let e = (0, c.PR)();
    return (0, s.e7)([h.ZP, T.Z, d.ZP, f.Z], () => M(h.ZP, T.Z, d.ZP, f.Z, e), [e], o.Z);
}
