n.d(t, { Z: () => j });
var r = n(951288),
    i = n(647438),
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
    _ = n(318713),
    y = n(981631),
    C = n(388032),
    v = n(177119),
    O = n(724913),
    x = n(430864);
let E = i.memo(function (e) {
        let { message: t, notice: n, compact: i = !1, onDismiss: l } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: a()(v.blockedNoticeContainer, { [v.compact]: i }),
                    children: [
                        (0, r.jsx)("div", {
                            className: v.blockedNoticeIcon,
                            children: (0, r.jsx)(u.b7C, {
                                size: "xs",
                                color: "currentColor",
                                className: v.shieldIcon,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: v.blockedNotice,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-normal",
                                children: n,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: a()(v.ephemeralAccessories, { [v.compact]: i }),
                    children: (0, r.jsx)(m.Z, {
                        message: t,
                        onDeleteMessage: l,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-normal",
                            tag: "span",
                            className: v.learnMore,
                            children: C.intl.format(C.t["Nd3Gh+"], {
                                helpUrl: h.Z.getArticleURL(y.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    j = i.memo(function (e) {
        var t, n;
        let { className: l, compact: o, message: u, children: h, content: m, onUpdate: y } = e,
            j = null == (t = u.editedTimestamp) ? void 0 : t.toString(),
            S = i.useRef(!1),
            P = (0, c.e7)([f.Z], () => f.Z.getMessage(u.id), [u.id]),
            I = i.useCallback(() => {
                (null == P ? void 0 : P.isBlockedEdit) ? (0, p.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
            }, [u, P]);
        return (
            i.useLayoutEffect(() => {
                S.current ? null != y && y() : (S.current = !0);
            }, [y, u.content, m, j, h]),
            (0, r.jsxs)("div", {
                id: (0, g.ut)(u),
                className: a()(l, x.markup, {
                    [O.messageContent]: !0,
                    [O.markupRtl]: "rtl" === s()(u.content),
                    [v.blockedEdit]: null == P ? void 0 : P.isBlockedEdit,
                    [v.blockedSend]: !(null == P ? void 0 : P.isBlockedEdit),
                }),
                children: [
                    null != h ? h : (0, b.L5)(u, m),
                    (null == P ? void 0 : P.isBlockedEdit) &&
                        null != u.timestamp &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                " ",
                                (0, r.jsx)(_.Z, {
                                    timestamp: u.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, r.jsxs)("span", {
                                        className: O.edited,
                                        children: ["(", C.intl.string(C.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(E, {
                        notice: null != (n = null == P ? void 0 : P.errorMessage) ? n : C.intl.string(C.t.zQ69pv),
                        message: u,
                        compact: o,
                        onDismiss: I,
                    }),
                ],
            })
        );
    }, b.HR);
