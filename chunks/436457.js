let s, a;
(n.d(t, { Z: () => N }), n(388685), n(781311), n(35282));
var o = n(255367),
    r = n(73800),
    i = n(120356),
    l = n.n(i),
    c = n(481060),
    d = n(447543),
    u = n(230711),
    _ = n(881052),
    p = n(600164),
    f = n(782605),
    m = n(981631),
    b = n(388032),
    h = n(145575);
let x = ((s = window.GLOBAL_ENV.INVITE_HOST), (a = ''), null == s && ((s = location.host), (a = m.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(s).concat(a, '/'));
function N(e) {
    let { onBack: t, onComplete: n, onConnect: s, isSlideReady: a } = e,
        [i, N] = r.useState(''),
        [C, E] = r.useState(!1),
        [j, T] = r.useState(null),
        I = r.useRef(null);
    r.useEffect(() => {
        var e;
        a && (null == (e = I.current) || e.focus());
    }, [a]);
    let g = r.useCallback(
        (e) => {
            e.preventDefault();
            let t = i.trim();
            if ('' === t) return void T(b.intl.string(b.t.IRq5am));
            (T(null), E(!0));
            let s = t.split('/'),
                a = s[s.length - 1];
            d.ZP.resolveInvite(a, 'Join Guild', { inputValue: t }).then(
                (e) => {
                    let { invite: t } = e;
                    if ((E(!1), null == t)) return void T(b.intl.string(b.t['GEYI+f']));
                    if (null != t.channel) {
                        let e = d.ZP.getInviteContext('Join Guild', t);
                        d.ZP.acceptInvite({
                            inviteKey: t.code,
                            context: e,
                            callback: (e) => {
                                (n(), d.ZP.transitionToInvite(e));
                            }
                        }).catch((e) => {
                            e instanceof _.yZ || e instanceof _.Hx ? T((0, f.O)(e.code)) : T(b.intl.string(b.t.dDZRd3));
                        });
                    }
                },
                (e) => {
                    E(!1);
                    let t = new _.yZ(e);
                    T((0, f.O)(t.code));
                }
            );
        },
        [i, E, T, n]
    );
    return {
        content: (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(c.xBx, {
                    className: h.header,
                    direction: p.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, o.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: h.title,
                            children: b.intl.string(b.t.riOUtL)
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: b.intl.string(b.t['7jub2t'])
                        })
                    ]
                }),
                (0, o.jsxs)(c.hzk, {
                    children: [
                        (0, o.jsx)('form', {
                            onSubmit: g,
                            className: h.inputForm,
                            children: (0, o.jsx)(c.xJW, {
                                title: b.intl.string(b.t.qreV29),
                                error: j,
                                titleClassName: l()(h.formTitle, { [h.error]: null != j }),
                                children: (0, o.jsx)(c.oil, {
                                    value: i,
                                    onChange: N,
                                    className: h.input,
                                    inputClassName: h.inputInner,
                                    inputRef: I
                                })
                            })
                        }),
                        (0, o.jsx)(c.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: b.intl.format(b.t.lHTZl5, { examples: ''.concat(x).concat('wumpus-friends', ', ').concat('hTKzmak') })
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: h.connectCTA,
                            children: b.intl.format(b.t['8F/who'], {
                                onClick: () => {
                                    (s(), u.Z.open(m.oAB.CONNECTIONS));
                                }
                            })
                        })
                    ]
                })
            ]
        }),
        footer: (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(c.zxk, {
                    color: c.zxk.Colors.BRAND,
                    onClick: g,
                    disabled: 0 === i.length,
                    submitting: C,
                    children: b.intl.string(b.t.VJlc0d)
                }),
                (0, o.jsx)(c.zxk, {
                    className: h.__invalid_skipButton,
                    look: c.zxk.Looks.BLANK,
                    size: c.zxk.Sizes.MIN,
                    onClick: t,
                    children: b.intl.string(b.t['13/7kZ'])
                })
            ]
        })
    };
}
