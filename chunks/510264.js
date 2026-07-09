"use strict";
n.d(t, { Q: () => E, A: () => A });
var i = n(636537),
    r = n(439372),
    a = n(627968);
n(64700);
var s = n(506774),
    l = n(192308),
    o = n(386936);
let d = "dmSettingsUpsellLastShown",
    c = {
        openDmSettingsUpsellModal(e) {
            let t = s.w.get(d),
                i = Date.now();
            null == t || i - t > 6048e5
                ? (s.w.set(d, i),
                  (0, l.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([n.e("3793"), n.e("73084"), n.e("62684")]).then(
                          n.bind(n, 228855),
                      );
                      return (n) => (0, a.jsx)(t, { ...n, guildId: e });
                  }))
                : (0, o.$)(o.s.SUPPRESSED_BY_COOLDOWN, e);
        },
    };
var u = n(652215);
class _ extends r.A {
    actions = { DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow };
    handleDmSettingsUpsellShow(e) {
        c.openDmSettingsUpsellModal(e.guildId);
    }
}
function E(e) {
    return i.Bo.post({ url: u.Rsh.DM_SETTINGS_UPSELL_ACK(e), rejectWithError: !1 });
}
let A = new _();
