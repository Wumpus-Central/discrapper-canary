n.d(t, { Z: () => a });
var i = n(981631),
    r = n(388032);
function a(e) {
    switch (e.type) {
        case i.IIU.STREAMING:
            let t = null != e.details && '' !== e.details ? e.details : e.name;
            return null != t ? r.intl.formatToPlainString(r.t['0wJXSk'], { name: t }) : null;
        case i.IIU.LISTENING:
            let n = null != e.details && '' !== e.details ? e.details : e.name;
            return null != n ? r.intl.formatToPlainString(r.t.Vnuxub, { name: n }) : null;
        case i.IIU.WATCHING:
            let a = null != e.details && '' !== e.details ? e.details : e.name;
            return null != a ? r.intl.formatToPlainString(r.t.pW3Ip6, { name: a }) : null;
        case i.IIU.COMPETING:
            return null != e.name ? r.intl.formatToPlainString(r.t.QQ2wVF, { name: e.name }) : null;
        case i.IIU.CUSTOM_STATUS:
        case i.IIU.HANG_STATUS:
            return null;
        case i.IIU.PLAYING:
        default:
            return null != e.name ? r.intl.formatToPlainString(r.t.lFApm5, { game: e.name }) : null;
    }
}
