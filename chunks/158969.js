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
    y = n(981631),
    C = n(388032),
    x = n(684525),
    v = n(848697),
    O = n(73433);
let j = i.memo(function (e) {
        let { message: t, notice: n, compact: i = !1, onDismiss: l } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: a()(x.blockedNoticeContainer, { [x.compact]: i }),
                    children: [
                        (0, r.jsx)('div', {
                            className: x.blockedNoticeIcon,
                            children: (0, r.jsx)(u.b7C, {
                                size: 'xs',
                                color: 'currentColor',
                                className: x.shieldIcon
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: x.blockedNotice,
                            children: (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'interactive-normal',
                                children: n
                            })
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: a()(x.ephemeralAccessories, { [x.compact]: i }),
                    children: (0, r.jsx)(m.Z, {
                        message: t,
                        onDeleteMessage: l,
                        children: (0, r.jsx)(u.Text, {
                            variant: 'text-xs/normal',
                            color: 'interactive-normal',
                            tag: 'span',
                            className: x.learnMore,
                            children: C.intl.format(C.t.Nd3Gh4, { helpUrl: f.Z.getArticleURL(y.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                        })
                    })
                })
            ]
        });
    }),
    E = i.memo(function (e) {
        var t, n;
        let { className: l, compact: o, message: u, children: f, content: m, onUpdate: y } = e,
            E = null == (t = u.editedTimestamp) ? void 0 : t.toString(),
            S = i.useRef(!1),
            I = (0, c.e7)([h.Z], () => h.Z.getMessage(u.id), [u.id]),
            P = i.useCallback(() => {
                (null == I ? void 0 : I.isBlockedEdit) ? (0, p.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
            }, [u, I]);
        return (
            i.useLayoutEffect(() => {
                S.current ? null != y && y() : (S.current = !0);
            }, [y, u.content, m, E, f]),
            (0, r.jsxs)('div', {
                id: (0, g.ut)(u),
                className: a()(l, O.markup, {
                    [v.messageContent]: !0,
                    [v.markupRtl]: 'rtl' === s()(u.content),
                    [x.blockedEdit]: null == I ? void 0 : I.isBlockedEdit,
                    [x.blockedSend]: !(null == I ? void 0 : I.isBlockedEdit)
                }),
                children: [
                    null != f ? f : (0, b.L5)(u, m),
                    (null == I ? void 0 : I.isBlockedEdit) &&
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
                    (0, r.jsx)(j, {
                        notice: null != (n = null == I ? void 0 : I.errorMessage) ? n : C.intl.string(C.t.zQ69pq),
                        message: u,
                        compact: o,
                        onDismiss: P
                    })
                ]
            })
        );
    }, b.HR);
