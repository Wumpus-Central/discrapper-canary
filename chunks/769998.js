n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(755721),
    a = n(481060),
    s = n(430824),
    o = n(496675),
    c = n(556012),
    d = n(273504),
    u = n(981631),
    m = n(590433),
    g = n(388032),
    p = n(75765);
function f(e) {
    var t;
    let { action: n, triggerType: f, guildId: h, toggled: b, onToggleAction: x } = e,
        j = (e) => () => x(e),
        _ = (0, c.c)(n.type, n, f),
        v = null == (t = n.metadata) ? void 0 : t.durationSeconds,
        O = null != v ? (0, m.L9)(v) : null,
        y = (0, i.e7)([o.Z, s.Z], () => o.Z.can(u.Plq.MODERATE_MEMBERS, s.Z.getGuild(h)), [h]);
    if (null == _) return null;
    let { headerText: C, descriptionText: N, icon: E } = _;
    return (0, r.jsxs)("div", {
        className: p.actionContainer,
        children: [
            (0, r.jsx)("div", {
                className: p.actionIconContainer,
                children: (0, r.jsx)(E, {
                    size: "md",
                    color: "currentColor",
                    className: p.actionIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: p.actionTextContainer,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-sm/semibold",
                        children: C,
                    }),
                    (0, r.jsx)(a.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        children: N,
                    }),
                    b &&
                        (0, r.jsxs)(a.Text, {
                            color: "interactive-normal",
                            variant: "text-xs/medium",
                            children: [
                                null === O
                                    ? null
                                    : f === d.fX.MENTION_SPAM
                                      ? g.intl.format(g.t.i3lsKC, { friendlyDurationString: O })
                                      : g.intl.format(g.t.mvHxzc, { friendlyDurationString: O }),
                                y &&
                                    (0, r.jsx)(a.P3F, {
                                        onClick: j(!0),
                                        className: p.editChannel,
                                        tag: "span",
                                        role: "link",
                                        children: g.intl.string(g.t["0B95RE"]),
                                    }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(a.ua7, {
                text: g.intl.format(g.t.wx6Vb2, {}),
                "aria-label": g.intl.formatToMarkdownString(g.t.wx6Vb2, {}),
                shouldShow: !y,
                children: (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        "div",
                        ((t = (function (e) {
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
                        })({}, e)),
                        (n = n =
                            {
                                children: (0, r.jsx)(l.$q, {
                                    type: l.M0.INVERTED,
                                    value: b,
                                    onChange: j(!1),
                                    disabled: !y,
                                    className: p.__invalid_actionCheckbox,
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t),
                    );
                },
            }),
        ],
    });
}
