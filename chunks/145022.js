r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(47120);
var a = r(392711),
    o = r.n(a),
    s = r(314897),
    l = r(908442),
    u = r(981631),
    c = r(388032);
function d(e, n, r) {
    if (null == e || null == n)
        return {
            valid: !1,
            reason: c.intl.string(c.t.d34xi4)
        };
    let { releaseChannel: i, expiresAt: a, validForUserIds: d, allowedVersions: f, targetBuildOverride: p } = e,
        h = Object.keys(p);
    if (0 === o().intersection(h, n).length)
        return {
            valid: !1,
            reason: c.intl.formatToPlainString(c.t.wySUzs, {
                requestedTargets: h
                    .map((e) => {
                        var n;
                        return null !== (n = l.o0[e]) && void 0 !== n ? n : 'unknown';
                    })
                    .join(', ')
            })
        };
    if (null != i && i !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
        let e = i === u.R5N.PTB ? i.toUpperCase() : ''.concat(i.charAt(0).toUpperCase()).concat(i.slice(1));
        return {
            valid: !1,
            reason: c.intl.formatToPlainString(c.t.GOEF0N, { releaseChannel: e })
        };
    }
    if (null != f) {
        let e = !1;
        if (null == r) e = !1;
        else if (f.includes(r)) e = !0;
        else {
            let [n] = r.split('.');
            for (let r of f) {
                let [i, a] = r.split('.');
                if ('*' === a && n === i) {
                    e = !0;
                    break;
                }
            }
        }
        if (!e)
            return {
                valid: !1,
                reason: c.intl.formatToPlainString(c.t.GOEF0N, { releaseChannel: f.join(', ') })
            };
    }
    let _ = null != a ? new Date(a).getTime() : null;
    return null != _ && _ < Date.now()
        ? {
              valid: !1,
              reason: c.intl.string(c.t['8eRE6e'])
          }
        : d.length > 0 && !d.includes(s.default.getId())
          ? {
                valid: !1,
                reason: c.intl.string(c.t.qZgV0d)
            }
          : { valid: !0 };
}
