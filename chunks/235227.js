i.d(s, { A: () => L });
var l = i(477900),
    n = i(582128),
    a = i(503698),
    t = i.n(a),
    d = i(877413),
    r = i.n(d),
    c = i(17928),
    o = i(231483),
    u = i(834730),
    g = i(148494),
    A = i(73153),
    m = i(93474),
    h = i(975571),
    E = i(521981),
    p = i(164664),
    M = i(860227),
    f = i(438729),
    I = i(606049),
    _ = i(652215),
    R = i(105292),
    b = i(636767),
    y = i(318626),
    N = i(165648);
let C = n.memo(function (e) {
        let { message: s, notice: i, compact: n = !1, onDismiss: a } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: t()(b.K1, { [b.oE]: n }),
                    children: [
                        (0, l.jsx)("div", {
                            className: b.Oz,
                            children: (0, l.jsx)(o.ShieldIcon, { size: "xs", color: "currentColor", className: b.F_ }),
                        }),
                        (0, l.jsx)("div", {
                            className: b.jC,
                            children: (0, l.jsx)(u.E, {
                                variant: "body-sm/normal",
                                color: "interactive-text-default",
                                children: (0, E.Tz)(i, void 0, s.channel_id),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: t()(b.ah, { [b.oE]: n }),
                    children: (0, l.jsx)(p.A, {
                        message: s,
                        onDeleteMessage: a,
                        children: (0, l.jsx)(u.E, {
                            variant: "body-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: b.C2,
                            children: R.intl.format(R.t["Nd3Gh+"], {
                                helpUrl: h.A.getArticleURL(_.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    x = n.memo(function (e) {
        let { className: s, compact: i, message: a, children: d, content: o, onUpdate: u, hideDismiss: h = !1 } = e,
            E = a.editedTimestamp?.toString(),
            p = n.useRef(!1),
            _ = (0, c.bG)([m.A], () => m.A.getMessage(a.id), [a.id]),
            x = n.useCallback(() => {
                if (_?.isBlockedEdit) {
                    var e;
                    ((e = a.id), A.h.dispatch({ type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: e }));
                } else g.A.deleteMessage(a.channel_id, a.id, !0);
            }, [a, _]);
        return (
            n.useLayoutEffect(() => {
                p.current ? null != u && u() : (p.current = !0);
            }, [u, a.content, o, E, d]),
            (0, l.jsxs)("div", {
                id: (0, M.CJ)(a),
                className: t()(s, N.PT, {
                    [y.BK]: !0,
                    [y.nB]: "rtl" === r()(a.content),
                    [b.Dy]: _?.isBlockedEdit,
                    [b.bv]: !_?.isBlockedEdit,
                }),
                children: [
                    d ?? (0, f._A)(a, o),
                    _?.isBlockedEdit &&
                        null != a.timestamp &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                " ",
                                (0, l.jsx)(I.A, {
                                    timestamp: a.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, l.jsxs)("span", {
                                        className: y.oh,
                                        children: ["(", R.intl.string(R.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, l.jsx)(C, {
                        notice: _?.errorMessage ?? R.intl.string(R.t.zQ69pv),
                        message: a,
                        compact: i,
                        onDismiss: h ? void 0 : x,
                    }),
                ],
            })
        );
    }, f.sP);
function L(e, s) {
    let { message: i, compact: n, hideAutomodDismiss: a } = e;
    return (0, l.jsx)(x, { message: i, content: s, compact: n ?? !1, hideDismiss: a });
}
