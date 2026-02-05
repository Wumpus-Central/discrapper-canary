"use strict";
n.d(t, { P: () => i });
var r = n(77729);
class i {
    static cached;
    static get() {
        if (null == i.cached) {
            let e = r.A?.processUtils?.getMainArgvSync?.();
            null != e && e.length > 1 && e.shift(), (i.cached = e ?? []);
        }
        return i.cached;
    }
    static contains(e) {
        return i.get().includes(e);
    }
    static isEnvVariableTrue(e) {
        if (void 0 === r.A) return !1;
        switch (r.A?.process?.env?.[e]) {
            case "1":
            case "true":
                return !0;
        }
        return !1;
    }
    static isDisallowPopupsSet() {
        return i.contains("--disallow-popups") || i.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS");
    }
    static isDiscordTestSet() {
        return i.isEnvVariableTrue("DISCORD_TEST");
    }
    static isDiscordGatewayPlaintextSet() {
        return !1;
    }
}
