"use strict";
n.d(t, { Q: () => E, A: () => h });
var i = n(636537),
    r = n(439372),
    s = n(627968);
n(64700);
var a = n(506774),
    o = n(192308),
    l = n(386936);
let _ = "dmSettingsUpsellLastShown",
    d = {
        openDmSettingsUpsellModal(e) {
            let t = a.w.get(_),
                i = Date.now();
            null == t || i - t > 6048e5
                ? (a.w.set(_, i),
                  (0, o.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([n.e("26065"), n.e("73084"), n.e("62684")]).then(
                          n.bind(n, 228855),
                      );
                      return (n) => (0, s.jsx)(t, { ...n, guildId: e });
                  }))
                : (0, l.$)(l.s.SUPPRESSED_BY_COOLDOWN, e);
        },
    };
var u = n(652215);
class c extends r.A {
    actions = { DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow };
    handleDmSettingsUpsellShow(e) {
        d.openDmSettingsUpsellModal(e.guildId);
    }
}
function E(e) {
    return i.Bo.post({ url: u.Rsh.DM_SETTINGS_UPSELL_ACK(e), rejectWithError: !1 });
}
let h = new c();
