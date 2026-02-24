"use strict";
n.d(t, { Ay: () => x, _A: () => A, sP: () => f });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    a = n(877413),
    o = n.n(a),
    u = n(52133),
    c = n(860227),
    d = n(861986),
    m = n(652215),
    h = n(985018),
    g = n(679740),
    p = n(206314);
function A(e, t) {
    return e.type === m.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(m.pr7.SOURCE_MESSAGE_DELETED)
          ? h.intl.string(h.t.JOtgSw)
          : t;
}
function f(e, t) {
    let { message: n } = t,
        { message: l } = e;
    return (
        (0, u.A)(e, t, ["message"]) &&
        n.content === l.content &&
        n.state === l.state &&
        n.editedTimestamp?.toString() === l.editedTimestamp?.toString()
    );
}
let x = s.memo(function (e) {
    let { className: t, message: n, children: i, content: a, onUpdate: u, contentRef: h, compact: f } = e,
        x = n.state === m.cmJ.SEND_FAILED,
        v = n.state === m.cmJ.SENDING,
        N = n.isCommandType(),
        b = n.editedTimestamp?.toString(),
        j = s.useRef(!1);
    return (
        s.useLayoutEffect(() => {
            j.current ? null != u && u() : (j.current = !0);
        }, [u, n.content, a, b, i]),
        (0, l.jsxs)("div", {
            id: (0, c.CJ)(n),
            ref: h,
            className: r()(t, p.PT, {
                [g.BK]: !0,
                [g.Tn]: v && !N,
                [g.nB]: "rtl" === o()(n.content),
                [g.Ix]: x,
                [g.w3]: n.isUnsupported,
            }),
            children: [i ?? A(n, a), (0, l.jsx)(d.A, { message: n, compact: f, location: d.O.WITH_CONTENT })],
        })
    );
}, f);
