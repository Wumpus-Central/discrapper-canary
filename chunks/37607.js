n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(481060),
    s = n(139387),
    c = n(835473),
    d = n(471445),
    u = n(925329),
    p = n(163400),
    m = n(63063),
    b = n(466070),
    g = n(981631),
    f = n(388032),
    h = n(5692);
function x(e) {
    let { applicationId: t, channels: n } = e,
        i = (0, c.q)(t);
    return 0 === n.length || null == i
        ? null
        : (0, r.jsxs)('div', {
              className: h.applicationGroup,
              children: [
                  (0, r.jsxs)('div', {
                      className: h.header,
                      children: [
                          (0, r.jsx)(u.Z, {
                              game: i,
                              size: u.Z.Sizes.XSMALL
                          }),
                          (0, r.jsx)(a.X6q, {
                              variant: 'heading-md/semibold',
                              children: null == i ? void 0 : i.name
                          })
                      ]
                  }),
                  n.map((e) => {
                      var t;
                      return (0, r.jsx)(
                          b.t,
                          {
                              channel: e,
                              application: i,
                              name: e.name,
                              icon: null != (t = (0, d.KS)(e)) ? t : void 0,
                              iconWrapperClassName: h.iconwrapper,
                              hasNextSection: !0,
                              trailing: (0, r.jsx)(a.vdY, { size: 'xs' })
                          },
                          e.id
                      );
                  })
              ]
          });
}
function j(e) {
    let { guild: t } = e,
        n = (0, p.F)(t.id),
        l = o().groupBy(n, (e) => {
            var t;
            return null == (t = e.linkedLobby) ? void 0 : t.application_id;
        }),
        c = Object.keys(l);
    return (
        i.useEffect(() => {
            0 === n.length && s.Z.setSection(g.b4C.OVERVIEW);
        }, [n]),
        (0, r.jsxs)(a.hjN, {
            children: [
                (0, r.jsx)(a.R94, {
                    type: a.geA.DESCRIPTION,
                    children: f.NW.format(f.t['9gsSLi'], { helpdeskArticle: m.Z.getArticleURL(g.BhN.LINKED_LOBBIES) })
                }),
                (0, r.jsx)(a.$i$, { className: h.headerDivider }),
                c.map((e) =>
                    (0, r.jsx)(
                        x,
                        {
                            applicationId: e,
                            channels: l[e]
                        },
                        e
                    )
                )
            ]
        })
    );
}
