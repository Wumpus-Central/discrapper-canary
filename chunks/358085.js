var i;
r.r(n),
    r.d(n, {
        PlatformTypes: function () {
            return i;
        },
        getNativePlatform: function () {
            return y;
        },
        getOS: function () {
            return b;
        },
        getPlatform: function () {
            return E;
        },
        getPlatformName: function () {
            return v;
        },
        isAndroid: function () {
            return m;
        },
        isAndroidChrome: function () {
            return p;
        },
        isAndroidWeb: function () {
            return h;
        },
        isDesktop: function () {
            return d;
        },
        isIOS: function () {
            return g;
        },
        isLinux: function () {
            return c;
        },
        isMac: function () {
            return u;
        },
        isMacWeb: function () {
            return _;
        },
        isPlatformEmbedded: function () {
            return o;
        },
        isWeb: function () {
            return f;
        },
        isWindows: function () {
            return l;
        }
    }),
    !(function (e) {
        (e.WINDOWS = 'WINDOWS'), (e.OSX = 'OSX'), (e.LINUX = 'LINUX'), (e.WEB = 'WEB');
    })(i || (i = {}));
let a = window.DiscordNative,
    o = null != a,
    s = null != a ? a.process.platform : '';
function l() {
    return /^win/.test(s);
}
function u() {
    return 'darwin' === s;
}
function c() {
    return 'linux' === s;
}
function d() {
    return l() || u() || c();
}
function f() {
    return 'WEB' === E();
}
function p() {
    return null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match('(android ).+chrome/[.0-9]* mobile');
}
function h() {
    var e;
    return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/android/i)) != null;
}
function _() {
    var e;
    return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/Macintosh/i)) != null;
}
function m() {
    return 'android' === s;
}
function g() {
    return 'ios' === s;
}
function E() {
    return l() ? 'WINDOWS' : u() ? 'OSX' : c() ? 'LINUX' : 'WEB';
}
function v() {
    return s;
}
function y() {
    switch (s) {
        case 'ios':
        case 'android':
            return s;
        default:
            return 'web';
    }
}
function b() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? 'windows mobile' : 'windows';
    if (/(iPhone|iPad|iPod)/.test(e)) return 'ios';
    if (/Android/.test(e)) return 'android';
    else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'blackberry';
    else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'ios' : 'macos';
    else if (/Linux/i.test(e)) return 'linux';
}
