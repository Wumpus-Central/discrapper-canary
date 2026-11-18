var l = n(614050),
    i = n(604913),
    r = n(324157),
    a = n(808598),
    s = n(248180),
    o = n(792996);
n.d(
    t,
    {},
    {
        o: function (e) {
            let { block: t, promotion: n, locale: u, orbsBack: c, now: d = Date.now() } = e;
            if (null != n.endsAt && n.endsAt.getTime() <= d) return null;
            let m = n.tenantMetadata?.collectibles,
                p = (0, r.FV)(t.label, {
                    locale: u,
                    endsAt: n.endsAt,
                    redemptionEndsAt: n.redemptionEndsAt,
                    promotionDisplayName: n.displayName,
                    position: m?.type === i.hE.COLLECTION_SEQUENCED_OFFER ? m.position : null,
                    discountPercent: (0, s.G)(n),
                    orbsBack: c,
                });
            return null == p
                ? null
                : {
                      label: p,
                      countdown: (function (e, t, n) {
                          switch (e) {
                              case l.c.HOURS: {
                                  let e = (0, a.p)(t, n);
                                  return null != e ? o.intl.formatToPlainString(o.t["anAI9+"], { hours: e }) : null;
                              }
                              case l.c.DAYS: {
                                  let e = (0, a.X)(t, n);
                                  return null != e ? o.intl.formatToPlainString(o.t.w4GEvw, { days: e }) : null;
                              }
                              case l.c.NONE:
                              default:
                                  return null;
                          }
                      })(t.countdownUnit, n.endsAt, new Date(d)),
                  };
        },
    },
);
