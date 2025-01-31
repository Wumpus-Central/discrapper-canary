n.d(t, { Z: () => r });
var i = n(981631);
function r(e) {
    return null != e && e.type !== i.IIU.CUSTOM_STATUS && e.type !== i.IIU.HANG_STATUS && (null != e.details || (null != e.assets && (null != e.assets.large_image || null != e.assets.small_text)) || null != e.party || null != e.secrets || null != e.state);
}
