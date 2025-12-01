n.d(t, { Z: () => c }), n(388685), n(35282);
var r = n(392711),
    i = n.n(r),
    a = n(314897),
    o = n(908442),
    s = n(981631),
    l = n(388032);
function c(e, t, n) {
    if (null == e || null == t)
        return {
            valid: !1,
            reason: l.intl.string(l.t.d34xi4),
        };
    let { releaseChannel: r, expiresAt: c, validForUserIds: u, allowedVersions: d, targetBuildOverride: f } = e,
        p = Object.keys(f);
    if (0 === i().intersection(p, t).length)
        return {
            valid: !1,
            reason: l.intl.formatToPlainString(l.t.wySUzv, {
                requestedTargets: p
                    .map((e) => {
                        var t;
                        return null != (t = o.o0[e]) ? t : "unknown";
                    })
                    .join(", "),
            }),
        };
    if (null != r && r !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
        let e = r === s.R5N.PTB ? r.toUpperCase() : "".concat(r.charAt(0).toUpperCase()).concat(r.slice(1));
        return {
            valid: !1,
            reason: l.intl.formatToPlainString(l.t.GOEF0C, { releaseChannel: e }),
        };
    }
    if (null != d) {
        let e = !1;
        if (null == n) e = !1;
        else if (d.includes(n)) e = !0;
        else {
            let [t] = n.split(".");
            for (let n of d) {
                let [r, i] = n.split(".");
                if ("*" === i && t === r) {
                    e = !0;
                    break;
                }
            }
        }
        if (!e)
            return {
                valid: !1,
                reason: l.intl.formatToPlainString(l.t.GOEF0C, { releaseChannel: d.join(", ") }),
            };
    }
    let _ = null != c ? new Date(c).getTime() : null;
    return null != _ && _ < Date.now()
        ? {
              valid: !1,
              reason: l.intl.string(l.t["8eRE6S"]),
          }
        : u.length > 0 && !u.includes(a.default.getId())
          ? {
                valid: !1,
                reason: l.intl.string(l.t.qZgV0a),
            }
          : { valid: !0 };
}
