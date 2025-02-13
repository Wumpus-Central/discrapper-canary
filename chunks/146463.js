n.d(t, { Z: () => T });
var a = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    l = n(91192),
    o = n(442837),
    s = n(481060),
    c = n(209613),
    d = n(430824),
    u = n(855981),
    m = n(55543),
    x = n(693546),
    h = n(826581),
    _ = n(246364),
    p = n(328977),
    f = n(571728),
    C = n(762660),
    j = n(388032),
    v = n(251907);
let b = () => null;
function g(e) {
    let { status: t } = e,
        n = j.intl.string(j.t['/wqiSk']),
        i = j.intl.string(j.t.o47YZm);
    switch (t) {
        case _.wB.REJECTED:
            (n = j.intl.string(j.t['7YSJ6e'])), (i = j.intl.string(j.t.i05OUV));
            break;
        case _.wB.APPROVED:
            (n = j.intl.string(j.t.bv82GR)), (i = j.intl.string(j.t.D4OUHR));
            break;
        default:
            (n = j.intl.string(j.t['/wqiSk'])), (i = j.intl.string(j.t.o47YZm));
    }
    return (0, a.jsxs)('div', {
        className: v.emptyContainer,
        children: [
            (0, a.jsxs)('div', {
                className: v.emptyIcon,
                children: [
                    (0, a.jsx)(m.Z, { className: v.star }),
                    (0, a.jsx)(s.dz2, {
                        size: 'md',
                        color: 'currentColor',
                        className: v.checkmark
                    }),
                    (0, a.jsx)(u.Z, { className: v.plus })
                ]
            }),
            (0, a.jsx)(s.X6q, {
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, a.jsx)(s.Text, {
                color: 'header-secondary',
                className: v.emptyBody,
                variant: 'text-sm/normal',
                children: i
            })
        ]
    });
}
let T = function (e) {
    var t;
    let { applicationStatus: n, guildJoinRequests: i, guildId: u, onScroll: m, listRef: T, atMaxMemberCapacity: I } = e,
        R = (0, o.e7)([d.Z], () => d.Z.getGuild(u), [u]),
        N = (0, o.e7)([h.Z], () => h.Z.isFetching()),
        E = N ? [i.length + 25] : [i.length],
        w = (0, p.L)({ guildId: u }),
        B = null !== (t = (0, f.A)({ guildId: u })) && void 0 !== t ? t : 0,
        S = (0, c.Z)('guild-join-requests'),
        P = (e) => {
            let { row: t } = e,
                l = i[t];
            return null == l
                ? (0, a.jsx)(C.h, {}, t)
                : (0, a.jsx)(
                      C.C,
                      {
                          className: r()({
                              [v.selected]: w === l,
                              [v.siblingSelected]: w === i[t - 1]
                          }),
                          guild: R,
                          guildJoinRequest: l,
                          onClick: () => x.Z.setSelectedGuildJoinRequest(u, l),
                          applicationStatus: n,
                          atMaxMemberCapacity: I
                      },
                      ''.concat(l.userId, '-').concat(l.applicationStatus, '-').concat(t)
                  );
        };
    return N || 0 !== i.length
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  0 !== B &&
                      n === _.wB.SUBMITTED &&
                      (0, a.jsx)(s.Text, {
                          className: v.title,
                          variant: 'text-xs/semibold',
                          color: 'header-secondary',
                          children: (function (e, t) {
                              let n = t.toLocaleString();
                              switch (e) {
                                  case _.wB.SUBMITTED:
                                      return j.intl.formatToPlainString(j.t['s/46en'], { count: n });
                                  case _.wB.REJECTED:
                                      return j.intl.formatToPlainString(j.t['9voQIC'], { count: n });
                                  case _.wB.APPROVED:
                                      return j.intl.formatToPlainString(j.t['8hLZsb'], { count: n });
                                  default:
                                      return '';
                              }
                          })(n, B).toUpperCase()
                      }),
                  (0, a.jsx)(l.bG, {
                      navigator: S,
                      children: (0, a.jsx)(l.SJ, {
                          children: (e) => {
                              let { ref: t, role: n, ...i } = e;
                              return (0, a.jsx)(
                                  s.aVo,
                                  {
                                      innerRole: n,
                                      innerAriaLabel: j.intl.string(j.t['9Oq93t']),
                                      ref: (e) => {
                                          var n;
                                          (T.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                                      },
                                      paddingTop: 0,
                                      paddingBottom: 16,
                                      sectionHeight: 0,
                                      rowHeight: 64,
                                      renderSection: b,
                                      renderRow: P,
                                      sections: E,
                                      onScroll: m,
                                      fade: !0,
                                      ...i
                                  },
                                  'guild-application-review'
                              );
                          }
                      })
                  })
              ]
          })
        : (0, a.jsx)(g, { status: n });
};
