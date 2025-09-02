n.d(t, {
    F: () => O,
    Z: () => y,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    c = n(785717),
    s = n(128156),
    u = n(311044),
    d = n(408986),
    f = n(778414),
    g = n(228168),
    b = n(883101);
function p(e) {
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
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    var { children: t, className: n, scrollerRef: i } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["children", "className", "scrollerRef"]);
    return (0, r.jsx)(
        o.Ttm,
        m(
            p(
                {
                    ref: i,
                    className: a()(b.tabPanelScroller, n),
                    fade: !0,
                },
                l,
            ),
            { children: t },
        ),
    );
}
function j(e) {
    let {
        user: t,
        currentUser: n,
        section: i,
        subsection: l,
        displayProfile: a,
        guildId: o,
        channelId: c,
        onClose: b,
    } = e;
    return i === g.oh.ACTIVITY
        ? (0, r.jsx)(s.Z, {
              user: t,
              currentUser: n,
              displayProfile: a,
              guildId: o,
              channelId: c,
              subsection: l,
              onClose: b,
          })
        : i === g.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(u.Z, {
                user: t,
                guildId: o,
                channelId: c,
                onClose: b,
            })
          : i === g.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(d.Z, {
                  user: t,
                  onClose: b,
              })
            : i === g.oh.WIDGETS
              ? (0, r.jsx)(f.C, {
                    user: t,
                    guildId: o,
                    channelId: c,
                })
              : null;
}
function y(e) {
    var t;
    let {
            user: n,
            currentUser: l,
            displayProfile: a,
            guildId: s,
            channelId: u,
            items: d,
            initialSection: f,
            initialSubsection: g,
            onClose: O,
        } = e,
        { trackUserProfileAction: y } = (0, c.KZ)(),
        [{ section: x, subsection: v, text: h }, _] = i.useState(
            m(
                p(
                    {},
                    null !=
                        (t = d.find((e) => {
                            let { section: t } = e;
                            return t === f;
                        }))
                        ? t
                        : d[0],
                ),
                { subsection: g },
            ),
        );
    return (0, r.jsxs)("div", {
        className: b.container,
        children: [
            (0, r.jsx)(o.Ttm, {
                orientation: "horizontal",
                className: b.tabListScroller,
                fade: !0,
                paddingFix: !1,
                children: (0, r.jsx)(o.njP, {
                    type: "top",
                    look: "custom",
                    selectedItem: x,
                    onItemSelect: (e) => {
                        y({
                            action: "PRESS_SECTION",
                            section: e,
                        }),
                            _((t) => {
                                var n;
                                return null != (n = d.find((t) => t.section === e)) ? n : t;
                            });
                    },
                    children: d.map((e) =>
                        (0, r.jsx)(
                            o.njP.Item,
                            {
                                className: b.tabBarItem,
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
                id: x,
                "aria-label": h,
                className: b.tabBarPanel,
                children: (0, r.jsx)(j, {
                    user: n,
                    currentUser: l,
                    displayProfile: a,
                    guildId: s,
                    channelId: u,
                    section: x,
                    subsection: v,
                    onClose: O,
                }),
            }),
        ],
    });
}
