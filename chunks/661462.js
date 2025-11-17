n.d(t, {
    F: () => y,
    Z: () => v,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    c = n(785717),
    s = n(128156),
    u = n(311044),
    d = n(408986),
    f = n(778414),
    g = n(414655),
    p = n(228168),
    m = n(883101);
function b(e) {
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
function h(e, t) {
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
function y(e) {
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
        h(
            b(
                {
                    ref: i,
                    className: l()(m.tabPanelScroller, n),
                    fade: !0,
                },
                a,
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
        subsection: a,
        displayProfile: l,
        guildId: o,
        channelId: c,
        onClose: m,
    } = e;
    return i === p.oh.ACTIVITY
        ? (0, r.jsx)(s.Z, {
              user: t,
              currentUser: n,
              displayProfile: l,
              guildId: o,
              channelId: c,
              subsection: a,
              onClose: m,
          })
        : i === p.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(u.Z, {
                user: t,
                guildId: o,
                channelId: c,
                onClose: m,
            })
          : i === p.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(d.Z, {
                  user: t,
                  onClose: m,
              })
            : i === p.oh.WIDGETS
              ? (0, r.jsx)(f.C, {
                    user: t,
                    guildId: o,
                    channelId: c,
                })
              : i === p.oh.WISHLIST
                ? (0, r.jsx)(g.Z, { profileOwner: t })
                : null;
}
function v(e) {
    var t;
    let {
            user: n,
            currentUser: a,
            displayProfile: l,
            guildId: s,
            channelId: u,
            items: d,
            initialSection: f,
            initialSubsection: g,
            onClose: p,
        } = e,
        { trackUserProfileAction: y } = (0, c.KZ)(),
        [{ section: v, subsection: j, text: x }, _] = i.useState(
            h(
                b(
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
        className: m.container,
        children: [
            (0, r.jsx)(o.Ttm, {
                orientation: "horizontal",
                className: m.tabListScroller,
                fade: !0,
                paddingFix: !1,
                children: (0, r.jsx)(o.njP, {
                    type: "top",
                    look: "custom",
                    selectedItem: v,
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
                                className: m.tabBarItem,
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
                "aria-label": x,
                className: m.tabBarPanel,
                children: (0, r.jsx)(o.y5t, {
                    component: (0, r.jsx)(o.nn4, { children: (0, r.jsx)(o.H, { children: x }) }),
                    children: (0, r.jsx)(O, {
                        user: n,
                        currentUser: a,
                        displayProfile: l,
                        guildId: s,
                        channelId: u,
                        section: v,
                        subsection: j,
                        onClose: p,
                    }),
                }),
            }),
        ],
    });
}
