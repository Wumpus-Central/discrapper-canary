"use strict";
n.d(t, { R: () => s });
var i = n(627968);
n(64700);
var l = n(720462),
    a = n(183802),
    r = n(695314);
function s(e) {
    let { applicationId: t, skuIds: n, guildId: s, analyticsLocations: c, onCardClick: o } = e;
    return null == n || 0 === n.length
        ? null
        : (0, i.jsx)(l.A, {
              gap: "md",
              children: n.map((e, n) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: r.B,
                          children: (0, i.jsx)(a.A, {
                              positionInSection: n,
                              applicationId: t,
                              skuId: e,
                              variant: a.s.SMALL,
                              guildId: s,
                              analyticsLocations: c,
                              onClick:
                                  null != o
                                      ? (t) => {
                                            t.preventDefault(), o(e);
                                        }
                                      : void 0,
                          }),
                      },
                      `${e}-${n}`,
                  ),
              ),
          });
}
