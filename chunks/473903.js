n.d(t, { A: () => s });
var r = n(77729);
let i = new (n(626584).A)("IntentsBindings");
function a() {
    var e;
    return null != (e = null === r.A || void 0 === r.A ? void 0 : r.A.features.supports("intents")) && e;
}
let s = {
    hasSearch: () => a(),
    hasUserActivity: () => a(),
    clearSearchIndex() {
        try {
            null === r.A || void 0 === r.A || r.A.ipc.invoke("DISCORD_SEARCH_CLEAR_INDEX");
        } catch (e) {
            i.warn("clearSearchIndex: ".concat(e));
        }
    },
    deleteSearchDomains(e) {
        try {
            null === r.A || void 0 === r.A || r.A.ipc.invoke("DISCORD_SEARCH_DELETE_DOMAINS", e);
        } catch (e) {
            i.warn("deleteSearchDomains: ".concat(e));
        }
    },
    deleteSearchItems(e) {
        try {
            null === r.A || void 0 === r.A || r.A.ipc.invoke("DISCORD_SEARCH_DELETE_ITEMS", e);
        } catch (e) {
            i.warn("deleteSearchItems: ".concat(e));
        }
    },
    indexDomains(e) {
        try {
            null === r.A || void 0 === r.A || r.A.ipc.invoke("DISCORD_SEARCH_INDEX_DOMAINS", e);
        } catch (e) {
            i.warn("indexDomains: ".concat(e));
        }
    },
    resignActivity() {
        try {
            null === r.A || void 0 === r.A || r.A.ipc.invoke("DISCORD_INTENTS_RESIGN_ACTIVITY");
        } catch (e) {
            i.warn("resignActivity: ".concat(e));
        }
    },
    setActivity(e) {
        try {
            null === r.A || void 0 === r.A || r.A.ipc.invoke("DISCORD_INTENTS_SET_ACTIVITY", e);
        } catch (e) {
            i.warn("setActivity: ".concat(e));
        }
    },
};
