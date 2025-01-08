var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    o = n(91192),
    l = n(442837),
    c = n(481060),
    s = n(209613),
    d = n(430824),
    u = n(855981),
    m = n(55543),
    f = n(693546),
    x = n(826581),
    b = n(246364),
    h = n(328977),
    p = n(571728),
    C = n(762660),
    _ = n(388032),
    g = n(372819);
let v = () => null;
function j(e) {
    let { status: t } = e,
        n = _.intl.string(_.t['/wqiSk']),
        r = _.intl.string(_.t.o47YZm);
    switch (t) {
        case b.wB.REJECTED:
            (n = _.intl.string(_.t['7YSJ6e'])), (r = _.intl.string(_.t.i05OUV));
            break;
        case b.wB.APPROVED:
            (n = _.intl.string(_.t.bv82GR)), (r = _.intl.string(_.t.D4OUHR));
            break;
        default:
            (n = _.intl.string(_.t['/wqiSk'])), (r = _.intl.string(_.t.o47YZm));
    }
    return (0, i.jsxs)('div', {
        className: g.emptyContainer,
        children: [
            (0, i.jsxs)('div', {
                className: g.emptyIcon,
                children: [
                    (0, i.jsx)(m.Z, { className: g.star }),
                    (0, i.jsx)(c.CheckmarkLargeIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.checkmark
                    }),
                    (0, i.jsx)(u.Z, { className: g.plus })
                ]
            }),
            (0, i.jsx)(c.Heading, {
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, i.jsx)(c.Text, {
                color: 'header-secondary',
                className: g.emptyBody,
                variant: 'text-sm/normal',
                children: r
            })
        ]
    });
}
t.Z = function (e) {
    var t;
    let { applicationStatus: n, guildJoinRequests: r, guildId: u, onScroll: m, listRef: I, atMaxMemberCapacity: T } = e,
        R = (0, l.e7)([d.Z], () => d.Z.getGuild(u), [u]),
        E = (0, l.e7)([x.Z], () => x.Z.isFetching()),
        S = E ? [r.length + 25] : [r.length],
        A = (0, h.L)({ guildId: u }),
        w = null !== (t = (0, p.A)({ guildId: u })) && void 0 !== t ? t : 0,
        N = (0, s.Z)('guild-join-requests'),
        P = (e) => {
            let { row: t } = e,
                o = r[t];
            return null == o
                ? (0, i.jsx)(C.h, {}, t)
                : (0, i.jsx)(
                      C.C,
                      {
                          className: a()({
                              [g.selected]: A === o,
                              [g.siblingSelected]: A === r[t - 1]
                          }),
                          guild: R,
                          guildJoinRequest: o,
                          onClick: () => f.Z.setSelectedGuildJoinRequest(u, o),
                          applicationStatus: n,
                          atMaxMemberCapacity: T
                      },
                      ''.concat(o.userId, '-').concat(o.applicationStatus, '-').concat(t)
                  );
        };
    return E || 0 !== r.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  0 !== w &&
                      n === b.wB.SUBMITTED &&
                      (0, i.jsx)(c.Text, {
                          className: g.title,
                          variant: 'text-xs/semibold',
                          color: 'header-secondary',
                          children: (function (e, t) {
                              let n = t.toLocaleString();
                              switch (e) {
                                  case b.wB.SUBMITTED:
                                      return _.intl.formatToPlainString(_.t['s/46en'], { count: n });
                                  case b.wB.REJECTED:
                                      return _.intl.formatToPlainString(_.t['9voQIC'], { count: n });
                                  case b.wB.APPROVED:
                                      return _.intl.formatToPlainString(_.t['8hLZsb'], { count: n });
                                  default:
                                      return '';
                              }
                          })(n, w).toUpperCase()
                      }),
                  (0, i.jsx)(o.bG, {
                      navigator: N,
                      children: (0, i.jsx)(o.SJ, {
                          children: (e) => {
                              let { ref: t, role: n, ...r } = e;
                              return (0, i.jsx)(
                                  c.List,
                                  {
                                      innerRole: n,
                                      innerAriaLabel: _.intl.string(_.t['9Oq93t']),
                                      ref: (e) => {
                                          var n;
                                          (I.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                                      },
                                      paddingTop: 0,
                                      paddingBottom: 16,
                                      sectionHeight: 0,
                                      rowHeight: 64,
                                      renderSection: v,
                                      renderRow: P,
                                      sections: S,
                                      onScroll: m,
                                      fade: !0,
                                      ...r
                                  },
                                  'guild-application-review'
                              );
                          }
                      })
                  })
              ]
          })
        : (0, i.jsx)(j, { status: n });
};
