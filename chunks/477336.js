"use strict";
n.d(t, { A: () => i });
var r = n(575593);
function i(e) {
    let t, n;
    for (let i of e?.collectibles ?? [])
        i.type === r.R.PROFILE_EFFECT
            ? (t = {
                  skuId: i.sku_id,
                  expiresAt: null != i.expires_at ? Math.floor(new Date(i.expires_at).getTime() / 1e3) : void 0,
              })
            : i.type === r.R.PROFILE_FRAME &&
              (n = {
                  skuId: i.sku_id,
                  type: r.R.PROFILE_FRAME,
                  expiresAt: null != i.expires_at ? new Date(i.expires_at) : void 0,
              });
    return { profileEffect: t, profileFrame: n };
}
