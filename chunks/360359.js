n.d(t, { Z: () => p }), n(47120);
var i = n(654861),
    r = n.n(i),
    a = n(108131),
    s = n.n(a),
    o = n(943881),
    l = n(650774),
    u = n(430824),
    c = n(70956),
    d = n(709054);
function f(e, t, n) {
    let i = r()(e),
        a = null != t ? r()(t) : null,
        s = null != n ? r()(n) : null;
    return !((null != a && i.lesser(a)) || (null != s && i.greater(s)));
}
function _(e) {
    let t, n;
    for (let [i, r] of e)
        switch (i) {
            case s().v3('min_id'):
                t = r;
                break;
            case s().v3('max_id'):
                n = r;
        }
    return {
        min: t,
        max: n
    };
}
let p = {
    [s().v3('guild_ids')]: (e) => {
        let t = [];
        for (let [n, i] of e) n === s().v3('guild_ids') && (t = i);
        return (e) => t.includes(e);
    },
    [s().v3('guild_id_range')]: (e) => {
        let { min: t, max: n } = _(e);
        return (e) => f(e, t, n);
    },
    [s().v3('guild_age_range_days')]: (e) => {
        let { min: t, max: n } = _(e);
        return (e) => f(Math.floor(d.default.age(e) / c.Z.Millis.DAY), t, n);
    },
    [s().v3('guild_member_count_range')]: (e) => {
        let { min: t, max: n } = _(e);
        return (e) => {
            let i = l.Z.getMemberCount(e);
            return null != i && f(i, t, n);
        };
    },
    [s().v3('guild_has_feature')]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let i = null !== (n = u.Z.getGuild(e)) && void 0 !== n ? n : o.Z.getGuild(e);
            return null != i && t.some((e) => i.hasFeature(e));
        };
    },
    [s().v3('guild_hub_types')]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let i = null !== (n = u.Z.getGuild(e)) && void 0 !== n ? n : o.Z.getGuild(e);
            return null != i && 'number' == typeof i.hubType && t.some((e) => i.hubType === e);
        };
    },
    [s().v3('guild_has_vanity_url')]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let i = null !== (n = u.Z.getGuild(e)) && void 0 !== n ? n : o.Z.getGuild(e);
            return null != i && t === (null != i.vanityURLCode);
        };
    },
    [s().v3('guild_in_range_by_hash')]: (e) => {
        let t, n;
        for (let [r, a] of e)
            switch (r) {
                case s().v3('hash_key'):
                    t = a;
                    break;
                case s().v3('target'):
                    var i;
                    n = null !== (i = parseInt(a)) && void 0 !== i ? i : 0;
            }
        return (e) => {
            let i = s().v3(''.concat(t, ':').concat(e));
            return (i > 0 ? i + i : i >>> 0) % 10000 < n;
        };
    }
};
