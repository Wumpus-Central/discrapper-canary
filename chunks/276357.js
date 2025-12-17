n.d(t, { Z: () => p }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(924826),
    l = n(91192),
    s = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(109434),
    u = n(456269),
    m = n(228392),
    f = n(479099),
    h = n(981631),
    g = n(388032),
    x = n(909454);
function b() {
    return Promise.resolve();
}
function p(e) {
    let { channel: t, closePopout: n, setPopoutRef: p } = e,
        j = (0, u.Vm)(t),
        { tagFilter: v } = (0, d.H)(t.id),
        C = (0, d.v)(),
        y = (0, s.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        T = r.useCallback(
            (e) => {
                (0, m.e7)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(v),
                    added: !v.has(e),
                    location: {
                        page: h.ZY5.GUILD_CHANNEL,
                        section: h.jXE.FORUM_CHANNEL_HEADER,
                        object: h.qAy.CHANNEL_TAG,
                    },
                }),
                    C.getState().toggleTagFilter(t.id, e);
            },
            [t, v, C],
        ),
        w = r.useCallback(() => {
            C.getState().setTagFilter(t.id, new Set()), y || n();
        }, [C, t.id, y, n]),
        S = (0, i.ZP)({
            id: "".concat(t.id, "-all-tags-dropdown-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: b,
            scrollToEnd: b,
        }),
        N = r.useRef(null);
    return (
        r.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != N.current) {
                    let e = N.current.querySelector(".".concat(x.tag));
                    null != e && e.focus();
                }
            });
        }, []),
        (0, a.jsxs)(o.VqE, {
            ref: (e) => {
                null == p || p(e);
            },
            "aria-label": g.intl.string(g.t.TdqRTh),
            className: x.container,
            children: [
                (0, a.jsx)("div", {
                    className: x.header,
                    children: (0, a.jsxs)("div", {
                        className: x.headerLeft,
                        children: [
                            (0, a.jsx)(o.Heading, {
                                color: "interactive-text-default",
                                variant: "heading-md/semibold",
                                className: x.headerText,
                                children: g.intl.string(g.t.HPu3kq),
                            }),
                            (0, a.jsx)("div", {
                                className: x.countContainer,
                                children: (0, a.jsx)(o.Text, {
                                    className: x.countText,
                                    color: "none",
                                    variant: "text-xs/medium",
                                    tabularNumbers: !0,
                                    children: v.size,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)(l.bG, {
                    navigator: S,
                    children: (0, a.jsx)(l.SJ, {
                        children: (e) => {
                            var t,
                                n,
                                { ref: r } = e,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                a,
                                                r = {},
                                                i = Object.keys(e);
                                            for (a = 0; a < i.length; a++)
                                                (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                            return r;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        for (a = 0; a < i.length; a++)
                                            (n = i[a]),
                                                !(t.indexOf(n) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                    (r[n] = e[n]);
                                    }
                                    return r;
                                })(e, ["ref"]);
                            return (0, a.jsx)(
                                "div",
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            a = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (a = a.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            a.forEach(function (t) {
                                                var a;
                                                (a = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: a,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = a);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        ref: (e) => {
                                            (r.current = e), (N.current = e);
                                        },
                                    },
                                    i,
                                )),
                                (n = n =
                                    {
                                        className: x.tagContainer,
                                        children: j.map((e) =>
                                            (0, a.jsx)(
                                                f.Z,
                                                {
                                                    className: x.tag,
                                                    tag: e,
                                                    selected: v.has(e.id),
                                                    onClick: () => T(e.id),
                                                },
                                                e.id,
                                            ),
                                        ),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, a);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t),
                            );
                        },
                    }),
                }),
                (0, a.jsx)("div", { className: x.separator }),
                (0, a.jsx)(o.Avr, {
                    "aria-label": g.intl.string(g.t["98EPQP"]),
                    onClick: w,
                    text: g.intl.string(g.t["98EPQP"]),
                }),
            ],
        })
    );
}
