var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(653603),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(904245),
    h = n(232961),
    p = n(223606),
    m = n(63063),
    f = n(530472),
    g = n(453687),
    C = n(930282),
    x = n(318713),
    v = n(981631),
    _ = n(388032),
    I = n(73368),
    E = n(507304),
    b = n(665162);
let Z = l.memo(function (e) {
    let { message: t, notice: n, compact: l = !1, onDismiss: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: a()(I.blockedNoticeContainer, { [I.compact]: l }),
                children: [
                    (0, i.jsx)('div', {
                        className: I.blockedNoticeIcon,
                        children: (0, i.jsx)(d.ShieldIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: I.shieldIcon
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: I.blockedNotice,
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'interactive-normal',
                            children: n
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: a()(I.ephemeralAccessories, { [I.compact]: l }),
                children: (0, i.jsx)(f.Z, {
                    message: t,
                    onDeleteMessage: r,
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'interactive-normal',
                        tag: 'span',
                        className: I.learnMore,
                        children: _.intl.format(_.t.Nd3Gh4, { helpUrl: m.Z.getArticleURL(v.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                    })
                })
            })
        ]
    });
});
t.Z = l.memo(function (e) {
    var t, n;
    let { className: r, compact: s, message: d, children: m, content: f, onUpdate: v } = e,
        N = null === (t = d.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
        S = l.useRef(!1),
        T = (0, c.e7)([p.Z], () => p.Z.getMessage(d.id), [d.id]),
        j = l.useCallback(() => {
            (null == T ? void 0 : T.isBlockedEdit) ? (0, h.I)(d.id) : u.Z.deleteMessage(d.channel_id, d.id, !0);
        }, [d, T]);
    return (
        l.useLayoutEffect(() => {
            S.current ? null != v && v() : (S.current = !0);
        }, [v, d.content, f, N, m]),
        (0, i.jsxs)('div', {
            id: (0, g.ut)(d),
            className: a()(r, b.markup, {
                [E.messageContent]: !0,
                [E.markupRtl]: 'rtl' === o()(d.content),
                [I.blockedEdit]: null == T ? void 0 : T.isBlockedEdit,
                [I.blockedSend]: !(null == T ? void 0 : T.isBlockedEdit)
            }),
            children: [
                null != m ? m : (0, C.L5)(d, f),
                (null == T ? void 0 : T.isBlockedEdit) &&
                    null != d.timestamp &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            ' ',
                            (0, i.jsx)(x.Z, {
                                timestamp: d.timestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, i.jsxs)('span', {
                                    className: E.edited,
                                    children: ['(', _.intl.string(_.t.Z7eEx8), ')']
                                })
                            })
                        ]
                    }),
                (0, i.jsx)(Z, {
                    notice: null !== (n = null == T ? void 0 : T.errorMessage) && void 0 !== n ? n : _.intl.string(_.t.zQ69pq),
                    message: d,
                    compact: s,
                    onDismiss: j
                })
            ]
        })
    );
}, C.HR);
