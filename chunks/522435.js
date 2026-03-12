n.d(t, { K7: () => l, LG: () => a, TP: () => s });
let i = /(?:^|\/{2}|\.)(tenor\.com|tenor\.co|giphy\.com|cdn\.discordapp\.com|klipy\.com)(?:\/|$)/;
function s(e) {
    return null != e && 0 !== e.length && i.test(e);
}
function l(e) {
    return e.startsWith("//") ? `https:${e}` : e;
}
let r = /\.(webm|mp4)(\?|$)/i;
function a(e) {
    return r.test(e);
}
