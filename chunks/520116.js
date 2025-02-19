n.d(t, { Z: () => S }), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(913527),
    o = n.n(a),
    l = n(91192),
    s = n(442837),
    c = n(481060),
    d = n(135938),
    u = n(900164),
    p = n(554838),
    m = n(493892),
    f = n(661824),
    h = n(37772),
    g = n(695346),
    _ = n(314897),
    b = n(496675),
    v = n(594174),
    y = n(55935),
    x = n(655354),
    O = n(809780),
    E = n(981631),
    j = n(388032),
    N = n(255437);
let C = {
    left: 4,
    right: -12
};
function I(e) {
    var t, n, a;
    let { channel: o, message: s, compact: d, isGroupStart: u, treatSpam: p, gotoChannel: m } = e,
        f = (0, l.JA)(null !== (t = s.id) && void 0 !== t ? t : ''),
        g = i.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key) {
                    var t;
                    null === (t = document.querySelector('[data-recents-channel="'.concat(o.id, '"]'))) || void 0 === t || t.focus();
                }
            },
            [o.id]
        );
    return (0, r.jsx)(c.tEY, {
        offset: C,
        children: (0, r.jsxs)(
            'div',
            ((n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    className: N.messageContainer,
                    onKeyDown: g
                },
                f
            )),
            (a = a =
                {
                    children: [
                        (0, r.jsx)(x.Z, {
                            className: N.jumpButton,
                            onJump: (e) => m(e, s.id)
                        }),
                        (0, r.jsx)(h.Z, {
                            id: s.id,
                            message: s,
                            channel: o,
                            className: N.message,
                            compact: d,
                            animateAvatar: !1,
                            isGroupStart: u,
                            onKeyDown: g,
                            treatSpam: p
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            n),
            s.id
        )
    });
}
function S(e) {
    var t, n;
    let { channel: i, channelRecord: a, gotoChannel: l } = e,
        { enabled: h } = d.Z.useExperiment({ location: '20e3b0_1' }, { autoTrackExposure: !1 }),
        x = g.jU.useSetting(),
        C = (0, s.e7)([b.Z], () => b.Z.can(E.Plq.CREATE_INSTANT_INVITE, a)),
        S = (0, m.P1)(a),
        P = !1,
        T = 0 === i.messages.length || o()(i.messages[0].timestamp).isSame(o()(), 'day'),
        A = null !== (n = null === (t = v.default.getUser(_.default.getId())) || void 0 === t ? void 0 : t.hasFlag(E.xW$.SPAMMER)) && void 0 !== n && n,
        w = [];
    if (!i.collapsed) {
        let e = null,
            t = null,
            n = i.messages.slice(0, O.hC);
        n.forEach((n) => {
            if (!(0, u.Z)(n, C)) {
                if (!T && (null == e || !e.isSame(n.timestamp, 'day'))) {
                    let t = (0, y.vc)(n.timestamp, 'LL');
                    w.push(
                        (0, r.jsx)(
                            f.Z,
                            {
                                className: N.divider,
                                children: t
                            },
                            t
                        )
                    ),
                        (e = o()(n.timestamp));
                }
                let i = null == t || (0, p.Z)(a, t, n);
                (t = n),
                    (P = P || (0, m.DQ)(n)),
                    w.push(
                        (0, r.jsx)(
                            I,
                            {
                                channel: a,
                                message: n,
                                compact: x,
                                isGroupStart: i,
                                treatSpam: !A && h && (0, m.DQ)(n) && S,
                                gotoChannel: l
                            },
                            n.id
                        )
                    );
            }
        }),
            i.messages.length >= O.hC &&
                w.push(
                    (0, r.jsxs)(
                        c.zxk,
                        {
                            color: c.zxk.Colors.LINK,
                            look: c.zxk.Looks.LINK,
                            onClick: (e) => l(e, n[n.length - 1].id),
                            children: [j.NW.string(j.t['9OB9ho']), ' \u203A']
                        },
                        'view-all'
                    )
                ),
            0 === w.length && (w = [(0, r.jsx)(c.$jN, {}, 'spinner')]);
    }
    return (
        P && S && d.Z.trackExposure({ location: '20e3b0_2' }),
        (0, r.jsx)('div', {
            className: N.messages,
            children: w
        })
    );
}
