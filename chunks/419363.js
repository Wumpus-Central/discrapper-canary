n.d(t, {
    M9: () => a,
    Zh: () => r,
    e6: () => s,
    iq: () => l
}),
    n(704826),
    n(35282);
var i = n(441729);
let r = null != window.speechSynthesis;
function s(e, t) {
    let n = e.replace(/(https?:\/\/[^\s]+)/g, (e) => {
        let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
        return null != t ? t[1] : '';
    });
    null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(' '))));
    let r = new SpeechSynthesisUtterance(n);
    return (r.rate = i.Z.speechRate), r;
}
function l(e, t) {
    r && ((e.voice = t), speechSynthesis.speak(e));
}
function a() {
    r && speechSynthesis.cancel();
}
