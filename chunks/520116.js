n.d(t, { Z: () => I }), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(913527),
    a = n.n(l),
    o = n(91192),
    s = n(481060),
    c = n(135938),
    u = n(554838),
    d = n(493892),
    f = n(661824),
    h = n(37772),
    p = n(695346),
    g = n(314897),
    b = n(594174),
    m = n(55935),
    y = n(655354),
    O = n(809780),
    v = n(981631),
    j = n(388032),
    C = n(28034);
let x = {
        left: 4,
        right: -12,
    },
    E = [v.uaV.THREAD_CREATED];
function S(e) {
    var t, n, l;
    let { channel: a, message: c, compact: u, isGroupStart: d, treatSpam: f, gotoChannel: p } = e,
        g = (0, o.JA)(null != (t = c.id) ? t : ""),
        b = i.useCallback(
            (e) => {
                if ("ArrowLeft" === e.key) {
                    var t;
                    null == (t = document.querySelector('[data-recents-channel="'.concat(a.id, '"]'))) || t.focus();
                }
            },
            [a.id],
        ),
        m = E.includes(c.type);
    return (0, r.jsx)(s.tEY, {
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
                    className: C.messageContainer,
                    onKeyDown: b,
                },
                g,
            )),
            (l = l =
                {
                    children: [
                        !m &&
                            (0, r.jsx)(y.Z, {
                                className: C.jumpButton,
                                onJump: (e) => p(e, c.id),
                            }),
                        (0, r.jsx)(h.Z, {
                            id: c.id,
                            message: c,
                            channel: a,
                            className: C.message,
                            compact: u,
                            animateAvatar: !1,
                            isGroupStart: d,
                            onKeyDown: b,
                            treatSpam: f,
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
function I(e) {
    var t, n;
    let { channel: i, channelRecord: l, gotoChannel: o } = e,
        { enabled: h } = c.Z.useExperiment({ location: "20e3b0_1" }, { autoTrackExposure: !1 }),
        y = p.jU.useSetting(),
        x = (0, d.P1)(l),
        E = !1,
        I = 0 === i.messages.length || a()(i.messages[0].timestamp).isSame(a()(), "day"),
        _ = null != (n = null == (t = b.default.getUser(g.default.getId())) ? void 0 : t.hasFlag(v.xW$.SPAMMER)) && n,
        P = [];
    if (!i.collapsed) {
        let e = null,
            t = null,
            n = i.messages.slice(0, O.hC);
        n.forEach((n) => {
            if (!I && (null == e || !e.isSame(n.timestamp, "day"))) {
                let t = (0, m.vc)(n.timestamp, "LL");
                P.push(
                    (0, r.jsx)(
                        f.Z,
                        {
                            className: C.divider,
                            children: t,
                        },
                        t,
                    ),
                ),
                    (e = a()(n.timestamp));
            }
            let i = null == t || (0, u.Z)(l, t, n);
            (t = n),
                (E = E || (0, d.DQ)(n)),
                P.push(
                    (0, r.jsx)(
                        S,
                        {
                            channel: l,
                            message: n,
                            compact: y,
                            isGroupStart: i,
                            treatSpam: !_ && h && (0, d.DQ)(n) && x,
                            gotoChannel: o,
                        },
                        n.id,
                    ),
                );
        }),
            i.messages.length >= O.hC &&
                P.push(
                    (0, r.jsx)(
                        "div",
                        {
                            className: C.showAllButtonContainer,
                            children: (0, r.jsx)(s.Avr, {
                                variant: "primary",
                                text: "".concat(j.intl.string(j.t["9OB9hq"]), " \u203A"),
                                onClick: (e) => o(e, n[n.length - 1].id),
                            }),
                        },
                        "view-all",
                    ),
                ),
            0 === P.length && (P = [(0, r.jsx)(s.$jN, {}, "spinner")]);
    }
    return (
        E && x && c.Z.trackExposure({ location: "20e3b0_2" }),
        (0, r.jsx)("div", {
            className: C.messages,
            children: P,
        })
    );
}
