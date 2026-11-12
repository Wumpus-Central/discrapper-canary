var i = n(620632),
    r = n(73153),
    a = n(626584),
    s = n(287809),
    l = n(927813),
    o = n(773527),
    d = n(211824);
let c = new a.A("HexagonActionCreators"),
    u = 10 * l.A.Millis.SECOND,
    _ = null;
function E(e) {
    r.h.dispatch({ type: "HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED", previousPerkValues: e });
}
n.d(
    t,
    {},
    {
        Br: function (e) {
            return (0, o.Rd)(s.default.getCurrentUser(), e)
                ? Promise.resolve(!0)
                : (null == _ &&
                      (_ = (async function (e) {
                          try {
                              return await (async function (e) {
                                  try {
                                      await (async function () {
                                          await i.Bo.post({ url: d.tK, rejectWithError: !0 });
                                      })();
                                  } catch (e) {
                                      return (c.warn(`Failed to enroll in the Hexagon campaign: ${e}`), !1);
                                  }
                                  return (
                                      (await (function (e) {
                                          function t() {
                                              return (0, o.Rd)(s.default.getCurrentUser(), e);
                                          }
                                          return t()
                                              ? Promise.resolve(!0)
                                              : new Promise((e) => {
                                                    function n() {
                                                        t() &&
                                                            (clearTimeout(i), s.default.removeChangeListener(n), e(!0));
                                                    }
                                                    let i = setTimeout(() => {
                                                        (s.default.removeChangeListener(n), e(!1));
                                                    }, u);
                                                    s.default.addChangeListener(n);
                                                });
                                      })(e)) || c.warn(`Timed out waiting for the Hexagon campaign ${e} perk to sync`),
                                      !0
                                  );
                              })(e);
                          } finally {
                              _ = null;
                          }
                      })(e)),
                  _);
        },
        Lo: function (e) {
            (0, o.z9)(e) || E({ appIconId: e });
        },
        Tf: function () {
            r.h.dispatch({ type: "HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES_VISITED" });
        },
        VN: function (e) {
            r.h.dispatch({ type: "HEXAGON_CAMPAIGN_PERK_APPLIED", perk: e });
        },
        WT: function () {
            let e = s.default.getCurrentUser()?.displayNameStyles ?? null;
            (0, o.Jy)(e) || E({ displayNameStyles: e });
        },
        fv: E,
    },
);
