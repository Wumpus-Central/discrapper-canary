t.d(n, { Z: () => p }), t(388685);
var r = t(951288),
    l = t(647438),
    o = t(481060),
    i = t(785717),
    c = t(128156),
    s = t(311044),
    a = t(408986),
    d = t(778414),
    u = t(228168),
    f = t(883101);
function m(e) {
    let {
        user: n,
        currentUser: t,
        section: l,
        subsection: o,
        displayProfile: i,
        guildId: f,
        channelId: m,
        onClose: p,
    } = e;
    return l === u.oh.ACTIVITY
        ? (0, r.jsx)(c.Z, {
              user: n,
              currentUser: t,
              displayProfile: i,
              guildId: f,
              channelId: m,
              subsection: o,
              onClose: p,
          })
        : l === u.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(s.Z, {
                user: n,
                guildId: f,
                channelId: m,
                onClose: p,
            })
          : l === u.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(a.Z, {
                  user: n,
                  onClose: p,
              })
            : l === u.oh.WIDGETS
              ? (0, r.jsx)(d.C, {
                    user: n,
                    guildId: f,
                    channelId: m,
                })
              : null;
}
function p(e) {
    var n, t, c;
    let {
            user: s,
            currentUser: a,
            displayProfile: d,
            guildId: u,
            channelId: p,
            items: h,
            initialSection: x,
            initialSubsection: b,
            onClose: j,
        } = e,
        { trackUserProfileAction: g } = (0, i.KZ)(),
        [{ section: v, subsection: y, text: O }, I] = l.useState(
            ((t = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        r.forEach(function (n) {
                            var r;
                            (r = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = r);
                        });
                }
                return e;
            })(
                {},
                null !=
                    (n = h.find((e) => {
                        let { section: n } = e;
                        return n === x;
                    }))
                    ? n
                    : h[0],
            )),
            (c = c = { subsection: b }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(c))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, r);
                      }
                      return t;
                  })(Object(c)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(c, e));
                  }),
            t),
        );
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsx)(o.Ttm, {
                orientation: "horizontal",
                className: f.scroller,
                fade: !0,
                paddingFix: !1,
                children: (0, r.jsx)(o.njP, {
                    type: "top",
                    look: "custom",
                    selectedItem: v,
                    onItemSelect: (e) => {
                        g({
                            action: "PRESS_SECTION",
                            section: e,
                        }),
                            I((n) => {
                                var t;
                                return null != (t = h.find((n) => n.section === e)) ? t : n;
                            });
                    },
                    children: h.map((e) =>
                        (0, r.jsx)(
                            o.njP.Item,
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
            (0, r.jsx)(o.njP.Panel, {
                id: v,
                "aria-label": O,
                className: f.tabBarPanel,
                children: (0, r.jsx)(m, {
                    user: s,
                    currentUser: a,
                    displayProfile: d,
                    guildId: u,
                    channelId: p,
                    section: v,
                    subsection: y,
                    onClose: j,
                }),
            }),
        ],
    });
}
