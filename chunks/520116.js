n.d(t, { Z: () => S }), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(913527),
    o = n.n(l),
    a = n(91192),
    s = n(481060),
    c = n(135938),
    u = n(554838),
    d = n(493892),
    p = n(661824),
    h = n(37772),
    f = n(695346),
    g = n(314897),
    m = n(594174),
    b = n(55935),
    _ = n(655354),
    y = n(809780),
    O = n(981631),
    v = n(388032),
    j = n(557047);
let C = {
        left: 4,
        right: -12,
    },
    x = [O.uaV.THREAD_CREATED];
function E(e) {
    var t, n, l;
    let { channel: o, message: c, compact: u, isGroupStart: d, treatSpam: p, gotoChannel: f } = e,
        g = (0, a.JA)(null != (t = c.id) ? t : ""),
        m = i.useCallback(
            (e) => {
                if ("ArrowLeft" === e.key) {
                    var t;
                    null == (t = document.querySelector('[data-recents-channel="'.concat(o.id, '"]'))) || t.focus();
                }
            },
            [o.id],
        ),
        b = x.includes(c.type);
    return (0, r.jsx)(s.tEY, {
        offset: C,
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
                    className: j.messageContainer,
                    onKeyDown: m,
                },
                g,
            )),
            (l = l =
                {
                    children: [
                        !b &&
                            (0, r.jsx)(_.Z, {
                                className: j.jumpButton,
                                onJump: (e) => f(e, c.id),
                            }),
                        (0, r.jsx)(h.Z, {
                            id: c.id,
                            message: c,
                            channel: o,
                            className: j.message,
                            compact: u,
                            animateAvatar: !1,
                            isGroupStart: d,
                            onKeyDown: m,
                            treatSpam: p,
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(l)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                  }),
            n),
            c.id,
        ),
    });
}
function S(e) {
    var t, n;
    let { channel: i, channelRecord: l, gotoChannel: a } = e,
        { enabled: h } = c.Z.useExperiment({ location: "20e3b0_1" }, { autoTrackExposure: !1 }),
        _ = f.jU.useSetting(),
        C = (0, d.P1)(l),
        x = !1,
        S = 0 === i.messages.length || o()(i.messages[0].timestamp).isSame(o()(), "day"),
        I = null != (n = null == (t = m.default.getUser(g.default.getId())) ? void 0 : t.hasFlag(O.xW$.SPAMMER)) && n,
        P = [];
    if (!i.collapsed) {
        let e = null,
            t = null,
            n = i.messages.slice(0, y.hC);
        n.forEach((n) => {
            if (!S && (null == e || !e.isSame(n.timestamp, "day"))) {
                let t = (0, b.vc)(n.timestamp, "LL");
                P.push(
                    (0, r.jsx)(
                        p.Z,
                        {
                            className: j.divider,
                            children: t,
                        },
                        t,
                    ),
                ),
                    (e = o()(n.timestamp));
            }
            let i = null == t || (0, u.Z)(l, t, n);
            (t = n),
                (x = x || (0, d.DQ)(n)),
                P.push(
                    (0, r.jsx)(
                        E,
                        {
                            channel: l,
                            message: n,
                            compact: _,
                            isGroupStart: i,
                            treatSpam: !I && h && (0, d.DQ)(n) && C,
                            gotoChannel: a,
                        },
                        n.id,
                    ),
                );
        }),
            i.messages.length >= y.hC &&
                P.push(
                    (0, r.jsx)(
                        "div",
                        {
                            className: j.showAllButtonContainer,
                            children: (0, r.jsx)(s.Avr, {
                                variant: "primary",
                                text: "".concat(v.intl.string(v.t["9OB9hq"]), " \u203A"),
                                onClick: (e) => a(e, n[n.length - 1].id),
                            }),
                        },
                        "view-all",
                    ),
                ),
            0 === P.length && (P = [(0, r.jsx)(s.$jN, {}, "spinner")]);
    }
    return (
        x && C && c.Z.trackExposure({ location: "20e3b0_2" }),
        (0, r.jsx)("div", {
            className: j.messages,
            children: P,
        })
    );
}
