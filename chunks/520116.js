n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(913527),
    a = n.n(l),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(135938),
    d = n(900164),
    m = n(554838),
    h = n(493892),
    f = n(661824),
    p = n(37772),
    _ = n(695346),
    g = n(314897),
    E = n(496675),
    C = n(594174),
    I = n(55935),
    x = n(655354),
    N = n(809780),
    v = n(981631),
    T = n(388032),
    S = n(904375);
let A = {
    left: 4,
    right: -12
};
function b(e) {
    var t;
    let { channel: n, message: l, compact: a, isGroupStart: s, treatSpam: u, gotoChannel: d } = e,
        m = (0, o.JA)(null !== (t = l.id) && void 0 !== t ? t : ''),
        h = r.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key) {
                    var t;
                    null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus();
                }
            },
            [n.id]
        );
    return (0, i.jsx)(c.FocusRing, {
        offset: A,
        children: (0, i.jsxs)(
            'div',
            {
                className: S.messageContainer,
                onKeyDown: h,
                ...m,
                children: [
                    (0, i.jsx)(x.Z, {
                        className: S.jumpButton,
                        onJump: (e) => d(e, l.id)
                    }),
                    (0, i.jsx)(p.Z, {
                        id: l.id,
                        message: l,
                        channel: n,
                        className: S.message,
                        compact: a,
                        animateAvatar: !1,
                        isGroupStart: s,
                        onKeyDown: h,
                        treatSpam: u
                    })
                ]
            },
            l.id
        )
    });
}
function j(e) {
    var t, n;
    let { channel: r, channelRecord: l, gotoChannel: o } = e,
        { enabled: p } = u.Z.useExperiment({ location: '20e3b0_1' }, { autoTrackExposure: !1 }),
        x = _.jU.useSetting(),
        A = (0, s.e7)([E.Z], () => E.Z.can(v.Plq.CREATE_INSTANT_INVITE, l)),
        j = (0, h.P1)(l),
        R = !1,
        Z = 0 === r.messages.length || a()(r.messages[0].timestamp).isSame(a()(), 'day'),
        P = null !== (n = null === (t = C.default.getUser(g.default.getId())) || void 0 === t ? void 0 : t.hasFlag(v.xW$.SPAMMER)) && void 0 !== n && n,
        L = [];
    if (!r.collapsed) {
        let e = null,
            t = null,
            n = r.messages.slice(0, N.hC);
        n.forEach((n) => {
            if (!(0, d.Z)(n, A)) {
                if (!Z && (null == e || !e.isSame(n.timestamp, 'day'))) {
                    let t = (0, I.vc)(n.timestamp, 'LL');
                    L.push(
                        (0, i.jsx)(
                            f.Z,
                            {
                                className: S.divider,
                                children: t
                            },
                            t
                        )
                    ),
                        (e = a()(n.timestamp));
                }
                let r = null == t || (0, m.Z)(l, t, n);
                (t = n),
                    (R = R || (0, h.DQ)(n)),
                    L.push(
                        (0, i.jsx)(
                            b,
                            {
                                channel: l,
                                message: n,
                                compact: x,
                                isGroupStart: r,
                                treatSpam: !P && p && (0, h.DQ)(n) && j,
                                gotoChannel: o
                            },
                            n.id
                        )
                    );
            }
        }),
            r.messages.length >= N.hC &&
                L.push(
                    (0, i.jsxs)(
                        c.Button,
                        {
                            color: c.Button.Colors.LINK,
                            look: c.Button.Looks.LINK,
                            onClick: (e) => o(e, n[n.length - 1].id),
                            children: [T.intl.string(T.t['9OB9ho']), ' \u203A']
                        },
                        'view-all'
                    )
                ),
            0 === L.length && (L = [(0, i.jsx)(c.Spinner, {}, 'spinner')]);
    }
    return (
        R && j && u.Z.trackExposure({ location: '20e3b0_2' }),
        (0, i.jsx)('div', {
            className: S.messages,
            children: L
        })
    );
}
