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
    o = r(271579),
    s = r(756647),
    l = r(481060),
    u = r(836768),
    c = r(703656),
    d = r(314897),
    f = r(866960),
    p = r(626135),
    h = r(954824),
    _ = r(617136),
    m = r(569984),
    g = r(497505),
    E = r(918701),
    v = r(184299),
    y = r(862847),
    b = r(5881),
    I = r(492112),
    T = r(61115),
    S = r(150560),
    A = r(46140),
    C = r(981631),
    N = r(49898);
let R = 'in-app',
    O = 'Discord Widget';
function D(e) {
    let { questId: n, location: a, questContentPosition: o, preview: s = !1, previewQuest: u = null } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([r.e('99393'), r.e('48923'), r.e('92059')]).then(r.bind(r, 985866));
        return (r) =>
            (0, i.jsx)(e, {
                ...r,
                questId: n,
                questContentPosition: o,
                location: a,
                preview: s,
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
    (0, _._3)({
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
    u.Z.setState({ selectedTab: N.GlobalDiscoveryTab.QUESTS }), (0, c.uL)(C.Z5c.QUEST_HOME + a);
}
function M(e) {
    let n = (0, b.T)({ quest: e }),
        r = { location: A.dr.QUESTS_BAR };
    if (!(0, y.j)(r)) return;
    let i = (0, I.Z)({ entityName: e.config.messages.gameTitle });
    n.log('Showing survey '.concat(i.id)),
        (0, T.openQuestSurveyModal)({
            questId: e.id,
            survey: i
        });
}
function k(e, n) {
    return e <= 0 || n <= 0 ? 0 : e >= n ? 1 : Math.min(1, Math.round((e / n) * 100) / 100);
}
function U(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        o = (0, a.Z)();
    (0, l.openModalLazy)(
        async () => {
            let { default: a } = await Promise.all([r.e('30816'), r.e('32249'), r.e('94204')]).then(r.bind(r, 536687));
            return (r) =>
                (0, i.jsx)(a, {
                    ...r,
                    questId: e.id,
                    autoplay: n,
                    videoSessionId: o
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
                let s = k(i.maxTimestampSec, i.duration);
                (0, _.dA)({
                    questId: e.id,
                    event: C.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: s,
                        video_timestamp_seconds: i.maxTimestampSec,
                        video_session_id: o
                    }
                }),
                    (0, _.dA)({
                        questId: e.id,
                        event: C.rMx.QUEST_VIDEO_MODAL_CLOSED,
                        properties: {
                            video_progress: s,
                            video_session_id: o,
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
            r = (0, o.WS)(),
            a = ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, '/quests/').concat(e);
        return (0, o.ZP)(a, {
            utmSource: i,
            fingerprint: n,
            attemptId: r
        });
    }
    return 'discord://';
}
function G(e) {
    let n = B(e),
        r = (0, o.zS)(n);
    null != r &&
        p.default.track(C.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.K)(r.fingerprint),
            attempt_id: r.attemptId,
            source: r.utmSource
        }),
        h.Z.launch(n, (n) => {
            !n &&
                (0, c.dL)({
                    pathname: C.Z5c.QUEST_HOME,
                    hash: e
                });
        });
}
