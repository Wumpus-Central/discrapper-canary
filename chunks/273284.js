n.d(t, { Z: () => a });
var r = n(833858),
    i = n(981631),
    o = n(388032);
function a(e) {
    switch (e.type) {
        case i.IIU.STREAMING:
            let t = null != e.details && "" !== e.details ? e.details : e.name;
            return null != t ? o.intl.formatToPlainString(o.t["0wJXSk"], { name: t }) : null;
        case i.IIU.LISTENING:
            let n = null != e.details && "" !== e.details ? e.details : e.name;
            return null != n ? o.intl.formatToPlainString(o.t.Vnuxub, { name: n }) : null;
        case i.IIU.WATCHING:
            let a = null != e.details && "" !== e.details ? e.details : e.name;
            return null != a ? o.intl.formatToPlainString(o.t.pW3Ip6, { name: a }) : null;
        case i.IIU.COMPETING:
            return null != e.name ? o.intl.formatToPlainString(o.t.QQ2wVF, { name: e.name }) : null;
        case i.IIU.HANG_STATUS:
            return (0, r.O8)(e);
        case i.IIU.CUSTOM_STATUS:
            return null;
        case i.IIU.PLAYING:
        default:
            return null != e.name ? o.intl.formatToPlainString(o.t.lFApm5, { game: e.name }) : null;
    }
}
