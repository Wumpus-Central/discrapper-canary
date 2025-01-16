n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    o = n(481060),
    s = n(139387),
    d = n(835473),
    c = n(471445),
    u = n(925329),
    m = n(163400),
    h = n(63063),
    p = n(466070),
    g = n(981631),
    x = n(388032),
    f = n(926870);
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
                          (0, i.jsx)(o.Heading, {
                              variant: 'heading-md/semibold',
                              children: null == l ? void 0 : l.name
                          })
                      ]
                  }),
                  n.map((e) => {
                      var t;
                      return (0, i.jsx)(
                          p.t,
                          {
                              channel: e,
                              application: l,
                              name: e.name,
                              icon: null !== (t = (0, c.KS)(e)) && void 0 !== t ? t : void 0,
                              iconWrapperClassName: f.iconwrapper,
                              hasNextSection: !0,
                              trailing: (0, i.jsx)(o.PencilIcon, { size: 'xs' })
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
        r = a().groupBy(n, (e) => {
            var t;
            return null === (t = e.linkedLobby) || void 0 === t ? void 0 : t.application_id;
        }),
        d = Object.keys(r);
    return (
        l.useEffect(() => {
            0 === n.length && s.Z.setSection(g.b4C.OVERVIEW);
        }, [n]),
        (0, i.jsxs)(o.FormSection, {
            children: [
                (0, i.jsx)(o.FormText, {
                    type: o.FormTextTypes.DESCRIPTION,
                    children: x.intl.format(x.t['9gsSLi'], { helpdeskArticle: h.Z.getArticleURL(g.BhN.LINKED_LOBBIES) })
                }),
                (0, i.jsx)(o.FormDivider, { className: f.headerDivider }),
                d.map((e) =>
                    (0, i.jsx)(
                        b,
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
