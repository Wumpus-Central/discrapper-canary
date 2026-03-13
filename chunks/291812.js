"use strict";
n.d(t, { Ay: () => f, _A: () => A, sP: () => x });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(877413),
    o = n.n(r),
    u = n(52133),
    c = n(860227),
    d = n(861986),
    m = n(652215),
    h = n(985018),
    g = n(222590),
    p = n(830412);
function A(e, t) {
    return e.type === m.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(m.pr7.SOURCE_MESSAGE_DELETED)
          ? h.intl.string(h.t.JOtgSw)
          : t;
}
function x(e, t) {
    let { message: n } = t,
        { message: l } = e;
    return (
        (0, u.A)(e, t, ["message"]) &&
        n.content === l.content &&
        n.state === l.state &&
        n.editedTimestamp?.toString() === l.editedTimestamp?.toString()
    );
}
let f = i.memo(function (e) {
    let { className: t, message: n, children: s, content: r, onUpdate: u, contentRef: h, compact: x } = e,
        f = n.state === m.cmJ.SEND_FAILED,
        v = n.state === m.cmJ.SENDING,
        j = n.isCommandType(),
        N = n.editedTimestamp?.toString(),
        C = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            C.current ? null != u && u() : (C.current = !0);
        }, [u, n.content, r, N, s]),
        (0, l.jsxs)("div", {
            id: (0, c.CJ)(n),
            ref: h,
            className: a()(t, p.PT, {
                [g.BK]: !0,
                [g.Tn]: v && !j,
                [g.nB]: "rtl" === o()(n.content),
                [g.Ix]: f,
                [g.w3]: n.isUnsupported,
            }),
            children: [s ?? A(n, r), (0, l.jsx)(d.A, { message: n, compact: x, location: d.O.WITH_CONTENT })],
        })
    );
}, x);
