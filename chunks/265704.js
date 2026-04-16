"use strict";
let r, i;
var s = n(311907),
    a = n(73153);
function o() {
    (r = !1), (i = []);
}
function l() {
    o();
}
function u() {
    r = !0;
}
function c(e) {
    let { bounties: t } = e;
    (r = !1), (i = t);
}
function d() {
    (r = !1), (i = []);
}
o();
class _ extends s.Ay.Store {
    static displayName = "BountyStore";
    get isFetchingQuestHomeBounties() {
        return r;
    }
    get questHomeBounties() {
        return i;
    }
}
new _(a.h, {
    LOGOUT: l,
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN: u,
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS: c,
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE: d,
});
