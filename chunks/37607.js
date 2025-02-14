n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
    s = n(481060),
    o = n(139387),
    d = n(835473),
    c = n(471445),
    u = n(925329),
    m = n(163400),
    h = n(63063),
    x = n(466070),
    g = n(981631),
    p = n(388032),
    f = n(250084);
function b(e) {
    let { applicationId: t, channels: n } = e,
        l = (0, d.q)(t);
    return 0 === n.length || null == l
        ? null
        : (0, i.jsxs)('div', {
              className: f.applicationGroup,
              children: [
                  (0, i.jsxs)('div', {
                      className: f.header,
                      children: [
                          (0, i.jsx)(u.Z, {
                              game: l,
                              size: u.Z.Sizes.XSMALL
                          }),
                          (0, i.jsx)(s.X6q, {
                              variant: 'heading-md/semibold',
                              children: null == l ? void 0 : l.name
                          })
                      ]
                  }),
                  n.map((e) => {
                      var t;
                      return (0, i.jsx)(
                          x.t,
                          {
                              channel: e,
                              application: l,
                              name: e.name,
                              icon: null !== (t = (0, c.KS)(e)) && void 0 !== t ? t : void 0,
                              iconWrapperClassName: f.iconwrapper,
                              hasNextSection: !0,
                              trailing: (0, i.jsx)(s.vdY, { size: 'xs' })
                          },
                          e.id
                      );
                  })
              ]
          });
}
function v(e) {
    let { guild: t } = e,
        n = (0, m.F)(t.id),
        a = r().groupBy(n, (e) => {
            var t;
            return null === (t = e.linkedLobby) || void 0 === t ? void 0 : t.application_id;
        }),
        d = Object.keys(a);
    return (
        l.useEffect(() => {
            0 === n.length && o.Z.setSection(g.b4C.OVERVIEW);
        }, [n]),
        (0, i.jsxs)(s.hjN, {
            children: [
                (0, i.jsx)(s.R94, {
                    type: s.geA.DESCRIPTION,
                    children: p.intl.format(p.t['9gsSLi'], { helpdeskArticle: h.Z.getArticleURL(g.BhN.LINKED_LOBBIES) })
                }),
                (0, i.jsx)(s.$i$, { className: f.headerDivider }),
                d.map((e) =>
                    (0, i.jsx)(
                        b,
                        {
                            applicationId: e,
                            channels: a[e]
                        },
                        e
                    )
                )
            ]
        })
    );
}
