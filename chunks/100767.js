n.d(t, {
    $j: () => i,
    _X: () => o,
    aW: () => a,
    wz: () => s,
}),
    n(747238),
    n(812715);
var r = n(8880);
let i = null != window.speechSynthesis;

function a(e, t) {
    let n = e.replace(/(https?:\/\/[^\s]+)/g, (e) => {
        let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
        return null != t ? t[1] : "";
    });
    null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(" "))));
    let i = new SpeechSynthesisUtterance(n);
    return (i.rate = r.A.speechRate), i;
}

function s(e, t) {
    i && ((e.voice = t), speechSynthesis.speak(e));
}

function o() {
    i && speechSynthesis.cancel();
}
