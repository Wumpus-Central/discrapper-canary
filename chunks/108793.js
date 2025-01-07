n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(666912),
    a = n(481060),
    l = n(230711),
    o = n(687158),
    u = n(63063),
    c = n(51144),
    d = n(544508),
    m = n(801461),
    g = n(981631),
    E = n(388032),
    h = n(579532);
function f(e) {
    let { userRef: t, usernameSuggestionLoading: n = !1, oneClickFlow: f = !1, ...S } = e,
        { user: N, editState: T, onClose: x } = S,
        _ = (0, o.ZP)(N.id),
        I = (function (e, t, n) {
            switch (e) {
                case m.Wq.EDIT_USERNAME:
                    return {
                        header: E.intl.string(E.t['a/zCWl']),
                        subtitle: E.intl.string(E.t.gGz0sb)
                    };
                case m.Wq.EDIT_DISPLAY_NAME:
                    return {
                        header: E.intl.string(E.t.SRDNcH),
                        subtitle: E.intl.string(E.t['940AS0'])
                    };
                case m.Wq.PREVIEW:
                    return {
                        header: E.intl.formatToPlainString(E.t.XDHrcn, { displayName: t }),
                        subtitle: E.intl.format(E.t.bWE0ZG, {
                            onClick: () => {
                                n(), l.Z.open(g.oAB.ACCOUNT);
                            }
                        })
                    };
                case m.Wq.SUGGESTION:
                    return {
                        header: E.intl.string(E.t.F7T4dX),
                        subtitle: E.intl.formatToPlainString(E.t.Z8F83d, {}),
                        link: E.intl.format(E.t['i2vB8/'], { helpdeskArticle: u.Z.getArticleURL(g.BhN.POMELO_FAQ) })
                    };
                default:
                    return {
                        header: E.intl.string(E.t['a/zCWl']),
                        subtitle: E.intl.string(E.t.gGz0sb)
                    };
            }
        })(T, c.ZP.getName(N), x),
        [C, v] = (0, a.useSpring)(() => ({
            opacity: 0,
            y: 10
        }));
    return (
        s.useEffect(() => {
            v({
                y: 0,
                opacity: 1,
                from: {
                    y: 10,
                    opacity: 0
                }
            });
        }, [v, T]),
        (0, i.jsxs)('div', {
            className: h.displayNameContainer,
            children: [
                (0, i.jsxs)(r.animated.div, {
                    style: {
                        opacity: C.opacity,
                        y: C.y
                    },
                    children: [
                        (0, i.jsx)(a.Heading, {
                            className: h.title,
                            color: 'header-primary',
                            variant: 'heading-xl/extrabold',
                            children: I.header
                        }),
                        (0, i.jsxs)('div', {
                            className: h.subtitle,
                            children: [
                                (0, i.jsx)(a.Heading, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: I.subtitle
                                }),
                                null != I.link &&
                                    (0, i.jsx)(a.Text, {
                                        className: h.link,
                                        color: 'header-secondary',
                                        variant: 'text-sm/medium',
                                        children: I.link
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(d.Z, {
                    ...S,
                    displayProfile: _,
                    ref: t,
                    usernameSuggestionLoading: n,
                    oneClickFlow: f
                })
            ]
        })
    );
}
