var i, a, o, s;
r.d(n, {
    $l: function () {
        return o;
    },
    C2: function () {
        return s;
    },
    J$: function () {
        return l;
    },
    wR: function () {
        return a;
    },
    x2: function () {
        return i;
    }
}),
    r(388032),
    !(function (e) {
        (e.BUG = 'BUG'), (e.ALLOWED = 'ALLOWED'), (e.MENTION_RAID_REMOVE_RESTRICTION = 'MENTION_RAID_REMOVE_RESTRICTION');
    })(i || (i = {}));
function l(e) {
    return e.includes('LEGITIMATE_ACTIVITY') ? 'LEGITIMATE_ACTIVITY' : e.includes('DM_SPAM') ? 'DM_SPAM' : e.includes('JOIN_RAID') ? 'JOIN_RAID' : 'OTHER';
}
!(function (e) {
    (e.JOIN_RAID = 'JOIN_RAID'), (e.MENTION_RAID = 'MENTION_RAID');
})(a || (a = {})),
    !(function (e) {
        (e.LEGITIMATE_ACTIVITY = 'LEGITIMATE_ACTIVITY'), (e.LEGITIMATE_ACCOUNTS = 'LEGITIMATE_ACCOUNTS'), (e.LEGITIMATE_DMS = 'LEGITIMATE_DMS'), (e.DM_SPAM = 'DM_SPAM'), (e.JOIN_RAID = 'JOIN_RAID'), (e.OTHER = 'OTHER');
    })(o || (o = {})),
    !(function (e) {
        (e.DM_SPAM = 'DM_SPAM'), (e.MENTION_SPAM = 'MENTION_SPAM'), (e.CHANNEL_SPAM = 'CHANNEL_SPAM'), (e.SUS_NEW_MEMBERS = 'SUS_NEW_MEMBERS'), (e.CHANGING_SETTINGS = 'CHANGING_SETTINGS'), (e.OTHER = 'OTHER');
    })(s || (s = {}));
