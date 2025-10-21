n.d(t, { Z: () => p });
var i = n(951288);
n(647438);
var s = n(120356),
    l = n.n(s),
    r = n(793030),
    a = n(481060),
    o = n(413684),
    d = n(298812),
    c = n(200115),
    u = n(406205),
    h = n(388032),
    g = n(101105);
function m(e) {
    return (0, i.jsx)("div", {
        className: g.sectionHeader,
        children: (0, i.jsx)(a.Heading, {
            variant: "text-xs/bold",
            className: g.sectionHeaderTitle,
            color: "text-muted",
            children: e.title,
        }),
    });
}
function x(e) {
    return (0, i.jsxs)("div", {
        children: [
            null != e.title && (0, i.jsx)(m, { title: e.title }),
            (0, i.jsx)("div", {
                className: l()(g.sectionContent, { [g.sectionContentPadding]: !0 !== e.noPadding }),
                children: e.children,
            }),
        ],
    });
}
function p(e) {
    var t,
        n,
        { guildId: s } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        s = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                    return s;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            }
            return s;
        })(e, ["guildId"]);
    return (0, i.jsxs)(
        r.Modal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })({}, l)),
        (n = n =
            {
                title: h.intl.string(h.t.h850Ss),
                actions: [
                    {
                        text: h.intl.string(h.t.i4jeWR),
                        onClick: l.onClose,
                    },
                ],
                children: [
                    (0, i.jsx)(x, {
                        noPadding: !0,
                        children: (0, i.jsx)(c.Z, { guildId: s }),
                    }),
                    (0, i.jsx)(x, {
                        title: h.intl.string(h.t.R9Ej96),
                        noPadding: !0,
                        children: (0, i.jsx)(u.Z, { guildId: s }),
                    }),
                    (0, i.jsx)(x, {
                        title: h.intl.string(h.t["31DySj"]),
                        children: (0, i.jsx)(o.Z, { guildId: s }),
                    }),
                    (0, i.jsx)(m, { title: h.intl.string(h.t.JrySi3) }),
                    (0, i.jsx)(d.Z, { guildId: s }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
