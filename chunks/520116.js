n.d(t, { Z: () => P }), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(913527),
    o = n.n(l),
    s = n(91192),
    a = n(442837),
    c = n(481060),
    u = n(135938),
    d = n(900164),
    h = n(554838),
    p = n(493892),
    f = n(661824),
    g = n(37772),
    m = n(695346),
    b = n(314897),
    _ = n(496675),
    O = n(594174),
    y = n(55935),
    v = n(655354),
    C = n(809780),
    j = n(981631),
    E = n(388032),
    S = n(563142);
let x = {
    left: 4,
    right: -12
};
function I(e) {
    var t, n, l;
    let { channel: o, message: a, compact: u, isGroupStart: d, treatSpam: h, gotoChannel: p } = e,
        f = (0, s.JA)(null != (t = a.id) ? t : ''),
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
        offset: x,
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
                    className: S.messageContainer,
                    onKeyDown: m
                },
                f
            )),
            (l = l =
                {
                    children: [
                        (0, r.jsx)(v.Z, {
                            className: S.jumpButton,
                            onJump: (e) => p(e, a.id)
                        }),
                        (0, r.jsx)(g.Z, {
                            id: a.id,
                            message: a,
                            channel: o,
                            className: S.message,
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
            a.id
        )
    });
}
function P(e) {
    var t, n;
    let { channel: i, channelRecord: l, gotoChannel: s } = e,
        { enabled: g } = u.Z.useExperiment({ location: '20e3b0_1' }, { autoTrackExposure: !1 }),
        v = m.jU.useSetting(),
        x = (0, a.e7)([_.Z], () => _.Z.can(j.Plq.CREATE_INSTANT_INVITE, l)),
        P = (0, p.P1)(l),
        N = !1,
        w = 0 === i.messages.length || o()(i.messages[0].timestamp).isSame(o()(), 'day'),
        Z = null != (n = null == (t = O.default.getUser(b.default.getId())) ? void 0 : t.hasFlag(j.xW$.SPAMMER)) && n,
        T = [];
    if (!i.collapsed) {
        let e = null,
            t = null,
            n = i.messages.slice(0, C.hC);
        n.forEach((n) => {
            if (!(0, d.Z)(n, x)) {
                if (!w && (null == e || !e.isSame(n.timestamp, 'day'))) {
                    let t = (0, y.vc)(n.timestamp, 'LL');
                    T.push(
                        (0, r.jsx)(
                            f.Z,
                            {
                                className: S.divider,
                                children: t
                            },
                            t
                        )
                    ),
                        (e = o()(n.timestamp));
                }
                let i = null == t || (0, h.Z)(l, t, n);
                (t = n),
                    (N = N || (0, p.DQ)(n)),
                    T.push(
                        (0, r.jsx)(
                            I,
                            {
                                channel: l,
                                message: n,
                                compact: v,
                                isGroupStart: i,
                                treatSpam: !Z && g && (0, p.DQ)(n) && P,
                                gotoChannel: s
                            },
                            n.id
                        )
                    );
            }
        }),
            i.messages.length >= C.hC &&
                T.push(
                    (0, r.jsxs)(
                        c.zxk,
                        {
                            color: c.zxk.Colors.LINK,
                            look: c.zxk.Looks.LINK,
                            onClick: (e) => s(e, n[n.length - 1].id),
                            children: [E.intl.string(E.t['9OB9ho']), ' \u203A']
                        },
                        'view-all'
                    )
                ),
            0 === T.length && (T = [(0, r.jsx)(c.$jN, {}, 'spinner')]);
    }
    return (
        N && P && u.Z.trackExposure({ location: '20e3b0_2' }),
        (0, r.jsx)('div', {
            className: S.messages,
            children: T
        })
    );
}
