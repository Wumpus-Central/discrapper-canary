n.d(t, { Z: () => o });
var r = n(579806);
let i = new (n(710845).Z)('IntentsBindings');
function a() {
    var e;
    return null != (e = null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('intents')) && e;
}
let o = {
    hasSearch: () => a(),
    hasUserActivity: () => a(),
    clearSearchIndex() {
        try {
            null === r.Z || void 0 === r.Z || r.Z.ipc.invoke('DISCORD_SEARCH_CLEAR_INDEX');
        } catch (e) {
            i.warn('clearSearchIndex: '.concat(e));
        }
    },
    deleteSearchDomains(e) {
        try {
            null === r.Z || void 0 === r.Z || r.Z.ipc.invoke('DISCORD_SEARCH_DELETE_DOMAINS', e);
        } catch (e) {
            i.warn('deleteSearchDomains: '.concat(e));
        }
    },
    deleteSearchItems(e) {
        try {
            null === r.Z || void 0 === r.Z || r.Z.ipc.invoke('DISCORD_SEARCH_DELETE_ITEMS', e);
        } catch (e) {
            i.warn('deleteSearchItems: '.concat(e));
        }
    },
    indexDomains(e) {
        try {
            null === r.Z || void 0 === r.Z || r.Z.ipc.invoke('DISCORD_SEARCH_INDEX_DOMAINS', e);
        } catch (e) {
            i.warn('indexDomains: '.concat(e));
        }
    },
    resignActivity() {
        try {
            null === r.Z || void 0 === r.Z || r.Z.ipc.invoke('DISCORD_INTENTS_RESIGN_ACTIVITY');
        } catch (e) {
            i.warn('resignActivity: '.concat(e));
        }
    },
    setActivity(e) {
        try {
            null === r.Z || void 0 === r.Z || r.Z.ipc.invoke('DISCORD_INTENTS_SET_ACTIVITY', e);
        } catch (e) {
            i.warn('setActivity: '.concat(e));
        }
    }
};
