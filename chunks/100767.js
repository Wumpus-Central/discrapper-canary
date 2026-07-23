"use strict";
n.d(t, { $j: () => r, _X: () => l, aW: () => a, wz: () => s });
var i = n(8880);
let r = null != window.speechSynthesis;
function a(e, t) {
    let n = e.replace(/(https?:\/\/[^\s]+)/g, (e) => {
        let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
        return null != t ? t[1] : "";
    });
    null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(" "))));
    let r = new SpeechSynthesisUtterance(n);
    return (r.rate = i.A.speechRate), r;
}
function s(e, t) {
    r && ((e.voice = t), speechSynthesis.speak(e));
}
function l() {
    r && speechSynthesis.cancel();
}
