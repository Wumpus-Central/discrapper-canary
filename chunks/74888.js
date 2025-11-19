n.d(t, { Z: () => f }), n(953529);
var i = n(54381);
n(473749);
var s = n(120356),
    l = n.n(s),
    r = n(793030),
    a = n(481060),
    o = n(528011),
    d = n(413684),
    c = n(298812),
    u = n(763359),
    h = n(200115),
    g = n(406205),
    m = n(388032),
    x = n(101105);
function p(e) {
    return (0, i.jsx)("div", {
        className: x.sectionHeader,
        children: (0, i.jsx)(a.Heading, {
            variant: "text-xs/bold",
            className: x.sectionHeaderTitle,
            color: "text-muted",
            children: e.title,
        }),
    });
}
function v(e) {
    return (0, i.jsx)("div", {
        className: x.sectionDescription,
        children: (0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: e.description,
        }),
    });
}
function j(e) {
    return (0, i.jsxs)("div", {
        children: [
            null != e.title && (0, i.jsx)(p, { title: e.title }),
            (0, i.jsx)("div", {
                className: l()(x.sectionContent, {
                    [x.sectionContentPadding]: !0 !== e.noPadding,
                    [x.sectionContentContained]: !0 !== e.noContainer,
                }),
                children: e.children,
            }),
        ],
    });
}
function f(e) {
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
    let a = (0, o.Tz)(s);
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
                title: m.intl.string(m.t.h850Ss),
                actions: [
                    {
                        text: m.intl.string(m.t.i4jeWR),
                        onClick: l.onClose,
                    },
                ],
                children: [
                    (0, i.jsx)(j, {
                        noPadding: !0,
                        noContainer: !0,
                        children: (0, i.jsx)(h.Z, { guildId: s }),
                    }),
                    (0, i.jsx)(j, {
                        title: m.intl.string(m.t.R9Ej96),
                        noPadding: !0,
                        children: (0, i.jsx)(g.Z, { guildId: s }),
                    }),
                    (0, i.jsx)(j, {
                        title: m.intl.string(m.t["31DySj"]),
                        children: (0, i.jsx)(d.Z, { guildId: s }),
                    }),
                    a &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p, { title: m.intl.string(m.t.D9yVAH) }),
                                (0, i.jsx)(v, { description: m.intl.string(m.t["0PhAOH"]) }),
                                (0, i.jsx)(j, { children: (0, i.jsx)(u.Z, { guildId: s }) }),
                            ],
                        }),
                    (0, i.jsx)(p, { title: m.intl.string(m.t.JrySi3) }),
                    (0, i.jsx)(c.Z, { guildId: s }),
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
