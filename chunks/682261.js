"use strict";
n.d(t, { A: () => r });
var i = n(652215);
function r(e) {
    return (
        null != e &&
        e.type !== i.$pd.CUSTOM_STATUS &&
        (null != e.details ||
            (null != e.assets && (null != e.assets.large_image || null != e.assets.small_text)) ||
            null != e.party ||
            null != e.secrets ||
            null != e.state)
    );
}
