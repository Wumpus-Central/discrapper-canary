n.d(t, {
    M9: () => a,
    Zh: () => s,
    e6: () => r,
    iq: () => l
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
function l(e, t) {
    s && ((e.voice = t), speechSynthesis.speak(e));
}
function a() {
    s && speechSynthesis.cancel();
}
