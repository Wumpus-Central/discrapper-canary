(n.d(t, { Z: () => x }), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(913527),
    o = n.n(l),
    a = n(91192),
    s = n(755721),
    c = n(481060),
    u = n(135938),
    d = n(554838),
    h = n(493892),
    p = n(661824),
    f = n(37772),
    g = n(695346),
    m = n(314897),
    b = n(594174),
    _ = n(55935),
    O = n(655354),
    y = n(809780),
    v = n(981631),
    C = n(388032),
    j = n(563142);
let E = {
    left: 4,
    right: -12
};
function S(e) {
    var t, n, l;
    let { channel: o, message: s, compact: u, isGroupStart: d, treatSpam: h, gotoChannel: p } = e,
        g = (0, a.JA)(null != (t = s.id) ? t : ''),
        m = i.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key) {
                    var t;
                    null == (t = document.querySelector('[data-recents-channel="'.concat(o.id, '"]'))) || t.focus();
                }
            },
            [o.id]
        );
    return (0, r.jsx)(c.tEY, {
        offset: E,
        children: (0, r.jsxs)(
            'div',
            ((n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })(
                {
                    className: j.messageContainer,
                    onKeyDown: m
                },
                g
            )),
            (l = l =
                {
                    children: [
                        (0, r.jsx)(O.Z, {
                            className: j.jumpButton,
                            onJump: (e) => p(e, s.id)
                        }),
                        (0, r.jsx)(f.Z, {
                            id: s.id,
                            message: s,
                            channel: o,
                            className: j.message,
                            compact: u,
                            animateAvatar: !1,
                            isGroupStart: d,
                            onKeyDown: m,
                            treatSpam: h
                        })
                    ]
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
            s.id
        )
    });
}
function x(e) {
    var t, n;
    let { channel: i, channelRecord: l, gotoChannel: a } = e,
        { enabled: f } = u.Z.useExperiment({ location: '20e3b0_1' }, { autoTrackExposure: !1 }),
        O = g.jU.useSetting(),
        E = (0, h.P1)(l),
        x = !1,
        I = 0 === i.messages.length || o()(i.messages[0].timestamp).isSame(o()(), 'day'),
        P = null != (n = null == (t = b.default.getUser(m.default.getId())) ? void 0 : t.hasFlag(v.xW$.SPAMMER)) && n,
        N = [];
    if (!i.collapsed) {
        let e = null,
            t = null,
            n = i.messages.slice(0, y.hC);
        (n.forEach((n) => {
            if (!I && (null == e || !e.isSame(n.timestamp, 'day'))) {
                let t = (0, _.vc)(n.timestamp, 'LL');
                (N.push(
                    (0, r.jsx)(
                        p.Z,
                        {
                            className: j.divider,
                            children: t
                        },
                        t
                    )
                ),
                    (e = o()(n.timestamp)));
            }
            let i = null == t || (0, d.Z)(l, t, n);
            ((t = n),
                (x = x || (0, h.DQ)(n)),
                N.push(
                    (0, r.jsx)(
                        S,
                        {
                            channel: l,
                            message: n,
                            compact: O,
                            isGroupStart: i,
                            treatSpam: !P && f && (0, h.DQ)(n) && E,
                            gotoChannel: a
                        },
                        n.id
                    )
                ));
        }),
            i.messages.length >= y.hC &&
                N.push(
                    (0, r.jsxs)(
                        s.zx,
                        {
                            color: s.zx.Colors.LINK,
                            look: s.zx.Looks.LINK,
                            onClick: (e) => a(e, n[n.length - 1].id),
                            children: [C.intl.string(C.t['9OB9ho']), ' \u203A']
                        },
                        'view-all'
                    )
                ),
            0 === N.length && (N = [(0, r.jsx)(c.$jN, {}, 'spinner')]));
    }
    return (
        x && E && u.Z.trackExposure({ location: '20e3b0_2' }),
        (0, r.jsx)('div', {
            className: j.messages,
            children: N
        })
    );
}
