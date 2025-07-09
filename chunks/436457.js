let s, a;
(n.d(t, { Z: () => C }), n(388685), n(781311), n(35282));
var o = n(255367),
    r = n(73800),
    i = n(120356),
    l = n.n(i),
    c = n(755721),
    d = n(481060),
    u = n(447543),
    _ = n(230711),
    p = n(881052),
    f = n(600164),
    m = n(782605),
    b = n(981631),
    h = n(388032),
    x = n(145575);
let N = ((s = window.GLOBAL_ENV.INVITE_HOST), (a = ''), null == s && ((s = location.host), (a = b.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(s).concat(a, '/'));
function C(e) {
    let { onBack: t, onComplete: n, onConnect: s, isSlideReady: a } = e,
        [i, C] = r.useState(''),
        [E, j] = r.useState(!1),
        [T, v] = r.useState(null),
        I = r.useRef(null);
    r.useEffect(() => {
        var e;
        a && (null == (e = I.current) || e.focus());
    }, [a]);
    let g = r.useCallback(
        (e) => {
            e.preventDefault();
            let t = i.trim();
            if ('' === t) return void v(h.intl.string(h.t.IRq5am));
            (v(null), j(!0));
            let s = t.split('/'),
                a = s[s.length - 1];
            u.ZP.resolveInvite(a, 'Join Guild', { inputValue: t }).then(
                (e) => {
                    let { invite: t } = e;
                    if ((j(!1), null == t)) return void v(h.intl.string(h.t['GEYI+f']));
                    if (null != t.channel) {
                        let e = u.ZP.getInviteContext('Join Guild', t);
                        u.ZP.acceptInvite({
                            inviteKey: t.code,
                            context: e,
                            callback: (e) => {
                                (n(), u.ZP.transitionToInvite(e));
                            }
                        }).catch((e) => {
                            e instanceof p.yZ || e instanceof p.Hx ? v((0, m.O)(e.code)) : v(h.intl.string(h.t.dDZRd3));
                        });
                    }
                },
                (e) => {
                    j(!1);
                    let t = new p.yZ(e);
                    v((0, m.O)(t.code));
                }
            );
        },
        [i, j, v, n]
    );
    return {
        content: (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(d.xBx, {
                    className: x.header,
                    direction: f.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, o.jsx)(d.X6q, {
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: x.title,
                            children: h.intl.string(h.t.riOUtL)
                        }),
                        (0, o.jsx)(d.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: h.intl.string(h.t['7jub2t'])
                        })
                    ]
                }),
                (0, o.jsxs)(d.hzk, {
                    children: [
                        (0, o.jsx)('form', {
                            onSubmit: g,
                            className: x.inputForm,
                            children: (0, o.jsx)(d.xJW, {
                                title: h.intl.string(h.t.qreV29),
                                error: T,
                                titleClassName: l()(x.formTitle, { [x.error]: null != T }),
                                children: (0, o.jsx)(d.oil, {
                                    value: i,
                                    onChange: C,
                                    className: x.input,
                                    inputClassName: x.inputInner,
                                    inputRef: I
                                })
                            })
                        }),
                        (0, o.jsx)(d.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: h.intl.format(h.t.lHTZl5, { examples: ''.concat(N).concat('wumpus-friends', ', ').concat('hTKzmak') })
                        }),
                        (0, o.jsx)(d.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: x.connectCTA,
                            children: h.intl.format(h.t['8F/who'], {
                                onClick: () => {
                                    (s(), _.Z.open(b.oAB.CONNECTIONS));
                                }
                            })
                        })
                    ]
                })
            ]
        }),
        footer: (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(d.zxk, {
                    variant: 'primary',
                    text: h.intl.string(h.t.VJlc0d),
                    onClick: g,
                    disabled: 0 === i.length,
                    loading: E
                }),
                (0, o.jsx)(c.zx, {
                    className: x.__invalid_skipButton,
                    look: c.zx.Looks.BLANK,
                    size: c.zx.Sizes.MIN,
                    onClick: t,
                    children: h.intl.string(h.t['13/7kZ'])
                })
            ]
        })
    };
}
