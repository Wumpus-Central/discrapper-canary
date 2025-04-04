n.d(t, { Z: () => p }), n(47120);
var r = n(654861),
    i = n.n(r),
    o = n(108131),
    a = n.n(o),
    s = n(943881),
    l = n(650774),
    c = n(430824),
    u = n(70956),
    d = n(709054);
function f(e, t, n) {
    let r = i()(e),
        o = null != t ? i()(t) : null,
        a = null != n ? i()(n) : null;
    return !((null != o && r.lesser(o)) || (null != a && r.greater(a)));
}
function _(e) {
    let t, n;
    for (let [r, i] of e)
        switch (r) {
            case a().v3('min_id'):
                t = i;
                break;
            case a().v3('max_id'):
                n = i;
        }
    return {
        min: t,
        max: n
    };
}
let p = {
    [a().v3('guild_ids')]: (e) => {
        let t = [];
        for (let [n, r] of e) n === a().v3('guild_ids') && (t = r);
        return (e) => t.includes(e);
    },
    [a().v3('guild_id_range')]: (e) => {
        let { min: t, max: n } = _(e);
        return (e) => f(e, t, n);
    },
    [a().v3('guild_age_range_days')]: (e) => {
        let { min: t, max: n } = _(e);
        return (e) => f(Math.floor(d.default.age(e) / u.Z.Millis.DAY), t, n);
    },
    [a().v3('guild_member_count_range')]: (e) => {
        let { min: t, max: n } = _(e);
        return (e) => {
            let r = l.Z.getMemberCount(e);
            return null != r && f(r, t, n);
        };
    },
    [a().v3('guild_has_feature')]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let r = null != (n = c.Z.getGuild(e)) ? n : s.Z.getGuild(e);
            return null != r && t.some((e) => r.hasFeature(e));
        };
    },
    [a().v3('guild_hub_types')]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let r = null != (n = c.Z.getGuild(e)) ? n : s.Z.getGuild(e);
            return null != r && 'number' == typeof r.hubType && t.some((e) => r.hubType === e);
        };
    },
    [a().v3('guild_has_vanity_url')]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let r = null != (n = c.Z.getGuild(e)) ? n : s.Z.getGuild(e);
            return null != r && t === (null != r.vanityURLCode);
        };
    },
    [a().v3('guild_in_range_by_hash')]: (e) => {
        let t, n;
        for (let [i, o] of e)
            switch (i) {
                case a().v3('hash_key'):
                    t = o;
                    break;
                case a().v3('target'):
                    var r;
                    n = null != (r = parseInt(o)) ? r : 0;
            }
        return (e) => {
            let r = a().v3(''.concat(t, ':').concat(e));
            return (r > 0 ? r + r : r >>> 0) % 10000 < n;
        };
    }
};
