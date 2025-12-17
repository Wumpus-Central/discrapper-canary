n.d(t, { Z: () => S });
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(653603),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(904245),
    p = n(232961),
    f = n(223606),
    h = n(63063),
    m = n(530472),
    g = n(453687),
    b = n(930282),
    C = n(318713),
    y = n(981631),
    v = n(388032),
    x = n(402157),
    O = n(549578),
    E = n(960324);
let j = r.memo(function (e) {
        let { message: t, notice: n, compact: r = !1, onDismiss: l } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: a()(x.blockedNoticeContainer, { [x.compact]: r }),
                    children: [
                        (0, i.jsx)("div", {
                            className: x.blockedNoticeIcon,
                            children: (0, i.jsx)(u.b7C, {
                                size: "xs",
                                color: "currentColor",
                                className: x.shieldIcon,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: x.blockedNotice,
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-text-default",
                                children: n,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: a()(x.ephemeralAccessories, { [x.compact]: r }),
                    children: (0, i.jsx)(m.Z, {
                        message: t,
                        onDeleteMessage: l,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: x.learnMore,
                            children: v.intl.format(v.t["Nd3Gh+"], {
                                helpUrl: h.Z.getArticleURL(y.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    S = r.memo(function (e) {
        var t, n;
        let { className: l, compact: o, message: u, children: h, content: m, onUpdate: y } = e,
            S = null == (t = u.editedTimestamp) ? void 0 : t.toString(),
            _ = r.useRef(!1),
            P = (0, c.e7)([f.Z], () => f.Z.getMessage(u.id), [u.id]),
            I = r.useCallback(() => {
                (null == P ? void 0 : P.isBlockedEdit) ? (0, p.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
            }, [u, P]);
        return (
            r.useLayoutEffect(() => {
                _.current ? null != y && y() : (_.current = !0);
            }, [y, u.content, m, S, h]),
            (0, i.jsxs)("div", {
                id: (0, g.ut)(u),
                className: a()(l, E.markup, {
                    [O.messageContent]: !0,
                    [O.markupRtl]: "rtl" === s()(u.content),
                    [x.blockedEdit]: null == P ? void 0 : P.isBlockedEdit,
                    [x.blockedSend]: !(null == P ? void 0 : P.isBlockedEdit),
                }),
                children: [
                    null != h ? h : (0, b.L5)(u, m),
                    (null == P ? void 0 : P.isBlockedEdit) &&
                        null != u.timestamp &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                " ",
                                (0, i.jsx)(C.Z, {
                                    timestamp: u.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, i.jsxs)("span", {
                                        className: O.edited,
                                        children: ["(", v.intl.string(v.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, i.jsx)(j, {
                        notice: null != (n = null == P ? void 0 : P.errorMessage) ? n : v.intl.string(v.t.zQ69pv),
                        message: u,
                        compact: o,
                        onDismiss: I,
                    }),
                ],
            })
        );
    }, b.HR);
