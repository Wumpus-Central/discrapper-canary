n.d(t, { s: () => a });
var r = n(579806);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class a {
    static get() {
        if (null == a.cached) {
            var e, t;
            let n = null === r.Z || void 0 === r.Z || null == (t = r.Z.processUtils) || null == (e = t.getMainArgvSync) ? void 0 : e.call(t);
            null != n && n.length > 1 && n.shift(), (a.cached = null != n ? n : []);
        }
        return a.cached;
    }
    static contains(e) {
        return a.get().includes(e);
    }
    static isEnvVariableTrue(e) {
        var t, n;
        if (void 0 === r.Z) return !1;
        switch (null === r.Z || void 0 === r.Z || null == (n = r.Z.process) || null == (t = n.env) ? void 0 : t[e]) {
            case '1':
            case 'true':
                return !0;
        }
        return !1;
    }
    static isDisallowPopupsSet() {
        return a.contains('--disallow-popups') || a.isEnvVariableTrue('DISCORD_DISALLOW_POPUPS');
    }
    static isDiscordTestSet() {
        return a.isEnvVariableTrue('DISCORD_TEST');
    }
    static isDiscordGatewayPlaintextSet() {
        return !1;
    }
}
i(a, 'cached', void 0);
