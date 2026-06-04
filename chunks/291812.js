n.d(t, { Ay: () => h, _A: () => A, sP: () => f }), n(938796);
var s = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(877413),
    c = n.n(l),
    m = n(52133),
    u = n(860227),
    o = n(861986),
    d = n(652215),
    p = n(375708),
    g = n(334211),
    E = n(992595),
    T = n(701628);
function A(e, t) {
    return e.type === d.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(d.pr7.SOURCE_MESSAGE_DELETED)
          ? p.intl.string(p.t.JOtgSw)
          : t;
}
function f(e, t) {
    let { message: n } = t,
        { message: s } = e;
    return (
        (0, m.A)(e, t, ["message"]) &&
        n.content === s.content &&
        n.state === s.state &&
        n.flags === s.flags &&
        n.editedTimestamp?.toString() === s.editedTimestamp?.toString()
    );
}
let h = i.memo(function (e) {
    let { className: t, message: n, children: r, content: l, onUpdate: m, contentRef: p, compact: f } = e,
        h = n.state === d.cmJ.SEND_FAILED,
        I = n.state === d.cmJ.SENDING,
        S = n.isCommandType(),
        _ = n.editedTimestamp?.toString(),
        C = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            C.current ? null != m && m() : (C.current = !0);
        }, [m, n.content, l, _, r]),
        (0, s.jsxs)("div", {
            id: (0, u.CJ)(n),
            ref: p,
            className: a()(t, E.PT, {
                [g.BK]: !0,
                [T.t6]: n.hasFlag(d.pr7.IS_GUILD_OFFICIAL),
                [g.Tn]: I && !S,
                [g.nB]: "rtl" === c()(n.content),
                [g.Ix]: h,
                [g.w3]: n.isUnsupported,
            }),
            children: [r ?? A(n, l), (0, s.jsx)(o.A, { message: n, compact: f, location: o.O.WITH_CONTENT })],
        })
    );
}, f);
