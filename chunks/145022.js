n.d(t, { Z: () => u }), n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(314897),
    s = n(908442),
    o = n(981631),
    l = n(388032);
function u(e, t, n) {
    if (null == e || null == t)
        return {
            valid: !1,
            reason: l.intl.string(l.t.d34xi4)
        };
    let { releaseChannel: i, expiresAt: u, validForUserIds: c, allowedVersions: d, targetBuildOverride: f } = e,
        _ = Object.keys(f);
    if (0 === r().intersection(_, t).length)
        return {
            valid: !1,
            reason: l.intl.formatToPlainString(l.t.wySUzs, {
                requestedTargets: _.map((e) => {
                    var t;
                    return null !== (t = s.o0[e]) && void 0 !== t ? t : 'unknown';
                }).join(', ')
            })
        };
    if (null != i && i !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
        let e = i === o.R5N.PTB ? i.toUpperCase() : ''.concat(i.charAt(0).toUpperCase()).concat(i.slice(1));
        return {
            valid: !1,
            reason: l.intl.formatToPlainString(l.t.GOEF0N, { releaseChannel: e })
        };
    }
    if (null != d) {
        let e = !1;
        if (null == n) e = !1;
        else if (d.includes(n)) e = !0;
        else {
            let [t] = n.split('.');
            for (let n of d) {
                let [i, r] = n.split('.');
                if ('*' === r && t === i) {
                    e = !0;
                    break;
                }
            }
        }
        if (!e)
            return {
                valid: !1,
                reason: l.intl.formatToPlainString(l.t.GOEF0N, { releaseChannel: d.join(', ') })
            };
    }
    let p = null != u ? new Date(u).getTime() : null;
    return null != p && p < Date.now()
        ? {
              valid: !1,
              reason: l.intl.string(l.t['8eRE6e'])
          }
        : c.length > 0 && !c.includes(a.default.getId())
          ? {
                valid: !1,
                reason: l.intl.string(l.t.qZgV0d)
            }
          : { valid: !0 };
}
