n.d(t, { $j: () => l, _X: () => o, aW: () => r, wz: () => s });
var i = n(8880);
let l = null != window.speechSynthesis;
function r(e, t) {
    let n = e.replace(/(https?:\/\/[^\s]+)/g, (e) => {
        let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
        return null != t ? t[1] : "";
    });
    null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(" "))));
    let l = new SpeechSynthesisUtterance(n);
    return (l.rate = i.A.speechRate), l;
}
function s(e, t) {
    l && ((e.voice = t), speechSynthesis.speak(e));
}
function o() {
    l && speechSynthesis.cancel();
}
