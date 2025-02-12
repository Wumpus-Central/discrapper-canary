let n, a;
s.d(t, { Z: () => E }), s(47120);
var o = s(200651),
    i = s(192379),
    r = s(120356),
    l = s.n(r),
    c = s(481060),
    d = s(447543),
    _ = s(230711),
    u = s(881052),
    m = s(600164),
    p = s(118012),
    f = s(782605),
    b = s(981631),
    h = s(388032),
    x = s(769482);
let N = ((n = window.GLOBAL_ENV.INVITE_HOST), (a = ''), null == n && ((n = location.host), (a = b.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(n).concat(a, '/'));
function E(e) {
    let { onBack: t, onComplete: s, onConnect: n, isSlideReady: a } = e,
        [r, E] = i.useState(''),
        [C, T] = i.useState(!1),
        [I, j] = i.useState(null),
        v = i.useRef(null);
    i.useEffect(() => {
        var e;
        a && (null === (e = v.current) || void 0 === e || e.focus());
    }, [a]);
    let A = i.useCallback(
        (e) => {
            e.preventDefault();
            let t = r.trim();
            if ('' === t) {
                j(h.intl.string(h.t.IRq5am));
                return;
            }
            j(null), T(!0);
            let n = t.split('/'),
                a = n[n.length - 1];
            d.Z.resolveInvite(a, 'Join Guild', { inputValue: t }).then(
                (e) => {
                    let { invite: t } = e;
                    if ((T(!1), null == t)) {
                        j(h.intl.string(h.t['GEYI+f']));
                        return;
                    }
                    if (null != t.channel) {
                        let e = d.Z.getInviteContext('Join Guild', t);
                        d.Z.acceptInvite({
                            inviteKey: t.code,
                            context: e,
                            callback: (e) => {
                                s(), d.Z.transitionToInvite(e);
                            }
                        }).catch((e) => {
                            e instanceof u.yZ || e instanceof u.Hx ? j((0, f.O)(e.code)) : j(h.intl.string(h.t.dDZRd3));
                        });
                    }
                },
                (e) => {
                    T(!1);
                    let t = new u.yZ(e);
                    j((0, f.O)(t.code));
                }
            );
        },
        [r, T, j, s]
    );
    return {
        content: (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(c.xBx, {
                    className: x.header,
                    direction: m.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, o.jsx)(p.Z, {
                            className: x.title,
                            size: p.Z.Sizes.SIZE_24,
                            color: p.Z.Colors.HEADER_PRIMARY,
                            children: h.intl.string(h.t.riOUtL)
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: h.intl.string(h.t['7jub2t'])
                        })
                    ]
                }),
                (0, o.jsxs)(c.hzk, {
                    children: [
                        (0, o.jsx)('form', {
                            onSubmit: A,
                            className: x.inputForm,
                            children: (0, o.jsx)(c.xJW, {
                                title: h.intl.string(h.t.qreV29),
                                error: I,
                                titleClassName: l()(x.formTitle, { [x.error]: null != I }),
                                children: (0, o.jsx)(c.oil, {
                                    value: r,
                                    onChange: E,
                                    className: x.input,
                                    inputClassName: x.inputInner,
                                    inputRef: v
                                })
                            })
                        }),
                        (0, o.jsx)(c.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: h.intl.format(h.t.lHTZl5, { examples: ''.concat(N).concat('wumpus-friends', ', ').concat('hTKzmak') })
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: x.connectCTA,
                            children: h.intl.format(h.t['8F/who'], {
                                onClick: () => {
                                    n(), _.Z.open(b.oAB.CONNECTIONS);
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
                    onClick: A,
                    disabled: 0 === r.length,
                    submitting: C,
                    children: h.intl.string(h.t.VJlc0d)
                }),
                (0, o.jsx)(c.zxk, {
                    className: x.__invalid_skipButton,
                    look: c.zxk.Looks.BLANK,
                    size: c.zxk.Sizes.MIN,
                    onClick: t,
                    children: h.intl.string(h.t['13/7kZ'])
                })
            ]
        })
    };
}
