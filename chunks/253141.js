n.d(t, { EY: () => d, KW: () => c, a: () => s, ig: () => o, kt: () => r });
var i = n(198982);
n(576705);
var l = n(652215),
    a = n(985018);
let s = "_role";
function r(e) {
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
                body: { message: "Invalid form body", errors: { [s]: { _errors: [{ code: "", message: n }] } } },
            })
        );
    }
}
function d(e) {
    let {
            guildProductListing: t,
            name: n,
            priceTier: i,
            description: l,
            image: a,
            imageName: s,
            isImageChanged: r,
            newRoleParams: o,
            hasUnsavedAttachmentChanges: d,
        } = e,
        c = {};
    t?.name !== n && "" !== n.trim() && (c.name = n),
        (t?.description ?? "") !== l && (c.description = l),
        t?.price_tier !== i && null != i && (c.priceTier = i),
        null != o && "" !== o.name.trim() ? (c.createNewRole = !0) : null === o && (c.unlinkRole = !0),
        a.startsWith("data:") &&
            (r || (null == t && (Object.keys(c).length > 0 || d))) &&
            ((c.image = a), (c.imageName = s));
    let u = Object.keys(c).length > 0 || d;
    return {
        changes: c,
        hasUnsavedChanges: u,
        canSaveForDraft: u,
        canSaveForPublished: u,
        canPublishOrUnpublish: !(null == t || u),
    };
}
function c(e, t) {
    return `${location.protocol}//${location.host}${l.BVt.GUILD_PRODUCT(e, t)}`;
}
