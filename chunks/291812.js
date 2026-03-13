n.d(t, { Ay: () => g, _A: () => b, sP: () => h });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(877413),
    o = n.n(l),
    c = n(52133),
    d = n(860227),
    u = n(861986),
    _ = n(652215),
    m = n(985018),
    p = n(222590),
    f = n(830412);
function b(e, t) {
    return e.type === _.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(_.pr7.SOURCE_MESSAGE_DELETED)
          ? m.intl.string(m.t.JOtgSw)
          : t;
}
function h(e, t) {
    let { message: n } = t,
        { message: a } = e;
    return (
        (0, c.A)(e, t, ["message"]) &&
        n.content === a.content &&
        n.state === a.state &&
        n.editedTimestamp?.toString() === a.editedTimestamp?.toString()
    );
}
let g = i.memo(function (e) {
    let { className: t, message: n, children: r, content: l, onUpdate: c, contentRef: m, compact: h } = e,
        g = n.state === _.cmJ.SEND_FAILED,
        A = n.state === _.cmJ.SENDING,
        x = n.isCommandType(),
        T = n.editedTimestamp?.toString(),
        C = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            C.current ? null != c && c() : (C.current = !0);
        }, [c, n.content, l, T, r]),
        (0, a.jsxs)("div", {
            id: (0, d.CJ)(n),
            ref: m,
            className: s()(t, f.PT, {
                [p.BK]: !0,
                [p.Tn]: A && !x,
                [p.nB]: "rtl" === o()(n.content),
                [p.Ix]: g,
                [p.w3]: n.isUnsupported,
            }),
            children: [r ?? b(n, l), (0, a.jsx)(u.A, { message: n, compact: h, location: u.O.WITH_CONTENT })],
        })
    );
}, h);
