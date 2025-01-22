r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(833858),
    a = r(981631),
    o = r(388032);
function s(e) {
    switch (e.type) {
        case a.IIU.STREAMING:
            let n = null != e.details && '' !== e.details ? e.details : e.name;
            return null != n ? o.intl.formatToPlainString(o.t['0wJXSk'], { name: n }) : null;
        case a.IIU.LISTENING:
            let r = null != e.details && '' !== e.details ? e.details : e.name;
            return null != r ? o.intl.formatToPlainString(o.t.Vnuxub, { name: r }) : null;
        case a.IIU.WATCHING:
            let s = null != e.details && '' !== e.details ? e.details : e.name;
            return null != s ? o.intl.formatToPlainString(o.t.pW3Ip6, { name: s }) : null;
        case a.IIU.COMPETING:
            return null != e.name ? o.intl.formatToPlainString(o.t.QQ2wVF, { name: e.name }) : null;
        case a.IIU.HANG_STATUS:
            return (0, i.O8)(e);
        case a.IIU.PLAYING:
        default:
            return null != e.name ? o.intl.formatToPlainString(o.t.lFApm5, { game: e.name }) : null;
    }
}
