n.d(t, { Z: () => E });
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
    h = n(223606),
    f = n(63063),
    m = n(530472),
    g = n(453687),
    b = n(930282),
    y = n(318713),
    C = n(981631),
    v = n(388032),
    _ = n(177119),
    O = n(724913),
    x = n(430864);
let j = r.memo(function (e) {
        let { message: t, notice: n, compact: r = !1, onDismiss: l } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: a()(_.blockedNoticeContainer, { [_.compact]: r }),
                    children: [
                        (0, i.jsx)("div", {
                            className: _.blockedNoticeIcon,
                            children: (0, i.jsx)(u.b7C, {
                                size: "xs",
                                color: "currentColor",
                                className: _.shieldIcon,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: _.blockedNotice,
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-normal",
                                children: n,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: a()(_.ephemeralAccessories, { [_.compact]: r }),
                    children: (0, i.jsx)(m.Z, {
                        message: t,
                        onDeleteMessage: l,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-normal",
                            tag: "span",
                            className: _.learnMore,
                            children: v.intl.format(v.t["Nd3Gh+"], {
                                helpUrl: f.Z.getArticleURL(C.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    E = r.memo(function (e) {
        var t, n;
        let { className: l, compact: o, message: u, children: f, content: m, onUpdate: C } = e,
            E = null == (t = u.editedTimestamp) ? void 0 : t.toString(),
            S = r.useRef(!1),
            P = (0, c.e7)([h.Z], () => h.Z.getMessage(u.id), [u.id]),
            I = r.useCallback(() => {
                (null == P ? void 0 : P.isBlockedEdit) ? (0, p.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
            }, [u, P]);
        return (
            r.useLayoutEffect(() => {
                S.current ? null != C && C() : (S.current = !0);
            }, [C, u.content, m, E, f]),
            (0, i.jsxs)("div", {
                id: (0, g.ut)(u),
                className: a()(l, x.markup, {
                    [O.messageContent]: !0,
                    [O.markupRtl]: "rtl" === s()(u.content),
                    [_.blockedEdit]: null == P ? void 0 : P.isBlockedEdit,
                    [_.blockedSend]: !(null == P ? void 0 : P.isBlockedEdit),
                }),
                children: [
                    null != f ? f : (0, b.L5)(u, m),
                    (null == P ? void 0 : P.isBlockedEdit) &&
                        null != u.timestamp &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                " ",
                                (0, i.jsx)(y.Z, {
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
