n.d(t, { r: () => d }), n(415506), n(388685);
var r = n(754700),
    i = n(319245),
    a = n(509212),
    o = n(502288);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class d {
    static build(e) {
        if (2 !== e.configVersion) throw Error("Cannot build SharedQuestFields when [configVersion !== 2]");
        return new d(e);
    }
    get features() {
        return new Set(this.quest.features);
    }
    _defaultRewardV2(e) {
        return e.rewardsConfig.rewards[0];
    }
    get defaultReward() {
        return this._defaultRewardV2(this.quest);
    }
    get defaultRewardNameWithArticle() {
        return (0, a.Bg)(this.quest) ? (0, o.o8)(this.quest) : this.defaultReward.messages.nameWithArticle;
    }
    get defaultRewardName() {
        return (0, a.Bg)(this.quest) ? (0, o.o8)(this.quest) : this.defaultReward.messages.name;
    }
    get defaultRewardRedemptionInstructionsByPlatform() {
        return this._defaultRewardV2(this.quest).messages.redemptionInstructionsByPlatform;
    }
    get rewardsExpireAt() {
        return this.quest.rewardsConfig.rewardsExpireAt;
    }
    get application() {
        return u(l({}, this.quest.application), { ids: [this.quest.application.id] });
    }
    get ctaLink() {
        var e, t;
        return null != (t = null == (e = this.quest.ctaConfig) ? void 0 : e.link) ? t : this.application.link;
    }
    get rewardPlatforms() {
        return this.quest.rewardsConfig.platforms;
    }
    get questType() {
        return (0, a.q8)({ config: this.quest }) ? i.W.VIDEO : i.W.GAMEPLAY;
    }
    get defaultInGameTask() {
        var e;
        let t = this.quest.taskConfigV2.tasks,
            n = t[r.X.ACHIEVEMENT_IN_ACTIVITY],
            i = t[r.X.ACHIEVEMENT_IN_GAME];
        return null != (e = null != n ? n : i) ? e : null;
    }
    get defaultWatchVideoTask() {
        var e;
        let t = this.quest.taskConfigV2.tasks[r.X.WATCH_VIDEO],
            n = this.quest.taskConfigV2.tasks[r.X.WATCH_VIDEO_ON_MOBILE];
        return null != t && null != n ? t : null != (e = null != n ? n : t) ? e : null;
    }
    constructor(e) {
        s(this, "quest", void 0), (this.quest = e);
    }
}
