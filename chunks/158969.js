n.d(t, { Z: () => N });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    _ = n(930282),
    C = n(318713),
    x = n(981631),
    v = n(388032),
    E = n(73368),
    I = n(507304),
    b = n(665162);
let Z = l.memo(function (e) {
        let { message: t, notice: n, compact: l = !1, onDismiss: a } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: r()(E.blockedNoticeContainer, { [E.compact]: l }),
                    children: [
                        (0, i.jsx)('div', {
                            className: E.blockedNoticeIcon,
                            children: (0, i.jsx)(d.b7C, {
                                size: 'xs',
                                color: 'currentColor',
                                className: E.shieldIcon
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: E.blockedNotice,
                            children: (0, i.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'interactive-normal',
                                children: n
                            })
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: r()(E.ephemeralAccessories, { [E.compact]: l }),
                    children: (0, i.jsx)(f.Z, {
                        message: t,
                        onDeleteMessage: a,
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-xs/normal',
                            color: 'interactive-normal',
                            tag: 'span',
                            className: E.learnMore,
                            children: v.intl.format(v.t.Nd3Gh4, { helpUrl: m.Z.getArticleURL(x.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                        })
                    })
                })
            ]
        });
    }),
    N = l.memo(function (e) {
        var t, n;
        let { className: a, compact: s, message: d, children: m, content: f, onUpdate: x } = e,
            N = null === (t = d.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
            T = l.useRef(!1),
            S = (0, c.e7)([p.Z], () => p.Z.getMessage(d.id), [d.id]),
            j = l.useCallback(() => {
                (null == S ? void 0 : S.isBlockedEdit) ? (0, h.I)(d.id) : u.Z.deleteMessage(d.channel_id, d.id, !0);
            }, [d, S]);
        return (
            l.useLayoutEffect(() => {
                T.current ? null != x && x() : (T.current = !0);
            }, [x, d.content, f, N, m]),
            (0, i.jsxs)('div', {
                id: (0, g.ut)(d),
                className: r()(a, b.markup, {
                    [I.messageContent]: !0,
                    [I.markupRtl]: 'rtl' === o()(d.content),
                    [E.blockedEdit]: null == S ? void 0 : S.isBlockedEdit,
                    [E.blockedSend]: !(null == S ? void 0 : S.isBlockedEdit)
                }),
                children: [
                    null != m ? m : (0, _.L5)(d, f),
                    (null == S ? void 0 : S.isBlockedEdit) &&
                        null != d.timestamp &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                ' ',
                                (0, i.jsx)(C.Z, {
                                    timestamp: d.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, i.jsxs)('span', {
                                        className: I.edited,
                                        children: ['(', v.intl.string(v.t.Z7eEx8), ')']
                                    })
                                })
                            ]
                        }),
                    (0, i.jsx)(Z, {
                        notice: null !== (n = null == S ? void 0 : S.errorMessage) && void 0 !== n ? n : v.intl.string(v.t.zQ69pq),
                        message: d,
                        compact: s,
                        onDismiss: j
                    })
                ]
            })
        );
    }, _.HR);
