let n, o;
s.d(t, {
    Z: function () {
        return E;
    }
}),
    s(47120);
var a = s(200651),
    i = s(192379),
    r = s(120356),
    l = s.n(r),
    c = s(481060),
    d = s(447543),
    u = s(230711),
    f = s(881052),
    _ = s(600164),
    p = s(118012),
    m = s(782605),
    h = s(981631),
    N = s(388032),
    x = s(438638);
let C = ((n = window.GLOBAL_ENV.INVITE_HOST), (o = ''), null == n && ((n = location.host), (o = h.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(n).concat(o, '/'));
function E(e) {
    let { onBack: t, onComplete: s, onConnect: n, isSlideReady: o } = e,
        [r, E] = i.useState(''),
        [T, b] = i.useState(!1),
        [I, j] = i.useState(null),
        v = i.useRef(null);
    i.useEffect(() => {
        var e;
        o && (null === (e = v.current) || void 0 === e || e.focus());
    }, [o]);
    let A = i.useCallback(
            (e) => {
                e.preventDefault();
                let t = r.trim();
                if ('' === t) {
                    j(N.intl.string(N.t.IRq5am));
                    return;
                }
                j(null), b(!0);
                let n = t.split('/'),
                    o = n[n.length - 1];
                d.Z.resolveInvite(o, 'Join Guild', { inputValue: t }).then(
                    (e) => {
                        let { invite: t } = e;
                        if ((b(!1), null == t)) {
                            j(N.intl.string(N.t['GEYI+f']));
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
                                e instanceof f.yZ || e instanceof f.Hx ? j((0, m.O)(e.code)) : j(N.intl.string(N.t.dDZRd3));
                            });
                        }
                    },
                    (e) => {
                        b(!1);
                        let t = new f.yZ(e);
                        j((0, m.O)(t.code));
                    }
                );
            },
            [r, b, j, s]
        ),
        F = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(c.ModalHeader, {
                    className: x.header,
                    direction: _.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, a.jsx)(p.Z, {
                            className: x.title,
                            size: p.Z.Sizes.SIZE_24,
                            color: p.Z.Colors.HEADER_PRIMARY,
                            children: N.intl.string(N.t.riOUtL)
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: N.intl.string(N.t['7jub2t'])
                        })
                    ]
                }),
                (0, a.jsxs)(c.ModalContent, {
                    children: [
                        (0, a.jsx)('form', {
                            onSubmit: A,
                            className: x.inputForm,
                            children: (0, a.jsx)(c.FormItem, {
                                title: N.intl.string(N.t.qreV29),
                                error: I,
                                titleClassName: l()(x.formTitle, { [x.error]: null != I }),
                                children: (0, a.jsx)(c.TextInput, {
                                    value: r,
                                    onChange: E,
                                    className: x.input,
                                    inputClassName: x.inputInner,
                                    inputRef: v
                                })
                            })
                        }),
                        (0, a.jsx)(c.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: N.intl.format(N.t.lHTZl5, { examples: ''.concat(C).concat('cool-people', ', ').concat('hTKzmak') })
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: x.connectCTA,
                            children: N.intl.format(N.t['8F/who'], {
                                onClick: () => {
                                    n(), u.Z.open(h.oAB.CONNECTIONS);
                                }
                            })
                        })
                    ]
                })
            ]
        });
    return {
        content: F,
        footer: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(c.Button, {
                    color: c.Button.Colors.BRAND,
                    onClick: A,
                    disabled: 0 === r.length,
                    submitting: T,
                    children: N.intl.string(N.t.VJlc0d)
                }),
                (0, a.jsx)(c.Button, {
                    className: x.__invalid_skipButton,
                    look: c.Button.Looks.BLANK,
                    size: c.Button.Sizes.MIN,
                    onClick: t,
                    children: N.intl.string(N.t['13/7kZ'])
                })
            ]
        })
    };
}
