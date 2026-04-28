n.d(t, { Ay: () => A, _A: () => g, sP: () => f });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(877413),
    o = n.n(r),
    c = n(52133),
    u = n(860227),
    d = n(861986),
    m = n(652215),
    _ = n(985018),
    h = n(334211),
    p = n(992595);
function g(e, t) {
    return e.type === m.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(m.pr7.SOURCE_MESSAGE_DELETED)
          ? _.intl.string(_.t.JOtgSw)
          : t;
}
function f(e, t) {
    let { message: n } = t,
        { message: a } = e;
    return (
        (0, c.A)(e, t, ["message"]) &&
        n.content === a.content &&
        n.state === a.state &&
        n.editedTimestamp?.toString() === a.editedTimestamp?.toString()
    );
}
let A = i.memo(function (e) {
    let { className: t, message: n, children: l, content: r, onUpdate: c, contentRef: _, compact: f } = e,
        A = n.state === m.cmJ.SEND_FAILED,
        b = n.state === m.cmJ.SENDING,
        I = n.isCommandType(),
        T = n.editedTimestamp?.toString(),
        E = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            E.current ? null != c && c() : (E.current = !0);
        }, [c, n.content, r, T, l]),
        (0, a.jsxs)("div", {
            id: (0, u.CJ)(n),
            ref: _,
            className: s()(t, p.PT, {
                [h.BK]: !0,
                [h.Tn]: b && !I,
                [h.nB]: "rtl" === o()(n.content),
                [h.Ix]: A,
                [h.w3]: n.isUnsupported,
            }),
            children: [l ?? g(n, r), (0, a.jsx)(d.A, { message: n, compact: f, location: d.O.WITH_CONTENT })],
        })
    );
}, f);
