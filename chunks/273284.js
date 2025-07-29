n.d(t, { Z: () => o });
var r = n(833858),
    i = n(981631),
    a = n(388032);
function o(e) {
    switch (e.type) {
        case i.IIU.STREAMING:
            let t = null != e.details && '' !== e.details ? e.details : e.name;
            return null != t ? a.intl.formatToPlainString(a.t['0wJXSk'], { name: t }) : null;
        case i.IIU.LISTENING:
            let n = null != e.details && '' !== e.details ? e.details : e.name;
            return null != n ? a.intl.formatToPlainString(a.t.Vnuxub, { name: n }) : null;
        case i.IIU.WATCHING:
            let o = null != e.details && '' !== e.details ? e.details : e.name;
            return null != o ? a.intl.formatToPlainString(a.t.pW3Ip6, { name: o }) : null;
        case i.IIU.COMPETING:
            return null != e.name ? a.intl.formatToPlainString(a.t.QQ2wVF, { name: e.name }) : null;
        case i.IIU.HANG_STATUS:
            return (0, r.O8)(e);
        case i.IIU.CUSTOM_STATUS:
            return null;
        case i.IIU.PLAYING:
        default:
            return null != e.name ? a.intl.formatToPlainString(a.t.lFApm5, { game: e.name }) : null;
    }
}
