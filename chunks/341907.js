r.r(n),
    r.d(n, {
        formatVideoProgressRatio: function () {
            return L;
        },
        maybeShowSurveyForQuest: function () {
            return D;
        },
        navigateToQuestHome: function () {
            return O;
        },
        openDisclosureModal: function () {
            return R;
        },
        openQuestInGameRewardModal: function () {
            return C;
        },
        openQuestsNitroRewardModal: function () {
            return N;
        },
        openQuestsRewardCodeModal: function () {
            return A;
        },
        openVideoQuestModal: function () {
            return x;
        }
    });
var i = r(200651);
r(192379);
var a = r(772848),
    s = r(481060),
    o = r(836768),
    l = r(703656),
    u = r(866960),
    c = r(617136),
    d = r(569984),
    f = r(497505),
    _ = r(918701),
    h = r(184299),
    p = r(862847),
    m = r(5881),
    g = r(842942),
    E = r(61115),
    v = r(150560),
    I = r(46140),
    T = r(981631),
    b = r(49898);
let y = 'in-app',
    S = 'Discord Widget';
function A(e) {
    let { questId: n, location: a, questContentPosition: o, preview: l = !1, previewQuest: u = null } = e;
    (0, s.openModalLazy)(async () => {
        let { default: e } = await Promise.all([r.e('99393'), r.e('48923'), r.e('28044'), r.e('57383')]).then(r.bind(r, 985866));
        return (r) =>
            (0, i.jsx)(e, {
                ...r,
                questId: n,
                questContentPosition: o,
                location: a,
                preview: l,
                previewQuest: u
            });
    });
}
function N(e, n) {
    (0, s.openModalLazy)(async () => {
        let { default: a } = await Promise.all([r.e('8016'), r.e('36909')]).then(r.bind(r, 824393));
        return (r) =>
            (0, i.jsx)(a, {
                ...r,
                quest: e,
                location: n
            });
    });
}
function C(e, n) {
    (0, s.openModalLazy)(async () => {
        let { default: a } = await r.e('88938').then(r.bind(r, 390238));
        return (r) =>
            (0, i.jsx)(a, {
                ...r,
                quest: e,
                location: n
            });
    });
}
function R(e, n) {
    (0, c._3)({
        questId: e.id,
        questContent: n.content,
        questContentPosition: n.position,
        questContentCTA: n.ctaContent,
        impressionId: n.impressionId
    }),
        (0, s.openModalLazy)(async () => {
            let { default: a } = await r.e('4266').then(r.bind(r, 316210));
            return (r) =>
                (0, i.jsx)(a, {
                    ...r,
                    questContent: n.content,
                    quest: e
                });
        });
}
function O(e, n, r) {
    let i = v.Z.getState().setUtmCurrentContext;
    i({
        utmSourceCurrent: S,
        utmMediumCurrent: y,
        utmCampaignCurrent: r,
        utmContentCurrent: Object.keys(f.jn).find((e) => f.jn[e] === n)
    });
    let a = null != r ? '#'.concat(r) : '';
    o.Z.setState({ selectedTab: b.GlobalDiscoveryTab.QUESTS }), (0, l.uL)(T.Z5c.QUEST_HOME + a);
}
function D(e) {
    let n = (0, m.T)({ quest: e }),
        r = { location: I.dr.QUESTS_BAR };
    if (!(0, p.j)(r)) return;
    let i = (0, _.il)(e),
        a = (0, g.Z)({ entityName: e.config.messages.gameTitle }),
        s = () => a.experiment.getCurrentConfig(r).enabled;
    if (a.taskType === i.taskType && !!s())
        n.log('Showing survey '.concat(a.id)),
            (0, E.openQuestSurveyModal)({
                questId: e.id,
                survey: a
            });
}
function L(e, n) {
    return e <= 0 || n <= 0 ? 0 : e >= n ? 1 : Math.min(1, Math.round((e / n) * 100) / 100);
}
function x(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        o = (0, a.Z)();
    (0, s.openModalLazy)(
        async () => {
            let { default: a } = await Promise.all([r.e('32249'), r.e('72123')]).then(r.bind(r, 536687));
            return (r) =>
                (0, i.jsx)(a, {
                    ...r,
                    questId: e.id,
                    autoplay: n,
                    videoSessionId: o
                });
        },
        {
            modalKey: (0, _.u7)(e.id),
            backdropStyle: s.BackdropStyles.IMMERSIVE,
            onCloseCallback: () => {
                var n, r;
                let i = h.ZP.getState().getVideoProgress(e.id);
                if (null == i) return;
                let a = d.Z.getQuest(e.id);
                null != a && (null === (n = a.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null === (r = a.userStatus) || void 0 === r ? void 0 : r.completedAt) == null && (0, _.FI)(a, i.maxTimestampSec);
                let s = L(i.maxTimestampSec, i.duration);
                (0, c.dA)({
                    questId: e.id,
                    event: T.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: s,
                        video_timestamp_seconds: i.maxTimestampSec,
                        video_session_id: o
                    }
                }),
                    (0, c.dA)({
                        questId: e.id,
                        event: T.rMx.QUEST_VIDEO_MODAL_CLOSED,
                        properties: {
                            video_progress: s,
                            video_session_id: o,
                            network_connection_speed: u.Z.getEffectiveConnectionSpeed()
                        }
                    });
            }
        }
    );
}
