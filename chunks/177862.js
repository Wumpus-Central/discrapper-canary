n.d(t, {
    $l: () => o,
    C2: () => s,
    J$: () => a,
    wR: () => i,
    x2: () => r
}),
    n(388032);
var r = (function (e) {
        return (e.BUG = 'BUG'), (e.ALLOWED = 'ALLOWED'), (e.MENTION_RAID_REMOVE_RESTRICTION = 'MENTION_RAID_REMOVE_RESTRICTION'), e;
    })({}),
    i = (function (e) {
        return (e.JOIN_RAID = 'JOIN_RAID'), (e.MENTION_RAID = 'MENTION_RAID'), e;
    })({}),
    o = (function (e) {
        return (e.LEGITIMATE_ACTIVITY = 'LEGITIMATE_ACTIVITY'), (e.LEGITIMATE_ACCOUNTS = 'LEGITIMATE_ACCOUNTS'), (e.LEGITIMATE_DMS = 'LEGITIMATE_DMS'), (e.DM_SPAM = 'DM_SPAM'), (e.JOIN_RAID = 'JOIN_RAID'), (e.OTHER = 'OTHER'), e;
    })({});
function a(e) {
    return e.includes('LEGITIMATE_ACTIVITY') ? 'LEGITIMATE_ACTIVITY' : e.includes('DM_SPAM') ? 'DM_SPAM' : e.includes('JOIN_RAID') ? 'JOIN_RAID' : 'OTHER';
}
var s = (function (e) {
    return (e.DM_SPAM = 'DM_SPAM'), (e.MENTION_SPAM = 'MENTION_SPAM'), (e.CHANNEL_SPAM = 'CHANNEL_SPAM'), (e.SUS_NEW_MEMBERS = 'SUS_NEW_MEMBERS'), (e.CHANGING_SETTINGS = 'CHANGING_SETTINGS'), (e.OTHER = 'OTHER'), e;
})({});
