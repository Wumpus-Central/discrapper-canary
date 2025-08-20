n.d(t, {
    M9: () => s,
    Zh: () => i,
    e6: () => a,
    iq: () => o,
}),
    n(704826),
    n(35282);
var r = n(441729);
let i = null != window.speechSynthesis;
function a(e, t) {
    let n = e.replace(/(https?:\/\/[^\s]+)/g, (e) => {
        let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
        return null != t ? t[1] : "";
    });
    null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(" "))));
    let i = new SpeechSynthesisUtterance(n);
    return (i.rate = r.Z.speechRate), i;
}
function o(e, t) {
    i && ((e.voice = t), speechSynthesis.speak(e));
}
function s() {
    i && speechSynthesis.cancel();
}
