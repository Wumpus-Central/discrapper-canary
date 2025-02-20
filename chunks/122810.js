n.d(t, { Z: () => i });
var r = n(981631);
function i(e) {
    return null != e && e.type !== r.IIU.CUSTOM_STATUS && e.type !== r.IIU.HANG_STATUS && (null != e.details || (null != e.assets && (null != e.assets.large_image || null != e.assets.small_text)) || null != e.party || null != e.secrets || null != e.state);
}
