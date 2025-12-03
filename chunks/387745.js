n.d(t, {
    B3: () => g,
    C9: () => O,
    Gd: () => E,
    V$: () => T,
    _j: () => b,
    fY: () => y,
    gI: () => A,
    nc: () => S,
    yH: () => h,
}),
    n(539854),
    n(388685),
    n(784620),
    n(973216);
var r = n(754700),
    i = n(570140),
    a = n(782568),
    o = n(231757),
    s = n(313789),
    l = n(585483),
    c = n(358085),
    u = n(617136),
    d = n(304696),
    f = n(254579),
    p = n(324805),
    _ = n(981631),
    m = n(388032);
function h(e) {
    let t = (0, f.Nj)({ quest: e }) || (0, f.Dr)({ quest: e }),
        n = (0, f.Pz)(e),
        r = [];
    return t && r.push(p.cd.DESKTOP), n && r.push(p.cd.CONSOLE), r;
}
function g(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case r.X.PLAY_ON_XBOX:
                n.push(_.ABu.XBOX);
                break;
            case r.X.PLAY_ON_PLAYSTATION:
                n.push(_.ABu.PLAYSTATION);
        }
    return n;
}
function E(e) {
    let t = (0, f.q8)(e),
        n = (0, f.pO)(e);
    return t || n;
}
function b(e) {
    return "xbox" === e.connected_account_type ? _.ABu.XBOX : _.ABu.PLAYSTATION;
}
function y(e, t) {
    let { platformType: n, quest: r } = e;
    (0, u._3)({
        questId: r.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
    }),
        (0, o.Z)({
            platformType: n,
            location: t.ctaContent,
        });
}
function O(e) {
    return b(e) === _.ABu.XBOX ? m.t["mytEv+"] : m.t.iDiwby;
}
function v(e) {
    var t, n;
    let r = e.config.ctaConfig;
    return null == r
        ? null
        : ((0, c.isIOS)() || "ios" === (0, c.getOS)()) && (null == (t = r.ios) ? void 0 : t.iosAppId) != null
          ? "https://apps.apple.com/app/id".concat(r.ios.iosAppId)
          : ((0, c.isAndroid)() || "android" === (0, c.getOS)()) &&
              (null == (n = r.android) ? void 0 : n.androidAppId) != null
            ? "https://play.google.com/store/apps/details?id=".concat(r.android.androidAppId)
            : null;
}
function S(e, t) {
    let n = (0, d.zo)(e.config),
        r = v(e);
    null != r && (n = r),
        (0, u._3)({
            questId: e.id,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
        }),
        l.S.dispatch(_.CkL.QUEST_GAME_LINK_OPENED),
        (0, a.Z)(n);
}
function I() {
    {
        let { openUserSettings: e } = n(518596);
        e(s.n.CONNECTIONS_PANEL, { section: _.oAB.CONNECTIONS });
    }
}
function T(e, t) {
    let { quest: n } = e;
    (0, u._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        I();
}
function A(e, t) {
    let { quest: n } = e;
    (0, u._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    });
    let r = g(n);
    if (1 === r.length) return (0, o.Z)({ platformType: r.at(0) });
    i.Z.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, o.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r),
    });
}
