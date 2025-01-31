n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    s = n(192379),
    a = n(642128),
    l = n(481060),
    r = n(230711),
    o = n(687158),
    u = n(63063),
    d = n(51144),
    c = n(544508),
    m = n(801461),
    g = n(981631),
    E = n(388032),
    h = n(579532);
function S(e) {
    let { userRef: t, usernameSuggestionLoading: n = !1, oneClickFlow: S = !1, ...f } = e,
        { user: x, editState: N, onClose: T } = f,
        _ = (0, o.ZP)(x.id),
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
                                n(), r.Z.open(g.oAB.ACCOUNT);
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
        })(N, d.ZP.getName(x), T),
        [C, v] = (0, l.q_F)(() => ({
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
        }, [v, N]),
        (0, i.jsxs)('div', {
            className: h.displayNameContainer,
            children: [
                (0, i.jsxs)(a.animated.div, {
                    style: {
                        opacity: C.opacity,
                        y: C.y
                    },
                    children: [
                        (0, i.jsx)(l.X6q, {
                            className: h.title,
                            color: 'header-primary',
                            variant: 'heading-xl/extrabold',
                            children: I.header
                        }),
                        (0, i.jsxs)('div', {
                            className: h.subtitle,
                            children: [
                                (0, i.jsx)(l.X6q, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: I.subtitle
                                }),
                                null != I.link &&
                                    (0, i.jsx)(l.Text, {
                                        className: h.link,
                                        color: 'header-secondary',
                                        variant: 'text-sm/medium',
                                        children: I.link
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(c.Z, {
                    ...f,
                    displayProfile: _,
                    ref: t,
                    usernameSuggestionLoading: n,
                    oneClickFlow: S
                })
            ]
        })
    );
}
