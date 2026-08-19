n.d(t, { EY: () => c, KW: () => d, a: () => a, ig: () => o, kt: () => r });
var i = n(913122);
n(576705);
var l = n(652215),
    s = n(375708);
let a = "_role";
function r(e) {
    if (!(e >= 0))
        switch (-e) {
            case l.t02.ENTITY_TOO_LARGE:
                return s.intl.string(s.t.YbdEFK);
            case l.t02.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                return s.intl.string(s.t.ZaXBoD);
            case 1:
                return s.intl.string(s.t.R0RpRX);
            default:
                return s.intl.formatToPlainString(s.t.cYwlp9, { code: -e });
        }
}
function o(e) {
    let { newRoleParams: t } = e;
    if (null != t && "" === t.name.trim()) {
        var n;
        return (
            (n = s.intl.string(s.t["V0B/k6"])),
            new i.LG({
                status: 400,
                body: { message: "Invalid form body", errors: { [a]: { _errors: [{ code: "", message: n }] } } },
            })
        );
    }
}
function c(e) {
    let {
            guildProductListing: t,
            name: n,
            priceTier: i,
            description: l,
            image: s,
            imageName: a,
            isImageChanged: r,
            newRoleParams: o,
            hasUnsavedAttachmentChanges: c,
        } = e,
        d = {};
    t?.name !== n && "" !== n.trim() && (d.name = n),
        (t?.description ?? "") !== l && (d.description = l),
        t?.price_tier !== i && null != i && (d.priceTier = i),
        null != o && "" !== o.name.trim() ? (d.createNewRole = !0) : null === o && (d.unlinkRole = !0),
        s.startsWith("data:") &&
            (r || (null == t && (Object.keys(d).length > 0 || c))) &&
            ((d.image = s), (d.imageName = a));
    let u = Object.keys(d).length > 0 || c;
    return {
        changes: d,
        hasUnsavedChanges: u,
        canSaveForDraft: u,
        canSaveForPublished: u,
        canPublishOrUnpublish: !(null == t || u),
    };
}
function d(e, t) {
    return `${location.protocol}//${location.host}${l.BVt.GUILD_PRODUCT(e, t)}`;
}
