"use strict";
n.d(t, { Ay: () => A, _A: () => m, sP: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(877413),
    l = n.n(o),
    u = n(52133),
    c = n(860227),
    d = n(861986),
    _ = n(652215),
    f = n(985018),
    p = n(679740),
    h = n(206314);
function m(e, t) {
    return e.type === _.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(_.pr7.SOURCE_MESSAGE_DELETED)
          ? f.intl.string(f.t.JOtgSw)
          : t;
}
function g(e) {
    let { className: t, message: n, children: a, content: o, onUpdate: u, contentRef: f, compact: g } = e,
        E = n.state === _.cmJ.SEND_FAILED,
        A = n.state === _.cmJ.SENDING,
        I = n.isCommandType(),
        T = n.editedTimestamp?.toString(),
        y = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            y.current ? null != u && u() : (y.current = !0);
        }, [u, n.content, o, T, a]),
        (0, r.jsxs)("div", {
            id: (0, c.CJ)(n),
            ref: f,
            className: s()(t, h.PT, {
                [p.BK]: !0,
                [p.Tn]: A && !I,
                [p.nB]: "rtl" === l()(n.content),
                [p.Ix]: E,
                [p.w3]: n.isUnsupported,
            }),
            children: [a ?? m(n, o), (0, r.jsx)(d.A, { message: n, compact: g, location: d.O.WITH_CONTENT })],
        })
    );
}
function E(e, t) {
    let { message: n } = t,
        { message: r } = e;
    return (
        (0, u.A)(e, t, ["message"]) &&
        n.content === r.content &&
        n.state === r.state &&
        n.editedTimestamp?.toString() === r.editedTimestamp?.toString()
    );
}
let A = i.memo(g, E);
