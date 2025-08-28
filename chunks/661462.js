t.d(n, { Z: () => b }), t(388685);
var r = t(951288),
    l = t(647438),
    o = t(120356),
    i = t.n(o),
    c = t(481060),
    s = t(785717),
    a = t(128156),
    d = t(311044),
    u = t(408986),
    f = t(778414),
    m = t(228168),
    p = t(883101);
function h(e) {
    let {
        user: n,
        currentUser: t,
        section: l,
        subsection: o,
        displayProfile: i,
        guildId: c,
        channelId: s,
        onClose: p,
    } = e;
    return l === m.oh.ACTIVITY
        ? (0, r.jsx)(a.Z, {
              user: n,
              currentUser: t,
              displayProfile: i,
              guildId: c,
              channelId: s,
              subsection: o,
              onClose: p,
          })
        : l === m.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(d.Z, {
                user: n,
                guildId: c,
                channelId: s,
                onClose: p,
            })
          : l === m.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(u.Z, {
                  user: n,
                  onClose: p,
              })
            : l === m.oh.WIDGETS
              ? (0, r.jsx)(f.C, {
                    user: n,
                    guildId: c,
                    channelId: s,
                })
              : null;
}
function b(e) {
    var n, t, o;
    let {
            user: a,
            currentUser: d,
            displayProfile: u,
            guildId: f,
            channelId: b,
            items: x,
            initialSection: j,
            initialSubsection: g,
            onClose: v,
        } = e,
        { trackUserProfileAction: y } = (0, s.KZ)(),
        [{ section: O, subsection: I, text: _ }, Z] = l.useState(
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
                    (n = x.find((e) => {
                        let { section: n } = e;
                        return n === j;
                    }))
                    ? n
                    : x[0],
            )),
            (o = o = { subsection: g }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, r);
                      }
                      return t;
                  })(Object(o)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                  }),
            t),
        );
    return (0, r.jsxs)("div", {
        className: p.container,
        children: [
            (0, r.jsx)(c.Ttm, {
                orientation: "horizontal",
                className: p.scroller,
                fade: !0,
                paddingFix: !1,
                children: (0, r.jsx)(c.njP, {
                    type: "top",
                    look: "custom",
                    selectedItem: O,
                    onItemSelect: (e) => {
                        y({
                            action: "PRESS_SECTION",
                            section: e,
                        }),
                            Z((n) => {
                                var t;
                                return null != (t = x.find((n) => n.section === e)) ? t : n;
                            });
                    },
                    children: x.map((e) =>
                        (0, r.jsx)(
                            c.njP.Item,
                            {
                                className: p.tabBarItem,
                                id: e.section,
                                "aria-label": e.text,
                                children: e.text,
                            },
                            e.section,
                        ),
                    ),
                }),
            }),
            (0, r.jsx)(c.njP.Panel, {
                id: O,
                "aria-label": _,
                className: i()(p.tabBarPanel, { [p.noGutter]: O !== m.oh.WIDGETS }),
                children: (0, r.jsx)(h, {
                    user: a,
                    currentUser: d,
                    displayProfile: u,
                    guildId: f,
                    channelId: b,
                    section: O,
                    subsection: I,
                    onClose: v,
                }),
            }),
        ],
    });
}
