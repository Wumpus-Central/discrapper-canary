n.d(t, { Z: () => c }), n(47120), n(301563);
var r = n(392711),
    i = n.n(r),
    o = n(314897),
    a = n(908442),
    s = n(981631),
    l = n(388032);
function c(e, t, n) {
    if (null == e || null == t)
        return {
            valid: !1,
            reason: l.NW.string(l.t.d34xi4)
        };
    let { releaseChannel: r, expiresAt: c, validForUserIds: u, allowedVersions: d, targetBuildOverride: f } = e,
        _ = Object.keys(f);
    if (0 === i().intersection(_, t).length)
        return {
            valid: !1,
            reason: l.NW.formatToPlainString(l.t.wySUzs, {
                requestedTargets: _.map((e) => {
                    var t;
                    return null != (t = a.o0[e]) ? t : 'unknown';
                }).join(', ')
            })
        };
    if (null != r && r !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
        let e = r === s.R5N.PTB ? r.toUpperCase() : ''.concat(r.charAt(0).toUpperCase()).concat(r.slice(1));
        return {
            valid: !1,
            reason: l.NW.formatToPlainString(l.t.GOEF0N, { releaseChannel: e })
        };
    }
    if (null != d) {
        let e = !1;
        if (null == n) e = !1;
        else if (d.includes(n)) e = !0;
        else {
            let [t] = n.split('.');
            for (let n of d) {
                let [r, i] = n.split('.');
                if ('*' === i && t === r) {
                    e = !0;
                    break;
                }
            }
        }
        if (!e)
            return {
                valid: !1,
                reason: l.NW.formatToPlainString(l.t.GOEF0N, { releaseChannel: d.join(', ') })
            };
    }
    let p = null != c ? new Date(c).getTime() : null;
    return null != p && p < Date.now()
        ? {
              valid: !1,
              reason: l.NW.string(l.t['8eRE6e'])
          }
        : u.length > 0 && !u.includes(o.default.getId())
          ? {
                valid: !1,
                reason: l.NW.string(l.t.qZgV0d)
            }
          : { valid: !0 };
}
