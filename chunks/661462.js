n.d(t, {
    F: () => _,
    Z: () => E,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(785717),
    c = n(128156),
    u = n(311044),
    d = n(408986),
    p = n(778414),
    f = n(414655),
    h = n(228168),
    g = n(323056);
function m(e) {
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
function b(e, t) {
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
function _(e) {
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
        b(
            m(
                {
                    ref: i,
                    className: a()(g.tabPanelScroller, n),
                    fade: !0,
                },
                l,
            ),
            { children: t },
        ),
    );
}
function O(e) {
    let {
        user: t,
        currentUser: n,
        section: i,
        subsection: l,
        displayProfile: a,
        guildId: o,
        channelId: s,
        onClose: g,
    } = e;
    return i === h.oh.ACTIVITY
        ? (0, r.jsx)(c.Z, {
              user: t,
              currentUser: n,
              displayProfile: a,
              guildId: o,
              channelId: s,
              subsection: l,
              onClose: g,
          })
        : i === h.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(u.Z, {
                user: t,
                guildId: o,
                channelId: s,
                onClose: g,
            })
          : i === h.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(d.Z, {
                  user: t,
                  onClose: g,
              })
            : i === h.oh.WIDGETS
              ? (0, r.jsx)(p.C, {
                    user: t,
                    guildId: o,
                    channelId: s,
                })
              : i === h.oh.WISHLIST
                ? (0, r.jsx)(f.Z, { profileOwner: t })
                : null;
}
function E(e) {
    var t;
    let {
            user: n,
            currentUser: l,
            displayProfile: a,
            guildId: c,
            channelId: u,
            items: d,
            initialSection: p,
            initialSubsection: f,
            onClose: h,
        } = e,
        { trackUserProfileAction: _ } = (0, s.KZ)(),
        [{ section: E, subsection: y, text: v }, I] = i.useState(
            b(
                m(
                    {},
                    null !=
                        (t = d.find((e) => {
                            let { section: t } = e;
                            return t === p;
                        }))
                        ? t
                        : d[0],
                ),
                { subsection: f },
            ),
        );
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)(o.Ttm, {
                orientation: "horizontal",
                className: g.tabListScroller,
                fade: !0,
                paddingFix: !1,
                children: (0, r.jsx)(o.njP, {
                    type: "top",
                    look: "custom",
                    selectedItem: E,
                    onItemSelect: (e) => {
                        _({
                            action: "PRESS_SECTION",
                            section: e,
                        }),
                            I((t) => {
                                var n;
                                return null != (n = d.find((t) => t.section === e)) ? n : t;
                            });
                    },
                    children: d.map((e) =>
                        (0, r.jsx)(
                            o.njP.Item,
                            {
                                className: g.tabBarItem,
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
                id: E,
                "aria-label": v,
                className: g.tabBarPanel,
                children: (0, r.jsx)(o.y5t, {
                    component: (0, r.jsx)(o.nn4, { children: (0, r.jsx)(o.H, { children: v }) }),
                    children: (0, r.jsx)(O, {
                        user: n,
                        currentUser: l,
                        displayProfile: a,
                        guildId: c,
                        channelId: u,
                        section: E,
                        subsection: y,
                        onClose: h,
                    }),
                }),
            }),
        ],
    });
}
