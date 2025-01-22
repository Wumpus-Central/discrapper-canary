r.d(n, {
    aZ: function () {
        return i;
    },
    b5: function () {
        return l;
    },
    iF: function () {
        return s;
    },
    nw: function () {
        return a;
    }
});
var i,
    a,
    o = r(724458);
!(function (e) {
    (e.BAD = 'bad'), (e.NEUTRAL = 'neutral'), (e.GOOD = 'good');
})(i || (i = {}));
let s = 1024;
!(function (e) {
    (e.VOICE = 'VOICE'), (e.STREAM = 'STREAM'), (e.VIDEO_BACKGROUND = 'VOICE_BACKGROUND'), (e.ACTIVITY = 'ACTIVITY'), (e.IN_APP_REPORTS = 'IN_APP_REPORTS'), (e.USER_DM_MUTE = 'USER_DM_MUTE'), (e.BLOCK_USER = 'BLOCK_USER');
})(a || (a = {}));
let l = ['VOICE_BACKGROUND', 'STREAM', 'ACTIVITY', 'VOICE', 'IN_APP_REPORTS', 'USER_DM_MUTE', 'BLOCK_USER'].reduce(
    (e, n, r) => ({
        ...e,
        [n]: r
    }),
    {}
);
