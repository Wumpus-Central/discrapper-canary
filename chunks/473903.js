"use strict";
n.d(t, { A: () => a });
var r = n(77729);
let i = new (n(626584).A)("IntentsBindings");
function s() {
    return r.A?.features.supports("intents") ?? !1;
}
let a = {
    hasSearch: () => s(),
    hasUserActivity: () => s(),
    clearSearchIndex() {
        try {
            r.A?.ipc.invoke("DISCORD_SEARCH_CLEAR_INDEX");
        } catch (e) {
            i.warn(`clearSearchIndex: ${e}`);
        }
    },
    deleteSearchDomains(e) {
        try {
            r.A?.ipc.invoke("DISCORD_SEARCH_DELETE_DOMAINS", e);
        } catch (e) {
            i.warn(`deleteSearchDomains: ${e}`);
        }
    },
    deleteSearchItems(e) {
        try {
            r.A?.ipc.invoke("DISCORD_SEARCH_DELETE_ITEMS", e);
        } catch (e) {
            i.warn(`deleteSearchItems: ${e}`);
        }
    },
    indexDomains(e) {
        try {
            r.A?.ipc.invoke("DISCORD_SEARCH_INDEX_DOMAINS", e);
        } catch (e) {
            i.warn(`indexDomains: ${e}`);
        }
    },
    resignActivity() {
        try {
            r.A?.ipc.invoke("DISCORD_INTENTS_RESIGN_ACTIVITY");
        } catch (e) {
            i.warn(`resignActivity: ${e}`);
        }
    },
    setActivity(e) {
        try {
            r.A?.ipc.invoke("DISCORD_INTENTS_SET_ACTIVITY", e);
        } catch (e) {
            i.warn(`setActivity: ${e}`);
        }
    },
};
