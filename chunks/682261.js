n.d(t, { A: () => i });
var r = n(652215);
function i(e, t) {
    return (
        ((null == e ? void 0 : e.type) !== r.$pd.HANG_STATUS || !!t) &&
        null != e &&
        e.type !== r.$pd.CUSTOM_STATUS &&
        (null != e.details ||
            (null != e.assets && (null != e.assets.large_image || null != e.assets.small_text)) ||
            null != e.party ||
            null != e.secrets ||
            null != e.state)
    );
}
