n.d(t, { Z: () => p }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(481060),
    o = n(785717),
    a = n(128156),
    c = n(311044),
    s = n(408986),
    d = n(778414),
    u = n(228168),
    f = n(662776);
function m(e) {
    let {
        user: t,
        currentUser: n,
        section: l,
        subsection: i,
        displayProfile: o,
        guildId: f,
        channelId: m,
        onClose: p,
    } = e;
    return l === u.oh.ACTIVITY
        ? (0, r.jsx)(a.Z, {
              user: t,
              currentUser: n,
              displayProfile: o,
              guildId: f,
              channelId: m,
              subsection: i,
              onClose: p,
          })
        : l === u.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(c.Z, {
                user: t,
                guildId: f,
                channelId: m,
                onClose: p,
            })
          : l === u.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(s.Z, {
                  user: t,
                  onClose: p,
              })
            : l === u.oh.WIDGETS
              ? (0, r.jsx)(d.Z, {
                    user: t,
                    guildId: f,
                    channelId: m,
                })
              : null;
}
function p(e) {
    var t, n, a;
    let {
            user: c,
            currentUser: s,
            displayProfile: d,
            guildId: u,
            channelId: p,
            items: g,
            initialSection: b,
            initialSubsection: j,
            onClose: h,
        } = e,
        { trackUserProfileAction: x } = (0, o.KZ)(),
        [{ section: y, subsection: v, text: O }, I] = l.useState(
            ((n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {},
                null !=
                    (t = g.find((e) => {
                        let { section: t } = e;
                        return t === b;
                    }))
                    ? t
                    : g[0],
            )),
            (a = a = { subsection: j }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            n),
        );
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsx)(i.Ttm, {
                orientation: "horizontal",
                className: f.scroller,
                fade: !0,
                paddingFix: !1,
                children: (0, r.jsx)(i.njP, {
                    type: "top",
                    look: "custom",
                    selectedItem: y,
                    onItemSelect: (e) => {
                        x({
                            action: "PRESS_SECTION",
                            section: e,
                        }),
                            I((t) => {
                                var n;
                                return null != (n = g.find((t) => t.section === e)) ? n : t;
                            });
                    },
                    children: g.map((e) =>
                        (0, r.jsx)(
                            i.njP.Item,
                            {
                                className: f.tabBarItem,
                                id: e.section,
                                "aria-label": e.text,
                                children: e.text,
                            },
                            e.section,
                        ),
                    ),
                }),
            }),
            (0, r.jsx)(i.njP.Panel, {
                id: y,
                "aria-label": O,
                className: f.tabBarPanel,
                children: (0, r.jsx)(m, {
                    user: c,
                    currentUser: s,
                    displayProfile: d,
                    guildId: u,
                    channelId: p,
                    section: y,
                    subsection: v,
                    onClose: h,
                }),
            }),
        ],
    });
}
