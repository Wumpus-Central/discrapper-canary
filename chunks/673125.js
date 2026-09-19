a.d(t, { Ay: () => E, EB: () => m, Y0: () => d });
var n,
    l,
    s = a(17928),
    i = a(228366),
    r = a(124861),
    c = a(12510);
function o(e) {
    return {
        achievementIdentifier: e.achievement_identifier,
        title: e.title,
        orbRewardAmount: e.reward_amount,
        achievementStatus: e.status,
    };
}
let h = new Set([null, r.x.NONE, r.x.IN_PROGRESS, r.x.ELIGIBLE, r.x.COMPLETED]);
function u() {
    return {
        challenges: [],
        isFetchingChallenges: !1,
        hasFetchedChallenges: !1,
        fetchChallengesError: null,
        isClaimingChallengeMap: {},
        claimChallengeErrorMap: {},
        orbRewardMultiplier: null,
        nitroGatedOrbMultiplier: null,
        achievementUnreadState: null,
    };
}
var d =
        588245 != a.j
            ? (((n = {}).NEW_ACHIEVEMENT = "new_achievement"), (n.UNCLAIMED_ACHIEVEMENT = "unclaimed_achievement"), n)
            : null,
    m = (((l = {}).CLAIM_CHALLENGE = "claim_challenge"), (l.FETCH_CHALLENGES = "fetch_challenges"), l);
class _ extends s.Ay.Store {
    static displayName = "OrbChallengesStore";
    state = u();
    constructor() {
        super(i.h, {
            ORB_CHALLENGES_LIST_FETCH: (e) => this.handleOrbChallengesFetchStart(e),
            ORB_CHALLENGES_LIST_FETCH_SUCCESS: (e) => this.handleOrbChallengesFetchSuccess(e),
            ORB_CHALLENGES_LIST_FETCH_FAIL: (e) => this.handleOrbChallengesFetchFail(e),
            ORB_CHALLENGES_UNREAD_UPDATE: (e) => this.handleUnreadUpdate(e),
            ORB_CHALLENGES_UNREAD_ACK: () => this.handleUnreadAck(),
            ORB_CHALLENGE_CLAIM: (e) => this.handleOrbChallengeClaim(e),
            ORB_CHALLENGE_CLAIM_SUCCESS: (e) => this.handleOrbChallengeClaimSuccess(e),
            ORB_CHALLENGE_CLAIM_FAIL: (e) => this.handleOrbChallengeClaimFail(e),
            USER_DISCORD_ACHIEVEMENT_STATE_UPDATE: (e) => this.handleUserAchievementStateUpdate(e),
            LOGIN_SUCCESS: () => this.handleReset(),
        });
    }
    handleReset() {
        this.state = u();
    }
    handleOrbChallengesFetchStart(e) {
        let {} = e;
        ((this.state.isFetchingChallenges = !0), (this.state.fetchChallengesError = null));
    }
    setAchievementUnreadState(e) {
        let t = this.state.achievementUnreadState ?? { has_unread_new_achievement: !1, has_unclaimed_achievements: !1 };
        this.state.achievementUnreadState = { ...t, ...e };
    }
    handleOrbChallengesFetchSuccess(e) {
        let { response: t } = e;
        ((this.state.challenges = t.achievements.map(o)),
            (this.state.orbRewardMultiplier = t.orb_multiplier),
            (this.state.nitroGatedOrbMultiplier = t.nitro_gated_orb_multiplier),
            this.setAchievementUnreadState({ has_unclaimed_achievements: t.has_unclaimed_achievements }),
            (this.state.hasFetchedChallenges = !0),
            (this.state.isFetchingChallenges = !1));
    }
    handleUnreadUpdate(e) {
        let { achievementUnreadState: t } = e;
        this.state.achievementUnreadState = t;
    }
    handleUnreadAck() {
        this.setAchievementUnreadState({ has_unread_new_achievement: !1 });
    }
    handleOrbChallengesFetchFail(e) {
        let { error: t } = e;
        ((this.state.fetchChallengesError = t), (this.state.isFetchingChallenges = !1));
    }
    handleOrbChallengeClaim(e) {
        let { achievementIdentifier: t } = e;
        ((this.state.isClaimingChallengeMap[t] = !0), (this.state.claimChallengeErrorMap[t] = null));
    }
    handleOrbChallengeClaimSuccess(e) {
        let { achievementIdentifier: t, response: a } = e;
        ((this.state.isClaimingChallengeMap[t] = !1),
            (this.state.claimChallengeErrorMap[t] = null),
            (this.state.challenges = this.state.challenges.map((e) => (e.achievementIdentifier === t ? o(a) : e))));
    }
    handleOrbChallengeClaimFail(e) {
        let { achievementIdentifier: t, error: a } = e;
        ((this.state.isClaimingChallengeMap[t] = !1), (this.state.claimChallengeErrorMap[t] = a));
    }
    handleUserAchievementStateUpdate(e) {
        let { payload: t } = e;
        return ((0, c.Od)(), "achievement_completed" === t.type)
            ? void this.setAchievementUnreadState({ has_unclaimed_achievements: !0 })
            : (t.type, !1);
    }
    get orbChallengesDisplayError() {
        let { fetchChallengesError: e, claimChallengeErrorMap: t } = this.state,
            a = Object.values(t).find((e) => null != e);
        return null != a
            ? { error: a, errorType: "claim_challenge" }
            : null != e
              ? { error: e, errorType: "fetch_challenges" }
              : null;
    }
    get orbRewardMultiplier() {
        return this.state.orbRewardMultiplier;
    }
    get nitroGatedOrbMultiplier() {
        return this.state.nitroGatedOrbMultiplier;
    }
    get hasUnclaimedAchievements() {
        return this.state.hasFetchedChallenges
            ? this.state.challenges.some((e) => e.achievementStatus === r.x.COMPLETED)
            : null != this.state.achievementUnreadState && this.state.achievementUnreadState.has_unclaimed_achievements;
    }
    get clientUnreadNotificationType() {
        return null === this.state.achievementUnreadState
            ? null
            : this.state.achievementUnreadState.has_unread_new_achievement
              ? "new_achievement"
              : this.hasUnclaimedAchievements
                ? "unclaimed_achievement"
                : null;
    }
    get hasUnreadUpdate() {
        return null != this.clientUnreadNotificationType;
    }
    get challenges() {
        return this.state.challenges;
    }
    get challengesForOrbWallet() {
        return this.state.challenges.filter((e) => h.has(e.achievementStatus));
    }
    get hasFetchedChallenges() {
        return this.state.hasFetchedChallenges;
    }
    get isFetchingChallenges() {
        return this.state.isFetchingChallenges;
    }
    get fetchChallengesError() {
        return this.state.fetchChallengesError;
    }
}
let E = new _();
