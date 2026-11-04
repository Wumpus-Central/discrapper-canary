var i = n(8880);
let s = null != window.speechSynthesis;
n.d(
    t,
    {},
    {
        $j: s,
        _X: function () {
            s && speechSynthesis.cancel();
        },
        aW: function (e, t) {
            let n = e.replace(/(https?:\/\/[^\s]+)/g, (e) => {
                let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
                return null != t ? t[1] : "";
            });
            null != t &&
                n.length > t &&
                (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(" "))));
            let s = new SpeechSynthesisUtterance(n);
            return ((s.rate = i.A.speechRate), s);
        },
        wz: function (e, t) {
            s && ((e.voice = t), speechSynthesis.speak(e));
        },
    },
);
