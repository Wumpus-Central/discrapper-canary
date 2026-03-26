n.d(t, { K7: () => r, LG: () => a, TP: () => s });
let i =
    /(?:^|\/{2}|\.)(tenor\.com|tenor\.co|giphy\.com|cdn\.discordapp\.com|media\.discordapp\.net|klipy\.com)(?:\/|$)/;
function s(e) {
    return null != e && 0 !== e.length && i.test(e);
}
function r(e) {
    return e.startsWith("//") ? `https:${e}` : e;
}
let l = /\.(webm|mp4)(\?|$)/i;
function a(e) {
    return l.test(e);
}
