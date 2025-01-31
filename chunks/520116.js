n.d(t, { Z: () => j }), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(913527),
    r = n.n(a),
    s = n(91192),
    o = n(442837),
    c = n(481060),
    d = n(135938),
    u = n(900164),
    m = n(554838),
    h = n(493892),
    _ = n(661824),
    p = n(37772),
    g = n(695346),
    f = n(314897),
    x = n(496675),
    E = n(594174),
    C = n(55935),
    v = n(655354),
    I = n(809780),
    N = n(981631),
    S = n(388032),
    T = n(904375);
let b = {
    left: 4,
    right: -12
};
function A(e) {
    var t;
    let { channel: n, message: a, compact: r, isGroupStart: o, treatSpam: d, gotoChannel: u } = e,
        m = (0, s.JA)(null !== (t = a.id) && void 0 !== t ? t : ''),
        h = l.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key) {
                    var t;
                    null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus();
                }
            },
            [n.id]
        );
    return (0, i.jsx)(c.tEY, {
        offset: b,
        children: (0, i.jsxs)(
            'div',
            {
                className: T.messageContainer,
                onKeyDown: h,
                ...m,
                children: [
                    (0, i.jsx)(v.Z, {
                        className: T.jumpButton,
                        onJump: (e) => u(e, a.id)
                    }),
                    (0, i.jsx)(p.Z, {
                        id: a.id,
                        message: a,
                        channel: n,
                        className: T.message,
                        compact: r,
                        animateAvatar: !1,
                        isGroupStart: o,
                        onKeyDown: h,
                        treatSpam: d
                    })
                ]
            },
            a.id
        )
    });
}
function j(e) {
    var t, n;
    let { channel: l, channelRecord: a, gotoChannel: s } = e,
        { enabled: p } = d.Z.useExperiment({ location: '20e3b0_1' }, { autoTrackExposure: !1 }),
        v = g.jU.useSetting(),
        b = (0, o.e7)([x.Z], () => x.Z.can(N.Plq.CREATE_INSTANT_INVITE, a)),
        j = (0, h.P1)(a),
        y = !1,
        Z = 0 === l.messages.length || r()(l.messages[0].timestamp).isSame(r()(), 'day'),
        R = null !== (n = null === (t = E.default.getUser(f.default.getId())) || void 0 === t ? void 0 : t.hasFlag(N.xW$.SPAMMER)) && void 0 !== n && n,
        L = [];
    if (!l.collapsed) {
        let e = null,
            t = null,
            n = l.messages.slice(0, I.hC);
        n.forEach((n) => {
            if (!(0, u.Z)(n, b)) {
                if (!Z && (null == e || !e.isSame(n.timestamp, 'day'))) {
                    let t = (0, C.vc)(n.timestamp, 'LL');
                    L.push(
                        (0, i.jsx)(
                            _.Z,
                            {
                                className: T.divider,
                                children: t
                            },
                            t
                        )
                    ),
                        (e = r()(n.timestamp));
                }
                let l = null == t || (0, m.Z)(a, t, n);
                (t = n),
                    (y = y || (0, h.DQ)(n)),
                    L.push(
                        (0, i.jsx)(
                            A,
                            {
                                channel: a,
                                message: n,
                                compact: v,
                                isGroupStart: l,
                                treatSpam: !R && p && (0, h.DQ)(n) && j,
                                gotoChannel: s
                            },
                            n.id
                        )
                    );
            }
        }),
            l.messages.length >= I.hC &&
                L.push(
                    (0, i.jsxs)(
                        c.zxk,
                        {
                            color: c.zxk.Colors.LINK,
                            look: c.zxk.Looks.LINK,
                            onClick: (e) => s(e, n[n.length - 1].id),
                            children: [S.intl.string(S.t['9OB9ho']), ' \u203A']
                        },
                        'view-all'
                    )
                ),
            0 === L.length && (L = [(0, i.jsx)(c.$jN, {}, 'spinner')]);
    }
    return (
        y && j && d.Z.trackExposure({ location: '20e3b0_2' }),
        (0, i.jsx)('div', {
            className: T.messages,
            children: L
        })
    );
}
