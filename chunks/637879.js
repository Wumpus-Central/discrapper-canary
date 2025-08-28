n.d(t, {
    N_: () => S,
    c2: () => I,
});
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(592125),
    l = n(944486),
    c = n(585483),
    u = n(607802),
    d = n(532428),
    f = n(579612),
    _ = n(315322),
    p = n(723642),
    h = n(981631),
    m = n(388032),
    g = n(493090);
function E(e, t, n) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { navId: t, index: n, selected: r } = e;
    return {
        id: "".concat(t, "-").concat(n),
        role: "option",
        tabIndex: -1,
        "aria-selected": r,
    };
}
function I(e) {
    let { searchContext: t, navId: n, index: i, selected: o } = e,
        c = (0, a.e7)([l.Z, s.Z], () => {
            let e = l.Z.getChannelId();
            return s.Z.getChannel(e);
        });
    return null == c
        ? null
        : (0, r.jsx)(
              T,
              {
                  searchContext: t,
                  selectedChannel: c,
                  navId: n,
                  index: i,
                  selected: o,
              },
              c.id,
          );
}
function T(e) {
    let { searchContext: t, selectedChannel: n, navId: i, index: a, selected: s } = e,
        l = (0, u.nl)(n),
        E = (0, r.jsxs)("div", {
            className: g.channelNameContainer,
            children: [
                (0, r.jsx)(f.MC, {
                    channel: n,
                    className: g.channelNameIcon,
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-primary",
                    className: g.channelName,
                    children: l,
                }),
            ],
        }),
        y = () => {
            var e;
            (0, _.tA)({
                searchContext: t,
                searchAutocompleteSelectAction: p.ZW.CLICK,
            });
            let r = h.dCx.FILTER_IN,
                i = d.ZP[r],
                a = (0, u.X3)(n),
                o = "".concat(null != (e = null == i ? void 0 : i.key) ? e : r.toString(), " ").concat(a);
            c.S.dispatch(h.CkL.SET_SEARCH_QUERY, {
                query: o,
                anchor: 0,
                focus: 0,
                performSearch: !1,
                replace: !1,
            });
        };
    return (0, r.jsxs)(
        o.P3F,
        O(
            b(
                {
                    className: g.item,
                    onClick: y,
                },
                v({
                    navId: i,
                    index: a,
                    selected: s,
                }),
            ),
            {
                children: [
                    (0, r.jsx)(f.MC, {
                        channel: n,
                        className: g.itemIcon,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-primary",
                        className: g.itemText,
                        children: m.intl.format(m.t["VGEH//"], { channelName: E }),
                    }),
                ],
            },
        ),
    );
}
function S(e) {
    let { searchContext: t, label: a, navId: s, index: l, selected: c } = e,
        u = i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("36745"), n.e("37979")]).then(n.bind(n, 238088));
                return (n) => (0, r.jsx)(e, O(b({}, n), { searchContext: t }));
            });
        }, [t]);
    return (0, r.jsxs)(
        o.P3F,
        O(
            b(
                {
                    className: g.item,
                    onClick: u,
                },
                v({
                    navId: s,
                    index: l,
                    selected: c,
                }),
            ),
            {
                children: [
                    (0, r.jsx)(o.gXV, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: g.itemIcon,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-primary",
                        className: g.itemText,
                        children: a,
                    }),
                ],
            },
        ),
    );
}
