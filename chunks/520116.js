n.d(t, { Z: () => S }), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(913527),
    l = n.n(a),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(135938),
    d = n(900164),
    p = n(554838),
    m = n(493892),
    f = n(661824),
    h = n(37772),
    g = n(695346),
    _ = n(314897),
    b = n(496675),
    x = n(594174),
    y = n(55935),
    E = n(655354),
    v = n(809780),
    O = n(981631),
    N = n(388032),
    j = n(563142);
let C = {
    left: 4,
    right: -12
};
function I(e) {
    var t, n, a;
    let { channel: l, message: s, compact: u, isGroupStart: d, treatSpam: p, gotoChannel: m } = e,
        f = (0, o.JA)(null != (t = s.id) ? t : ''),
        g = i.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key) {
                    var t;
                    null == (t = document.querySelector('[data-recents-channel="'.concat(l.id, '"]'))) || t.focus();
                }
            },
            [l.id]
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
                    className: j.messageContainer,
                    onKeyDown: g
                },
                f
            )),
            (a = a =
                {
                    children: [
                        (0, r.jsx)(E.Z, {
                            className: j.jumpButton,
                            onJump: (e) => m(e, s.id)
                        }),
                        (0, r.jsx)(h.Z, {
                            id: s.id,
                            message: s,
                            channel: l,
                            className: j.message,
                            compact: u,
                            animateAvatar: !1,
                            isGroupStart: d,
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
    let { channel: i, channelRecord: a, gotoChannel: o } = e,
        { enabled: h } = u.Z.useExperiment({ location: '20e3b0_1' }, { autoTrackExposure: !1 }),
        E = g.jU.useSetting(),
        C = (0, s.e7)([b.Z], () => b.Z.can(O.Plq.CREATE_INSTANT_INVITE, a)),
        S = (0, m.P1)(a),
        T = !1,
        P = 0 === i.messages.length || l()(i.messages[0].timestamp).isSame(l()(), 'day'),
        A = null != (n = null == (t = x.default.getUser(_.default.getId())) ? void 0 : t.hasFlag(O.xW$.SPAMMER)) && n,
        w = [];
    if (!i.collapsed) {
        let e = null,
            t = null,
            n = i.messages.slice(0, v.hC);
        n.forEach((n) => {
            if (!(0, d.Z)(n, C)) {
                if (!P && (null == e || !e.isSame(n.timestamp, 'day'))) {
                    let t = (0, y.vc)(n.timestamp, 'LL');
                    w.push(
                        (0, r.jsx)(
                            f.Z,
                            {
                                className: j.divider,
                                children: t
                            },
                            t
                        )
                    ),
                        (e = l()(n.timestamp));
                }
                let i = null == t || (0, p.Z)(a, t, n);
                (t = n),
                    (T = T || (0, m.DQ)(n)),
                    w.push(
                        (0, r.jsx)(
                            I,
                            {
                                channel: a,
                                message: n,
                                compact: E,
                                isGroupStart: i,
                                treatSpam: !A && h && (0, m.DQ)(n) && S,
                                gotoChannel: o
                            },
                            n.id
                        )
                    );
            }
        }),
            i.messages.length >= v.hC &&
                w.push(
                    (0, r.jsxs)(
                        c.zxk,
                        {
                            color: c.zxk.Colors.LINK,
                            look: c.zxk.Looks.LINK,
                            onClick: (e) => o(e, n[n.length - 1].id),
                            children: [N.NW.string(N.t['9OB9ho']), ' \u203A']
                        },
                        'view-all'
                    )
                ),
            0 === w.length && (w = [(0, r.jsx)(c.$jN, {}, 'spinner')]);
    }
    return (
        T && S && u.Z.trackExposure({ location: '20e3b0_2' }),
        (0, r.jsx)('div', {
            className: j.messages,
            children: w
        })
    );
}
