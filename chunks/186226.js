"use strict";
n.d(t, { A: () => s });
var r = n(417597),
    i = n(989837);
function s(e) {
    let { type: t, channelId: n } = e;
    return (0, r.bG)([i.A], () => {
        let e = i.A.activeViewType();
        return null != e && e === t && i.A.activeChannelId() === n && i.A.shouldShowPopup();
    }, [t, n]);
}
