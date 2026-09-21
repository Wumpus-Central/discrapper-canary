n.d(t, { A: () => y });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(877413),
    o = n.n(r),
    c = n(17928),
    d = n(231483),
    u = n(834730),
    m = n(148494),
    h = n(228366),
    g = n(93474),
    p = n(975571),
    A = n(521981),
    x = n(164664),
    f = n(860227),
    E = n(438729),
    I = n(606049),
    C = n(652215),
    _ = n(375708),
    v = n(636767),
    N = n(318626),
    j = n(165648);
let T = l.memo(function (e) {
        let { message: t, notice: n, compact: l = !1, onDismiss: s } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: a()(v.K1, { [v.oE]: l }),
                    children: [
                        (0, i.jsx)("div", {
                            className: v.Oz,
                            children: (0, i.jsx)(d.ShieldIcon, { size: "xs", color: "currentColor", className: v.F_ }),
                        }),
                        (0, i.jsx)("div", {
                            className: v.jC,
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "interactive-text-default",
                                children: (0, A.Tz)(n, void 0, t.channel_id),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: a()(v.ah, { [v.oE]: l }),
                    children: (0, i.jsx)(x.A, {
                        message: t,
                        onDeleteMessage: s,
                        children: (0, i.jsx)(u.E, {
                            variant: "text-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: v.C2,
                            children: _.intl.format(_.t["Nd3Gh+"], {
                                helpUrl: p.A.getArticleURL(C.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    S = l.memo(function (e) {
        let { className: t, compact: n, message: s, children: r, content: d, onUpdate: u, hideDismiss: p = !1 } = e,
            A = s.editedTimestamp?.toString(),
            x = l.useRef(!1),
            C = (0, c.bG)([g.A], () => g.A.getMessage(s.id), [s.id]),
            S = l.useCallback(() => {
                if (C?.isBlockedEdit) {
                    var e;
                    ((e = s.id), h.h.dispatch({ type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: e }));
                } else m.A.deleteMessage(s.channel_id, s.id, !0);
            }, [s, C]);
        return (
            l.useLayoutEffect(() => {
                x.current ? null != u && u() : (x.current = !0);
            }, [u, s.content, d, A, r]),
            (0, i.jsxs)("div", {
                id: (0, f.CJ)(s),
                className: a()(t, j.PT, {
                    [N.BK]: !0,
                    [N.nB]: "rtl" === o()(s.content),
                    [v.Dy]: C?.isBlockedEdit,
                    [v.bv]: !C?.isBlockedEdit,
                }),
                children: [
                    r ?? (0, E._A)(s, d),
                    C?.isBlockedEdit &&
                        null != s.timestamp &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                " ",
                                (0, i.jsx)(I.A, {
                                    timestamp: s.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, i.jsxs)("span", {
                                        className: N.oh,
                                        children: ["(", _.intl.string(_.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, i.jsx)(T, {
                        notice: C?.errorMessage ?? _.intl.string(_.t.zQ69pv),
                        message: s,
                        compact: n,
                        onDismiss: p ? void 0 : S,
                    }),
                ],
            })
        );
    }, E.sP);
function y(e, t) {
    let { message: n, compact: l, hideAutomodDismiss: s } = e;
    return (0, i.jsx)(S, { message: n, content: t, compact: l ?? !1, hideDismiss: s });
}
