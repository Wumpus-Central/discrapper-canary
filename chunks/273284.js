n.d(t, { Z: () => o });
var r = n(981631),
    i = n(388032);
function o(e) {
    switch (e.type) {
        case r.IIU.STREAMING:
            let t = null != e.details && '' !== e.details ? e.details : e.name;
            return null != t ? i.NW.formatToPlainString(i.t['0wJXSk'], { name: t }) : null;
        case r.IIU.LISTENING:
            let n = null != e.details && '' !== e.details ? e.details : e.name;
            return null != n ? i.NW.formatToPlainString(i.t.Vnuxub, { name: n }) : null;
        case r.IIU.WATCHING:
            let o = null != e.details && '' !== e.details ? e.details : e.name;
            return null != o ? i.NW.formatToPlainString(i.t.pW3Ip6, { name: o }) : null;
        case r.IIU.COMPETING:
            return null != e.name ? i.NW.formatToPlainString(i.t.QQ2wVF, { name: e.name }) : null;
        case r.IIU.CUSTOM_STATUS:
        case r.IIU.HANG_STATUS:
            return null;
        case r.IIU.PLAYING:
        default:
            return null != e.name ? i.NW.formatToPlainString(i.t.lFApm5, { game: e.name }) : null;
    }
}
