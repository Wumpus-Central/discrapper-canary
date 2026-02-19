n.d(t, { Ay: () => g, _A: () => h, sP: () => b });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    o = n.n(l),
    r = n(877413),
    s = n.n(r),
    c = n(52133),
    d = n(860227),
    u = n(861986),
    m = n(652215),
    _ = n(985018),
    p = n(679740),
    f = n(206314);
function h(e, t) {
    return e.type === m.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(m.pr7.SOURCE_MESSAGE_DELETED)
          ? _.intl.string(_.t.JOtgSw)
          : t;
}
function b(e, t) {
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
    let { className: t, message: n, children: l, content: r, onUpdate: c, contentRef: _, compact: b } = e,
        g = n.state === m.cmJ.SEND_FAILED,
        A = n.state === m.cmJ.SENDING,
        I = n.isCommandType(),
        y = n.editedTimestamp?.toString(),
        T = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            T.current ? null != c && c() : (T.current = !0);
        }, [c, n.content, r, y, l]),
        (0, a.jsxs)("div", {
            id: (0, d.CJ)(n),
            ref: _,
            className: o()(t, f.PT, {
                [p.BK]: !0,
                [p.Tn]: A && !I,
                [p.nB]: "rtl" === s()(n.content),
                [p.Ix]: g,
                [p.w3]: n.isUnsupported,
            }),
            children: [l ?? h(n, r), (0, a.jsx)(u.A, { message: n, compact: b, location: u.O.WITH_CONTENT })],
        })
    );
}, b);
