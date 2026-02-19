n.d(t, { Ay: () => g, _A: () => b, sP: () => h });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(877413),
    o = n.n(s),
    c = n(52133),
    d = n(860227),
    u = n(861986),
    _ = n(652215),
    m = n(985018),
    p = n(679740),
    f = n(206314);
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
    let { className: t, message: n, children: r, content: s, onUpdate: c, contentRef: m, compact: h } = e,
        g = n.state === _.cmJ.SEND_FAILED,
        A = n.state === _.cmJ.SENDING,
        T = n.isCommandType(),
        x = n.editedTimestamp?.toString(),
        I = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            I.current ? null != c && c() : (I.current = !0);
        }, [c, n.content, s, x, r]),
        (0, a.jsxs)("div", {
            id: (0, d.CJ)(n),
            ref: m,
            className: l()(t, f.PT, {
                [p.BK]: !0,
                [p.Tn]: A && !T,
                [p.nB]: "rtl" === o()(n.content),
                [p.Ix]: g,
                [p.w3]: n.isUnsupported,
            }),
            children: [r ?? b(n, s), (0, a.jsx)(u.A, { message: n, compact: h, location: u.O.WITH_CONTENT })],
        })
    );
}, h);
