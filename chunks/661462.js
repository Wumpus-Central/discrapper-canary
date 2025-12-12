n.d(t, {
    F: () => O,
    Z: () => x,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    c = n(785717),
    s = n(592183),
    u = n(224724),
    d = n(128156),
    f = n(311044),
    g = n(408986),
    p = n(778414),
    b = n(414655),
    m = n(228168),
    h = n(237297);
function y(e) {
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
function v(e, t) {
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
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["children", "className", "scrollerRef"]);
    return (0, r.jsx)(
        o.Ttm,
        v(
            y(
                {
                    ref: i,
                    className: l()(h.tabPanelScroller, n),
                    fade: !0,
                },
                a,
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
        subsection: a,
        displayProfile: l,
        guildId: o,
        channelId: c,
        onClose: s,
    } = e;
    return i === m.oh.ACTIVITY
        ? (0, r.jsx)(d.Z, {
              user: t,
              currentUser: n,
              displayProfile: l,
              guildId: o,
              channelId: c,
              subsection: a,
              onClose: s,
          })
        : i === m.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(f.Z, {
                user: t,
                guildId: o,
                channelId: c,
                onClose: s,
            })
          : i === m.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(g.Z, {
                  user: t,
                  onClose: s,
              })
            : i === m.oh.WIDGETS
              ? (0, r.jsx)(p.C, {
                    user: t,
                    guildId: o,
                    channelId: c,
                })
              : i === m.oh.WISHLIST
                ? (0, r.jsx)(b.Z, { profileOwner: t })
                : null;
}
function x(e) {
    var t;
    let {
            user: n,
            currentUser: a,
            displayProfile: l,
            guildId: d,
            channelId: f,
            items: g,
            initialSection: p,
            initialSubsection: b,
            onClose: O,
        } = e,
        { trackUserProfileAction: x } = (0, c.KZ)(),
        [{ section: P, subsection: I, text: w }, S] = i.useState(
            v(
                y(
                    {},
                    null !=
                        (t = g.find((e) => {
                            let { section: t } = e;
                            return t === p;
                        }))
                        ? t
                        : g[0],
                ),
                { subsection: b },
            ),
        );
    return (0, r.jsxs)("div", {
        className: h.container,
        children: [
            (0, r.jsx)(o.Ttm, {
                orientation: "horizontal",
                className: h.tabListScroller,
                fade: !0,
                paddingFix: !1,
                children: (0, r.jsx)(o.njP, {
                    type: "top",
                    look: "custom",
                    selectedItem: P,
                    onItemSelect: (e) => {
                        if (u.Z.hasUnsavedChanges() && P === m.oh.WIDGETS) return void s.Z.notifyUnsavedWidgets();
                        x({
                            action: "PRESS_SECTION",
                            section: e,
                        }),
                            S((t) => {
                                var n;
                                return null != (n = g.find((t) => t.section === e)) ? n : t;
                            });
                    },
                    children: g.map((e) =>
                        (0, r.jsx)(
                            o.njP.Item,
                            {
                                className: h.tabBarItem,
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
                id: P,
                "aria-label": w,
                className: h.tabBarPanel,
                children: (0, r.jsx)(o.y5t, {
                    component: (0, r.jsx)(o.nn4, { children: (0, r.jsx)(o.H, { children: w }) }),
                    children: (0, r.jsx)(j, {
                        user: n,
                        currentUser: a,
                        displayProfile: l,
                        guildId: d,
                        channelId: f,
                        section: P,
                        subsection: I,
                        onClose: O,
                    }),
                }),
            }),
        ],
    });
}
