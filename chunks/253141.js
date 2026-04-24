n.d(t, { EY: () => c, KW: () => d, a: () => r, ig: () => o, kt: () => s });
var i = n(845584);
n(576705);
var l = n(652215),
    a = n(985018);
let r = "_role";
function s(e) {
    if (!(e >= 0))
        switch (-e) {
            case l.t02.ENTITY_TOO_LARGE:
                return a.intl.string(a.t.YbdEFK);
            case l.t02.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                return a.intl.string(a.t.ZaXBoD);
            case 1:
                return a.intl.string(a.t.R0RpRX);
            default:
                return a.intl.formatToPlainString(a.t.cYwlp9, { code: -e });
        }
}
function o(e) {
    let { newRoleParams: t } = e;
    if (null != t && "" === t.name.trim()) {
        var n;
        return (
            (n = a.intl.string(a.t["V0B/k6"])),
            new i.LG({
                status: 400,
                body: { message: "Invalid form body", errors: { [r]: { _errors: [{ code: "", message: n }] } } },
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
            image: a,
            imageName: r,
            isImageChanged: s,
            newRoleParams: o,
            hasUnsavedAttachmentChanges: c,
        } = e,
        d = {};
    t?.name !== n && "" !== n.trim() && (d.name = n),
        (t?.description ?? "") !== l && (d.description = l),
        t?.price_tier !== i && null != i && (d.priceTier = i),
        null != o && "" !== o.name.trim() ? (d.createNewRole = !0) : null === o && (d.unlinkRole = !0),
        a.startsWith("data:") &&
            (s || (null == t && (Object.keys(d).length > 0 || c))) &&
            ((d.image = a), (d.imageName = r));
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
