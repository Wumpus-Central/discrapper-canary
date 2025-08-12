n.d(t, { Z: () => A });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(653603),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(904245),
    f = n(232961),
    _ = n(223606),
    p = n(63063),
    h = n(530472),
    m = n(453687),
    g = n(930282),
    E = n(318713),
    b = n(981631),
    y = n(388032),
    O = n(894139),
    v = n(966661),
    I = n(692228);
let T = i.memo(function (e) {
    let { message: t, notice: n, compact: i = !1, onDismiss: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(O.blockedNoticeContainer, { [O.compact]: i }),
                children: [
                    (0, r.jsx)("div", {
                        className: O.blockedNoticeIcon,
                        children: (0, r.jsx)(u.b7C, {
                            size: "xs",
                            color: "currentColor",
                            className: O.shieldIcon,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: O.blockedNotice,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "interactive-normal",
                            children: n,
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: a()(O.ephemeralAccessories, { [O.compact]: i }),
                children: (0, r.jsx)(h.Z, {
                    message: t,
                    onDeleteMessage: o,
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-normal",
                        tag: "span",
                        className: O.learnMore,
                        children: y.intl.format(y.t.Nd3Gh4, {
                            helpUrl: p.Z.getArticleURL(b.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                        }),
                    }),
                }),
            }),
        ],
    });
});
function S(e) {
    var t, n;
    let { className: o, compact: s, message: u, children: p, content: h, onUpdate: b } = e,
        S = null == (t = u.editedTimestamp) ? void 0 : t.toString(),
        A = i.useRef(!1),
        N = (0, c.e7)([_.Z], () => _.Z.getMessage(u.id), [u.id]),
        C = i.useCallback(() => {
            (null == N ? void 0 : N.isBlockedEdit) ? (0, f.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
        }, [u, N]);
    return (
        i.useLayoutEffect(() => {
            A.current ? null != b && b() : (A.current = !0);
        }, [b, u.content, h, S, p]),
        (0, r.jsxs)("div", {
            id: (0, m.ut)(u),
            className: a()(o, I.markup, {
                [v.messageContent]: !0,
                [v.markupRtl]: "rtl" === l()(u.content),
                [O.blockedEdit]: null == N ? void 0 : N.isBlockedEdit,
                [O.blockedSend]: !(null == N ? void 0 : N.isBlockedEdit),
            }),
            children: [
                null != p ? p : (0, g.L5)(u, h),
                (null == N ? void 0 : N.isBlockedEdit) &&
                    null != u.timestamp &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            " ",
                            (0, r.jsx)(E.Z, {
                                timestamp: u.timestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, r.jsxs)("span", {
                                    className: v.edited,
                                    children: ["(", y.intl.string(y.t.Z7eEx8), ")"],
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(T, {
                    notice: null != (n = null == N ? void 0 : N.errorMessage) ? n : y.intl.string(y.t.zQ69pq),
                    message: u,
                    compact: s,
                    onDismiss: C,
                }),
            ],
        })
    );
}
let A = i.memo(S, g.HR);
