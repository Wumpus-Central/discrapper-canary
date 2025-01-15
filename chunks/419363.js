n.d(t, {
    M9: function () {
        return l;
    },
    Zh: function () {
        return s;
    },
    e6: function () {
        return r;
    },
    iq: function () {
        return a;
    }
}),
    n(757143);
var i = n(441729);
let s = null != window.speechSynthesis;
function r(e, t) {
    let n = e.replace(/(https?:\/\/[^\s]+)/g, (e) => {
        let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
        return null != t ? t[1] : '';
    });
    null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(' '))));
    let s = new SpeechSynthesisUtterance(n);
    return (s.rate = i.Z.speechRate), s;
}
function a(e, t) {
    s && ((e.voice = t), speechSynthesis.speak(e));
}
function l() {
    s && speechSynthesis.cancel();
}
