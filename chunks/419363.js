n.d(t, {
    M9: () => l,
    Zh: () => r,
    e6: () => a,
    iq: () => s
}),
    n(757143);
var i = n(441729);
let r = null != window.speechSynthesis;
function a(e, t) {
    let n = e.replace(/(https?:\/\/[^\s]+)/g, (e) => {
        let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
        return null != t ? t[1] : '';
    });
    null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(' '))));
    let r = new SpeechSynthesisUtterance(n);
    return (r.rate = i.Z.speechRate), r;
}
function s(e, t) {
    r && ((e.voice = t), speechSynthesis.speak(e));
}
function l() {
    r && speechSynthesis.cancel();
}
