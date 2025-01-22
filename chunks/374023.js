r.d(n, {
    s: function () {
        return o;
    }
});
var i = r(579806);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class o {
    static get() {
        if (null == o.cached) {
            var e, n;
            let r = null === i.Z || void 0 === i.Z ? void 0 : null === (n = i.Z.processUtils) || void 0 === n ? void 0 : null === (e = n.getMainArgvSync) || void 0 === e ? void 0 : e.call(n);
            null != r && r.length > 1 && r.shift(), (o.cached = null != r ? r : []);
        }
        return o.cached;
    }
    static contains(e) {
        return o.get().includes(e);
    }
    static isEnvVariableTrue(e) {
        var n, r;
        if (void 0 === i.Z) return !1;
        switch (null === i.Z || void 0 === i.Z ? void 0 : null === (r = i.Z.process) || void 0 === r ? void 0 : null === (n = r.env) || void 0 === n ? void 0 : n[e]) {
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
a(o, 'cached', void 0);
