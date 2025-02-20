n.d(t, {
    Q: () => i,
    i: () => o
});
var r = n(854218),
    i = (function (e) {
        return (e[(e.PARTNERED = 0)] = 'PARTNERED'), (e[(e.VERIFIED = 1)] = 'VERIFIED'), (e[(e.VERIFIED_AND_PARTNERED = 2)] = 'VERIFIED_AND_PARTNERED'), (e[(e.COMMUNITY = 3)] = 'COMMUNITY'), (e[(e.DISCOVERABLE = 4)] = 'DISCOVERABLE'), (e[(e.STAFF = 5)] = 'STAFF'), (e[(e.CLAN = 6)] = 'CLAN'), (e[(e.NONE = 7)] = 'NONE'), e;
    })({});
function o(e) {
    return e.staff ? 5 : e.verified && e.partnered ? 2 : e.verified ? 1 : e.partnered ? 0 : e.community && e.visibility === r.PZ.PUBLIC ? 4 : e.clan ? 6 : e.community ? 3 : 7;
}
