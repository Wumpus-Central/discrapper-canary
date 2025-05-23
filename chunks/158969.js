n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(653603),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(904245),
    p = n(232961),
    h = n(223606),
    f = n(63063),
    m = n(530472),
    g = n(453687),
    b = n(930282),
    _ = n(318713),
    x = n(981631),
    C = n(388032),
    y = n(738532),
    v = n(161441),
    j = n(852831);
let O = i.memo(function (e) {
        let { message: t, notice: n, compact: i = !1, onDismiss: l } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: a()(y.blockedNoticeContainer, { [y.compact]: i }),
                    children: [
                        (0, r.jsx)('div', {
                            className: y.blockedNoticeIcon,
                            children: (0, r.jsx)(u.b7C, {
                                size: 'xs',
                                color: 'currentColor',
                                className: y.shieldIcon
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: y.blockedNotice,
                            children: (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'interactive-normal',
                                children: n
                            })
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: a()(y.ephemeralAccessories, { [y.compact]: i }),
                    children: (0, r.jsx)(m.Z, {
                        message: t,
                        onDeleteMessage: l,
                        children: (0, r.jsx)(u.Text, {
                            variant: 'text-xs/normal',
                            color: 'interactive-normal',
                            tag: 'span',
                            className: y.learnMore,
                            children: C.intl.format(C.t.Nd3Gh4, { helpUrl: f.Z.getArticleURL(x.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                        })
                    })
                })
            ]
        });
    }),
    E = i.memo(function (e) {
        var t, n;
        let { className: l, compact: o, message: u, children: f, content: m, onUpdate: x } = e,
            E = null == (t = u.editedTimestamp) ? void 0 : t.toString(),
            I = i.useRef(!1),
            P = (0, c.e7)([h.Z], () => h.Z.getMessage(u.id), [u.id]),
            S = i.useCallback(() => {
                (null == P ? void 0 : P.isBlockedEdit) ? (0, p.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
            }, [u, P]);
        return (
            i.useLayoutEffect(() => {
                I.current ? null != x && x() : (I.current = !0);
            }, [x, u.content, m, E, f]),
            (0, r.jsxs)('div', {
                id: (0, g.ut)(u),
                className: a()(l, j.markup, {
                    [v.messageContent]: !0,
                    [v.markupRtl]: 'rtl' === s()(u.content),
                    [y.blockedEdit]: null == P ? void 0 : P.isBlockedEdit,
                    [y.blockedSend]: !(null == P ? void 0 : P.isBlockedEdit)
                }),
                children: [
                    null != f ? f : (0, b.L5)(u, m),
                    (null == P ? void 0 : P.isBlockedEdit) &&
                        null != u.timestamp &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                ' ',
                                (0, r.jsx)(_.Z, {
                                    timestamp: u.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, r.jsxs)('span', {
                                        className: v.edited,
                                        children: ['(', C.intl.string(C.t.Z7eEx8), ')']
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(O, {
                        notice: null != (n = null == P ? void 0 : P.errorMessage) ? n : C.intl.string(C.t.zQ69pq),
                        message: u,
                        compact: o,
                        onDismiss: S
                    })
                ]
            })
        );
    }, b.HR);
