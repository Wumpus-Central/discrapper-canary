r.r(n),
    r.d(n, {
        formatVideoProgressRatio: function () {
            return k;
        },
        maybeShowSurveyForQuest: function () {
            return M;
        },
        navigateToQuestHome: function () {
            return P;
        },
        openAppWithQuest: function () {
            return G;
        },
        openDisclosureModal: function () {
            return w;
        },
        openQuestInGameRewardModal: function () {
            return x;
        },
        openQuestsNitroRewardModal: function () {
            return L;
        },
        openQuestsRewardCodeModal: function () {
            return D;
        },
        openVideoQuestModal: function () {
            return U;
        }
    });
var i = r(200651);
r(192379);
var a = r(772848),
    s = r(271579),
    o = r(756647),
    l = r(481060),
    u = r(836768),
    c = r(703656),
    d = r(314897),
    f = r(866960),
    _ = r(626135),
    h = r(954824),
    p = r(617136),
    m = r(569984),
    g = r(497505),
    E = r(918701),
    v = r(184299),
    I = r(862847),
    T = r(5881),
    b = r(842942),
    y = r(61115),
    S = r(150560),
    A = r(46140),
    N = r(981631),
    C = r(49898);
let R = 'in-app',
    O = 'Discord Widget';
function D(e) {
    let { questId: n, location: a, questContentPosition: s, preview: o = !1, previewQuest: u = null } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([r.e('99393'), r.e('48923'), r.e('28044'), r.e('57383')]).then(r.bind(r, 985866));
        return (r) =>
            (0, i.jsx)(e, {
                ...r,
                questId: n,
                questContentPosition: s,
                location: a,
                preview: o,
                previewQuest: u
            });
    });
}
function L(e, n) {
    (0, l.openModalLazy)(async () => {
        let { default: a } = await Promise.all([r.e('8016'), r.e('36909')]).then(r.bind(r, 824393));
        return (r) =>
            (0, i.jsx)(a, {
                ...r,
                quest: e,
                location: n
            });
    });
}
function x(e, n) {
    (0, l.openModalLazy)(async () => {
        let { default: a } = await r.e('88938').then(r.bind(r, 390238));
        return (r) =>
            (0, i.jsx)(a, {
                ...r,
                quest: e,
                location: n
            });
    });
}
function w(e, n) {
    (0, p._3)({
        questId: e.id,
        questContent: n.content,
        questContentPosition: n.position,
        questContentCTA: n.ctaContent,
        impressionId: n.impressionId
    }),
        (0, l.openModalLazy)(async () => {
            let { default: a } = await r.e('4266').then(r.bind(r, 316210));
            return (r) =>
                (0, i.jsx)(a, {
                    ...r,
                    questContent: n.content,
                    quest: e
                });
        });
}
function P(e, n, r) {
    let i = S.Z.getState().setUtmCurrentContext;
    i({
        utmSourceCurrent: O,
        utmMediumCurrent: R,
        utmCampaignCurrent: r,
        utmContentCurrent: Object.keys(g.jn).find((e) => g.jn[e] === n)
    });
    let a = null != r ? '#'.concat(r) : '';
    u.Z.setState({ selectedTab: C.GlobalDiscoveryTab.QUESTS }), (0, c.uL)(N.Z5c.QUEST_HOME + a);
}
function M(e) {
    let n = (0, T.T)({ quest: e }),
        r = { location: A.dr.QUESTS_BAR };
    if (!(0, I.j)(r)) return;
    let i = (0, E.il)(e),
        a = (0, b.Z)({ entityName: e.config.messages.gameTitle }),
        s = () => a.experiment.getCurrentConfig(r).enabled;
    if (a.taskType === i.taskType && !!s())
        n.log('Showing survey '.concat(a.id)),
            (0, y.openQuestSurveyModal)({
                questId: e.id,
                survey: a
            });
}
function k(e, n) {
    return e <= 0 || n <= 0 ? 0 : e >= n ? 1 : Math.min(1, Math.round((e / n) * 100) / 100);
}
function U(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = (0, a.Z)();
    (0, l.openModalLazy)(
        async () => {
            let { default: a } = await Promise.all([r.e('32249'), r.e('72123')]).then(r.bind(r, 536687));
            return (r) =>
                (0, i.jsx)(a, {
                    ...r,
                    questId: e.id,
                    autoplay: n,
                    videoSessionId: s
                });
        },
        {
            modalKey: (0, E.u7)(e.id),
            backdropStyle: l.BackdropStyles.IMMERSIVE,
            onCloseCallback: () => {
                var n, r;
                let i = v.ZP.getState().getVideoProgress(e.id);
                if (null == i) return;
                let a = m.Z.getQuest(e.id);
                null != a && (null === (n = a.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null === (r = a.userStatus) || void 0 === r ? void 0 : r.completedAt) == null && (0, E.FI)(a, i.maxTimestampSec);
                let o = k(i.maxTimestampSec, i.duration);
                (0, p.dA)({
                    questId: e.id,
                    event: N.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: o,
                        video_timestamp_seconds: i.maxTimestampSec,
                        video_session_id: s
                    }
                }),
                    (0, p.dA)({
                        questId: e.id,
                        event: N.rMx.QUEST_VIDEO_MODAL_CLOSED,
                        properties: {
                            video_progress: o,
                            video_session_id: s,
                            network_connection_speed: f.Z.getEffectiveConnectionSpeed()
                        }
                    });
            }
        }
    );
}
function B(e) {
    var n;
    let r = null === (n = platform.os) || void 0 === n ? void 0 : n.family,
        i = 'quest';
    if ('Android' === r || 'iOS' === r) {
        let n = d.default.getFingerprint(),
            r = (0, s.WS)(),
            a = ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, '/quests/').concat(e);
        return (0, s.ZP)(a, {
            utmSource: i,
            fingerprint: n,
            attemptId: r
        });
    }
    return 'discord://';
}
function G(e) {
    let n = B(e),
        r = (0, s.zS)(n);
    null != r &&
        _.default.track(N.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(r.fingerprint),
            attempt_id: r.attemptId,
            source: r.utmSource
        }),
        h.Z.launch(n, (n) => {
            !n &&
                (0, c.dL)({
                    pathname: N.Z5c.QUEST_HOME,
                    hash: e
                });
        });
}
