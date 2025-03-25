n.d(t, { r: () => u }), n(411104), n(47120);
var r = n(742635),
    i = n(319245),
    o = n(918701);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class u {
    static build(e) {
        if (2 !== e.configVersion) throw Error('Cannot build SharedQuestFields when [configVersion !== 2]');
        return new u(e);
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
    get defaultRewardRedemptionInstructionsByPlatform() {
        return this._defaultRewardV2(this.quest).messages.redemptionInstructionsByPlatform;
    }
    get rewardsExpireAt() {
        return this.quest.rewardsConfig.rewardsExpireAt;
    }
    get application() {
        return c(s({}, this.quest.application), { ids: [this.quest.application.id] });
    }
    get rewardPlatforms() {
        return this.quest.rewardsConfig.platforms;
    }
    get questType() {
        return (0, o.q8)({ config: this.quest }) ? i.W.VIDEO : i.W.GAMEPLAY;
    }
    get defaultInGameTask() {
        return this.quest.taskConfig.type !== r.L.THIRD_PARTY || 0 === Object.keys(this.quest.taskConfig.tasks).length ? null : Object.values(this.quest.taskConfig.tasks)[0];
    }
    constructor(e) {
        a(this, 'quest', void 0), (this.quest = e);
    }
}
