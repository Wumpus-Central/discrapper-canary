s.d(t, { RiotCreditRewardModal: () => g, W: () => p });
var i = s(477900),
    n = s(189213),
    a = s(192308),
    l = s(174459),
    r = s(975571);
s(852218);
var c = s(116011),
    o = s(280761),
    d = s(652215),
    u = s(310235),
    m = s(287388),
    x = s(375708);
function g(e) {
    let { transitionState: t, onClose: s } = e,
        a = (0, o.U)(),
        l =
            null != a
                ? null == a.startsAt || null == a.endsAt
                    ? null
                    : {
                          id: a.id,
                          partnerId: "riot",
                          title: x.intl.string(m.default.zCdMTs),
                          outboundTitle: x.intl.string(m.default.zCdMTs),
                          body: x.intl.formatToPlainString(m.default["8VH2lL"], {
                              termsUrl: r.A.getArticleURL(d.MVz.RIOT_CREDIT_CAMPAIGN),
                          }),
                          startDate: a.startsAt,
                          endDate: a.endsAt,
                          redemptionURL: "",
                          code: null,
                      }
                : null;
    return null == l
        ? null
        : (0, i.jsx)(n.a, {
              title: x.intl.string(m.default.r97mLn),
              subtitle: x.intl.formatToPlainString(u.default.ieA3V0, {
                  termsUrl: r.A.getArticleURL(d.MVz.RIOT_CREDIT_CAMPAIGN),
              }),
              actions: [],
              transitionState: t,
              onClose: s,
              children: (0, i.jsx)(c.wx, { recurrence: l, claimButtonPlacement: c.u5.FOOTER }),
          });
}
function p(e) {
    let { analyticsLocations: t } = e;
    (l.default.track(d.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_id: "riot", location_stack: t }),
        (0, a.openModalLazy)(async () => {
            let { RiotCreditRewardModal: e } = await Promise.resolve().then(s.bind(s, 45420));
            return (t) => (0, i.jsx)(e, { ...t });
        }));
}
