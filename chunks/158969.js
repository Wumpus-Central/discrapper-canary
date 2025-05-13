n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
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
    x = n(981631),
    y = n(388032),
    C = n(684525),
    v = n(848697),
    j = n(73433);
let O = i.memo(function (e) {
        let { message: t, notice: n, compact: i = !1, onDismiss: l } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: o()(C.blockedNoticeContainer, { [C.compact]: i }),
                    children: [
                        (0, r.jsx)('div', {
                            className: C.blockedNoticeIcon,
                            children: (0, r.jsx)(u.b7C, {
                                size: 'xs',
                                color: 'currentColor',
                                className: C.shieldIcon
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: C.blockedNotice,
                            children: (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'interactive-normal',
                                children: n
                            })
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: o()(C.ephemeralAccessories, { [C.compact]: i }),
                    children: (0, r.jsx)(m.Z, {
                        message: t,
                        onDeleteMessage: l,
                        children: (0, r.jsx)(u.Text, {
                            variant: 'text-xs/normal',
                            color: 'interactive-normal',
                            tag: 'span',
                            className: C.learnMore,
                            children: y.intl.format(y.t.Nd3Gh4, { helpUrl: f.Z.getArticleURL(x.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                        })
                    })
                })
            ]
        });
    }),
    E = i.memo(function (e) {
        var t, n;
        let { className: l, compact: a, message: u, children: f, content: m, onUpdate: x } = e,
            E = null == (t = u.editedTimestamp) ? void 0 : t.toString(),
            I = i.useRef(!1),
            S = (0, c.e7)([h.Z], () => h.Z.getMessage(u.id), [u.id]),
            P = i.useCallback(() => {
                (null == S ? void 0 : S.isBlockedEdit) ? (0, p.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
            }, [u, S]);
        return (
            i.useLayoutEffect(() => {
                I.current ? null != x && x() : (I.current = !0);
            }, [x, u.content, m, E, f]),
            (0, r.jsxs)('div', {
                id: (0, g.ut)(u),
                className: o()(l, j.markup, {
                    [v.messageContent]: !0,
                    [v.markupRtl]: 'rtl' === s()(u.content),
                    [C.blockedEdit]: null == S ? void 0 : S.isBlockedEdit,
                    [C.blockedSend]: !(null == S ? void 0 : S.isBlockedEdit)
                }),
                children: [
                    null != f ? f : (0, b.L5)(u, m),
                    (null == S ? void 0 : S.isBlockedEdit) &&
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
                                        children: ['(', y.intl.string(y.t.Z7eEx8), ')']
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(O, {
                        notice: null != (n = null == S ? void 0 : S.errorMessage) ? n : y.intl.string(y.t.zQ69pq),
                        message: u,
                        compact: a,
                        onDismiss: P
                    })
                ]
            })
        );
    }, b.HR);
