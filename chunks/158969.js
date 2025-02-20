n.d(t, { Z: () => N });
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
    C = n(981631),
    v = n(388032),
    y = n(147109),
    x = n(456536),
    j = n(368365);
let O = i.memo(function (e) {
        let { message: t, notice: n, compact: i = !1, onDismiss: l } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: o()(y.blockedNoticeContainer, { [y.compact]: i }),
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
                    className: o()(y.ephemeralAccessories, { [y.compact]: i }),
                    children: (0, r.jsx)(m.Z, {
                        message: t,
                        onDeleteMessage: l,
                        children: (0, r.jsx)(u.Text, {
                            variant: 'text-xs/normal',
                            color: 'interactive-normal',
                            tag: 'span',
                            className: y.learnMore,
                            children: v.NW.format(v.t.Nd3Gh4, { helpUrl: f.Z.getArticleURL(C.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                        })
                    })
                })
            ]
        });
    }),
    N = i.memo(function (e) {
        var t, n;
        let { className: l, compact: a, message: u, children: f, content: m, onUpdate: C } = e,
            N = null === (t = u.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
            E = i.useRef(!1),
            P = (0, c.e7)([h.Z], () => h.Z.getMessage(u.id), [u.id]),
            I = i.useCallback(() => {
                (null == P ? void 0 : P.isBlockedEdit) ? (0, p.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
            }, [u, P]);
        return (
            i.useLayoutEffect(() => {
                E.current ? null != C && C() : (E.current = !0);
            }, [C, u.content, m, N, f]),
            (0, r.jsxs)('div', {
                id: (0, g.ut)(u),
                className: o()(l, j.markup, {
                    [x.messageContent]: !0,
                    [x.markupRtl]: 'rtl' === s()(u.content),
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
                                        className: x.edited,
                                        children: ['(', v.NW.string(v.t.Z7eEx8), ')']
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(O, {
                        notice: null !== (n = null == P ? void 0 : P.errorMessage) && void 0 !== n ? n : v.NW.string(v.t.zQ69pq),
                        message: u,
                        compact: a,
                        onDismiss: I
                    })
                ]
            })
        );
    }, b.HR);
