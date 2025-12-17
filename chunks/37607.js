n.d(t, { Z: () => j });
var i = n(54381),
    r = n(473749),
    l = n(392711),
    a = n.n(l),
    o = n(481060),
    s = n(139387),
    c = n(835473),
    d = n(471445),
    u = n(925329),
    m = n(163400),
    b = n(63063),
    p = n(466070),
    g = n(981631),
    f = n(388032),
    h = n(389968);
function x(e) {
    let { applicationId: t, channels: n } = e,
        r = (0, c.q)(t);
    return 0 === n.length || null == r
        ? null
        : (0, i.jsxs)("div", {
              className: h.applicationGroup,
              children: [
                  (0, i.jsxs)("div", {
                      className: h.header,
                      children: [
                          (0, i.jsx)(u.Z, {
                              game: r,
                              size: u.A.XSMALL,
                          }),
                          (0, i.jsx)(o.Heading, {
                              variant: "heading-md/semibold",
                              children: null == r ? void 0 : r.name,
                          }),
                      ],
                  }),
                  n.map((e) => {
                      var t;
                      return (0, i.jsx)(
                          p.t,
                          {
                              channel: e,
                              application: r,
                              name: e.name,
                              icon: null != (t = (0, d.KS)(e)) ? t : void 0,
                              iconWrapperClassName: h.iconwrapper,
                              hasNextSection: !0,
                              trailing: (0, i.jsx)(o.vdY, { size: "xs" }),
                          },
                          e.id,
                      );
                  }),
              ],
          });
}
function j(e) {
    let { guild: t } = e,
        n = (0, m.F)(t.id),
        l = a().groupBy(n, (e) => {
            var t;
            return null == (t = e.linkedLobby) ? void 0 : t.application_id;
        }),
        c = Object.keys(l);
    return (
        r.useEffect(() => {
            0 === n.length && s.Z.setSection(g.b4C.OVERVIEW);
        }, [n]),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: f.intl.format(f.t["9gsSLu"], {
                        helpdeskArticle: b.Z.getArticleURL(g.BhN.LINKED_LOBBIES),
                    }),
                }),
                (0, i.jsx)(o.izJ, { className: h.headerDivider }),
                c.map((e) =>
                    (0, i.jsx)(
                        x,
                        {
                            applicationId: e,
                            channels: l[e],
                        },
                        e,
                    ),
                ),
            ],
        })
    );
}
