n.d(t, { s: () => o });
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
class o {
    static get() {
        if (null == o.cached) {
            var e, t;
            let n = null === r.Z || void 0 === r.Z || null == (t = r.Z.processUtils) || null == (e = t.getMainArgvSync) ? void 0 : e.call(t);
            null != n && n.length > 1 && n.shift(), (o.cached = null != n ? n : []);
        }
        return o.cached;
    }
    static contains(e) {
        return o.get().includes(e);
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
        return o.contains('--disallow-popups') || o.isEnvVariableTrue('DISCORD_DISALLOW_POPUPS');
    }
    static isDiscordTestSet() {
        return o.isEnvVariableTrue('DISCORD_TEST');
    }
    static isDiscordGatewayPlaintextSet() {
        return !1;
    }
}
i(o, 'cached', void 0);
