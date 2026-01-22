n.d(t, {
    A: () => C,
}),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(989349),
    a = n.n(i),
    s = n(837381),
    o = n(397927),
    c = n(559149),
    u = n(857069),
    d = n(694318),
    f = n(813516),
    p = n(906141),
    h = n(253932),
    b = n(961350),
    g = n(287809),
    m = n(405269),
    A = n(576456),
    y = n(712209),
    O = n(652215),
    j = n(985018),
    v = n(359884);
let x = {
        left: 4,
        right: -12,
    },
    E = [O.lAJ.THREAD_CREATED];

function _(e) {
    var t, n, i;
    let { channel: a, message: c, compact: u, isGroupStart: d, treatSpam: f, gotoChannel: h } = e,
        b = (0, s.rm)(null != (t = c.id) ? t : ""),
        g = l.useCallback(
            (e) => {
                if ("ArrowLeft" === e.key) {
                    var t;
                    null == (t = document.querySelector('[data-recents-channel="'.concat(a.id, '"]'))) || t.focus();
                }
            },
            [a.id],
        ),
        m = E.includes(c.type);
    return (0, r.jsx)(o.vN3, {
        offset: x,
        children: (0, r.jsxs)(
            "div",
            ((n = (function (e) {
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
            })(
                {
                    className: v.zC,
                    onKeyDown: g,
                },
                b,
            )),
            (i = i =
                {
                    children: [
                        !m &&
                            (0, r.jsx)(A.A, {
                                className: v.nn,
                                onJump: (e) => h(e, c.id),
                            }),
                        (0, r.jsx)(p.A, {
                            id: c.id,
                            message: c,
                            channel: a,
                            className: v.iU,
                            compact: u,
                            animateAvatar: !1,
                            isGroupStart: d,
                            onKeyDown: g,
                            treatSpam: f,
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            n),
            c.id,
        ),
    });
}

function C(e) {
    var t, n;
    let { channel: l, channelRecord: i, gotoChannel: s } = e,
        { enabled: p } = c.A.useExperiment(
            {
                location: "20e3b0_1",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        A = h.hH.useSetting(),
        x = (0, d.iJ)(i),
        E = !1,
        C = 0 === l.messages.length || a()(l.messages[0].timestamp).isSame(a()(), "day"),
        S = null != (t = null == (n = g.default.getUser(b.default.getId())) ? void 0 : n.hasFlag(O.nhx.SPAMMER)) && t,
        I = [];
    if (!l.collapsed) {
        let e = null,
            t = null,
            n = l.messages.slice(0, y.sz);
        n.forEach((n) => {
            if (!C && (null == e || !e.isSame(n.timestamp, "day"))) {
                let t = (0, m.i$)(n.timestamp, "LL");
                I.push(
                    (0, r.jsx)(
                        f.A,
                        {
                            className: v.yF,
                            children: t,
                        },
                        t,
                    ),
                ),
                    (e = a()(n.timestamp));
            }
            let l = null == t || (0, u.A)(i, t, n);
            (t = n),
                (E = E || (0, d.kf)(n)),
                I.push(
                    (0, r.jsx)(
                        _,
                        {
                            channel: i,
                            message: n,
                            compact: A,
                            isGroupStart: l,
                            treatSpam: !S && p && (0, d.kf)(n) && x,
                            gotoChannel: s,
                        },
                        n.id,
                    ),
                );
        }),
            l.messages.length >= y.sz &&
                I.push(
                    (0, r.jsx)(
                        "div",
                        {
                            className: v.Gr,
                            children: (0, r.jsx)(o.QWc, {
                                variant: "primary",
                                text: "".concat(j.intl.string(j.t["9OB9hq"]), " ›"),
                                onClick: (e) => s(e, n[n.length - 1].id),
                            }),
                        },
                        "view-all",
                    ),
                ),
            0 === I.length && (I = [(0, r.jsx)(o.y$y, {}, "spinner")]);
    }
    return (
        E &&
            x &&
            c.A.trackExposure({
                location: "20e3b0_2",
            }),
        (0, r.jsx)("div", {
            className: v.DZ,
            children: I,
        })
    );
}
