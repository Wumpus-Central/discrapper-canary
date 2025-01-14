n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    o = n(481060),
    s = n(139387),
    c = n(835473),
    d = n(471445),
    u = n(925329),
    m = n(163400),
    h = n(466070),
    p = n(981631),
    g = n(388032),
    x = n(926870);
function f(e) {
    let { applicationId: t, channels: n } = e,
        l = (0, c.q)(t);
    return 0 === n.length || null == l
        ? null
        : (0, i.jsxs)('div', {
              className: x.applicationGroup,
              children: [
                  (0, i.jsxs)('div', {
                      className: x.header,
                      children: [
                          (0, i.jsx)(u.Z, {
                              game: l,
                              size: u.Z.Sizes.XSMALL
                          }),
                          (0, i.jsx)(o.Heading, {
                              variant: 'heading-md/semibold',
                              children: null == l ? void 0 : l.name
                          })
                      ]
                  }),
                  n.map((e) => {
                      var t;
                      return (0, i.jsx)(
                          h.t,
                          {
                              channel: e,
                              application: l,
                              name: e.name,
                              icon: null !== (t = (0, d.KS)(e)) && void 0 !== t ? t : void 0,
                              iconWrapperClassName: x.iconwrapper,
                              hasNextSection: !0,
                              trailing: (0, i.jsx)(o.PencilIcon, { size: 'xs' })
                          },
                          e.id
                      );
                  })
              ]
          });
}
function b(e) {
    let { guild: t } = e,
        n = (0, m.F)(t.id),
        r = a().groupBy(n, (e) => {
            var t;
            return null === (t = e.linkedLobby) || void 0 === t ? void 0 : t.application_id;
        }),
        c = Object.keys(r);
    return (
        l.useEffect(() => {
            0 === n.length && s.Z.setSection(p.b4C.OVERVIEW);
        }, [n]),
        (0, i.jsxs)(o.FormSection, {
            children: [
                (0, i.jsx)(o.FormText, {
                    type: o.FormTextTypes.DESCRIPTION,
                    children: g.intl.format(g.t['9gsSLi'], { helpdeskArticle: '#' })
                }),
                (0, i.jsx)(o.FormDivider, { className: x.headerDivider }),
                c.map((e) =>
                    (0, i.jsx)(
                        f,
                        {
                            applicationId: e,
                            channels: r[e]
                        },
                        e
                    )
                )
            ]
        })
    );
}
