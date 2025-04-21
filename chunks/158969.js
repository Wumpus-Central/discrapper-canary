n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(653603),
    s = n.n(a),
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
    j = n(73433);
let O = i.memo(function (e) {
        let { message: t, notice: n, compact: i = !1, onDismiss: l } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: o()(x.blockedNoticeContainer, { [x.compact]: i }),
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
                    className: o()(x.ephemeralAccessories, { [x.compact]: i }),
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
        let { className: l, compact: a, message: u, children: f, content: m, onUpdate: y } = e,
            E = null == (t = u.editedTimestamp) ? void 0 : t.toString(),
            I = i.useRef(!1),
            P = (0, c.e7)([h.Z], () => h.Z.getMessage(u.id), [u.id]),
            S = i.useCallback(() => {
                (null == P ? void 0 : P.isBlockedEdit) ? (0, p.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
            }, [u, P]);
        return (
            i.useLayoutEffect(() => {
                I.current ? null != y && y() : (I.current = !0);
            }, [y, u.content, m, E, f]),
            (0, r.jsxs)('div', {
                id: (0, g.ut)(u),
                className: o()(l, j.markup, {
                    [v.messageContent]: !0,
                    [v.markupRtl]: 'rtl' === s()(u.content),
                    [x.blockedEdit]: null == P ? void 0 : P.isBlockedEdit,
                    [x.blockedSend]: !(null == P ? void 0 : P.isBlockedEdit)
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
                        compact: a,
                        onDismiss: S
                    })
                ]
            })
        );
    }, b.HR);
