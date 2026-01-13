n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
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
    g = n(937889),
    m = n(530472),
    b = n(453687),
    y = n(930282),
    v = n(318713),
    O = n(981631),
    j = n(388032),
    x = n(402157),
    C = n(549578),
    E = n(960324);
let S = i.memo(function (e) {
        let { message: t, notice: n, compact: i = !1, onDismiss: l } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: a()(x.blockedNoticeContainer, { [x.compact]: i }),
                    children: [
                        (0, r.jsx)("div", {
                            className: x.blockedNoticeIcon,
                            children: (0, r.jsx)(u.b7C, {
                                size: "xs",
                                color: "currentColor",
                                className: x.shieldIcon,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: x.blockedNotice,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-text-default",
                                children: (0, g.k$)(n, void 0, t.channel_id),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: a()(x.ephemeralAccessories, { [x.compact]: i }),
                    children: (0, r.jsx)(m.Z, {
                        message: t,
                        onDeleteMessage: l,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: x.learnMore,
                            children: j.intl.format(j.t["Nd3Gh+"], {
                                helpUrl: h.Z.getArticleURL(O.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    _ = i.memo(function (e) {
        var t, n;
        let { className: l, compact: o, message: u, children: h, content: g, onUpdate: m } = e,
            O = null == (t = u.editedTimestamp) ? void 0 : t.toString(),
            _ = i.useRef(!1),
            I = (0, c.e7)([f.Z], () => f.Z.getMessage(u.id), [u.id]),
            P = i.useCallback(() => {
                (null == I ? void 0 : I.isBlockedEdit) ? (0, p.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
            }, [u, I]);
        return (
            i.useLayoutEffect(() => {
                _.current ? null != m && m() : (_.current = !0);
            }, [m, u.content, g, O, h]),
            (0, r.jsxs)("div", {
                id: (0, b.ut)(u),
                className: a()(l, E.markup, {
                    [C.messageContent]: !0,
                    [C.markupRtl]: "rtl" === s()(u.content),
                    [x.blockedEdit]: null == I ? void 0 : I.isBlockedEdit,
                    [x.blockedSend]: !(null == I ? void 0 : I.isBlockedEdit),
                }),
                children: [
                    null != h ? h : (0, y.L5)(u, g),
                    (null == I ? void 0 : I.isBlockedEdit) &&
                        null != u.timestamp &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                " ",
                                (0, r.jsx)(v.Z, {
                                    timestamp: u.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, r.jsxs)("span", {
                                        className: C.edited,
                                        children: ["(", j.intl.string(j.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(S, {
                        notice: null != (n = null == I ? void 0 : I.errorMessage) ? n : j.intl.string(j.t.zQ69pv),
                        message: u,
                        compact: o,
                        onDismiss: P,
                    }),
                ],
            })
        );
    }, y.HR);
