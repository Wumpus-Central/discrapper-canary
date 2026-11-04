var i,
    r = (((i = {}).WINDOWS = "WINDOWS"), (i.OSX = "OSX"), (i.LINUX = "LINUX"), (i.WEB = "WEB"), i);
let a = "u" < typeof window ? null : window.DiscordNative,
    s = null != a,
    l = null != a ? a.process.platform : "";
function o() {
    return /^win/.test(l);
}
function d() {
    return "darwin" === l;
}
function c() {
    return "linux" === l;
}
function u() {
    return o() || d() || c();
}
function _() {
    return navigator.userAgent?.match(/OculusBrowser/i) != null;
}
function E() {
    return o() ? "WINDOWS" : d() ? "OSX" : c() ? "LINUX" : "WEB";
}
n.d(
    t,
    {},
    {
        Av: s,
        Ct: function () {
            return navigator.userAgent?.match(/android/i) != null;
        },
        HZ: function () {
            return "WEB" === E();
        },
        Ls: function () {
            return u() || _() || s;
        },
        R0: function () {
            let { userAgent: e } = window.navigator;
            if (/Windows/i.test(e)) return /Phone/.test(e) ? "windows mobile" : "windows";
            if (/(iPhone|iPad|iPod)/.test(e)) return "ios";
            if (/Android/.test(e)) return "android";
            if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "blackberry";
            if (/Mac/i.test(e))
                return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "ios" : "macos";
            else if (/Linux/i.test(e)) return "linux";
        },
        Sn: function () {
            return navigator.userAgent?.match(/Macintosh/i) != null;
        },
        cX: d,
        cZ: function () {
            return o() ? "win" : d() ? "osx" : void 0;
        },
        fg: r,
        j9: c,
        m0: function () {
            return "android" === l;
        },
        q4: _,
        r_: function () {
            switch (l) {
                case "ios":
                case "android":
                    return l;
                default:
                    return "web";
            }
        },
        t1: function () {
            return l;
        },
        tn: function () {
            return _();
        },
        uF: o,
        un: function () {
            return "ios" === l;
        },
        uo: E,
        xl: u,
    },
);
