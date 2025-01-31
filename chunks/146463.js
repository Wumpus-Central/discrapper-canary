n.d(t, { Z: () => I });
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
    _ = n(693546),
    x = n(826581),
    f = n(246364),
    h = n(328977),
    p = n(571728),
    b = n(762660),
    g = n(388032),
    C = n(372819);
let v = () => null;
function j(e) {
    let { status: t } = e,
        n = g.intl.string(g.t['/wqiSk']),
        i = g.intl.string(g.t.o47YZm);
    switch (t) {
        case f.wB.REJECTED:
            (n = g.intl.string(g.t['7YSJ6e'])), (i = g.intl.string(g.t.i05OUV));
            break;
        case f.wB.APPROVED:
            (n = g.intl.string(g.t.bv82GR)), (i = g.intl.string(g.t.D4OUHR));
            break;
        default:
            (n = g.intl.string(g.t['/wqiSk'])), (i = g.intl.string(g.t.o47YZm));
    }
    return (0, a.jsxs)('div', {
        className: C.emptyContainer,
        children: [
            (0, a.jsxs)('div', {
                className: C.emptyIcon,
                children: [
                    (0, a.jsx)(m.Z, { className: C.star }),
                    (0, a.jsx)(s.dz2, {
                        size: 'md',
                        color: 'currentColor',
                        className: C.checkmark
                    }),
                    (0, a.jsx)(u.Z, { className: C.plus })
                ]
            }),
            (0, a.jsx)(s.X6q, {
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, a.jsx)(s.Text, {
                color: 'header-secondary',
                className: C.emptyBody,
                variant: 'text-sm/normal',
                children: i
            })
        ]
    });
}
let I = function (e) {
    var t;
    let { applicationStatus: n, guildJoinRequests: i, guildId: u, onScroll: m, listRef: I, atMaxMemberCapacity: T } = e,
        R = (0, o.e7)([d.Z], () => d.Z.getGuild(u), [u]),
        E = (0, o.e7)([x.Z], () => x.Z.isFetching()),
        P = E ? [i.length + 25] : [i.length],
        w = (0, h.L)({ guildId: u }),
        N = null !== (t = (0, p.A)({ guildId: u })) && void 0 !== t ? t : 0,
        S = (0, c.Z)('guild-join-requests'),
        A = (e) => {
            let { row: t } = e,
                l = i[t];
            return null == l
                ? (0, a.jsx)(b.h, {}, t)
                : (0, a.jsx)(
                      b.C,
                      {
                          className: r()({
                              [C.selected]: w === l,
                              [C.siblingSelected]: w === i[t - 1]
                          }),
                          guild: R,
                          guildJoinRequest: l,
                          onClick: () => _.Z.setSelectedGuildJoinRequest(u, l),
                          applicationStatus: n,
                          atMaxMemberCapacity: T
                      },
                      ''.concat(l.userId, '-').concat(l.applicationStatus, '-').concat(t)
                  );
        };
    return E || 0 !== i.length
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  0 !== N &&
                      n === f.wB.SUBMITTED &&
                      (0, a.jsx)(s.Text, {
                          className: C.title,
                          variant: 'text-xs/semibold',
                          color: 'header-secondary',
                          children: (function (e, t) {
                              let n = t.toLocaleString();
                              switch (e) {
                                  case f.wB.SUBMITTED:
                                      return g.intl.formatToPlainString(g.t['s/46en'], { count: n });
                                  case f.wB.REJECTED:
                                      return g.intl.formatToPlainString(g.t['9voQIC'], { count: n });
                                  case f.wB.APPROVED:
                                      return g.intl.formatToPlainString(g.t['8hLZsb'], { count: n });
                                  default:
                                      return '';
                              }
                          })(n, N).toUpperCase()
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
                                      innerAriaLabel: g.intl.string(g.t['9Oq93t']),
                                      ref: (e) => {
                                          var n;
                                          (I.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                                      },
                                      paddingTop: 0,
                                      paddingBottom: 16,
                                      sectionHeight: 0,
                                      rowHeight: 64,
                                      renderSection: v,
                                      renderRow: A,
                                      sections: P,
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
        : (0, a.jsx)(j, { status: n });
};
