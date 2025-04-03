let n, o;
s.d(t, { Z: () => E }), s(47120), s(566702), s(301563);
var a = s(200651),
    r = s(192379),
    i = s(120356),
    l = s.n(i),
    c = s(481060),
    d = s(447543),
    _ = s(230711),
    u = s(881052),
    p = s(600164),
    f = s(118012),
    m = s(782605),
    b = s(981631),
    N = s(388032),
    h = s(145575);
let x = ((n = window.GLOBAL_ENV.INVITE_HOST), (o = ''), null == n && ((n = location.host), (o = b.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(n).concat(o, '/'));
function E(e) {
    let { onBack: t, onComplete: s, onConnect: n, isSlideReady: o } = e,
        [i, E] = r.useState(''),
        [C, j] = r.useState(!1),
        [T, I] = r.useState(null),
        g = r.useRef(null);
    r.useEffect(() => {
        var e;
        o && (null == (e = g.current) || e.focus());
    }, [o]);
    let v = r.useCallback(
        (e) => {
            e.preventDefault();
            let t = i.trim();
            if ('' === t) return void I(N.NW.string(N.t.IRq5am));
            I(null), j(!0);
            let n = t.split('/'),
                o = n[n.length - 1];
            d.ZP.resolveInvite(o, 'Join Guild', { inputValue: t }).then(
                (e) => {
                    let { invite: t } = e;
                    if ((j(!1), null == t)) return void I(N.NW.string(N.t['GEYI+f']));
                    if (null != t.channel) {
                        let e = d.ZP.getInviteContext('Join Guild', t);
                        d.ZP.acceptInvite({
                            inviteKey: t.code,
                            context: e,
                            callback: (e) => {
                                s(), d.ZP.transitionToInvite(e);
                            }
                        }).catch((e) => {
                            e instanceof u.yZ || e instanceof u.Hx ? I((0, m.O)(e.code)) : I(N.NW.string(N.t.dDZRd3));
                        });
                    }
                },
                (e) => {
                    j(!1);
                    let t = new u.yZ(e);
                    I((0, m.O)(t.code));
                }
            );
        },
        [i, j, I, s]
    );
    return {
        content: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(c.xBx, {
                    className: h.header,
                    direction: p.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, a.jsx)(f.Z, {
                            className: h.title,
                            size: f.Z.Sizes.SIZE_24,
                            color: f.Z.Colors.HEADER_PRIMARY,
                            children: N.NW.string(N.t.riOUtL)
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: N.NW.string(N.t['7jub2t'])
                        })
                    ]
                }),
                (0, a.jsxs)(c.hzk, {
                    children: [
                        (0, a.jsx)('form', {
                            onSubmit: v,
                            className: h.inputForm,
                            children: (0, a.jsx)(c.xJW, {
                                title: N.NW.string(N.t.qreV29),
                                error: T,
                                titleClassName: l()(h.formTitle, { [h.error]: null != T }),
                                children: (0, a.jsx)(c.oil, {
                                    value: i,
                                    onChange: E,
                                    className: h.input,
                                    inputClassName: h.inputInner,
                                    inputRef: g
                                })
                            })
                        }),
                        (0, a.jsx)(c.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: N.NW.format(N.t.lHTZl5, { examples: ''.concat(x).concat('wumpus-friends', ', ').concat('hTKzmak') })
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: h.connectCTA,
                            children: N.NW.format(N.t['8F/who'], {
                                onClick: () => {
                                    n(), _.Z.open(b.oAB.CONNECTIONS);
                                }
                            })
                        })
                    ]
                })
            ]
        }),
        footer: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(c.zxk, {
                    color: c.zxk.Colors.BRAND,
                    onClick: v,
                    disabled: 0 === i.length,
                    submitting: C,
                    children: N.NW.string(N.t.VJlc0d)
                }),
                (0, a.jsx)(c.zxk, {
                    className: h.__invalid_skipButton,
                    look: c.zxk.Looks.BLANK,
                    size: c.zxk.Sizes.MIN,
                    onClick: t,
                    children: N.NW.string(N.t['13/7kZ'])
                })
            ]
        })
    };
}
