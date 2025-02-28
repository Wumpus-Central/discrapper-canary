n.d(t, { r: () => c }), n(411104), n(47120);
var r = n(319245),
    i = n(918701);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class c {
    static build(e) {
        if (2 !== e.configVersion) throw Error('Cannot build SharedQuestFields when [configVersion !== 2]');
        return new c(e);
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
        return l(a({}, this.quest.application), { ids: [this.quest.application.id] });
    }
    get rewardPlatforms() {
        return this.quest.rewardsConfig.platforms;
    }
    get questType() {
        return (0, i.q8)({ config: this.quest }) ? r.W.VIDEO : r.W.GAMEPLAY;
    }
    constructor(e) {
        o(this, 'quest', void 0), (this.quest = e);
    }
}
