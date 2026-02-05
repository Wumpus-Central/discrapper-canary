"use strict";
n.d(t, { U: () => d });
var r = n(843472),
    i = n(659416),
    a = n(926966),
    s = n(985018);
let o = {
        [i.sb.MILD]: {
            [i.H9.TIMED]: [a.default["p/j1ak"]],
            [i.H9.GAME]: [a.default.ANVXhN],
            [i.H9.VOCAL]: [a.default["Ff5n+Z"]],
            [i.H9.STREAM]: [a.default["60+gQA"]],
            [i.H9.VIDEO]: [a.default.m8zvpd],
            [i.H9.CHAT]: [a.default.CJDR7Z],
        },
        [i.sb.SPICY]: {
            [i.H9.TIMED]: [a.default["6uUIWc"], a.default.rjMw9M, a.default.aq21eB],
            [i.H9.GAME]: [a.default["vLZ/m/"], a.default.bQudcG, a.default.v2p3rT],
            [i.H9.VOCAL]: [a.default.SX3w3h, a.default.J0X73L, a.default.n95G5y],
            [i.H9.STREAM]: [a.default.rSmlRe, a.default["9yCH5J"], a.default.hx5ng5],
            [i.H9.VIDEO]: [a.default["qSsK+w"], a.default.M0H768, a.default.Rczy6c],
            [i.H9.CHAT]: [a.default["32UTLl"], a.default.ndMKuL, a.default.aPNsog],
        },
        [i.sb.UNHINGED]: {
            [i.H9.TIMED]: [a.default.yveSNB, a.default["0d2O4H"], a.default.suqE4C, a.default.DO5hwt],
            [i.H9.GAME]: [a.default.rV887U, a.default.zo6PpO, a.default.IGXpdO, a.default["O+5PYv"]],
            [i.H9.VOCAL]: [a.default.ulUExb, a.default.JfOJLE, a.default["+SOrsr"], a.default.zUWTkm],
            [i.H9.STREAM]: [a.default.qAeguc, a.default.ZFPKtl, a.default.DK8OsN, a.default.tVlnhL],
            [i.H9.VIDEO]: [a.default.ARozSv, a.default["xPI/lP"], a.default.jEgLYc, a.default.sVKfvf],
            [i.H9.CHAT]: [a.default["pC+wxi"], a.default["vfIw+P"], a.default.ZMd2qV, a.default["+Arh2W"]],
        },
    },
    l = {
        [i.sb.MILD]: [a.default.UBiarV],
        [i.sb.SPICY]: [a.default.YoopjA, a.default.anXJKP],
        [i.sb.UNHINGED]: [a.default.K6Yvmh, a.default.EhbEou, a.default["4/YEfZ"]],
    };
function u(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function c(e, t) {
    let n = o[t],
        r = n?.[e];
    if (null != r && r.length > 0) return s.intl.string(u(r));
    let i = l[t];
    return s.intl.string(u(i));
}
function d(e) {
    let t;
    if (e.spiciness === i.sb.MILD || null == e.channelId || 0 === `${e.channelId}`.length) return;
    let n = c(e.kind, e.spiciness);
    (t = e.spiciness === i.sb.UNHINGED ? s.intl.formatToPlainString(a.default["tZWJI/"], { message: n }) : n),
        r.A.sendMessage(e.channelId, { content: t, invalidEmojis: [], validNonShortcutEmojis: [], tts: !1 }, !0, {
            location: "VoiceDareConsequence",
        });
}
