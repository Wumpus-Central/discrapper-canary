var r = n(620632),
    a = n(73153),
    i = n(626584),
    u = n(287809),
    o = n(927813),
    l = n(773527),
    s = n(211824);
let c = new i.A("HexagonActionCreators"),
    d = 5 * o.A.Millis.SECOND,
    f = null;
function h(e) {
    a.h.dispatch({ type: "HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED", previousPerkValues: e });
}
n.d(
    t,
    {},
    {
        Br: function (e) {
            return (0, l.Rd)(u.default.getCurrentUser(), e)
                ? Promise.resolve(!0)
                : (null == f &&
                      (f = (async function (e) {
                          try {
                              return await (async function (e) {
                                  try {
                                      await (async function () {
                                          await r.Bo.post({ url: s.tK, rejectWithError: !0 });
                                      })();
                                  } catch (e) {
                                      return (c.warn(`Failed to enroll in the Hexagon campaign: ${e}`), !1);
                                  }
                                  return (
                                      (await (function (e) {
                                          function t() {
                                              return (0, l.Rd)(u.default.getCurrentUser(), e);
                                          }
                                          return t()
                                              ? Promise.resolve(!0)
                                              : new Promise((e) => {
                                                    function n() {
                                                        t() &&
                                                            (clearTimeout(r), u.default.removeChangeListener(n), e(!0));
                                                    }
                                                    let r = setTimeout(() => {
                                                        (u.default.removeChangeListener(n), e(!1));
                                                    }, d);
                                                    u.default.addChangeListener(n);
                                                });
                                      })(e)) || c.warn(`Timed out waiting for the Hexagon campaign ${e} perk to sync`),
                                      !0
                                  );
                              })(e);
                          } finally {
                              f = null;
                          }
                      })(e)),
                  f);
        },
        VN: function (e) {
            a.h.dispatch({ type: "HEXAGON_CAMPAIGN_PERK_APPLIED", perk: e });
        },
        WT: function () {
            let e = u.default.getCurrentUser()?.displayNameStyles ?? null;
            (0, l.Jy)(e) || h({ displayNameStyles: e });
        },
        fv: h,
    },
);
