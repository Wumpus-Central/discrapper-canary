var r = n(620632),
    a = n(73153),
    i = n(626584),
    _ = n(287809),
    o = n(927813),
    E = n(773527),
    u = n(211824);
let c = new i.A("HexagonActionCreators"),
    s = 10 * o.A.Millis.SECOND,
    O = null;
function l(t) {
    a.h.dispatch({ type: "HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED", previousPerkValues: t });
}
n.d(
    e,
    {},
    {
        Br: function (t) {
            return (0, E.Rd)(_.default.getCurrentUser(), t)
                ? Promise.resolve(!0)
                : (null == O &&
                      (O = (async function (t) {
                          try {
                              return await (async function (t) {
                                  try {
                                      await (async function () {
                                          await r.Bo.post({ url: u.tK, rejectWithError: !0 });
                                      })();
                                  } catch (t) {
                                      return (c.warn(`Failed to enroll in the Hexagon campaign: ${t}`), !1);
                                  }
                                  return (
                                      (await (function (t) {
                                          function e() {
                                              return (0, E.Rd)(_.default.getCurrentUser(), t);
                                          }
                                          return e()
                                              ? Promise.resolve(!0)
                                              : new Promise((t) => {
                                                    function n() {
                                                        e() &&
                                                            (clearTimeout(r), _.default.removeChangeListener(n), t(!0));
                                                    }
                                                    let r = setTimeout(() => {
                                                        (_.default.removeChangeListener(n), t(!1));
                                                    }, s);
                                                    _.default.addChangeListener(n);
                                                });
                                      })(t)) || c.warn(`Timed out waiting for the Hexagon campaign ${t} perk to sync`),
                                      !0
                                  );
                              })(t);
                          } finally {
                              O = null;
                          }
                      })(t)),
                  O);
        },
        Lo: function (t) {
            (0, E.z9)(t) || l({ appIconId: t });
        },
        Tf: function () {
            a.h.dispatch({ type: "HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES_VISITED" });
        },
        VN: function (t) {
            a.h.dispatch({ type: "HEXAGON_CAMPAIGN_PERK_APPLIED", perk: t });
        },
        WT: function () {
            let t = _.default.getCurrentUser()?.displayNameStyles ?? null;
            (0, E.Jy)(t) || l({ displayNameStyles: t });
        },
        fv: l,
    },
);
