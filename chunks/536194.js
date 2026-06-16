"use strict";
n.d(t, { P: () => r });
var i = n(77729);
class r {
    static cached;
    static get() {
        if (null == r.cached) {
            let e = i.A?.processUtils?.getMainArgvSync?.();
            null != e && e.length > 1 && e.shift(), (r.cached = e ?? []);
        }
        return r.cached;
    }
    static contains(e) {
        return r.get().includes(e);
    }
    static isEnvVariableTrue(e) {
        if (void 0 === i.A) return !1;
        switch (i.A?.process?.env?.[e]) {
            case "1":
            case "true":
                return !0;
        }
        return !1;
    }
    static isDisallowPopupsSet() {
        return r.contains("--disallow-popups") || r.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS");
    }
    static isDiscordTestSet() {
        return r.isEnvVariableTrue("DISCORD_TEST");
    }
    static isDiscordGatewayPlaintextSet() {
        return !1;
    }
}
