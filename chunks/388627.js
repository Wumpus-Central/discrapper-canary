r.d(n, {
    E6: function () {
        return A;
    },
    HP: function () {
        return S;
    },
    II: function () {
        return N;
    },
    fK: function () {
        return b;
    },
    pL: function () {
        return C;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var o = r(442837),
    s = r(902704),
    l = r(765250),
    u = r(615287),
    c = r(214629),
    d = r(317381),
    f = r(812206);
r(358221);
var p = r(594190);
r(569545), r(522474);
var h = r(788983);
r(199902), r(314897);
var _ = r(355863),
    m = r(293273);
r(944486), r(808506);
var g = r(145597),
    E = r(32300),
    v = r(371651);
r(340101);
var y = r(501787);
async function b() {
    let e = { outOfProcessOverlay: !0 },
        n = (0, E.Rb)('openOverlayPopout'),
        i = v.Z.getForcedRenderMode(),
        o = (0, E.b4)('openOverlayPopout');
    if (!(n || o) && i === u.R5.UNSET) return;
    let s = (e) => null;
    if (o || i === u.R5.OUT_OF_PROCESS_V2) {
        let { default: e } = await Promise.all([r.e('50506'), r.e('96211'), r.e('48835'), r.e('99152'), r.e('35535'), r.e('51269'), r.e('22878'), r.e('90508'), r.e('13351'), r.e('66711'), r.e('21628'), r.e('6380'), r.e('46097'), r.e('8739'), r.e('58059'), r.e('86282'), r.e('18543'), r.e('18895'), r.e('19652'), r.e('99393'), r.e('99008'), r.e('95393'), r.e('80284'), r.e('81463'), r.e('65889'), r.e('31135'), r.e('69174'), r.e('82544'), r.e('33862'), r.e('38902'), r.e('7590'), r.e('70205'), r.e('78447'), r.e('86778'), r.e('93375'), r.e('64679'), r.e('69057'), r.e('77564'), r.e('12205'), r.e('92421'), r.e('90225'), r.e('84804'), r.e('37220'), r.e('61447'), r.e('82158'), r.e('91315'), r.e('64222'), r.e('92982'), r.e('84656'), r.e('19582'), r.e('21429'), r.e('89406')]).then(r.bind(r, 969383));
        (s = (n) =>
            (0, a.jsx)(e, {
                withTitleBar: !1,
                windowKey: n
            })),
            (0, l.te)(g.qU, _.Z.getDefaultLayout(g.qU, 0), 0);
    } else {
        if (!n && i !== u.R5.OUT_OF_PROCESS_V3) return;
        let { default: e } = await Promise.all([r.e('50506'), r.e('35535'), r.e('90508'), r.e('13351'), r.e('93382'), r.e('70205'), r.e('78447'), r.e('86778'), r.e('92421'), r.e('92982'), r.e('19582'), r.e('92922'), r.e('90296'), r.e('97315')]).then(r.bind(r, 989373));
        (s = (n) =>
            (0, a.jsx)(e, {
                withTitleBar: !1,
                windowKey: n
            })),
            (0, l.te)(y.OVERLAY_V3_LAYOUT_ID, _.Z.getDefaultLayout(y.OVERLAY_V3_LAYOUT_ID, 1), 1);
    }
    await h.bA(y.OVERLAY_V3_KEY, s, e);
}
function I() {
    let [e = PopoutWindowStore] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [PopoutWindowStore];
    return e.getWindowVisible(OVERLAY_V3_KEY);
}
function T() {
    let [e = PopoutWindowStore, n = SelectedChannelStore, r = ApplicationStreamingStore, i = ChannelRTCStore, a = AuthenticationStore, o = LayoutStore, s = OverlayBridgeStore] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [PopoutWindowStore, SelectedChannelStore, ApplicationStreamingStore, ChannelRTCStore, AuthenticationStore, LayoutStore, OverlayBridgeStore];
    if (!I([e]) || !(null != s.getFocusedPID())) return !1;
    let l = n.getVoiceChannelId();
    if (null == l) return !1;
    let u = o.getWidgetsForLayout(OVERLAY_V3_LAYOUT_ID).find((e) => isGoLiveWidget(e));
    if (null == u || !u.pinned) return !1;
    let c = a.getId(),
        d = new Set(r.getAllActiveStreamsForChannel(l).map((e) => encodeStreamKey(e)));
    return i.getStreamParticipants(l).filter((e) => e.user.id !== c && d.has(encodeStreamKey(e.stream))).length > 0;
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
function C() {
    var e, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.ZP,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Z,
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.ZP,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.Z,
        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, c.e1)(),
        l = a.getCurrentEmbeddedActivity(),
        u = null == l ? void 0 : l.applicationId,
        h = null == u ? void 0 : o.getApplication(u);
    if (null != l && null != h && s)
        return {
            id: l.applicationId,
            altId: void 0,
            name: h.name
        };
    let _ = (0, g.QF)(),
        E = r.getGameForPID(_),
        v = i.getActivityForPID(_);
    return (null == E || null == E.id || null == E.name) && (null == v || null == v.application_id)
        ? void 0
        : {
              id: null !== (e = null == E ? void 0 : E.id) && void 0 !== e ? e : null == v ? void 0 : v.application_id,
              altId: null == v ? void 0 : v.application_id,
              name: null !== (n = null == E ? void 0 : E.name) && void 0 !== n ? n : null == v ? void 0 : v.name
          };
}
function N() {
    let e = (0, c.PR)();
    return (0, o.e7)([p.ZP, m.Z, d.ZP, f.Z], () => C(p.ZP, m.Z, d.ZP, f.Z, e), [e], s.Z);
}
