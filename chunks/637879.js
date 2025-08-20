n.d(t, { c: () => v });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(592125),
    s = n(944486),
    l = n(585483),
    c = n(607802),
    u = n(532428),
    d = n(579612),
    f = n(315322),
    _ = n(723642),
    p = n(981631),
    h = n(388032),
    m = n(493090);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { navId: t, index: n, selected: r } = e;
    return {
        id: "".concat(t, "-").concat(n),
        role: "option",
        tabIndex: -1,
        "aria-selected": r,
    };
}
function v(e) {
    let { searchContext: t, navId: n, index: a, selected: l } = e,
        c = (0, i.e7)([s.Z, o.Z], () => {
            let e = s.Z.getChannelId();
            return o.Z.getChannel(e);
        });
    return null == c
        ? null
        : (0, r.jsx)(
              I,
              {
                  searchContext: t,
                  selectedChannel: c,
                  navId: n,
                  index: a,
                  selected: l,
              },
              c.id,
          );
}
function I(e) {
    let { searchContext: t, selectedChannel: n, navId: i, index: o, selected: s } = e,
        g = (0, c.nl)(n),
        b = (0, r.jsxs)("div", {
            className: m.channelNameContainer,
            children: [
                (0, r.jsx)(d.MC, {
                    channel: n,
                    className: m.channelNameIcon,
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    color: "text-primary",
                    className: m.channelName,
                    children: g,
                }),
            ],
        }),
        v = () => {
            var e;
            (0, f.tA)({
                searchContext: t,
                searchAutocompleteSelectAction: _.ZW.CLICK,
            });
            let r = p.dCx.FILTER_IN,
                i = u.ZP[r],
                a = (0, c.X3)(n),
                o = "".concat(null != (e = null == i ? void 0 : i.key) ? e : r.toString(), " ").concat(a);
            l.S.dispatch(p.CkL.SET_SEARCH_QUERY, {
                query: o,
                anchor: 0,
                focus: 0,
                performSearch: !1,
                replace: !1,
            });
        };
    return (0, r.jsxs)(
        a.P3F,
        y(
            E(
                {
                    className: m.item,
                    onClick: v,
                },
                O({
                    navId: i,
                    index: o,
                    selected: s,
                }),
            ),
            {
                children: [
                    (0, r.jsx)(d.MC, {
                        channel: n,
                        className: m.itemIcon,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-primary",
                        className: m.itemText,
                        children: h.intl.format(h.t["VGEH//"], { channelName: b }),
                    }),
                ],
            },
        ),
    );
}
