n.d(t, { Z: () => a });
var r = n(981631),
    i = n(388032);
function a(e) {
    switch (e.type) {
        case r.IIU.STREAMING:
            let t = null != e.details && '' !== e.details ? e.details : e.name;
            return null != t ? i.intl.formatToPlainString(i.t['0wJXSk'], { name: t }) : null;
        case r.IIU.LISTENING:
            let n = null != e.details && '' !== e.details ? e.details : e.name;
            return null != n ? i.intl.formatToPlainString(i.t.Vnuxub, { name: n }) : null;
        case r.IIU.WATCHING:
            let a = null != e.details && '' !== e.details ? e.details : e.name;
            return null != a ? i.intl.formatToPlainString(i.t.pW3Ip6, { name: a }) : null;
        case r.IIU.COMPETING:
            return null != e.name ? i.intl.formatToPlainString(i.t.QQ2wVF, { name: e.name }) : null;
        case r.IIU.CUSTOM_STATUS:
        case r.IIU.HANG_STATUS:
            return null;
        case r.IIU.PLAYING:
        default:
            return null != e.name ? i.intl.formatToPlainString(i.t.lFApm5, { game: e.name }) : null;
    }
}
